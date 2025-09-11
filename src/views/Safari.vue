<template>
  <div class="safari">
    <!-- Banner -->
    <div class="banner-container">
      <img :src="banner" alt="Transfers Banner" class="banner" />
      <div class="floating-logos">
        <img :src="logoGold" alt="Gold Logo" class="logo" />
        <img :src="logoText" alt="Text Logo" class="logo-text" />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1>Dubai's Premier Adventure — Desert Safari Tours</h1>
      <p>Experience the best of Dubai's desert with our curated safari tours. We offer a full spectrum of adventures, from the thrilling energy of a morning safari to the mesmerizing calm of a desert sunset and the authentic cultural immersion of an overnight stay. Each tour is designed to deliver a unique experience, allowing you to choose the perfect fit for your style of travel. Book with us for a seamless, professional, and unforgettable journey into the dunes.</p>
    </div>
    <div class="whatsapp-wrapper">
  <a
    href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
    class="whatsapp-button hover-reveal">
    <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
    <span class="whatsapp-text">Need help? Chat with us!</span>
  </a>
 </div>

    <!-- Cards with images (4 types of transfer) -->
    <div class="cards-container">
      <CarCard
  :image="car1"
  title="Morning Dunes Drive"
  subtitle="Classic Line"
  tour="Morning Private Tour"
  duration="4.5 Hours"
  price="from AED 500"
  link="/safari/regsafari"
/>

<CarCard
  :image="car2"
  title="Sunset Dunes Select"
  subtitle="Signature Line"
  tour="Sunset Private Tour"
  duration="6 Hours"
  price="from AED 700"
  link="/safari/regsafari"
/>

<CarCard
  :image="car3"
  title="Extended Dunes Thrill"
  subtitle="Prestige Line"
  tour="Extended Private Tour"
  duration="7 Hours"
  price="from AED 1100"
  link="/safari/upsafari"
/>

<CarCard
  :image="car4"
  title="Royal Dunes Safari"
  subtitle="Royal Line"
  tour="Luxury Overnight"
  duration="16 Hours"
  price="from AED 2000"
  link="/safari/upsafari"

/>
    <!-- Add-ons cards (same size / aligned with above) -->
    <div class="cards-container">
      <CarCard
        :image="addon1"
        title="ATV Ride (150cc)"
        subtitle="Add-on"
        tour="Desert Safari"
        duration="30 Minutes"
        price="AED 140 / person"
        link="/safari/addon"
      />

      <CarCard
        :image="addon2"
        title="Buggy Ride (2-Seater)"
        subtitle="Add-on"
        tour="Desert Safari"
        duration="30 Minutes"
        price="AED 420 / vehicle"
        link="/safari/addon"
      />

      <CarCard
        :image="addon3"
        title="Photography Package"
        subtitle="Add-on"
        tour="10 Edited + All Originals"
        duration="—"
        price="AED 150 / package"
        link="/safari/addon"
      />

      <CarCard
        :image="addon4"
        title="Shisha / Drinks"
        subtitle="Add-on"
        tour="Available at Licensed Camps"
        duration="—"
        price="contact for details"
        link="/safari/addon"
      />
    </div>


    </div>
        <!-- 产品列表 Text Card -->
    <div class="text-card">
      <h2>Dubai Desert Safari Price List</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th>Desert Safari Service</th>
            <th>Time/Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Morning Dunes Drive｜Classic Line</td>
            <td>08:00 – 12:30</td>
            <td><strong style="color:#b01b1b;">AED 500</strong></td>
          </tr>
          
          <tr>
            <td>Sunset Dunes Select｜Signature Line</td>
            <td>15:00 – 21:00</td>
            <td><strong style="color:#b01b1b;">AED 700</strong></td>
          </tr>

          <tr>
            <td>Extended Dunes Thrill｜Prestige Line</td>
            <td>14:00 – 21:00</td>
            <td><strong style="color:#b01b1b;">AED 1100</strong></td>
          </tr>

          <tr>
            <td>Royal Dunes Safari｜Royal Line</td>
            <td>15:00 – 09:00(+1 day)</td>
            <td><strong style="color:#b01b1b;">AED 2000</strong></td>
          </tr>
          <tr>
            <td>Add-on ATV Ride (150cc)</td>
            <td>30min</td>
            <td><strong style="color:#b01b1b;">AED 140</strong></td>
          </tr>

          <tr>
            <td>Add-on Buggy Ride (2-seater)</td>
            <td>30min</td>
            <td><strong style="color:#b01b1b;">AED 420</strong></td>
          </tr>
          <tr>
            <td>Add-on One Photography Package</td>
            <td>——</td>
            <td><strong style="color:#b01b1b;">AED 150</strong></td>
          </tr>
          <tr>
            <td>Shisha/Alcoholic Drinks</td>
            <td>——</td>
            <td><strong style="color:#b01b1b;">see menu</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4 CTA buttons -->
