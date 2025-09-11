<template>
  <div class="cruise">
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
      <h1>Dubai Dhow Cruise Dinners — Night Life & Premium</h1>
      <p>
        Choose from four evening cruises: Creek Classic, Marina Skyline, Water Canal Glassboat, and the
        Lotus Mega Yacht. We keep pricing competitive, upgrades transparent (upper-deck/window seating,
        VIP lounges), and private hotel transfers optional. Vegetarian/Jain meals are available on request,
        entertainment follows local regulations, and your e-voucher includes a pier map and 24/7 emergency
        contact for a smooth boarding experience.
      </p>
    </div>

    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20dhow%20cruises."
        class="whatsapp-button hover-reveal">
        <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
        <span class="whatsapp-text">Need help? Chat with us!</span>
      </a>
    </div>

    <!-- Cards (4 packages) -->
    <div class="cards-container">
      <CarCard
        :image="car1"
        title="Creek Classic Dhow Dinner"
        subtitle="Dhow-Cruise-Tour"
        tour="Dubai Creek (Al Seef)"
        duration="1.5–2 Hours"
        price="from AED 85"
        link="/city/sndcruise"
      />

      <CarCard
        :image="car2"
        title="Dubai Marina Dhow Dinner"
        subtitle="Dhow-Cruise-Tour"
        tour="Dubai Marina"
        duration="2 Hours"
        price="from AED 115"
        link="/city/sndcruise"
      />

      <CarCard
        :image="car3"
        title="Dubai Water Canal Glassboat Dinner"
        subtitle="Dhow-Cruise-Tour"
        tour="Dubai Canal"
        duration="2-2.5 Hours"
        price="from AED 149"
        link="/city/sndcruise"
      />

      <CarCard
        :image="car4"
        title="Lotus Mega Yacht Dinner"
        subtitle="Dhow-Cruise-Tour"
        tour="Dubai Marina / Harbour"
        duration="3 Hours"
        price="from AED 239"
        link="/city/sndcruise"
      />
    </div>

    <!-- Price List -->
    <div class="text-card">
      <h2>Dubai Dhow Cruise Price List</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th>Dhow Cruise</th>
            <th>Time/Duration</th>
            <th>Ticket-Only Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Creek Classic Dhow Dinner</td>
            <td>90–120 Minutes</td>
            <td><strong style="color:#b01b1b;">Adult AED 85 | Child AED 70</strong></td>
          </tr>
          <tr>
            <td>Dubai Marina Dhow Dinner</td>
            <td>2 Hours</td>
            <td><strong style="color:#b01b1b;">Adult AED 115 | Child AED 95</strong></td>
          </tr>
          <tr>
            <td>Dubai Water Canal Glassboat Dinner</td>
            <td>~2 Hours</td>
            <td><strong style="color:#b01b1b;">Adult AED 149 | Child AED 119</strong></td>
          </tr>
          <tr>
            <td>Lotus Mega Yacht Dinner</td>
            <td>3 Hours</td>
            <td><strong style="color:#b01b1b;">Adult AED 239 | Child AED 189</strong></td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top:8px;font-size:0.95rem;color:#555;">
        * Rates are <strong>per person</strong>. Infant (0–2) free. Ticket-only prices exclude hotel transfers
        and seating upgrades. Optional private round-trip transfers (Dubai urban): Sedan 1–4 AED 180 /
        MPV 5–7 AED 220 / Van 10–14 AED 350 (Jebel Ali/JVC/DIP +AED 40–60; from Sharjah +AED 100).
        Child seats provided free on request (limited; by UAE law).
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
      <h2>Find Your Evening on the Water: Our Cruise Line-up</h2>
      <p><strong>Creek Classic Dhow Dinner:</strong> Heritage wooden dhow, Old Dubai skyline, international buffet, water/soft drinks and <em>Tanoura</em> when permitted. Easy price point and a relaxed vibe. Add an <em>upper-deck</em> or <em>window table</em> guarantee, pre-cruise Old Dubai mini walk + abra, or private hotel transfers.</p>
      <p><strong>Dubai Marina Dhow Dinner:</strong> The favourite skyline route—Marina, JBR and Bluewaters by night on a traditional dhow or a modern glass boat (operator assigned). Buffet dinner, soft drinks and entertainment when permitted. Optional upper-deck/window seating and birthday/anniversary table décor.</p>
      <p><strong>Water Canal Glassboat Dinner:</strong> Premium glass-enclosed vessel along the Dubai Water Canal and Business Bay bridges. Panoramic windows, quieter “fine-dining” ambience, and priority to window-style tables when available. Add a quick Dubai Frame visit before boarding (ticket add-on).</p>
      <p><strong>Lotus Mega Yacht Dinner:</strong> Three hours on one of Dubai’s largest yachts—live DJ, multiple decks, live cooking stations and lounge areas. Optional VIP sofa sections and, on licensed dates only, a Premium Drinks package.</p>
    </div>

    <div class="text-card">
      <h2>Terms & Conditions (Dhow Cruises)</h2>
      <p><strong>Boarding & Timing:</strong> Standard cruises board at 8:00 PM and sail at 8:30 PM for ~90–120 minutes (Creek/Marina/Canal). Lotus reports at 7:00 PM and sails 7:30–10:30 PM. Late arrivals are treated as no-show by the boat operator.</p>
      <p><strong>Inclusions:</strong> Ticket-only covers the boat seat, buffet dinner (Halal; veg/non-veg; Jain/vegan by request), water/soft drinks, and shows when permitted. Alcohol is only served on licensed vessels and not during Ramadan/dry days.</p>
      <p><strong>Transfers:</strong> Private round-trip hotel transfers are optional at the published matrix. Child/booster seats are provided free on request (limited). Eating/drinking/smoking are not allowed inside vehicles.</p>
      <p><strong>Seating:</strong> FCFS or operator-assigned. Paid upgrades guarantee a section (upper deck/window/VIP) rather than a specific table number. Families are seated together.</p>
      <p><strong>Weather / Route:</strong> Marine control, wind or traffic may alter route/berth (e.g., canal waterfall closures). If the operator cancels, you may re-book or receive a full refund; if the cruise operates with a modified route, refunds do not apply.</p>
      <p><strong>Amendment & Cancellation:</strong> Creek/Marina/Canal ≥24h free; 12–24h 50%; &lt;12h or no-show 100%. Lotus/VIP sections ≥48h free; 24–48h 50%; &lt;24h 100%. Event nights (NYE/National Day/major shows) have stricter terms and supplements.</p>
      <p><strong>Compliance & Safety:</strong> Vessels are licensed by DMCA/RTA and carry lifejackets with trained crew. Our transfers use insured vehicles and RTA-licensed drivers.</p>
    </div>

    <div class="text-card">
      <h2>Why Book Your Cruise with WanderWonderWorld</h2>
      <p>
        Competitive ticket pricing, clear upgrades, and real-time support. WhatsApp concierge (08:00–22:00),
        optional private hotel transfers with free child seats on request, occasion add-ons (cake, décor,
        photographer), and one complimentary re-schedule within the policy window (subject to availability)
        keep your evening simple—from confirmation to boarding.
      </p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/boat1.jpg'
