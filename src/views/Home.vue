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

    <!-- 品牌介绍（保持原样，卡片仍在 intro-text 里） -->
    <div class="intro-text">
      <h3>Dubai Travel & Tourism with a Personal Touch</h3>
      <p>
        WanderWonderWorld is your trusted travel companion in Dubai, offering exceptional service
        and unforgettable experiences. Whether you're arriving in style with our private transfers,
        exploring the golden desert, or cruising through the city skyline, we craft journeys that
        match your dreams. Let us guide you through the vibrant heart of the UAE with expert local
        insight and personalized care.
      </p>

      <!-- WhatsApp 悬浮按钮 -->
      <div class="whatsapp-wrapper">
        <a
          href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
          class="whatsapp-button hover-reveal"
        >
          <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
          <span class="whatsapp-text">Need help? Chat with us!</span>
        </a>
      </div>

      <!-- 服务卡片 -->
      <div class="cards-container">
        <CarCard
          :image="car1"
          title="Airport Transfers"
          tour="Dubai City"
          duration="Varies"
          price="from AED 190"
          link="/transfers/short"
        />
        <CarCard
          :image="car2"
          title="Half-Day with Driver"
          tour="Dubai City"
          duration="5 Hours"
          price="from AED 300"
          link="/transfers/short"
        />
        <CarCard
          :image="car3"
          title="Full-Day with Driver"
          tour="Dubai City"
          duration="10 Hours"
          price="from AED 510"
          link="/transfers/long"
        />
        <CarCard
          :image="car4"
          title="Dubai to Abu Dhabi"
          tour="Abu Dhabi"
          duration="10 Hours"
          price="from AED 610"
          link="/transfers/long"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'
import car1 from '@/assets/images/cars/carcard1.jpg'
import car2 from '@/assets/images/cars/carcard2.jpg'
import car3 from '@/assets/images/cars/carcard5.jpg'
import car4 from '@/assets/images/cars/carcard4.jpg'

export default {
  name: 'Home',
  components: { CarCard },
  data() {
    return {
      currentIndex: 0,
      bannerImages: [
        new URL('@/assets/images/banner1.jpg', import.meta.url).href,
        new URL('@/assets/images/banner2.jpg', import.meta.url).href,
        new URL('@/assets/images/banner3.jpg', import.meta.url).href,
        new URL('@/assets/images/banner4.jpg', import.meta.url).href,
        new URL('@/assets/images/banner5.jpg', import.meta.url).href,
        new URL('@/assets/images/banner9.jpg', import.meta.url).href
      ],
      car1,
      car2,
      car3,
      car4
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
  padding: 0px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

/* Banner */
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
.floating-logos {
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.logo { height: 120px; }
.logo-text { height: 130px; margin-top: -80px; }

/* Title & Slogan */
.slogan {
  font-size: 1.2rem;
  color: #b01b1b;
  margin-top: 8px;
}

/* Intro 文本块（保持原样） */
.intro-text {
  max-width: 1300px;
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

/* Cards 容器 —— 与 Transfers 一致的写法 */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

/* WhatsApp 悬浮按钮（保持原样） */
.whatsapp-wrapper {
  position: fixed;
  left: 7px;
  top: 75%;
  transform: translateY(-50%);
  z-index: 9999;
}
.whatsapp-button {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 1px 15px;
  border-radius: 100px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.whatsapp-button:hover { transform: scale(1.05); }
.whatsapp-button img { width: 58px; height: 58px; margin-right: 3px; }
.hover-reveal .whatsapp-text {
  max-width: 0; opacity: 0; overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.hover-reveal:hover .whatsapp-text {
  max-width: 200px; opacity: 2; margin-left: 5px;
}

/* —— 仅在桌面端放宽 intro-text，让它能装下 4 张卡 + 间距 —— */
/* 说明：CarCard 的可视宽度大约在 350–360px 左右，gap=20px，四卡需要 ~1500px。
   这里给到 1600px 留余量，不影响小屏表现。 */
@media (min-width: 1200px) {
  .intro-text {
    max-width: 1600px; /* 宽于四卡总宽度，避免第四张换行 */
  }
}
</style>