<div class="cta-row-wrapper">
  <div class="cta-row">
    <!-- 1. Email us（灰色） -->
    <button class="cta-btn cta-gray" @click="copyEmail">
      Email us
    </button>

    <!-- 2. WhatsApp us（弹窗显示二维码） -->
    <button class="cta-btn cta-green" @click="openWhatsappModal">
      WhatsApp us
    </button>

    <!-- 3. 微信扫一扫（弹窗显示二维码） -->
    <button class="cta-btn cta-green" @click="openWechatModal">
      Wechat us
    </button>

    <!-- 4. Book now（跳转 contact） -->
    <button class="cta-btn cta-red" @click="bookNow">
      My WonderCart
    </button>
  </div>
</div>

<!-- Email 复制成功的居中提示（3秒自动消失） -->
<div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
  <div class="center-toast-box">
    <p><strong>info@wanderwonderworlddubai.com</strong> has been copied to your clipboard</p>
  </div>
</div>

<!-- WhatsApp 二维码弹窗（右上角X关闭） -->
<div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
  <div class="qr-modal-box">
    <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
    <img :src="whatsappQR" alt="WhatsApp QR" />
  </div>
</div>

<!-- 微信 二维码弹窗（右上角X关闭） -->
<div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
  <div class="qr-modal-box">
    <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
    <img :src="wechatQR" alt="WeChat QR" />
  </div>
</div>


    <!-- Full-width textual cards (no image, no buttons) -->
     <!-- FAQs Section -->
<div class="faq-card">
  <h2>FAQs</h2>
  <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
    <div class="faq-question" @click="toggleFaq(index)">
      <span>{{ faq.question }}</span>
      <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
    </div>
    <div v-if="faq.open" class="faq-answer">
      <p>{{ faq.answer }}</p>
    </div>
  </div>
