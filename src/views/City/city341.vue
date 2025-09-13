<template>
  <div class="packages-34n">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="套餐横幅"
        class="banner"
        id="city34cnBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="金色标志"
          class="logo"
          id="city34cnLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="文字标志"
          class="logo-text"
          id="city34cnLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="city34cnIntroH1" data-c="@id">阿布扎比 & 哈塔一日游 — 探索更多</h1>
      <p id="city34cnIntroP1" data-c="@id">
        两条高性价比的私家一日游，贴合阿联酋的真实路况与气候：避暑节奏、认证司机、车载矿泉水，
        加购项目透明可选。阿布扎比线路会提前为您讲解清真寺着装与时段提示；哈塔线路则在群山与水坝之间
        以观景为主、动静灵活。每车清晰计价（最多 6 位），费用一目了然。
      </p>
    </div>

    <!-- Left floating WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I'm%20interested%20in%20your%20Abu%20Dhabi%20or%20Hatta%20tour."
        class="whatsapp-button hover-reveal"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="city34cnWhatsIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="city34cnWhatsText" data-c="@id">需要帮助？点击咨询！</span>
      </a>
    </div>

    <!-- CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="city34cnBtnEmail" data-c="@id">邮件联系我们</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="city34cnBtnWhats" data-c="@id">WhatsApp 联系我们</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="city34cnBtnWechat" data-c="@id">微信联系我们</button>
        <button class="cta-btn cta-red" @click="bookNow" id="city34cnBtnCart" data-c="@id">万德购物车</button>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p><strong id="city34cnEmail" data-c="@id">{{ emailToCopy }}</strong> 已复制到您的剪贴板</p>
      </div>
    </div>

    <!-- QR Modals -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="city34cnWhatsQR" data-c-src="@id" />
      </div>
    </div>
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="city34cnWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- ===== Products (Abu Dhabi & Hatta) ===== -->
    <section
      v-for="p in products"
      :key="p.id"
      class="product"
      :id="`city34cnProd_${p.id}`"
    >
      <h2><span :id="`city34cnTitle_${p.id}`" data-c="@id">{{ p.title }}</span></h2>
      <p class="blurb"><span :id="`city34cnBlurb_${p.id}`" data-c="@id">{{ p.blurb }}</span></p>

      <div class="product-grid">
        <div class="product-card">
          <img
            :src="p.variantA.image"
            :alt="p.title"
            :id="`city34cnImg_${p.id}`"
            data-c-src="@id"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`city34cnBadge_${p.id}`" data-c="@id">{{ p.variantA.badge }}</span>
              <span class="price" :id="`city34cnPrice_${p.id}`" data-c="@id">{{ p.variantA.price }}</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.variantA.points" :key="i">
                <span :id="`city34cnPoint_${p.id}_${i}`" data-c="@id">{{ b }}</span>
              </li>
            </ul>
            <!-- Add to Cart -->
            <button
              class="btn-addcart"
              @click="addToCart(p.cartName)"
              :id="`city34cnAdd_${p.id}`"
              data-c="@id"
            >
              加入万德购物车
            </button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3 :id="`city34cnItinTitle_${p.id}`" data-c="@id">参考行程</h3>
        <ul>
          <li v-for="(step, sIdx) in p.itinerary" :key="'it-'+p.id+'-'+sIdx">
            <span :id="`city34cnItin_${p.id}_${sIdx}`" data-c="@id">{{ step }}</span>
          </li>
        </ul>
        <p class="it-note" :id="`city34cnItinNote_${p.id}`" data-c="@id">可根据航班时间与季节路况灵活微调。</p>
      </div>

      <!-- What’s included / Good to know -->
      <div class="rules">
        <h3 :id="`city34cnInclTitle_${p.id}`" data-c="@id">费用包含</h3>
        <ul>
          <li v-for="(i,idx) in p.includes" :key="'inc-'+idx">
            <span :id="`city34cnIncl_${p.id}_${idx}`" data-c="@id">{{ i }}</span>
          </li>
        </ul>
        <h3 :id="`city34cnGoodTitle_${p.id}`" data-c="@id">预订须知</h3>
        <ul>
          <li v-for="(n,idx) in p.notes" :key="'note-'+idx">
            <span :id="`city34cnNote_${p.id}_${idx}`" data-c="@id">{{ n }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Global Policy / Terms -->
    <div class="text-card">
      <h2 id="city34cnPolicyTitle" data-c="@id">价格与预订政策</h2>
      <ul class="policy">
        <li id="city34cnPolicy1" data-c-html="@id">
          每车计价（7 座；最多 6 位）。超过预定游览时长，超时费 <strong>AED 75/小时</strong>。
        </li>
        <li id="city34cnPolicy2" data-c="@id">
          阿布扎比：清真寺严格执行着装（女士需遮住头发/肩膀/腿；男士需长裤）。周五访客时段受限。
        </li>
        <li id="city34cnPolicy3" data-c="@id">
          哈塔：属迪拜飞地，无需过境。山地天气或水坝开放管制可能调整顺序，以安全为先。
        </li>
        <li id="city34cnPolicy4" data-c="@id">
          自选付费景点（如卢浮宫阿布扎比、总统府、皮划艇等）现场或预订时加购，视库存而定。
        </li>
        <li id="city34cnPolicy5" data-c="@id">
          儿童安全座椅为阿联酋法定要求——请预订时备注（每位儿童须独立占座）。
        </li>
        <li id="city34cnPolicy6" data-c="@id">
          改期与取消：≥24 小时免费；12–24 小时 50%；&lt;12 小时或未到场 100%。不可抗力（沙尘/暴雨/封路）优先改期；无法改期时仅扣除不可追回的第三方成本。
        </li>
        <li id="city34cnPolicy7" data-c="@id">
          偏远接送（Jebel Ali / DWC / 沙迦边界）可能加收小额车补。行前 24 小时通过 WhatsApp 发送二次确认。
        </li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="city34cnFaqTitle" data-c="@id">常见问题</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span :id="`city34cnFAQQ_${index+1}`" data-c="@id">{{ faq.question }}</span>
          <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p :id="`city34cnFAQA_${index+1}`" data-c="@id">{{ faq.answer }}</p>
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
import imgAD from '@/assets/images/cars/city3.jpg'
import imgHatta from '@/assets/images/cars/city4.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// cart
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'City34Tours',
  data() {
    return {
      banner, logoGold, logoText,
      whatsappQR, wechatQR,
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      showWhatsappModal: false,
      showWechatModal: false,
      toastTimer: null,

      // ===== Two day trips =====
      products: [
        {
          id: 'auh',
          cartName: 'Abu Dhabi Culture Day',
          title: '阿布扎比文化一日游（10–11 小时）',
          blurb:
            '聚焦阿联酋首都的人文之旅：谢赫扎耶德大清真寺入内参观，卢浮宫阿布扎比或总统府 Qasr Al Watan 二选一（加购时段票），并兼顾滨海大道与经典取景点。',
          variantA: {
            image: imgAD,
            badge: '最多 6 位',
            price: 'AED 659 起',
            points: [
              '大清真寺入内参观（出发前讲解着装要求）',
              '卢浮宫阿布扎比 或 总统府 Qasr Al Watan（二选一 · 加购）',
              '滨海大道车览 & 酋长皇宫外观拍照',
              '法拉利世界 / 亚斯海湾 外观可选拍照',
              '午餐弹性自理 & 适当购物时间',
              '中英文司导 · 车载矿泉水'
            ]
          },
          itinerary: [
            '08:30 迪拜市区接人 → 途经 DXB/AUH 方向 Last Exit 可短停。',
            '10:00–11:15 谢赫扎耶德大清真寺（入内）。安检与着装严格执行。',
            '11:30–12:00 总统府外侧区域 & 滨海大道车览。',
            '12:30–14:00 卢浮宫阿布扎比（入内）或 总统府（入内）二选一；门票以时段库存为准。',
            '14:15–15:00 酋长皇宫外观拍照；可自费咖啡短休。',
            '15:30–16:00 亚斯岛车览：法拉利世界 & 亚斯海湾外观；快拍。',
            '约 18:30 返抵迪拜送回（以交通为准）。'
          ],
          includes: [
            '私家 7 座车（最多 6 位）+ 英文司导，服务约 10–11 小时。',
            '车载矿泉水、Salik 过路费与官方停车费。',
            '迪拜市区内接送。',
            '旅行社公众责任险；行前 24h WhatsApp 复核。'
          ],
          notes: [
            '大清真寺免费入场但严格执行着装（女士需遮住头发/手臂/腿；男士需长裤），未达标可能被拒绝入内。',
            '周五访客时段受限，行程可能调整顺序。',
            '卢浮宫/总统府门票为可选加购，需看具体时段库存。',
            '迪拜↔阿布扎比车程受路况影响，单程约 90–120 分。'
          ]
        },
        {
          id: 'hatta',
          cartName: 'Hatta Mountain Escape',
          title: '哈塔山谷度假一日游（10–11 小时）',
          blurb:
            '迪拜飞地的小众山地绿洲：碧色哈塔水坝、古堡遗址村与 Wadi Hub 户外体验。亲子与摄影都合适，活动灵活自选自费。',
          variantA: {
            image: imgHatta,
            badge: '最多 6 位',
            price: 'AED 710 起',
            points: [
              '哈塔水坝观景（可选皮划艇/脚踏船）',
              '哈塔遗产村 & 山顶公园全景视角',
              'Wadi Hub 冒险区（高空滑索/射箭/掷斧等，季节性 · 自选）',
              '山路沿途多处摄影停靠',
              '当地咖啡馆午餐自理，时间灵活',
              '中英文司导 · 车载矿泉水'
            ]
          },
          itinerary: [
            '08:30 迪拜接人 → 驶向哈贾尔山脉。',
            '10:30 哈塔水坝观景；可现场自费租皮划艇/脚踏船（视供应与安全规定）。',
            '11:30 哈塔遗产村（传统城堡与展陈）。',
            '13:00 当地咖啡馆午餐（自理）。',
            '14:00–16:00 Wadi Hub：轻徒步或自选付费活动；登哈塔山顶公园远眺。',
            '约 18:30 返抵迪拜送回。'
          ],
          includes: [
            '私家 7 座车（最多 6 位）+ 英文司导，服务约 10–11 小时。',
            '车载矿泉水、Salik 过路费与官方停车费。',
            '迪拜市区内接送。',
            '旅行社公众责任险；行前 24h WhatsApp 复核。'
          ],
          notes: [
            '无需过境——哈塔属于迪拜酋长国飞地。部分活动租赁可能需出示证件。',
            '皮划艇与冒险项目为第三方运营，现场付费，受天气/安全管制影响。',
            '夏季炎热或偶有降雨会影响安排，我们将优先调整路线以确保安全。',
            '建议加价升级 SUV，山路乘坐更舒适。'
          ]
        }
      ],

      // FAQs
      faqs: [
        {
          question: '价格是按车还是按人计算？',
          answer:
            '按车计价（7 座，最多 6 位）。可加价升级大车或豪华 SUV。超过预定时长部分按 AED 75/小时计费。',
          open: false
        },
        {
          question: '行程可以个性化吗？可以加景点吗？',
          answer:
            '可以。为纯私家服务，我们会根据交通、门票时段、天气与您的兴趣灵活调整；加购门票为自选自费。',
          open: false
        },
        {
          question: '是否提供儿童座椅？',
          answer:
            '提供。儿童/增高座椅为阿联酋法律要求，请在预订时告知年龄与数量，以便准备相应座椅（每位儿童需独立占座）。',
          open: false
        },
        {
          question: '是否包含午餐？',
          answer:
            '不含餐。行程会预留弹性时间安排本地咖啡馆/美食广场用餐，依据您的口味与当日安排决定。',
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
