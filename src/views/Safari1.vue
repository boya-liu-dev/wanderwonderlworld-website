<template>
  <div class="safari">
    <!-- Banner -->
    <div class="banner-container">
      <img :src="banner" alt="沙漠接送横幅" class="banner" />
      <div class="floating-logos">
        <img :src="logoGold" alt="金色标志" class="logo" />
        <img :src="logoText" alt="文字标志" class="logo-text" />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1>迪拜至臻冒险 — 沙漠探险之旅</h1>
      <p>用最地道的方式邂逅迪拜沙海。我们的精选沙漠行程覆盖清晨的活力越野、黄昏的金色落日，以及过夜营地的文化沉浸。每条线路都具备独特体验，您可按旅行风格自由选择。预订万德假日（WanderWonderWorld），以专业、顺畅且难忘的方式驶向沙丘深处。</p>
    </div>
    <div class="whatsapp-wrapper">
  <a
    href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
    class="whatsapp-button hover-reveal">
    <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
    <span class="whatsapp-text">需要帮助？点击咨询！</span>
  </a>
 </div>

    <!-- Cards with images (4 types of transfer) -->
    <div class="cards-container">
      <CarCard
  :image="car1"
  title="晨曦沙丘越野"
  subtitle="经典系列"
  tour="早晨私人团"
  duration="4.5小时"
  price="AED 500 起"
  link="/safari/regsafari1"
/>

<CarCard
  :image="car2"
  title="日落沙丘优选"
  subtitle="臻选系列"
  tour="日落私人团"
  duration="6小时"
  price="AED 700 起"
  link="/safari/regsafari1"
/>

<CarCard
  :image="car3"
  title="加长版沙丘刺激"
  subtitle="尊尚系列"
  tour="加长私人团"
  duration="7小时"
  price="AED 1100 起"
  link="/safari/upsafari1"
/>

<CarCard
  :image="car4"
  title="皇家沙漠过夜营"
  subtitle="皇室系列"
  tour="豪华过夜"
  duration="16小时"
  price="AED 2000 起"
  link="/safari/upsafari1"

/>
    <!-- Add-ons cards (same size / aligned with above) -->
    <div class="cards-container">
      <CarCard
        :image="addon1"
        title="全地形车（150cc）"
        subtitle="加选项目"
        tour="沙漠探险"
        duration="30分钟"
        price="AED 140 / 人"
        link="/safari/addon1"
      />

      <CarCard
        :image="addon2"
        title="沙滩车（双座）"
        subtitle="加选项目"
        tour="沙漠探险"
        duration="30分钟"
        price="AED 420 / 辆"
        link="/safari/addon1"
      />

      <CarCard
        :image="addon3"
        title="旅拍摄影套餐"
        subtitle="加选项目"
        tour="精修10张 + 全部原片"
        duration="—"
        price="AED 150 / 套"
        link="/safari/addon1"
      />

      <CarCard
        :image="addon4"
        title="水烟 / 饮品"
        subtitle="加选项目"
        tour="持牌营地可选"
        duration="—"
        price="详情咨询"
        link="/safari/addon1"
      />
    </div>


    </div>
        <!-- 产品列表 Text Card -->
    <div class="text-card">
      <h2>迪拜沙漠探险价目表</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th>沙漠项目</th>
            <th>时间/时长</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>晨曦沙丘越野｜经典系列</td>
            <td>08:00 – 12:30</td>
            <td><strong style="color:#b01b1b;">AED 500</strong></td>
          </tr>
          
          <tr>
            <td>日落沙丘优选｜臻选系列</td>
            <td>15:00 – 21:00</td>
            <td><strong style="color:#b01b1b;">AED 700</strong></td>
          </tr>

          <tr>
            <td>加长版沙丘刺激｜尊尚系列</td>
            <td>14:00 – 21:00</td>
            <td><strong style="color:#b01b1b;">AED 1100</strong></td>
          </tr>

          <tr>
            <td>皇家沙漠过夜营｜皇室系列</td>
            <td>15:00 – 09:00（+1 天）</td>
            <td><strong style="color:#b01b1b;">AED 2000</strong></td>
          </tr>
          <tr>
            <td>加选 全地形车（150cc）</td>
            <td>30min</td>
            <td><strong style="color:#b01b1b;">AED 140</strong></td>
          </tr>

          <tr>
            <td>加选 沙滩车（双座）</td>
            <td>30min</td>
            <td><strong style="color:#b01b1b;">AED 420</strong></td>
          </tr>
          <tr>
            <td>加选 旅拍摄影套餐</td>
            <td>——</td>
            <td><strong style="color:#b01b1b;">AED 150</strong></td>
          </tr>
          <tr>
            <td>水烟 / 酒精饮品</td>
            <td>——</td>
            <td><strong style="color:#b01b1b;">详见菜单</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4 CTA buttons -->
