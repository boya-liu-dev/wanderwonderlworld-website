<template>
  <button
    class="lang-toggle"
    type="button"
    @click="toggle"
    :aria-label="ariaLabel"
    title="EN / 中"
  >
    <span class="item" :class="{ active: locale === 'en' }">EN</span>
    <span class="sep"> / </span>
    <span class="item" :class="{ active: locale === 'zh' }">中</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const ariaLabel = computed(() =>
  locale.value === 'en' ? 'Switch language to Chinese' : '切换语言为英文'
)

const toggle = () => {
  const next = locale.value === 'en' ? 'zh' : 'en'
  locale.value = next
  try {
    // 同时写两份，兼容你项目里使用的 localStorage 键名
    localStorage.setItem('lang', next)
    localStorage.setItem('locale', next)
  } catch {}
}
</script>

<style scoped>
.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  background: transparent;
  border: none;
  padding: 6px 10px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #000;
  line-height: 1;
  user-select: none;
}
.lang-toggle:focus { outline: none; }
.item {
  opacity: .55;           /* 非当前语言稍微淡一点 */
  transition: opacity .15s ease;
}
.item.active {
  opacity: 1;             /* 当前语言高亮 */
  text-decoration: underline;
  text-underline-offset: 2px;
}
.sep { opacity: .7; }
</style>
