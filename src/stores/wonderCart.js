// src/stores/wonderCart.js
import { defineStore } from 'pinia'

// ---- helpers (module scope) -----------------------------------------
const tryParse = (s) => {
  if (typeof s !== 'string') return null
  try { return JSON.parse(s) } catch { return null }
}

const slugId = (name) =>
  ('name:' + String(name).toLowerCase().trim().replace(/\s+/g, '-').slice(0, 60))

const normalizeItem = (input, fallbackId) => {
  // 支持三类：{id,name} | JSON-string | plain string(name)
  if (input && typeof input === 'object') {
    const id = input.id ?? slugId(input.name ?? Date.now())
    return { id, name: String(input.name ?? input.id ?? 'Item') }
  }
  if (typeof input === 'string') {
    const obj = tryParse(input)
    if (obj && (obj.name || obj.id)) {
      const id = obj.id ?? slugId(obj.name ?? Date.now())
      return { id, name: String(obj.name ?? obj.id) }
    }
    // 普通字符串当 name 用
    return { id: fallbackId ?? slugId(input), name: input }
  }
  // 兜底
  return { id: fallbackId ?? String(Date.now()), name: 'Item' }
}

const sameItem = (a, b) => {
  const A = normalizeItem(a)
  const B = normalizeItem(b)
  return (A.id && B.id && A.id === B.id) ||
         A.name.toLowerCase() === B.name.toLowerCase()
}

// ---- store -----------------------------------------------------------
export const useWonderCart = defineStore('wonderCart', {
  state: () => ({
    // modal & toast
    isOpen: false,
    showToast: false,
    toastMsg: '',
    _toastTimer: null,

    // cart items: array of {id, name}  （hydrate 时会统一成对象）
    items: [],

    // form data
    form: {
      name: '',
      email: '',
      phoneCc: '',       // e.g. +971
      phoneNumber: '',   // e.g. 5xxxxxxx
      travelDate: '',
      message: ''
    },

    // simple rate limit memory (timestamps in ms)
    submitTimestamps: [],

  }),

  actions: {
    // ---- modal ----
    open() {
      this.isOpen = true
      document.body.style.overflow = 'hidden'
    },
    close() {
      this.isOpen = false
      document.body.style.overflow = ''
    },

    // ---- cart ops ----
    /**
     * add(nameOrObj, id?)
     * - add('Airport Transfer - SUV')
     * - add({ id:'airport-suv', name:'Airport Transfer - SUV' })
     * - 旧数据若传 JSON 字符串也可：add('{"id":"x","name":"..."}')
     */
    add(nameOrObj, id = null) {
      const next = normalizeItem(nameOrObj, id)
      // 去重（按 id 或忽略大小写的 name）
      const exists = this.items.some((it) => sameItem(it, next))
      if (exists) {
        this.toast('Already in your wonder cart')
        return
      }
      // 新数据统一存对象
      this.items.push({ id: next.id, name: next.name })
      this.toast('This item has been added to your wonder cart')
      this.persist()
    },

    /**
     * remove(key)
     * 兼容传 id、name、原始字符串项、字符串化 JSON
     */
    remove(key) {
      const target = normalizeItem(key)
      this.items = this.items.filter((it) => !sameItem(it, target))
      this.persist()
    },

    clear() {
      this.items = []
      this.persist()
    },

    // ---- toast ----
    toast(msg) {
      this.toastMsg = msg
      this.showToast = true
      clearTimeout(this._toastTimer)
      this._toastTimer = setTimeout(() => (this.showToast = false), 4000)
    },

    // ---- persistence ----
    hydrate() {
      try {
        const raw = localStorage.getItem('ww_cart_v1')
        if (raw) {
          const saved = JSON.parse(raw)
          if (Array.isArray(saved.items)) {
            // 旧版本里可能是字符串/JSON 字符串；我统一规范化为对象
            this.items = saved.items.map((it) => {
              const n = normalizeItem(it)
              return { id: n.id, name: n.name }
            })
          }
          if (saved.form) this.form = { ...this.form, ...saved.form }
        }
      } catch {
        // ignore
      }
    },
    persist() {
      localStorage.setItem(
        'ww_cart_v1',
        JSON.stringify({ items: this.items, form: this.form })
      )
    },

    // ---- rate limit ----
    // <=2 per 5s, <=3 per 60s, <=5 per 1h
    canSubmitNow() {
      const now = Date.now()
      const within = (ms) => this.submitTimestamps.filter(t => now - t <= ms).length
      if (within(5000)   >= 2) return false
      if (within(60000)  >= 3) return false
      if (within(3600000)>= 5) return false
      return true
    },
    markSubmitted() {
      this.submitTimestamps.push(Date.now())
    }
  }
})
