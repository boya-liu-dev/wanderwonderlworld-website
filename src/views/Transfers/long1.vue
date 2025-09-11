<template>
  <div class="details-page">
    <!-- Banner -->
    <div class="banner-container">
      <img src="@/assets/images/banner7.jpg" alt="接送与包车横幅" class="banner" />
      <div class="floating-logos">
        <img src="@/assets/images/logo-www-gold.png" alt="金色徽标" class="logo" />
        <img src="@/assets/images/logo-text.png" alt="文字徽标" class="logo-text" />
      </div>
    </div>

    <!-- Title -->
    <div class="intro">
      <h1>全日司导包车 & 迪拜→阿布扎比一日游</h1>
      <p>
        提供全日私享司导用车，适合深度探索；亦可选择精心策划的迪拜→阿布扎比观光一日游。
        车辆均为商业保险，专业司机执勤，时间安排灵活，可按您的计划定制。
      </p>
    </div>

    <!-- 左侧悬浮 WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=你好，万德假日迪拜！我想咨询全日包车/阿布扎比一日游服务。"
        class="whatsapp-button hover-reveal"
      >
        <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp 图标" />
        <span class="whatsapp-text">需要帮助？立即咨询！</span>
      </a>
    </div>

    <!-- 4 CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <!-- 直接唤起邮箱 -->
        <a class="cta-btn cta-gray" :href="`mailto:${emailToCopy}`">邮件咨询</a>
        <button class="cta-btn cta-green" @click="openWhatsappModal">WhatsApp 咨询</button>
        <button class="cta-btn cta-green" @click="openWechatModal">微信咨询</button>
        <!-- 直接打开 WonderCart -->
        <button class="cta-btn cta-red" @click="bookNow">万德购物车</button>
      </div>
    </div>

    <!-- Toast（仍保留，当前不再触发） -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p><strong>{{ emailToCopy }}</strong> 已复制到剪贴板</p>
      </div>
    </div>

    <!-- QR Modals -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="关闭" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" />
      </div>
    </div>
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="关闭" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" />
      </div>
    </div>

    <!-- Products -->
    <section v-for="p in products" :key="p.id" class="product">
      <h2>{{ p.title }}</h2>
      <p class="blurb">{{ p.blurb }}</p>

      <div class="product-grid">
        <!-- SUV -->
        <div class="product-card">
          <img :src="p.suv.image" :alt="p.title + ' SUV'" />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge">SUV（4–6人）</span>
              <span class="price">AED {{ p.suv.price }} 起</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.suv.points" :key="i">{{ b }}</li>
            </ul>
            <!-- Add to Cart（红底白字） -->
            <button
              class="btn-addcart"
              @click="addToCart(p.id === 'fullday' ? '全日包车 - SUV' : '迪拜-阿布扎比 - SUV')"
            >
              加入购物车
            </button>
          </div>
        </div>

        <!-- VAN -->
        <div class="product-card">
          <img :src="p.van.image" :alt="p.title + ' Van'" />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge">商务车（7–10人）</span>
              <span class="price">AED {{ p.van.price }} 起</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.van.points" :key="i">{{ b }}</li>
            </ul>
            <!-- Add to Cart（红底白字） -->
            <button
              class="btn-addcart"
              @click="addToCart(p.id === 'fullday' ? '全日包车 - 商务车' : '迪拜-阿布扎比 - 商务车')"
            >
              加入购物车
            </button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3>行程样例</h3>
        <ul>
          <li v-for="(step, sIdx) in p.itinerary" :key="'it-'+p.id+'-'+sIdx">
            {{ step }}
          </li>
        </ul>
        <p class="it-note">时间与路线均可灵活定制，可按您的计划调整。</p>
      </div>

      <!-- Rules -->
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

    <!-- Policy / Terms block -->
    <div class="text-card">
      <h2>服务政策与保险摘要</h2>
      <ul class="policy">
        <li>所有车辆与司机均按 RTA/阿联酋法规持证，且覆盖商业车辆保险（至少含第三者责任险）。建议所有客人另购个人旅行保险。</li>
        <li>候时政策：机场接机自实际落地起<strong>60 分钟</strong>免费等待；酒店/住址接载<strong>15 分钟</strong>免费。超时按 30 或 60 分钟为单位计费（依服务而定）。</li>
        <li>距离/路线：除非另有说明，默认点到点服务；额外停靠、绕行或增补接人可能产生附加费用。</li>
        <li>收费公路/停车：除非报价已含，否则按实际成本计收（跨酋行程较常见）。</li>
        <li>夜间/高峰附加：<strong>22:00–06:00</strong>或公共假期/大型活动期间可能加收附加费。</li>
        <li>可按需预留儿童安全座椅（需提前预约）。请告知行李件数；超大件需提前说明以匹配合适车型。</li>
        <li>取消与未到：免费取消时窗以确认单为准。未到或逾期取消视情况最高可收取 100% 费用。</li>
        <li>司导并非持牌讲解导游；如需持牌英文导游，可按需另行安排并收取费用。</li>
        <li>车辆损坏与清洁：因乘客疏忽造成的维修/深度清洁费用将据实收取。</li>
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
// images for LONG products
import imgFulldaySUV from '@/assets/images/cars/carcard3.jpg'
import imgFulldayVan from '@/assets/images/cars/carcard5.jpg'
import imgADTripSUV from '@/assets/images/cars/carcard9.jpg'
import imgADTripVan from '@/assets/images/cars/carcard10.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// cart store
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'TransferLong',
  data() {
    return {
      products: [
        {
          id: 'fullday',
          title: '全日司导包车（10 小时）',
          blurb:
            '全天专属包车，适合城市深度探索、商务会面或自定节奏的定制行程。',
          suv: {
            image: imgFulldaySUV,
            price: 510,
            points: [
              '私享服务最长 10 小时',
              '城市范围灵活线路覆盖',
              '可按需按小时延长'
            ]
          },
          van: {
            image: imgFulldayVan,
            price: 550,
            points: [
              '私享服务最长 10 小时',
              '家庭与小团体舒适之选',
              '可按需按小时延长'
            ]
          },
          itinerary: [
            '按您指定时间于迪拜酒店/住所上门接送。',
            '按需自定路线：商务会谈、购物及城市亮点（老城、阿布拉小船、朱美拉、棕榈岛、Marina、市中心等）。',
            '途中可按需安排拍照/咖啡小憩。',
            '午餐自理后继续观光或办理事务。',
            '于您指定的迪拜地点下车；如需可按小时延长服务。'
          ],
          includes: [
            '10 小时专属 SUV/商务车与专业司机',
            '常规城市使用范围内燃油',
            '个性化行程的基础协调'
          ],
          notes: [
            '超时费用：通常 AED 100–200/小时（依车型而异）。',
            '跨酋附加：如前往阿布扎比/沙迦等，通常需加 AED 100–200。',
            '收费公路与停车费除非报价已含，否则按实际成本计收。',
            '不含景点门票、餐饮及个人消费。',
            '司导并非持牌导游；如需可另行安排持牌导游。'
          ]
        },
        {
          id: 'auhday',
          title: '迪拜→阿布扎比观光（10 小时）',
          blurb:
            '从迪拜出发的一日往返行程，涵盖阿布扎比地标与拍照停留；默认当日往返。',
          suv: {
            image: imgADTripSUV,
            price: 610,
            points: [
              '约 10 小时一日游（默认当日往返）',
              '重点涵盖谢赫扎耶德清真寺、海滨大道等拍照点',
              '路线灵活，可按需延长'
            ]
          },
          van: {
            image: imgADTripVan,
            price: 650,
            points: [
              '约 10 小时一日游（默认当日往返）',
              '适合 5–8 位客人及亲友家庭',
              '路线灵活，可按需延长'
            ]
          },
          itinerary: [
            '迪拜上车，驱车前往阿布扎比（约 90–120 分钟，视路况）。',
            '参观谢赫扎耶德大清真寺（需遵守着装/安检规定）。',
            '沿海滨大道（Corniche）欣赏城市风光；外观酋长皇宫/国家塔区域并拍照。',
            '可选外观/拍照点：总统府 Qasr Al Watan 外围、阿布扎比卢浮宫、民俗村、亚斯岛/法拉利乐园区域等。',
            '自理午餐后继续行程。',
            '返回迪拜，于酒店/住所下车。'
          ],
          includes: [
            '约 10 小时专属 SUV/商务车与专业司机',
            '迪拜市区范围内上门接送（当日往返）',
            '典型一日游距离内燃油'
          ],
          notes: [
            '默认迪拜当日往返。如需单送或不同下车点，可定制（价格将相应调整）。',
            '超过 10 小时的服务将计加班费（通常 AED 100–200/小时）。',
            '清真寺着装：需遮臂遮腿；女性需佩戴头巾。安检/入场规则可能临时调整。',
            '除非报价说明包含，否则门票、导览、餐饮、通行费/停车费均不含。',
            '受礼拜/活动/节假日影响，开放时间可能变化；司机将协助实时优化路线。'
          ]
        }
      ],

      // CTA state
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      toastTimer: null,
      showWhatsappModal: false,
      showWechatModal: false,
      whatsappQR,
      wechatQR,

      // FAQs
      faqs: [
        {
          question: '阿布扎比一日游是按车辆收费还是按人头收费？',
          answer:
            '按车辆计费。价格涵盖预订时段内车辆与司机的私享使用。景点门票与餐饮等需另付。',
          open: false
        },
        {
          question: '阿布扎比行程可以在阿布扎比结束、不返回迪拜吗？',
          answer:
            '可以，属于定制安排。为覆盖路线、时长与空驶等因素，价格将相应调整。',
          open: false
        },
        {
          question: '超里程与加班如何计算？',
          answer:
            '超出典型使用/距离的公里数与小时数将计费；确认单会列明适用费率。',
          open: false
        },
        {
          question: '是否提供持牌导游？',
          answer:
            '司导并非持牌讲解导游。如需深度讲解，可另行安排英文持牌导游并收取相应费用。',
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
    toggleFaq(index) { this.faqs[index].open = !this.faqs[index].open },

    openWhatsappModal() { this.showWhatsappModal = true },
    openWechatModal() { this.showWechatModal = true },
    closeModals() { this.showWhatsappModal = false; this.showWechatModal = false },

    // 打开 WonderCart
    bookNow() { this.cart.open() },

    // 加入购物车（只传名字）
    addToCart(name) { this.cart.add(name) },

    // 保留但不再使用复制逻辑
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
          ta.focus()
          ta.select()
          document.execCommand('copy')
          document.body.removeChild(ta)
        }
      } finally { this.showToast() }
    },
    showToast() {
      this.showEmailToast = true
      clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => (this.showEmailToast = false), 3000)
    }
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

