<template>
  <div class="details-page">
    <!-- Banner -->
    <div class="banner-container">
      <img
        src="@/assets/images/banner7.jpg"
        alt="Add-ons Banner"
        class="banner"
        id="safAddonsEnBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          src="@/assets/images/logo-www-gold.png"
          alt="Gold Logo"
          class="logo"
          id="safAddonsEnLogoGold"
          data-c-src="@id"
          loading="lazy"
          decoding="async"
        />
        <img
          src="@/assets/images/logo-text.png"
          alt="Text Logo"
          class="logo-text"
          id="safAddonsEnLogoText"
          data-c-src="@id"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <!-- Title -->
    <div class="intro">
      <h1 id="safAddonsEnH1" data-c="@id">Desert Safari Add-ons</h1>
      <p id="safAddonsEnIntro" data-c="@id">
        Upgrade your Desert Safari with popular add-ons. ATV & Buggy are operated by licensed
        partners on dedicated dunes/tracks with safety briefing and protective gear. Photography is
        handled by our trusted photographers. Shisha/Drinks are served only at licensed camps.
      </p>
    </div>

    <!-- 左侧悬浮 WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20have%20a%20question%20about%20Desert%20Safari%20add-ons."
        class="whatsapp-button hover-reveal"
        aria-label="Chat with us on WhatsApp about Desert Safari add-ons"
        id="safAddonsEnWAFloat"
        data-c="@id"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="safAddonsEnWAIcon"
          data-c-src="@id"
          loading="lazy"
          decoding="async"
        />
        <span class="whatsapp-text" id="safAddonsEnWAText" data-c="@id">Need help? Chat with us!</span>
      </a>
    </div>

    <!-- 4 CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <a
          class="cta-btn cta-gray"
          :href="`mailto:${emailToCopy}`"
          id="safAddonsEnCtaEmail"
          data-c="@id"
        >Email us</a>
        <button
          class="cta-btn cta-green"
          @click="openWhatsappModal"
          id="safAddonsEnCtaWA"
          data-c="@id"
        >WhatsApp us</button>
        <button
          class="cta-btn cta-green"
          @click="openWechatModal"
          id="safAddonsEnCtaWeChat"
          data-c="@id"
        >Wechat us</button>
        <button
          class="cta-btn cta-red"
          @click="bookNow"
          id="safAddonsEnCtaCart"
          data-c="@id"
        >My WonderCart</button>
      </div>
    </div>

    <!-- QR Modals -->
    <div
      v-if="showWhatsappModal"
      class="qr-modal"
      aria-modal="true"
      role="dialog"
      aria-labelledby="safAddonsEnWAModalTitle"
    >
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp QR" id="safAddonsEnWAQR" data-c-src="@id" />
      </div>
    </div>
    <div
      v-if="showWechatModal"
      class="qr-modal"
      aria-modal="true"
      role="dialog"
      aria-labelledby="safAddonsEnWeChatModalTitle"
    >
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="WeChat QR" id="safAddonsEnWeChatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- Add-on products -->
    <section
      v-for="(p, pIdx) in products"
      :key="p.id"
      class="product"
      :id="`safAddonsEnProd_${p.id}`"
    >
      <h2>
        <span :id="`safAddonsEnTitle_${p.id}`" data-c="@id">{{ p.title }}</span>
      </h2>
      <p class="blurb">
        <span :id="`safAddonsEnBlurb_${p.id}`" data-c="@id">{{ p.blurb }}</span>
      </p>

      <div class="product-grid">
        <!-- Single card per add-on -->
        <div class="product-card">
          <img
            :src="p.image"
            :alt="p.title"
            :id="`safAddonsEnImg_${p.id}`"
            data-c-src="@id"
            loading="lazy"
            decoding="async"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`safAddonsEnBadge_${p.id}`" data-c="@id">{{ p.badge }}</span>
              <span
                class="price"
                v-html="p.priceHtml"
                :id="`safAddonsEnPrice_${p.id}`"
                data-c-html="@id"
              ></span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.points" :key="i">
                <span :id="`safAddonsEnPoint_${p.id}_${i}`" data-c="@id">{{ b }}</span>
              </li>
            </ul>

            <!-- Buttons -->
            <button
              v-if="p.type === 'cart'"
              class="btn-addcart"
              @click="addToCart(p.cartName)"
              :id="`safAddonsEnAdd_${p.id}`"
              data-c="@id"
            >
              Add to Cart
            </button>

            <a
              v-else-if="p.type === 'wa'"
              class="btn-wa"
              href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20want%20to%20ask%20about%20Shisha/Drinks%20add-on."
              target="_blank"
              rel="noopener"
              :id="`safAddonsEnWA_${p.id}`"
              data-c="@id"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <!-- Notes per product (optional) -->
      <div class="rules" v-if="p.notes && p.notes.length">
        <h3 :id="`safAddonsEnGoodTitle_${p.id}`" data-c="@id">Good to know</h3>
        <ul>
          <li v-for="(n,idx) in p.notes" :key="idx">
            <span :id="`safAddonsEnNote_${p.id}_${idx}`" data-c="@id">{{ n }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Policy / Safety -->
    <div class="text-card">
      <h2 id="safAddonsEnPolicyH2" data-c="@id">Safety, Insurance & Participation Rules</h2>
      <ul class="policy">
        <li id="safAddonsEnPol1" data-c-html="@id">
          ATV/Buggy are <strong>self-drive</strong> experiences operated by our licensed partners. A basic safety briefing, helmets and goggles are provided. Closed shoes recommended.
        </li>
        <li id="safAddonsEnPol2" data-c="@id">
          Participation is at your own risk; our partners carry commercial liability cover as required by UAE rules. We recommend guests hold personal travel/medical insurance.
        </li>
        <li id="safAddonsEnPol3" data-c-html="@id">
          <strong>Not suitable</strong> for pregnant guests; those with back/neck/spine injuries; serious heart conditions; or recent major surgery.
        </li>
        <li id="safAddonsEnPol4" data-c-html="@id">
          <strong>Age policy:</strong> Adult riders 16+ for ATV; Buggy drivers typically 18+ (with valid driving license). Minors may ride as passengers with a parent/guardian.
        </li>
        <li id="safAddonsEnPol5" data-c="@id">
          Zero tolerance for alcohol/drugs before or during riding. A waiver/indemnity form must be signed on site. Operators may request a refundable damage deposit or hold.
        </li>
        <li id="safAddonsEnPol6" data-c="@id">
          Riding is restricted to designated areas; respect guide instructions and local conservation rules. Reckless driving may result in termination without refund.
        </li>
        <li id="safAddonsEnPol7" data-c="@id">
          Weather, sand condition and daylight may affect the route/pace. Operator may modify or cancel for safety; equivalent alternatives or refunds will be advised.
        </li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="safAddonsEnFaqH2" data-c="@id">FAQs</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button
          class="faq-question"
          @click="toggleFaq(index)"
          :aria-expanded="faq.open.toString()"
          :aria-controls="`safAddonsEnFaqA_${index}`"
          :id="`safAddonsEnFaqQ_${index}`"
          data-c="@id"
        >
          <span>{{ faq.question }}</span>
          <span class="faq-icon" aria-hidden="true">{{ faq.open ? "▲" : "▼" }}</span>
        </button>
        <div
          v-if="faq.open"
          class="faq-answer"
          role="region"
          :id="`safAddonsEnFaqA_${index}`"
          :aria-labelledby="`safAddonsEnFaqQ_${index}`"
        >
          <p :id="`safAddonsEnFaqAText_${index}`" data-c="@id">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// images
import imgATV from '@/assets/images/cars/addon1.jpg'
import imgBuggy from '@/assets/images/cars/addon2.jpg'
import imgPhoto from '@/assets/images/cars/addon3.jpg'
import imgShisha from '@/assets/images/cars/addon4.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'SafariAddons',
  data() {
    return {
      products: [
        {
          id: 'atv',
          title: 'ATV Ride (150cc)',
          blurb: 'Add-on',
          image: imgATV,
          badge: 'Tour: Desert Safari',
          priceHtml: 'AED <strong>140</strong> / person',
          points: [
            'Duration: ~30 minutes on dunes',
            'Includes helmet & goggles',
            'Guided route with safety briefing'
          ],
          notes: [
            'Riders 16+ recommended; minors can ride on twin/with guide subject to operator rules.',
            'Wear closed shoes; long trousers suggested.'
          ],
          type: 'cart',
          cartName: 'ATV Ride'
        },
        {
          id: 'buggy',
          title: 'Buggy Ride (2-Seater)',
          blurb: 'Add-on',
          image: imgBuggy,
          badge: 'Tour: Desert Safari',
          priceHtml: 'AED <strong>420</strong> / vehicle',
          points: [
            'Duration: ~30 minutes on dunes',
            '2-seater buggy (driver + passenger)',
            'Guide/lead buggy & safety gear included'
          ],
          notes: [
            'Driver must be 18+ with valid driving license; passenger seat for minors subject to operator policy.'
          ],
          type: 'cart',
          cartName: 'Buggy Ride'
        },
        {
          id: 'photo',
          title: 'Photography Package',
          blurb: 'Add-on',
          image: imgPhoto,
          badge: 'Tour: 10 Edited + All Originals',
          priceHtml: 'AED <strong>150</strong> / package',
          points: [
            'Edited highlights delivered + all originals',
            'Shot by our trusted, professional partner',
            'Ideal for sunset dunes & family portraits'
          ],
          notes: [
            'If you booked Royal Dunes Safari, photography is already complimentary—no need to add.'
          ],
          type: 'cart',
          cartName: 'Photography'
        },
        {
          id: 'shisha',
          title: 'Shisha / Drinks',
          blurb: 'Add-on',
          image: imgShisha,
          badge: 'Tour: Available at Licensed Camps',
          priceHtml: 'Please <strong>contact</strong> for details',
          points: [
            'Served only at licensed camps/areas',
            'Soft drinks/tea/coffee and shisha on request',
            'Menu and pricing vary by camp & availability'
          ],
          notes: [
            'For shisha/alcohol service, UAE licensing rules apply. Availability depends on the camp you visit.',
            'Please contact us on WhatsApp to confirm options, pricing and age policy.'
          ],
          type: 'wa'
        }
      ],

      emailToCopy: 'info@wanderwonderworlddubai.com',
      showWhatsappModal: false,
      showWechatModal: false,
      whatsappQR,
      wechatQR,

      faqs: [
        {
          question: 'Is ATV/Buggy insured? Who operates it?',
          answer:
            'ATV/Buggy are run by our licensed third-party partners with commercial liability cover per UAE rules. You receive a safety briefing, gear and guided route.',
          open: false
        },
        {
          question: 'Do I need a driving license?',
          answer:
            'For ATV (150cc) many operators allow 16+ without a car license; for Buggy driving, 18+ with a valid driving license is typically required. ID may be checked on site.',
          open: false
        },
        {
          question: 'Can pregnant guests or people with back/neck issues ride?',
          answer:
            'Sorry, we do not recommend riding for pregnant guests or those with back/neck/spine injuries or recent major surgery.',
          open: false
        },
        {
          question: 'What if the weather or sand condition is bad?',
          answer:
            'For safety, the operator may adjust route/duration or reschedule/cancel. We will propose an alternative time or a refund as per the partner policy.',
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
    // CTA
    openWhatsappModal() { this.showWhatsappModal = true },
    openWechatModal() { this.showWechatModal = true },
    closeModals() { this.showWhatsappModal = false; this.showWechatModal = false },

    // 打开购物车
    bookNow() { this.cart.open() },

    // 加入购物车（只传名字）
    addToCart(name) { this.cart.add(name) },

    // FAQ
    toggleFaq(index) { this.faqs[index].open = !this.faqs[index].open }
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

.cta-btn{
  height:56px; border:none; border-radius:12px; font-weight:700; cursor:pointer;
  transition: transform .08s ease, box-shadow .18s ease; box-shadow:0 4px 12px rgba(0,0,0,.08);
  display:inline-flex; align-items:center; justify-content:center; text-decoration:none;
}
.cta-btn:active{ transform: translateY(1px); }
.cta-gray  { background:hsl(65, 5%, 53%); color:hsl(0, 0%, 100%); }
.cta-green { background:hsl(136, 90%, 27%); color:hsl(0, 0%, 100%); }
.cta-red   { background:hsl(0, 93%, 32%); color:hsl(0, 0%, 100%); }
.cta-btn:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }

/* QR modal */
.qr-modal{ position:fixed; inset:0; background:rgba(0,0,0,.4); display:grid; place-items:center; z-index:2000; }
.qr-modal-box{ position:relative; background:#fff; border-radius:16px; padding:16px; width:min(90vw,520px); box-shadow:0 16px 32px rgba(0,0,0,.25); }
.qr-modal-box img{ width:100%; height:auto; display:block; border-radius:12px; }
.qr-close{ position:absolute; top:8px; right:10px; width:36px; height:36px; border-radius:50%; border:none; background:#f2f2f2; font-size:22px; line-height:1; cursor:pointer; }
.qr-close:hover{ background:#e9e9e9; }

/* Product cards */
.product{ max-width:1000px; margin:34px auto; padding:0 20px; }
.product h2{ font-size:1.6rem; margin:0 0 6px; }
.blurb{ color:#555; margin:0 0 14px; }
.product-grid{ display:grid; grid-template-columns: 1fr; gap:18px; }
@media (min-width: 820px){ .product-grid{ grid-template-columns:1fr; } }

.product-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.product-card img{ width:100%; height:340px; object-fit:cover; display:block; }
.pc-body{ padding:20px; }
.price-line{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.badge{ background:#eef2ff; color:#1f3a8a; border-radius:999px; padding:4px 10px; font-weight:700; font-size:.85rem; }
.price{ color:#b01b1b; font-weight:800; }
.price strong{ font-weight:800; }
.bullets{ margin:0; padding-left:18px; color:#444; line-height:1.6; }
.bullets li{ margin-bottom:6px; }

/* Buttons */
.btn-addcart{
  width:100%; height:44px; margin-top:12px; border:none; border-radius:10px; font-weight:700; cursor:pointer;
  background:hsl(0, 93%, 32%); color:#fff; transition: box-shadow .18s ease, transform .08s ease;
}
.btn-addcart:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }
.btn-addcart:active{ transform: translateY(1px); }

.btn-wa{
  width:100%; height:44px; margin-top:12px; border:none; border-radius:10px; font-weight:700; cursor:pointer;
  background:hsl(136, 90%, 27%); color:#fff; display:inline-flex; align-items:center; justify-content:center;
  text-decoration:none;
}
.btn-wa:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }

/* Rules / Policy blocks */
.rules{ background:#f8f8f8; border-radius:12px; padding:16px; margin-top:18px; }
.rules h3{ margin:8px 0; }
.rules ul{ margin:0; padding-left:18px; line-height:1.6; }

/* Policy text card */
.text-card{ background:#f8f8f8; margin:40px auto; padding:25px; border-radius:8px; max-width:1000px; line-height:1.6; box-shadow:0 2px 8px rgba(0,0,0,.08); }
.text-card h2{ margin-top:0; }
.policy{ margin:0; padding-left:18px; }

/* FAQs */
.faq-card{ background:#f8f8f8; margin:40px auto; padding:25px; border-radius:8px; max-width:1000px; box-shadow:0 2px 8px rgba(0,0,0,.08); }
.faq-card h2{ margin:0 0 12px; }
.faq-item{ border-bottom:1px solid #ddd; padding:14px 0; }
.faq-question{
  width:100%; display:flex; justify-content:space-between; align-items:center;
  font-weight:600; color:#333; background:transparent; border:none; padding:0; text-align:left; cursor:pointer;
}
.faq-answer{ margin-top:8px; color:#555; }
.faq-icon{ color:#b01b1b; }
</style>
