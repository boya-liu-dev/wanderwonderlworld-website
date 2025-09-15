<template>
  <div class="packages-34n">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="Packages Banner"
        class="banner"
        id="city12Banner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="Gold Logo"
          class="logo"
          id="city12LogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="Text Logo"
          class="logo-text"
          id="city12LogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="city12IntroH1" data-c="@id">Dubai City Tours — Half-Day & Full-Day </h1>
      <p id="city12IntroP1" data-c="@id">
        Two flexible private tours designed for real Dubai conditions: heat-smart pacing (outdoors AM/evening,
        indoors at noon), an Old Dubai walking segment with an abra ride, and a friendly English-speaking
        driver for smooth logistics all day. A licensed walking guide is included for the Old Dubai segment.
        Clear per-car pricing (up to 6 guests), optional time-slotted observatories, and transparent add-ons.
      </p>
    </div>

    <!-- Left floating WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I'm%20interested%20in%20your%20city%20tours."
        class="whatsapp-button hover-reveal"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="city12WhatsIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="city12WhatsText" data-c="@id">Need help? Chat with us!</span>
      </a>
    </div>

    <!-- CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="city12BtnEmail" data-c="@id">Email us</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="city12BtnWhats" data-c="@id">WhatsApp us</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="city12BtnWechat" data-c="@id">Wechat us</button>
        <button class="cta-btn cta-red" @click="bookNow" id="city12BtnCart" data-c="@id">My WonderCart</button>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p>
          <strong>{{ emailToCopy }}</strong>
          has been copied to your clipboard
        </p>
      </div>
    </div>

    <!-- QR Modals -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp QR" id="city12WhatsQR" data-c-src="@id" />
      </div>
    </div>
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="WeChat QR" id="city12WechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- ===== Products (Half-Day & Full-Day) ===== -->
    <section
      v-for="p in products"
      :key="p.id"
      class="product"
      :id="`city12Prod_${p.id}`"
    >
      <h2>
        <span :id="`city12Title_${p.id}`" data-c="@id">{{ p.title }}</span>
      </h2>
      <p class="blurb">
        <span :id="`city12Blurb_${p.id}`" data-c="@id">{{ p.blurb }}</span>
      </p>

      <div class="product-grid">
        <div class="product-card">
          <img
            :src="p.variantA.image"
            :alt="p.title"
            :id="`city12Img_${p.id}`"
            data-c-src="@id"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`city12Badge_${p.id}`" data-c="@id">{{ p.variantA.badge }}</span>
              <span class="price" :id="`city12Price_${p.id}`" data-c="@id">{{ p.variantA.price }}</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.variantA.points" :key="i">
                <span :id="`city12Point_${p.id}_${i}`" data-c="@id">{{ b }}</span>
              </li>
            </ul>
            <!-- Add to Cart -->
            <button
              class="btn-addcart"
              @click="addToCart(p.cartName)"
              :id="`city12Add_${p.id}`"
              data-c="@id"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3 :id="`city12ItinTitle_${p.id}`" data-c="@id">Sample Itinerary</h3>
        <ul>
          <li v-for="(step, sIdx) in p.itinerary" :key="'it-'+p.id+'-'+sIdx">
            <span :id="`city12Itin_${p.id}_${sIdx}`" data-c="@id">{{ step }}</span>
          </li>
        </ul>
        <p class="it-note" :id="`city12ItinNote_${p.id}`" data-c="@id">
          Timing windows can be adjusted to your flight schedule and seasonal conditions.
        </p>
      </div>

      <!-- What’s included / Good to know -->
      <div class="rules">
        <h3 :id="`city12InclTitle_${p.id}`" data-c="@id">What’s included</h3>
        <ul>
          <li v-for="(i,idx) in p.includes" :key="'inc-'+idx">
            <span :id="`city12Incl_${p.id}_${idx}`" data-c="@id">{{ i }}</span>
          </li>
        </ul>
        <h3 :id="`city12GoodTitle_${p.id}`" data-c="@id">Good to know</h3>
        <ul>
          <li v-for="(n,idx) in p.notes" :key="'note-'+idx">
            <span :id="`city12Note_${p.id}_${idx}`" data-c="@id">{{ n }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Global Policy / Terms -->
    <div class="text-card">
      <h2 id="city12PolicyTitle" data-c="@id">Pricing & Policy Notes</h2>
      <ul class="policy">
        <li id="city12Policy1" data-c-html="@id">
          Per-car rates (7-seater; up to 6 guests). Overtime <strong>AED 75/h</strong> after scheduled touring hours.
        </li>
        <li id="city12Policy2" data-c-html="@id">
          Old Dubai walking (~2h) with a licensed guide and abra tickets are included on Dubai routes.
        </li>
        <li id="city12Policy3" data-c-html="@id">
          Attraction tickets (e.g., Burj Khalifa, The View, Dubai Frame, Aquarium) are optional add-ons and subject to time-slot availability.
        </li>
        <li id="city12Policy4" data-c-html="@id">
          Child/booster seats are required by UAE law—please request at booking (each child must occupy a seat).
        </li>
        <li id="city12Policy5" data-c-html="@id">
          No eating/drinking/smoking inside vehicles; smart-casual dress recommended in heritage areas.
        </li>
        <li id="city12Policy6" data-c-html="@id">
          Amendment & cancellation: ≥24h free; 12–24h 50%; &lt;12h or no-show 100%. Force-majeure (sandstorm/heavy rain/road closures): re-schedule first; otherwise only unrecoverable supplier costs apply.
        </li>
        <li id="city12Policy7" data-c-html="@id">
          Remote pickups (Jebel Ali / DWC / Sharjah border) may attract a small surcharge. WhatsApp reconfirmation sent 24h before service.
        </li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="city12FaqTitle" data-c="@id">FAQs</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span :id="`city12FAQQ_${index+1}`" data-c="@id">{{ faq.question }}</span>
          <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p :id="`city12FAQA_${index+1}`" data-c="@id">{{ faq.answer }}</p>
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
import imgHalf from '@/assets/images/cars/city1.jpg'
import imgFull from '@/assets/images/cars/city2.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// cart
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'City12Tours',
  data() {
    return {
      banner, logoGold, logoText,
      whatsappQR, wechatQR,
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      showWhatsappModal: false,
      showWechatModal: false,
      toastTimer: null,

      // ===== Two city tours =====
      products: [
        {
          id: 'half',
          cartName: 'Half-Day Dubai Essentials',
          title: 'Half-Day Dubai Essentials (5 Hours)',
          blurb:
            'Compact, photogenic, and culture-rich. Choose a cool morning or sunset slot. Includes an Old Dubai walking segment with a licensed guide plus an abra crossing of Dubai Creek, then modern skyline photo stops to round it out.',
          variantA: {
            image: imgHalf,
            badge: 'Up to 6 Guests',
            price: 'from AED 325',
            points: [
              'Heat-Smart timing: AM or Sunset start',
              'Old Dubai walking (~2h) + Abra ride included',
              'Spice & Gold Souks browsing time',
              'Jumeirah seaside / Burj Al Arab exterior photo stop',
              'Museum of the Future exterior or Dubai Mall/Fountain finale',
              'English-speaking driver; bottled water on board'
            ]
          },
          itinerary: [
            'Pickup from your hotel/residence (08:30 AM start or ~15:30 Sunset start).',
            'Al Fahidi Historical Neighbourhood walking (~45–60 min) with a licensed guide.',
            'Abra (water taxi) across Dubai Creek to Deira; browse Spice & Gold Souks.',
            'Drive to Jumeirah area for seaside and Burj Al Arab exterior photo stop.',
            'Optional quick stop for Museum of the Future exterior photo.',
            'Finish at Dubai Mall & Fountain area or return to your hotel (your choice).'
          ],
          includes: [
            '7-seater vehicle (up to 6 guests) with English-speaking driver.',
            'Licensed guide for Old Dubai walking (~2 hours).',
            'Abra tickets for the Creek crossing.',
            'Bottled water, Salik tolls and official parking.',
            'Pickup & drop-off within central Dubai.',
            'Company public-liability insurance; 24h prior WhatsApp reconfirmation.'
          ],
          notes: [
            'Overtime after 5 hours is AED 75 per hour.',
            'Attraction tickets (Frame / The View / Burj Khalifa / Aquarium) can be added on request—subject to slot availability.',
            'Child/booster seats are required by law—please request at booking; each child must occupy a seat.',
            'Remote pickups (Jebel Ali / DWC / Sharjah border) may incur a small surcharge.'
          ]
        },
        {
          id: 'full',
          cartName: 'Full-Day Dubai Panorama',
          title: 'Full-Day Dubai Panorama (10 Hours)',
          blurb:
            'The “greatest hits” of Dubai in one balanced day. We start with heritage on foot, move indoors at noon for an observatory or museum, and capture the skyline at golden hour around Dubai Marina, Bluewaters and JBR.',
          variantA: {
            image: imgFull,
            badge: 'Up to 6 Guests',
            price: 'from AED 559',
            points: [
              'Old Dubai walking (~2h) + Abra ride included (morning)',
              'Midday indoors: Frame / The View / Burj Khalifa (choose one)',
              'Souk Madinat + Jumeirah beachline photo stops',
              'Golden-hour around Dubai Marina · Bluewaters · JBR',
              'Flexible routing based on traffic and ticket slots',
              'English-speaking driver; bottled water on board'
            ]
          },
          itinerary: [
            '09:00 Pickup from hotel/residence.',
            '09:15–11:15 Old Dubai walking (~2h) with licensed guide + abra crossing; Al Fahidi, Creek, Spice & Gold Souks.',
            '12:00–13:30 Midday indoors: Dubai Frame or The View (or add Burj Khalifa 124/125 non-prime); lunch at own cost nearby.',
            '14:30–15:30 Souk Madinat & Jumeirah photo stops (Burj Al Arab exterior).',
            '16:00–18:00 Dubai Marina → Bluewaters → JBR seaside for golden-hour skyline.',
            '~19:00 Drop-off at hotel or preferred central point.'
          ],
          includes: [
            'Private 7-seater vehicle (up to 6 guests) with English-speaking driver for ~10 hours.',
            'Licensed guide for Old Dubai walking (~2 hours).',
            'Abra tickets for the Creek crossing.',
            'Bottled water, Salik tolls and official parking.',
            'Pickup & drop-off within central Dubai.',
            'Company public-liability insurance; 24h prior WhatsApp reconfirmation.'
          ],
          notes: [
            'Overtime after 10 hours is AED 75 per hour.',
            'Observatories/museums are optional add-ons: Burj Khalifa 124/125 (from ~AED 170 adult), The View (from ~AED 99), Dubai Frame (AED 50 adult / AED 20 child)—final price per time slot.',
            'Kid-friendly swaps (e.g., Dubai Aquarium) available on request.',
            'During Ramadan or public events, opening hours and traffic control may affect sequence; we will re-route as needed.'
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
          question: 'Is a licensed guide included?',
          answer:
            'Yes—on Dubai routes a licensed guide is included for the Old Dubai walking segment (~2 hours). Your English-speaking driver manages transport and day-to-day coordination.',
          open: false
        },
        {
          question: 'Can we change the order or add attractions?',
          answer:
            'Absolutely. These are private tours. We adjust routing to your interests, ticket slots, traffic and weather. Time-slotted observatories (Burj Khalifa/The View) can be added on request.',
          open: false
        },
        {
          question: 'Do you provide child seats?',
          answer:
            'Yes. Child/booster seats are required by UAE law. Please tell us ages and counts at booking so we can prepare the correct seats (each child must occupy a seat).',
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
