<template>
  <div class="packages-34n">
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
      <h1>Abu Dhabi & Hatta Day Trips — Discover more</h1>
      <p>
        Two full-value private day trips built for real UAE conditions. Expect heat-smart pacing,
        verified drivers, bottled water on board, and transparent optional add-ons. On Abu Dhabi days
        we brief you for mosque dress-code and time slots; on Hatta days we keep things scenic and
        flexible around the mountains and dam. Per-car pricing (up to 6 guests) keeps costs clear.
      </p>
    </div>

    <!-- Left floating WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I'm%20interested%20in%20your%20Abu%20Dhabi%20or%20Hatta%20tour."
        class="whatsapp-button hover-reveal"
      >
        <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
        <span class="whatsapp-text">Need help? Chat with us!</span>
      </a>
    </div>

    <!-- CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail">Email us</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal">WhatsApp us</button>
        <button class="cta-btn cta-green" @click="openWechatModal">Wechat us</button>
        <button class="cta-btn cta-red" @click="bookNow">My WonderCart</button>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p><strong>{{ emailToCopy }}</strong> has been copied to your clipboard</p>
      </div>
    </div>

    <!-- QR Modals -->
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

    <!-- ===== Products (Abu Dhabi & Hatta) ===== -->
    <section v-for="p in products" :key="p.id" class="product">
      <h2>{{ p.title }}</h2>
      <p class="blurb">{{ p.blurb }}</p>

      <div class="product-grid">
        <div class="product-card">
          <img :src="p.variantA.image" :alt="p.title" />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge">{{ p.variantA.badge }}</span>
              <span class="price">{{ p.variantA.price }}</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.variantA.points" :key="i">{{ b }}</li>
            </ul>
            <!-- Add to Cart -->
            <button class="btn-addcart" @click="addToCart(p.cartName)">Add to Cart</button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3>Sample Itinerary</h3>
        <ul>
          <li v-for="(step, sIdx) in p.itinerary" :key="'it-'+p.id+'-'+sIdx">
            {{ step }}
          </li>
        </ul>
        <p class="it-note">Timing windows can be adjusted to your flight schedule and seasonal conditions.</p>
      </div>

      <!-- What’s included / Good to know -->
      <div class="rules">
        <h3>What’s included</h3>
        <ul>
          <li v-for="(i,idx) in p.includes" :key="'inc-'+idx">{{ i }}</li>
        </ul>
        <h3>Good to know</h3>
        <ul>
          <li v-for="(n,idx) in p.notes" :key="'note-'+idx">{{ n }}</li>
        </ul>
      </div>
    </section>

    <!-- Global Policy / Terms -->
    <div class="text-card">
      <h2>Pricing & Policy Notes</h2>
      <ul class="policy">
        <li>Per-car rates (7-seater; up to 6 guests). Overtime <strong>AED 75/h</strong> after scheduled touring hours.</li>
        <li>Abu Dhabi: mosque dress code is enforced (ladies: hair/shoulders/legs covered; men: long trousers). Friday visitor hours are limited.</li>
        <li>Hatta: within UAE, no border crossing. Mountain weather or dam activity controls may alter sequence for safety.</li>
        <li>Optional ticketed attractions (Louvre, Qasr Al Watan, kayaking, etc.) are pay-as-you-go and subject to availability.</li>
        <li>Child/booster seats are required by UAE law—please request at booking (each child must occupy a seat).</li>
        <li>Amendment & cancellation: ≥24h free; 12–24h 50%; &lt;12h or no-show 100%. Force-majeure (sandstorm/heavy rain/road closures): re-schedule first; otherwise only unrecoverable supplier costs apply.</li>
        <li>Remote pickups (Jebel Ali / DWC / Sharjah border) may attract a small surcharge. WhatsApp reconfirmation sent 24h before service.</li>
      </ul>
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
  </div>
</template>

