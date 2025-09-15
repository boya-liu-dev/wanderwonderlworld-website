<template>
  <div class="transfers">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="Transfers Banner"
        class="banner"
        id="transfersBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="Gold Logo"
          class="logo"
          id="transfersLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="Text Logo"
          class="logo-text"
          id="transfersLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="transfersIntroTitle" data-c="@id">
        Private Transfers in Dubai — Arrive with Ease
      </h1>
      <p id="transfersIntroP1" data-c-html="@id">
        Experience Dubai’s allure in comfort and convenience with our top-rated private transfers and car with driver services. At WanderWonderWorld, we offer a fleet of immaculate and well-maintained chauffeur cars with experienced drivers who know the roads of the UAE. We cater to all your needs, from stress-free airport transfers to personalized city tours and business trips. Let us provide a seamless and professional journey that perfectly matches your travel dreams.
      </p>
    </div>

    <!-- WhatsApp floater -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
        class="whatsapp-button hover-reveal">
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="transfersWhatsappIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="transfersWhatsappText" data-c="@id">
          Need help? Chat with us!
        </span>
      </a>
    </div>

    <!-- Cards with images (4 types of transfer) -->
    <div class="cards-container">
      <CarCard
        key-id="transfersCardAirport"
        :image="car1"
        title="Airport Transfers"
        subtitle="Car-with-Driver"
        tour="Dubai City"
        duration="Varies"
        price="from AED 190"
        link="/transfers/short"
      />

      <CarCard
        key-id="transfersCardHalfDay"
        :image="car2"
        title="Half-Day with Driver"
        tour="Dubai City"
        duration="5 Hours"
        price="from AED 300"
        link="/transfers/short"
      />

      <CarCard
        key-id="transfersCardFullDay"
        :image="car3"
        title="Full-Day with Driver"
        tour="Dubai City"
        duration="10 Hours"
        price="from AED 510"
        link="/transfers/long"
      />

      <CarCard
        key-id="transfersCardAUH"
        :image="car4"
        title="Dubai to Abu Dhabi"
        tour="Abu Dhabi"
        duration="10 Hours"
        price="from AED 610"
        link="/transfers/long"
      />
    </div>

    <!-- 产品列表 Text Card -->
    <div class="text-card">
      <h2 id="transfersPriceTitle" data-c="@id">Dubai Car with Driver Price List</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th id="transfersPriceThService" data-c="@id">Chauffeur Service</th>
            <th id="transfersPriceThCarType" data-c="@id">Car Type</th>
            <th id="transfersPriceThPrice" data-c="@id">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="transfersPriceDXBTitle" data-c="@id">Airport Transfers (DXB – Dubai City Hotel)</td>
            <td id="transfersPriceDXBSUVType" data-c="@id">SUV (4–6 pax)</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfersPriceDXBSUV"
                data-c-num="@id"
                data-format="price-AED"
              >AED 190</strong>
            </td>
          </tr>
          <tr>
            <td id="transfersPriceDXBEmpty" data-c="@id"></td>
            <td id="transfersPriceDXBVanType" data-c="@id">Van (7–10 pax)</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfersPriceDXBVan"
                data-c-num="@id"
                data-format="price-AED"
              >AED 230</strong>
            </td>
          </tr>

          <tr>
            <td id="transfersPriceAUHTitle" data-c="@id">Airport Transfers (AUH – Dubai City Hotel)</td>
            <td id="transfersPriceAUHSUVType" data-c="@id">SUV (4–6 pax)</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfersPriceAUHSUV"
                data-c-num="@id"
                data-format="price-AED"
              >AED 330</strong>
            </td>
          </tr>
          <tr>
            <td id="transfersPriceAUHEmpty" data-c="@id"></td>
            <td id="transfersPriceAUHVanType" data-c="@id">Van (7–10 pax)</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfersPriceAUHVan"
                data-c-num="@id"
                data-format="price-AED"
              >AED 380</strong>
            </td>
          </tr>

          <tr>
            <td id="transfersPriceHalfTitle" data-c="@id">Half-Day Car with Driver (5 Hours)</td>
            <td id="transfersPriceHalfSUVType" data-c="@id">SUV (4–6 pax)</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfersPriceHalfSUV"
                data-c-num="@id"
                data-format="price-AED"
              >AED 300</strong>
            </td>
          </tr>
          <tr>
            <td id="transfersPriceHalfEmpty" data-c="@id"></td>
            <td id="transfersPriceHalfVanType" data-c="@id">Van (7–10 pax)</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfersPriceHalfVan"
                data-c-num="@id"
                data-format="price-AED"
              >AED 330</strong>
            </td>
          </tr>

          <tr>
            <td id="transfersPriceFullTitle" data-c="@id">Full-Day Car with Driver (10 Hours)</td>
            <td id="transfersPriceFullSUVType" data-c="@id">SUV (4–6 pax)</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfersPriceFullSUV"
                data-c-num="@id"
                data-format="price-AED"
              >AED 510</strong>
            </td>
          </tr>
          <tr>
            <td id="transfersPriceFullEmpty" data-c="@id"></td>
            <td id="transfersPriceFullVanType" data-c="@id">Van (7–10 pax)</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfersPriceFullVan"
                data-c-num="@id"
                data-format="price-AED"
              >AED 550</strong>
            </td>
          </tr>

          <tr>
            <td id="transfersPriceADTitle" data-c="@id">Dubai → Abu Dhabi with Sightseeing (10 Hours)</td>
            <td id="transfersPriceADSUVType" data-c="@id">SUV (4–6 pax)</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfersPriceADSUV"
                data-c-num="@id"
                data-format="price-AED"
              >AED 610</strong>
            </td>
          </tr>
          <tr>
            <td id="transfersPriceADEmpty" data-c="@id"></td>
            <td id="transfersPriceADVanType" data-c="@id">Van (7–10 pax)</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfersPriceADVan"
                data-c-num="@id"
                data-format="price-AED"
              >AED 650</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4 CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="transfersCTAEmail" data-c="@id">
          Email us
        </button>

        <button class="cta-btn cta-green" @click="openWhatsappModal" id="transfersCTAWhatsApp" data-c="@id">
          WhatsApp us
        </button>

        <button class="cta-btn cta-green" @click="openWechatModal" id="transfersCTAWechat" data-c="@id">
          Wechat us
        </button>

        <button class="cta-btn cta-red" @click="bookNow" id="transfersCTACart" data-c="@id">
          My WonderCart
        </button>
      </div>
    </div>

    <!-- Email 复制成功提示 -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="transfersEmailCopiedText" data-c-html="@id">
          <strong>info@wanderwonderworlddubai.com</strong> has been copied to your clipboard
        </p>
      </div>
    </div>

    <!-- WhatsApp 二维码弹窗 -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp QR" id="transfersWhatsappQR" data-c-src="@id" />
      </div>
    </div>

    <!-- 微信 二维码弹窗 -->
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="WeChat QR" id="transfersWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- FAQs Section -->
    <div class="faq-card">
      <h2 id="transfersFaqTitle" data-c="@id">FAQs</h2>
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

    <!-- Text cards -->
    <div class="text-card">
      <h2 id="transfersS1Title" data-c="@id">Seamless Journeys: Our Dubai Chauffeur Services</h2>
      <p id="transfersS1P1" data-c-html="@id">
        At WanderWonderWorld, we provide professional and reliable chauffeur services designed for your comfort and peace of mind. Our fleet consists of well-maintained, clean vehicles, operated by licensed and experienced drivers. We cater to all private transport needs, from efficient airport transfers to tailored day tours, ensuring a secure and hassle-free travel experience. We are committed to punctuality, vehicle safety, and superior customer service.
      </p>
    </div>

    <div class="text-card">
      <h2 id="transfersS2Title" data-c="@id">Tailored Transport: Your Private Car & Driver Options</h2>
      <p id="transfersS2P1" data-c-html="@id"><strong>Airport Transfers:</strong> We offer punctual, meet-and-greet services from both Dubai (DXB) and Abu Dhabi (AUH) airports to any destination in both cities. Our drivers track your flight status to ensure timely pickups, even in case of delays.</p>
      <p id="transfersS2P2" data-c-html="@id"><strong>Half-Day & Full-Day Hire:</strong> Explore Dubai at your own pace with our hourly or daily chauffeur service. We provide comfortable vehicles for sightseeing, business meetings, or family trips, allowing you to design your itinerary freely.</p>
      <p id="transfersS2P3" data-c-html="@id"><strong>Safety and Comfort:</strong> All vehicles are equipped with adequate space for luggage. Child seats are available upon advance request to ensure the safety of your family.</p>
      <p id="transfersS2P4" data-c-html="@id"><strong>Pricing:</strong> Our transparent pricing is based on vehicle type and trip duration. Contact us for a detailed quote tailored to your specific travel plan.</p>
    </div>

    <div class="text-card">
      <h2 id="transfersS3Title" data-c="@id">Terms and Conditions</h2>
      <p id="transfersS3P1" data-c-html="@id"><strong>Service Availability:</strong> All services are subject to vehicle and driver availability. We recommend booking in advance to confirm your preferred dates.</p>
      <p id="transfersS3P2" data-c-html="@id"><strong>Vehicle Use:</strong> Our chauffeur services are intended for private transfers and day tours. Eating, drinking, and smoking are not permitted inside the vehicles.</p>
      <p id="transfersS3P3" data-c-html="@id"><strong>Cancellation Policy:</strong> Cancellations must be made in accordance with our booking policy to avoid charges. Details regarding cancellation fees will be provided at the time of booking.</p>
      <p id="transfersS3P4" data-c-html="@id"><strong>No-Show Policy:</strong> Late arrival at the designated pickup location without prior notice may be considered a no-show, and applicable fees may apply.</p>
      <p id="transfersS3P5" data-c-html="@id"><strong>Overtime Charges:</strong> Extra-hour charges are applicable and will be calculated based on the vehicle type and original booking duration.</p>
      <p id="transfersS3P6" data-c-html="@id"><strong>Seasonal Surcharge:</strong> A peak season surcharge may be applied on specific dates. This will be clearly communicated during the booking process.</p>
      <p id="transfersS3P7" data-c-html="@id"><strong>Tour Guides:</strong> The provided driver is not a licensed tour guide. A licensed tour guide can be arranged at an additional cost upon request.</p>
    </div>

    <div class="text-card">
      <h2 id="transfersS4Title" data-c="@id">WanderWonderWorld's Destination Services</h2>
      <p id="transfersS4P1" data-c-html="@id">
        As a licensed Destination Management Company (DMC) in Dubai, WanderWonderWorld provides a full spectrum of exceptional tourism and transport solutions. Our car with driver services are designed to offer a seamless and professional experience, covering everything from efficient airport transfers to personalized city tours, business meetings, and relaxing family trips.
      </p>
      <p id="transfersS4P2" data-c-html="@id">
        We offer a wide range of vehicle options, including luxurious cars, spacious family vans, and comfortable tourist buses, all operated by professional and experienced drivers who assist you throughout your journey. For group bookings or complex travel plans, our dedicated team is ready to create a customized itinerary that perfectly matches your vision.
      </p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/carcard1.jpg'
