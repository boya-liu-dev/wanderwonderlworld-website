<!-- src/views/Admin.vue -->
<template>
  <div class="admin-wrap">
    <!-- 顶栏 -->
    <header class="admin-top">
      <h2>Admin — 站点内容管理</h2>
      <div class="spacer" />
      <template v-if="loggedIn">
        <span class="u">{{ userEmail }}</span>
        <button class="btn" @click="onSignOut">退出登录</button>
      </template>
    </header>

    <!-- 未登录：Google 登录 + 备用口令 -->
    <section v-if="!loggedIn" class="card login">
      <h3>登录后台</h3>
      <div class="actions">
        <button class="btn primary" @click="onGoogleSignIn">使用 Google 登录</button>
      </div>
      
      
      <p class="hint sm mt8">只有管理员有权限操作。</p>
    </section>

    <!-- 扫描 / 保存 / 下载 -->
    <section v-else class="card">
      <h3>一键扫描页面 → 生成 / 保存内容 JSON</h3>
      <p class="hint">
        支持两种扫描方式：<br/>
        1)「扫描当前页面」：采集当前路由已渲染 DOM 中带有
        <code>data-c</code> / <code>data-c-html</code> /
        <code>data-c-src</code> / <code>data-c-num</code>（含 <code>@id</code>）的元素。<br/>
        2)「扫描全站」：通过隐藏 iframe 逐个加载路由并采集，自动合并成一份 JSON。
      </p>
      <div class="actions">
        <button class="btn" @click="doScanCurrent">扫描当前页面</button>
        <button class="btn" :disabled="scanning" @click="doScanAll">
          {{ scanning ? `扫描中 ${scanProgress}` : '扫描全站' }}
        </button>
        <button class="btn" :disabled="!snapshot || saving" @click="saveToFirestore">
          {{ saving ? '保存中…' : '保存到 Firestore（site/content）' }}
        </button>
        <button class="btn" :disabled="!snapshot" @click="downloadJSON">下载 JSON</button>
      </div>
      <pre v-if="snapshot" class="preview">{{ pretty }}</pre>

      <!-- 隐藏 iframe，用于“扫描全站” -->
      <iframe ref="scanFrame" class="scan-frame" style="display:none;" />
    </section>

    <!-- 图片上传：指定键名 + 文件 -->
    <section v-if="loggedIn" class="card">
      <h3>图片上传（写入 site/content 任意键）</h3>
      <div class="img-uploader">
        <input v-model.trim="imgKey" class="key" placeholder="例如 home.hero.image 或 transfers.banner" />
        <input type="file" accept="image/*" @change="onPick" />
        <button class="btn" :disabled="!picked" @click="uploadAndSave">上传并写入</button>
      </div>
      <p class="hint sm">上传到 Firebase Storage，写入下载 URL 到 Firestore 对应键。</p>
      <div v-if="lastImgUrl" class="img-preview">
        <div class="img-title">最新上传 URL：</div>
        <a :href="lastImgUrl" target="_blank" rel="noopener">{{ lastImgUrl }}</a>
        <img :src="lastImgUrl" alt="" />
      </div>
    </section>

    <!-- News & Offers 管理 -->
    <section v-if="loggedIn" class="card">
      <h3>公告（News & Offers）</h3>
      <p class="hint sm">编辑后点「保存」；新增项先填写再点「新增」。</p>

      <div class="news-list">
        <div class="news-row head">
          <div class="c short">置顶</div>
          <div class="c short">样式</div>
          <div class="c grow">标题</div>
          <div class="c grow">正文</div>
          <div class="c grow">按钮文案</div>
          <div class="c grow">按钮链接</div>
          <div class="c mid">开始</div>
          <div class="c mid">结束</div>
          <div class="c short">优先</div>
          <div class="c ops">操作</div>
        </div>

        <div class="news-row" v-for="n in news" :key="n._id">
          <div class="c short"><input type="checkbox" v-model="n.pin" /></div>
          <div class="c short">
            <select v-model="n.variant">
              <option value="info">info</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="danger">danger</option>
            </select>
          </div>
          <div class="c grow"><input v-model="n.title" /></div>
          <div class="c grow"><input v-model="n.body" /></div>
          <div class="c grow"><input v-model="n.ctaText" /></div>
          <div class="c grow"><input v-model="n.ctaLink" placeholder="/xxx 或 https://..." /></div>
          <div class="c mid"><input v-model="n.startAt" placeholder="YYYY-MM-DD" /></div>
          <div class="c mid"><input v-model="n.endAt" placeholder="YYYY-MM-DD" /></div>
          <div class="c short"><input type="number" v-model.number="n.priority" /></div>
          <div class="c ops">
            <button class="btn small" @click="saveNews(n)">保存</button>
            <button class="btn small" @click="delNews(n)">删除</button>
          </div>
        </div>

        <div class="news-row add">
          <div class="c short"><input type="checkbox" v-model="draft.pin" /></div>
          <div class="c short">
            <select v-model="draft.variant">
              <option value="info">info</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="danger">danger</option>
            </select>
          </div>
          <div class="c grow"><input v-model="draft.title" placeholder="标题" /></div>
          <div class="c grow"><input v-model="draft.body" placeholder="正文..." /></div>
          <div class="c grow"><input v-model="draft.ctaText" placeholder="按钮文案" /></div>
          <div class="c grow"><input v-model="draft.ctaLink" placeholder="/path 或 https://..." /></div>
          <div class="c mid"><input v-model="draft.startAt" placeholder="YYYY-MM-DD" /></div>
          <div class="c mid"><input v-model="draft.endAt" placeholder="YYYY-MM-DD" /></div>
          <div class="c short"><input type="number" v-model.number="draft.priority" placeholder="0" /></div>
          <div class="c ops">
            <button class="btn small primary" @click="addOneNews">新增</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import router from '@/router'