<div class="cta-row-wrapper">
  <div class="cta-row">
    <!-- 1. Email us（灰色） -->
    <button class="cta-btn cta-gray" @click="copyEmail">
      邮件联系我们
    </button>

    <!-- 2. WhatsApp us（弹窗显示二维码） -->
    <button class="cta-btn cta-green" @click="openWhatsappModal">
      WhatsApp 联系我们
    </button>

    <!-- 3. 微信扫一扫（弹窗显示二维码） -->
    <button class="cta-btn cta-green" @click="openWechatModal">
      微信联系我们
    </button>

    <!-- 4. Book now（跳转 contact） -->
    <button class="cta-btn cta-red" @click="bookNow">
      万德购物车
    </button>
  </div>
</div>

<!-- Email 复制成功的居中提示（3秒自动消失） -->
<div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
  <div class="center-toast-box">
    <p><strong>info@wanderwonderworlddubai.com</strong> 已复制到您的剪贴板</p>
  </div>
</div>

<!-- WhatsApp 二维码弹窗（右上角X关闭） -->
<div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
  <div class="qr-modal-box">
    <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
    <img :src="whatsappQR" alt="WhatsApp 二维码" />
  </div>
</div>

<!-- 微信 二维码弹窗（右上角X关闭） -->
<div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
  <div class="qr-modal-box">
    <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
    <img :src="wechatQR" alt="微信二维码" />
  </div>
</div>


    <!-- Full-width textual cards (no image, no buttons) -->
     <!-- FAQs Section -->
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

    <div class="text-card">
      <h2>难忘之旅：我们的迪拜沙漠体验</h2>
      <p>万德假日以安全、舒适且富有激情的方式，带您体验不同层次的沙漠之旅。从清晨温和的金色沙丘穿越到日落时分的越野冲沙，我们将刺激与文化融合。全程配备私人四驱座驾、专业司机兼中文讲解与甄选营地，为亲子、情侣与团队打造高品质、真实而不失高级感的体验。</p>
    </div>

    <div class="text-card">
      <h2>定制沙漠行程：私人团可选方案</h2>
      <p><strong>晨曦沙丘越野 | 经典系列：</strong> 半日行程，适合亲子、长者与短途旅客。清凉早晨冲沙、骆驼骑乘、沙板体验与简易茶点。</p>
      <p><strong>日落沙丘优选 | 臻选系列：</strong> 人气之选。下午冲沙、日落打卡、骆驼骑乘、营地文化表演与 BBQ 自助晚餐。</p>
      <p><strong>加长版沙丘刺激 | 尊尚系列：</strong> 为探险控而设。深入沙海的加长冲沙、尊贵营地 VIP 区、升级餐食与限定演出。</p>
      <p><strong>皇家沙漠过夜营 | 皇室系列：</strong> 终极奢享。高级 SUV 接送，私享冲沙、香槟迎宾（仅限持牌营地）、精致晚宴与豪华帐篷过夜，观星体验并含次日早餐。</p>
    </div>

    <div class="text-card">
      <h2>条款与细则</h2>
      <p><strong>名额与资源：</strong> 所有行程以车辆、司机与营地当日可用为准，建议提前预订以锁定日期与套餐。</p>
      <p><strong>车辆与安全：</strong> 行程使用保养良好的四驱车辆；为安全起见，车内禁止饮食与吸烟，请遵循司机指引。</p>
      <p><strong>取消规则：</strong> 取消需遵循预订政策，费用将依取消时间而定；详细规则以预订时说明为准。</p>
      <p><strong>未到场政策：</strong> 如未提前通知并未在约定地点集合，可能视为未到场并收取相应费用。</p>
      <p><strong>超时费用：</strong> 超出原定时间的加时将按车型与预订时长计费。</p>
      <p><strong>旺季附加：</strong> 旺季或节假日可能产生附加费，确认前会明确告知。</p>
      <p><strong>安全提示：</strong> 冲沙等活动请遵从司机指示；携带儿童与长者请提前告知，以便推荐合适行程；可按需提供儿童座椅。</p>
      <p><strong>加选项目与酒水：</strong> 全地形车/沙滩车、旅拍、水烟等可提前预订；含酒精饮品仅在持牌营地供应并遵守阿联酋法规。</p>
      <p><strong>导游说明：</strong> 司机并非持证导游；如需持证中文导游，可按需另行安排并收取费用。</p>
    </div>

    <div class="text-card">
      <h2>万德假日 · 沙漠探险服务</h2>
      <p>我们提供从刺激冲沙到奢华过夜的全系沙漠产品，兼顾安全、文化与服务品质。无论初访或高端定制，我们的方案均以国际标准执行，可靠专业。</p>
      <p>行程覆盖早晨、傍晚、加长与皇室过夜等多种选择；均配备现代四驱车辆与持证、经验丰富的司机团队，放心与尽兴并重。针对家庭、情侣、团队或企业团建，我们可为您定制专属线路与时间表。</p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/safaricar1.jpg'
import car2 from '@/assets/images/cars/safaricar2.jpg'
import car3 from '@/assets/images/cars/safaricar3.jpg'
import car4 from '@/assets/images/cars/safaricar4.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'
import addon1 from '@/assets/images/cars/addon1.jpg'
import addon2 from '@/assets/images/cars/addon2.jpg'
import addon3 from '@/assets/images/cars/addon3.jpg'
import addon4 from '@/assets/images/cars/addon4.jpg'
import { useWonderCart } from '@/stores/wonderCart'


