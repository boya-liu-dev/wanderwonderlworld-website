<template>
  <div id="app">
    <header class="site-header">
      <div class="topbar">
        <div class="bar-inner">
          <div class="email-info">
            <!-- 用 id 当 key：图片可配 -->
            <img :src="mailIcon" alt="Email Icon"
                 id="headerMailIcon" data-c-src="@id" />
            <!-- 用 id 当 key：文本可配 -->
            <a class="email-link" href="mailto:info@wanderwonderworlddubai.com"
               id="headerEmailText" data-c="@id">
              info@wanderwonderworlddubai.com
            </a>
          </div>

          <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">☰</button>
        </div>
      </div>

      <div class="navbar">
        <div class="bar-inner">
          <nav :class="{ open: isMenuOpen }" @click.self="closeMenu">
            <!-- 收进汉堡的邮箱（保持独立 id；不与顶部重复） -->
            <div class="email-inline">
              <img :src="mailIcon" alt="Email Icon"
                   id="drawerMailIcon" data-c-src="@id" />
              <a class="email-link" href="mailto:info@wanderwonderworlddubai.com"
                 id="drawerEmailText" data-c="@id">
                info@wanderwonderworlddubai.com
              </a>
            </div>

            <!-- 导航文字外包一层 span，给它 id + data-c="@id" -->
            <router-link :to="navPaths.home">
              <span id="navHome" data-c="@id">{{ navText.home }}</span>
            </router-link>
            <router-link :to="navPaths.transfers">
              <span id="navTransfers" data-c="@id">{{ navText.transfers }}</span>
            </router-link>
            <router-link :to="navPaths.packages">
              <span id="navPackages" data-c="@id">{{ navText.packages }}</span>
            </router-link>
            <router-link :to="navPaths.safari">
              <span id="navSafari" data-c="@id">{{ navText.safari }}</span>
            </router-link>
            <router-link :to="navPaths.city">
              <span id="navCity" data-c="@id">{{ navText.city }}</span>
            </router-link>
            <router-link :to="navPaths.cruise">
              <span id="navCruise" data-c="@id">{{ navText.cruise }}</span>
            </router-link>

            <!-- 语言键本身也可配（可选） -->
            <button class="nav-lang" type="button" @click="toggleLang">
              <span id="navLang" data-c="@id">EN / 中</span>
            </button>

            <button class="nav-cart" type="button" @click.stop="cart.open()">
              <img :src="cartIcon" alt="WonderCart"
                   id="navCartIcon" data-c-src="@id" />
              <span id="navCart" data-c="@id">{{ navText.cart }}</span>
              <sup v-if="cart.items.length">{{ cart.items.length }}</sup>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <WonderCartModal v-if="!zhMode" />
    <WonderCartModal1 v-else />

    <div v-if="cart.showToast" class="global-toast">{{ cart.toastMsg }}</div>

    <router-view />

    <footer class="selected-services" role="navigation" aria-label="Selected Services">
      <div class="ss-inner">
        <!-- 标题可配 -->
        <h3 id="footerSelectedServicesTitle" data-c="@id">Selected Services</h3>

        <div class="ss-grid">
          <!-- 下面这些是否需要可配按需加；先给第一个做示例 -->
          <router-link class="ss-btn" to="/transfers">
            <span id="footerBtnTransfers" data-c="@id">Airport Transfers</span>
          </router-link>

          <router-link class="ss-btn" to="/package/56nights">6 Nights Signature Plus</router-link>
          <router-link class="ss-btn" to="/safari/upsafari">Extended Dunes Thrill</router-link>
          <router-link class="ss-btn" to="/safari/upsafari">Royal Dunes Safari</router-link>
          <router-link class="ss-btn" to="/safari/addon">Buggy Ride (2-Seater)</router-link>
          <router-link class="ss-btn" to="/city/city34">Abu Dhabi Culture Day</router-link>
          <router-link class="ss-btn" to="/city/city34">Hatta Mountain Escape</router-link>
          <router-link class="ss-btn" to="/city/sndcruise">Dubai Water Canal Glassboat Dinner</router-link>
          <router-link class="ss-btn" to="/city/sndcruise">Lotus Mega Yacht Dinner</router-link>
          <router-link class="ss-btn" to="/contact">About Us</router-link>
          <router-link class="ss-btn" to="/contact">Terms and Conditions</router-link>
        </div>

        <!-- 版权可配 -->
        <div class="copyright" id="copyrightText" data-c="@id">
          Copyright © 2025. WanderWonderWorld. All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { nextTick } from 'vue'
import mailIcon from '@/assets/images/mailicon.png'
import cartIcon from '@/assets/images/wondercart.jpg'
import { useWonderCart } from '@/stores/wonderCart'
import WonderCartModal from '@/components/WonderCartModal.vue'
import WonderCartModal1 from '@/components/WonderCartModal1.vue'
import { applyContent } from '@/plugins/autocontent' // ✅ 已存在的插件

