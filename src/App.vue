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
        </div>
      </div>

      <!-- Main nav (unchanged) -->
      <div class="navbar">
        <div class="bar-inner">
          <nav :class="{ open: isMenuOpen }" @click="closeMenu">
            <router-link to="/">Home</router-link>
            <router-link to="/transfers">Private Transfers</router-link>
            <router-link to="/packages">Tour Package</router-link>
            <router-link to="/safari">Desert Safari</router-link>
            <router-link to="/city">City Tour</router-link>
            <router-link to="/cruise">Dhow Cruise</router-link>

            <!-- WonderCart stays a button; opens modal via Pinia store -->
            <button class="nav-cart" type="button" @click.stop="cart.open()">
              <img :src="cartIcon" alt="WonderCart" />
              <span>WonderCart</span>
              <sup v-if="cart.items.length">{{ cart.items.length }}</sup>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <!-- Cart modal at root -->
    <WonderCartModal />

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

export default {
  name: 'App',
  components: { WonderCartModal },
  data() {
    return {
      isMenuOpen: false,
      mailIcon,
      cartIcon
    }
  },
  computed: {
    cart() {
      return useWonderCart()
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
}

/* Upper nav (email) */
.topbar {
  background-color: #c3aa0c;
  margin: 0;
  padding: 0;
  border: 0;
}
.topbar .bar-inner {
  justify-content: space-between;
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

  /* nav collapses into a vertical drawer under the navbar row */
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
