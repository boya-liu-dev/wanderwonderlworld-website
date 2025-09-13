<template>
  <div v-if="activeNews.length" class="news-card">
    <div class="news-header">
      <strong>News & Offers</strong>
      <div class="header-actions">
        <button class="link" @click="collapsed = !collapsed">
          {{ collapsed ? 'Show' : 'Collapse' }}
        </button>
      </div>
    </div>

    <transition name="nb-fade">
      <div v-show="!collapsed">
        <div
          v-for="item in visible"
          :key="item.id"
          class="news-item"
          :class="`v-${item.variant || 'info'}`"
        >
          <div class="news-item-head">
            <div class="title">
              <span class="badge" v-if="item.pin">PINNED</span>
              {{ item.title }}
            </div>
            <button class="close-one" @click="dismiss(item.id)" aria-label="dismiss">×</button>
          </div>

          <p class="body" v-if="item.body">{{ item.body }}</p>

          <div class="actions" v-if="item.ctaLink || item.ctaText">
            <router-link v-if="isInternal(item.ctaLink)" :to="item.ctaLink" class="btn">
              {{ item.ctaText || 'Learn more' }}
            </router-link>
            <a v-else-if="item.ctaLink" :href="item.ctaLink" target="_blank" rel="noopener" class="btn">
              {{ item.ctaText || 'Learn more' }}
            </a>
          </div>
        </div>

        <div v-if="activeNews.length > limit" class="more">
          <button class="link" @click="expanded = !expanded">
            {{ expanded ? 'Show less' : `Show all (${activeNews.length})` }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fallbackNews from '@/data/news.json'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'

export default {
  name: 'NewsBoard',
  data() {
    return {
      raw: [],              // Firestore 加载到的；失败则用本地
      limit: 2,
      expanded: false,
      collapsed: JSON.parse(localStorage.getItem('news_collapsed') || 'false')
    }
  },
  computed: {
    now() { return new Date() },
    filtered() {
      return this.raw
        .filter(n => this.inWindow(n))
        .filter(n => !this.isDismissed(n.id))
    },
    activeNews() {
      return [...this.filtered].sort((a, b) => {
        if ((b.pin?1:0) !== (a.pin?1:0)) return (b.pin?1:0) - (a.pin?1:0)
        const pa = b.priority ?? 0, pb = a.priority ?? 0
        if (pa !== pb) return pa - pb
        return new Date(b.startAt || 0) - new Date(a.startAt || 0)
      })
    },
    visible() {
      return this.expanded ? this.activeNews : this.activeNews.slice(0, this.limit)
    }
  },
  watch: {
    collapsed(v) {
      localStorage.setItem('news_collapsed', JSON.stringify(v))
    }
  },
  methods: {
    inWindow(n) {
      const start = n.startAt ? new Date(n.startAt) : null
      const end   = n.endAt   ? new Date(n.endAt)   : null
      if (start && this.now < start) return false
      if (end && this.now > end) return false
      return true
    },
    isDismissed(id) {
      const k = `news_dismiss_${id}`
      const v = localStorage.getItem(k)
      if (!v) return false
      try {
        const { until } = JSON.parse(v)
        return until && Date.now() < until
      } catch { return false }
    },
    dismiss(id, days = 7) {
      const k = `news_dismiss_${id}`
      const until = Date.now() + days * 86400000
      localStorage.setItem(k, JSON.stringify({ until }))
      const i = this.raw.findIndex(x => x.id === id)
      if (i > -1) this.raw.splice(i, 1)
    },
    isInternal(link) {
      return typeof link === 'string' && link.startsWith('/')
    },
    normalizeDoc(id, d) {
      const asDate = (v) => v?.toDate ? v.toDate().toISOString().slice(0,10) : (v || '')
      return {
        id,
        title: d.title || '',
        body: d.body || '',
        ctaText: d.ctaText || '',
        ctaLink: d.ctaLink || '',
        pin: !!d.pin,
        variant: d.variant || 'info',
        priority: Number(d.priority || 0),
        startAt: asDate(d.startAt),
        endAt: asDate(d.endAt)
      }
    }
  },
  async mounted() {
    try {
      const snap = await getDocs(collection(db, 'news'))
      const list = []
      snap.forEach(doc => list.push(this.normalizeDoc(doc.id, doc.data() || {})))
      this.raw = list
      if (!list.length) this.raw = (fallbackNews || []).map((x, i) => ({ id: 'local_'+i, ...x }))
    } catch(e) {
      console.warn('news fallback:', e)
      this.raw = (fallbackNews || []).map((x, i) => ({ id: 'local_'+i, ...x }))
    }
  }
}
</script>

<style scoped>
.news-card{ background:#f8f8f8; border-radius:12px; padding:16px; box-shadow:0 2px 8px rgba(0,0,0,.08); max-width:1000px; margin:30px auto; }
.news-header{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.header-actions{ display:flex; gap:8px; align-items:center; }
.link{ background:none; border:none; color:#1f6feb; cursor:pointer; font-weight:600; }

.news-item{ border:1px solid #e6e6e6; border-radius:10px; padding:12px; margin-top:12px; background:#fff; }
.news-item-head{ display:flex; justify-content:space-between; align-items:center; gap:8px; }
.title{ font-weight:700; display:flex; align-items:center; gap:8px; }
.badge{ font-size:12px; background:#fde68a; color:#92400e; padding:8px 6px; border-radius:999px; }
.close-one{ border:none; background:#f2f2f2; width:28px; height:28px; border-radius:20%; cursor:pointer; }
.body{ margin:8px 0 6px; color:#444; line-height:1.55; }
.actions .btn{ display:inline-block; background:#c3aa0c; color:#fff; padding:8px 12px; border-radius:8px; text-decoration:none; font-weight:600; }
.more{ margin-top:10px; text-align:center; }

.v-info   { border-color:#dbeafe; }
.v-success{ border-color:#dcfce7; }
.v-warning{ border-color:#fef3c7; }
.v-danger { border-color:#fee2e2; }

.nb-fade-enter-active, .nb-fade-leave-active { transition: opacity .18s ease; }
.nb-fade-enter-from, .nb-fade-leave-to { opacity: 0; }
</style>