export default {
  name: 'Safari',
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
      addon1,
      addon2,
      addon3,
      addon4,
      faqs: [
        {
          question: "迪拜沙漠团通常包含哪些内容？",
          answer: "一般包含四驱车辆酒店接送、专业司机带领的冲沙、沙丘拍照打卡、骆驼骑乘、沙板体验与简易茶点；按套餐不同，可包含营地现场表演与 BBQ 自助晚餐。奢华或过夜套餐将配备专属营地与升级餐饮。",
          open: false
        },
        {
          question: "沙漠行程通常需要多长时间？",
          answer: "时长取决于所选套餐：早晨团约 4–5 小时；傍晚团约 6 小时；过夜团含次日早餐，约 16 小时。",
          open: false
        },
        {
          question: "需要提前预订沙漠行程吗？",
          answer: "建议提前预订以确保日期与车辆，尤其在周末与旺季。当天临时报名可能无法保证名额。",
          open: false
        },
        {
          question: "参加沙漠团该如何着装？",
          answer: "建议轻便透气的休闲装，如薄长裤/短裤与透气上衣；鞋履可选运动鞋或凉鞋。冬季夜晚温差较大，建议携带薄外套。",
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
        // fallback
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
      this.showToast(); // 即使失败也给提示
    }
  },

  showToast() {
    this.showEmailToast = true;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.showEmailToast = false;
    }, 3000); // 3秒关闭
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
.safari {
  font-family: 'Poppins', sans-serif;
}

/* Banner */
.banner-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.floating-logos {
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.logo {
  height: 120px;
}
.logo-text {
  height: 130px;
  margin-top: -70px;
}

/* Intro */
.intro {
  max-width: 1000px;
  margin: 30px auto;
  text-align: left;
  padding: 0 20px;
}
.intro h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Card container for 4 car cards */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

/* Full-width Text Cards */
.text-card {
  background-color: #f8f8f8;
  margin: 50px auto;
  padding: 25px;
  border-radius: 8px;
  max-width: 1000px;
  line-height: 1.6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.text-card h2 {
  font-size: 1.6rem;
  margin-bottom: 15px;
}
.text-card p {
  margin-bottom: 30px;
}
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

.whatsapp-float img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
/* WhatsApp 悬浮按钮（保持原样） */
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
  max-width: 200px; opacity: 2; margin-left: 5px;
}

.hover-reveal:hover .whatsapp-text {
  max-width: 200px;
  opacity: 1;
  margin-left: 10px;
}
.price-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.price-table th,
.price-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.price-table th {
  background-color: #f8f8f8;
  font-weight: 600;
}

.price-table tr:nth-child(even) {
  background-color: #fafafa;
}
/* FAQs 样式 */
.faq-card {
  background: #f8f8f8;
  margin: 50px auto;
  padding: 25px;
  border-radius: 8px;
  max-width: 1000px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.faq-card h2 {
  font-size: 1.6rem;
  margin-bottom: 20px;
}

.faq-item {
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #333;
}

.faq-icon {
  font-size: 1rem;
  color: #b01b1b;
}

.faq-answer {
  margin-top: 10px;
  color: #555;
  line-height: 1.6;
}
/* —— 四个按钮容器 —— */
.cta-row-wrapper {
  max-width: 1000px;
  margin: 30px auto 10px;
}
.cta-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media (max-width: 900px) {
  .cta-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .cta-row {
    grid-template-columns: 1fr;
  }
}

/* —— 按钮通用形状（大小一致） —— */
.cta-btn {
  height: 56px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: transform .08s ease, box-shadow .18s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
}
.cta-btn:active {
  transform: translateY(1px);
}

/* 颜色款式 */
.cta-gray  { background:hsl(65, 5%, 53%); color:hsl(0, 0%, 100%); }
.cta-green { background:hsl(136, 90%, 27%); color:hsl(0, 0%, 100%); }
.cta-red   { background:hsl(0, 93%, 32%); color:hsl(0, 0%, 100%); }
.cta-btn:hover { box-shadow: 0 8px 16px rgba(0,0,0,.12); }

/* —— 居中提示（复制成功） —— */
.center-toast {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 2000;
}
.center-toast-box {
  background:#fff;
  padding:16px 22px;
  border-radius:12px;
  box-shadow: 0 12px 28px rgba(0,0,0,.18);
  max-width: 90vw;
  text-align: center;
}

/* —— 二维码弹窗 —— */
.qr-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.4);
  display: grid;
  place-items: center;
  z-index: 2000;
}
.qr-modal-box {
  position: relative;
  background:#fff;
  border-radius:16px;
  padding: 16px;
  width: min(90vw, 520px);
  box-shadow: 0 16px 32px rgba(0,0,0,.25);
}
.qr-modal-box img {
  width: 100%;
  height: auto;
  display: block;
  border-radius:12px;
}
.qr-close {
  position: absolute;
  top: 8px;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background:#f2f2f2;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}
.qr-close:hover { background:#e9e9e9; }

</style>
