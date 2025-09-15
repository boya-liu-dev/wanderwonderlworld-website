<template>
  <div class="packages-56n">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="行程套餐横幅"
        class="banner"
        id="pkg56ZhBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="金色标志"
          class="logo"
          id="pkg56ZhLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="文字标志"
          class="logo-text"
          id="pkg56ZhLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="pkg56ZhIntroTitle" data-c="@id">迪拜行程套餐 — 5晚 / 6晚</h1>
      <p id="pkg56ZhIntroBlurb" data-c-html="@id">
        智能两段式节奏（早晚户外、中午室内），老迪拜步行 + 阿布拉渡船，灵活可换的沙漠行程与清晰的成人/儿童价。
        全程<strong>中文司导</strong>陪同（老迪拜步行段配<strong>持证中文导游</strong>）。
        私人机场接送、含早精选酒店、合规投保车辆，让假期顺滑又安心。
      </p>
    </div>

    <!-- 左侧悬浮 WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I'm%20interested%20in%20your%20tour%20packages."
        class="whatsapp-button hover-reveal"
        id="pkg56ZhWhatsappLink"
        data-c-href="@id"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="pkg56ZhWhatsappIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="pkg56ZhWhatsappText" data-c="@id">需要帮助？在线咨询！</span>
      </a>
    </div>

    <!-- 4 个 CTA 按钮 -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="pkg56ZhCTAEmail" data-c="@id">邮件联系我们</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="pkg56ZhCTAWhatsApp" data-c="@id">WhatsApp 联系我们</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="pkg56ZhCTAWechat" data-c="@id">微信联系我们</button>
        <button class="cta-btn cta-red" @click="bookNow" id="pkg56ZhCTACart" data-c="@id">万德购物车</button>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="pkg56ZhEmailCopied" data-c-html="@id"><strong>{{ emailToCopy }}</strong> 已复制到剪贴板</p>
      </div>
    </div>

    <!-- 二维码弹窗 -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="pkg56ZhWhatsappQR" data-c-src="@id" />
      </div>
    </div>
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="pkg56ZhWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- ===== 两个套餐 ===== -->
    <section v-for="p in products" :key="p.id" class="product">
      <h2 :id="`pkg56Zh_${p.id}Title`" :data-c="'@id'">{{ p.title }}</h2>
      <p class="blurb" :id="`pkg56Zh_${p.id}Blurb`" :data-c-html="'@id'">{{ p.blurb }}</p>

      <div class="product-grid">
        <div class="product-card">
          <img
            :src="p.variantA.image"
            :alt="p.title"
            :id="`pkg56Zh_${p.id}Image`"
            data-c-src="@id"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`pkg56Zh_${p.id}Badge`" :data-c="'@id'">{{ p.variantA.badge }}</span>
              <span class="price" :id="`pkg56Zh_${p.id}Price`" :data-c="'@id'">{{ p.variantA.price }}</span>
            </div>
            <ul class="bullets">
              <li
                v-for="(b,i) in p.variantA.points"
                :key="i"
                :id="`pkg56Zh_${p.id}Point_${i}`"
                :data-c="'@id'"
              >
                {{ b }}
              </li>
            </ul>
            <!-- 加入购物车 -->
            <button
              class="btn-addcart"
              @click="addToCart(p.cartName)"
              :id="`pkg56Zh_${p.id}AddCart`"
              :data-c="'@id'"
            >
              加入万德购物车
            </button>
          </div>
        </div>
      </div>

      <!-- 行程示例 -->
      <div class="itinerary-card">
        <h3 :id="`pkg56Zh_${p.id}ItineraryTitle`" :data-c="'@id'">行程示例</h3>
        <ul>
          <li
            v-for="(step, sIdx) in p.itinerary"
            :key="'it-'+p.id+'-'+sIdx"
            :id="`pkg56Zh_${p.id}It_${sIdx}`"
            :data-c="'@id'"
          >
            {{ step }}
          </li>
        </ul>
        <p class="it-note" :id="`pkg56Zh_${p.id}ItNote`" :data-c="'@id'">
          具体时间会根据航班、景点预约与季节活动适当调整。
        </p>
      </div>

      <!-- 费用包含 / 预订须知 -->
      <div class="rules">
        <h3 :id="`pkg56Zh_${p.id}IncTitle`" :data-c="'@id'">费用包含</h3>
        <ul>
          <li
            v-for="(i,idx) in p.includes"
            :key="'inc-'+idx"
            :id="`pkg56Zh_${p.id}Inc_${idx}`"
            :data-c="'@id'"
          >
            {{ i }}
          </li>
        </ul>
        <h3 :id="`pkg56Zh_${p.id}NoteTitle`" :data-c="'@id'">预订须知</h3>
        <ul>
          <li
            v-for="(n,idx) in p.notes"
            :key="'note-'+idx"
            :id="`pkg56Zh_${p.id}Note_${idx}`"
            :data-c="'@id'"
          >
            {{ n }}
          </li>
        </ul>
      </div>
    </section>

    <!-- 全局政策 / 条款 -->
    <div class="text-card">
      <h2 id="pkg56ZhPolicyTitle" data-c="@id">价格与政策说明</h2>
      <ul class="policy">
        <li id="pkg56ZhPolicy_0" data-c="@id">仅陆地服务（不含机票/签证）。按每人计价，基于双人/大床同住。价格含 5% 增值税。</li>
        <li id="pkg56ZhPolicy_1" data-c="@id">酒店前台需另付旅游税 Tourism Dirham（约 AED 10–20/间/晚，依酒店级别）。</li>
        <li id="pkg56ZhPolicy_2" data-c="@id">婴儿 0–2 岁免费（不占床）。按阿联酋法律，婴幼童须使用相应年龄安全座椅且必须占座—请下单时预订所需座椅。</li>
        <li id="pkg56ZhPolicy_3" data-c="@id">酒店常规：入住 15:00 / 退房 12:00；提前/延迟以酒店库存和附加费为准。</li>
        <li id="pkg56ZhPolicy_4" data-c="@id">景点预约（哈利法塔/The View/相框/卢浮宫/夜游船等）受季节与活动影响，顺序可能据此调整。</li>
        <li id="pkg56ZhPolicy_5" data-c="@id">斋月及宗教日期：现场表演暂停；酒精供应受限或停供；开放时间可能变化。</li>
        <li id="pkg56ZhPolicy_6" data-c="@id">改期与取消：≥48 小时免费；24–48 小时收 50%；&lt;24 小时或未到场收 100%。不可退门票/房晚按供应商政策执行。不可抗力优先改期，否则仅退除不可追回成本外的余额。</li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="pkg56ZhFaqTitle" data-c="@id">常见问题</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span :id="`pkg56ZhFaqQ_${index}`" :data-c="'@id'">{{ faq.question }}</span>
          <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p :id="`pkg56ZhFaqA_${index}`" :data-c="'@id'">{{ faq.answer }}</p>
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
import img5N from '@/assets/images/cars/tour3.jpg'
import img6N from '@/assets/images/cars/tour4.jpg'

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

      // ===== 两个套餐 =====
      products: [
        {
          id: '5n',
          cartName: '5 Nights Package',
          title: '迪拜 + 阿布扎比5晚精华（6天5晚）',
          blurb: '把阿布扎比安排在行程中段更顺路：入内参观谢赫扎耶德清真寺（着装规范），海滨长廊停留，卢浮宫阿布扎比（通常周一闭馆，必要时会调整顺序）。',
          variantA: {
            image: img5N,
            badge: '私家团 · 仅陆地服务',
            price: '成人 AED 1349 起 · 儿童 AED 1169 起',
            points: [
              '两段式节奏：早晚户外，中午室内',
              '老迪拜步行 + 阿布拉（持证中文导游 ~2 小时）',
              '哈利法塔 124/125（非高峰时段）预约入场',
              '阿布扎比一日：清真寺入内 + 卢浮宫入内',
              '沙漠越野晚场（可升级 Prestige 营地）',
              'Marina 夜游船（含私家接送）'
            ]
          },
          itinerary: [
            'D1：私人接机 → 19:30–21:30 Marina 夜游船。',
            'D2：09:00–11:00 老迪拜步行（持证中文导游 ~2h）+ 阿布拉渡船 → 16:00–17:30 哈利法塔 124/125（非高峰）。',
            'D3：08:30–19:30 阿布扎比一日：清真寺入内（周五访客时段有限；需按着装规范）→ 海滨长廊停留 → 卢浮宫入内（通常周一闭馆；必要时调整）。',
            'D4：15:00–21:00 沙漠越野晚场（可按需升级 Prestige）。',
            'D5：10:30–12:00 The View 棕榈观景台或迪拜相框（二选一）→ 购物自由时间。',
            'D6：私人送机。'
          ],
          includes: [
            'DXB 机场往返私接私送；含早精选酒店。',
            '按行程配私家车 + 中文司导（半天约 4–5h；全天约 8–10h；阿布扎比日约 10–11h）。',
            '老迪拜步行段配持证中文导游（约 2 小时）。',
            '门票：哈利法塔 124/125（非高峰）、卢浮宫阿布扎比、The View 或 迪拜相框（二选一）、Marina 夜游船。',
            '沙漠越野晚场（标准营地；可升级 Prestige）。',
            '车内瓶装水；行前 24 小时 WhatsApp 复核；旅行社公共责任险。'
          ],
          notes: [
            '仅陆地服务（不含机票/签证）。价格基于双人同住；含 5% VAT；旅游税酒店前台另付。',
            '清真寺着装规范严格执行；着装不合规可能被拒入。周五访客时段有限。',
            '卢浮宫通常周一闭馆；我们会据此调整日期。',
            '预约与顺序受库存/交通/季节活动影响；斋月期间营地表演与酒精政策受限。'
          ]
        },
        {
          id: '6n',
          cartName: '6 Nights Package',
          title: '6晚臻选升级（7天6晚）',
          blurb: 'VIP 沙漠越野（升级营地、座位与服务）+ 亚特兰蒂斯水世界 & 失落的空间水族馆 + 阿布扎比一整天。适合想要“文化 + 水上乐园 + 高配营地”体验的亲子/情侣。',
          variantA: {
            image: img6N,
            badge: '私家团 · 仅陆地服务',
            price: '成人 AED 1599 起 · 儿童 AED 1419 起',
            points: [
              '现代迪拜一整天 + 哈利法塔 124/125',
              'VIP 沙漠越野晚场（升级营地体验）',
              '阿布扎比日：清真寺入内 + 总统府外院 或 卢浮宫（二选一）',
              '亚特兰蒂斯水世界 Aquaventure + 失落的空间水族馆',
              'The View 棕榈观景台预约入场',
              '可选：Marina 私人游艇 1–2 小时日落/英式下午茶'
            ]
          },
          itinerary: [
            'D1：私人接机 → Marina 夜游船。',
            'D2：现代迪拜一日：City Walk/Box Park 外拍 + 哈利法塔 124/125。',
            'D3：15:00–21:00 VIP 沙漠越野晚场（升级营地与服务）。',
            'D4：08:30–19:30 阿布扎比一日：清真寺入内 + 总统府外院 或 卢浮宫（依开放与兴趣二选一）。',
            'D5：亚特兰蒂斯水世界 + 失落的空间水族馆。',
            'D6：10:30–12:00 The View 棕榈观景台 → 下午自由（可选私艇 1–2h / 下午茶）。',
            'D7：私人送机。'
          ],
          includes: [
            'DXB 机场往返私接私送；3★/4★/5★ 含早酒店可选。',
            '按行程配私家车 + 中文司导；若安排老迪拜步行则含持证中文导游。',
            '门票：哈利法塔 124/125（非高峰）、The View、亚特兰蒂斯水世界 + 失落的空间、Marina 夜游船。',
            'VIP 沙漠越野晚场（升级营地）。',
            '阿布扎比一日（清真寺入内 + 总统府外院 或 卢浮宫门票，以最终确认为准）。',
            '车内瓶装水；行前 24 小时 WhatsApp 复核；旅行社公共责任险。'
          ],
          notes: [
            '仅陆地服务（不含机票/签证）。价格基于双人同住；含 5% VAT；旅游税酒店前台另付。',
            '清真寺着装规范须遵守；周五礼拜时间附近路线可能微调。',
            '水上乐园开放与项目按季节而变；部分项目有身高/年龄限制。',
            '斋月与旺季：表演/供应及景点时段可能变更；跨年等重大活动可能另收附加费。'
          ]
        }
      ],

      // FAQs
      faqs: [
        {
          question: '每天都含持证导游吗？',
          answer: '持证导游特指老迪拜步行段（约 2 小时）包含；其余天数由中文司导负责交通、基础讲解与当日协调。',
          open: false
        },
        {
          question: '天数顺序可以调整吗？',
          answer: '可以。私家团灵活可调，我们会依据您的航班、季节热度、宗教日期与大型活动来优化顺序与时段。',
          open: false
        },
        {
          question: '儿童安全座椅必须要吗？',
          answer: '必须。阿联酋法律要求婴幼童使用相应年龄座椅且必须各自占座；请在预订时告知需要的座椅数量与年龄体重。',
          open: false
        },
        {
          question: '沙漠行程能买酒吗？',
          answer: '仅限有牌照的营地，且在部分宗教日期（如斋月）停供。表演也可能暂停；我们会按您的日期提前告知。',
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
