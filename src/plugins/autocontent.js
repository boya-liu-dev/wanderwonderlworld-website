// src/plugins/autocontent.js
import { loadContent } from '@/firebase'

let CACHE = null

/* ---------- 小工具 ---------- */
function get(obj, path) {
  return path.split('.').reduce((o, k) => (o && k in o ? o[k] : undefined), obj)
}
function setDeep(obj, path, value) {
  const segs = String(path).split('.').filter(Boolean)
  let cur = obj
  for (let i = 0; i < segs.length - 1; i++) {
    const k = segs[i]
    if (!cur[k] || typeof cur[k] !== 'object') cur[k] = {}
    cur = cur[k]
  }
  cur[segs[segs.length - 1]] = value
}
function fmt(val, f) {
  if (f && String(f).toLowerCase().startsWith('price-')) {
    const cur = f.split('-')[1]?.toUpperCase() || 'AED'
    const n = Number(val)
    return Number.isFinite(n) ? `${cur} ${n.toFixed(0)}` : String(val)
  }
  return String(val)
}
function parseNumber(text) {
  const m = String(text ?? '').replace(/,/g, '').match(/-?\d+(\.\d+)?/)
  return m ? Number(m[0]) : NaN
}

/* ---------- 缓存 & 拉取 ---------- */
export async function ensureContent() {
  if (CACHE) return CACHE
  try {
    CACHE = await loadContent()         // 只请求一次
  } catch {
    CACHE = {}                          // 失败亦返回空
  }
  return CACHE
}
export function invalidateContent() { CACHE = null }

/* ---------- 覆盖渲染（你原有的） ---------- */
/**
 * 在 root(默认 document) 下，把带有 data-* 的元素替换成 Firestore 的值
 * - data-c        => 纯文本替换（textContent）
 * - data-c-html   => innerHTML
 * - data-c-src    => <img src> / <a href> 等
 * - data-c-num    => 数字/金额，支持 data-format="price-AED"
 * 语法糖：data-c="@id" / data-c-src="@id" / data-c-num="@id" ：用元素 id 当作 key
 */
export async function applyContent(root = document) {
  const c = await ensureContent()
  const $ = (sel) => Array.from(root.querySelectorAll(sel))

  // text
  $('[data-c]').forEach((el) => {
    const key = el.dataset.c === '@id' ? el.id : el.dataset.c
    const v = get(c, key)
    if (v !== undefined && v !== null) el.textContent = String(v)
  })

  // html
  $('[data-c-html]').forEach((el) => {
    const key = el.dataset.cHtml === '@id' ? el.id : el.dataset.cHtml
    const v = get(c, key)
    if (v !== undefined && v !== null) el.innerHTML = String(v)
  })

  // src/href
  $('[data-c-src]').forEach((el) => {
    const key = el.dataset.cSrc === '@id' ? el.id : el.dataset.cSrc
    const v = get(c, key)
    if (v) {
      if (el.tagName === 'A') el.setAttribute('href', v)
      else el.setAttribute('src', v)
    }
  })

  // number / price with format
  $('[data-c-num]').forEach((el) => {
    const key = el.dataset.cNum === '@id' ? el.id : el.dataset.cNum
    const v = get(c, key)
    if (v !== undefined && v !== null) {
      const f = el.dataset.format || ''
      el.textContent = fmt(v, f)
    }
  })
}

/* ---------- 新增：反向扫描 → 生成 JSON ---------- */
/**
 * 从 DOM 扫描所有 data-c* 元素，导出一份 JSON（用于一次性入库）
 */
export function snapshotContent(root = document) {
  const result = {}
  const $ = (sel) => Array.from(root.querySelectorAll(sel))

  // 纯文本
  $('[data-c]').forEach((el) => {
    const key = el.dataset.c === '@id' ? el.id : el.dataset.c
    if (!key) return
    const val = (el.textContent || '').trim()
    if (val !== '') setDeep(result, key, val)
  })

  // 富文本
  $('[data-c-html]').forEach((el) => {
    const key = el.dataset.cHtml === '@id' ? el.id : el.dataset.cHtml
    if (!key) return
    const val = (el.innerHTML || '').trim()
    if (val !== '') setDeep(result, key, val)
  })

  // 图片/链接
  $('[data-c-src]').forEach((el) => {
    const key = el.dataset.cSrc === '@id' ? el.id : el.dataset.cSrc
    if (!key) return
    const isA = el.tagName === 'A'
    const val = el.getAttribute(isA ? 'href' : 'src')
    if (val) setDeep(result, key, val)
  })

  // 数字/金额：尽量抽成“数字原值”，前端再用 data-format 渲染货币
  $('[data-c-num]').forEach((el) => {
    const key = el.dataset.cNum === '@id' ? el.id : el.dataset.cNum
    if (!key) return
    const txt = (el.textContent || '').trim()
    const n = parseNumber(txt)
    setDeep(result, key, Number.isFinite(n) ? n : txt)
  })

  return result
}
