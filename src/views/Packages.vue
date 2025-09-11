<template>
  <div class="packages">
    <!-- Banner -->
    <div class="banner-container">
      <img :src="banner" alt="Packages Banner" class="banner" />
      <div class="floating-logos">
        <img :src="logoGold" alt="Gold Logo" class="logo" />
        <img :src="logoText" alt="Text Logo" class="logo-text" />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1>Dubai Holiday Packages — Private & Flexible</h1>
      <p>
        Plan your Dubai holiday the smart way. Our four private, land-only packages blend must-see icons
  with heat-smart pacing: outdoor in the morning/evening, indoor at noon. Old Dubai walking with an
  abra ride is included as standard (with a licensed guide for the walk), while an English-speaking
  driver-guide escorts you throughout. Value-first pricing, Adult & Child rates, private airport
  transfers, handpicked hotels with breakfast, and verified vehicles keep the trip seamless.
      </p>
    </div>

    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
        class="whatsapp-button hover-reveal">
        <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
        <span class="whatsapp-text">Need help? Chat with us!</span>
      </a>
    </div>

    <!-- Cards (4 packages) -->
    <div class="cards-container">
      <CarCard
        :image="car1"
        title="3 Nights Dubai Starter"
        subtitle="Tour-Package"
        tour="Dubai City"
        duration="4 Days"
        price="Adult from AED 849"
        link="/package/34nights"
      />

      <CarCard
        :image="car2"
        title="4 Nights Family Value"
        subtitle="Tour-Package"
        tour="Dubai City"
        duration="5 Days"
        price="Adult from AED 1099"
        link="/package/34nights"
      />

      <CarCard
        :image="car3"
        title="5 Nights Dubai + Abu Dhabi Highlights"
        subtitle="Tour-Package"
        tour="Dubai + Abu Dhabi"
        duration="6 Days"
        price="Adult from AED 1349"
        link="/package/56nights"
      />

      <CarCard
        :image="car4"
        title="6 Nights Signature Plus"
        subtitle="Tour-Package"
        tour="Dubai + Abu Dhabi"
        duration="7 Days"
        price="Adult from AED 1599"
        link="/package/56nights"
      />
    </div>

    <!-- Price List -->
    <div class="text-card">
      <h2>Dubai Tour Packages Price List</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th>Package</th>
            <th>Time/Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3 Nights Dubai Starter</td>
            <td>4 Days</td>
            <td><strong style="color:#b01b1b;">Adult AED 849 | Child AED 669</strong></td>
          </tr>
          <tr>
            <td>4 Nights Family Value</td>
            <td>5 Days</td>
            <td><strong style="color:#b01b1b;">Adult AED 1099 | Child AED 919</strong></td>
          </tr>
          <tr>
            <td>5 Nights Dubai + Abu Dhabi Highlights</td>
            <td>6 Days</td>
            <td><strong style="color:#b01b1b;">Adult AED 1349 | Child AED 1169</strong></td>
          </tr>
          <tr>
            <td>6 Nights Signature Plus</td>
            <td>7 Days</td>
            <td><strong style="color:#b01b1b;">Adult AED 1599 | Child AED 1419</strong></td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top:8px;font-size:0.95rem;color:#555;">
  * Rates are per person based on twin/double sharing. Prices include 5% VAT.
  Tourism Dirham is payable at the hotel (~AED 10–20 per room per night).
</p>
    </div>

    <!-- CTA buttons (unchanged) -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail">Email us</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal">WhatsApp us</button>
        <button class="cta-btn cta-green" @click="openWechatModal">Wechat us</button>
        <button class="cta-btn cta-red" @click="bookNow">My WonderCart</button>
      </div>
    </div>

    <!-- Toast & Modals (unchanged) -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p><strong>info@wanderwonderworlddubai.com</strong> has been copied to your clipboard</p>
      </div>
    </div>

    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp QR" />
      </div>
    </div>

    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="WeChat QR" />
      </div>
    </div>

    <!-- FAQs -->
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

    <!-- Copy blocks -->
   <div class="text-card">
   <h2>Discover Dubai Your Way: Our Private Packages</h2>
   <p><strong>3 Nights Dubai Starter:</strong> Old Dubai walking tour (licensed guide, ~2 hours) with an abra ride, plus your choice of <em>Dubai Frame</em> or <em>The View at The Palm</em>. Enjoy a Dubai Marina dinner cruise and an evening desert safari (families may switch to a gentler morning version with ≥48h notice).</p>

<p><strong>4 Nights Family Value:</strong> Evening arrival buffer on Day 1; desert safari moves to Day 2 for better energy. Modern Dubai half-day with Burj Khalifa 124/125 (non-prime), and a relaxed evening around JBR & Bluewaters. Kid-friendly swaps (e.g., aquarium) are available.</p>

