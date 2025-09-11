<template>
  <div class="home">
    <!-- Banner -->
    <div class="banner-container">
      <img :src="bannerImages[currentIndex]" alt="Banner" class="banner" />
      <!-- Floating logos -->
      <div class="floating-logos">
        <img src="@/assets/images/logo-www-gold.png" alt="Gold Logo" class="logo" />
        <img src="@/assets/images/logo-text.png" alt="Text Logo" class="logo-text" />
      </div>
    </div>

    <h2>Welcome to WanderWonderWorldDubai.com</h2>
    <p class="slogan">Your Journey, Our Passion.</p>

    <!-- Intro + News -->
    <div class="intro-text">
      <h3>Dubai Travel & Tourism with a Personal Touch</h3>
      <p>
        WanderWonderWorld is your trusted travel companion in Dubai, offering exceptional service
        and unforgettable experiences. Whether you're arriving in style with our private transfers,
        exploring the golden desert, or cruising through the city skyline, we craft journeys that
        match your dreams. Let us guide you through the vibrant heart of the UAE with expert local
        insight and personalized care.
      </p>

      <!-- News + Trust 并排 -->
      <div class="news-trust-grid">
        <!-- News & Offers -->
        <section class="news-col">
          <NewsBoard />
        </section>

        <!-- Why book with us / 信任与差异点 -->
        <section class="trust-col">
          <section class="trust">
            <h3 class="trust-title">Your trusted tour expert in Dubai</h3>

            <div class="trust-stack">
              <!-- 1. Licensed & insured -->
              <article class="trust-card trust-lime">
                <div class="trust-icon">
                  <svg viewBox="0 0 24 24" class="ico" aria-hidden="true">
                    <path d="M12 3l7 3v6c0 4.418-3.582 8-8 8s-8-3.582-8-8V6l9-3z" fill="none" stroke="currentColor" stroke-width="1.8"/>
                    <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="trust-text">
                  <h4>Licensed & insured</h4>
                  <p>
                    RTA-licensed vehicles and commercially insured drivers. DTCM-compliant tour
                    operations for peace of mind.
                  </p>
                </div>
              </article>

              <!-- 2. Heat-Smart pacing -->
              <article class="trust-card trust-purple">
                <div class="trust-icon">
                  <svg viewBox="0 0 24 24" class="ico" aria-hidden="true">
                    <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/>
                    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="trust-text">
                  <h4>Heat-Smart pacing</h4>
                  <p>
                    Outdoor in the morning/evening, indoor at noon (views, museums, malls) — a cooler,
                    family-friendly rhythm in summer.
                  </p>
                </div>
              </article>

              <!-- 3. Private driver-guide -->
              <article class="trust-card trust-teal">
                <div class="trust-icon">
                  <svg viewBox="0 0 24 24" class="ico" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
                    <circle cx="12" cy="12" r="2.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
                    <path d="M3.5 12h7m2.9 0h7M12 3.5v4.8M8.2 18.4l2.2-3.8m5.4 3.8l-2.2-3.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="trust-text">
                  <h4>Private driver-guide</h4>
                  <p>
                    English-speaking driver-guides for road & outdoor commentary; licensed guides added
                    for Old Dubai walk or select venues.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </section>
      </div>

      <!-- WhatsApp 悬浮按钮 -->
      <div class="whatsapp-wrapper">
        <a
          href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
          class="whatsapp-button hover-reveal"
        >
          <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
          <span class="whatsapp-text">Need help? Chat with us!</span>
        </a>
      </div>

      <!-- Private Transfers -->
      <h3 class="section-title">Private Transfers</h3>
      <div class="cards-container">
        <CarCard
          :image="car1"
          title="Airport Transfers"
          tour="Dubai City"
          duration="Varies"
          price="from AED 190"
          link="/transfers/short"
        />
        <CarCard
          :image="car2"
          title="Half-Day with Driver"
          tour="Dubai City"
          duration="5 Hours"
          price="from AED 300"
          link="/transfers/short"
        />
        <CarCard
          :image="car3"
          title="Full-Day with Driver"
          tour="Dubai City"
          duration="10 Hours"
          price="from AED 510"
          link="/transfers/long"
        />
        <CarCard
          :image="car4"
          title="Dubai to Abu Dhabi"
          tour="Abu Dhabi"
          duration="10 Hours"
          price="from AED 610"
          link="/transfers/long"
        />
      </div>

      <!-- Tour Packages -->
      <h3 class="section-title">Tour Packages</h3>
      <div class="cards-container">
        <CarCard
          :image="tp1"
          title="3 Nights Dubai Starter"
          subtitle="Tour-Package"
          tour="Dubai City"
          duration="4 Days"
          price="Adult from AED 849"
          link="/package/34nights"
        />
        <CarCard
          :image="tp2"
          title="4 Nights Family Value"
          subtitle="Tour-Package"
          tour="Dubai City"
          duration="5 Days"
          price="Adult from AED 1099"
          link="/package/34nights"
        />
        <CarCard
          :image="tp3"
          title="5 Nights Dubai + Abu Dhabi Highlights"
          subtitle="Tour-Package"
          tour="Dubai + Abu Dhabi"
          duration="6 Days"
          price="Adult from AED 1349"
          link="/package/56nights"
        />
        <CarCard
          :image="tp4"
          title="6 Nights Signature Plus"
          subtitle="Tour-Package"
          tour="Dubai + Abu Dhabi"
          duration="7 Days"
          price="Adult from AED 1599"
          link="/package/56nights"
        />
      </div>

      <!-- Desert Safari -->
      <h3 class="section-title">Desert Safari</h3>
      <div class="cards-container">
        <CarCard
          :image="sf1"
          title="Morning Dunes Drive"
          subtitle="Classic Line"
          tour="Morning Private Tour"
          duration="4.5 Hours"
          price="from AED 500"
          link="/safari/regsafari"
        />
        <CarCard
          :image="sf2"
          title="Sunset Dunes Select"
          subtitle="Signature Line"
          tour="Sunset Private Tour"
          duration="6 Hours"
          price="from AED 700"
          link="/safari/regsafari"
        />
        <CarCard
          :image="sf3"
          title="Extended Dunes Thrill"
          subtitle="Prestige Line"
          tour="Extended Private Tour"
          duration="7 Hours"
          price="from AED 1100"
          link="/safari/upsafari"
        />
        <CarCard
          :image="sf4"
          title="Royal Dunes Safari"
          subtitle="Royal Line"
          tour="Luxury Overnight"
          duration="16 Hours"
          price="from AED 2000"
          link="/safari/upsafari"
        />
      </div>

      <!-- City Tour -->
      <h3 class="section-title">City Tour</h3>
      <div class="cards-container">
        <CarCard
          :image="ct1"
          title="Half-Day Dubai Essentials"
          subtitle="City-Tour-Services"
          tour="Dubai City"
          duration="5 Hours"
          price="from AED 325"
          link="/city/city12"
        />
        <CarCard
          :image="ct2"
          title="Full-Day Dubai Panorama"
          subtitle="City-Tour-Services"
          tour="Dubai City"
          duration="10 Hours"
          price="from AED 559"
          link="/city/city12"
        />
        <CarCard
          :image="ct3"
          title="Abu Dhabi Culture Day"
          subtitle="City-Tour-Services"
          tour="Abu Dhabi"
          duration="10–11 Hours"
          price="from AED 659"
          link="/city/city34"
        />
        <CarCard
          :image="ct4"
          title="Hatta Mountain Escape"
          subtitle="City-Tour-Services"
          tour="Hatta"
          duration="10–11 Hours"
          price="from AED 710"
          link="/city/city34"
        />
      </div>

      <!-- Dhow Cruise -->
      <h3 class="section-title">Dhow Cruise</h3>
      <div class="cards-container">
        <CarCard
          :image="dc1"
          title="Creek Classic Dhow Dinner"
          subtitle="Dhow-Cruise-Tour"
          tour="Dubai Creek (Al Seef)"
          duration="1.5–2 Hours"
          price="from AED 85"
          link="/city/sndcruise"
        />
        <CarCard
          :image="dc2"
          title="Dubai Marina Dhow Dinner"
          subtitle="Dhow-Cruise-Tour"
          tour="Dubai Marina"
          duration="2 Hours"
          price="from AED 115"
          link="/city/sndcruise"
        />
        <CarCard
          :image="dc3"
          title="Water Canal Glassboat Dinner"
          subtitle="Dhow-Cruise-Tour"
          tour="Dubai Canal"
          duration="~2 Hours"
          price="from AED 149"
          link="/city/sndcruise"
        />
        <CarCard
          :image="dc4"
          title="Lotus Mega Yacht Dinner"
          subtitle="Dhow-Cruise-Tour"
          tour="Dubai Marina / Harbour"
          duration="3 Hours"
          price="from AED 239"
          link="/city/sndcruise"
        />
      </div>

      <!-- 文本卡片：网站使用流程（全英文） -->
      <div class="text-card">
        <h2>How to Use WanderWonderWorld — Simple & Clear</h2>
        <ol class="process-list">
          <li><strong>Browse</strong> any section above — Private Transfers, Tour Packages, Desert Safaris, City Tours, or Dhow Cruises.</li>
          <li><strong>Add to WonderCart</strong> by tapping “Add to WonderCart” or “Book now” to collect any services you like.</li>
          <li><strong>Open WonderCart</strong> and fill in your name, email, travel date, and a short message. Send multiple items in one request.</li>
          <li><strong>Submit</strong> — we’ll reply by email within <em>3 business days</em>. Need it sooner? Reach us on
            <a href="https://wa.me/971589831967" target="_blank" rel="noopener">WhatsApp</a> or
            <a href="mailto:info@wanderwonderworlddubai.com">Email</a>.
          </li>
          <li><strong>Finalize</strong> — once confirmed, you’ll receive your schedule and pickup details. We reconfirm on WhatsApp 24h before service.</li>
        </ol>
      </div>

      <!-- 文本卡片：FAQs（红三角折叠） -->
      <div class="text-card faq-accordion">
        <h2>FAQs — Dubai in a Nutshell</h2>

        <div v-for="(f, i) in faqs" :key="i" class="faq-row">
          <button class="faq-q" @click="toggleFaq(i)" :aria-expanded="f.open.toString()">
            <span class="tri" :class="{ open: f.open }"></span>
            {{ f.q }}
          </button>

          <transition name="faq">
            <div v-if="f.open" class="faq-a">
              <p v-html="f.a"></p>
            </div>
          </transition>
        </div>
      </div>
      <!-- 结束 -->
    </div>
  </div>
