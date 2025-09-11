<template>
  <div class="details-page">
    <!-- Banner -->
    <div class="banner-container">
      <img src="@/assets/images/banner7.jpg" alt="Desert Safari Banner" class="banner" />
      <div class="floating-logos">
        <img src="@/assets/images/logo-www-gold.png" alt="Gold Logo" class="logo" />
        <img src="@/assets/images/logo-text.png" alt="Text Logo" class="logo-text" />
      </div>
    </div>

    <!-- Title -->
    <div class="intro">
      <h1>Morning Dunes Drive & Sunset Dunes Select</h1>
      <p>
        Private 4×4 desert safaris operated by licensed drivers and commercially insured vehicles.
        Choose a gentle morning adventure or our most popular sunset experience with dinner & shows.
        Optional add-ons like ATV (150cc) and 2-seater dune buggy are available—booked at licensed centers.
      </p>
    </div>

    <!-- 左侧悬浮 WhatsApp（与其他页面一致） -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I'm%20interested%20in%20your%20desert%20safari."
        class="whatsapp-button hover-reveal"
      >
        <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
        <span class="whatsapp-text">Need help? Chat with us!</span>
      </a>
    </div>

    <!-- 4 CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail">Email us</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal">WhatsApp us</button>
        <button class="cta-btn cta-green" @click="openWechatModal">Wechat us</button>
        <button class="cta-btn cta-red" @click="bookNow">Book now</button>
      </div>
    </div>

    <!-- Toast: email copied -->
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

    <!-- Products: one panel (merged) -->
<section v-for="p in products" :key="p.id" class="product">
  <h2>{{ p.title }}</h2>
  <p class="blurb">{{ p.blurb }}</p>

  <div class="product-grid">
    <!-- Single merged card -->
    <div class="product-card">
      <img :src="p.variantA.image" :alt="p.title + ' 4x4'" />
      <div class="pc-body">
        <div class="price-line">
          <span class="badge">{{ p.variantA.badge }}</span>
          <span class="price">from AED {{ p.variantA.price }}</span>
        </div>
        <ul class="bullets">
          <li v-for="(b,i) in p.variantA.points" :key="i">{{ b }}</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Itinerary -->
  <div class="itinerary-card">
    <h3>Itinerary</h3>
    <ul>
      <li v-for="(step, sIdx) in p.itinerary" :key="'it-'+p.id+'-'+sIdx">
        {{ step }}
      </li>
    </ul>
    <p class="it-note">Timing and route may adjust due to traffic, weather or park regulations.</p>
  </div>

  <!-- What’s included / Good to know / Add-ons 引导 -->
  <div class="rules">
    <h3>What’s included</h3>
    <ul>
      <li v-for="(i,idx) in p.includes" :key="'inc-'+idx">{{ i }}</li>
    </ul>
    <h3>Good to know</h3>
    <ul>
      <li v-for="(n,idx) in p.notes" :key="'note-'+idx">{{ n }}</li>
    </ul>
    <div class="addons-cta">
      <router-link to="/safari" class="btn">
        See Add-ons (ATV 150cc, Buggy 2-Seater, Photography, Shisha/Drinks)
      </router-link>
    </div>
  </div>
</section>

    <!-- Policy / Terms block -->
    <div class="text-card">
      <h2>Service Policy & Insurance Summary</h2>
      <ul class="policy">
        <li>Private 4×4 with licensed desert driver; vehicles are covered by commercial motor insurance (at least third-party liability). Personal travel insurance is recommended.</li>
        <li>Pick-up window: please allow ±15 minutes from the advised time for routing/traffic. Drivers may adjust order of stops to avoid congestion.</li>
        <li>Health & safety: dune bashing is not recommended for pregnant guests, guests with serious heart/neck/back conditions, or infants. Child seats are mandatory for under-4s (pre-book).</li>
        <li>Ramadan & religious holidays: live shows and alcohol service are restricted or not available per UAE regulations.</li>
        <li>Alcohol & Shisha: only at licensed camps; age restrictions apply. For Shisha/Drinks pricing, please contact us.</li>
        <li>ATV/Buggy add-ons operate at licensed third-party centers with their own safety rules and insurance; helmets are mandatory and age/height limits apply.</li>
        <li>Free cancellation policy: as per confirmation. Late cancellation/no-show may incur up to 100% charge depending on the case.</li>
        <li>Weather & force majeure: in sandstorm/heavy rain, itinerary may shift to lighter activities, reschedule priority applies; partial refund if services cannot be rendered.</li>
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
import imgMorning from '@/assets/images/cars/safaricar1.jpg'
import imgSunset from '@/assets/images/cars/safaricar2.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