import car2 from '@/assets/images/cars/carcard2.jpg'
import car3 from '@/assets/images/cars/carcard5.jpg'
import car4 from '@/assets/images/cars/carcard4.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'Transfers',
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
      faqs: [
        {
          question: "Do I need to book my transfer in advance?",
          answer: "Yes, we recommend booking ahead to secure availability and guarantee your preferred vehicle.",
          open: false
        },
        {
          question: "Are airport pick-ups included with waiting time?",
          answer: "Yes, we provide up to 60 minutes of free waiting at airports. Extra waiting time may incur a small fee.",
          open: false
        },
        {
          question: "Can I extend my booking during the trip?",
          answer: "Yes, extensions are possible based on vehicle availability. Extra charges per hour will apply.",
          open: false
        },
        {
          question: "Are entrance tickets or meals included in the price?",
          answer: "No, prices cover the vehicle and driver only. Attraction tickets, meals, or personal expenses are not included.",
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
        this.showToast();
      }
    },
    showToast() {
      this.showEmailToast = true;
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.showEmailToast = false;
      }, 3000);
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
/* （保留你原有样式不变） */
.transfers { font-family: 'Poppins', sans-serif; }

/* Banner */
.banner-container { position: relative; width: 100%; height: 300px; overflow: hidden; }
.banner { width: 100%; height: 100%; object-fit: cover; }
.floating-logos { position: absolute; top: 10px; left: 20px; display: flex; flex-direction: column; align-items: flex-start; }
.logo { height: 120px; }
.logo-text { height: 130px; margin-top: -70px; }

