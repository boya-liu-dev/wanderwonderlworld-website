<template>
  <div class="packages-34n">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="套餐横幅"
        class="banner"
        id="city12cnBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="金色标志"
          class="logo"
          id="city12cnLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="文字标志"
          class="logo-text"
          id="city12cnLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="city12cnIntroH1" data-c="@id">迪拜城市观光 — 半日 & 全日</h1>
      <p id="city12cnIntroP1" data-c="@id">
        专为迪拜气候与动线设计的两款弹性私家行程：避暑节奏（早晚户外、正午室内）、含老迪拜徒步
        + 阿布拉摆渡，全程英文司导顺畅衔接；老城徒步段配持证讲解。每车清晰计价（7 座车，最多 6 位客人），
        可选观景台预约时段，加购项目透明可选。
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
          id="city12cnWhatsIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="city12cnWhatsText" data-c="@id">需要帮助？点击咨询！</span>
      </a>
    </div>

    <!-- CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="city12cnBtnEmail" data-c="@id">邮件联系我们</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="city12cnBtnWhats" data-c="@id">WhatsApp 联系我们</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="city12cnBtnWechat" data-c="@id">微信联系我们</button>
        <button class="cta-btn cta-red" @click="bookNow" id="city12cnBtnCart" data-c="@id">万德购物车</button>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p><strong>{{ emailToCopy }}</strong> 已复制到您的剪贴板</p>
      </div>
    </div>

    <!-- QR Modals -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="city12cnWhatsQR" data-c-src="@id" />
      </div>
    </div>
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="city12cnWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- ===== Products (Half-Day & Full-Day) ===== -->
    <section
      v-for="p in products"
      :key="p.id"
      class="product"
      :id="`city12cnProd_${p.id}`"
    >
      <h2><span :id="`city12cnTitle_${p.id}`" data-c="@id">{{ p.title }}</span></h2>
      <p class="blurb">
        <span :id="`city12cnBlurb_${p.id}`" data-c="@id">{{ p.blurb }}</span>
      </p>

      <div class="product-grid">
        <div class="product-card">
          <img
            :src="p.variantA.image"
            :alt="p.title"
            :id="`city12cnImg_${p.id}`"
            data-c-src="@id"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`city12cnBadge_${p.id}`" data-c="@id">{{ p.variantA.badge }}</span>
              <span class="price" :id="`city12cnPrice_${p.id}`" data-c="@id">{{ p.variantA.price }}</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.variantA.points" :key="i">
                <span :id="`city12cnPoint_${p.id}_${i}`" data-c="@id">{{ b }}</span>
              </li>
            </ul>
            <!-- Add to Cart -->
            <button
              class="btn-addcart"
              @click="addToCart(p.cartName)"
              :id="`city12cnAdd_${p.id}`"
              data-c="@id"
            >
              加入万德购物车
            </button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3 :id="`city12cnItinTitle_${p.id}`" data-c="@id">参考行程</h3>
        <ul>
          <li v-for="(step, sIdx) in p.itinerary" :key="'it-'+p.id+'-'+sIdx">
            <span :id="`city12cnItin_${p.id}_${sIdx}`" data-c="@id">{{ step }}</span>
          </li>
        </ul>
        <p class="it-note" :id="`city12cnItinNote_${p.id}`" data-c="@id">可根据您的航班时间与季节状况灵活微调。</p>
      </div>

      <!-- What’s included / Good to know -->
      <div class="rules">
        <h3 :id="`city12cnInclTitle_${p.id}`" data-c="@id">费用包含</h3>
        <ul>
          <li v-for="(i,idx) in p.includes" :key="'inc-'+idx">
            <span :id="`city12cnIncl_${p.id}_${idx}`" data-c="@id">{{ i }}</span>
          </li>
        </ul>
        <h3 :id="`city12cnGoodTitle_${p.id}`" data-c="@id">预订须知</h3>
        <ul>
          <li v-for="(n,idx) in p.notes" :key="'note-'+idx">
            <span :id="`city12cnNote_${p.id}_${idx}`" data-c="@id">{{ n }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Global Policy / Terms -->
    <div class="text-card">
      <h2 id="city12cnPolicyTitle" data-c="@id">价格与预订政策</h2>
      <ul class="policy">
        <li id="city12cnPolicy1" data-c-html="@id">
          每车计价（7 座车辆；最多 6 位客人）。超时按 <strong>AED 75/小时</strong> 收费（超过预定游览时长）。
        </li>
        <li id="city12cnPolicy2" data-c="@id">
          迪拜线路含老迪拜徒步（约 2 小时）持证讲解与阿布拉摆渡船票。
        </li>
        <li id="city12cnPolicy3" data-c="@id">
          观景台与景点门票（如哈利法塔、The View、迪拜之框、水族馆）可加购，需以时段库存为准。
        </li>
        <li id="city12cnPolicy4" data-c="@id">
          儿童/增高座椅为阿联酋法定要求——请预订时备注（每位儿童需独立占座）。
        </li>
        <li id="city12cnPolicy5" data-c="@id">
          车辆内禁止饮食/吸烟；老城区域建议简约得体着装。
        </li>
        <li id="city12cnPolicy6" data-c="@id">
          改期与取消：≥24 小时免费；12–24 小时收 50%；&lt;12 小时或未到场收 100%。不可抗力（沙尘/暴雨/封路）优先改期，若无法改期，仅扣除不可追回的第三方费用。
        </li>
        <li id="city12cnPolicy7" data-c="@id">
          偏远接送（Jebel Ali / DWC / 沙迦边界）可能加收小额车补。服务前 24 小时通过 WhatsApp 再次确认。
        </li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="city12cnFaqTitle" data-c="@id">常见问题</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span :id="`city12cnFAQQ_${index+1}`" data-c="@id">{{ faq.question }}</span>
          <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p :id="`city12cnFAQA_${index+1}`" data-c="@id">{{ faq.answer }}</p>
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
          title: '半日迪拜精华（5 小时）',
          blurb:
            '紧凑高效、出片友好、文化满满。可选清凉早晨或日落档。含老迪拜徒步段（持证讲解）与阿布拉横渡迪拜河，续接现代天际线取景点，一次看尽经典。',
          variantA: {
            image: imgHalf,
            badge: '最多 6 位',
            price: 'AED 325 起',
            points: [
              '避暑时段：上午或日落出发',
              '含老迪拜徒步（约 2 小时）+ 阿布拉摆渡',
              '香料市集 & 黄金市集自由逛',
              '朱美拉海滨 / 阿拉伯塔外观拍照',
              '可选未来博物馆外观或迪拜商场/音乐喷泉收官',
              '中英文司导服务；车载矿泉水'
            ]
          },
          itinerary: [
            '酒店/住所接人（08:30 出发或约 15:30 日落档）。',
            '法希迪历史街区徒步（约 45–60 分）持证讲解。',
            '乘阿布拉（水上巴士）横渡迪拜河至德拉；逛香料 & 黄金市集。',
            '前往朱美拉海滨区域，外观阿拉伯塔拍照。',
            '可选短停未来博物馆外观拍照。',
            '结束于迪拜商场 & 音乐喷泉区域或送回酒店（您决定）。'
          ],
          includes: [
            '7 座用车（最多 6 位）与英文司导。',
            '老迪拜徒步段配持证讲解（约 2 小时）。',
            '阿布拉摆渡船票。',
            '矿泉水、Salik 过路费与官方停车费。',
            '迪拜市区内上门接送。',
            '旅行社公众责任险；行前 24h WhatsApp 复核。'
          ],
          notes: [
            '超过 5 小时的部分按 AED 75/小时计费。',
            '景点门票（之框 / The View / 哈利法塔 / 水族馆）可按需加购，视时段库存而定。',
            '依法须配儿童/增高座椅——请预订时告知；每名儿童需独立占座。',
            '偏远接送（Jebel Ali / DWC / 沙迦边界）可能加收小额车补。'
          ]
        },
        {
          id: 'full',
          cartName: 'Full-Day Dubai Panorama',
          title: '全日迪拜全景（10 小时）',
          blurb:
            '一日涵盖迪拜「精选集」。上午老城徒步，正午转入室内观景台/博物馆，傍晚黄金时段在迪拜码头、蓝水岛与 JBR 收官，动静有致。',
          variantA: {
            image: imgFull,
            badge: '最多 6 位',
            price: 'AED 559 起',
            points: [
              '上午：老迪拜徒步（约 2 小时）+ 阿布拉摆渡',
              '正午室内：之框 / The View / 哈利法塔 三选一',
              '米地那市集 + 朱美拉海岸线拍照',
              '黄金时段：迪拜码头 · 蓝水岛 · JBR',
              '根据交通与门票时段灵活排布线路',
              '中英文司导；车载矿泉水'
            ]
          },
          itinerary: [
            '09:00 酒店/住所接人。',
            '09:15–11:15 老迪拜徒步（约 2 小时）持证讲解 + 阿布拉；法希迪、迪拜河、香料与黄金市集。',
            '12:00–13:30 正午室内：迪拜之框或 The View（或加购哈利法塔 124/125 非高峰）；午餐自理。',
            '14:30–15:30 米地那市集 & 朱美拉取景（外观阿拉伯塔）。',
            '16:00–18:00 迪拜码头 → 蓝水岛 → JBR 海滨，捕捉黄金时刻。',
            '约 19:00 送回酒店或您指定的市区地点。'
          ],
          includes: [
            '私家 7 座车（最多 6 位）+ 英文司导，服务约 10 小时。',
            '老迪拜徒步段配持证讲解（约 2 小时）。',
            '阿布拉摆渡船票。',
            '矿泉水、Salik 过路费、官方停车费。',
            '迪拜市区内接送。',
            '旅行社公众责任险；行前 24h WhatsApp 复核。'
          ],
          notes: [
            '超过 10 小时的部分按 AED 75/小时计费。',
            '观景台/博物馆为自选加购：哈利法塔 124/125（成人约 AED 170 起）、The View（约 AED 99 起）、迪拜之框（成人 AED 50 / 儿童 AED 20）；以具体时段为准。',
            '可按亲子偏好替换部分站点（如迪拜水族馆）。',
            '斋月或大型活动期间，开放时间与交通管制可能影响顺序；我们将相应优化线路。'
          ]
        }
      ],

      // FAQs
      faqs: [
        {
          question: '价格是按车还是按人计算？',
          answer:
            '按车计价（7 座车，最多 6 位）。可加价升级大巴或豪华 SUV。超过约定时长的部分按 AED 75/小时计费。',
          open: false
        },
        {
          question: '是否包含持证导游？',
          answer:
            '包含。迪拜线路的老城徒步段配持证讲解（约 2 小时）；其余行程由英文司导负责交通与当日协调。',
          open: false
        },
        {
          question: '能否调整顺序或加选景点？',
          answer:
            '当然可以。为纯私家行程，我们会依您的兴趣、门票时段、交通与天气灵活调整；哈利法塔/The View 等需预约的观景台可按需加选。',
          open: false
        },
        {
          question: '是否提供儿童座椅？',
          answer:
            '提供。儿童/增高座椅为阿联酋法律要求，请在预订时告知年龄与数量，以便准备相应座椅（每位儿童需独立占座）。',
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
