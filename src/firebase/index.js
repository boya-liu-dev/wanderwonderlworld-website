// src/firebase/index.js
import { initializeApp, getApps } from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, collection,
  addDoc, onSnapshot, serverTimestamp, query, orderBy, limit
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from 'firebase/auth'

// ---------- Firebase config ----------
const firebaseConfig = {
  apiKey: 'AIzaSyARLC8IjRmP6Ql8n0ANWIoEJnh6CGr464Y',
  authDomain: 'wanderwonderworld-dubai.firebaseapp.com',
  projectId: 'wanderwonderworld-dubai',
  storageBucket: 'wanderwonderworld-dubai.appspot.com',
  messagingSenderId: '876940740226',
  appId: '1:876940740226:web:6f41fda5138417445e169b',
  measurementId: 'G-S72DXQQ3KP'
}

// 单例初始化，避免重复 init
export const firebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)

// ---------- App Check (reCAPTCHA v3) ----------
try {
  if (typeof window !== 'undefined') {
    if (import.meta.env.DEV) {
      // 本地开发允许 Debug Token
      // 控制台会提示 token，把它加入 Firebase Console > App Check > Manage debug tokens
      // @ts-ignore
      self.FIREBASE_APPCHECK_DEBUG_TOKEN = true
    }
    initializeAppCheck(firebaseApp, {
      // 用你在 reCAPTCHA v3 里拿到的 site key
      provider: new ReCaptchaV3Provider('6Lex4scrAAAAADOC7a-lD9DCgKuDWU3iWvQK7KiI'),
      isTokenAutoRefreshEnabled: true
    })
  }
} catch (e) {
  // 避免在 SSR 或早期浏览器报错影响页面
  console.warn('AppCheck init skipped:', e)
}

// ---------- Core services ----------
export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
export const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

// ---------- Auth ----------
export const signInWithGoogle = () => signInWithPopup(auth, provider)
export const signOutNow     = () => signOut(auth)
export const watchAuth      = (cb) => onAuthStateChanged(auth, cb)

// ---------- Site content ----------
const contentRef = doc(db, 'site', 'content')
export async function loadContent() {
  const snap = await getDoc(contentRef)
  return snap.exists() ? snap.data() : {}
}
export async function saveContent(updates) {
  await setDoc(contentRef, { ...updates, updatedAt: serverTimestamp() }, { merge: true })
}

// ---------- Image upload ----------
export async function uploadImage(file, path = `images/site/${file.name}`) {
  const objectRef = ref(storage, path)
  await uploadBytes(objectRef, file)
  return getDownloadURL(objectRef)
}

// ---------- News & Offers ----------
const newsCol = collection(db, 'news')
export function watchNews(cb, { size = 100 } = {}) {
  const q = query(newsCol, orderBy('createdAt', 'desc'), limit(size))
  return onSnapshot(q, snap => {
    const items = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(x => !x.deleted)
    cb(items)
  })
}
export async function addNews(item) {
  return addDoc(newsCol, { ...item, createdAt: serverTimestamp() })
}
export async function updateNews(id, patch) {
  return updateDoc(doc(db, 'news', id), { ...patch, updatedAt: serverTimestamp() })
}
export async function deleteNews(id) {
  return updateDoc(doc(db, 'news', id), { deleted: true, deletedAt: serverTimestamp() })
}

// ---------- Enquiries ----------
const enqCol = collection(db, 'enquiries')
export async function addEnquiry(payload) {
  return addDoc(enqCol, { ...payload, status: 'new', createdAt: serverTimestamp() })
}

// ---------- Trigger Email (Firestore extension) ----------
export async function queueMail({ to, subject, html, text, replyTo }) {
  const mail = {
    to: Array.isArray(to) ? to : [to],
    message: { subject: subject || '' }
  }
  if (html) mail.message.html = html
  if (text) mail.message.text = text
  // 扩展要求 replyTo 为字符串；给了数组则取第一个
  if (replyTo) mail.replyTo = Array.isArray(replyTo) ? String(replyTo[0]) : String(replyTo)
  return addDoc(collection(db, 'mail'), mail)
}