export default {
  name: 'SafariReg',
  data() {
  return {
    products: [
      {
        id: 'morning',
        title: 'Morning Dunes Drive (Classic Line)',
        blurb:
          '08:00–12:30 (~4.5h). Cooler temperatures, softer light and fewer crowds—family and senior friendly.',
        variantA: {
          image: imgMorning,
          badge: 'Private 4×4 (up to 5 pax)',
          price: 500,
          // 已合并右侧要点
          points: [
            'Hotel pick-up & drop-off in Dubai',
            '50–60 min dune bashing at Lahbab or similar',
            'Sandboarding & short camel photo stop (when camp operations permit)',
            'Bottled water onboard',
            'Ideal for small families',
            'Optional add-ons: ATV 150cc / Buggy 2-Seater (see Add-ons)'
          ]
        },
        itinerary: [
          'Pick-up from your hotel/residence in Dubai (08:00 window).',
          'Drive to red-dune area; deflate tires for soft-sand driving.',
          '50–60 minutes dune bashing with scenic photo stops.',
          'Sandboarding; short camel photo stop if camp is operating.',
          'Return drive to Dubai and drop-off at your location.'
        ],
        includes: [
          'Private 4×4 with professional desert driver',
          'Dune bashing (~50–60 minutes)',
          'Photo stops on high dunes',
          'Drinking water'
        ],
        notes: [
          'Best for families with kids or seniors; gentler temperatures in the morning.',
          'Add-ons (ATV/Buggy/Photography) are optional at licensed centers; bookable via Desert Safari page.',
          'Health limits apply (pregnancy/heart/neck/back issues not advised). Child seats available on request.'
        ]
      },
      {
        id: 'sunset',
        title: 'Sunset Dunes Select (Signature Line)',
        blurb:
          '15:00–21:00 (~6h). Our most popular safari: dune bashing + sunset photos + camp dinner with live shows.',
        variantA: {
          image: imgSunset,
          badge: 'Private 4×4 (up to 5 pax)',
          price: 700,
          // 已合并右侧要点
          points: [
            'Hotel pick-up & drop-off in Dubai',
            '50–60 min dune bashing + sunset photo stop',
            'Camp access: BBQ buffet dinner (veg & non-veg), live shows*',
            'Short camel ride & sandboarding (camp-operated)',
            'Soft drinks included at standard camps',
            'Optional add-ons: ATV 150cc / Buggy 2-Seater / Photography'
          ]
        },
        itinerary: [
          'Pick-up from your hotel/residence (15:00 window).',
          'Drive to desert; deflate tires; start dune bashing (50–60 minutes).',
          'Sunset photo stop on the high dunes.',
          'Enter licensed camp: welcome refreshments; short camel ride; sandboarding.',
          'BBQ buffet dinner (veg & non-veg) and live shows*; tea/coffee/soft drinks (as per camp).',
          'Return drive and drop-off at your location around 21:00.'
        ],
        includes: [
          'Private 4×4 with licensed driver',
          'Dune bashing, sunset photo stop',
          'Camp access with dinner and live entertainment',
          'Drinking water + soft drinks (as per camp policy)'
        ],
        notes: [
          '*Ramadan & certain religious dates: live shows and alcohol service may be restricted or unavailable.',
          'Alcohol/Shisha available only at licensed camps (extra). For pricing please contact us.',
          'ATV/Buggy are third-party add-ons with their own safety rules/insurance; helmets mandatory; age limits apply.',
          'Photography Package is an add-on for regular lines and included free only in Royal Dunes Safari.'
        ]
      }
    ],

      // ====== CTA state ======
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      toastTimer: null,
      showWhatsappModal: false,
      showWechatModal: false,
      whatsappQR,
      wechatQR,

      // ====== FAQs ======
      faqs: [
        {
          question: 'Is the safari insured and safe for families?',
          answer:
            'Yes. Vehicles/drivers are commercially licensed and insured; routes are chosen for safety. Morning line is especially family-friendly. Child seats are available on request and mandatory for under-4s.',
          open: false
        },
        {
          question: 'Can I add ATV or buggy to my tour?',
          answer:
            'Yes. ATV (150cc) and 2-seater buggy are optional add-ons operated by licensed centers with their own rules/insurance. You can view and request them on our Desert Safari page.',
          open: false
        },
        {
          question: 'What about dinner, shows and alcohol at the camp?',
          answer:
            'Dinner and live shows are included in the Sunset line (camp-operated). Alcohol and Shisha are available only at licensed camps and charged extra; during Ramadan shows/alcohol are restricted.',
          open: false
        },
        {
          question: 'What should I wear / bring?',
          answer:
            'Light casual wear, sunglasses, sunscreen and closed-toe shoes or sandals. In winter months, evenings can be chilly—bring a light jacket.',
          open: false
        }
      ]
    }
  },
  methods: {
    // FAQs
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open
    },

    // CTA actions
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
          ta.focus()
          ta.select()
          document.execCommand('copy')
          document.body.removeChild(ta)
        }
      } finally {
        this.showToast()
      }
    },
    showToast() {
      this.showEmailToast = true
      clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => (this.showEmailToast = false), 3000)
    },
    openWhatsappModal() { this.showWhatsappModal = true },
    openWechatModal() { this.showWechatModal = true },
    closeModals() { this.showWhatsappModal = false; this.showWechatModal = false },
    bookNow() { this.$router.push('/contact') }
  }
}
</script>