export default {
  name: 'App',
  components: { WonderCartModal, WonderCartModal1 },
  data() {
    return {
      isMenuOpen: false,
      mailIcon,
      cartIcon,
      zhMode: (typeof window !== 'undefined' && window.location.pathname.startsWith('/cn')) ? true : false,
      navTextEn: {
        home: 'Home', transfers: 'Private Transfers', packages: 'Tour Package',
        safari: 'Desert Safari', city: 'City Tour', cruise: 'Dhow Cruise', cart: 'WonderCart'
      },
      navTextZh: {
        home: '首页', transfers: '专车接送', packages: '旅游套餐',
        safari: '越野冲沙', city: '城市一日游', cruise: '游船晚餐', cart: '万德购物车'
      },
      routeNamePair: {
        Home: 'HomeZh', HomeZh: 'Home',
        Transfers: 'TransfersZh', TransfersZh: 'Transfers',
        Packages: 'PackagesZh', PackagesZh: 'Packages',
        Safari: 'SafariZh', SafariZh: 'Safari',
        City: 'CityZh', CityZh: 'City',
        Cruise: 'CruiseZh', CruiseZh: 'Cruise'
      }
    }
  },
  computed: {
    cart() { return useWonderCart() },
    navText() { return this.zhMode ? this.navTextZh : this.navTextEn },
    navPaths() {
      return this.zhMode
        ? { home: '/cn', transfers: '/cn/transfers', packages: '/cn/packages', safari: '/cn/safari', city: '/cn/city', cruise: '/cn/cruise' }
        : { home: '/',   transfers: '/transfers',     packages: '/packages',     safari: '/safari',     city: '/city',     cruise: '/cruise' }
    }
  },
  mounted() {
    this.cart.hydrate()

    // === 初次渲染后应用远端内容（固定用元素 id 做 key）===
    this.refreshContent()

    const stored = localStorage.getItem('zhMode')
    if (stored === null) {
      localStorage.setItem('zhMode', this.zhMode ? '1' : '0')
    } else {
      const isCnRoute =
        (this.$route?.path || '').startsWith('/cn') ||
        /Zh$/.test(this.$route?.name || '')
      if (isCnRoute !== this.zhMode) {
        this.zhMode = isCnRoute
        localStorage.setItem('zhMode', this.zhMode ? '1' : '0')
      }
    }
  },
  watch: {
    // 语言或路由变化后，重新覆盖一次文本/图片
    zhMode() { this.refreshContent() },
    $route() { this.refreshContent() }
  },
  methods: {
    toggleMenu() { this.isMenuOpen = !this.isMenuOpen },
    closeMenu() { this.isMenuOpen = false },
    toggleLang() {
      const nextZh = !this.zhMode
      this.zhMode = nextZh
      localStorage.setItem('zhMode', nextZh ? '1' : '0')
      const curName = this.$route.name
      const targetName = this.routeNamePair[curName]
      if (targetName) this.$router.replace({ name: targetName })
      else this.$router.replace({ path: nextZh ? '/cn' : '/' })
    },

    async refreshContent() {
      // 等 DOM 稳定之后套用；只扫描当前 App
      await nextTick()
      applyContent(this.$el, {
        // 固定语种给插件（如果你的插件支持多语）
        locale: this.zhMode ? 'zh' : 'en',
        // 关键：指示插件用元素 id 作为 key
        useIdAsKey: true
      })
    }
  }
}
</script>