/* Intro */
.intro { max-width: 1000px; margin: 30px auto; text-align: left; padding: 0 20px; }
.intro h1 { font-size: 2rem; font-weight: bold; margin-bottom: 10px; }

/* Card container */
.cards-container { display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; justify-content: center; }

/* Text Cards */
.text-card { background-color: #f8f8f8; margin: 50px auto; padding: 25px; border-radius: 8px; max-width: 1000px; line-height: 1.6; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); }
.text-card h2 { font-size: 1.6rem; margin-bottom: 15px; }
.text-card p { margin-bottom: 30px; }

/* WhatsApp 悬浮按钮（整体位置不变） */
.whatsapp-wrapper{
  position: fixed; left: 7px; top: 75%;
  transform: translateY(-50%);
  z-index: 9999;
}

.whatsapp-button{
  display: flex; align-items: center;
  background: #fff;
  padding: 8px;                       
  border-radius: 100px;
  box-shadow: 0 4px 10px rgba(0,0,0,.2);
  text-decoration: none;
  transition: all .3s ease-in-out;
  overflow: hidden;                
}
.whatsapp-button:hover{ transform: scale(1.05); }

.whatsapp-button img{
  width: 52px;                      
  height: 52px;
  display: block;                  
  margin: 0;                       
}

.hover-reveal .whatsapp-text{
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: all .3s ease-in-out;
  white-space: nowrap;
  margin: 0;                       
}

.hover-reveal:hover{
  padding-right: 10px;              
}
.hover-reveal:hover .whatsapp-text{
  max-width: 200px;
  opacity: 1;
  margin-left: 10px;
}

utton img { width: 58px; height: 58px; margin-right: 3px; }
.hover-reveal .whatsapp-text { max-width: 0; opacity: 0; overflow: hidden; transition: all 0.3s ease-in-out; }
.hover-reveal:hover .whatsapp-text { max-width: 200px; opacity: 1; margin-left: 10px; }

/* Price table */
.price-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
.price-table th, .price-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
.price-table th { background-color: #f8f8f8; font-weight: 600; }
.price-table tr:nth-child(even) { background-color: #fafafa; }

/* FAQs */
.faq-card { background: #f8f8f8; margin: 50px auto; padding: 25px; border-radius: 8px; max-width: 1000px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.faq-card h2 { font-size: 1.6rem; margin-bottom: 20px; }
.faq-item { border-bottom: 1px solid #ddd; padding: 15px 0; cursor: pointer; }
.faq-question { display: flex; justify-content: space-between; font-weight: 600; color: #333; }
.faq-icon { font-size: 1rem; color: #b01b1b; }
.faq-answer { margin-top: 10px; color: #555; line-height: 1.6; }

/* CTA buttons */
.cta-row-wrapper { max-width: 1000px; margin: 30px auto 10px; }
.cta-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 900px) { .cta-row { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .cta-row { grid-template-columns: 1fr; } }
.cta-btn { height: 56px; border: none; border-radius: 12px; font-weight: 700; font-family: 'Poppins', sans-serif; cursor: pointer; transition: transform .08s ease, box-shadow .18s ease; box-shadow: 0 4px 12px rgba(0,0,0,.08); }
.cta-btn:active { transform: translateY(1px); }
.cta-gray  { background:hsl(65, 5%, 53%); color:#fff; }
.cta-green { background:hsl(136, 90%, 27%); color:#fff; }
.cta-red   { background:hsl(0, 93%, 32%); color:#fff; }
.cta-btn:hover { box-shadow: 0 8px 16px rgba(0,0,0,.12); }

/* Toast */
.center-toast { position: fixed; inset: 0; display: grid; place-items: center; z-index: 2000; }
.center-toast-box { background:#fff; padding:16px 22px; border-radius:12px; box-shadow: 0 12px 28px rgba(0,0,0,.18); max-width: 90vw; text-align: center; }

/* QR modal */
.qr-modal { position: fixed; inset: 0; background: rgba(0,0,0,.4); display: grid; place-items: center; z-index: 2000; }
.qr-modal-box { position: relative; background:#fff; border-radius:16px; padding: 16px; width: min(90vw, 520px); box-shadow: 0 16px 32px rgba(0,0,0,.25); }
.qr-modal-box img { width: 100%; height: auto; display: block; border-radius:12px; }
.qr-close { position: absolute; top: 8px; right: 10px; width: 36px; height: 36px; border-radius: 50%; border: none; background:#f2f2f2; font-size: 22px; line-height: 1; cursor: pointer; }
.qr-close:hover { background:#e9e9e9; }
</style>
