<template>
  <div class="details-page" id="tsRoot" data-c="@id">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="接送与包车横幅"
        class="banner"
        id="tsBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="金色徽标"
          class="logo"
          id="tsLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="文字徽标"
          class="logo-text"
          id="tsLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Title -->
    <div class="intro">
      <h1 id="tsTitle" data-c="@id">机场接送 & 半日司导包车</h1>
      <p id="tsIntro" data-c="@id">
        迪拜专业司导与商业保险车辆，私享出行更安心。可选择快速机场接送，或预订半日（含司导）包车——商务会晤、轻量观光皆宜。
      </p>
    </div>

    <!-- 左侧悬浮 WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=你好，万德假日迪拜！我想咨询用车服务。"
        class="whatsapp-button hover-reveal"
        id="tsWAFloatLink"
        data-c-href="@id"
      >
        <img
          :src="waIcon"
          alt="WhatsApp 图标"
          id="tsWAFloatIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="tsWAFloatText" data-c="@id">需要帮助？立即咨询！</span>
      </a>
    </div>

    <!-- 4 CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <!-- 改成 mailto 直开邮箱 -->
        <a
          class="cta-btn cta-gray"
          :href="'mailto:'+emailToCopy"
          id="tsCTAEmail"
          data-c="@id"
        >邮件咨询</a>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="tsCTAWhatsApp" data-c="@id">
          WhatsApp 咨询
        </button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="tsCTAWechat" data-c="@id">
          微信咨询
        </button>
        <!-- 改为直接打开 WonderCart -->
        <button class="cta-btn cta-red" @click="openCart" id="tsCTACart" data-c="@id">
          万德购物车
        </button>
      </div>
    </div>

    <!-- Toast: email copied（保留不再触发） -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="tsToastCopied" data-c-html="@id"><strong>{{ emailToCopy }}</strong> 已复制到剪贴板</p>
      </div>
    </div>

    <!-- QR Modals -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="关闭" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="tsWhatsAppQR" data-c-src="@id" />
      </div>
    </div>
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="关闭" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="tsWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- Products: two panels (data-driven) -->
    <section
      v-for="p in products"
      :key="p.id"
      class="product"
      :id="`ts_${p.id}`"
      :data-c="'@id'"
    >
      <h2 :id="`ts_${p.id}_title`" :data-c="'@id'">{{ p.title }}</h2>
      <p class="blurb" :id="`ts_${p.id}_blurb`" :data-c="'@id'">{{ p.blurb }}</p>

      <div class="product-grid">
        <!-- SUV -->
        <div class="product-card">
          <img
            :src="p.suv.image"
            :alt="p.title + ' SUV'"
            :id="`ts_${p.id}_suv_img`"
            data-c-src="@id"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`ts_${p.id}_suv_badge`" :data-c="'@id'">SUV（4–6人）</span>
              <span class="price" :id="`ts_${p.id}_suv_price`" :data-c="'@id'">AED {{ p.suv.price }} 起</span>
            </div>
            <ul class="bullets">
              <li
                v-for="(b,i) in p.suv.points"
                :key="i"
                :id="`ts_${p.id}_suv_point_${i}`"
                :data-c="'@id'"
              >{{ b }}</li>
            </ul>
            <!-- 新增：Add to Cart -->
            <button
              class="add-btn"
              @click="addToCart(variantName(p,'suv'), p.id + '-suv')"
              :id="`ts_${p.id}_suv_add`"
              :data-c="'@id'"
            >
              加入购物车
            </button>
          </div>
        </div>

        <!-- VAN -->
        <div class="product-card">
          <img
            :src="p.van.image"
            :alt="p.title + ' Van'"
            :id="`ts_${p.id}_van_img`"
            data-c-src="@id"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`ts_${p.id}_van_badge`" :data-c="'@id'">商务车（7–10人）</span>
              <span class="price" :id="`ts_${p.id}_van_price`" :data-c="'@id'">AED {{ p.van.price }} 起</span>
            </div>
            <ul class="bullets">
              <li
                v-for="(b,i) in p.van.points"
                :key="i"
                :id="`ts_${p.id}_van_point_${i}`"
                :data-c="'@id'"
              >{{ b }}</li>
            </ul>
            <!-- 新增：Add to Cart -->
            <button
              class="add-btn"
              @click="addToCart(variantName(p,'van'), p.id + '-van')"
              :id="`ts_${p.id}_van_add`"
              :data-c="'@id'"
            >
              加入购物车
            </button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3 :id="`ts_${p.id}_itTitle`" :data-c="'@id'">行程样例</h3>
        <ul>
          <li
            v-for="(step, sIdx) in p.itinerary"
            :key="'it-'+p.id+'-'+sIdx"
            :id="`ts_${p.id}_it_${sIdx}`"
            :data-c="'@id'"
          >
            {{ step }}
          </li>
        </ul>
        <p class="it-note" :id="`ts_${p.id}_itNote`" :data-c="'@id'">时间与路线均可灵活定制，可按您的计划调整。</p>
      </div>

      <!-- Key rules per product -->
      <div class="rules">
        <h3 :id="`ts_${p.id}_incTitle`" :data-c="'@id'">费用包含</h3>
        <ul>
          <li
            v-for="(i,idx) in p.includes"
            :key="'inc-'+idx"
            :id="`ts_${p.id}_inc_${idx}`"
            :data-c="'@id'"
          >{{ i }}</li>
        </ul>
        <h3 :id="`ts_${p.id}_noteTitle`" :data-c="'@id'">预订须知</h3>
        <ul>
          <li
            v-for="(n,idx) in p.notes"
            :key="'note-'+idx"
            :id="`ts_${p.id}_note_${idx}`"
            :data-c="'@id'"
          >{{ n }}</li>
        </ul>
      </div>
    </section>

    <!-- Policy / Terms block -->
    <div class="text-card">
      <h2 id="tsPolicyTitle" data-c="@id">服务政策与保险摘要</h2>
      <ul class="policy">
        <li id="tsPolicy_0" data-c="@id">
          所有车辆与司机均按 RTA/阿联酋法规持证，且购买商业车辆保险（至少含第三者责任险）。建议所有客人另购个人旅行保险。
        </li>
        <li id="tsPolicy_1" data-c-html="@id">
          候时政策：机场接机自实际落地起<strong>60分钟</strong>免费等待；酒店/住址接载<strong>15分钟</strong>免费。超时按 30 或 60 分钟为单位计费（依车型/服务而定）。
        </li>
        <li id="tsPolicy_2" data-c="@id">
          距离与路线：默认点到点服务；额外停靠、绕行或增补接人可能产生附加费用。
        </li>
        <li id="tsPolicy_3" data-c="@id">
          收费公路/停车：除非报价已含，否则按实际成本计收（跨酋出行常见）。
        </li>
        <li id="tsPolicy_4" data-c-html="@id">
          夜间/高峰附加：<strong>22:00–06:00</strong>或节假日/大型活动期间可能加收附加费。
        </li>
        <li id="tsPolicy_5" data-c="@id">
          可预留儿童安全座椅（需提前告知）。请告知行李数量；超大件需提前说明以匹配合适车型。
        </li>
        <li id="tsPolicy_6" data-c="@id">
          取消与未到：免费取消时窗以确认单为准。未到或逾期取消视情况最高可收取 100% 费用。
        </li>
        <li id="tsPolicy_7" data-c="@id">
          司导并非持牌讲解导游；如需持牌导游可另行安排并收取相应费用。
        </li>
        <li id="tsPolicy_8" data-c="@id">
          车辆损坏/清洁：因乘客疏忽造成的维修或深度清洁费用将据实收取。
        </li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="tsFAQTitle" data-c="@id">常见问题</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span :id="`tsFAQ_q_${index}`" :data-c="'@id'">{{ faq.question }}</span>
          <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p :id="`tsFAQ_a_${index}`" :data-c="'@id'">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// brand assets
