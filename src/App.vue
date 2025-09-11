<template>
  <div id="app">
    <!-- Sticky header with two stacked rows: topbar (email) + navbar (main nav) -->
    <header class="site-header">
      <!-- Upper nav: only email (left) + hamburger (right on mobile) -->
      <div class="topbar">
        <div class="bar-inner">
          <div class="email-info">
            <img :src="mailIcon" alt="Email Icon" />
            <a class="email-link" href="mailto:info@wanderwonderworlddubai.com">
              info@wanderwonderworlddubai.com
            </a>
          </div>

          
      
          <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">☰</button>
          <!-- 固定语言切换按钮 -->
          <button class="lang-toggle" @click="toggleLang">EN / 中</button>
        </div>
      </div>

      <!-- Main nav (unchanged structure; 文字与链接改为动态) -->
      <div class="navbar">
        <div class="bar-inner">
          <nav :class="{ open: isMenuOpen }" @click="closeMenu">
            <router-link :to="navPaths.home">{{ navText.home }}</router-link>
            <router-link :to="navPaths.transfers">{{ navText.transfers }}</router-link>
            <router-link :to="navPaths.packages">{{ navText.packages }}</router-link>
            <router-link :to="navPaths.safari">{{ navText.safari }}</router-link>
            <router-link :to="navPaths.city">{{ navText.city }}</router-link>
            <router-link :to="navPaths.cruise">{{ navText.cruise }}</router-link>

            <!-- WonderCart stays a button; opens modal via Pinia store -->
            <button class="nav-cart" type="button" @click.stop="cart.open()">
              <img :src="cartIcon" alt="WonderCart" />
              <span>{{ navText.cart }}</span>
              <sup v-if="cart.items.length">{{ cart.items.length }}</sup>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <!-- Cart modal at root -->
    <WonderCartModal v-if="!zhMode" />
    <WonderCartModal1 v-else />

    <!-- Global toast -->
    <div v-if="cart.showToast" class="global-toast">{{ cart.toastMsg }}</div>

    <!-- Routed page content -->
    <router-view />

    <!-- ===== Bottom Selected Services bar (acts as footer banner; sits at the very bottom) ===== -->
    <footer class="selected-services" role="navigation" aria-label="Selected Services">
      <div class="ss-inner">
        <h3>Selected Services</h3>
        <div class="ss-grid">
          <router-link class="ss-btn" to="/transfers">Airport Transfers</router-link>
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

        <div class="copyright">
          Copyright © 2025. WanderWonderWorld. All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import mailIcon from '@/assets/images/mailicon.png'
import cartIcon from '@/assets/images/wondercart.jpg'
import { useWonderCart } from '@/stores/wonderCart'
import WonderCartModal from '@/components/WonderCartModal.vue'
import WonderCartModal1 from '@/components/WonderCartModal1.vue'

export default {
  name: 'App',
  components: { WonderCartModal, WonderCartModal1 },
  data() {
    return {
      isMenuOpen: false,
      mailIcon,
      cartIcon,

      // 当前语言：false=英文（默认），true=中文
      zhMode: localStorage.getItem('zhMode') === '1',

      // 导航文字（两套）
      navTextEn: {
        home: 'Home',
        transfers: 'Private Transfers',
        packages: 'Tour Package',
        safari: 'Desert Safari',
        city: 'City Tour',
        cruise: 'Dhow Cruise',
        cart: 'WonderCart'
      },
      navTextZh: {
        home: '首页',
        transfers: '专车接送',
        packages: '旅游套餐',
        safari: '沙漠冲沙',
        city: '城市一日游',
        cruise: '游船晚餐',
        cart: '万德购物车'
      },

      // 名称配对：主页面在切换语言时互跳
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
    cart() {
      return useWonderCart()
    },
    // 当前导航文字
    navText() {
      return this.zhMode ? this.navTextZh : this.navTextEn
    },
    // 当前导航链接
    navPaths() {
      return this.zhMode
        ? { home: '/cn', transfers: '/cn/transfers', packages: '/cn/packages', safari: '/cn/safari', city: '/cn/city', cruise: '/cn/cruise' }
        : { home: '/',   transfers: '/transfers',     packages: '/packages',     safari: '/safari',     city: '/city',     cruise: '/cruise' }
    }
  },
  mounted() {
    this.cart.hydrate()
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    toggleLang() {
      // 1) 反转并持久化
      this.zhMode = !this.zhMode
      localStorage.setItem('zhMode', this.zhMode ? '1' : '0')

      // 2) 如果现在在六大主页面之一，则跳到“影子页面”；否则回到对应语言首页
      const curName = this.$route.name
      const targetName = this.routeNamePair[curName]
      if (targetName) {
        this.$router.replace({ name: targetName })
      } else {
        this.$router.replace({ path: this.zhMode ? '/cn' : '/' })
      }
    }
  }
}
</script>

<style scoped>
/* ===== Sticky header wrapper ===== */
.site-header {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #c3aa0c;
  padding: 0;
}

/* Shared inner container for both bars */
.bar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 让三块（邮箱 / 切换 / 菜单）自然分布 */
}

