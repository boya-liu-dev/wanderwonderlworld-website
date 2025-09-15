<template>
  <div class="details-page">
    <!-- Banner -->
    <div class="banner-container">
      <img
        src="@/assets/images/banner7.jpg"
        alt="沙漠冲沙横幅"
        class="banner"
        id="safariZhBanner"
        data-c-src="@id"
        loading="lazy"
        decoding="async"
      />
      <div class="floating-logos">
        <img
          src="@/assets/images/logo-www-gold.png"
          alt="金色徽标"
          class="logo"
          id="safariZhLogoGold"
          data-c-src="@id"
          loading="lazy"
          decoding="async"
        />
        <img
          src="@/assets/images/logo-text.png"
          alt="文字徽标"
          class="logo-text"
          id="safariZhLogoText"
          data-c-src="@id"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <!-- Title -->
    <div class="intro">
      <h1 id="safariZhH1" data-c="@id">晨曦沙丘越野 & 日落沙丘优选</h1>
      <p id="safariZhIntro" data-c="@id">
        全程私享 4×4 越野车，由持证沙漠司机驾驶、商业保险车辆运营。您可选择清爽的早晨轻越野，或人气最高的日落晚场（含营地晚餐与表演）。ATV
        150cc、双座沙地越野车等可选加项在持牌中心加购预订。
      </p>
    </div>

    <!-- 左侧悬浮 WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=你好，万德假日迪拜！我想咨询沙漠项目。"
        class="whatsapp-button hover-reveal"
        aria-label="通过 WhatsApp 咨询沙漠项目"
        id="safariZhWAFloat"
        data-c="@id"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp 图标"
          id="safariZhWAIcon"
          data-c-src="@id"
          loading="lazy"
          decoding="async"
        />
        <span class="whatsapp-text" id="safariZhWAText" data-c="@id">需要帮助？立即咨询！</span>
      </a>
    </div>

    <!-- 4 CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="safariZhCtaEmail" data-c="@id">邮件咨询</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="safariZhCtaWA" data-c="@id">WhatsApp 咨询</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="safariZhCtaWeChat" data-c="@id">微信咨询</button>
        <button class="cta-btn cta-red" @click="bookNow" id="safariZhCtaCart" data-c="@id">万德购物车</button>
      </div>
    </div>

    <!-- Toast: email copied -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p><strong>{{ emailToCopy }}</strong> 已复制到剪贴板</p>
      </div>
    </div>

    <!-- QR Modals -->
    <div
      v-if="showWhatsappModal"
      class="qr-modal"
      aria-modal="true"
      role="dialog"
      aria-labelledby="safariZhWAModalH2"
    >
      <div class="qr-modal-box">
        <h2 id="safariZhWAModalH2" class="sr-only" aria-hidden="true">WhatsApp 二维码</h2>
        <button class="qr-close" aria-label="关闭" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="safariZhWAQR" data-c-src="@id" loading="lazy" decoding="async" />
      </div>
    </div>
    <div
      v-if="showWechatModal"
      class="qr-modal"
      aria-modal="true"
      role="dialog"
      aria-labelledby="safariZhWeChatModalH2"
    >
      <div class="qr-modal-box">
        <h2 id="safariZhWeChatModalH2" class="sr-only" aria-hidden="true">微信二维码</h2>
        <button class="qr-close" aria-label="关闭" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="safariZhWeChatQR" data-c-src="@id" loading="lazy" decoding="async" />
      </div>
    </div>

    <!-- Products -->
    <section
      v-for="p in products"
      :key="p.id"
      class="product"
      :id="`safariZhProd_${p.id}`"
    >
      <h2><span :id="`safariZhTitle_${p.id}`" data-c="@id">{{ p.title }}</span></h2>
      <p class="blurb"><span :id="`safariZhBlurb_${p.id}`" data-c="@id">{{ p.blurb }}</span></p>

      <div class="product-grid">
        <!-- Single merged card -->
        <div class="product-card">
          <img
            :src="p.variantA.image"
            :alt="p.title + ' 4×4'"
            :id="`safariZhImg_${p.id}`"
            data-c-src="@id"
            loading="lazy"
            decoding="async"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`safariZhBadge_${p.id}`" data-c="@id">{{ p.variantA.badge }}</span>
              <span class="price" :id="`safariZhPrice_${p.id}`">AED {{ p.variantA.price }} 起</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.variantA.points" :key="i">
                <span :id="`safariZhPoint_${p.id}_${i}`" data-c="@id">{{ b }}</span>
              </li>
            </ul>

            <!-- Add to Cart -->
            <button
              class="btn-addcart"
              @click="addToCart(p.cartName)"
              :id="`safariZhAdd_${p.id}`"
              data-c="@id"
            >
              加入购物车
            </button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3 :id="`safariZhItH3_${p.id}`" data-c="@id">行程样例</h3>
        <ul>
          <li v-for="(step, sIdx) in p.itinerary" :key="'it-'+p.id+'-'+sIdx">
            <span :id="`safariZhIt_${p.id}_${sIdx}`" data-c="@id">{{ step }}</span>
          </li>
        </ul>
        <p class="it-note" :id="`safariZhItNote_${p.id}`" data-c="@id">
          行程时间与路线可能因交通、天气或园区规定调整。
        </p>
      </div>

      <!-- What’s included / Good to know / Add-ons CTA -->
      <div class="rules">
        <h3 :id="`safariZhIncH3_${p.id}`" data-c="@id">费用包含</h3>
        <ul>
          <li v-for="(i,idx) in p.includes" :key="'inc-'+idx">
            <span :id="`safariZhInc_${p.id}_${idx}`" data-c="@id">{{ i }}</span>
          </li>
        </ul>
        <h3 :id="`safariZhNoteH3_${p.id}`" data-c="@id">预订须知</h3>
        <ul>
          <li v-for="(n,idx) in p.notes" :key="'note-'+idx">
            <span :id="`safariZhNote_${p.id}_${idx}`" data-c="@id">{{ n }}</span>
          </li>
        </ul>
        <div class="addons-cta">
          <router-link
            to="/safari/addon1"
            class="btn"
            id="safariZhAddonsBtn"
            data-c="@id"
            aria-label="查看可选加项：ATV 150cc、双座越野车、旅拍、水烟/酒水"
          >
            可选加项（ATV 150cc、双座越野车、旅拍、Shisha/酒水）
          </router-link>
        </div>
      </div>
    </section>

    <!-- Policy / Terms block -->
    <div class="text-card">
      <h2 id="safariZhPolicyH2" data-c="@id">服务政策与保险摘要</h2>
      <ul class="policy">
        <li id="safariZhPol1" data-c="@id">私享 4×4 越野车＋持证沙漠司机；车辆均为商业车辆保险（至少含第三者责任险）。建议另购个人旅行保险。</li>
        <li id="safariZhPol2" data-c="@id">接送时间窗：请预留上下约 15 分钟以便路线/交通调度，司机可能调整停靠顺序以避开拥堵。</li>
        <li id="safariZhPol3" data-c="@id">健康与安全：沙丘冲沙不建议孕妇、严重心颈背问题客人及婴幼儿参加。4 岁以下必须使用儿童安全座椅（需提前预约）。</li>
        <li id="safariZhPol4" data-c="@id">斋月及宗教节日：根据阿联酋法规，现场表演与酒精饮品可能受限或暂停。</li>
        <li id="safariZhPol5" data-c="@id">酒水与水烟：仅限持牌营地提供，年龄限制适用；如需价格请与我们联系。</li>
        <li id="safariZhPol6" data-c="@id">ATV/越野沙地车为第三方持牌中心运营，按其安全规范与保险执行；必须佩戴头盔，年龄/身高限制适用。</li>
        <li id="safariZhPol7" data-c="@id">免费取消政策以确认单为准；逾期取消/未到场视情况最高可收取 100% 费用。</li>
        <li id="safariZhPol8" data-c="@id">天气与不可抗力：遇沙尘/强降雨等，行程将适当改为轻活动或优先改期；若部分服务无法提供，将据实部分退款。</li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="safariZhFaqH2" data-c="@id">常见问题</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button
          class="faq-question"
          @click="toggleFaq(index)"
          :aria-expanded="faq.open.toString()"
          :aria-controls="`safariZhFaqA_${index}`"
          :id="`safariZhFaqQ_${index}`"
          data-c="@id"
        >
          <span>{{ faq.question }}</span>
          <span class="faq-icon" aria-hidden="true">{{ faq.open ? "▲" : "▼" }}</span>
        </button>
        <div
          v-if="faq.open"
          class="faq-answer"
          role="region"
          :id="`safariZhFaqA_${index}`"
          :aria-labelledby="`safariZhFaqQ_${index}`"
        >
          <p :id="`safariZhFaqAText_${index}`" data-c="@id">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// images