import car2 from '@/assets/images/cars/boat2.jpg'
import car3 from '@/assets/images/cars/boat3.jpg'
import car4 from '@/assets/images/cars/boat4.jpg'
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
          question: "What’s included in the ticket price?",
          answer:
            "Your cruise seat, buffet dinner (Halal; veg/non-veg; Jain/vegan by request), water/soft drinks and entertainment when permitted by law/season. Taxes included. Transfers, alcohol (where licensed), seating upgrades and occasion décor are optional add-ons.",
          open: false
        },
        {
          question: "Where do we board and when should we arrive?",
          answer:
            "Your e-voucher shows the exact pier and a map link. Creek/Marina/Canal: board 8:00 PM, sail 8:30 PM. Lotus: report 7:00 PM, sail 7:30 PM for a 3-hour cruise. Please arrive on time—late arrivals are treated as no-show by the boat operator.",
          open: false
        },
        {
          question: "Do you provide hotel transfers?",
          answer:
            "Yes—private round-trip transfers are available (Dubai urban): Sedan 1–4 AED 180, MPV 5–7 AED 220, Van 10–14 AED 350. Jebel Ali/JVC/DIP +AED 40–60; from Sharjah +AED 100. Child seats are free on request (limited).",
          open: false
        },
        {
          question: "Is alcohol served on board?",
          answer:
            "Only on licensed vessels/dates (e.g., Lotus with Premium Drinks add-on). Alcohol is not served during Ramadan and on official dry days as per UAE regulations.",
          open: false
        },
        {
          question: "What is the cancellation policy?",
          answer:
            "Creek/Marina/Canal: ≥24h free; 12–24h 50%; <12h or no-show 100%. Lotus/VIP: ≥48h free; 24–48h 50%; <24h 100%. Event nights have stricter terms.",
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
