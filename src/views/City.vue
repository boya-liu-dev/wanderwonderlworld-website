<template>
  <div class="city">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="Packages Banner"
        class="banner"
        id="cityBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="Gold Logo"
          class="logo"
          id="cityLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="Text Logo"
          class="logo-text"
          id="cityLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="cityIntroTitle" data-c="@id">Dubai City Tours — Flexible & Discovery</h1>
      <p id="cityIntroP1" data-c-html="@id">
        Explore Dubai your way with four private, per-car city tours. We plan with heat-smart pacing
        (outdoors in the morning/evening, indoors at midday), and include an Old Dubai walking segment
        with an abra ride on our Dubai routes (guided by a licensed walking guide; your English-speaking
        driver escorts you for the rest of the day). Clear, value-first pricing, up to 6 guests per car,
        bottled water on board, and verified vehicles keep the day smooth from hotel pickup to drop-off.
      </p>
    </div>

    <div class="whatsapp-wrapper">
      <a
        id="cityWhatsappLink"
        data-c-src="@id"
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
        class="whatsapp-button hover-reveal">
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="cityWhatsappIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="cityWhatsappText" data-c="@id">Need help? Chat with us!</span>
      </a>
    </div>

    <!-- Cards (4 packages) -->
    <div class="cards-container">
      <CarCard
        key-id="cityCardHalfDay"
        :image="car1"
        title="Half-Day Dubai Essentials"
        subtitle="City-Tour-Services"
        tour="Dubai City"
        duration="5 Hours"
        price="from AED 325"
        link="/city/city12"
      />

      <CarCard
        key-id="cityCardFullDay"
        :image="car2"
        title="Full-Day Dubai Panorama"
        subtitle="City-Tour-Services"
        tour="Dubai City"
        duration="10 Hours"
        price="from AED 559"
        link="/city/city12"
      />

      <CarCard
        key-id="cityCardAbuDhabi"
        :image="car3"
        title="Abu Dhabi Culture Day"
        subtitle="City-Tour-Services"
        tour="Abu Dhabi"
        duration="10-11 Hours"
        price="from AED 659"
        link="/city/city34"
      />

      <CarCard
        key-id="cityCardHatta"
        :image="car4"
        title="Hatta Mountain Escape"
        subtitle="City-Tour-Services"
        tour="Hatta"
        duration="10-11 Hours"
        price="from AED 710"
        link="/city/city34"
      />
    </div>

    <!-- Price List -->
    <div class="text-card">
      <h2 id="cityPriceTitle" data-c="@id">Dubai City Tour Price List</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th id="cityPriceThTour" data-c="@id">City Tour</th>
            <th id="cityPriceThTime" data-c="@id">Time/Duration</th>
            <th id="cityPriceThPrice" data-c="@id">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="cityPriceHalfTitle" data-c="@id">Half-Day Dubai Essentials</td>
            <td id="cityPriceHalfTime" data-c="@id">5 Hours</td>
            <td>
              <strong style="color:#b01b1b;">
                from
                <span
                  id="cityPriceHalfFrom"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 325</span>
              </strong>
            </td>
          </tr>
          <tr>
            <td id="cityPriceFullTitle" data-c="@id">Full-Day Dubai Panorama</td>
            <td id="cityPriceFullTime" data-c="@id">10 Hours</td>
            <td>
              <strong style="color:#b01b1b;">
                from
                <span
                  id="cityPriceFullFrom"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 559</span>
              </strong>
            </td>
          </tr>
          <tr>
            <td id="cityPriceADTitle" data-c="@id">Abu Dhabi Culture Day</td>
            <td id="cityPriceADTime" data-c="@id">10–11 Hours</td>
            <td>
              <strong style="color:#b01b1b;">
                from
                <span
                  id="cityPriceADFrom"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 659</span>
              </strong>
            </td>
          </tr>
          <tr>
            <td id="cityPriceHattaTitle" data-c="@id">Hatta Mountain Escape</td>
            <td id="cityPriceHattaTime" data-c="@id">10–11 Hours</td>
            <td>
              <strong style="color:#b01b1b;">
                from
                <span
                  id="cityPriceHattaFrom"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 710</span>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p id="cityPriceNote" data-c-html="@id" style="margin-top:8px;font-size:0.95rem;color:#555;">
        * Rates are <strong>per car</strong> (7-seater, up to 6 guests). Overtime <strong>AED 75/h</strong>.
        Old Dubai walking + abra is included on Dubai routes. Attraction tickets and meals are optional
        add-ons unless specified. Child/booster seats available on request (by law).
      </p>
    </div>

    <!-- CTA buttons (unchanged) -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="cityCTAEmail" data-c="@id">Email us</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="cityCTAWhatsApp" data-c="@id">WhatsApp us</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="cityCTAWechat" data-c="@id">Wechat us</button>
        <button class="cta-btn cta-red" @click="bookNow" id="cityCTACart" data-c="@id">My WonderCart</button>
      </div>
    </div>

    <!-- Toast & Modals (unchanged) -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="cityEmailCopiedText" data-c-html="@id">
          <strong>info@wanderwonderworlddubai.com</strong> has been copied to your clipboard
        </p>
      </div>
    </div>

    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp QR" id="cityWhatsappQR" data-c-src="@id" />
      </div>
    </div>

    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="WeChat QR" id="cityWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="cityFaqTitle" data-c="@id">FAQs</h2>
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
      <h2 id="cityS1Title" data-c="@id">Discover Dubai Your Way: Our Private City Tours</h2>
      <p id="cityS1P1" data-c-html="@id"><strong>Half-Day Dubai Essentials:</strong> Old Dubai walking (licensed guide) + abra crossing, souks, a Jumeirah seaside photo stop, and a finale at Dubai Mall/Fountain (or MoTF exterior). A compact 5-hour plan that beats the heat and traffic.</p>
      <p id="cityS1P2" data-c-html="@id"><strong>Full-Day Dubai Panorama:</strong> The complete Dubai day with heat-smart flow: Old Dubai walking + abra in the morning; midday indoors at Dubai Frame or The View (or Burj Khalifa 124/125); golden-hour photos around Souk Madinat and Dubai Marina/Bluewaters/JBR.</p>
      <p id="cityS1P3" data-c-html="@id"><strong>Abu Dhabi Culture Day:</strong> Inside visit at Sheikh Zayed Grand Mosque (dress code required), drive by the Presidential Palace & Corniche, and either Louvre Abu Dhabi or Qasr Al Watan (subject to ticket slots). We adjust timing for Friday prayers and traffic.</p>
      <p id="cityS1P4" data-c-html="@id"><strong>Hatta Mountain Escape:</strong> Scenic dam viewpoints with optional kayaking, Heritage Village, Wadi Hub activity zone, and Hatta Hill Park. 4×4 recommended. Weather and road conditions may shift the order for safety.</p>
    </div>

    <div class="text-card">
      <h2 id="cityS2Title" data-c="@id">Terms & Conditions (City Tours)</h2>
      <p id="cityS2P1" data-c-html="@id"><strong>Pricing & Seating:</strong> Rates are per car (7-seater, up to 6 guests). Overtime AED 75/h. Remote pickups (Jebel Ali/DWC/Sharjah border) may incur a small surcharge. Fixed starts help avoid peak traffic; custom times on request.</p>
      <p id="cityS2P2" data-c-html="@id"><strong>Inclusions:</strong> Private vehicle with an English-speaking driver, Old Dubai walking (~2h) with a licensed guide on Dubai routes, abra tickets (Dubai routes), bottled water, Salik tolls, and official parking fees.</p>
      <p id="cityS2P3" data-c-html="@id"><strong>Exclusions:</strong> Attraction tickets and meals unless stated; optional activity fees (e.g., kayaking, observatories); licensed full-day guide add-on; peak/event supplements; gratuities; personal travel insurance.</p>
      <p id="cityS2P4" data-c-html="@id"><strong>Child Seats & Safety:</strong> UAE law requires age-appropriate child/booster seats. Please request seats at booking; each child must occupy a seat. No eating/drinking/smoking inside vehicles.</p>
      <p id="cityS2P5" data-c-html="@id"><strong>Abu Dhabi Grand Mosque:</strong> Ladies must cover hair, shoulders, and legs; men must wear long trousers. Security is strict; non-compliant attire may be refused entry. Friday visitor hours are limited.</p>
      <p id="cityS2P6" data-c-html="@id"><strong>Ramadan & Peak Periods:</strong> Entertainment at desert camps pauses; alcohol service is restricted; attraction hours may change. New Year’s Eve and major events can carry mandatory supplements and road closures.</p>
      <p id="cityS2P7" data-c-html="@id"><strong>Amendment & Cancellation:</strong> ≥24h free change/cancel; 12–24h 50%; &lt;12h or no-show 100%. Non-refundable tickets follow supplier policy. For force-majeure (sandstorm/heavy rain/closures), we reschedule first; if not possible, only unrecoverable costs apply.</p>
    </div>

    <div class="text-card">
      <h2 id="cityS3Title" data-c="@id">WanderWonderWorld City Tour Services</h2>
      <p id="cityS3P1" data-c-html="@id">
        We run heat-smart itineraries, include Old Dubai walking + abra as standard on Dubai routes,
        and keep add-ons transparent. WhatsApp concierge (08:00–22:00), verified drivers and vehicles,
        clean and safe stops, child seats on request, and one complimentary re-schedule (≥24h) make
        your day easy from pickup to drop-off.
      </p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/city1.jpg'
import car2 from '@/assets/images/cars/city2.jpg'
import car3 from '@/assets/images/cars/city3.jpg'
import car4 from '@/assets/images/cars/city4.jpg'
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
          question: "What’s included in the tour price?",
          answer:
            "Private vehicle with an English-speaking driver, Old Dubai walking (~2h) with a licensed guide on Dubai routes, abra tickets (Dubai routes), bottled water, Salik tolls and official parking fees. Tickets and meals are optional add-ons unless specified.",
          open: false
        },
        {
          question: "Are the rates per car or per person?",
          answer:
            "Per car, up to 6 guests in a 7-seater. Child/booster seats are required by law and can be requested when booking. Larger vehicles (Hiace/minibus/SUV upgrade) are available at a supplement.",
          open: false
        },
        {
          question: "Can we change the sightseeing order?",
          answer:
            "Yes. Tours are private and flexible. We adapt to your flight times, season, traffic and ticket slots. On peak days we may re-sequence to secure better time windows.",
          open: false
        },
        {
          question: "Is the Abu Dhabi Mosque dress code enforced?",
          answer:
            "Absolutely. Ladies must cover hair, shoulders and legs; men must wear long trousers. Security is strict and may refuse entry if attire is incomplete. Friday visitor hours are limited.",
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
