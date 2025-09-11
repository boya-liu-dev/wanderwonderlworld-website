<template>
  <div class="details-page">
    <!-- Banner -->
    <div class="banner-container">
      <img src="@/assets/images/banner7.jpg" alt="Transfers Banner" class="banner" />
      <div class="floating-logos">
        <img src="@/assets/images/logo-www-gold.png" alt="Gold Logo" class="logo" />
        <img src="@/assets/images/logo-text.png" alt="Text Logo" class="logo-text" />
      </div>
    </div>

    <!-- Title -->
    <div class="intro">
      <h1>Full-Day with Driver & Dubai → Abu Dhabi Day Trip</h1>
      <p>
        Full-day private car with driver for deeper exploration, or a curated Dubai → Abu Dhabi
        sightseeing day trip. Commercially insured vehicles, professional chauffeurs, and flexible
        timing tailored to your plan.
      </p>
    </div>

    <!-- 左侧悬浮 WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
        class="whatsapp-button hover-reveal"
      >
        <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
        <span class="whatsapp-text">Need help? Chat with us!</span>
      </a>
    </div>

    <!-- 4 CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <!-- 直接唤起邮箱 -->
        <a class="cta-btn cta-gray" :href="`mailto:${emailToCopy}`">Email us</a>
        <button class="cta-btn cta-green" @click="openWhatsappModal">WhatsApp us</button>
        <button class="cta-btn cta-green" @click="openWechatModal">Wechat us</button>
        <!-- 直接打开 WonderCart -->
        <button class="cta-btn cta-red" @click="bookNow">My WonderCart</button>
      </div>
    </div>

    <!-- Toast（仍保留，当前不再触发） -->
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

    <!-- Products -->
    <section v-for="p in products" :key="p.id" class="product">
      <h2>{{ p.title }}</h2>
      <p class="blurb">{{ p.blurb }}</p>

      <div class="product-grid">
        <!-- SUV -->
        <div class="product-card">
          <img :src="p.suv.image" :alt="p.title + ' SUV'" />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge">SUV (4–6 pax)</span>
              <span class="price">from AED {{ p.suv.price }}</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.suv.points" :key="i">{{ b }}</li>
            </ul>
            <!-- Add to Cart（红底白字） -->
            <button
              class="btn-addcart"
              @click="addToCart(p.id === 'fullday' ? 'Full-day - SUV' : 'Dubai-to-Abu Dhabi - SUV')"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <!-- VAN -->
        <div class="product-card">
          <img :src="p.van.image" :alt="p.title + ' Van'" />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge">Van (7–10 pax)</span>
              <span class="price">from AED {{ p.van.price }}</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.van.points" :key="i">{{ b }}</li>
            </ul>
            <!-- Add to Cart（红底白字） -->
            <button
              class="btn-addcart"
              @click="addToCart(p.id === 'fullday' ? 'Full-day - Van' : 'Dubai-to-Abu Dhabi - Van')"
            >
              Add to Cart
            </button>
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
        <p class="it-note">Timing and route are flexible and can be tailored to your plan.</p>
      </div>

      <!-- Rules -->
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

    <!-- Policy / Terms block -->
    <div class="text-card">
      <h2>Service Policy & Insurance Summary</h2>
      <ul class="policy">
        <li>All vehicles and drivers are licensed as per RTA/UAE regulations and are covered by commercial motor insurance (third-party liability at a minimum). Personal travel insurance is recommended for all guests.</li>
        <li>Waiting time: Airport pick-ups include <strong>60 minutes</strong> free from actual flight landing; hotels/private addresses include <strong>15 minutes</strong> free. Overtime is billed in 30- or 60-minute blocks as applicable.</li>
        <li>Distance/route: services are point-to-point unless otherwise stated. Extra stops, detours or additional pick-ups may incur a fee.</li>
        <li>Salik/tolls & parking: billed at cost unless stated as included in your quote (common in inter-emirate trips).</li>
        <li>Night/peak surcharges: may apply between <strong>22:00–06:00</strong> or during public holidays/events.</li>
        <li>Child seats available on request (pre-book). Please advise luggage count; oversize items must be declared to ensure the correct vehicle class.</li>
        <li>Cancellation & no-show: free cancellation window will be stated on your confirmation. No-show or late cancellation may be charged up to 100% depending on the case.</li>
        <li>Driver is not a licensed tour guide. A licensed guide can be arranged on request at extra cost.</li>
        <li>Damage & cleanliness: repair/cleaning caused by passenger negligence may be chargeable.</li>
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
// images for LONG products
import imgFulldaySUV from '@/assets/images/cars/carcard3.jpg'
import imgFulldayVan from '@/assets/images/cars/carcard5.jpg'
import imgADTripSUV from '@/assets/images/cars/carcard9.jpg'
import imgADTripVan from '@/assets/images/cars/carcard10.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// cart store
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'TransferLong',
  data() {
    return {
      products: [
        {
          id: 'fullday',
          title: 'Full-Day Car with Driver (10 Hours)',
          blurb:
            'All-day private charter for citywide exploring, meetings or custom touring at your own pace.',
          suv: {
            image: imgFulldaySUV,
            price: 510,
            points: [
              'Up to 10 hours of private service',
              'Typical city coverage with flexible routing',
              'Extendable by the hour as needed'
            ]
          },
          van: {
            image: imgFulldayVan,
            price: 550,
            points: [
              'Up to 10 hours of private service',
              'Comfortable for families and small groups',
              'Extendable by the hour as needed'
            ]
          },
          itinerary: [
            'Pick-up at your preferred time from hotel/residence in Dubai.',
            'Custom routing for meetings, shopping and city highlights (Old Dubai, Creek/Abra, Jumeirah, Palm, Marina, Downtown, etc.).',
            'Optional photo and coffee breaks on request.',
            'Flexible lunch stop (own expense) and continued sightseeing or errands.',
            'Drop-off at your preferred location in Dubai; extension possible by the hour.'
          ],
          includes: [
            'Private SUV/Van and professional driver for 10 hours',
            'Fuel within the typical city usage',
            'Basic coordination for a custom itinerary'
          ],
          notes: [
            'Overtime: usually AED 100–200 per hour depending on vehicle class.',
            'Inter-emirate supplement may apply (e.g., Abu Dhabi/Sharjah trips) typically AED 100–200.',
            'Salik/tolls and parking are billed at cost unless included in your quote.',
            'Attraction tickets, meals and personal expenses are not included.',
            'Driver is not a licensed tour guide; a licensed guide can be arranged on request.'
          ]
        },
        {
          id: 'auhday',
          title: 'Dubai → Abu Dhabi with Sightseeing (10 Hours)',
          blurb:
            'A curated day trip from Dubai to Abu Dhabi with key landmarks and photo stops — round-trip on the same day by default.',
          suv: {
            image: imgADTripSUV,
            price: 610,
            points: [
              'Approx. 10 hours day trip (round-trip same day)',
              'Highlights such as Grand Mosque, Corniche & city photo stops',
              'Flexible routing; extendable by the hour'
            ]
          },
          van: {
            image: imgADTripVan,
            price: 650,
            points: [
              'Approx. 10 hours day trip (round-trip same day)',
              'Ideal for 5–8 guests and families',
              'Flexible routing; extendable by the hour'
            ]
          },
          itinerary: [
            'Pick-up in Dubai and drive to Abu Dhabi (~90–120 minutes depending on traffic).',
            'Visit Sheikh Zayed Grand Mosque (subject to dress code and security screening).',
            'Drive along the Corniche with photo opportunities; stop by Emirates Palace/Etihad Towers area (exterior).',
            'Optional visits or exterior photo stops: Qasr Al Watan grounds, Louvre Abu Dhabi, Heritage Village, Yas Island/Ferrari World area.',
            'Lunch break at your choice (own expense).',
            'Return drive to Dubai and drop-off at your hotel/residence.'
          ],
          includes: [
            'Private SUV/Van with professional driver for ~10 hours',
            'Pick-up and same-day drop-off within Dubai urban area',
            'Fuel within the typical day-trip distance'
          ],
          notes: [
            'Default is round-trip same day to/from Dubai. One-way or different end points can be arranged on request (different pricing may apply).',
            'Overtime after 10 hours is chargeable (typically AED 100–200 per hour).',
            'Dress code at Grand Mosque: modest attire covering arms and legs; women need a headscarf. Entry/security rules may change without prior notice.',
            'Attraction tickets, guided tours, meals, Salik/tolls and parking are not included unless specified in your quote.',
            'Schedules and opening times can vary due to prayers, events or holidays; your driver will help adjust the route accordingly.'
          ]
        }
      ],

      // CTA state
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      toastTimer: null,
      showWhatsappModal: false,
      showWechatModal: false,
      whatsappQR,
      wechatQR,

      // FAQs
      faqs: [
        {
          question: 'Is the Abu Dhabi day trip priced per vehicle or per person?',
          answer:
            'Per vehicle. Prices cover private use of the vehicle and driver for the service hours. Attraction tickets and meals are extra.',
          open: false
        },
        {
          question: 'Can we finish the Abu Dhabi trip in Abu Dhabi (no return to Dubai)?',
          answer:
            'Yes, that is possible as a custom arrangement. Pricing may differ to account for route, hours and empty return of the vehicle.',
          open: false
        },
        {
          question: 'How are excess distance and overtime handled?',
          answer:
            'Beyond the typical usage/distance, excess km and extra hours are chargeable. Your confirmation will state the applicable rates.',
          open: false
        },
        {
          question: 'Do you provide licensed tour guides?',
          answer:
            'Your chauffeur is not a licensed guide. A licensed English-speaking guide can be arranged at extra cost if you prefer in-depth commentary.',
          open: false
        }
      ]
    }
  },
  computed: {
    cart() {
      return useWonderCart()
    }
  },
  methods: {
    toggleFaq(index) { this.faqs[index].open = !this.faqs[index].open },

    openWhatsappModal() { this.showWhatsappModal = true },
    openWechatModal() { this.showWechatModal = true },
    closeModals() { this.showWhatsappModal = false; this.showWechatModal = false },

    // 打开 WonderCart
    bookNow() { this.cart.open() },

    // 加入购物车（只传名字）
    addToCart(name) { this.cart.add(name) },

    // 保留但不再使用复制逻辑
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
      } finally { this.showToast() }
    },
    showToast() {
      this.showEmailToast = true
      clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => (this.showEmailToast = false), 3000)
    }
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
  transition: transform .08s ease, box-shadow .18s ease; box-shadow:0 4px 12px rgba(0,0,0,.08); display:inline-flex; align-items:center; justify-content:center; text-decoration:none; }
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
.product{ max-width:1000px; margin:34px auto; padding:0 20px; }
.product h2{ font-size:1.6rem; margin:0 0 6px; }
.blurb{ color:#555; margin:0 0 14px; }
.product-grid{ display:grid; grid-template-columns: repeat(2,1fr); gap:18px; }
@media (max-width: 820px){ .product-grid{ grid-template-columns:1fr; } }

.product-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.product-card img{ width:100%; height:240px; object-fit:cover; display:block; }
.pc-body{ padding:20px; }
.price-line{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.badge{ background:#eef2ff; color:#1f3a8a; border-radius:999px; padding:4px 10px; font-weight:700; font-size:.85rem; }
.price{ color:#b01b1b; font-weight:800; }

.bullets{ margin:0; padding-left:18px; color:#444; line-height:1.6; }
.bullets li{ margin-bottom:6px; }

/* Add to Cart button（白字红底） */
.btn-addcart{
  width:100%;
  height:44px;
  margin-top:12px;
  border:none;
  border-radius:10px;
  font-weight:700;
  cursor:pointer;
  background:hsl(0, 93%, 32%);
  color:#fff;
  transition: box-shadow .18s ease, transform .08s ease;
}
.btn-addcart:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }
.btn-addcart:active{ transform: translateY(1px); }

/* Rules & Policy blocks */
.rules{ background:#f8f8f8; border-radius:12px; padding:16px; margin-top:18px; }
.rules h3{ margin:8px 0; }
.rules ul{ margin:0; padding-left:18px; line-height:1.6; }

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

/* Itinerary */
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
