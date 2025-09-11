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
      <h1>Airport Transfers & Half-Day With Driver</h1>
      <p>
        Reliable private transport in Dubai with professional chauffeurs and commercially insured vehicles.
        Choose a quick airport run or hire a car with driver for a half day – perfect for meetings or light sightseeing.
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
        <!-- 改成 mailto 直开邮箱 -->
        <a class="cta-btn cta-gray" :href="'mailto:'+emailToCopy">Email us</a>
        <button class="cta-btn cta-green" @click="openWhatsappModal">WhatsApp us</button>
        <button class="cta-btn cta-green" @click="openWechatModal">Wechat us</button>
        <!-- 改为直接打开 WonderCart -->
        <button class="cta-btn cta-red" @click="openCart">My WonderCart</button>
      </div>
    </div>

    <!-- Toast: email copied（保留不再触发） -->
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

    <!-- Products: two panels (data-driven) -->
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
            <!-- 新增：Add to Cart -->
            <button
              class="add-btn"
              @click="addToCart(variantName(p,'suv'), p.id + '-suv')"
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
            <!-- 新增：Add to Cart -->
            <button
              class="add-btn"
              @click="addToCart(variantName(p,'van'), p.id + '-van')"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3>Itinerary </h3>
        <ul>
          <li v-for="(step, sIdx) in p.itinerary" :key="'it-'+p.id+'-'+sIdx">
            {{ step }}
          </li>
        </ul>
        <p class="it-note">Timing and route are flexible and can be tailored to your plan.</p>
      </div>

      <!-- Key rules per product -->
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
        <li>Driver is not a licensed tour guide. A licensed tour guide can be arranged on request at extra cost.</li>
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
// images
import imgAirportSUV from '@/assets/images/cars/carcard6.jpg'
import imgAirportVan from '@/assets/images/cars/carcard7.jpg'
import imgHalfdaySUV from '@/assets/images/cars/carcard2.jpg'
import imgHalfdayVan from '@/assets/images/cars/carcard8.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// 引入 WonderCart store
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'TransferShort',
  data() {
    return {
      products: [
        {
          id: 'airport',
          title: 'Airport Transfers',
          blurb: 'Meet & greet at the terminal with flight tracking. Smooth, direct rides to your hotel or residence.',
          suv: { image: imgAirportSUV, price: 190, points: ['DXB → Dubai City hotel/residence', '60-min free waiting at airport', 'Ideal for 1–4 guests + luggage'] },
          van: { image: imgAirportVan, price: 230, points: ['DXB → Dubai City hotel/residence', '60-min free waiting at airport', 'Ideal for families or 5–8 guests'] },
          includes: ['Private vehicle & professional driver', 'Meet & greet at arrivals, flight tracking', 'Fuel & basic road charges within Dubai'],
          notes: ['AUH → Dubai City: SUV ~ AED 330, Van ~ AED 380 (indicative).', 'Peak-hour or night surcharges may apply.', 'Extra waiting beyond the free window is chargeable.'],
          itinerary: [
            'Pre-arrival flight tracking; pick-up time adjusted for delays.',
            'Meet & greet at the arrivals hall with your name board.',
            'Up to 60 minutes of free waiting from flight landing; luggage assistance to the car.',
            'Private, air-conditioned SUV/Van as booked.',
            'Direct transfer to your hotel/residence in Dubai (typical ride 20–40 minutes depending on area/traffic).',
            'Door-to-door drop-off and farewell.'
          ]
        },
        {
          id: 'halfday',
          title: 'Half-Day Car with Driver (5 Hours)',
          blurb: 'Flexible 5-hour charter with driver — great for business meetings or light city touring.',
          suv: { image: imgHalfdaySUV, price: 300, points: ['Up to 5 hours service', 'Approx. 100 km included', 'Extendable by the hour'] },
          van: { image: imgHalfdayVan, price: 330, points: ['Up to 5 hours service', 'Approx. 100 km included', 'Comfortable for small groups'] },
          includes: ['Private car/van with chauffeur for the reserved hours', 'Fuel within the included distance', 'Coordination support for a custom itinerary'],
          notes: ['Overtime: typically AED 80–150 per hour depending on vehicle class.', 'Excess distance beyond the included 100 km is chargeable; rate confirmed on booking.', 'Attraction tickets, meals and personal expenses are not included.'],
          itinerary: [
            'Pick-up at your chosen time from your hotel/residence in Dubai.',
            '5 hours of private use in an air-conditioned SUV/Van as booked.',
            'English-speaking driver to assist with navigation and parking.',
            'Flexible route for meetings, shopping, or light sightseeing (Old Dubai, Jumeirah, Downtown, Marina—your choice).',
            'Short photo/coffee stops on request; ~100 km included (excess km/extra hour chargeable).',
            'Drop-off at your preferred location in Dubai; extend anytime by the hour if needed.'
          ]
        }
      ],
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      toastTimer: null,
      showWhatsappModal: false,
      showWechatModal: false,
      whatsappQR,
      wechatQR,
      faqs: [
        { question: 'Is my ride insured?', answer: 'Yes. Vehicles and drivers are commercially licensed and insured per UAE/RTA rules. We still recommend personal travel insurance for full coverage.', open: false },
        { question: 'How is waiting time handled?', answer: 'Airport pick-ups include 60 minutes free from actual landing; hotels/private addresses include 15 minutes free. Extra time is billed in 30/60-minute blocks.', open: false },
        { question: 'What about tolls (Salik) and parking?', answer: 'Unless stated, Salik/tolls and parking are billed at cost. For inter-emirate travel, additional tolls may apply.', open: false },
        { question: 'Can I add stops or extend during the ride?', answer: 'Yes, subject to vehicle availability. Extra stops and overtime are chargeable; your driver/dispatcher will confirm the rate on the spot.', open: false }
      ]
    }
  },
  methods: {
    // FAQ 折叠
    toggleFaq(index) { this.faqs[index].open = !this.faqs[index].open },

    // 变体显示名称（满足你的命名要求）
    variantName(p, type) {
      const map = {
        airport: { suv: 'Airport Transfer - SUV', van: 'Airport Transfer - Van' },
        halfday: { suv: 'Half-Day - SUV',        van: 'Half-Day - Van' }
      }
      return (map[p.id] && map[p.id][type]) || `${p.title} - ${type.toUpperCase()}`
    },

    // 打开购物车
    openCart() {
      const cart = useWonderCart()
      cart.open()
    },

    // 加入购物车
    addToCart(name, id) {
      const cart = useWonderCart()
      cart.add({ id, name })
      if (cart.toast) cart.toast('This item has been added to your wonder cart')
    },

    // 下面这些保留（无需触发）
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
.whatsapp-wrapper { position: fixed; left: 7px; top: 75%; transform: translateY(-50%); z-index: 9999; }
.whatsapp-button { display: flex; align-items: center; background-color: white; padding: 1px 15px; border-radius: 100px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); text-decoration: none; transition: all 0.3s ease-in-out; }
.whatsapp-button:hover { transform: scale(1.05); }
.whatsapp-button img { width: 58px; height: 58px; margin-right: 3px; }
.hover-reveal .whatsapp-text { max-width: 0; opacity: 0; overflow: hidden; transition: all 0.3s ease-in-out; }
.hover-reveal:hover .whatsapp-text { max-width: 200px; opacity: 1; margin-left: 10px; }

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

/* Add to Cart */
.add-btn{
  margin-top:10px;
  width:100%;
  height:44px;
  border:none;
  border-radius:10px;
  font-weight:700;
  background:hsl(0, 93%, 32%);
  color:#fff;
  cursor:pointer;
  box-shadow:0 4px 12px rgba(0,0,0,.08);
}
.add-btn:active{ transform: translateY(1px); }

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

/* Itinerary card */
.itinerary-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; padding:16px; margin-top:14px; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.itinerary-card h3{ margin:6px 0 10px; }
.itinerary-card ul{ margin:0; padding-left:18px; line-height:1.6; color:#444; }
.it-note{ margin-top:8px; font-size:.95rem; color:#666; }
</style>
