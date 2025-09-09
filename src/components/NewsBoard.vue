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
        <!-- 置顶优先显示 -->
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
import news from '@/data/news.json'

export default {
  name: 'NewsBoard',
  data() {
    return {
      raw: news,        // [{id,title,body,ctaText,ctaLink,startAt,endAt,pin,variant,priority}]
      limit: 2,         // 默认先显示 2 条
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
      // 置顶 > priority > 时间新->旧
      return [...this.filtered].sort((a, b) => {
        if ((b.pin?1:0) !== (a.pin?1:0)) return (b.pin?1:0) - (a.pin?1:0)
        const pa = a.priority ?? 0, pb = b.priority ?? 0
        if (pb !== pa) return pb - pa
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
      } catch {
        return false
      }
    },
    dismiss(id, days = 7) {
      const k = `news_dismiss_${id}`
      const until = Date.now() + days * 24 * 60 * 60 * 1000
      localStorage.setItem(k, JSON.stringify({ until }))
      const i = this.raw.findIndex(x => x.id === id)
      if (i > -1) this.raw.splice(i, 1)
    },
    isInternal(link) {
      return typeof link === 'string' && link.startsWith('/')
    },
    // 可选：一键恢复所有被隐藏的公告（访问 ?resetNews=1）
    resetNews() {
      Object.keys(localStorage)
        .filter(k => k.startsWith('news_dismiss_'))
        .forEach(k => localStorage.removeItem(k))
      this.raw = [...this.raw]
    }
  },
  mounted() {
    if (new URLSearchParams(window.location.search).has('resetNews')) {
      this.resetNews()
    }
  }
}
</script>

<style scoped>
.news-card{
  background:#f8f8f8;
  border-radius:12px;
  padding:16px;
  box-shadow:0 2px 8px rgba(0,0,0,.08);
  max-width:1000px;
  margin:30px auto;
}
.news-header{
  display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;
}
.header-actions{ display:flex; gap:8px; align-items:center; }
.link{ background:none; border:none; color:#1f6feb; cursor:pointer; font-weight:600; }

.news-item{
  border:1px solid #e6e6e6;
  border-radius:10px;
  padding:12px;
  margin-top:12px;
  background:#fff;
}
.news-item-head{ display:flex; justify-content:space-between; align-items:center; gap:8px; }
.title{ font-weight:700; display:flex; align-items:center; gap:8px; }
.badge{ font-size:12px; background:#fde68a; color:#92400e; padding:8px 6px; border-radius:999px; }
.close-one{ border:none; background:#f2f2f2; width:28px; height: 28px; border-radius:20%; cursor:pointer; }
.body{ margin:8px 0 6px; color:#444; line-height:1.55; }
.actions .btn{
  display:inline-block; background:#c3aa0c; color:#fff; padding:8px 12px; border-radius:8px; text-decoration:none; font-weight:600;
}
.more{ margin-top:10px; text-align:center; }

/* 颜色语义边框 */
.v-info   { border-color:#dbeafe; }
.v-success{ border-color:#dcfce7; }
.v-warning{ border-color:#fef3c7; }
.v-danger { border-color:#fee2e2; }

/* 折叠过渡 */
.nb-fade-enter-active, .nb-fade-leave-active { transition: opacity .18s ease; }
.nb-fade-enter-from, .nb-fade-leave-to { opacity: 0; }
</style>
