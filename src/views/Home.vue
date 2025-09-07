<template>
  <div class="home">
    <!-- 横幅图像轮播 -->
    <div class="banner-container">
      <img :src="bannerImages[currentIndex]" alt="Banner" class="banner" />

      <!-- 悬浮 Logo -->
      <div class="floating-logos">
        <img src="@/assets/images/logo-www-gold.png" alt="Gold Logo" class="logo" />
        <img src="@/assets/images/logo-text.png" alt="Text Logo" class="logo-text" />
      </div>
    </div>

    <h2>Welcome to WanderWonderWorldDubai.com</h2>
    <p class="slogan">Your Journey, Our Passion.</p>

    <!-- 品牌介绍 -->
    <div class="intro-text">
      <h3>Dubai Travel & Tourism with a Personal Touch</h3>
      <p>
        WanderWonderWorld is your trusted travel companion in Dubai, offering exceptional service and unforgettable experiences. 
        Whether you're arriving in style with our private transfers, exploring the golden desert, or cruising through the city skyline, 
        we craft journeys that match your dreams. Let us guide you through the vibrant heart of the UAE with expert local insight and personalized care.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentIndex: 0,
      bannerImages: [
        new URL('@/assets/images/banner1.jpg', import.meta.url).href,
        new URL('@/assets/images/banner2.jpg', import.meta.url).href,
        new URL('@/assets/images/banner3.jpg', import.meta.url).href,
        new URL('@/assets/images/banner4.jpg', import.meta.url).href,
        new URL('@/assets/images/banner5.jpg', import.meta.url).href
      ]
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.bannerImages.length
    }, 10000)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.home {
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

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

/* 悬浮 logo 样式 */
.floating-logos {
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.logo {
  height: 120px;
}

.logo-text {
  height: 130px;
  margin-top: -80px;
}

.slogan {
  font-size: 1.2rem;
  color: #b01b1b;
  margin-top: 8px;
}

.intro-text {
  max-width: 800px;
  margin: 40px auto 20px;
  text-align: left;
  padding: 0 20px;
}

.intro-text h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.intro-text p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}
</style>