<script>
// images
import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import imgAD from '@/assets/images/cars/city3.jpg'
import imgHatta from '@/assets/images/cars/city4.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// cart
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'City34Tours',
  data() {
    return {
      banner, logoGold, logoText,
      whatsappQR, wechatQR,
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      showWhatsappModal: false,
      showWechatModal: false,
      toastTimer: null,

      // ===== Two day trips =====
      products: [
        {
          id: 'auh',
          cartName: 'Abu Dhabi Culture Day',
          title: 'Abu Dhabi Culture Day (10–11 Hours)',
          blurb:
            'A culture-forward route through the UAE capital: enter the Sheikh Zayed Grand Mosque, then choose Louvre Abu Dhabi or Qasr Al Watan time-slot. Balanced with coastal Corniche views and classic photo stops.',
          variantA: {
            image: imgAD,
            badge: 'Up to 6 Guests',
            price: 'from AED 659',
            points: [
              'Grand Mosque inside visit (dress code briefed)',
              'Louvre Abu Dhabi or Qasr Al Watan (choose 1 · add-on)',
              'Corniche drive & Emirates Palace exterior photo stop',
              'Ferrari World / Yas Bay exterior photo options',
              'Flexible lunch stop (own cost) and shopping time',
              'English-speaking driver; bottled water on board'
            ]
          },
          itinerary: [
            '08:30 Pickup in Dubai → optional short stop at Last Exit DXB/AUH bound.',
            '10:00–11:15 Sheikh Zayed Grand Mosque (inside). Security & dress code apply.',
            '11:30–12:00 Drive through Presidential Palace area & Corniche coastline.',
            '12:30–14:00 Choice of Louvre Abu Dhabi (inside) or Qasr Al Watan (inside). Tickets subject to time slot.',
            '14:15–15:00 Emirates Palace exterior photo stop; short coffee break (own cost).',
            '15:30–16:00 Yas Island drive-through: Ferrari World & Yas Bay exteriors; quick photo stop.',
            '~18:30 Return drop-off in Dubai (depending on traffic).'
          ],
          includes: [
            'Private 7-seater vehicle (up to 6 guests) with English-speaking driver for ~10–11 hours.',
            'Bottled water, Salik tolls and official parking fees.',
            'Pickup & drop-off within central Dubai.',
            'Company public-liability insurance; 24h prior WhatsApp reconfirmation.'
          ],
          notes: [
            'Grand Mosque is free entry but strictly enforces dress code (ladies: hair/arms/legs covered; men: long trousers). Security may refuse entry if attire is incomplete.',
            'Fridays have limited visitor hours; we may reorder the day.',
            'Louvre / Qasr Al Watan tickets are optional add-ons and depend on time-slot availability.',
            'Travel time Dubai↔Abu Dhabi varies with traffic; expect 90–120 minutes one way.'
          ]
        },
        {
          id: 'hatta',
          cartName: 'Hatta Mountain Escape',
          title: 'Hatta Mountain Escape (10–11 Hours)',
          blurb:
            'A refreshing mountain day in Dubai’s exclave: turquoise Hatta Dam, heritage village, and adventure-style Wadi Hub. Great for families and photographers; activities are flexible and pay-as-you-go.',
          variantA: {
            image: imgHatta,
            badge: 'Up to 6 Guests',
            price: 'from AED 710',
            points: [
              'Hatta Dam viewpoints (kayak/pedal boat optional)',
              'Hatta Heritage Village & Hill Park for panorama shots',
              'Wadi Hub adventure zone (zipline/archery/axe-throwing etc., seasonal · optional)',
              'Scenic mountain roads with photo stops',
              'Flexible lunch stop at local café (own cost)',
              'English-speaking driver; bottled water on board'
            ]
          },
          itinerary: [
            '08:30 Pickup in Dubai → drive towards the Hajar Mountains.',
            '10:30 Hatta Dam scenic viewpoints; optional kayak/pedal boat rental (subject to availability & safety rules).',
            '11:30 Hatta Heritage Village (traditional fort & exhibits).',
            '13:00 Lunch break at local café (own cost).',
            '14:00–16:00 Wadi Hub: light hike or optional paid activities; visit Hatta Hill Park for wide views.',
            '~18:30 Return drop-off in Dubai.'
          ],
          includes: [
            'Private 7-seater vehicle (up to 6 guests) with English-speaking driver for ~10–11 hours.',
            'Bottled water, Salik tolls and official parking fees.',
            'Pickup & drop-off within central Dubai.',
            'Company public-liability insurance; 24h prior WhatsApp reconfirmation.'
          ],
          notes: [
            'No border crossing—Hatta is within the Emirate of Dubai. Bring ID for activity rentals if requested by operators.',
            'Kayaking and adventure activities are third-party services, payable on site and subject to weather/safety controls.',
            'Summer heat and occasional rain can affect schedules; we re-route for safety as needed.',
            'SUV upgrade recommended for maximum comfort on mountain roads (supplement on request).'
          ]
        }
      ],

      // FAQs
      faqs: [
        {
          question: 'Are your rates per car or per person?',
          answer:
            'Per car (7-seater, up to 6 guests). Larger vehicles or luxury SUVs are available at a supplement. Overtime after the scheduled hours is AED 75/h.',
          open: false
        },
        {
          question: 'Can we customize the route or add attractions?',
          answer:
            'Yes. These are private trips. We adapt the sequence to traffic, ticket slots, weather and your interests. Add-on tickets are pay-as-you-go.',
          open: false
        },
        {
          question: 'Do you provide child seats?',
          answer:
            'Yes. Child/booster seats are required by UAE law. Please tell us ages and counts at booking so we can prepare the correct seats (each child must occupy a seat).',
          open: false
        },
        {
          question: 'Is lunch included?',
          answer:
            'Meals are not included. We provide flexible time for a café/food court stop suited to your preferences and schedule.',
          open: false
        }
      ]
    }
  },
  methods: {
    // Cart actions
    addToCart(name) { useWonderCart().add(name) },
    bookNow() { useWonderCart().open() },

    // FAQs
    toggleFaq(index) { this.faqs[index].open = !this.faqs[index].open },

    // CTA helpers
    async copyEmail() {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(this.emailToCopy)
        } else {
          const ta = document.createElement('textarea')
          ta.value = this.emailToCopy
          ta.style.position = 'fixed'
          ta.style.left = '-9999px'
          document.body.appendChild(ta)
          ta.focus(); ta.select(); document.execCommand('copy')
          document.body.removeChild(ta)
        }
      } finally { this.showToast() }
    },
    showToast() {
      this.showEmailToast = true
      clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => (this.showEmailToast = false), 3000)
    },
    openWhatsappModal() { this.showWhatsappModal = true },
    openWechatModal() { this.showWechatModal = true },
    closeModals() { this.showWhatsappModal = false; this.showWechatModal = false }
  }
}
</script>

