<template>
  <div id="app">
    <header>
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
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      // Close the menu after a navigation link is clicked
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
  header {
    justify-content: flex-start;
  }

  .menu-toggle {
    display: block;
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
</style>

<style>
/* Global styles */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', Arial, sans-serif;
  margin: 0;
}
</style>