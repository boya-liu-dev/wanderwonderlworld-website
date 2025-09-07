<template>
  <div id="app">
    <header>
  <div class="header-content">
    <div class="email-info">
      <img :src="mailIcon" alt="Email Icon" />
      <span>info@wanderwonderworlddubai.com</span>
    </div>

    <button class="menu-toggle" @click="toggleMenu">☰</button>

    <nav :class="{ open: isMenuOpen }" @click="closeMenu">
      <router-link to="/">Home</router-link>
      <router-link to="/transfers">Private Transfers</router-link>
      <router-link to="/packages">Tour Package</router-link>
      <router-link to="/safari">Desert Safari</router-link>
      <router-link to="/city">City Tour</router-link>
      <router-link to="/cruise">Dhow Cruise</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</header>

    <!-- 页面内容 -->
    <router-view />

    <!-- 页面最底部 banner10.jpg 图片 -->
    <div class="footer-banner">
      <img :src="footerBanner" alt="Footer Banner" />
  
    </div>
  </div>
</template>

<script>
import banner10 from '@/assets/images/banner10.jpg'
import mailIcon from '@/assets/images/mailicon.png'

export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false,
      footerBanner: banner10,
      mailIcon: mailIcon
    }
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
/* Container for the navigation bar and toggle button */
header {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #c3aa0c;
  padding: 10px 20px;
  display: flex;
 justify-content: center;
}
/* 邮箱信息靠左 */
.email-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  white-space: nowrap;
  margin-right: auto; /* 保证靠左 */
}

/* Email icon */
.email-info img {
  width: 20px;
  height: 20px;
}

/* Navigation bar styling */
nav {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  transition: max-height 0.3s ease-in-out;
  padding: 10px 0;
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

/* Hamburger button styling */
.menu-toggle {
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: black;
}

/* Responsive layout: hide nav and show hamburger button on small screens */
@media (max-width: 768px) {
  /* Adjust header layout for small screens */
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .email-info {
    margin: 5px 0;
  }

  nav {
    display: none;
    flex-direction: column;
    width: 100%;
    padding-left: 10px;
  }
  nav.open{
    display: flex;
  }

  .menu-toggle {
    display: block;
    align-self: flex-end;
    margin-bottom: 10px;
  }

  nav {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    width: 100%;
  }

  nav.open {
    display: flex;
  }
}
.footer-banner {
  padding-bottom: 0;
  line-height: 0;
  left: 0;
  width: 100%;
  height: 80px; /* 控制细长效果，可调 */
  background-color: #fff; /* 可选：防止图片透明 */
  z-index: 1000;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}

.footer-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<style>
/* Global styles */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', Arial, sans-serif;
  margin: 0;
}
.email-info {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 150px;
  font-size: 14px;
  font-weight: 5;
  color: #000;
  white-space: nowrap;
}

.email-info img {
  width: 20px;
  height: 20px;
}
.email-info {
  animation: fadeIn 1.2s ease-in-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateX(-10px); }
  100% { opacity: 1; transform: translateX(0); }
}

</style>
