<template>
  <div class="details-page">
    <!-- Banner -->
    <div class="banner-container">
      <img src="@/assets/images/banner7.jpg" alt="沙漠冲沙横幅" class="banner" />
      <div class="floating-logos">
        <img src="@/assets/images/logo-www-gold.png" alt="金色徽标" class="logo" />
        <img src="@/assets/images/logo-text.png" alt="文字徽标" class="logo-text" />
      </div>
    </div>

    <!-- Title -->
    <div class="intro">
      <h1>加长版沙丘刺激 & 皇家沙漠过夜营</h1>
      <p>
        尊享私享沙漠行程，由持证沙漠司机驾驶、商业保险车辆运营。可选择更深度的红沙区加长体验，
        或奢雅的皇家过夜线路。ATV 150cc 与双座沙地越野车等加项可在持牌中心加购；如需 Shisha/酒水请联系我们。
        皇家系列含「旅拍摄影包」免费赠送。
      </p>
    </div>

    <!-- 左侧悬浮 WhatsApp（与其他页面一致） -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=你好，万德假日迪拜！我想咨询尊享沙漠行程。"
        class="whatsapp-button hover-reveal"
      >
        <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp 图标" />
        <span class="whatsapp-text">需要帮助？立即咨询！</span>
      </a>
    </div>

    <!-- 4 CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail">邮件咨询</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal">WhatsApp 咨询</button>
        <button class="cta-btn cta-green" @click="openWechatModal">微信咨询</button>
        <!-- 改：直接打开购物车 -->
        <button class="cta-btn cta-red" @click="bookNow">万德购物车</button>
      </div>
    </div>

    <!-- Toast: email copied -->
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

    <!-- Products: one merged card per product -->
    <section v-for="p in products" :key="p.id" class="product">
      <h2>{{ p.title }}</h2>
      <p class="blurb">{{ p.blurb }}</p>

      <div class="product-grid">
        <div class="product-card">
          <img :src="p.variantA.image" :alt="p.title + ' 4x4'" />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge">{{ p.variantA.badge }}</span>
              <span class="price">AED {{ p.variantA.price }} 起</span>
            </div>
            <ul class="bullets">
              <li v-for="(b,i) in p.variantA.points" :key="i">{{ b }}</li>
            </ul>

            <!-- 新增：Add to Cart（白字红底） -->
            <button class="btn-addcart" @click="addToCart(p.cartName)">加入购物车</button>
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
        <p class="it-note">行程时间与路线可能因交通、天气或营地规定调整。</p>
      </div>

      <!-- What’s included / Good to know / Add-ons 引导 -->
      <div class="rules">
        <h3>费用包含</h3>
        <ul>
          <li v-for="(i,idx) in p.includes" :key="'inc-'+idx">{{ i }}</li>
        </ul>
        <h3>预订须知</h3>
        <ul>
          <li v-for="(n,idx) in p.notes" :key="'note-'+idx">{{ n }}</li>
        </ul>
        <div class="addons-cta">
          <router-link to="/safari/addon1" class="btn"> 
            可选加项（ATV 150cc、双座越野车、旅拍、Shisha/酒水）
          </router-link>
        </div>
      </div>
    </section>

    <!-- Policy / Terms block（与 regsafari 一致） -->
    <div class="text-card">
      <h2>服务政策与保险摘要</h2>
      <ul class="policy">
        <li>私享 4×4 越野车＋持证沙漠司机；车辆均为商业车辆保险（至少含第三者责任险）。建议另购个人旅行保险。</li>
        <li>接送时间窗：请在通知的上车时间前后预留 ±15 分钟以便路线/交通调度；司机可调整停靠顺序以避开拥堵。</li>
        <li>健康与安全：沙丘冲沙不建议孕妇、严重心颈背问题客人及婴幼儿参加。4 岁以下必须使用儿童安全座椅（需提前预约）。</li>
        <li>斋月及宗教日期：现场表演与酒精饮品按阿联酋法规限制或暂停。</li>
        <li>酒水与水烟：仅限持牌营地提供并受年龄限制；如需 Shisha/酒水价格请联系我们。</li>
        <li>ATV/越野沙地车为第三方持牌中心运营，按其安全规范与保险执行；必须佩戴头盔，年龄/身高限制适用。</li>
        <li>免费取消政策以确认单为准；逾期取消/未到场视情况最高可收取 100% 费用。</li>
        <li>天气与不可抗力：遇沙尘/强降雨等，行程将适当调整为轻活动或优先改期；若部分服务无法提供，将据实部分退款。</li>
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
import imgExtended from '@/assets/images/cars/safaricar3.jpg'
import imgRoyal from '@/assets/images/cars/safaricar4.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// 仅为购物车新增
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'SafariUp',
  data() {
    return {
      // ====== 高端双产品 ======
      products: [
        {
          id: 'extended',
          title: '加长版沙丘刺激（尊尚系列）',
          blurb:
            '14:00–21:00（约 7 小时）。更深红沙区加长冲沙，日落美拍，尊享营地升级晚餐与 VIP 座位。',
          cartName: '加长版沙丘刺激',
          variantA: {
            image: imgExtended,
            badge: '私享 4×4（至多 5 人）',
            price: 1100,
            points: [
              '迪拜酒店上门接送',
              '80–90 分钟深红沙区加长冲沙',
              '日落拍照停留，司机协助取景',
              '尊享/VIP 营地区域，预留席位',
              '升级版晚餐＋专属节目（依营地安排）',
              '车载瓶装水；营地含软饮',
              '可加购：ATV 150cc / 双座越野车（冲沙前/后安排）'
            ]
          },
          itinerary: [
            '14:00–14:30 时间窗于酒店/住所接人。',
            '前往 Lahbab/Al Badayer 沙漠，安全简报；放气进入软沙驾驶。',
            '加长冲沙 80–90 分钟，多次高沙丘拍照停留。',
            '高脊线观景日落；手机/相机拍摄协助。',
            '进入尊享营地区域：迎宾茶点；可选短程骑骆驼与沙板体验。',
            'VIP 座位，升级晚餐与专属表演；约 21:00 返回迪拜。'
          ],
          includes: [
            '资深沙漠司机＋私享 4×4',
            '加长冲沙（80–90 分钟）＋日落拍照停留',
            '尊享营地入场＋升级晚餐与表演',
            '饮用水＋营地软饮（依营地政策）'
          ],
          notes: [
            '深沙丘需更高驾驶经验；为安全起见，部分日期可能采用双车编队。',
            'ATV/越野沙地车为第三方加项，按其安全规范与保险执行。',
            '健康限制适用（孕妇/心颈背问题不建议参加）；可按需预留儿童座椅。',
            '斋月及特定宗教日期：节目/酒精服务受限或暂停。'
          ]
        },
        {
          id: 'royal',
          title: '皇家沙漠过夜营（皇室系列）',
          blurb:
            '15:00–次日 09:00（约 16 小时）。豪华 SUV、舒适观景沙丘行驶、私享日落停留、皇室营地区域精致晚宴＋豪华露营过夜。',
          cartName: '皇家沙漠过夜营',
          variantA: {
            image: imgRoyal,
            badge: '豪华 SUV（至多 4 人）',
            price: 2000,
            points: [
              '着装整齐的专职司机＋豪华 SUV（路虎揽胜/雷克萨斯 LX 或同级）',
              '车载冷毛巾与软饮',
              '65–75 分钟舒适观景沙丘行驶，重视平稳与视野',
              '私享日落观景点，策划式拍照时刻',
              '皇室/私享营地区域，桌边服务＋精致晚宴',
              '豪华帐篷过夜（依营地配备独立卫浴/私卫），篝火与观星',
              '晨曦观日出＋现煮早餐',
              '赠送「旅拍摄影包」（精修 10 张＋全片原图）',
              '可加购：ATV 150cc / 双座越野车；Shisha/酒水—详情咨询'
            ]
          },
          itinerary: [
            '15:00 时间窗豪华 SUV 与专职司机上门接送；提供冰毛巾与饮品。',
            '抵达沙漠放气后进行 65–75 分钟舒适观景沙丘行驶，沿途拍照停留。',
            '私享日落拍照点，定制拍摄体验。',
            '进入皇室/私享营地区域：迎宾香槟/无酒精鸡尾酒（以营地牌照为准）与桌边服务。',
            '精致晚宴与优选节目（依日程与法规）。',
            '豪华帐篷过夜；篝火与观星；可用私卫/独立卫浴（依营地配置）。',
            '破晓观日出与轻徒步；享用新鲜烹制早餐。',
            '约 09:00 返回迪拜。'
          ],
          includes: [
            '豪华 SUV ＋ 专职司机',
            '观景沙丘行驶＋私享日落拍照停留',
            '皇室/私享营地区域，含精致晚宴与早餐',
            '免费赠送旅拍摄影包',
            '瓶装水与软饮；酒精饮品仅在营地持牌且法规允许时提供'
          ],
          notes: [
            '酒精供应以营地牌照/日期为准；斋月及特定日期酒精与节目受限或暂停。',
            '房量有限——建议提前预订。',
            '如有儿童同行请提前告知以便铺位安排；行李空间有限（建议每位 1 件过夜包）。',
            'ATV/越野沙地车为第三方加项，安全规范与年龄限制适用。'
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
          question: '皇家系列是否包含酒水？',
          answer:
            '是否提供酒精饮品取决于营地牌照与当日规定。部分皇家营地含指定饮品；但在斋月及特定日期不提供酒精。预订时我们将为您确认。',
          open: false
        },
        {
          question: '摄影包是否包含？',
          answer:
            '是的，「皇家沙漠过夜营」免费赠送旅拍摄影包（精修 10 张＋全片原图）。其他系列则为可选加项。',
          open: false
        },
        {
          question: '这些尊享行程能否加购 ATV 或越野沙地车？',
          answer:
            '可以。ATV（150cc）与双座越野车可在持牌第三方中心加购；需遵守安全简报、头盔佩戴与年龄/身高规定。',
          open: false
        },
        {
          question: '加长冲沙是否安全？',
          answer:
            '由资深沙漠司机执行并预先规划路线以确保安全。但深沙丘的先天属性不适合孕妇或有心颈背问题的客人参加。',
          open: false
        }
      ]
    }
  },
  computed: {
    // 仅新增：获取购物车实例
    cart() {
      return useWonderCart()
    }
  },
  methods: {
    // FAQs
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open
    },

    // CTA actions（Email 按钮保持原逻辑）
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

    // 新增：加入购物车（只传产品名）
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
.product{ max-width:1000px; margin:34px auto; padding:0 20px; }
.product h2{ font-size:1.6rem; margin:0 0 6px; }
.blurb{ color:#555; margin:0 0 14px; }

/* 单列、左对齐 */
.product-grid{
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}
.product-card{ background:#fff; border:1px solid #e6e6e6; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.product-card img{ width:100%; height:240px; object-fit:cover; display:block; }
.pc-body{ padding:20px; }
.price-line{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.badge{ background:#eef2ff; color:#1f3a8a; border-radius:999px; padding:4px 10px; font-weight:700; font-size:.85rem; }
.price{ color:#b01b1b; font-weight:800; }

.bullets{ margin:0; padding-left:18px; color:#444; line-height:1.6; }
.bullets li{ margin-bottom:6px; }

/* 新增：Add to Cart 按钮（白字红底） */
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
.faq-item{ border-bottom:1px solid #ddd; padding:14px 0; cursor:pointer; }
.faq-question{ display:flex; justify-content:space-between; font-weight:600; color:#333; }
.faq-answer{ margin-top:8px; color:#555; }
.faq-icon{ color:#b01b1b; }

/* ===== Itinerary card ===== */
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
