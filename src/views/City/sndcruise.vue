<template>
  <div class="packages-56n">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="Packages Banner"
        class="banner"
        id="pkg56Banner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="Gold Logo"
          class="logo"
          id="pkg56LogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="Text Logo"
          class="logo-text"
          id="pkg56LogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="pkg56IntroTitle" data-c="@id">Dubai Dhow Cruise Dinners — 4 Options</h1>
      <p id="pkg56IntroP1" data-c-html="@id">
        Four evening cruises to match different budgets and skyline views: Creek Classic, Marina, Water Canal
        Glassboat, and the 3-hour Lotus Mega Yacht. Clear ticket-only pricing, optional private transfers,
        and transparent upgrades (upper deck / window table / VIP lounges). Vegetarian & Jain meals on
        request; entertainment runs when permitted by law. Your e-voucher includes a pier map and 24/7
        emergency contact for smooth boarding.
      </p>
    </div>

    <!-- Left floating WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        id="pkg56WhatsappLink"
        data-c-src="@id"
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I'm%20interested%20in%20your%20dhow%20cruises."
        class="whatsapp-button hover-reveal"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="pkg56WhatsappIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="pkg56WhatsappText" data-c="@id">Need help? Chat with us!</span>
      </a>
    </div>

    <!-- CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="pkg56CTAEmail" data-c="@id">Email us</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="pkg56CTAWhatsApp" data-c="@id">WhatsApp us</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="pkg56CTAWechat" data-c="@id">Wechat us</button>
        <button class="cta-btn cta-red" @click="bookNow" id="pkg56CTACart" data-c="@id">My WonderCart</button>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="pkg56EmailCopiedText" data-c-html="@id"><strong>{{ emailToCopy }}</strong> has been copied to your clipboard</p>
      </div>
    </div>

    <!-- QR Modals -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp QR" id="pkg56WhatsappQR" data-c-src="@id" />
      </div>
    </div>
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="WeChat QR" id="pkg56WechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- ===== Packages (4 sections) ===== -->
    <section v-for="p in products" :key="p.id" class="product">
      <h2 :id="`pkg56_${p.id}Title`" :data-c="'@id'">{{ p.title }}</h2>
      <p class="blurb" :id="`pkg56_${p.id}Blurb`" :data-c-html="'@id'">{{ p.blurb }}</p>

      <div class="product-grid">
        <div class="product-card">
          <img
            :src="p.variantA.image"
            :alt="p.title"
            :id="`pkg56_${p.id}Image`"
            :data-c-src="'@id'"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`pkg56_${p.id}Badge`" :data-c="'@id'">{{ p.variantA.badge }}</span>
              <span class="price" :id="`pkg56_${p.id}Price`" :data-c="'@id'">{{ p.variantA.price }}</span>
            </div>
            <ul class="bullets">
              <li
                v-for="(b,i) in p.variantA.points"
                :key="i"
                :id="`pkg56_${p.id}Point_${i}`"
                :data-c="'@id'"
              >
                {{ b }}
              </li>
            </ul>
            <!-- Add to Cart -->
            <button
              class="btn-addcart"
              @click="addToCart(p.cartName)"
              :id="`pkg56_${p.id}AddCart`"
              :data-c="'@id'"
            >Add to Cart</button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3 :id="`pkg56_${p.id}ItineraryTitle`" :data-c="'@id'">Sample Itinerary</h3>
        <ul>
          <li
            v-for="(step, sIdx) in p.itinerary"
            :key="'it-'+p.id+'-'+sIdx"
            :id="`pkg56_${p.id}It_${sIdx}`"
            :data-c="'@id'"
          >
            {{ step }}
          </li>
        </ul>
        <p class="it-note" :id="`pkg56_${p.id}ItNote`" :data-c="'@id'">
          Time windows may adjust to marine control, attraction slots, and seasonal events.
        </p>
      </div>

      <!-- What’s included / Good to know -->
      <div class="rules">
        <h3 :id="`pkg56_${p.id}IncTitle`" :data-c="'@id'">What’s included</h3>
        <ul>
          <li
            v-for="(i,idx) in p.includes"
            :key="'inc-'+idx"
            :id="`pkg56_${p.id}Inc_${idx}`"
            :data-c="'@id'"
          >
            {{ i }}
          </li>
        </ul>
        <h3 :id="`pkg56_${p.id}NoteTitle`" :data-c="'@id'">Good to know</h3>
        <ul>
          <li
            v-for="(n,idx) in p.notes"
            :key="'note-'+idx"
            :id="`pkg56_${p.id}Note_${idx}`"
            :data-c="'@id'"
          >
            {{ n }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Global Policy / Terms -->
    <div class="text-card">
      <h2 id="pkg56PolicyTitle" data-c="@id">Pricing & Policy Notes</h2>
      <ul class="policy">
        <li id="pkg56Policy_0" data-c="@id">Ticket-Only rates per person. Infant 0–2 free (no seat/bed). Child 3–10 at child rate; 11+ adult.</li>
        <li id="pkg56Policy_1" data-c="@id">Boarding 8:00 PM & sailing 8:30 PM for Creek/Marina/Canal (~90–120 min). Lotus reports 7:00 PM, sails 7:30–10:30 PM.</li>
        <li id="pkg56Policy_2" data-c="@id">Optional private round-trip transfers (Dubai urban): Sedan 1–4 AED 180 · MPV 5–7 AED 220 · Van 10–14 AED 350. Jebel Ali/JVC/DIP +AED 40–60; from Sharjah +AED 100. Child seats provided free on request (limited; required by law).</li>
        <li id="pkg56Policy_3" data-c="@id">Entertainment runs when permitted; Ramadan & official dry days restrict shows and alcohol service.</li>
        <li id="pkg56Policy_4" data-c="@id">Seating is first-come or operator-assigned. Paid upgrades guarantee a section (upper deck/window/VIP), not an exact table number.</li>
        <li id="pkg56Policy_5" data-c="@id">Amend/cancel: Creek/Marina/Canal ≥24h free; 12–24h 50%; &lt;12h or no-show 100%. Lotus/VIP ≥48h free; 24–48h 50%; &lt;24h 100%. Event nights (e.g., NYE) carry stricter terms & surcharges.</li>
        <li id="pkg56Policy_6" data-c="@id">Weather/route: marine traffic, wind or closures may alter the route/berth. If the operator cancels, re-book or full refund; if sailing with a modified route, refunds do not apply.</li>
        <li id="pkg56Policy_7" data-c="@id">All vessels licensed by DMCA/RTA with lifejackets & trained crew. Our transfers use insured vehicles and RTA-licensed drivers.</li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="pkg56FaqTitle" data-c="@id">FAQs</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span :id="`pkg56FaqQ_${index}`" :data-c="'@id'">{{ faq.question }}</span>
          <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p :id="`pkg56FaqA_${index}`" :data-c="'@id'">{{ faq.answer }}</p>
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
import imgCreek from '@/assets/images/cars/boat1.jpg'
import imgMarina from '@/assets/images/cars/boat2.jpg'
import imgCanal from '@/assets/images/cars/boat3.jpg'
import imgLotus from '@/assets/images/cars/boat4.jpg'

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

      // ===== Four dhow cruise products =====
      products: [
        {
          id: 'creek',
          cartName: 'Creek Classic Dhow Dinner',
          title: 'Creek Classic Dhow Dinner (Al Seef / Dubai Creek)',
          blurb: 'Heritage skyline on a traditional wooden dhow at a budget-friendly price. Boarding 8:00 PM · Sail 8:30 PM · ~90–120 minutes. Easy start and relaxed vibe.',
          variantA: {
            image: imgCreek,
            badge: 'Shared · Ticket-Only Available',
            price: 'Adult AED 85 · Child AED 70 · Infant Free',
            points: [
              'Traditional dhow: A/C lower deck + open upper deck',
              'International buffet (veg/non-veg; Jain/vegan on request)',
              'Water/soft drinks + tea/coffee included',
              'Background music & Tanoura show when permitted',
              'Standard seating (FCFS or crew-assigned)',
              'Optional upper-deck/window guarantees & private transfers'
            ]
          },
          itinerary: [
            '20:00 Boarding at Al Seef / Creek pier (exact pier on e-voucher).',
            '20:30 Cast off · Creek skyline and heritage dhows by night.',
            'Buffet dinner service + water/soft drinks; Tanoura when permitted.',
            '22:00–22:30 Return to pier · Disembark and transfers if booked.'
          ],
          includes: [
            'Shared traditional dhow cruise for ~90–120 minutes.',
            'International buffet dinner (Halal; veg & non-veg options; Jain/vegan on request).',
            'Water, soft drinks, tea/coffee.',
            'Entertainment when permitted (e.g., Tanoura).',
            'E-voucher with pier map & 24/7 emergency contact.',
            'Company public-liability insurance.'
          ],
          notes: [
            'Seat upgrades (payable): Upper-Deck Guarantee +AED 20 pp; Window/Table-for-2 (lower deck) +AED 25 pp (subject to boat).',
            'Optional private round-trip transfers (Dubai urban): Sedan 1–4 AED 180 · MPV 5–7 AED 220 · Van 10–14 AED 350; Jebel Ali/JVC/DIP +AED 40–60; from Sharjah +AED 100.',
            'Add-ons: Old Dubai mini walk + abra (45–60 min) +AED 80 adult / +AED 50 child; small cake 0.5 kg AED 95 (1 kg AED 160); photographer 45 min AED 249 (20 edited within 48h).',
            'Same-day sales accepted until ~17:30–18:00 subject to seat inventory and payment.'
          ]
        },
        {
          id: 'marina',
          cartName: 'Dubai Marina Dhow Dinner',
          title: 'Dubai Marina Dhow Dinner (JBR & Bluewaters Views)',
          blurb: 'Most-popular skyline route with better views than Creek. Boarding 8:00 PM · Sail 8:30 PM · ~90–120 minutes. Traditional dhow or modern glass boat (operator-assigned).',
          variantA: {
            image: imgMarina,
            badge: 'Shared · Ticket-Only Available',
            price: 'Adult AED 115 · Child AED 95 · Infant Free',
            points: [
              'Marina → JBR → Bluewaters night skyline route',
              'International buffet + water/soft drinks',
              'Live/recorded entertainment when permitted (Tanoura or singer)',
              'A/C lower deck + open upper deck / panoramic windows',
              'Upper-deck or window-seat guarantees available (+AED 25 pp)',
              'Anniversary/Birthday décor add-on available'
            ]
          },
          itinerary: [
            '20:00 Boarding at Dubai Marina (Harbour / Pier 7 area per voucher).',
            '20:30 Sail through Marina canal toward JBR & Bluewaters.',
            'Buffet dinner, skyline photos, entertainment when permitted.',
            '22:00–22:30 Return and disembark · Private transfers if booked.'
          ],
          includes: [
            'Shared dhow or modern glass-style boat (~90–120 minutes).',
            'International buffet dinner; water & soft drinks.',
            'Entertainment when permitted (e.g., Tanoura or live singer).',
            'A/C lower deck and open upper deck / panoramic windows.',
            'E-voucher with pier map & 24/7 emergency contact.'
          ],
          notes: [
            'Seat upgrade: Upper-Deck or Window-Seat Guarantee +AED 25 pp (limited).',
            'Optional décor: birthday/anniversary balloons & table setup AED 120; cake/photographer same as Creek product.',
            'Private transfer matrix identical to Creek product.'
          ]
        },
        {
          id: 'canal',
          cartName: 'Dubai Water Canal Glassboat Dinner',
          title: 'Dubai Water Canal Glassboat Dinner (Business Bay • Tolerance Bridge)',
          blurb: 'Differentiated premium route with modern canal scenery and illuminated bridges; route may vary with marine traffic. Boarding 8:00 PM · Sail 8:30 PM · ~120 minutes.',
          variantA: {
            image: imgCanal,
            badge: 'Premium Glassboat · Ticket-Only Available',
            price: 'Adult AED 149 · Child AED 119 · Infant Free',
            points: [
              'Modern glass-enclosed vessel with panoramic windows',
              'International buffet; water/soft drinks included',
              'Quieter “fine-dining” ambience (entertainment varies)',
              'Business Bay & bridges; waterfall passage subject to control',
              'Priority to window-style seating for couples/families when available',
              'Window-Table Guarantee available (+AED 30 pp · limited)'
            ]
          },
          itinerary: [
            '20:00 Boarding at Dubai Festival City / Business Bay (confirmed on voucher).',
            '20:30 Sail along Water Canal & Business Bay bridges.',
            'Buffet dinner on a glassboat; background music.',
            '22:30 Approx. return · Disembark · Transfers if booked.'
          ],
          includes: [
            'Shared cruise on a modern glassboat (~120 minutes).',
            'International buffet; water & soft drinks.',
            'Background music; entertainment policy varies by operator/date.',
            'E-voucher with pier map & 24/7 emergency contact.',
            'Company public-liability insurance.'
          ],
          notes: [
            'Window-Table Guarantee +AED 30 pp (limited).',
            'Pre-cruise Dubai Frame ticket add-on: +AED 65 adult / +AED 30 child (bundled with cruise pickup when transfers booked).',
            'Private transfer matrix identical to Creek product.'
          ]
        },
        {
          id: 'lotus',
          cartName: 'Lotus Mega Yacht Dinner',
          title: 'Lotus Mega Yacht Dinner (Dubai Marina / Harbour)',
          blurb: '3-hour premium “big-boat” experience with live DJ, multiple decks and live cooking stations. Reporting 7:00 PM · Sail 7:30–10:30 PM. Category leader at a value-first rate.',
          variantA: {
            image: imgLotus,
            badge: 'Premium · 3 Hours',
            price: 'Adult AED 239 · Child AED 189 · Infant Free',
            points: [
              'One of the largest public dinner yachts in Dubai',
              'International buffet + live cooking stations',
              'Soft beverages (water/soft drinks/tea/coffee) included',
              'Live DJ & dancers when permitted',
              'Multiple indoor lounges + outdoor decks',
              'VIP lounge/sofa sections & Premium Drinks add-on available'
            ]
          },
          itinerary: [
            '19:00 Reporting at Dubai Harbour / Marina (exact pier on voucher).',
            '19:30 Sail · 3-hour cruise with skyline views.',
            'Buffet & live stations; DJ and dance floor when permitted.',
            '22:30 Return and disembark · Private transfers if booked.'
          ],
          includes: [
            'Access to the Lotus Mega Yacht dinner cruise for 3 hours.',
            'International buffet + live stations.',
            'Soft beverages (water/soft drinks/tea/coffee).',
            'Entertainment when permitted by law.',
            'E-voucher with pier map & 24/7 emergency contact.'
          ],
          notes: [
            'Premium Drinks Package (licensed dates only): +AED 99 per adult (ID required; not available during Ramadan/official dry days).',
            'VIP Lounge / Sofa Section: +AED 120 per person (limited).',
            'Private transfer matrix identical to Creek product.',
            'Cancellation terms stricter than shared dhows (see policy below).'
          ]
        }
      ],

      // FAQs
      faqs: [
        {
          question: 'What is included in the ticket price?',
          answer: 'Cruise seat, buffet dinner (Halal; veg & non-veg; Jain/vegan by request), water/soft drinks, and shows when permitted. Taxes included. Transfers, alcohol on licensed vessels, seating upgrades, décor and photos are optional add-ons.',
          open: false
        },
        {
          question: 'Where do we board and when should we arrive?',
          answer: 'Your e-voucher lists the exact pier and a map link. For Creek/Marina/Canal, board at 8:00 PM and sail at 8:30 PM. Lotus reports 7:00 PM and sails 7:30–10:30 PM. Late arrivals are treated as no-show by the boat operator.',
          open: false
        },
        {
          question: 'Do you provide hotel transfers and child seats?',
          answer: 'Yes—private round-trip transfers are available (pricing matrix on this page). Child/booster seats are provided free on request (limited) and are required by UAE law.',
          open: false
        },
        {
          question: 'Is alcohol served on the cruise?',
          answer: 'Only on licensed vessels and not during Ramadan/official dry days. Lotus offers a Premium Drinks add-on on licensed dates.',
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
