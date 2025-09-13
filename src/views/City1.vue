<template>
  <div class="city">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="城市观光横幅"
        class="banner"
        id="cityZhBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="金色标志"
          class="logo"
          id="cityZhLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="文字标志"
          class="logo-text"
          id="cityZhLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="cityZhIntroTitle" data-c="@id">迪拜城市观光 — 弹性安排 · 深度发现</h1>
      <p id="cityZhIntroP1" data-c-html="@id">
        以四款<strong>私人（按车计价）</strong>城市观光，自由玩转迪拜。我们采用「防暑节奏」设计行程：
        早晚户外，中午室内；迪拜线路标配<strong>老迪拜徒步</strong> + <em>阿布拉</em> 摆渡（徒步段由持证中文导游带领，其余时段由<strong>司机兼中文讲解</strong>随行）。
        明晰的「价值优先」定价、每车最多6位（7座）、车载瓶装水与合规认证车辆，让您从酒店接到送一路顺畅。
      </p>
    </div>

    <div class="whatsapp-wrapper">
      <a
        id="cityZhWhatsappLink"
        data-c-src="@id"
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
        class="whatsapp-button hover-reveal">
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="cityZhWhatsappIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="cityZhWhatsappText" data-c="@id">需要帮助？点击咨询！</span>
      </a>
    </div>

    <!-- Cards (4 packages) -->
    <div class="cards-container">
      <CarCard
        key-id="cityZhCardHalfDay"
        :image="car1"
        title="半日迪拜精华"
        subtitle="城市观光服务"
        tour="迪拜市区"
        duration="5小时"
        price="AED 325 起"
        link="/city/city121"
      />

      <CarCard
        key-id="cityZhCardFullDay"
        :image="car2"
        title="全日迪拜全景"
        subtitle="城市观光服务"
        tour="迪拜市区"
        duration="10小时"
        price="AED 559 起"
        link="/city/city121"
      />

      <CarCard
        key-id="cityZhCardAbuDhabi"
        :image="car3"
        title="阿布扎比文化一日游"
        subtitle="城市观光服务"
        tour="阿布扎比"
        duration="10–11小时"
        price="AED 659 起"
        link="/city/city341"
      />

      <CarCard
        key-id="cityZhCardHatta"
        :image="car4"
        title="哈塔山谷度假一日游"
        subtitle="城市观光服务"
        tour="哈塔"
        duration="10–11小时"
        price="AED 710 起"
        link="/city/city341"
      />
    </div>

    <!-- Price List -->
    <div class="text-card">
      <h2 id="cityZhPriceTitle" data-c="@id">迪拜城市观光价目表</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th id="cityZhPriceThTour" data-c="@id">城市观光</th>
            <th id="cityZhPriceThTime" data-c="@id">时间/时长</th>
            <th id="cityZhPriceThPrice" data-c="@id">价格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="cityZhPriceHalfTitle" data-c="@id">半日迪拜精华</td>
            <td id="cityZhPriceHalfTime" data-c="@id">5小时</td>
            <td>
              <strong style="color:#b01b1b;">
                AED
                <span id="cityZhPriceHalfFrom" data-c-num="@id" data-format="price-AED">325</span>
                起
              </strong>
            </td>
          </tr>
          <tr>
            <td id="cityZhPriceFullTitle" data-c="@id">全日迪拜全景</td>
            <td id="cityZhPriceFullTime" data-c="@id">10小时</td>
            <td>
              <strong style="color:#b01b1b;">
                AED
                <span id="cityZhPriceFullFrom" data-c-num="@id" data-format="price-AED">559</span>
                起
              </strong>
            </td>
          </tr>
          <tr>
            <td id="cityZhPriceADTitle" data-c="@id">阿布扎比文化一日游</td>
            <td id="cityZhPriceADTime" data-c="@id">10–11小时</td>
            <td>
              <strong style="color:#b01b1b;">
                AED
                <span id="cityZhPriceADFrom" data-c-num="@id" data-format="price-AED">659</span>
                起
              </strong>
            </td>
          </tr>
          <tr>
            <td id="cityZhPriceHattaTitle" data-c="@id">哈塔山谷度假一日游</td>
            <td id="cityZhPriceHattaTime" data-c="@id">10–11小时</td>
            <td>
              <strong style="color:#b01b1b;">
                AED
                <span id="cityZhPriceHattaFrom" data-c-num="@id" data-format="price-AED">710</span>
                起
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p
        id="cityZhPriceNote"
        data-c-html="@id"
        style="margin-top:8px;font-size:0.95rem;color:#555;"
      >
        * 以上为<strong>按车计价</strong>（7座，最多载6位）。超时<strong>AED <span id="cityZhOvertimeRate" data-c-num="@id" data-format="price-AED">75</span>/小时</strong>。
        迪拜线路含老迪拜徒步 + 阿布拉摆渡。除特别说明外，景点门票与餐食为自选加购。
        依法须使用儿童/增高座椅，可在预订时提出需求。
      </p>
    </div>

    <!-- CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="cityZhCTAEmail" data-c="@id">邮件联系我们</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="cityZhCTAWhatsApp" data-c="@id">WhatsApp 联系我们</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="cityZhCTAWechat" data-c="@id">微信联系我们</button>
        <button class="cta-btn cta-red" @click="bookNow" id="cityZhCTACart" data-c="@id">万德购物车</button>
      </div>
    </div>

    <!-- Toast & Modals -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="cityZhEmailCopiedText" data-c-html="@id">
          <strong>info@wanderwonderworlddubai.com</strong> 已复制到您的剪贴板
        </p>
      </div>
    </div>

    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="cityZhWhatsappQR" data-c-src="@id" />
      </div>
    </div>

    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="cityZhWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="cityZhFaqTitle" data-c="@id">常见问题</h2>
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

    <!-- Copy blocks -->
    <div class="text-card">
      <h2 id="cityZhS1Title" data-c="@id">按你的方式探索迪拜：私人城市观光</h2>
      <p id="cityZhS1P1" data-c-html="@id"><strong>半日迪拜精华：</strong> 老迪拜徒步（持证中文导游）+ 阿布拉横渡，畅游市集（香料/黄金），前往朱美拉海滨拍照，最后抵达迪拜购物中心/音乐喷泉（或未来博物馆 MoTF 外观）。紧凑5小时，避暑避堵。</p>
      <p id="cityZhS1P2" data-c-html="@id"><strong>全日迪拜全景：</strong> 一整天的「防暑节奏」：上午老迪拜徒步 + 阿布拉；中午转入室内（迪拜之框或棕榈塔观景台 The View，或哈利法塔124/125层）；黄金时段在市集古堡 Souk Madinat 及迪拜码头/蓝水岛/ JBR 一带拍照。</p>
      <p id="cityZhS1P3" data-c-html="@id"><strong>阿布扎比文化日：</strong> 谢赫扎耶德大清真寺入内参观（须遵守着装），车览总统府与海滨大道，二选一：阿布扎比卢浮宫或总统府 Qasr Al Watan（视购票时段而定）。我们将根据周五礼拜与路况调整时间。</p>
      <p id="cityZhS1P4" data-c-html="@id"><strong>哈塔山地休闲日：</strong> 水坝观景台（可选皮划艇）、哈塔遗产村、Wadi Hub 活动区与哈塔山顶公园。建议使用四驱车型。天气与路况可能为安全起见调整顺序。</p>
    </div>

    <div class="text-card">
      <h2 id="cityZhS2Title" data-c="@id">条款与细则（城市观光）</h2>
      <p id="cityZhS2P1" data-c-html="@id"><strong>价格与座位：</strong> 费用按车计（7座，最多6位）。超时 AED <span id="cityZhSurchargeOvertime" data-c-num="@id" data-format="price-AED">75</span>/小时。偏远接送点（如杰贝阿里/DWC/沙迦交界）或收取小额附加费。固定出发有助错峰；亦可应需定制时间。</p>
      <p id="cityZhS2P2" data-c-html="@id"><strong>包含：</strong> 私人车辆 + 司机兼中文讲解；迪拜线路含约2小时老迪拜徒步配持证中文导游；阿布拉船票（迪拜线路）；瓶装水、萨利克过路费与官方停车费。</p>
      <p id="cityZhS2P3" data-c-html="@id"><strong>不含：</strong> 除说明外之门票与餐食；自选活动费用（如皮划艇、观景台等）；全日持证导游加配；旺季/活动附加；小费；个人旅行保险。</p>
      <p id="cityZhS2P4" data-c-html="@id"><strong>儿童座椅与安全：</strong> 阿联酋法律要求按龄使用儿童/增高座椅并单独占座；请在预订时提出数量。车辆内禁止饮食与吸烟。</p>
      <p id="cityZhS2P5" data-c-html="@id"><strong>阿布扎比大清真寺：</strong> 女士需遮盖头发、肩膀与腿部；男士须穿长裤。安检严格，着装不合规可能被拒入。周五访客时段有限。</p>
      <p id="cityZhS2P6" data-c-html="@id"><strong>斋月与旺季：</strong> 沙漠营地表演暂停；酒精供应受限；景点时段或有调整。新年夜与大型活动可能有强制性附加与道路管制。</p>
      <p id="cityZhS2P7" data-c-html="@id"><strong>改期与取消：</strong> ≥24小时免费改/退；12–24小时收取50%；&lt;12小时或未到场收取100%。不可退门票按供应商政策执行。不可抗力（沙尘暴/暴雨/临时关闭）优先改期；无法改期时仅收取不可追回成本。</p>
    </div>

    <div class="text-card">
      <h2 id="cityZhS3Title" data-c="@id">万德假日 · 城市观光服务</h2>
      <p id="cityZhS3P1" data-c-html="@id">
        我们以「防暑节奏」规划行程，迪拜线路标配老迪拜徒步 + 阿布拉，并保持自选项目透明。
        提供 WhatsApp 礼宾（08:00–22:00）、认证司机与车辆、干净安全的停靠点、按需儿童座椅，
        以及一次（≥24小时）免费改期，让您的当天接送与游览更省心。
      </p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/city1.jpg'