import imgMorning from '@/assets/images/cars/safaricar1.jpg'
import imgSunset from '@/assets/images/cars/safaricar2.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// 引入购物车
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'SafariReg',
  data() {
    return {
      products: [
        {
          id: 'morning',
          title: '晨曦沙丘越野（经典系列）',
          blurb:
            '08:00–12:30（约 4.5 小时）。清凉早晨、柔和光线、人少景美——亲子与长者更友好。',
          cartName: '晨曦沙丘越野',
          variantA: {
            image: imgMorning,
            badge: '私享 4×4（至多 5 人）',
            price: 500,
            points: [
              '迪拜酒店上门接送',
              '50–60 分钟沙丘冲沙（Lahbab 或同级沙区）',
              '沙板体验 & 骆驼合影短停（营地开放时）',
              '车载瓶装水',
              '小家庭友好',
              '可加购：ATV 150cc / 双座沙地越野车（见加项页）'
            ]
          },
          itinerary: [
            '08:00 时间窗于迪拜酒店/住所上门接送。',
            '前往红沙区并放气，进入软沙驾驶状态。',
            '沙丘冲沙 50–60 分钟，途中高沙丘拍照停留。',
            '体验沙板；如营地开放，安排短暂停留骆驼合影。',
            '返回迪拜，于您指定地点下车。'
          ],
          includes: [
            '私享 4×4＋专业沙漠司机',
            '沙丘冲沙（约 50–60 分钟）',
            '高沙丘观景拍照停留',
            '饮用水'
          ],
          notes: [
            '更适合亲子/长者，早晨温度更舒适。',
            'ATV/越野沙地车/旅拍为可选加项，在持牌中心办理；可在“沙漠加项”页面提交需求。',
            '健康限制适用（孕妇/心颈背问题不建议参加）；可按需预留儿童座椅。'
          ]
        },
        {
          id: 'sunset',
          title: '日落沙丘优选（臻选系列）',
          blurb:
            '15:00–21:00（约 6 小时）。人气之选：沙丘冲沙＋日落美拍＋营地晚餐与表演。',
          cartName: '日落沙丘优选',
          variantA: {
            image: imgSunset,
            badge: '私享 4×4（至多 5 人）',
            price: 700,
            points: [
              '迪拜酒店上门接送',
              '50–60 分钟沙丘冲沙＋日落拍照停留',
              '持牌营地：BBQ 自助晚餐（含素/非素），现场表演*',
              '短程骑骆驼 & 沙板体验（营地运营）',
              '标准营地含软饮',
              '可加购：ATV 150cc / 双座越野车 / 旅拍'
            ]
          },
          itinerary: [
            '15:00 时间窗酒店/住所接人。',
            '抵达沙漠放气后开始沙丘冲沙（约 50–60 分钟）。',
            '高沙丘日落拍照停留。',
            '进入持牌营地：迎宾茶点；短程骑骆驼；沙板体验。',
            'BBQ 自助晚餐（含素/非素）与现场表演*；按营地政策提供茶/咖啡/软饮。',
            '约 21:00 抵达迪拜并送回您指定地点。'
          ],
          includes: [
            '持证司机＋私享 4×4',
            '沙丘冲沙与日落拍照停留',
            '营地入场＋晚餐与现场表演',
            '饮用水＋软饮（依营地政策）'
          ],
          notes: [
            '*斋月及特定宗教日期：表演与酒精服务可能受限或暂停。',
            '酒水/Shisha 仅在持牌营地提供（自费）。如需价格请联系我司。',
            'ATV/越野沙地车为第三方加项，按其安全规范与保险执行；必须佩戴头盔，年龄限制适用。',
            '旅拍套餐为可选加项；免费赠送仅适用于“皇家沙丘”产品线。'
          ]
        }
      ],

      // ====== CTA state ======
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      toastTimer: null,
      showWhatsappModal: false,
      showWechatModal: false,
      whatsappQR,
      wechatQR,

      // ====== FAQs ======
      faqs: [
        {
          question: '行程是否投保？适合亲子家庭吗？',
          answer:
            '是的。车辆与司机均为商业牌照与保险，路线以安全为先。晨曦产品对亲子与长者更友好。4 岁以下必须使用儿童安全座椅（需提前预约）。',
          open: false
        },
        {
          question: '可以加购 ATV 或越野沙地车吗？',
          answer:
            '可以。ATV（150cc）与双座越野车为持牌中心运营的可选加项，按其安全规范与保险执行。您可在“沙漠加项”页面查看与提交需求。',
          open: false
        },
        {
          question: '营地的晚餐、表演和酒水怎么安排？',
          answer:
            '“日落沙丘优选”含营地晚餐与现场表演（由营地运营）。酒水与 Shisha 仅在持牌营地自费提供；斋月期间表演/酒精服务受限。',
          open: false
        },
        {
          question: '穿着与随身物品有何建议？',
          answer:
            '建议轻便休闲装、墨镜与防晒；穿运动鞋或凉鞋皆可。冬季夜晚偏凉，可备一件外套。',
          open: false
        }
      ]
    }
  },
  computed: {
    // 获取购物车实例
    cart() {
      return useWonderCart()
    }
  },
  methods: {
    // FAQs
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open
    },

    // CTA actions（Email 逻辑保持不变）
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
      } finally {
        this.showToast()
      }
    },
    showToast() {
      this.showEmailToast = true
      clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => (this.showEmailToast = false), 3000)
    },
    openWhatsappModal() { this.showWhatsappModal = true },
    openWechatModal() { this.showWechatModal = true },
    closeModals() { this.showWhatsappModal = false; this.showWechatModal = false },

    // 改：直接打开购物车
    bookNow() { this.cart.open() },

    // 新增：加入购物车（仅传产品名）
    addToCart(name) { this.cart.add(name) }
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
  transition: transform .08s ease, box-shadow .18s ease; box-shadow:0 4px 12px rgba(0,0,0,.08); }
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
.product { max-width:1000px; margin:34px auto; padding:0 20px; }
.product h2 { font-size:1.6rem; margin:0 0 6px; }
.blurb { color:#555; margin:0 0 14px; }

.product-grid{ display: grid; grid-template-columns: 1fr; gap: 18px; }
@media (max-width: 820px){ .product-grid{ grid-template-columns:1fr; } }

.product-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.product-card img{ width:100%; height:240px; object-fit:cover; display:block; }
.pc-body{ padding:20px; }
.price-line{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.badge{ background:#eef2ff; color:#1f3a8a; border-radius:999px; padding:4px 10px; font-weight:700; font-size:.85rem; }
.price{ color:#b01b1b; font-weight:800; }

.bullets{ margin:0; padding-left:18px; color:#444; line-height:1.6; }
.bullets li{ margin-bottom:6px; }

/* Add to Cart 按钮 */
.btn-addcart{
  width:100%; height:44px; margin-top:12px; border:none; border-radius:10px; font-weight:700; cursor:pointer;
  background:hsl(0, 93%, 32%); color:#fff; transition: box-shadow .18s ease, transform .08s ease;
}
.btn-addcart:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }
.btn-addcart:active{ transform: translateY(1px); }

/* Rules & Policy blocks */
.rules{ background:#f8f8f8; border-radius:12px; padding:16px; margin-top:18px; }
.rules h3{ margin:8px 0; }
.rules ul{ margin:0; padding-left:18px; line-height:1.6; }
.addons-cta{ margin-top:10px; }
.addons-cta .btn{
  display:inline-block; background:#c3aa0c; color:#fff; padding:8px 12px; border-radius:8px; text-decoration:none; font-weight:600;
}

/* Text card */
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

/* Itinerary card */
.itinerary-card{
  background:#fff; border:1px solid #e6e6e6; border-radius:12px; padding:16px; margin-top:14px; box-shadow:0 2px 8px rgba(0,0,0,.06);
}
.itinerary-card h3{ margin:6px 0 10px; }
.itinerary-card ul{ margin:0; padding-left:18px; line-height:1.6; color:#444; }
.it-note{ margin-top:8px; font-size:.95rem; color:#666; }

/* Screen-reader only */
.sr-only{
  position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0);
  white-space:nowrap; border:0;
}
</style>