<style scoped>
/* ===== Header / Nav ===== */
.site-header { position: sticky; top: 0; z-index: 999; background-color: #c3aa0c; padding: 0; }
.bar-inner { max-width: 1200px; margin: 0 auto; padding: 10px 20px; display: flex; align-items: center; justify-content: space-between; }
.topbar { background-color: #c3aa0c; margin: 0; padding: 0; border: 0; }
.topbar .bar-inner { padding: 8px 20px; }
.email-info { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #000; white-space: nowrap; }
.email-info img { width: 20px; height: 20px; }

.navbar { background-color: #c3aa0c; margin: 0; padding: 0; border: 0; }
.navbar .bar-inner { justify-content: center; padding: 17px 20px; }
nav { display: flex; align-items: center; justify-content: center; gap: 50px; flex-wrap: nowrap; }
nav a { font-family: 'Poppins', Arial, sans-serif; text-decoration: none; color: #000; font-weight: 600; }
a.router-link-exact-active { font-weight: bold; color: #f2f2f4fd; }

/* 语言切换集成到导航 */
.nav-lang{
  background: transparent; border: 0; font-weight: 600;
  font-family: 'Poppins', Arial, sans-serif; cursor: pointer; color: #000; padding: 0;
}

/* 购物车按钮仍保持 */
.nav-cart { display: inline-flex; align-items: center; gap: 6px; background: transparent; border: none; cursor: pointer; font-weight: 600; color: #000; font-family: 'Poppins', Arial, sans-serif; }
.nav-cart img { width: 20px; height: 20px; }
.nav-cart sup { background: #b01b1b; color: #fff; border-radius: 999px; padding: 0 6px; line-height: 18px; height: 18px; display: inline-block; font-size: 0.75rem; transform: translateY(-1px); }

.menu-toggle { display: none; font-size: 28px; background: none; border: none; cursor: pointer; color: black; }

/* ===== Footer ===== */
.selected-services { background: #c3aa0c; margin: 0; padding: 0; }
.ss-inner { max-width: 1200px; margin: 0 auto; padding: 14px 20px 8px; }
.selected-services h3 { margin: 0 0 10px; font-size: 16px; font-weight: 700; color: #000; border-bottom: 2px solid #000; padding-bottom: 6px; }
.ss-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px 14px; margin-bottom: 10px; }
.ss-btn { display: inline-block; background: transparent; border: none; outline: none; color: #000; text-decoration: none; padding: 6px 2px; font-size: 13px; font-weight: 700; text-align: left; cursor: pointer; }
.ss-btn:hover,.ss-btn:active,.ss-btn:focus { color: #000; background: transparent; outline: none; text-decoration: underline; }
.copyright { margin: 6px 0 0; padding: 6px 0 10px; color: #000; font-size: 14px; font-weight: 600; }

/* ===== Toast ===== */
.global-toast { position: fixed; left: 50%; top: 20px; transform: translateX(-50%); background: #111; color: #fff; padding: 10px 14px; border-radius: 10px; box-shadow: 0 12px 28px rgba(0,0,0,0.18); z-index: 4000; max-width: 90vw; text-align: center; }

/* ===== Footer grid responsive ===== */
@media (max-width: 1024px) { .ss-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 680px)  { .ss-grid { grid-template-columns: repeat(2, 1fr); } }

/* ===== Mobile nav ===== */
@media (max-width: 768px) {
  .menu-toggle { display: block; margin-left: auto; }
  nav { display: none; flex-direction: column; align-items: flex-start; width: 100%; gap: 14px; padding: 10px 20px; flex-wrap: wrap; }
  nav.open { display: flex; }
  .nav-cart { padding: 8px 0; }
  .navbar nav a { font-size: 18px; line-height: 1.4; }
  .navbar .nav-lang { font-size: 18px; line-height: 1.4; }
}

/* 默认（桌面）不显示 nav 内的邮箱 */
.email-inline { display: none; align-items: center; gap: 8px; }
.email-inline img { width: 20px; height: 20px; }

/* 手机端：把邮箱收进汉堡里显示；同时隐藏顶部那份 */
@media (max-width: 768px) {
  .topbar .email-info { display: none; }
  .email-inline { display: flex; margin-bottom: 8px; font-size: 16px; }
  .email-inline .email-link { color: #000; text-decoration: none; }
  .email-inline .email-link:active,
  .email-inline .email-link:focus { text-decoration: underline; }
}

/* ===== 通用卡片响应式（保持原有） ===== */
:where(.cards, .cards-grid, .card-grid, .grid-cards, .services-grid, .packages-grid, .transfers-grid, .tours-grid, [class*="cards-grid"], [class*="card-grid"]):not(.ss-grid) {
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px;
}
@media (max-width: 1100px) {
  :where(.cards, .cards-grid, .card-grid, .grid-cards, .services-grid, .packages-grid, .transfers-grid, .tours-grid, [class*="cards-grid"], [class*="card-grid"]):not(.ss-grid) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  :where(.cards, .cards-grid, .card-grid, .grid-cards, .services-grid, .packages-grid, .transfers-grid, .tours-grid, [class*="cards-grid"], [class*="card-grid"]):not(.ss-grid) {
    grid-template-columns: 1fr; gap: 14px;
  }
}
:where([class*="card"]) { border-radius: 14px; transition: transform .18s ease, box-shadow .18s ease; will-change: transform; }
@media (hover: hover) and (pointer: fine) {
  :where([class*="card"]):hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 10px 24px rgba(0,0,0,.08); }
}
@media (hover: none) { :where([class*="card"]):active { transform: scale(.98); }
}
@media (max-width: 768px) { :where([class*="card"]) { font-size: 1.03rem; } }

/* ===== WhatsApp 浮标 ===== */
.whatsapp-wrapper { width: 64px; height: 64px; }
.whatsapp-wrapper img, .whatsapp-wrapper svg { width: 100%; height: 100%; display: block; }
@media (max-width: 768px) { .whatsapp-wrapper { width: 74px; height: 74px; } }

/* ===== 小动画（保持原有） ===== */
.email-info { display: flex; align-items: center; gap: 8px; margin-right: 150px; font-size: 14px; color: #000; white-space: nowrap; animation: fadeIn 3.8s ease-in-out; }
.email-info img { width: 20px; height: 20px; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateX(-10px); } 100% { opacity: 1; transform: translateX(0); } }
.email-info .email-link { color: inherit; text-decoration: none; }
.email-info .email-link:hover { text-decoration: underline; cursor: pointer; }
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
body { font-family: 'Poppins', Arial, sans-serif; margin: 0; }
</style>
