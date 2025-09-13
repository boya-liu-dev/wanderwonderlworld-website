<template>
  <div class="details-page">
    <!-- Banner -->
    <div class="banner-container">
      <img
        src="@/assets/images/banner7.jpg"
        alt="加选项目横幅"
        class="banner"
        id="safAddonsZhBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          src="@/assets/images/logo-www-gold.png"
          alt="金色标志"
          class="logo"
          id="safAddonsZhLogoGold"
          data-c-src="@id"
          loading="lazy"
          decoding="async"
        />
        <img
          src="@/assets/images/logo-text.png"
          alt="文字标志"
          class="logo-text"
          id="safAddonsZhLogoText"
          data-c-src="@id"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <!-- Title -->
    <div class="intro">
      <h1 id="safAddonsZhH1" data-c="@id">沙漠探险加选项目</h1>
      <p id="safAddonsZhIntro" data-c="@id">
        用人气加购项目升级你的沙漠之旅。全地形车与沙滩车由持牌合作营地运营，
        在专属沙丘/赛道上进行，含安全讲解与防护装备；旅拍由我们信赖的专业摄影师操刀；
        水烟/酒水仅在持牌营地供应，敬请理解。
      </p>
    </div>

    <!-- 左侧悬浮 WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20have%20a%20question%20about%20Desert%20Safari%20add-ons."
        class="whatsapp-button hover-reveal"
        aria-label="通过 WhatsApp 咨询沙漠探险加选项目"
        id="safAddonsZhWAFloat"
        data-c="@id"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="safAddonsZhWAIcon"
          data-c-src="@id"
          loading="lazy"
          decoding="async"
        />
        <span class="whatsapp-text" id="safAddonsZhWAText" data-c="@id">需要帮助？在线咨询！</span>
      </a>
    </div>

    <!-- 4 CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <a
          class="cta-btn cta-gray"
          :href="`mailto:${emailToCopy}`"
          id="safAddonsZhCtaEmail"
          data-c="@id"
        >邮件联系我们</a>
        <button
          class="cta-btn cta-green"
          @click="openWhatsappModal"
          id="safAddonsZhCtaWA"
          data-c="@id"
        >WhatsApp 联系我们</button>
        <button
          class="cta-btn cta-green"
          @click="openWechatModal"
          id="safAddonsZhCtaWeChat"
          data-c="@id"
        >微信联系我们</button>
        <button
          class="cta-btn cta-red"
          @click="bookNow"
          id="safAddonsZhCtaCart"
          data-c="@id"
        >万德购物车</button>
      </div>
    </div>

    <!-- QR Modals -->
    <div
      v-if="showWhatsappModal"
      class="qr-modal"
      aria-modal="true"
      role="dialog"
      aria-labelledby="safAddonsZhWAModalTitle"
    >
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="关闭" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="safAddonsZhWAQR" data-c-src="@id" />
      </div>
    </div>
    <div
      v-if="showWechatModal"
      class="qr-modal"
      aria-modal="true"
      role="dialog"
      aria-labelledby="safAddonsZhWeChatModalTitle"
    >
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="关闭" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="safAddonsZhWeChatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- Add-on products -->
    <section
      v-for="p in products"
      :key="p.id"
      class="product"
      :id="`safAddonsZhProd_${p.id}`"
    >
      <h2><span :id="`safAddonsZhTitle_${p.id}`" data-c="@id">{{ p.title }}</span></h2>
      <p class="blurb"><span :id="`safAddonsZhBlurb_${p.id}`" data-c="@id">{{ p.blurb }}</span></p>

      <div class="product-grid">
        <div class="product-card">
          <img
            :src="p.image"
            :alt="p.title"
            :id="`safAddonsZhImg_${p.id}`"
            data-c-src="@id"
            loading="lazy"
            decoding="async"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`safAddonsZhBadge_${p.id}`" data-c="@id">{{ p.badge }}</span>
              <span
                class="price"
                v-html="p.priceHtml"
                :id="`safAddonsZhPrice_${p.id}`"
                data-c-html="@id"
              ></span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.points" :key="i">
                <span :id="`safAddonsZhPoint_${p.id}_${i}`" data-c="@id">{{ b }}</span>
              </li>
            </ul>

            <!-- Buttons -->
            <button
              v-if="p.type === 'cart'"
              class="btn-addcart"
              @click="addToCart(p.cartName)"
              :id="`safAddonsZhAdd_${p.id}`"
              data-c="@id"
            >
              加入万德购物车
            </button>

            <a
              v-else-if="p.type === 'wa'"
              class="btn-wa"
              href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20want%20to%20ask%20about%20Shisha/Drinks%20add-on."
              target="_blank"
              rel="noopener"
              :id="`safAddonsZhWA_${p.id}`"
              data-c="@id"
            >
              WhatsApp 咨询
            </a>
          </div>
        </div>
      </div>

      <!-- Notes per product (optional) -->
      <div class="rules" v-if="p.notes && p.notes.length">
        <h3 :id="`safAddonsZhGoodTitle_${p.id}`" data-c="@id">预订须知</h3>
        <ul>
          <li v-for="(n,idx) in p.notes" :key="idx">
            <span :id="`safAddonsZhNote_${p.id}_${idx}`" data-c="@id">{{ n }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Policy / Safety -->
    <div class="text-card">
      <h2 id="safAddonsZhPolicyH2" data-c="@id">安全、保险与参与规则</h2>
      <ul class="policy">
        <li id="safAddonsZhPol1" data-c-html="@id">
          ATV/沙滩车为<strong>自驾</strong>体验，由我们持牌的合作营地运营；含基础安全讲解、头盔与护目镜。建议穿包脚鞋。
        </li>
        <li id="safAddonsZhPol2" data-c="@id">
          骑行需自行承担风险；合作营地依阿联酋规定购买商业责任险。我们建议您自带个人旅行/医疗保险。
        </li>
        <li id="safAddonsZhPol3" data-c-html="@id">
          <strong>不适宜人群：</strong>孕客；有背/颈/脊椎伤病者；严重心脏病；近期大型手术康复期人士。
        </li>
        <li id="safAddonsZhPol4" data-c-html="@id">
          <strong>年龄政策：</strong>ATV 建议 16 岁以上；沙滩车驾驶通常需 18 岁以上并持有效驾照。未成年人可在监护人同乘下体验。
        </li>
        <li id="safAddonsZhPol5" data-c="@id">
          严禁酒精/药物影响下骑行；现场需签署免责声明。运营方可能收取可退押金或冻结额度。
        </li>
        <li id="safAddonsZhPol6" data-c="@id">
          仅可在指定区域骑行，请遵守向导指示与生态保护规定；危险驾驶可能被终止且不予退款。
        </li>
        <li id="safAddonsZhPol7" data-c="@id">
          天气、沙况与日照会影响路线与节奏；为安全起见，运营方可能调整或取消，我们会据合作方政策改期或退款。
        </li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="safAddonsZhFaqH2" data-c="@id">常见问题</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button
          class="faq-question"
          @click="toggleFaq(index)"
          :aria-expanded="faq.open.toString()"
          :aria-controls="`safAddonsZhFaqA_${index}`"
          :id="`safAddonsZhFaqQ_${index}`"
          data-c="@id"
        >
          <span>{{ faq.question }}</span>
          <span class="faq-icon" aria-hidden="true">{{ faq.open ? "▲" : "▼" }}</span>
        </button>
        <div
          v-if="faq.open"
          class="faq-answer"
          role="region"
          :id="`safAddonsZhFaqA_${index}`"
          :aria-labelledby="`safAddonsZhFaqQ_${index}`"
        >
          <p :id="`safAddonsZhFaqAText_${index}`" data-c="@id">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// images
import imgATV from '@/assets/images/cars/addon1.jpg'
import imgBuggy from '@/assets/images/cars/addon2.jpg'
import imgPhoto from '@/assets/images/cars/addon3.jpg'
import imgShisha from '@/assets/images/cars/addon4.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'SafariAddons',
  data() {
    return {
      products: [
        {
          id: 'atv',
          title: '全地形车（150cc）',
          blurb: '加选项目',
          image: imgATV,
          badge: '行程：沙漠探险',
          priceHtml: 'AED <strong>140</strong> / 人',
          points: [
            '时长：沙丘骑行约 30 分钟',
            '含头盔与护目镜',
            '向导带队路线 + 安全讲解'
          ],
          notes: [
            '建议 16 岁以上骑行；未成年人可按营地规则与双人骑或随导体验。',
            '建议穿包脚鞋，长裤更舒适。'
          ],
          type: 'cart',
          cartName: 'ATV Ride'
        },
        {
          id: 'buggy',
          title: '沙滩车（双座）',
          blurb: '加选项目',
          image: imgBuggy,
          badge: '行程：沙漠探险',
          priceHtml: 'AED <strong>420</strong> / 辆',
          points: [
            '时长：沙丘驾驶约 30 分钟',
            '双座沙滩车（驾驶 + 乘客）',
            '含前导车/安全装备'
          ],
          notes: [
            '驾驶者需年满 18 岁并持有效驾照；乘客为未成年人需遵守营地政策。'
          ],
          type: 'cart',
          cartName: 'Buggy Ride'
        },
        {
          id: 'photo',
          title: '旅拍摄影套餐',
          blurb: '加选项目',
          image: imgPhoto,
          badge: '内容：精修 10 张 + 全部原片',
          priceHtml: 'AED <strong>150</strong> / 套',
          points: [
            '交付精修亮点 + 全部原片',
            '合作专业摄影师拍摄',
            '最适合日落沙丘与亲子合影'
          ],
          notes: [
            '若预订了「皇家沙漠过夜」，包含基础旅拍，无需重复加购。'
          ],
          type: 'cart',
          cartName: 'Photography'
        },
        {
          id: 'shisha',
          title: '水烟 / 饮品',
          blurb: '加选项目',
          image: imgShisha,
          badge: '行程：持牌营地可选',
          priceHtml: '价格：<strong>详情咨询</strong>',
          points: [
            '仅在持牌营地/区域供应',
            '软饮/茶咖与水烟可按需安排',
            '菜单与价格随营地与库存而异'
          ],
          notes: [
            '涉及酒水/水烟的供应受阿联酋牌照法规限制，具体以当日营地为准。',
            '请通过 WhatsApp 与我们确认可选项、价格与年龄政策。'
          ],
          type: 'wa'
        }
      ],

      emailToCopy: 'info@wanderwonderworlddubai.com',
      showWhatsappModal: false,
      showWechatModal: false,
      whatsappQR,
      wechatQR,

      faqs: [
        {
          question: 'ATV/沙滩车有保险吗？由谁运营？',
          answer:
            'ATV/沙滩车由我们持牌的第三方营地运营，并按阿联酋法规投保商业责任险；现场提供安全讲解、防护装备与带队路线。',
          open: false
        },
        {
          question: '需要驾照吗？',
          answer:
            'ATV（150cc）多数学员 16+ 可体验，无需小车驾照；沙滩车驾驶通常要求 18+ 且持有效驾照。现场可能查验证件。',
          open: false
        },
        {
          question: '孕客或有颈背问题的客人可以参加吗？',
          answer:
            '不建议。孕客、背/颈/脊椎有伤或近期大手术恢复期的客人请勿参加骑行类项目。',
          open: false
        },
        {
          question: '遇到天气或沙况不佳怎么办？',
          answer:
            '为安全起见，运营方可能调整线路/时长或改期/取消。我们会根据合作方政策为您改期或安排相应退款。',
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
    openWhatsappModal() { this.showWhatsappModal = true },
    openWechatModal() { this.showWechatModal = true },
    closeModals() { this.showWhatsappModal = false; this.showWechatModal = false },

    bookNow() { this.cart.open() },
    addToCart(name) { this.cart.add(name) },

    toggleFaq(index) { this.faqs[index].open = !this.faqs[index].open }
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
.whatsapp-wrapper { position: fixed; left: 7px; top: 75%; transform: translateY(-50%); z-index: 9999; }
.whatsapp-button {
  display: flex; align-items: center; background-color: white; padding: 1px 15px;
  border-radius: 100px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); text-decoration: none; transition: all 0.3s ease-in-out;
}
.whatsapp-button:hover { transform: scale(1.05); }
.whatsapp-button img { width: 58px; height: 58px; margin-right: 3px; }
.hover-reveal .whatsapp-text { max-width: 0; opacity: 0; overflow: hidden; transition: all 0.3s ease-in-out; }
.hover-reveal:hover .whatsapp-text { max-width: 200px; opacity: 1; margin-left: 10px; }

/* CTA row */
.cta-row-wrapper { max-width: 1000px; margin: 18px auto 6px; padding: 0 20px; }
.cta-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
@media (max-width: 900px){ .cta-row{ grid-template-columns: repeat(2,1fr);} }
@media (max-width: 520px){ .cta-row{ grid-template-columns: 1fr;} }

.cta-btn{
  height:56px; border:none; border-radius:12px; font-weight:700; cursor:pointer;
  transition: transform .08s ease, box-shadow .18s ease; box-shadow:0 4px 12px rgba(0,0,0,.08);
  display:inline-flex; align-items:center; justify-content:center; text-decoration:none;
}
.cta-btn:active{ transform: translateY(1px); }
.cta-gray  { background:hsl(65, 5%, 53%); color:hsl(0, 0%, 100%); }
.cta-green { background:hsl(136, 90%, 27%); color:hsl(0, 0%, 100%); }
.cta-red   { background:hsl(0, 93%, 32%); color:hsl(0, 0%, 100%); }
.cta-btn:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }

/* QR modal */
.qr-modal{ position:fixed; inset:0; background:rgba(0,0,0,.4); display:grid; place-items:center; z-index:2000; }
.qr-modal-box{ position:relative; background:#fff; border-radius:16px; padding:16px; width:min(90vw,520px); box-shadow:0 16px 32px rgba(0,0,0,.25); }
.qr-modal-box img{ width:100%; height:auto; display:block; border-radius:12px; }
.qr-close{ position:absolute; top:8px; right:10px; width:36px; height:36px; border-radius:50%; border:none; background:#f2f2f2; font-size:22px; line-height:1; cursor:pointer; }
.qr-close:hover{ background:#e9e9e9; }

/* Product cards */
.product{ max-width:1000px; margin:34px auto; padding:0 20px; }
.product h2{ font-size:1.6rem; margin:0 0 6px; }
.blurb{ color:#555; margin:0 0 14px; }
.product-grid{ display:grid; grid-template-columns: 1fr; gap:18px; }
@media (min-width: 820px){ .product-grid{ grid-template-columns:1fr; } }

.product-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.product-card img{ width:100%; height:340px; object-fit:cover; display:block; }
.pc-body{ padding:20px; }
.price-line{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.badge{ background:#eef2ff; color:#1f3a8a; border-radius:999px; padding:4px 10px; font-weight:700; font-size:.85rem; }
.price{ color:#b01b1b; font-weight:800; }
.price strong{ font-weight:800; }
.bullets{ margin:0; padding-left:18px; color:#444; line-height:1.6; }
.bullets li{ margin-bottom:6px; }

/* Buttons */
.btn-addcart{
  width:100%; height:44px; margin-top:12px; border:none; border-radius:10px; font-weight:700; cursor:pointer;
  background:hsl(0, 93%, 32%); color:#fff; transition: box-shadow .18s ease, transform .08s ease;
}
.btn-addcart:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }
.btn-addcart:active{ transform: translateY(1px); }

.btn-wa{
  width:100%; height:44px; margin-top:12px; border:none; border-radius:10px; font-weight:700; cursor:pointer;
  background:hsl(136, 90%, 27%); color:#fff; display:inline-flex; align-items:center; justify-content:center; text-decoration:none;
}
.btn-wa:hover{ box-shadow:0 8px 16px rgba(0,0,0,.12); }

/* Rules / Policy blocks */
.rules{ background:#f8f8f8; border-radius:12px; padding:16px; margin-top:18px; }
.rules h3{ margin:8px 0; }
.rules ul{ margin:0; padding-left:18px; line-height:1.6; }

/* Policy text card */
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
</style>
