<template>
  <div class="packages-56n">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="Packages Banner"
        class="banner"
        id="pkg56EnBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="Gold Logo"
          class="logo"
          id="pkg56EnLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="Text Logo"
          class="logo-text"
          id="pkg56EnLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="pkg56EnIntroTitle" data-c="@id">Dubai Tour Packages — 5 & 6 Nights Packages</h1>
      <p id="pkg56EnIntroBlurb" data-c-html="@id">
        Heat-Smart Two-Pace (outdoor in the morning/evening and indoor at noon), Old Dubai walking plus an abra ride,
        flexible desert safari options, and value-first pricing with clear Adult & Child rates. An English-speaking
        driver-guide escorts you throughout (licensed guide included for the Old Dubai walk). Private airport transfers,
        handpicked hotels with breakfast, and compliant, insured vehicles keep your holiday smooth and safe.
      </p>
    </div>

    <!-- Left floating WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I'm%20interested%20in%20your%20tour%20packages."
        class="whatsapp-button hover-reveal"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="pkg56EnWhatsappIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="pkg56EnWhatsappText" data-c="@id">Need help? Chat with us!</span>
      </a>
    </div>

    <!-- CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="pkg56EnCTAEmail" data-c="@id">Email us</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="pkg56EnCTAWhatsApp" data-c="@id">WhatsApp us</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="pkg56EnCTAWechat" data-c="@id">Wechat us</button>
        <button class="cta-btn cta-red" @click="bookNow" id="pkg56EnCTACart" data-c="@id">My WonderCart</button>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="pkg56EnEmailCopied" data-c-html="@id"><strong>{{ emailToCopy }}</strong> has been copied to your clipboard</p>
      </div>
    </div>

    <!-- QR Modals -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp QR" id="pkg56EnWhatsappQR" data-c-src="@id" />
      </div>
    </div>
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="WeChat QR" id="pkg56EnWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- ===== Packages (2 sections) ===== -->
    <section v-for="p in products" :key="p.id" class="product">
      <h2 :id="`pkg56En_${p.id}Title`" :data-c="'@id'">{{ p.title }}</h2>
      <p class="blurb" :id="`pkg56En_${p.id}Blurb`" :data-c-html="'@id'">{{ p.blurb }}</p>

      <div class="product-grid">
        <div class="product-card">
          <img
            :src="p.variantA.image"
            :alt="p.title"
            :id="`pkg56En_${p.id}Image`"
            data-c-src="@id"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`pkg56En_${p.id}Badge`" :data-c="'@id'">{{ p.variantA.badge }}</span>
              <span class="price" :id="`pkg56En_${p.id}Price`" :data-c="'@id'">{{ p.variantA.price }}</span>
            </div>
            <ul class="bullets">
              <li
                v-for="(b,i) in p.variantA.points"
                :key="i"
                :id="`pkg56En_${p.id}Point_${i}`"
                :data-c="'@id'"
              >
                {{ b }}
              </li>
            </ul>
            <!-- Add to Cart -->
            <button
              class="btn-addcart"
              @click="addToCart(p.cartName)"
              :id="`pkg56En_${p.id}AddCart`"
              :data-c="'@id'"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3 :id="`pkg56En_${p.id}ItineraryTitle`" :data-c="'@id'">Sample Itinerary</h3>
        <ul>
          <li
            v-for="(step, sIdx) in p.itinerary"
            :key="'it-'+p.id+'-'+sIdx"
            :id="`pkg56En_${p.id}It_${sIdx}`"
            :data-c="'@id'"
          >
            {{ step }}
          </li>
        </ul>
        <p class="it-note" :id="`pkg56En_${p.id}ItNote`" :data-c="'@id'">
          Time windows may adjust to flight schedules, attraction slots, and seasonal events.
        </p>
      </div>

      <!-- What’s included / Good to know -->
      <div class="rules">
        <h3 :id="`pkg56En_${p.id}IncTitle`" :data-c="'@id'">What’s included</h3>
        <ul>
          <li
            v-for="(i,idx) in p.includes"
            :key="'inc-'+idx"
            :id="`pkg56En_${p.id}Inc_${idx}`"
            :data-c="'@id'"
          >
            {{ i }}
          </li>
        </ul>
        <h3 :id="`pkg56En_${p.id}NoteTitle`" :data-c="'@id'">Good to know</h3>
        <ul>
          <li
            v-for="(n,idx) in p.notes"
            :key="'note-'+idx"
            :id="`pkg56En_${p.id}Note_${idx}`"
            :data-c="'@id'"
          >
            {{ n }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Global Policy / Terms -->
    <div class="text-card">
      <h2 id="pkg56EnPolicyTitle" data-c="@id">Pricing & Policy Notes</h2>
      <ul class="policy">
        <li id="pkg56EnPolicy_0" data-c="@id">Land-Only (no flights/visa). Per-person rates based on twin/double sharing. Prices include 5% VAT.</li>
        <li id="pkg56EnPolicy_1" data-c="@id">Tourism Dirham payable at the hotel (~AED 10–20 per room per night, by hotel class).</li>
        <li id="pkg56EnPolicy_2" data-c="@id">Infant 0–2 free (no bed). UAE law requires age-appropriate child/booster seats and a seat per passenger—please pre-book the seats you need.</li>
        <li id="pkg56EnPolicy_3" data-c="@id">Standard hotel policy: check-in 15:00 / check-out 12:00; early/late subject to availability/surcharge.</li>
        <li id="pkg56EnPolicy_4" data-c="@id">Attraction slots (Burj Khalifa, The View, Frame, Louvre, dinner cruise) depend on season and events—sequence may change accordingly.</li>
        <li id="pkg56EnPolicy_5" data-c="@id">Ramadan & religious dates: live shows pause; alcohol service restricted or unavailable; hours may vary.</li>
        <li id="pkg56EnPolicy_6" data-c="@id">Amendment & cancellation: ≥48h free; 24–48h 50%; &lt;24h or no-show 100%. Non-refundable tickets/hotel nights follow supplier policy. Force-majeure: we re-schedule first; otherwise only unrecoverable costs apply.</li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="pkg56EnFaqTitle" data-c="@id">FAQs</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span :id="`pkg56EnFaqQ_${index}`" :data-c="'@id'">{{ faq.question }}</span>
          <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p :id="`pkg56EnFaqA_${index}`" :data-c="'@id'">{{ faq.answer }}</p>
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
import img5N from '@/assets/images/cars/tour3.jpg'
import img6N from '@/assets/images/cars/tour4.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// cart
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'Package56Nights',
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
          id: '5n',
          cartName: '5 Nights Package',
          title: '5 Nights Dubai + Abu Dhabi Highlights (6 Days / 5 Nights)',
          blurb: 'Abu Dhabi sits mid-trip for better flow: Sheikh Zayed Grand Mosque (inside, with dress code), Corniche stop, and Louvre Abu Dhabi (typically closed on Mondays—routing will adjust).',
          variantA: {
            image: img5N,
            badge: 'Private · Land-Only',
            price: 'Adult from AED 1,349 · Child from AED 1,169',
            points: [
              'Heat-Smart two-pace (outdoor AM/PM, indoor at noon)',
              'Old Dubai walking + Abra with licensed guide (~2h)',
              'Burj Khalifa 124/125 (non-prime) time slot',
              'Abu Dhabi day: Mosque inside + Louvre inside',
              'Evening Desert Safari (upgrade to Prestige optional)',
              'Marina Dinner Cruise (with private transfers)'
            ]
          },
          itinerary: [
            'D1: Private airport pick-up → 19:30–21:30 Marina Dinner Cruise.',
            'D2: 09:00–11:00 Old Dubai Walking (licensed guide ~2h) + Abra → 16:00–17:30 Burj Khalifa 124/125 (non-prime).',
            'D3: 08:30–19:30 Abu Dhabi day: Sheikh Zayed Grand Mosque inside (Fri visitor hours limited; dress code applies) → Corniche stop → Louvre Abu Dhabi inside (typically closed on Mondays; schedule will swap if needed).',
            'D4: 15:00–21:00 Evening Desert Safari (Prestige upgrade on request).',
            'D5: 10:30–12:00 The View at The Palm or Dubai Frame (choose 1) → free shopping time.',
            'D6: Private airport drop-off.'
          ],
          includes: [
            'DXB private return airport transfers; selected hotel with breakfast.',
            'Private vehicle + English-speaking driver-guide per itinerary (half-day ~4–5h; full-day ~8–10h; Abu Dhabi ~10–11h).',
            'Licensed guide for Old Dubai walking (~2h).',
            'Tickets: Burj Khalifa 124/125 (non-prime), Louvre Abu Dhabi, The View or Dubai Frame (choose 1), Marina Dinner Cruise.',
            'Evening Desert Safari (standard camp; upgrade to Prestige available).',
            'Bottled water in vehicle; 24h prior WhatsApp reconfirmation; company public-liability insurance.'
          ],
          notes: [
            'Land-Only (no flights/visa). Per-person twin/double; 5% VAT included. Tourism Dirham payable at hotel.',
            'Grand Mosque dress code enforced; security may refuse entry if attire is incomplete. Friday visitor hours limited.',
            'Louvre typically closed Mondays; we will swap days if needed.',
            'Time slots/sequence subject to availability, traffic and seasonal events; Ramadan may restrict shows/alcohol at camps.'
          ]
        },
        {
          id: '6n',
          cartName: '6 Nights Package',
          title: '6 Nights Signature Plus (7 Days / 6 Nights)',
          blurb: 'VIP Desert Safari (upgraded camp, seating and service), Atlantis Aquaventure + Lost Chambers, plus a full-day Abu Dhabi. Suits families/couples seeking culture + waterpark + premium camp experience.',
          variantA: {
            image: img6N,
            badge: 'Private · Land-Only',
            price: 'Adult from AED 1,599 · Child from AED 1,419',
            points: [
              'Full-day modern Dubai with Burj Khalifa 124/125',
              'VIP Evening Desert Safari (upgraded camp experience)',
              'Abu Dhabi day: Mosque inside + Qasr Al Watan Courtyard or Louvre',
              'Atlantis Aquaventure Waterpark + Lost Chambers',
              'The View at The Palm time-slotted entry',
              'Optional sunset private yacht 1–2h from Dubai Marina'
            ]
          },
          itinerary: [
            'D1: Private airport pick-up → Marina Dinner Cruise.',
            'D2: Full-day modern Dubai: City Walk/Box Park photo stops + Burj Khalifa 124/125.',
            'D3: 15:00–21:00 VIP Evening Desert Safari (upgraded camp and service).',
            'D4: 08:30–19:30 Abu Dhabi day: Grand Mosque inside + Qasr Al Watan Courtyard OR Louvre (choose 1 based on opening/interest).',
            'D5: Atlantis Aquaventure + Lost Chambers (waterpark + aquarium).',
            'D6: 10:30–12:00 The View at The Palm → afternoon free (optional private yacht 1–2h / afternoon tea).',
            'D7: Private airport drop-off.'
          ],
          includes: [
            'DXB private return airport transfers; selected hotel with breakfast (3★/4★/5★ options).',
            'Private vehicle + English-speaking driver-guide per itinerary; licensed guide included for the Old Dubai walk if scheduled.',
            'Tickets: Burj Khalifa 124/125 (non-prime), The View at The Palm, Atlantis Aquaventure + Lost Chambers, Marina Dinner Cruise.',
            'VIP Evening Desert Safari (upgraded camp).',
            'Abu Dhabi day touring with Mosque inside + Qasr Al Watan Courtyard or Louvre ticket (as confirmed).',
            'Bottled water in vehicle; 24h prior WhatsApp reconfirmation; company public-liability insurance.'
          ],
          notes: [
            'Land-Only (no flights/visa). Per-person twin/double; 5% VAT included. Tourism Dirham payable at hotel.',
            'Grand Mosque dress code applies; routing may change around Friday prayer hours.',
            'Waterpark operations vary by season; height/age rules apply for certain rides.',
            'Ramadan & peak periods: entertainment/serving rules and attraction hours may change; New Year’s Eve and major events may carry supplements.'
          ]
        }
      ],

      // FAQs
      faqs: [
        {
          question: 'Are licensed guides included on every day?',
          answer: 'A licensed guide is included specifically for the Old Dubai walking segment (~2 hours). Your English-speaking driver-guide handles transport, outdoor basics and coordination on other days.',
          open: false
        },
        {
          question: 'Can we change the order of days?',
          answer: 'Yes. Private packages are flexible. We adjust day order and time slots around your flights, seasonal heat, religious dates and major events.',
          open: false
        },
        {
          question: 'Are child seats mandatory?',
          answer: 'Yes. UAE law requires infants/children to use age-appropriate seats and occupy a seat in the vehicle. Please request the child/booster seats you need when booking.',
          open: false
        },
        {
          question: 'Is alcohol available during desert experiences?',
          answer: 'Only at licensed camps and not during certain religious dates (e.g., Ramadan). Entertainment may also pause. We will brief you on your dates.',
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
.packages-56n { font-family: 'Poppins', sans-serif; }

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