import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import waIcon from '@/assets/images/whatsapp-icon.png'

// images
import imgAirportSUV from '@/assets/images/cars/carcard6.jpg'
import imgAirportVan from '@/assets/images/cars/carcard7.jpg'
import imgHalfdaySUV from '@/assets/images/cars/carcard2.jpg'
import imgHalfdayVan from '@/assets/images/cars/carcard8.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// 引入 WonderCart store
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'TransferShort',
  data() {
    return {
      // brand
      banner, logoGold, logoText, waIcon,

      products: [
        {
          id: 'airport',
          title: '机场接送',
          blurb: '到达口举牌接机并实时监控航班。直达酒店/住所，顺畅省心。',
          suv: { image: imgAirportSUV, price: 190, points: ['DXB → 迪拜市区酒店/住所', '机场免费等待 60 分钟', '适合 1–4 位客人＋行李'] },
          van: { image: imgAirportVan, price: 230, points: ['DXB → 迪拜市区酒店/住所', '机场免费等待 60 分钟', '适合家庭或 5–8 位客人'] },
          includes: ['私家车辆与专业司导', '到达口举牌迎接，实时航班跟踪', '迪拜市区内燃油及基础道路费用'],
          notes: ['AUH → 迪拜市区：SUV 约 AED 330，商务车约 AED 380（参考）。', '高峰/夜间可能适用附加费。', '超出免费等待时长将按标准计费。'],
          itinerary: [
            '出行前进行航班跟踪；如延误将相应调整接机时间。',
            '在到达大厅举牌迎接（显示您的姓名）。',
            '自航班落地起最多 60 分钟免费等待；协助搬运行李至车辆。',
            '根据预订车型安排空调 SUV/商务车私享用车。',
            '直达迪拜酒店/住所（通常 20–40 分钟，视区域/路况而定）。',
            '门到门送达，行程结束。'
          ]
        },
        {
          id: 'halfday',
          title: '半日司导包车（5 小时）',
          blurb: '灵活 5 小时司导包车——适合商务洽谈或轻量城市游。',
          suv: { image: imgHalfdaySUV, price: 300, points: ['服务时长 5 小时内', '含约 100 公里', '可按小时延长'] },
          van: { image: imgHalfdayVan, price: 330, points: ['服务时长 5 小时内', '含约 100 公里', '小团体舒适之选'] },
          includes: ['预订时段内专属司导车辆', '含约定里程内燃油', '个性化行程协调支持'],
          notes: ['超时费用：通常 AED 80–150/小时（依车型）。', '超里程（超过 100 公里）需另付，价格以确认单为准。', '不含景点门票、餐饮及个人消费。'],
          itinerary: [
            '按您指定时间从迪拜酒店/住所上门接送。',
            '预订 5 小时内专属使用空调 SUV/商务车。',
            '英语司导协助导航与停车。',
            '路线可灵活安排：会面、购物或轻量观光（老城、朱美拉、市中心、Marina 等）。',
            '可按需短暂停留拍照/咖啡；含约 100 公里（超里程/超时将计费）。',
            '在迪拜您选择的位置下车；如需可随时按小时延长。'
          ]
        }
      ],
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      toastTimer: null,
      showWhatsappModal: false,
      showWechatModal: false,
      whatsappQR,
      wechatQR,
      faqs: [
        { question: '我的用车有保险吗？', answer: '有。车辆与司机均按阿联酋/RTA 规定持证并投保商业保险。为更全面保障，仍建议购买个人旅行保险。', open: false },
        { question: '候时如何计算？', answer: '机场接机自实际落地起含 60 分钟免费等待；酒店/住址含 15 分钟免费。超出部分按 30/60 分钟为单位计费。', open: false },
        { question: '收费公路（Salik）与停车如何计费？', answer: '除非另有说明，Salik/过路费与停车费按实际成本计收。跨酋行程可能产生额外通行费。', open: false },
        { question: '途中可以加停或临时延长吗？', answer: '可以，视车辆当日排班而定。额外停靠与超时将计费；司机/调度将现场确认费率。', open: false }
      ]
    }
  },
  methods: {
    // FAQ 折叠
    toggleFaq(index) { this.faqs[index].open = !this.faqs[index].open },

    // 变体显示名称
    variantName(p, type) {
      const map = {
        airport: { suv: '机场接送 - SUV', van: '机场接送 - 商务车' },
        halfday: { suv: '半日包车 - SUV',  van: '半日包车 - 商务车' }
      }
      return (map[p.id] && map[p.id][type]) || `${p.title} - ${type.toUpperCase()}`
    },

    // 打开购物车
    openCart() {
      const cart = useWonderCart()
      cart.open()
    },

    // 加入购物车
    addToCart(name, id) {
      const cart = useWonderCart()
      cart.add({ id, name })
      if (cart.toast) cart.toast('已加入万德购物车')
    },

    // 下面这些保留（无需触发）
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

/* Add to Cart */
.add-btn{
  margin-top:10px;
  width:100%;
  height:44px;
  border:none;
  border-radius:10px;
  font-weight:700;
  background:hsl(0, 93%, 32%);
  color:#fff;
  cursor:pointer;
  box-shadow:0 4px 12px rgba(0,0,0,.08);
}
.add-btn:active{ transform: translateY(1px); }

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

/* Itinerary card */
.itinerary-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; padding:16px; margin-top:14px; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.itinerary-card h3{ margin:6px 0 10px; }
.itinerary-card ul{ margin:0; padding-left:18px; line-height:1.6; color:#444; }
.it-note{ margin-top:8px; font-size:.95rem; color:#666; }
</style>
