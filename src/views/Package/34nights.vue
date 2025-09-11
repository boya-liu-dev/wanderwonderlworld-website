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
      <h1>Dubai Tour Packages — 3 & 4 Nights Packages</h1>
      <p>
        Heat-Smart pacing (outdoor in the morning/evening, indoor at noon), Old Dubai walking with an abra ride,
        flexible desert safari, and value-first pricing. An English-speaking driver-guide escorts you throughout
        (licensed guide included for the Old Dubai walk). Adult & Child pricing is clear; hotels with breakfast and
        private airport transfers keep your trip seamless.
      </p>
    </div>

    <!-- Left floating WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I'm%20interested%20in%20your%20tour%20packages."
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

    <!-- ===== Packages (2 sections like regsafari) ===== -->
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
        <li>Land-Only packages (no flights/visa). Per-person rates based on twin/double sharing. Prices include 5% VAT.</li>
        <li>Tourism Dirham is payable at the hotel (~AED 10–20 per room per night, by hotel class).</li>
        <li>Infant 0–2 free (no bed). By UAE law, infants/children must use an age-appropriate seat and occupy a seat in the vehicle—please request at booking. Child 3–10 pays child rate; 11+ adult rate.</li>
        <li>Standard hotel policy: check-in 15:00 / check-out 12:00. Early/late arrangements per hotel availability/surcharge.</li>
        <li>Attraction time slots (e.g., Burj Khalifa, The View, Frame, dinner cruise) are subject to availability and seasonal/event calendars.</li>
        <li>Ramadan & religious dates: camp shows pause; alcohol service restricted; hours may change.</li>
        <li>Amendment & cancellation: ≥48h free; 24–48h 50%; &lt;24h or no-show 100%. Non-refundable tickets/hotel nights follow supplier policy. Force-majeure: re-schedule first; otherwise only unrecoverable costs apply.</li>
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
import img3N from '@/assets/images/cars/tour1.jpg'
import img4N from '@/assets/images/cars/tour2.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// cart
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'Package34Nights',
  data() {
    return {
      banner, logoGold, logoText,
      whatsappQR, wechatQR,
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      showWhatsappModal: false,
      showWechatModal: false,
      toastTimer: null,

      // ===== Two packages =====
      products: [
        {
          id: '3n',
          cartName: '3 Nights Package',
          title: '3 Nights Dubai Starter (4 Days / 3 Nights)',
          blurb: 'First-timer friendly: Old Dubai walk (licensed guide, ~2h) with abra ride, Dubai Frame or The View (choose one), Marina dinner cruise, and an evening desert safari (can switch to a gentler morning version with ≥48h notice).',
          variantA: {
            image: img3N,
            badge: 'Private · Land-Only',
            price: 'Adult from AED 849 · Child from AED 669',
            points: [
              'Heat-Smart pacing: outdoor AM/PM, indoor at noon',
              'Old Dubai walking + Abra (licensed guide ~2h)',
              'Dubai Frame or The View at The Palm (choose 1)',
              'Marina Dinner Cruise (with private transfers)',
              'Evening Desert Safari (or Morning Gentle if ≥48h)',
              'English-speaking driver-guide throughout'
            ]
          },
          itinerary: [
            'D1: Private airport pick-up → 19:30–21:30 Marina Dinner Cruise (with private transfers).',
            'D2: 09:00–11:00 Old Dubai Walking (licensed guide ~2h): Al Fahidi Historical Neighbourhood, external photo stops (e.g., Coffee Museum), Spice/Gold Souk; Abra crossing. 13:30–15:00 Dubai Frame (or The View at The Palm).',
            'D3: 12:00–15:00 free time → 15:00–21:00 Evening Desert Safari (dune drive + shows + BBQ). Families may switch to Morning Gentle with ≥48h notice.',
            'D4: Private airport drop-off.'
          ],
          includes: [
            'DXB private return airport transfers (T1/T2/T3; DWC/other emirates surcharge).',
            'Handpicked hotel with breakfast (3★/4★/5★ options).',
            'Private vehicle + English-speaking driver-guide as per itinerary (half-day ~4–5h; full-day ~8–10h).',
            'Licensed guide for Old Dubai walking (~2h).',
            'Tickets: Dubai Frame or The View (one selection).',
            'Marina Dinner Cruise (with private transfers).',
            'Evening Desert Safari (standard camp; Morning Gentle switch available with ≥48h notice).',
            'Bottled water in vehicle; 24h prior WhatsApp reconfirmation; company public-liability insurance.'
          ],
          notes: [
            'Land-Only (no flights/visa). Rates per person based on twin/double; 5% VAT included. Tourism Dirham is payable at the hotel.',
            'Infant 0–2 free (no bed); car seats are legally required and must be reserved; Child 3–10 at child rate; 11+ adult.',
            'Time slots and sequence may change due to availability/traffic/seasonal events.',
            'Ramadan/religious dates: shows/alcohol restricted at camps.'
          ]
        },
        {
          id: '4n',
          cartName: '4 Nights Package',
          title: '4 Nights Family Value (5 Days / 4 Nights)',
          blurb: 'Family-friendly pacing: Safari on Day 2 to save energy, Burj Khalifa 124/125 (non-prime), JBR & Bluewaters evening stroll, and The View at The Palm.',
          variantA: {
            image: img4N,
            badge: 'Private · Land-Only',
            price: 'Adult from AED 1,099 · Child from AED 919',
            points: [
              'Heat-Smart two-pace with midday indoors',
              'Desert Safari moved to Day 2 for easier rhythm',
              'Burj Khalifa 124/125 (non-prime time slot)',
              'The View at The Palm time-slotted entry',
              'Evening stroll around JBR & Bluewaters (Ain Dubai exterior)',
              'English-speaking driver-guide throughout'
            ]
          },
          itinerary: [
            'D1: Private airport pick-up → 19:30–21:30 Marina Dinner Cruise.',
            'D2: 15:00–21:00 Evening Desert Safari (can switch to Morning Gentle with ≥48h notice).',
            'D3: 09:30–13:30 Modern Dubai half-day: Jumeirah exterior, Souk Madinat exterior, Museum of the Future photo stop. 16:00–17:30 Burj Khalifa 124/125 (non-prime).',
            'D4: 10:30–12:00 The View at The Palm → 17:00–19:30 Bluewaters & JBR seaside walk (Ain Dubai exterior).',
            'D5: Private airport drop-off.'
          ],
          includes: [
            'DXB private return airport transfers; selected hotel with breakfast.',
            'Private vehicle + English-speaking driver-guide per itinerary (half-day/full-day hours as stated).',
            'Tickets: Burj Khalifa 124/125 (non-prime), The View at The Palm, Marina Dinner Cruise (with private transfers).',
            'Evening Desert Safari (standard camp; Morning Gentle switch available with ≥48h notice).',
            'Bottled water in vehicle; 24h prior WhatsApp reconfirmation; company public-liability insurance.'
          ],
          notes: [
            'Land-Only (no flights/visa). Per-person twin/double; 5% VAT included. Tourism Dirham payable at hotel.',
            'Child policy and car-seat law as stated; please pre-book child/booster seats.',
            'Attraction time slots subject to availability; order may change to fit your flights and season.',
            'Ramadan & peak periods may affect entertainment/hours; supplements may apply for New Year’s Eve and major events.'
          ]
        }
      ],

      // FAQs
      faqs: [
        {
          question: 'Is a licensed guide included?',
          answer: 'Yes, a licensed guide is included for the Old Dubai walking segment (~2 hours). Your English-speaking driver-guide handles transport, outdoor basics and coordination on other days.',
          open: false
        },
        {
          question: 'Can we switch the Evening Desert Safari to a gentler morning version?',
          answer: 'Yes. With ≥48h notice we can switch to a morning gentle version that families and seniors often prefer.',
          open: false
        },
        {
          question: 'Are flights and visas included?',
          answer: 'No—these are Land-Only packages. We can advise, but flights/visas are not included.',
          open: false
        },
        {
          question: 'How are child prices applied?',
          answer: 'Child rate applies to ages 3–10 (sharing existing bedding). Infant 0–2 is free (no bed) but must use an age-appropriate car seat by law.',
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