</div>

    <div class="text-card">
      <h2>Unforgettable Adventures: Our Dubai Desert Safari Experiences</h2>
      <p>At WanderWonderWorld, we deliver safe, comfortable, and thrilling desert safari journeys designed for every type of traveler. From gentle morning drives across golden dunes to adrenaline-filled dune bashing at sunset, our packages are tailored to combine excitement with cultural immersion. With private 4x4 vehicles, professional drivers, and carefully selected desert camps, we ensure an authentic yet premium experience for families, couples, and groups alike.</p>
    </div>

    <div class="text-card">
      <h2>Tailored Desert Safari: Your Private Tour Options</h2>
      <p><strong>Morning Dune Drive | Classic Line:</strong> A half-day safari designed for families, seniors, and short-stay travelers. Includes cool morning dune bashing, camel ride, sandboarding, and light refreshments.</p>
      <p><strong>Sunset Dunes Select | Signature Line:</strong> Our most popular safari. Afternoon dune bashing, sunset photo stop, camel ride, cultural shows, and BBQ buffet dinner in a traditional desert camp.</p>
      <p><strong>Extended Dune Thrill | Prestige Line:</strong> For adventure seekers. Extended dune bashing in deeper desert areas, premium camp access with VIP seating, upgraded dinner, and exclusive performances.</p>
      <p><strong>Royal Dunes Safari | Royal Line:</strong> The ultimate luxury experience. Chauffeured in a premium SUV, enjoy private dune bashing, champagne welcome, fine dining, and an overnight stay in luxury tents with stargazing and breakfast.</p>
    </div>

    <div class="text-card">
      <h2>Terms and Conditions</h2>
      <p><strong>Service Availability:</strong> All desert safari tours are subject to vehicle, driver, and camp availability. We recommend booking in advance to secure your preferred date and package.</p>
      <p><strong>Vehicle Use:</strong> Our safaris are conducted with well-maintained 4x4 vehicles. Eating, drinking, and smoking are not allowed inside the vehicles for safety reasons.</p>
      <p><strong>Cancellation Policy:</strong> Cancellations must follow our booking policy. Fees may apply depending on the timing of cancellation. Full details will be provided at the time of booking.</p>
      <p><strong>No-Show Policy:</strong> Guests who fail to arrive at the designated pickup point without prior notice may be treated as a no-show, and applicable fees will be charged.</p>
      <p><strong>Overtime Charges:</strong> Extra-hour charges may apply if guests request additional time beyond the booked safari schedule. Rates depend on vehicle type and tour duration.</p>
      <p><strong>Seasonal Surcharge:</strong> Peak season or holiday surcharges may apply. This will be clearly communicated before final confirmation.</p>
      <p><strong>Safety Policy:</strong> Guests must follow the driver’s instructions during dune bashing and other activities. Children and elderly guests should inform us in advance so we can recommend suitable safari options. Child seats are available upon request.</p>
      <p><strong>Add-ons & Alcohol Policy:</strong> Add-on activities such as ATV, buggy rides, photography, and shisha can be booked in advance. Alcoholic drinks are served only at licensed camps, in compliance with UAE law.</p>
      <p><strong>Tour Guides:</strong> The provided driver is not a licensed tour guide. A licensed tour guide can be arranged at an additional cost upon request.</p>
    </div>

    <div class="text-card">
      <h2>WanderWonderWorld Desert Safari Services</h2>
      <p>At WanderWonderWorld, we deliver a full spectrum of desert safari experiences tailored for every traveler. From thrilling dune bashing adventures to luxury overnight stays, our tours are designed to combine safety, cultural immersion, and exceptional service. Whether you are a first-time visitor or seeking a premium desert journey, we provide reliable and professional services that meet international standards.</p>
      <p>We offer a wide range of safari options, including morning, evening, extended, and royal overnight experiences. All safaris are conducted with modern 4x4 vehicles and licensed, experienced drivers, ensuring both excitement and peace of mind. For families, couples, groups, or corporate bookings, our dedicated team can create a customized itinerary that matches your needs and expectations.</p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/safaricar1.jpg'
import car2 from '@/assets/images/cars/safaricar2.jpg'
import car3 from '@/assets/images/cars/safaricar3.jpg'
import car4 from '@/assets/images/cars/safaricar4.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'
import addon1 from '@/assets/images/cars/addon1.jpg'
import addon2 from '@/assets/images/cars/addon2.jpg'
import addon3 from '@/assets/images/cars/addon3.jpg'
import addon4 from '@/assets/images/cars/addon4.jpg'
import { useWonderCart } from '@/stores/wonderCart'


export default {
  name: 'Safari',
  components: { CarCard },
  data() {
    return {
      banner,
      logoGold,
      logoText,
      car1,
      car2,
      car3,
      car4,
      addon1,
      addon2,
      addon3,
      addon4,
      faqs: [
        {
          question: "What is included in a Dubai desert safari tour?",
          answer: "Our desert safari tours usually include hotel pick-up and drop-off in a 4x4 vehicle, dune bashing with a professional driver, photo stops on the dunes, camel rides, sandboarding, refreshments, and depending on the package, live entertainment and BBQ dinner. Luxury and overnight packages include exclusive camps and premium dining experiences.",
          open: false
        },
        {
          question: "How long does a desert safari in Dubai take?",
          answer: "The duration depends on the package you choose. Morning safaris are typically 4–5 hours, evening safaris last about 6 hours, and overnight safaris extend up to 16 hours including breakfast the next morning.",
          open: false
        },
        {
          question: "Do I need to book desert safari in advance?",
          answer: "We recommend booking in advance to secure your preferred date and vehicle, especially during weekends and peak travel seasons. Same-day bookings are possible, but availability cannot be guaranteed.",
          open: false
        },
        {
          question: "What should I wear for a desert safari in Dubai?",
          answer: "Comfortable casual clothing is best, such as light trousers or shorts and breathable tops. We recommend sneakers or sandals for walking on the sand. During winter evenings, bring a light jacket as desert temperatures can drop significantly.",
          open: false
        }
      ],
     showEmailToast: false,
     showWhatsappModal: false,
     showWechatModal: false,
     whatsappQR,
     wechatQR,
     emailToCopy: 'info@wanderwonderworlddubai.com',
     toastTimer: null
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open
    },
    async copyEmail() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(this.emailToCopy);
      } else {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = this.emailToCopy;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      this.showToast();
    } catch (e) {
      this.showToast(); // 即使失败也给提示
    }
  },

  showToast() {
    this.showEmailToast = true;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.showEmailToast = false;
    }, 3000); // 3秒关闭
  },

  openWhatsappModal() {
    this.showWhatsappModal = true;
  },
  openWechatModal() {
    this.showWechatModal = true;
  },
  closeModals() {
    this.showWhatsappModal = false;
    this.showWechatModal = false;
  },

  bookNow() {
     useWonderCart().open();
  }

  }
}
</script>

