<template>
  <div class="contact">
    <!-- Banner Section -->
    <div class="banner-container">
      <img src="@/assets/images/banner7.jpg" alt="Transfers Banner" class="banner" />

      <!-- 悬浮 Logo -->
      <div class="floating-logos">
        <img src="@/assets/images/logo-www-gold.png" alt="Gold Logo" class="logo" />
        <img src="@/assets/images/logo-text.png" alt="Text Logo" class="logo-text" />
      </div>
    </div>

    <!-- Title and Intro -->
    <div class="intro">
      <h1>Contact us</h1>
      <p>
        Experience Dubai's allure in comfort and convenience with our top-rated car rental with driver services...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact {
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

/* Banner 容器统一设置 */
.banner-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* LOGO 悬浮效果，左上角 */
.floating-logos {
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* 缩小 LOGO 尺寸 */
.logo {
  height: 120px;
}

.logo-text {
  height: 130px;
  margin-top: -70px;
}

.intro {
  max-width: 1000px;
  margin: 30px auto;
  text-align: left;
  padding: 0 20px;
}

.intro h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