import {
  saveContent, uploadImage,
  watchNews, addNews, updateNews, deleteNews,
  watchAuth, signInWithGoogle, signOutNow
} from '@/firebase'
import { snapshotContent, invalidateContent, applyContent } from '@/plugins/autocontent'

/* ===== 登录状态（Google 优先，口令兜底） ===== */
const TOKEN_KEY = 'admin_local_fallback_ok'
const FALLBACK_USER = 'Boya'
const FALLBACK_SECRET = 'w@w%dy#k202&5'   // 不显示在界面，纯本地兜底

const user = ref(null)
watchAuth(u => { user.value = u })

const fallbackOk  = ref(localStorage.getItem(TOKEN_KEY) === '1')
const loggedIn    = computed(() => !!user.value || fallbackOk.value)
const userEmail   = computed(() => user.value?.email || `${FALLBACK_USER}（口令）`)
const showFallback = ref(false)
const fallback    = ref('')

async function onGoogleSignIn(){ try{ await signInWithGoogle() }catch(e){ console.error(e); alert('登录失败，请重试') } }
function onFallbackLogin(){
  if (fallback.value === FALLBACK_SECRET) {
    localStorage.setItem(TOKEN_KEY,'1'); fallbackOk.value = true
  } else alert('口令不正确')
}
async function onSignOut(){
  try{ await signOutNow() }finally{
    localStorage.removeItem(TOKEN_KEY); fallbackOk.value = false
  }
}

/* ===== 扫描 / 保存 / 下载 ===== */
const snapshot = ref(null)
const pretty   = computed(() => JSON.stringify(snapshot.value || {}, null, 2))
const saving   = ref(false)

/* 深合并 */
function deepMerge(t, s){
  for (const k in s){
    if (s[k] && typeof s[k]==='object' && !Array.isArray(s[k])){
      if(!t[k] || typeof t[k]!=='object') t[k] = {}
      deepMerge(t[k], s[k])
    }else{
      t[k] = s[k]
    }
  }
  return t
}