<style scoped>
.details-page { font-family: 'Poppins', sans-serif; }

/* Banner */
.banner-container { position: relative; width: 100%; height: 300px; overflow: hidden; }
.banner { width: 100%; height: 100%; object-fit: cover; }
.floating-logos { position: absolute; top: 10px; left: 20px; display: flex; flex-direction: column; align-items: flex-start; }
.logo { height: 120px; }
.logo-text { height: 130px; margin-top: -70px; }

/* Intro */
.intro { max-width: 1000px; margin: 28px auto; padding: 0 20px; text-align: left; }
.intro h1 { font-size: 2rem; margin: 0 0 8px; }

/* 左侧悬浮 WhatsApp */
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
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
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
  max-width: 200px; opacity: 1; margin-left: 10px;
}

/* CTA row */
.cta-row-wrapper { max-width: 1000px; margin: 18px auto 6px; padding: 0 20px; }
.cta-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
@media (max-width: 900px){ .cta-row{ grid-template-columns: repeat(2,1fr);} }
@media (max-width: 520px){ .cta-row{ grid-template-columns: 1fr;} }

.cta-btn{ height:56px; border:none; border-radius:12px; font-weight:700; cursor:pointer;
  transition: transform .08s ease, box-shadow .18s ease; box-shadow:0 4px 12px rgba(0,0,0,.08); }
.cta-btn:active{ transform: translateY(1px); }
.cta-gray  { background:hsl(65, 5%, 53%); color:hsl(0, 0%, 100%); }
.cta-green { background:hsl(136, 90%, 27%); color:hsl(0, 0%, 100%); }
.cta-red   { background:hsl(0, 93%, 32%); color:hsl(0, 0%, 100%); }
.cta-btn:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }

/* Toast & QR modal */
.center-toast{ position:fixed; inset:0; display:grid; place-items:center; z-index:2000; }
.center-toast-box{ background:#fff; padding:16px 22px; border-radius:12px; box-shadow:0 12px 28px rgba(0,0,0,.18); max-width:90vw; text-align:center; }
.qr-modal{ position:fixed; inset:0; background:rgba(0,0,0,.4); display:grid; place-items:center; z-index:2000; }
.qr-modal-box{ position:relative; background:#fff; border-radius:16px; padding:16px; width:min(90vw,520px); box-shadow:0 16px 32px rgba(0,0,0,.25); }
.qr-modal-box img{ width:100%; height:auto; display:block; border-radius:12px; }
.qr-close{ position:absolute; top:8px; right:10px; width:36px; height:36px; border-radius:50%; border:none; background:#f2f2f2; font-size:22px; line-height:1; cursor:pointer; }
.qr-close:hover{ background:#e9e9e9; }

/* Product cards */
.product { max-width:1000px; margin:34px auto; padding:0 20px; }
.product h2 { font-size:1.6rem; margin:0 0 6px; }
.blurb { color:#555; margin:0 0 14px; }

/* 单列、左对齐 */
.product-grid{
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}
@media (max-width: 820px){ .product-grid{ grid-template-columns:1fr; } }

.product-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.product-card img{ width:100%; height:240px; object-fit:cover; display:block; }
.pc-body{ padding:20px; }
.price-line{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.badge{ background:#eef2ff; color:#1f3a8a; border-radius:999px; padding:4px 10px; font-weight:700; font-size:.85rem; }
.price{ color:#b01b1b; font-weight:800; }

.bullets{ margin:0; padding-left:18px; color:#444; line-height:1.6; }
.bullets li{ margin-bottom:6px; }

/* Rules & Policy blocks */
.rules{ background:#f8f8f8; border-radius:12px; padding:16px; margin-top:18px; }
.rules h3{ margin:8px 0; }
.rules ul{ margin:0; padding-left:18px; line-height:1.6; }
.addons-cta{ margin-top:10px; }
.addons-cta .btn{
  display:inline-block; background:#c3aa0c; color:#fff; padding:8px 12px; border-radius:8px; text-decoration:none; font-weight:600;
}

/* Text card */
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

/* ===== Itinerary card ===== */
.itinerary-card{
  background:#fff;
  border:1px solid #e6e6e6;
  border-radius:12px;
  padding:16px;
  margin-top:14px;
  box-shadow:0 2px 8px rgba(0,0,0,.06);
}
.itinerary-card h3{ margin:6px 0 10px; }
.itinerary-card ul{ margin:0; padding-left:18px; line-height:1.6; color:#444; }
.it-note{ margin-top:8px; font-size:.95rem; color:#666; }
</style>