<p><strong>5 Nights Dubai + Abu Dhabi Highlights:</strong> Abu Dhabi sits mid-trip for a smoother pace: Sheikh Zayed Grand Mosque (inside visit; Friday visitor hours are limited) and Louvre Abu Dhabi (typically closed on Mondays; we’ll adjust as needed). Back in Dubai, combine Old Dubai walking + abra with your pre-booked Burj Khalifa time slot and a Marina dinner cruise.</p>

<p><strong>6 Nights Signature Plus:</strong> VIP desert safari upgrade, Atlantis Aquaventure Waterpark & Lost Chambers, plus one free day for shopping or pool time. Includes a full-day Abu Dhabi (Grand Mosque inside + Qasr Al Watan courtyard or Louvre). An optional sunset private yacht from Dubai Marina can be arranged.</p>
   </div>

    <div class="text-card">
  <h2>Terms & Conditions (Tour Packages)</h2>

  <p><strong>Pricing & Rooming:</strong> Land-only rates per adult based on twin/double sharing. <em>Prices include 5% VAT.</em> Child (3–10) shares existing bedding unless an extra bed is purchased; infant 0–2 free (no bed). Tourism Dirham hotel tax is payable at the hotel (approx. AED 10–20 per room per night). Standard hotel check-in 15:00 / check-out 12:00; early/late arrangements subject to availability or surcharge.</p>

  <p><strong>Inclusions:</strong> Round-trip private airport transfers (DXB), selected hotel with daily breakfast, <em>private vehicle with an English-speaking driver-guide</em>, <em>licensed guide for Old Dubai walking (~2 hours)</em>, listed attraction tickets per package (e.g., Burj Khalifa 124/125; The View/Dubai Frame; Louvre/Aquaventure as stated), Dubai Marina dinner cruise <em>with private transfers</em>, evening desert safari (VIP upgrade where specified), and bottled water in the vehicle.</p>

  <p><strong>Exclusions:</strong> International flights, visas, personal travel insurance; lunches/dinners unless stated; alcoholic drinks; personal expenses; optional activities/upgrades; additional licensed guide on other touring days unless specified; peak/event supplements; single supplement/extra bed; porterage; discretionary tips.</p>

  <p><strong>Child Seats & Safety:</strong> In the UAE, infants and young children must use an age-appropriate child/booster seat and occupy a seat in the vehicle. Please request the number of seats at booking; compliance is required by law.</p>

  <p><strong>Abu Dhabi Grand Mosque:</strong> Ladies must cover hair, shoulders and legs; men must wear long trousers. Security is strict and entry may be refused if attire is incomplete. Friday visitor hours are limited.</p>

  <p><strong>Ramadan & Peak Periods:</strong> Desert-camp entertainment pauses; alcohol service is restricted; attraction hours may change. New Year’s Eve and major events may carry mandatory supplements.</p>

  <p><strong>Amendment & Cancellation:</strong> ≥48 hours before service: free change/refund; 24–48 hours: 50% charge; &lt;24 hours or no-show: 100% charge. Non-refundable attraction tickets/hotel nights follow supplier policy. In force-majeure events (e.g., sandstorm, heavy rain), we re-schedule first; if not possible, only unrecoverable supplier costs apply.</p>
</div>

    <div class="text-card">
      <h2>WanderWonderWorld Tour Package Services</h2>
      <p>
        We design heat-smart itineraries (indoor at noon, outdoors in the golden hour), include Old
        Dubai walking with Abra as standard, and offer family friendly Safari options. WhatsApp
        concierge (08:00–22:00), verified drivers, clean camps, child seats on request, and one free
        re-schedule (≥48h) keep your trip smooth and safe.
      </p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/tour1.jpg'