function doScanCurrent(){
  snapshot.value = snapshotContent(document)
  setTimeout(()=>window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'}),0)
}

/* 扫描全站：通过隐藏 iframe 逐个载入路径并采集 */
const scanFrame = ref(null)
const scanning  = ref(false)
const scanProgress = ref('')

function getPathsToScan(){
  // 优先从路由表自动获取
  const auto = router.getRoutes()
    .map(r => r.path)
    .filter(p =>
      p && p !== '/admin' && p !== '/newsboard' &&
      !p.includes(':') && !p.startsWith('/404')
    )
  // 兜底：可在此补充你站点的其它路径（如果有静态别名）
  const fallback = [
    // '/', '/private-transfers', '/tour-package', '/desert-safari', '/city-tour', '/dhow-cruise'
  ]
  // 去重
  return Array.from(new Set([...auto, ...fallback]))
}

function loadAndSnap(path){
  return new Promise((resolve) => {
    const frame = scanFrame.value
    const done = () => {
      try{
        const doc = frame.contentDocument || frame.contentWindow?.document
        const snap = snapshotContent(doc)
        resolve(snap || {})
      }catch(e){
        console.warn('scan failed for', path, e)
        resolve({})
      }
    }
    const onload = () => {
      // 给 SPA 一点时间完成渲染
      setTimeout(done, 200)
      frame.removeEventListener('load', onload)
    }
    frame.addEventListener('load', onload)
    frame.src = path.startsWith('http') ? path : `${location.origin}${path}`
  })
}

async function doScanAll(){
  if (scanning.value) return
  scanning.value = true
  const all = {}
  const paths = getPathsToScan()
  for (let i=0;i<paths.length;i++){
    scanProgress.value = `${i+1}/${paths.length}：${paths[i]}`
    // eslint-disable-next-line no-await-in-loop
    const part = await loadAndSnap(paths[i])
    deepMerge(all, part)
  }
  snapshot.value = all
  scanning.value = false
  scanProgress.value = ''
  setTimeout(()=>window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'}),0)
}

async function saveToFirestore(){
  if (!snapshot.value) return
  saving.value = true
  try{
    await saveContent(snapshot.value)   // 需要 Google 登录账户命中 isAdmin()
    invalidateContent()
    await applyContent(document)
    alert('已保存到 Firestore（site/content）并立即生效。')
  }catch(e){
    console.error(e)
    alert('保存失败，请检查控制台与 Firestore 规则。')
  }finally{
    saving.value = false
  }
}

function downloadJSON(){
  const blob = new Blob([JSON.stringify(snapshot.value || {}, null, 2)], { type:'application/json' })
  const url  = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = 'site-content-snapshot.json'; a.click()
  URL.revokeObjectURL(url)
}

/* ===== 图片上传 ===== */
const imgKey = ref('')
const picked = ref(null)
const lastImgUrl = ref('')

function onPick(e){ picked.value = e.target.files?.[0] || null }
async function uploadAndSave(){
  if (!imgKey.value || !picked.value) return
  try{
    const path = `images/site/${Date.now()}_${picked.value.name}`
    const url  = await uploadImage(picked.value, path)
    lastImgUrl.value = url
    await saveContent({ [imgKey.value]: url })
    invalidateContent(); await applyContent(document)
    alert(`已写入键：${imgKey.value}`)
    picked.value = null
  }catch(e){
    console.error(e); alert('上传或保存失败')
  }
}

/* ===== News & Offers ===== */
const news = ref([])
const draft = ref({ pin:false, variant:'info', title:'', body:'', ctaText:'', ctaLink:'', startAt:'', endAt:'', priority:0 })
let unsub = null

onMounted(()=>{
  unsub = watchNews((items)=>{
    const list = (items || []).map(raw => ({
      _id: raw.id, pin: !!raw.pin, variant: raw.variant || 'info',
      title: raw.title || '', body: raw.body || '',
      ctaText: raw.ctaText || '', ctaLink: raw.ctaLink || '',
      startAt: dateOnly(raw.startAt), endAt: dateOnly(raw.endAt),
      priority: Number(raw.priority || 0)
    }))
    news.value = list.sort((a,b)=>{
      if ((b.pin?1:0)!==(a.pin?1:0)) return (b.pin?1:0)-(a.pin?1:0)
      if (b.priority!==a.priority)     return b.priority-a.priority
      return (b.startAt||'').localeCompare(a.startAt||'')
    })
  })
})
onBeforeUnmount(()=>{ unsub && unsub() })

function dateOnly(v){
  const d = v?.toDate ? v.toDate() : (typeof v === 'string' ? new Date(v) : v)
  if (!(d instanceof Date) || isNaN(d.getTime())) return ''
  return d.toISOString().slice(0,10)
}

async function addOneNews(){
  const item = { ...draft.value }
  if (!item.title) return alert('请填写标题')
  try{
    await addNews(item)
    draft.value = { pin:false, variant:'info', title:'', body:'', ctaText:'', ctaLink:'', startAt:'', endAt:'', priority:0 }
  }catch(e){ console.error(e); alert('新增失败') }
}
async function saveNews(n){
  try{
    await updateNews(n._id,{
      pin: !!n.pin, variant:n.variant||'info', title:n.title||'', body:n.body||'',
      ctaText:n.ctaText||'', ctaLink:n.ctaLink||'',
      startAt: n.startAt ? new Date(n.startAt) : null,
      endAt:   n.endAt   ? new Date(n.endAt)   : null,
      priority: Number(n.priority || 0)
    })
    alert('已保存')
  }catch(e){ console.error(e); alert('保存失败') }
}
async function delNews(n){
  if (!confirm('确定删除该条公告？')) return
  try{ await deleteNews(n._id) }catch(e){ console.error(e); alert('删除失败') }
}
</script>

<style scoped>
.admin-wrap{max-width:1100px;margin:24px auto;padding:0 16px}
.admin-top{display:flex;align-items:center;gap:12px}
.spacer{flex:1}
.u{font-weight:700}
.btn{border:1px solid #ddd;background:#f8f8f8;border-radius:8px;padding:8px 12px;cursor:pointer}
.btn.primary{background:#c3aa0c;color:#fff;border-color:#c3aa0c}
.btn.small{padding:6px 10px;font-size:.9rem}
.actions{display:flex;gap:10px;margin:10px 0}
.card{background:#fff;border:1px solid #eee;border-radius:12px;padding:16px;margin-top:16px}
.hint{color:#666}.hint.sm{font-size:.9rem}
.preview{background:#f6f8fa;padding:12px;border-radius:8px;max-height:50vh;overflow:auto}
.login .grid{display:grid;grid-template-columns:120px 1fr;gap:10px 14px}
.mt8{margin-top:8px}
.img-uploader{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.img-uploader .key{min-width:280px}
.img-preview{margin-top:8px}
.img-preview .img-title{font-weight:700;margin-bottom:6px}
.img-preview img{display:block;max-width:360px;border:1px solid #eee;border-radius:8px;margin-top:8px}
.news-list{margin-top:8px;border:1px solid #eee;border-radius:10px;overflow:hidden}
.news-row{display:grid;grid-template-columns:60px 80px 1fr 1fr 1fr 1fr 140px 140px 70px 180px;gap:6px;align-items:center;padding:8px;border-top:1px solid #f1f1f1}
.news-row.head{background:#fafafa;font-weight:700;border-top:none}
.news-row.add{background:#fcf9e6}
.news-row .c{padding:0 4px}
.news-row .grow input,.news-row .mid input{width:100%}
.news-row .ops{display:flex;gap:8px}
@media (max-width:960px){
  .news-row{grid-template-columns:40px 70px 1fr 1fr;grid-auto-rows:auto}
  .news-row .mid,.news-row .short,.news-row .ops,.news-row .grow{grid-column:span 2}
}
</style>
