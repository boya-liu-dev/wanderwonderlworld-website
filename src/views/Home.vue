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
import car3 from '@/assets/images/cars/carcard3.jpg'
import car4 from '@/assets/images/cars/carcard4.jpg'

export default {
  name: 'Home',
  components: {
    CarCard
  },
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
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}

.CarCard {
  min-width: 250px;
  max-width: 250px;
  flex: 0 0 auto;
}


.whatsapp-wrapper {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
}

.whatsapp-button {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px 15px;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.whatsapp-button:hover {
  transform: scale(1.05);
}

.whatsapp-button img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.hover-reveal .whatsapp-text {
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.hover-reveal:hover .whatsapp-text {
  max-width: 200px;
  opacity: 1;
  margin-left: 10px;
}
</style>
