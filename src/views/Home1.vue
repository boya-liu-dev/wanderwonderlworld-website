<template>
  <div class="home">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="bannerImages[currentIndex]"
        alt="横幅"
        class="banner"
        id="homeBanner"
        data-c-src="@id"
      />
      <!-- Floating logos -->
      <div class="floating-logos">
        <img
          src="@/assets/images/logo-www-gold.png"
          alt="金色标志"
          class="logo"
          id="homeLogoGold"
          data-c-src="@id"
        />
        <img
          src="@/assets/images/logo-text.png"
          alt="文字标志"
          class="logo-text"
          id="homeLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <h2 id="homeWelcomeTitle" data-c="@id">万德假日，欢迎您访问 WanderWonderWorldDubai.com</h2>
    <p class="slogan" id="homeSlogan" data-c="@id">您的旅程，我们的热爱。</p>

    <!-- Intro + News -->
    <div class="intro-text">
      <h3 id="homeIntroTitle" data-c="@id">迪拜旅行 · 有温度的服务</h3>
      <p id="homeIntroP1" data-c-html="@id">
        万德假日（WanderWonderWorld）是您在迪拜值得信赖的旅行伙伴，提供专业服务与难忘体验。
        无论是专车接送、金色沙漠探险，还是天际线游船观光，我们都为您定制贴合心愿的旅程。
        借助本地专家洞察与个性化关怀，带您走进阿联酋的多彩与活力。
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
            <h3 class="trust-title" id="homeTrustTitle" data-c="@id">您在迪拜值得信赖的行程专家</h3>

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
                  <h4 id="homeTrust1Title" data-c="@id">持牌运营 · 全面保险</h4>
                  <p id="homeTrust1P" data-c-html="@id">
                    RTA 持牌车辆与商业保险司机；DTCM 合规运营，全程安心无忧。
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
                  <h4 id="homeTrust2Title" data-c="@id">防暑节奏 · 更舒适</h4>
                  <p id="homeTrust2P" data-c-html="@id">
                    早晚安排户外，中午转为室内（观景台、博物馆、商场）——夏季更清凉，亲子更友好。
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
                  <h4 id="homeTrust3Title" data-c="@id">司机讲解 · 私享导览</h4>
                  <p id="homeTrust3P" data-c-html="@id">
                    中英双语司机沿途讲解；老迪拜徒步或指定场馆可加配持证导游（按需安排）。
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
          <img
            src="@/assets/images/whatsapp-icon.png"
            alt="WhatsApp"
            id="homeWhatsappIcon"
            data-c-src="@id"
          />
          <span class="whatsapp-text" id="homeWhatsappText" data-c="@id">需要帮助？点击咨询！</span>
        </a>
      </div>

      <!-- Private Transfers -->
      <h3 class="section-title" id="homeSecTransfersTitle" data-c="@id">私人接送</h3>
      <div class="cards-container">
        <CarCard
          key-id="homeTransfersAirport"
          :image="car1"
          title="机场接送"
          subtitle="含司机用车"
          tour="迪拜市区"
          duration="以航班为准"
          price="AED 190 起"
          link="/transfers/short1"
        />
        <CarCard
          key-id="homeTransfersHalfDay"
          :image="car2"
          title="半日包车（含司机）"
          subtitle="含司机用车"
          tour="迪拜市区"
          duration="5小时"
          price="AED 300 起"
          link="/transfers/short1"
        />
        <CarCard
          key-id="homeTransfersFullDay"
          :image="car3"
          title="全日包车（含司机）"
          subtitle="含司机用车"
          tour="迪拜市区"
          duration="10小时"
          price="AED 510 起"
          link="/transfers/long1"
        />
        <CarCard
          key-id="homeTransfersAUH"
          :image="car4"
          title="迪拜—阿布扎比往返"
          subtitle="含司机用车"
          tour="阿布扎比"
          duration="10小时"
          price="AED 610 起"
          link="/transfers/long1"
        />
      </div>

      <!-- Tour Packages -->
      <h3 class="section-title" id="homeSecPackagesTitle" data-c="@id">精选行程套餐</h3>
      <div class="cards-container">
        <CarCard
          key-id="homePkg3N"
          :image="tp1"
          title="迪拜3晚入门之旅"
          subtitle="行程套餐"
          tour="迪拜市区"
          duration="4天"
          price="成人 AED 849 起"
          link="/package/34nights1"
        />
        <CarCard
          key-id="homePkg4N"
          :image="tp2"
          title="4晚亲子优选"
          subtitle="行程套餐"
          tour="迪拜市区"
          duration="5天"
          price="成人 AED 1099 起"
          link="/package/34nights1"
        />
        <CarCard
          key-id="homePkg5N"
          :image="tp3"
          title="迪拜+阿布扎比5晚精华"
          subtitle="行程套餐"
          tour="迪拜 + 阿布扎比"
          duration="6天"
          price="成人 AED 1349 起"
          link="/package/56nights1"
        />
        <CarCard
          key-id="homePkg6N"
          :image="tp4"
          title="6晚臻选升级"
          subtitle="行程套餐"
          tour="迪拜 + 阿布扎比"
          duration="7天"
          price="成人 AED 1599 起"
          link="/package/56nights1"
        />
      </div>

      <!-- Desert Safari -->
      <h3 class="section-title" id="homeSecSafariTitle" data-c="@id">沙漠探险</h3>
      <div class="cards-container">
        <CarCard
          key-id="homeSafariMorning"
          :image="sf1"
          title="晨曦沙丘越野"
          subtitle="经典系列"
          tour="早晨私人团"
          duration="4.5小时"
          price="AED 500 起"
          link="/safari/regsafari1"
        />
        <CarCard
          key-id="homeSafariSunset"
          :image="sf2"
          title="日落沙丘优选"
          subtitle="臻选系列"
          tour="日落私人团"
          duration="6小时"
          price="AED 700 起"
          link="/safari/regsafari1"
        />
        <CarCard
          key-id="homeSafariExtended"
          :image="sf3"
          title="加长版沙丘刺激"
          subtitle="尊尚系列"
          tour="加长私人团"
          duration="7小时"
          price="AED 1100 起"
          link="/safari/upsafari1"
        />
        <CarCard
          key-id="homeSafariRoyal"
          :image="sf4"
          title="皇家沙漠过夜营"
          subtitle="皇室系列"
          tour="豪华过夜"
          duration="16小时"
          price="AED 2000 起"
          link="/safari/upsafari1"
        />
      </div>

      <!-- City Tour -->
      <h3 class="section-title" id="homeSecCityTitle" data-c="@id">城市观光</h3>
      <div class="cards-container">
        <CarCard
          key-id="homeCityHalfDay"
          :image="ct1"
          title="半日迪拜精华"
          subtitle="城市观光服务"
          tour="迪拜市区"
          duration="5小时"
          price="AED 325 起"
          link="/city/city121"
        />
        <CarCard
          key-id="homeCityFullDay"
          :image="ct2"
          title="全日迪拜全景"
          subtitle="城市观光服务"
          tour="迪拜市区"
          duration="10小时"
          price="AED 559 起"
          link="/city/city121"
        />
        <CarCard
          key-id="homeCityAbuDhabi"
          :image="ct3"
          title="阿布扎比文化一日游"
          subtitle="城市观光服务"
          tour="阿布扎比"
          duration="10–11小时"
          price="AED 659 起"
          link="/city/city341"
        />
        <CarCard
          key-id="homeCityHatta"
          :image="ct4"
          title="哈塔山谷度假一日游"
          subtitle="城市观光服务"
          tour="哈塔"
          duration="10–11小时"
          price="AED 710 起"
          link="/city/city341"
        />
      </div>

      <!-- Dhow Cruise -->
      <h3 class="section-title" id="homeSecCruiseTitle" data-c="@id">游船晚宴</h3>
      <div class="cards-container">
        <CarCard
          key-id="homeCruiseCreek"
          :image="dc1"
          title="迪拜溪传统独桅帆船晚餐"
          subtitle="游船观光"
          tour="迪拜溪（Al Seef）"
          duration="1.5–2小时"
          price="AED 85 起"
          link="/city/sndcruise1"
        />
        <CarCard
          key-id="homeCruiseMarina"
          :image="dc2"
          title="迪拜码头独桅帆船晚餐"
          subtitle="游船观光"
          tour="迪拜码头"
          duration="2小时"
          price="AED 115 起"
          link="/city/sndcruise1"
        />
        <CarCard
          key-id="homeCruiseCanal"
          :image="dc3"
          title="水道玻璃游船晚餐"
          subtitle="游船观光"
          tour="迪拜运河"
          duration="约2小时"
          price="AED 149 起"
          link="/city/sndcruise1"
        />
        <CarCard
          key-id="homeCruiseLotus"
          :image="dc4"
          title="Lotus 巨型游艇晚餐"
          subtitle="游船观光"
          tour="迪拜码头 / 港湾"
          duration="3小时"
          price="AED 239 起"
          link="/city/sndcruise1"
        />
      </div>

      <!-- 文本卡片：网站使用流程（全英文） -->
      <div class="text-card">
        <h2 id="homeHowToTitle" data-c="@id">如何使用万德假日（WanderWonderWorld）— 简洁清晰</h2>
        <ol class="process-list">
          <li id="homeHowToL1" data-c-html="@id"><strong>浏览</strong> 上方各栏目：私人接送、行程套餐、沙漠探险、城市观光或游船晚宴。</li>
          <li id="homeHowToL2" data-c-html="@id"><strong>加入万德购物车</strong> 点击“加入万德购物车”或“立即预订”，将心仪服务加入清单。</li>
          <li id="homeHowToL3" data-c-html="@id"><strong>打开万德购物车</strong> 填写姓名、邮箱、出行日期与简要需求说明；支持一次提交多项服务。</li>
          <li id="homeHowToL4" data-c-html="@id"><strong>提交</strong> — 我们会在 <em>3个工作日</em> 内邮件回复。需要更快？请通过
            <a href="https://wa.me/971589831967" target="_blank" rel="noopener">WhatsApp</a> 或
            <a href="mailto:info@wanderwonderworlddubai.com">电子邮件</a> 联系我们。
          </li>
          <li id="homeHowToL5" data-c-html="@id"><strong>确认</strong> — 确认后您将收到行程单与上车详情；服务前 24 小时我们会通过 WhatsApp 再次确认。</li>
        </ol>
      </div>

      <!-- 文本卡片：FAQs（红三角折叠） -->
      <div class="text-card faq-accordion">
        <h2 id="homeFaqTitle" data-c="@id">常见问题 — 迪拜一览</h2>

        <div v-for="(f, i) in faqs" :key="i" class="faq-row">
          <button class="faq-q" @click="toggleFaq(i)" :aria-expanded="f.open.toString()">
            <span class="tri" :class="{ open: f.open }"></span>
            <span :id="`homeFaqQ${i+1}`" data-c="@id">{{ f.q }}</span>
          </button>

          <transition name="faq">
            <div v-if="f.open" class="faq-a">
              <p :id="`homeFaqA${i+1}`" data-c-html="@id" v-html="f.a"></p>
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

      /* 把 FAQs 放到 data 里，确保是响应式 */
      faqs: [
        {
          q: "迪拜的发展脉络是什么？",
          a: "迪拜由海湾贸易与采珠港口起步，成长为物流与航空枢纽；近二十年转向旅游、会展与金融，因此形成今日的现代天际线与完善的城市基础设施。",
          open: false
        },
        {
          q: "有哪些文化礼仪需要注意？",
          a: "阿联酋奉行伊斯兰传统。公共场合请着装得体，参观清真寺需遵守礼规与安检；在斋月及禁酒日，营业时间与娱乐活动会有所调整。",
          open: false
        },
        {
          q: "气候如何，行程该如何安排？",
          a: "属炎热沙漠气候。建议采用 <em>Heat-Smart</em> 节奏：早晚进行户外活动，中午安排室内景点（观景台、博物馆、商场）。",
          open: false
        },
        {
          q: "适合亲子与长者吗？",
          a: "适合。可按需提供儿童/增高座椅；沙漠项目可在 ≥48 小时提前通知下调整为更温和的早晨场；中午室内时间更适合各年龄层。",
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