import car2 from '@/assets/images/cars/city2.jpg'
import car3 from '@/assets/images/cars/city3.jpg'
import car4 from '@/assets/images/cars/city4.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'City',
  components: { CarCard },
  data() {
    return {
      banner,
      logoGold,
      logoText,
      car1,
      car2,
      car3,
      car4,
      faqs: [
        {
          question: "价格包含哪些内容？",
          answer:
            "私人车辆 + 司机兼中文讲解；迪拜线路含约2小时老迪拜徒步（持证中文导游）；阿布拉船票（迪拜线路）；瓶装水、萨利克过路费与官方停车费。除特别说明外，门票与餐食为自选加购。",
          open: false
        },
        {
          question: "费用是按车还是按人计算？",
          answer:
            "按车计价，7座车型最多6位乘客。依法须为儿童配备儿童/增高座椅，可在预订时提出。可加价升级更大车型（海狮/中巴/豪华SUV）。",
          open: false
        },
        {
          question: "观光顺序可以调整吗？",
          answer:
            "可以。为私人灵活线路，我们会结合航班、季节、路况与门票时段优化安排。高峰日期可能需调整以获得更佳时段。",
          open: false
        },
        {
          question: "阿布扎比清真寺的着装要求会严格执行吗？",
          answer:
            "会。女士需遮盖头发、肩膀与腿部；男士需穿长裤。安检严格，着装不合规可能被拒入。周五访客时段有限。",
          open: false
        }
      ],
      showEmailToast: false,
      showWhatsappModal: false,
      showWechatModal: false,
      whatsappQR,
      wechatQR,
      emailToCopy: 'info@wanderwonderworlddubai.com',
      toastTimer: null
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open
    },
    async copyEmail() {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(this.emailToCopy);
        } else {
          const ta = document.createElement('textarea');
          ta.value = this.emailToCopy;
          ta.style.position = 'fixed';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        this.showToast();
      } catch (e) {
        this.showToast();
      }
    },
    showToast() {
      this.showEmailToast = true;
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.showEmailToast = false;
      }, 3000);
    },
    openWhatsappModal() {
      this.showWhatsappModal = true;
    },
    openWechatModal() {
      this.showWechatModal = true;
    },
    closeModals() {
      this.showWhatsappModal = false;
      this.showWechatModal = false;
    },
    bookNow() {
       useWonderCart().open();
    }
  }
}
</script>