/* Upper nav (email) */
.topbar {
  background-color: #c3aa0c;
  margin: 0;
  padding: 0;
  border: 0;
}
.topbar .bar-inner {
  padding: 8px 20px;
}
.email-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  white-space: nowrap;
}
.email-info img { width: 20px; height: 20px; }

/* 语言切换按钮（固定文案 EN / 中） */
.lang-toggle{
  background: transparent;
  border: 0;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  padding: 7px 、1px;
  color: #000;
}

/* Main nav (unchanged look) */
.navbar {
  background-color: #c3aa0c;
  margin: 0;
  padding: 0;
  border: 0;
}
.navbar .bar-inner {
  justify-content: center;
  padding: 17px 20px;
}

/* Desktop nav in one row */
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: nowrap;
}
nav a {
  font-family: 'Poppins', Arial, sans-serif;
  text-decoration: none;
  color: #000;
  font-weight: 600;
}
a.router-link-exact-active {
  font-weight: bold;
  color: #f2f2f4fd;
}

/* WonderCart styled like a nav item */
.nav-cart {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: #000;
  font-family: 'Poppins', Arial, sans-serif;
}
.nav-cart img { width: 20px; height: 20px; }
.nav-cart sup {
  background: #b01b1b;
  color: #fff;
  border-radius: 999px;
  padding: 0 6px;
  line-height: 18px;
  height: 18px;
  display: inline-block;
  font-size: 0.75rem;
  transform: translateY(-1px);
}

/* Hamburger (mobile only) lives in the topbar) */
.menu-toggle {
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: black;
}

/* ===== Bottom Selected Services bar (footer) ===== */
.selected-services {
  background: #c3aa0c;   /* gold background like your theme */
  margin: 0;             /* zero gap with the page bottom */
  padding: 0;
}
.ss-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 20px 8px;
}
.selected-services h3 {
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 700;
  color: #000;                     /* black text */
  border-bottom: 2px solid #000;   /* underline below the title */
  padding-bottom: 6px;
}
.ss-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px 14px;
  margin-bottom: 10px;
}

/* Buttons as text-only links (no outline, no color/hover change) */
.ss-btn {
  display: inline-block;
  background: transparent;
  border: none;
  outline: none;
  color: #000;                /* always black */
  text-decoration: none;      /* text-only look */
  padding: 6px 2px;           /* small tappable area without looking like a button */
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}
.ss-btn:hover,
.ss-btn:active,
.ss-btn:focus {
  color: #000;                /* no change on hover/active/focus */
  background: transparent;
  outline: none;
  text-decoration: underline; /* optional subtle affordance; remove if undesired */
}

/* Copyright line at the very bottom of the bar */
.copyright {
  margin: 6px 0 0;
  padding: 6px 0 10px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
}

/* Global toast */
.global-toast {
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background: #111;
  color: #fff;
  padding: 10px 14px;
  border-radius: 10px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  z-index: 4000;
  max-width: 90vw;
  text-align: center;
}

/* ===== Mobile behavior ===== */
@media (max-width: 1024px) {
  .ss-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 680px) {
  .ss-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .menu-toggle { display: block; } /* show burger on mobile */
  nav {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 14px;
    padding: 10px 20px;
    flex-wrap: wrap;
  }
  nav.open { display: flex; }
  .nav-cart { padding: 8px 0; }
}




/* (existing) email animation refinements */
.email-info {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 150px;
  font-size: 14px;
  font-weight: 5;
  color: #000;
  white-space: nowrap;
  animation: fadeIn 3.8s ease-in-out;
}
.email-info img { width: 20px; height: 20px; }

@keyframes fadeIn {
  0% { opacity: 0; transform: translateX(-10px); }
  100% { opacity: 1; transform: translateX(0); }
}
.email-info .email-link {
  color: inherit;
  text-decoration: none;
}
.email-info .email-link:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>

<style>
/* Global font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
body { font-family: 'Poppins', Arial, sans-serif; margin: 0; }
</style>