.cta-btn{ height:56px; border:none; border-radius:12px; font-weight:700; cursor:pointer;
  transition: transform .08s ease, box-shadow .18s ease; box-shadow:0 4px 12px rgba(0,0,0,.08); display:inline-flex; align-items:center; justify-content:center; text-decoration:none; }
.cta-btn:active{ transform: translateY(1px); }
.cta-gray  { background:hsl(65, 5%, 53%); color:hsl(0, 0%, 100%); }
.cta-green { background:hsl(136, 90%, 27%); color:hsl(0, 0%, 100%); }
.cta-red   { background:hsl(0, 93%, 32%); color:hsl(0, 0%, 100%); }
.cta-btn:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }

/* Toast & QR modal */
.center-toast{ position:fixed; inset:0; display:grid; place-items:center; z-index:2000; }
.center-toast-box{ background:#fff; padding:16px 22px; border-radius:12px; box-shadow:0 12px 28px rgba(0,0,0,.18); max-width:90vw; text-align:center; }
.qr-modal{ position:fixed; inset:0; background:rgba(0,0,0,.4); display:grid; place-items:center; z-index:2000; }
.qr-modal-box{ position:relative; background:#fff; border-radius:16px; padding:16px; width:min(90vw,520px); box-shadow:0 16px 32px rgba(0,0,0,.25); }
.qr-modal-box img{ width:100%; height:auto; display:block; border-radius:12px; }
.qr-close{ position:absolute; top:8px; right:10px; width:36px; height:36px; border-radius:50%; border:none; background:#f2f2f2; font-size:22px; line-height:1; cursor:pointer; }
.qr-close:hover{ background:#e9e9e9; }

/* Product cards */
.product{ max-width:1000px; margin:34px auto; padding:0 20px; }
.product h2{ font-size:1.6rem; margin:0 0 6px; }
.blurb{ color:#555; margin:0 0 14px; }
.product-grid{ display:grid; grid-template-columns: repeat(2,1fr); gap:18px; }
@media (max-width: 820px){ .product-grid{ grid-template-columns:1fr; } }

.product-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.product-card img{ width:100%; height:240px; object-fit:cover; display:block; }
.pc-body{ padding:20px; }
.price-line{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.badge{ background:#eef2ff; color:#1f3a8a; border-radius:999px; padding:4px 10px; font-weight:700; font-size:.85rem; }
.price{ color:#b01b1b; font-weight:800; }

.bullets{ margin:0; padding-left:18px; color:#444; line-height:1.6; }
.bullets li{ margin-bottom:6px; }

/* Add to Cart button（白字红底） */
.btn-addcart{
  width:100%;
  height:44px;
  margin-top:12px;
  border:none;
  border-radius:10px;
  font-weight:700;
  cursor:pointer;
  background:hsl(0, 93%, 32%);
  color:#fff;
  transition: box-shadow .18s ease, transform .08s ease;
}
.btn-addcart:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }
.btn-addcart:active{ transform: translateY(1px); }

/* Rules & Policy blocks */
.rules{ background:#f8f8f8; border-radius:12px; padding:16px; margin-top:18px; }
.rules h3{ margin:8px 0; }
.rules ul{ margin:0; padding-left:18px; line-height:1.6; }

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

/* Itinerary */
.itinerary-card{
  background:#fff;
  border:1px solid #e6e6e6;
  border-radius:12px;
  padding:16px;
  margin-top:14px;
  box-shadow:0 2px 8px rgba(0,0,0,.06);
}
.itinerary-card h3{ margin:6px 0 10px; }
.itinerary-card ul{ margin:0; padding-left:18px; line-height:1.6; color:#444; }
.it-note{ margin-top:8px; font-size:.95rem; color:#666; }
</style>