<style scoped>
/* 保持现有样式，未改动 */
.safari { font-family: 'Poppins', sans-serif; }
.banner-container { position: relative; width: 100%; height: 300px; overflow: hidden; }
.banner { width: 100%; height: 100%; object-fit: cover; }
.floating-logos { position: absolute; top: 10px; left: 20px; display: flex; flex-direction: column; align-items: flex-start; }
.logo { height: 120px; }
.logo-text { height: 130px; margin-top: -70px; }

.intro { max-width: 1000px; margin: 30px auto; text-align: left; padding: 0 20px; }
.intro h1 { font-size: 2rem; font-weight: bold; margin-bottom: 10px; }

.cards-container { display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; justify-content: center; }

.text-card { background-color: #f8f8f8; margin: 50px auto; padding: 25px; border-radius: 8px; max-width: 1000px; line-height: 1.6; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.text-card h2 { font-size: 1.6rem; margin-bottom: 15px; }
.text-card p { margin-bottom: 30px; }

.whatsapp-wrapper { position: fixed; left: 7px; top: 75%; transform: translateY(-50%); z-index: 9999; }
.whatsapp-button { display: flex; align-items: center; background-color: white; padding: 1px 15px; border-radius: 100px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); text-decoration: none; transition: all 0.3s ease-in-out; }
.whatsapp-button:hover { transform: scale(1.05); }
.whatsapp-button img { width: 58px; height: 58px; margin-right: 3px; }
.hover-reveal .whatsapp-text { max-width: 0; opacity: 0; overflow: hidden; transition: all 0.3s ease-in-out; }
.hover-reveal:hover .whatsapp-text { max-width: 200px; opacity: 1; margin-left: 10px; }