</template>

<script>
import NewsBoard from '@/components/NewsBoard.vue'
import CarCard from '@/components/CarCard.vue'

/* Transfers */
import car1 from '@/assets/images/cars/carcard1.jpg'
import car2 from '@/assets/images/cars/carcard2.jpg'
import car3 from '@/assets/images/cars/carcard5.jpg'
import car4 from '@/assets/images/cars/carcard4.jpg'

/* Tour packages */
import tp1 from '@/assets/images/cars/tour1.jpg'
import tp2 from '@/assets/images/cars/tour2.jpg'
import tp3 from '@/assets/images/cars/tour3.jpg'
import tp4 from '@/assets/images/cars/tour4.jpg'

/* Desert safari */
import sf1 from '@/assets/images/cars/safaricar1.jpg'
import sf2 from '@/assets/images/cars/safaricar2.jpg'
import sf3 from '@/assets/images/cars/safaricar3.jpg'
import sf4 from '@/assets/images/cars/safaricar4.jpg'

/* City tour */
import ct1 from '@/assets/images/cars/city1.jpg'
import ct2 from '@/assets/images/cars/city2.jpg'
import ct3 from '@/assets/images/cars/city3.jpg'
import ct4 from '@/assets/images/cars/city4.jpg'

/* Dhow cruise */
import dc1 from '@/assets/images/cars/boat1.jpg'
import dc2 from '@/assets/images/cars/boat2.jpg'
import dc3 from '@/assets/images/cars/boat3.jpg'
import dc4 from '@/assets/images/cars/boat4.jpg'