<style scoped>
.packages-34n { font-family: 'Poppins', sans-serif; }

/* Banner */
.banner-container { position: relative; width: 100%; height: 300px; overflow: hidden; }
.banner { width: 100%; height: 100%; object-fit: cover; }
.floating-logos { position: absolute; top: 10px; left: 20px; display: flex; flex-direction: column; align-items: flex-start; }
.logo { height: 120px; }
.logo-text { height: 130px; margin-top: -70px; }

/* Intro */
.intro { max-width: 1000px; margin: 30px auto; text-align: left; padding: 0 20px; }
.intro h1 { font-size: 2rem; font-weight: bold; margin-bottom: 10px; }

/* Left floating WhatsApp */
.whatsapp-wrapper {
  position: fixed; left: 7px; top: 75%; transform: translateY(-50%); z-index: 9999;
}
.whatsapp-button {
  display: flex; align-items: center; background: #fff; padding: 1px 15px; border-radius: 100px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2); text-decoration: none; transition: all .3s ease-in-out;
}
.whatsapp-button:hover { transform: scale(1.05); }
.whatsapp-button img { width: 58px; height: 58px; margin-right: 3px; }
.hover-reveal .whatsapp-text { max-width: 0; opacity: 0; overflow: hidden; transition: all .3s ease-in-out; }
.hover-reveal:hover .whatsapp-text { max-width: 200px; opacity: 1; margin-left: 10px; }

/* CTA row */
.cta-row-wrapper { max-width: 1000px; margin: 18px auto 6px; padding: 0 20px; }
.cta-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
@media (max-width: 900px){ .cta-row{ grid-template-columns: repeat(2,1fr);} }
@media (max-width: 520px){ .cta-row{ grid-template-columns: 1fr;} }

