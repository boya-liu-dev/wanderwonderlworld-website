<template>
  <div class="transfers">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="接送横幅"
        class="banner"
        id="transfers1Banner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="金色标志"
          class="logo"
          id="transfers1LogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="文字标志"
          class="logo-text"
          id="transfers1LogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="transfers1IntroTitle" data-c="@id">迪拜私人接送 — 轻松抵达</h1>
      <p id="transfers1IntroP1" data-c-html="@id">
        以舒适与便捷开启您的迪拜旅程。万德假日（WanderWonderWorld）为您提供口碑优选的私人接送与含司机用车服务，车队整洁保养到位，资深司机熟悉阿联酋道路。无论是无忧的机场接送，还是个性化城市观光与商务行程，我们都以专业、顺畅的服务，贴合您的出行心愿。
      </p>
    </div>

    <!-- WhatsApp 悬浮按钮 -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
        class="whatsapp-button hover-reveal"
        id="transfers1WhatsappLink"
        data-c-src="@id"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="transfers1WhatsappIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="transfers1WhatsappText" data-c="@id">
          需要帮助？点击咨询！
        </span>
      </a>
    </div>

    <!-- Cards with images (4 types of transfer) -->
    <div class="cards-container">
      <CarCard
        key-id="transfers1CardAirport"
        :image="car1"
        title="机场接送"
        subtitle="含司机用车"
        tour="迪拜市区"
        duration="以航班为准"
        price="AED 190 起"
        link="/transfers/short1"
      />

      <CarCard
        key-id="transfers1CardHalfDay"
        :image="car2"
        title="半日包车（含司机）"
        subtitle="含司机用车"
        tour="迪拜市区"
        duration="5小时"
        price="AED 300 起"
        link="/transfers/short1"
      />

      <CarCard
        key-id="transfers1CardFullDay"
        :image="car3"
        title="全日包车（含司机）"
        subtitle="含司机用车"
        tour="迪拜市区"
        duration="10小时"
        price="AED 510 起"
        link="/transfers/long1"
      />

      <CarCard
        key-id="transfers1CardAUH"
        :image="car4"
        title="迪拜至阿布扎比（观光）"
        subtitle="含司机用车"
        tour="阿布扎比"
        duration="10小时"
        price="AED 610 起"
        link="/transfers/long1"
      />
    </div>

    <!-- 产品列表 Text Card -->
    <div class="text-card">
      <h2 id="transfers1PriceTitle" data-c="@id">迪拜司导用车价目表</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th id="transfers1PriceThService" data-c="@id">司导服务</th>
            <th id="transfers1PriceThCarType" data-c="@id">车型</th>
            <th id="transfers1PriceThPrice" data-c="@id">价格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="transfers1PriceDXBTitle" data-c="@id">机场接送（DXB → 迪拜市区酒店）</td>
            <td id="transfers1PriceDXBSUVType" data-c="@id">SUV（4–6人）</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfers1PriceDXBSUV"
                data-c-num="@id"
                data-format="price-AED"
              >AED 190</strong>
            </td>
          </tr>
          <tr>
            <td id="transfers1PriceDXBEmpty" data-c="@id"></td>
            <td id="transfers1PriceDXBVanType" data-c="@id">商务车（7–10人）</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfers1PriceDXBVan"
                data-c-num="@id"
                data-format="price-AED"
              >AED 230</strong>
            </td>
          </tr>

          <tr>
            <td id="transfers1PriceAUHTitle" data-c="@id">机场接送（AUH → 迪拜市区酒店）</td>
            <td id="transfers1PriceAUHSUVType" data-c="@id">SUV（4–6人）</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfers1PriceAUHSUV"
                data-c-num="@id"
                data-format="price-AED"
              >AED 330</strong>
            </td>
          </tr>
          <tr>
            <td id="transfers1PriceAUHEmpty" data-c="@id"></td>
            <td id="transfers1PriceAUHVanType" data-c="@id">商务车（7–10人）</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfers1PriceAUHVan"
                data-c-num="@id"
                data-format="price-AED"
              >AED 380</strong>
            </td>
          </tr>

          <tr>
            <td id="transfers1PriceHalfTitle" data-c="@id">半日包车（含司机，5小时）</td>
            <td id="transfers1PriceHalfSUVType" data-c="@id">SUV（4–6人）</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfers1PriceHalfSUV"
                data-c-num="@id"
                data-format="price-AED"
              >AED 300</strong>
            </td>
          </tr>
          <tr>
            <td id="transfers1PriceHalfEmpty" data-c="@id"></td>
            <td id="transfers1PriceHalfVanType" data-c="@id">商务车（7–10人）</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfers1PriceHalfVan"
                data-c-num="@id"
                data-format="price-AED"
              >AED 330</strong>
            </td>
          </tr>

          <tr>
            <td id="transfers1PriceFullTitle" data-c="@id">全日包车（含司机，10小时）</td>
            <td id="transfers1PriceFullSUVType" data-c="@id">SUV（4–6人）</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfers1PriceFullSUV"
                data-c-num="@id"
                data-format="price-AED"
              >AED 510</strong>
            </td>
          </tr>
          <tr>
            <td id="transfers1PriceFullEmpty" data-c="@id"></td>
            <td id="transfers1PriceFullVanType" data-c="@id">商务车（7–10人）</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfers1PriceFullVan"
                data-c-num="@id"
                data-format="price-AED"
              >AED 550</strong>
            </td>
          </tr>

          <tr>
            <td id="transfers1PriceADTitle" data-c="@id">迪拜 → 阿布扎比观光（10小时）</td>
            <td id="transfers1PriceADSUVType" data-c="@id">SUV（4–6人）</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfers1PriceADSUV"
                data-c-num="@id"
                data-format="price-AED"
              >AED 610</strong>
            </td>
          </tr>
          <tr>
            <td id="transfers1PriceADEmpty" data-c="@id"></td>
            <td id="transfers1PriceADVanType" data-c="@id">商务车（7–10人）</td>
            <td>
              <strong
                style="color:#b01b1b;"
                id="transfers1PriceADVan"
                data-c-num="@id"
                data-format="price-AED"
              >AED 650</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4 CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="transfers1CTAEmail" data-c="@id">
          邮件联系我们
        </button>

        <button class="cta-btn cta-green" @click="openWhatsappModal" id="transfers1CTAWhatsApp" data-c="@id">
          WhatsApp 联系我们
        </button>

        <button class="cta-btn cta-green" @click="openWechatModal" id="transfers1CTAWechat" data-c="@id">
          微信联系我们
        </button>

        <button class="cta-btn cta-red" @click="bookNow" id="transfers1CTACart" data-c="@id">
          万德购物车
        </button>
      </div>
    </div>

    <!-- Email 复制成功提示 -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="transfers1EmailCopiedText" data-c-html="@id">
          <strong>info@wanderwonderworlddubai.com</strong> 已复制到您的剪贴板
        </p>
      </div>
    </div>

    <!-- WhatsApp 二维码弹窗 -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="transfers1WhatsappQR" data-c-src="@id" />
      </div>
    </div>

    <!-- 微信 二维码弹窗 -->
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="transfers1WechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- FAQs Section -->
    <div class="faq-card">
      <h2 id="transfers1FaqTitle" data-c="@id">常见问题</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span :id="`transfers1FaqQ${index+1}`" data-c="@id">{{ faq.question }}</span>
          <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p :id="`transfers1FaqA${index+1}`" data-c-html="@id">{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <!-- Full-width textual cards -->
    <div class="text-card">
      <h2 id="transfers1S1Title" data-c="@id">顺畅出行：我们的迪拜司导服务</h2>
      <p id="transfers1S1P1" data-c-html="@id">
        万德假日为您提供专业可靠的司导服务，专注舒适与安心。我们的车辆整洁保养良好，由持证且经验丰富的司机运营；从高效的机场接送到按需定制的一日行程，确保安全省心的出行体验。我们始终重视准点守时、车辆安全与优质服务。
      </p>
    </div>

    <div class="text-card">
      <h2 id="transfers1S2Title" data-c="@id">量身定制：私人用车与司机选择</h2>
      <p id="transfers1S2P1" data-c-html="@id"><strong>机场接送：</strong> 提供迪拜（DXB）与阿布扎比（AUH）机场至两地任意目的地的准点迎送服务，司机实时关注航班动态，航班延误亦可及时衔接。</p>
      <p id="transfers1S2P2" data-c-html="@id"><strong>半日/全日包车：</strong> 以小时或天为单位的司导服务，自由安排行程节奏，适用于城市观光、商务会议或家庭出游。</p>
      <p id="transfers1S2P3" data-c-html="@id"><strong>安全与舒适：</strong> 车辆行李空间充足；如需儿童座椅，请提前告知，我们将为您的家庭出行提供更周到的保障。</p>
      <p id="transfers1S2P4" data-c-html="@id"><strong>价格说明：</strong> 价格根据车型与用车时长透明计费；欢迎联系我们，根据您的具体计划提供详细报价。</p>
    </div>

    <div class="text-card">
      <h2 id="transfers1S3Title" data-c="@id">预订条款与细则</h2>
      <p id="transfers1S3P1" data-c-html="@id"><strong>服务名额：</strong> 所有服务以车辆与司机当日可用为准，建议提前预订以确保心仪日期与车型。</p>
      <p id="transfers1S3P2" data-c-html="@id"><strong>车辆使用：</strong> 司导服务适用于私人接送与日间观光；车内禁止饮食与吸烟。</p>
      <p id="transfers1S3P3" data-c-html="@id"><strong>取消政策：</strong> 取消需遵循预订政策以避免费用；具体条款将在预订时告知。</p>
      <p id="transfers1S3P4" data-c-html="@id"><strong>未到场（No-Show）：</strong> 如到约定上车点迟到且未事先通知，可能视为未到场并产生相应费用。</p>
      <p id="transfers1S3P5" data-c-html="@id"><strong>超时计费：</strong> 行程加时将按车型与原预订时长另行计费。</p>
      <p id="transfers1S3P6" data-c-html="@id"><strong>旺季附加费：</strong> 特定日期可能收取旺季附加费，预订时将明确说明。</p>
      <p id="transfers1S3P7" data-c-html="@id"><strong>导游说明：</strong> 司机并非持证导游，如需持证中文或英文导游，可按需另行安排并收取相应费用。</p>
    </div>

    <div class="text-card">
      <h2 id="transfers1S4Title" data-c="@id">万德假日的目的地服务</h2>
      <p id="transfers1S4P1" data-c-html="@id">
        作为迪拜持牌目的地管理公司（DMC），万德假日提供覆盖面广的旅游与交通解决方案。我们的含司机用车服务贯穿机场接送、城市观光、商务会务与家庭休闲行程，旨在为您带来专业顺畅的体验。
      </p>
      <p id="transfers1S4P2" data-c-html="@id">
        我们提供多样车型选择，包括豪华轿车、家庭宽体商务车与舒适旅游巴士；所有车辆均由专业司机全程协助。若涉及团体预订或复杂行程，我们的团队可为您定制与您愿景高度匹配的专属方案。
      </p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/carcard1.jpg'
import car2 from '@/assets/images/cars/carcard2.jpg'
import car3 from '@/assets/images/cars/carcard5.jpg'
import car4 from '@/assets/images/cars/carcard4.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'Transfers',
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
      faqs: [
        {
          question: "需要提前预订接送服务吗？",
          answer: "建议提前预订以确保车辆与司机的可用，并锁定您偏好的车型。",
          open: false
        },
        {
          question: "机场接机是否包含等候时间？",
          answer: "是的，机场接机包含最长 60 分钟免费等候；超出部分可能产生少量等候费用。",
          open: false
        },
        {
          question: "行程中可以临时延长用车吗？",
          answer: "可以，视当日车辆可用情况而定，并按小时收取加时费用。",
          open: false
        },
        {
          question: "价格是否包含景点门票或餐食？",
          answer: "不包含。报价仅涵盖车辆与司机服务；景点门票、餐食及个人消费不在内。",
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
/* （保持你的样式原样） */
.transfers {
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