import car2 from '@/assets/images/cars/tour2.jpg'
import car3 from '@/assets/images/cars/tour3.jpg'
import car4 from '@/assets/images/cars/tour4.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'Packages',
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
          question: "What’s included in the package price?",
          answer:
            "Private airport transfers, hotel with breakfast, private vehicle per itinerary, listed attraction tickets (e.g., Burj Khalifa 124/125, The View/Dubai Frame, Marina dinner cruise), and an evening desert safari (family can switch to a gentler morning version). Land-only—no flights/visa.",
          open: false
        },
        {
          question: "How do Adult & Child prices apply?",
          answer:
            "Adult price applies to 11+ years. Child price applies to ages 3–10 sharing existing bedding. Infants 0–2 are free (no seat/bed). Extra bed or single supplement is charged by season and hotel.",
          open: false
        },
        {
          question: "Can I change the order of sightseeing days?",
          answer:
            "Yes. We run private packages. We’ll adapt the daily order to your flight times, season, and special events. Peak days may require time-slot changes for attractions.",
          open: false
        },
        {
          question: "Is Abu Dhabi Mosque dress code enforced?",
          answer:
            "Yes. Ladies must cover hair, shoulders and legs; men must wear long trousers. Security is strict. We brief you in advance and provide basic guidance.",
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
/* 保持现有样式，未改动 */
.safari { font-family: 'Poppins', sans-serif; }
.banner-container { position: relative; width: 100%; height: 300px; overflow: hidden; }
.banner { width: 100%; height: 100%; object-fit: cover; }
.floating-logos { position: absolute; top: 10px; left: 20px; display: flex; flex-direction: column; align-items: flex-start; }
.logo { height: 120px; }
.logo-text { height: 130px; margin-top: -70px; }

.intro { max-width: 1000px; margin: 30px auto; text-align: left; padding: 0 20px; }
.intro h1 { font-size: 2rem; font-weight: bold; margin-bottom: 10px; }

.cards-container { display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; justify-content: center; }

.text-card { background-color: #f8f8f8; margin: 50px auto; padding: 25px; border-radius: 8px; max-width: 1000px; line-height: 1.6; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.text-card h2 { font-size: 1.6rem; margin-bottom: 15px; }
.text-card p { margin-bottom: 30px; }

.whatsapp-wrapper { position: fixed; left: 7px; top: 75%; transform: translateY(-50%); z-index: 9999; }
.whatsapp-button { display: flex; align-items: center; background-color: white; padding: 1px 15px; border-radius: 100px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); text-decoration: none; transition: all 0.3s ease-in-out; }
.whatsapp-button:hover { transform: scale(1.05); }
.whatsapp-button img { width: 58px; height: 58px; margin-right: 3px; }
.hover-reveal .whatsapp-text { max-width: 0; opacity: 0; overflow: hidden; transition: all 0.3s ease-in-out; }
.hover-reveal:hover .whatsapp-text { max-width: 200px; opacity: 1; margin-left: 10px; }

.price-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
.price-table th, .price-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
.price-table th { background-color: #f8f8f8; font-weight: 600; }
.price-table tr:nth-child(even) { background-color: #fafafa; }

.faq-card { background: #f8f8f8; margin: 50px auto; padding: 25px; border-radius: 8px; max-width: 1000px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.faq-card h2 { font-size: 1.6rem; margin-bottom: 20px; }
.faq-item { border-bottom: 1px solid #ddd; padding: 15px 0; cursor: pointer; }
.faq-question { display: flex; justify-content: space-between; font-weight: 600; color: #333; }
.faq-icon { font-size: 1rem; color: #b01b1b; }
.faq-answer { margin-top: 10px; color: #555; line-height: 1.6; }

.cta-row-wrapper { max-width: 1000px; margin: 30px auto 10px; }
.cta-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 900px) { .cta-row { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .cta-row { grid-template-columns: 1fr; } }

.cta-btn { height: 56px; border: none; border-radius: 12px; font-weight: 700; font-family: 'Poppins', sans-serif; cursor: pointer; transition: transform .08s ease, box-shadow .18s ease; box-shadow: 0 4px 12px rgba(0,0,0,.08); }
.cta-btn:active { transform: translateY(1px); }
.cta-gray  { background:hsl(65, 5%, 53%); color:hsl(0, 0%, 100%); }
.cta-green { background:hsl(136, 90%, 27%); color:hsl(0, 0%, 100%); }
.cta-red   { background:hsl(0, 93%, 32%); color:hsl(0, 0%, 100%); }
.cta-btn:hover { box-shadow: 0 8px 16px rgba(0,0,0,.12); }

.center-toast { position: fixed; inset: 0; display: grid; place-items: center; z-index: 2000; }
.center-toast-box { background:#fff; padding:16px 22px; border-radius:12px; box-shadow: 0 12px 28px rgba(0,0,0,.18); max-width: 90vw; text-align: center; }

.qr-modal { position: fixed; inset: 0; background: rgba(0,0,0,.4); display: grid; place-items: center; z-index: 2000; }
.qr-modal-box { position: relative; background:#fff; border-radius:16px; padding: 16px; width: min(90vw, 520px); box-shadow: 0 16px 32px rgba(0,0,0,.25); }
.qr-modal-box img { width: 100%; height: auto; display: block; border-radius:12px; }
.qr-close { position: absolute; top: 8px; right: 10px; width: 36px; height: 36px; border-radius: 50%; border: none; background:#f2f2f2; font-size: 22px; line-height: 1; cursor: pointer; }
.qr-close:hover { background:#e9e9e9; }
</style>