.price-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
.price-table th, .price-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
.price-table th { background-color: #f8f8f8; font-weight: 600; }
.price-table tr:nth-child(even) { background-color: #fafafa; }

.faq-card { background: #f8f8f8; margin: 50px auto; padding: 25px; border-radius: 8px; max-width: 1000px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.faq-card h2 { font-size: 1.6rem; margin-bottom: 20px; }
.faq-item { border-bottom: 1px solid #ddd; padding: 15px 0; cursor: pointer; }
.faq-question { display: flex; justify-content: space-between; font-weight: 600; color: #333; }
.faq-icon { font-size: 1rem; color: #b01b1b; }
.faq-answer { margin-top: 10px; color: #555; line-height: 1.6; }

.cta-row-wrapper { max-width: 1000px; margin: 30px auto 10px; }
.cta-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 900px) { .cta-row { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .cta-row { grid-template-columns: 1fr; } }

.cta-btn { height: 56px; border: none; border-radius: 12px; font-weight: 700; font-family: 'Poppins', sans-serif; cursor: pointer; transition: transform .08s ease, box-shadow .18s ease; box-shadow: 0 4px 12px rgba(0,0,0,.08); }
.cta-btn:active { transform: translateY(1px); }
.cta-gray  { background:hsl(65, 5%, 53%); color:hsl(0, 0%, 100%); }
.cta-green { background:hsl(136, 90%, 27%); color:hsl(0, 0%, 100%); }
.cta-red   { background:hsl(0, 93%, 32%); color:hsl(0, 0%, 100%); }
.cta-btn:hover { box-shadow: 0 8px 16px rgba(0,0,0,.12); }

.center-toast { position: fixed; inset: 0; display: grid; place-items: center; z-index: 2000; }
.center-toast-box { background:#fff; padding:16px 22px; border-radius:12px; box-shadow: 0 12px 28px rgba(0,0,0,.18); max-width: 90vw; text-align: center; }

.qr-modal { position: fixed; inset: 0; background: rgba(0,0,0,.4); display: grid; place-items: center; z-index: 2000; }
.qr-modal-box { position: relative; background:#fff; border-radius:16px; padding: 16px; width: min(90vw, 520px); box-shadow: 0 16px 32px rgba(0,0,0,.25); }
.qr-modal-box img { width: 100%; height: auto; display: block; border-radius:12px; }
.qr-close { position: absolute; top: 8px; right: 10px; width: 36px; height: 36px; border-radius: 50%; border: none; background:#f2f2f2; font-size: 22px; line-height: 1; cursor: pointer; }
.qr-close:hover { background:#e9e9e9; }
</style>
