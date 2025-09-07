<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/transfers">Private Transfers</router-link>
      <router-link to="/packages">Tour Package</router-link>
      <router-link to="/safari">Desert Safari</router-link>
      <router-link to="/city">City Tour</router-link>
      <router-link to="/cruise">Dhow Cruise</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 20px;
  background: #c3aa0c;
}
a.router-link-exact-active {
  font-weight: bold;
  color: #041506c3;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', Arial, sans-serif;
}
nav a {
  font-family: 'Poppins', Arial, sans-serif;
  text-decoration: none;
}
</style>