<style scoped>
.safari {
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
}
.logo {
  height: 120px;
}
.logo-text {
  height: 130px;
  margin-top: -70px;
}

/* Intro */
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

/* Card container for 4 car cards */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

/* Full-width Text Cards */
.text-card {
  background-color: #f8f8f8;
  margin: 50px auto;
  padding: 25px;
  border-radius: 8px;
  max-width: 1000px;
  line-height: 1.6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.text-card h2 {
  font-size: 1.6rem;
  margin-bottom: 15px;
}
.text-card p {
  margin-bottom: 30px;
}
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

.whatsapp-float img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

.hover-reveal:hover .whatsapp-text {
  max-width: 200px;
  opacity: 1;
  margin-left: 10px;
}
.price-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.price-table th,
.price-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.price-table th {
  background-color: #f8f8f8;
  font-weight: 600;
}

.price-table tr:nth-child(even) {
  background-color: #fafafa;
}
/* FAQs 样式 */
.faq-card {
  background: #f8f8f8;
  margin: 50px auto;
  padding: 25px;
  border-radius: 8px;
  max-width: 1000px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.faq-card h2 {
  font-size: 1.6rem;
  margin-bottom: 20px;
}

.faq-item {
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #333;
}

.faq-icon {
  font-size: 1rem;
  color: #b01b1b;
}

.faq-answer {
  margin-top: 10px;
  color: #555;
  line-height: 1.6;
}
/* —— 四个按钮容器 —— */
.cta-row-wrapper {
  max-width: 1000px;
  margin: 30px auto 10px;
}
.cta-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media (max-width: 900px) {
  .cta-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .cta-row {
    grid-template-columns: 1fr;
  }
}

/* —— 按钮通用形状（大小一致） —— */
.cta-btn {
  height: 56px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: transform .08s ease, box-shadow .18s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
}
.cta-btn:active {
  transform: translateY(1px);
}

/* 颜色款式 */
.cta-gray  { background:hsl(65, 5%, 53%); color:hsl(0, 0%, 100%); }
.cta-green { background:hsl(136, 90%, 27%); color:hsl(0, 0%, 100%); }
.cta-red   { background:hsl(0, 93%, 32%); color:hsl(0, 0%, 100%); }
.cta-btn:hover { box-shadow: 0 8px 16px rgba(0,0,0,.12); }

/* —— 居中提示（复制成功） —— */
.center-toast {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 2000;
}
.center-toast-box {
  background:#fff;
  padding:16px 22px;
  border-radius:12px;
  box-shadow: 0 12px 28px rgba(0,0,0,.18);
  max-width: 90vw;
  text-align: center;
}

/* —— 二维码弹窗 —— */
.qr-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.4);
  display: grid;
  place-items: center;
  z-index: 2000;
}
.qr-modal-box {
  position: relative;
  background:#fff;
  border-radius:16px;
  padding: 16px;
  width: min(90vw, 520px);
  box-shadow: 0 16px 32px rgba(0,0,0,.25);
}
.qr-modal-box img {
  width: 100%;
  height: auto;
  display: block;
  border-radius:12px;
}
.qr-close {
  position: absolute;
  top: 8px;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background:#f2f2f2;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}
.qr-close:hover { background:#e9e9e9; }

</style>