.cta-btn{ height:56px; border:none; border-radius:12px; font-weight:700; cursor:pointer;
  transition: transform .08s ease, box-shadow .18s ease; box-shadow:0 4px 12px rgba(0,0,0,.08); }
.cta-btn:active{ transform: translateY(1px); }
.cta-gray  { background:hsl(65, 5%, 53%); color:#fff; }
.cta-green { background:hsl(136, 90%, 27%); color:#fff; }
.cta-red   { background:hsl(0, 93%, 32%); color:#fff; }
.cta-btn:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }

/* Toast & QR modal */
.center-toast{ position:fixed; inset:0; display:grid; place-items:center; z-index:2000; }
.center-toast-box{ background:#fff; padding:16px 22px; border-radius:12px; box-shadow:0 12px 28px rgba(0,0,0,.18); max-width:90vw; text-align:center; }
.qr-modal{ position:fixed; inset:0; background:rgba(0,0,0,.4); display:grid; place-items:center; z-index:2000; }
.qr-modal-box{ position:relative; background:#fff; border-radius:16px; padding:16px; width:min(90vw,520px); box-shadow:0 16px 32px rgba(0,0,0,.25); }
.qr-modal-box img{ width:100%; height:auto; display:block; border-radius:12px; }
.qr-close{ position:absolute; top:8px; right:10px; width:36px; height:36px; border-radius:50%; border:none; background:#f2f2f2; font-size:22px; line-height:1; cursor:pointer; }
.qr-close:hover{ background:#e9e9e9; }

/* Product sections */
.product{ max-width:1000px; margin:34px auto; padding:0 20px; }
.product h2{ font-size:1.6rem; margin:0 0 6px; }
.blurb{ color:#555; margin:0 0 14px; }
.product-grid{ display:grid; grid-template-columns:1fr; gap:18px; }
.product-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.product-card img{ width:100%; height:240px; object-fit:cover; display:block; }
.pc-body{ padding:20px; }
.price-line{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.badge{ background:#eef2ff; color:#1f3a8a; border-radius:999px; padding:4px 10px; font-weight:700; font-size:.85rem; }
.price{ color:#b01b1b; font-weight:800; }

.bullets{ margin:0; padding-left:18px; color:#444; line-height:1.6; }
.bullets li{ margin-bottom:6px; }

/* Add to Cart button */
.btn-addcart{
  width:100%; height:44px; margin-top:12px; border:none; border-radius:10px; font-weight:700; cursor:pointer;
  background:hsl(0, 93%, 32%); color:#fff; transition: box-shadow .18s ease, transform .08s ease;
}
.btn-addcart:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }
.btn-addcart:active{ transform: translateY(1px); }

/* Itinerary & rules */
.itinerary-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; padding:16px; margin-top:14px; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.itinerary-card h3{ margin:6px 0 10px; }
.itinerary-card ul{ margin:0; padding-left:18px; line-height:1.6; color:#444; }
.it-note{ margin-top:8px; font-size:.95rem; color:#666; }

.rules{ background:#f8f8f8; border-radius:12px; padding:16px; margin-top:18px; }
.rules h3{ margin:8px 0; }
.rules ul{ margin:0; padding-left:18px; line-height:1.6; }

/* Global policy */
.text-card{ background:#f8f8f8; margin:40px auto; padding:25px; border-radius:8px; max-width:1000px; line-height:1.6; box-shadow:0 2px 8px rgba(0,0,0,.08); }
.text-card h2{ margin-top:0; }
.policy{ margin:0; padding-left:18px; }

/* FAQs */
.faq-card{ background:#f8f8f8; margin:40px auto; padding:25px; border-radius:8px; max-width:1000px; box-shadow:0 2px 8px rgba(0,0,0,.08); }
.faq-card h2{ margin:0 0 12px; }
.faq-item{ border-bottom:1px solid #ddd; padding:14px 0; cursor:pointer; }
.faq-question{ display:flex; justify-content:space-between; font-weight:600; color:#333; }
.faq-answer{ margin-top:8px; color:#555; }
.faq-icon{ color:#b01b1b; }
</style>