export default {
  name: 'Home',
  components: { NewsBoard, CarCard },
  data() {
    return {
      currentIndex: 0,
      bannerImages: [
        new URL('@/assets/images/banner1.jpg', import.meta.url).href,
        new URL('@/assets/images/banner2.jpg', import.meta.url).href,
        new URL('@/assets/images/banner3.jpg', import.meta.url).href,
        new URL('@/assets/images/banner4.jpg', import.meta.url).href,
        new URL('@/assets/images/banner5.jpg', import.meta.url).href,
        new URL('@/assets/images/banner9.jpg', import.meta.url).href
      ],
      /* cards */
      car1, car2, car3, car4,
      tp1, tp2, tp3, tp4,
      sf1, sf2, sf3, sf4,
      ct1, ct2, ct3, ct4,
      dc1, dc2, dc3, dc4,

      /* ✅ 把 FAQs 放到 data 里，确保是响应式 */
      faqs: [
        {
          q: "What is Dubai’s historical arc?",
          a: "Dubai grew from a Gulf trading and pearling port into a logistics and aviation hub, and in the last two decades pivoted to tourism, events, and finance — hence today’s skyline and modern infrastructure.",
          open: false
        },
        {
          q: "What cultural etiquette should I know?",
          a: "The UAE follows Islamic traditions. Dress modestly in public, observe mosque rules and security checks, and expect adjusted hours and entertainment during Ramadan and on dry days.",
          open: false
        },
        {
          q: "What’s the climate and how should I plan?",
          a: "Hot desert climate. We recommend a <em>Heat-Smart</em> rhythm: outdoors in the morning/evening, and indoor attractions (observatories, museums, malls) around midday.",
          open: false
        },
        {
          q: "Is it suitable for families and seniors?",
          a: "Yes. Child/booster seats are available on request; desert programs can switch to gentler morning versions (≥48h notice); midday indoor time keeps the day comfortable for all ages.",
          open: false
        }
      ]
    }
  },
  methods: {
    toggleFaq(i) {
      this.faqs[i].open = !this.faqs[i].open
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.bannerImages.length
    }, 10000)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.home{ padding:0; text-align:center; font-family:'Poppins',sans-serif; }

/* Banner */
.banner-container{ position:relative; width:100%; height:300px; overflow:hidden; }
.banner{ width:100%; height:100%; object-fit:cover; }
.floating-logos{
  position:absolute; top:10px; left:20px;
  display:flex; flex-direction:column; align-items:flex-start; gap:10px;
}
.logo{ height:120px; }
.logo-text{ height:130px; margin-top:-80px; }

/* Headings */
h2{ margin:16px 0 0; font-weight:700; }
.slogan{ font-size:1.2rem; color:#b01b1b; margin-top:8px; }

/* Intro block */
.intro-text{ max-width:1300px; margin:40px auto 20px; text-align:left; padding:0 20px; }
.intro-text h3{ font-size:1.1rem; font-weight:600; margin-bottom:10px; }
.intro-text p{ font-size:1rem; color:#555; line-height:1.6; }

/* ---- 两栏并排：News | Trust ---- */
.news-trust-grid{
  display:grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: start;
}
.news-col, .trust-col{ width:100%; }
@media (min-width:1100px){
  .news-trust-grid{
    grid-template-columns: minmax(420px,1fr) minmax(420px,1fr);
  }
}

/* Trust section */
.trust{ margin:0 0 10px; }
.trust-title{
  font-size:1.3rem; font-weight:700; margin:0 0 12px;
  letter-spacing:.2px; color:#1b1b1b;
}
.trust-stack{ display:flex; flex-direction:column; gap:16px; }

/* 基础卡片 */
.trust-card{
  position:relative; display:flex; gap:14px; align-items:flex-start;
  border-radius:16px; padding:16px 18px;
  border:1.5px solid #e5e7eb; background:#fff;
  box-shadow:0 2px 8px rgba(0,0,0,.04);
}
.trust-card:hover{ box-shadow:0 6px 16px rgba(0,0,0,.08); }

/* Icon */
.trust-icon{
  width:48px; height:48px; border-radius:999px;
  display:grid; place-items:center; flex:0 0 48px;
}
.ico{ width:26px; height:26px; }

/* 文案 */
.trust-text h4{ margin:2px 0 4px; font-size:1.05rem; }
.trust-text p{ margin:0; color:#000; line-height:1.55; }

/* 主题色 */
.trust-lime{ --bg:hsl(0,0%,94%); --bd:hsl(0,0%,90%); --fg:#222; background:var(--bg); border-color:var(--bd); }
.trust-purple{ --bg:hsl(0,0%,94%); --bd:hsl(0,0%,90%); --fg:#222; background:var(--bg); border-color:var(--bd); }
.trust-teal{ --bg:hsl(0,0%,94%); --bd:hsl(0,0%,90%); --fg:#222; background:var(--bg); border-color:var(--bd); }

/* 区块标题 */
.section-title{
  margin: 12px 20px 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1b1b1b;
}

/* 服务卡片列表 -> Grid 布局 */
.cards-container{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap:20px;
  padding:20px;
  align-items:stretch;
}
.cards-container > *{ width:100%; }

/* 文本卡片 */
.text-card{
  background:#f8f8f8; margin: 26px auto 40px; padding: 22px 24px;
  border-radius: 10px; max-width: 1000px; line-height: 1.65;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
}
.text-card h2{ font-size:1.45rem; margin-bottom:12px; }
.process-list{ padding-left:18px; }
.process-list li{ margin:6px 0; }
.qa h4{ margin:10px 0 4px; }

/* WhatsApp 悬浮按钮 */
.whatsapp-wrapper{
  position:fixed; left:7px; top:75%; transform:translateY(-50%); z-index:9999;
}
.whatsapp-button{
  display:flex; align-items:center; background:#fff; padding:1px 15px;
  border-radius:100px; box-shadow:0 4px 10px rgba(0,0,0,.2);
  text-decoration:none; transition:all .3s ease-in-out;
}
.whatsapp-button:hover{ transform:scale(1.05); }
.whatsapp-button img{ width:58px; height:58px; margin-right:3px; }
.hover-reveal .whatsapp-text{ max-width:0; opacity:0; overflow:hidden; transition:all .3s ease-in-out; }
.hover-reveal:hover .whatsapp-text{ max-width:200px; opacity:1; margin-left:10px; }

/* 宽屏容器 */
@media (min-width:1200px){
  .intro-text{ max-width:1600px; }
}

/* Accordion base */
.faq-accordion .faq-row{ border-top:1px solid #e5e7eb; }
.faq-accordion .faq-row:last-child{ border-bottom:1px solid #e5e7eb; }

.faq-accordion .faq-q{
  width:100%;
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px 6px;
  background:#fff;
  border:none;
  text-align:left;
  font-weight:700;
  cursor:pointer;
}

/* Red triangle: points RIGHT when closed, DOWN when open */
.faq-accordion .tri{
  width:0; height:0;
  border-top:6px solid transparent;
  border-bottom:6px solid transparent;
  border-left:10px solid #b01b1b; /* red */
  transition: transform .18s ease;
}
.faq-accordion .tri.open{ transform: rotate(90deg); }

.faq-accordion .faq-a{
  padding: 2px 6px 12px 22px;
  color:#444;
  line-height:1.65;
}

/* Smooth show/hide */
.faq-enter-active, .faq-leave-active{ transition: opacity .18s ease, transform .18s ease; }
.faq-enter-from, .faq-leave-to{ opacity:0; transform: translateY(-4px); }
</style>
