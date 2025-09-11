<template>
  <div class="packages-34n">
    <!-- Banner -->
    <div class="banner-container">
      <img :src="banner" alt="行程套餐横幅" class="banner" />
      <div class="floating-logos">
        <img :src="logoGold" alt="金色标志" class="logo" />
        <img :src="logoText" alt="文字标志" class="logo-text" />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1>迪拜行程套餐 — 3晚 / 4晚</h1>
      <p>
        智能避暑节奏（早晚户外、中午室内）、老迪拜步行段 + 阿布拉渡船、灵活可换的沙漠行程与清晰实惠定价。
        全程<strong>中文司导</strong>陪同（老迪拜步行段配<strong>持证中文导游</strong>）。
        成人/儿童价格清楚，含早餐酒店 + 私人机场接送，让行程顺滑无缝。
      </p>
    </div>

    <!-- 左侧悬浮 WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I'm%20interested%20in%20your%20tour%20packages."
        class="whatsapp-button hover-reveal"
      >
        <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
        <span class="whatsapp-text">需要帮助？在线咨询！</span>
      </a>
    </div>

    <!-- CTA 按钮 -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail">邮件联系我们</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal">WhatsApp 联系我们</button>
        <button class="cta-btn cta-green" @click="openWechatModal">微信联系我们</button>
        <button class="cta-btn cta-red" @click="bookNow">万德购物车</button>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p><strong>{{ emailToCopy }}</strong> 已复制到剪贴板</p>
      </div>
    </div>

    <!-- 二维码弹窗 -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" />
      </div>
    </div>
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" />
      </div>
    </div>

    <!-- ===== 两个套餐 ===== -->
    <section v-for="p in products" :key="p.id" class="product">
      <h2>{{ p.title }}</h2>
      <p class="blurb">{{ p.blurb }}</p>

      <div class="product-grid">
        <div class="product-card">
          <img :src="p.variantA.image" :alt="p.title" />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge">{{ p.variantA.badge }}</span>
              <span class="price">{{ p.variantA.price }}</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.variantA.points" :key="i">{{ b }}</li>
            </ul>
            <!-- 加入购物车 -->
            <button class="btn-addcart" @click="addToCart(p.cartName)">加入万德购物车</button>
          </div>
        </div>
      </div>

      <!-- 行程示例 -->
      <div class="itinerary-card">
        <h3>行程示例</h3>
        <ul>
          <li v-for="(step, sIdx) in p.itinerary" :key="'it-'+p.id+'-'+sIdx">
            {{ step }}
          </li>
        </ul>
        <p class="it-note">时间窗口可根据航班与季节情况灵活调整。</p>
      </div>

      <!-- 费用包含 / 预订须知 -->
      <div class="rules">
        <h3>费用包含</h3>
        <ul>
          <li v-for="(i,idx) in p.includes" :key="'inc-'+idx">{{ i }}</li>
        </ul>
        <h3>预订须知</h3>
        <ul>
          <li v-for="(n,idx) in p.notes" :key="'note-'+idx">{{ n }}</li>
        </ul>
      </div>
    </section>

    <!-- 政策与条款 -->
    <div class="text-card">
      <h2>价格与政策说明</h2>
      <ul class="policy">
        <li>陆地套餐（不含机票/签证）。按每人计价，基于双人/大床同住。价格含 5% 增值税。</li>
        <li>酒店需另付旅游税 Tourism Dirham（约 AED 10–20/间/晚，依酒店等级）。</li>
        <li>婴儿 0–2 岁免费（不占床）。按阿联酋法律，婴幼儿须使用相应年龄座椅且必须占座—请下单时预订。</li>
        <li>酒店常规：入住 15:00 / 退房 12:00；提前/延迟以酒店库存与附加费为准。</li>
        <li>景点时段（如哈利法塔/The View/相框/游船）受库存与季节/活动影响，需以最终确认为准。</li>
        <li>斋月及宗教日期：营地表演暂停；酒精供应受限；景点开放时间可能调整。</li>
        <li>改期与取消：≥48 小时免费；24–48 小时收 50%；&lt;24 小时或未到场收 100%。不可退门票/房晚按供应商政策执行。不可抗力优先改期，否则仅退不可追回成本外的余额。</li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2>常见问题</h2>
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
import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import img3N from '@/assets/images/cars/tour1.jpg'
import img4N from '@/assets/images/cars/tour2.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// cart
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'Package34Nights',
  data() {
    return {
      banner, logoGold, logoText,
      whatsappQR, wechatQR,
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      showWhatsappModal: false,
      showWechatModal: false,
      toastTimer: null,

      // ===== 两个套餐 =====
      products: [
        {
          id: '3n',
          cartName: '3 Nights Package',
          title: '迪拜3晚入门之旅（4天3晚）',
          blurb: '新手友好：老迪拜步行（持证中文导游，约2小时）+ 阿布拉渡船，迪拜相框或棕榈岛观景台（二选一），Marina 夜游船晚餐，以及沙漠越野晚场（≥48小时可改为更温和的清晨版）。',
          variantA: {
            image: img3N,
            badge: '私家团 · 仅含陆地服务',
            price: '成人 AED 849 起 · 儿童 AED 669 起',
            points: [
              '智能避暑节奏：早晚户外，中午室内',
              '老迪拜步行 + 阿布拉（持证中文导游约2小时）',
              '迪拜相框或 The View（棕榈岛观景台）二选一',
              'Marina 码头夜游船含接送',
              '沙漠越野晚场（≥48h 可改清晨温和版）',
              '全程中文司导协助与协调'
            ]
          },
          itinerary: [
            'D1：私人接机 → 19:30–21:30 Marina 夜游船晚餐（含私家接送）。',
            'D2：09:00–11:00 老迪拜步行（持证中文导游约2小时）：法希迪历史街区、外观打卡（如咖啡博物馆）、香料/黄金市集；搭乘阿布拉过溪。13:30–15:00 迪拜相框（或 The View）。',
            'D3：12:00–15:00 自由活动 → 15:00–21:00 沙漠越野晚场（冲沙 + 表演 + BBQ）。家庭可在 ≥48h 改为清晨温和版。',
            'D4：私人送机。'
          ],
          includes: [
            'DXB 机场往返私接私送（T1/T2/T3；DWC/其他酋长国需补差）。',
            '精选含早酒店（3★/4★/5★ 可选）。',
            '按行程配私家车 + 中文司导（半天约4–5h；全天约8–10h）。',
            '老迪拜步行段持证中文导游（约2小时）。',
            '门票：迪拜相框或 The View（二选一）。',
            'Marina 夜游船（含私家接送）。',
            '沙漠越野晚场（标准营地；≥48h 可改清晨温和版）。',
            '车内瓶装水；行前24小时 WhatsApp 复核；旅行社公共责任险。'
          ],
          notes: [
            '仅陆地服务（不含机票/签证）。按每人计价基于双人同住；含 5% VAT。旅游税需到店自付。',
            '婴儿 0–2 岁免费（不占床）；依法须预订儿童/增高座椅并占座；儿童 3–10 岁按儿童价；11+ 按成人价。',
            '时段与顺序可能因库存/交通/活动调整。',
            '斋月/宗教日期：营地表演与酒精政策会受限。'
          ]
        },
        {
          id: '4n',
          cartName: '4 Nights Package',
          title: '4晚亲子优选（5天4晚）',
          blurb: '更适合亲子与长辈：第2天安排沙漠越野以留足精力；包含哈利法塔124/125（非高峰时段）、JBR 与蓝水岛傍晚漫步，以及 The View 棕榈岛观景台。',
          variantA: {
            image: img4N,
            badge: '私家团 · 仅含陆地服务',
            price: '成人 AED 1099 起 · 儿童 AED 919 起',
            points: [
              '两段节奏：中午室内、早晚室外',
              '第2天安排沙漠越野，体力分配更轻松',
              '哈利法塔 124/125（非高峰时段）',
              'The View 棕榈岛观景台预约入场',
              '傍晚 JBR & 蓝水岛海滨漫步（远观迪拜之眼）',
              '全程中文司导协助与协调'
            ]
          },
          itinerary: [
            'D1：私人接机 → 19:30–21:30 Marina 夜游船。',
            'D2：15:00–21:00 沙漠越野晚场（≥48h 可改清晨温和版）。',
            'D3：09:30–13:30 现代迪拜半日：朱美拉外景、疯狂城堡市集外景、未来博物馆外拍；16:00–17:30 哈利法塔 124/125（非高峰）。',
            'D4：10:30–12:00 The View 棕榈观景台 → 17:00–19:30 蓝水岛 & JBR 海滨漫步（远观迪拜之眼）。',
            'D5：私人送机。'
          ],
          includes: [
            'DXB 机场往返私接私送；所选酒店含早餐。',
            '按行程配私家车 + 中文司导（半天/全天时长如上）。',
            '门票：哈利法塔 124/125（非高峰）、The View；Marina 夜游船（含接送）。',
            '沙漠越野晚场（标准营地；≥48h 可改清晨温和版）。',
            '车内瓶装水；行前24小时 WhatsApp 复核；旅行社公共责任险。'
          ],
          notes: [
            '仅陆地服务（不含机票/签证）。价格基于双人同住；含 5% VAT；旅游税酒店前台另付。',
            '儿童政策与儿童座椅法律同上；请提前预订安全座椅。',
            '景点时段受库存影响；顺序会配合航班与季节微调。',
            '斋月/旺季可能影响表演与开放时间；跨年等重大活动可能有强制附加费。'
          ]
        }
      ],

      // FAQs
      faqs: [
        {
          question: '是否包含持证导游？',
          answer: '包含。老迪拜步行段由持证中文导游带领（约2小时）。其余行程由中文司导负责交通与当日协调。',
          open: false
        },
        {
          question: '沙漠越野能改成清晨温和版吗？',
          answer: '可以。提前 ≥48 小时告知即可改为清晨温和版，更适合亲子与长辈。',
          open: false
        },
        {
          question: '是否含机票与签证？',
          answer: '不含。本套餐为陆地服务。我们可提供建议，但机票/签证需自理。',
          open: false
        },
        {
          question: '儿童价格如何计算？',
          answer: '儿童价适用于 3–10 岁（不另占床时）；婴儿 0–2 岁免费（不占床），但须依法使用相应安全座椅并占座。',
          open: false
        }
      ]
    }
  },
  methods: {
    // 购物车
    addToCart(name) { useWonderCart().add(name) },
    bookNow() { useWonderCart().open() },

    // FAQ
    toggleFaq(index) { this.faqs[index].open = !this.faqs[index].open },

    // CTA 辅助
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
