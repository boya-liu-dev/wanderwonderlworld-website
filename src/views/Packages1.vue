<template>
  <div class="packages">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="套餐横幅"
        class="banner"
        id="packagesBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="金色标志"
          class="logo"
          id="packagesLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="文字标志"
          class="logo-text"
          id="packagesLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="packagesIntroTitle" data-c="@id">迪拜假期套餐 — 私人定制 · 弹性安排</h1>
      <p id="packagesIntroP1" data-c-html="@id">
        用更聪明的方式规划您的迪拜之旅。我们的四款「纯陆地」私人套餐，将必看地标与「防暑节奏」巧妙结合：
        早晚户外，中午室内。老迪拜徒步（含持证中文导游）与水上的 <em>阿布拉</em> 小船体验为标准配置；
        全程由司机兼中文讲解随行。以「价值优先」为定价原则，覆盖成人与儿童价格、私人机场接送、甄选含早酒店、
        合规与认证车辆，让旅程顺畅安心。
      </p>
    </div>

    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
        class="whatsapp-button hover-reveal"
        id="packagesWhatsappLink"
        data-c-src="@id"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="packagesWhatsappIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="packagesWhatsappText" data-c="@id">需要帮助？点击咨询！</span>
      </a>
    </div>

    <!-- Cards (4 packages) -->
    <div class="cards-container">
      <CarCard
        key-id="packagesCard3N"
        :image="car1"
        title="迪拜3晚入门之旅"
        subtitle="行程套餐"
        tour="迪拜市区"
        duration="4天"
        price="成人 AED 849 起"
        link="/package/34nights1"
      />

      <CarCard
        key-id="packagesCard4N"
        :image="car2"
        title="4晚亲子优选"
        subtitle="行程套餐"
        tour="迪拜市区"
        duration="5天"
        price="成人 AED 1099 起"
        link="/package/34nights1"
      />

      <CarCard
        key-id="packagesCard5N"
        :image="car3"
        title="迪拜 + 阿布扎比5晚精华"
        subtitle="行程套餐"
        tour="迪拜 + 阿布扎比"
        duration="6天"
        price="成人 AED 1349 起"
        link="/package/56nights1"
      />

      <CarCard
        key-id="packagesCard6N"
        :image="car4"
        title="6晚臻选升级"
        subtitle="行程套餐"
        tour="迪拜 + 阿布扎比"
        duration="7天"
        price="成人 AED 1599 起"
        link="/package/56nights1"
      />
    </div>

    <!-- Price List -->
    <div class="text-card">
      <h2 id="packagesPriceTitle" data-c="@id">迪拜行程套餐价目表</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th id="packagesPriceThPkg" data-c="@id">套餐</th>
            <th id="packagesPriceThDur" data-c="@id">行程时长</th>
            <th id="packagesPriceThPrice" data-c="@id">价格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="packagesPrice3NTitle" data-c="@id">迪拜3晚入门之旅</td>
            <td id="packagesPrice3NDuration" data-c="@id">4天</td>
            <td>
              <strong style="color:#b01b1b;">
                <span id="packagesPrice3NAdultLabel" data-c="@id">成人</span>
                &nbsp;
                <span
                  id="packagesPrice3NAdult"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 849</span>
                &nbsp;|&nbsp;
                <span id="packagesPrice3NChildLabel" data-c="@id">儿童</span>
                &nbsp;
                <span
                  id="packagesPrice3NChild"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 669</span>
              </strong>
            </td>
          </tr>

          <tr>
            <td id="packagesPrice4NTitle" data-c="@id">4晚亲子优选</td>
            <td id="packagesPrice4NDuration" data-c="@id">5天</td>
            <td>
              <strong style="color:#b01b1b;">
                <span id="packagesPrice4NAdultLabel" data-c="@id">成人</span>
                &nbsp;
                <span
                  id="packagesPrice4NAdult"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 1099</span>
                &nbsp;|&nbsp;
                <span id="packagesPrice4NChildLabel" data-c="@id">儿童</span>
                &nbsp;
                <span
                  id="packagesPrice4NChild"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 919</span>
              </strong>
            </td>
          </tr>

          <tr>
            <td id="packagesPrice5NTitle" data-c="@id">迪拜 + 阿布扎比5晚精华</td>
            <td id="packagesPrice5NDuration" data-c="@id">6天</td>
            <td>
              <strong style="color:#b01b1b;">
                <span id="packagesPrice5NAdultLabel" data-c="@id">成人</span>
                &nbsp;
                <span
                  id="packagesPrice5NAdult"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 1349</span>
                &nbsp;|&nbsp;
                <span id="packagesPrice5NChildLabel" data-c="@id">儿童</span>
                &nbsp;
                <span
                  id="packagesPrice5NChild"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 1169</span>
              </strong>
            </td>
          </tr>

          <tr>
            <td id="packagesPrice6NTitle" data-c="@id">6晚臻选升级</td>
            <td id="packagesPrice6NDuration" data-c="@id">7天</td>
            <td>
              <strong style="color:#b01b1b;">
                <span id="packagesPrice6NAdultLabel" data-c="@id">成人</span>
                &nbsp;
                <span
                  id="packagesPrice6NAdult"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 1599</span>
                &nbsp;|&nbsp;
                <span id="packagesPrice6NChildLabel" data-c="@id">儿童</span>
                &nbsp;
                <span
                  id="packagesPrice6NChild"
                  data-c-num="@id"
                  data-format="price-AED"
                >AED 1419</span>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p
        style="margin-top:8px;font-size:0.95rem;color:#555;"
        id="packagesPriceFootnote"
        data-c-html="@id"
      >
        * 以上为每位价格，按双人/大床同住计算。已含 5% VAT。酒店将另收取「旅游迪拉姆税」（约 AED 10–20/间/晚）。
      </p>
    </div>

    <!-- CTA buttons (unchanged logic) -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="packagesCTAEmail" data-c="@id">邮件联系我们</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="packagesCTAWhatsApp" data-c="@id">WhatsApp 联系我们</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="packagesCTAWechat" data-c="@id">微信联系我们</button>
        <button class="cta-btn cta-red" @click="bookNow" id="packagesCTACart" data-c="@id">万德购物车</button>
      </div>
    </div>

    <!-- Toast & Modals -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="packagesEmailCopiedText" data-c-html="@id"><strong>info@wanderwonderworlddubai.com</strong> 已复制到您的剪贴板</p>
      </div>
    </div>

    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="packagesWhatsappQR" data-c-src="@id" />
      </div>
    </div>

    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="packagesWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="packagesFaqTitle" data-c="@id">常见问题</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span :id="`packagesFaqQ${index+1}`" data-c="@id">{{ faq.question }}</span>
          <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p :id="`packagesFaqA${index+1}`" data-c-html="@id">{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <!-- Copy blocks -->
    <div class="text-card">
      <h2 id="packagesS1Title" data-c="@id">按你的方式探索迪拜：我们的私人套餐</h2>
      <p id="packagesS1P1" data-c-html="@id">
        <strong>迪拜3晚入门之旅：</strong>
        老迪拜徒步（持证中文导游，约2小时）+ 传统 <em>阿布拉</em> 摆渡；其后可二选一：
        <em>迪拜之框</em> 或 <em>棕榈塔观景台 The View</em>。安排迪拜码头晚餐游船与
        晚间沙漠探险（亲子家庭可在 ≥48 小时提前通知下，改为更温和的早晨版本）。
      </p>

      <p id="packagesS1P2" data-c-html="@id">
        <strong>4晚亲子优选：</strong>
        第一天晚间抵达留足缓冲；沙漠探险顺延至第二日更有精力。现代迪拜半日游含
        哈利法塔 124/125 层（非高峰时段），晚间在 JBR 与 Bluewaters 悠闲漫步。
        可按需替换亲子友好项目（如水族馆）。
      </p>

      <p id="packagesS1P3" data-c-html="@id">
        <strong>迪拜 + 阿布扎比5晚精华：</strong>
        行程中段前往阿布扎比以平衡节奏：谢赫扎耶德大清真寺（入内参观；周五访客时段有限）与阿布扎比卢浮宫
        （通常周一闭馆；我们将据实调整）。返回迪拜后，结合老迪拜徒步 + 阿布拉与您
        预订好的哈利法塔时段，再配以码头晚餐游船。
      </p>

      <p id="packagesS1P4" data-c-html="@id">
        <strong>6晚臻选升级：</strong>
        沙漠探险 VIP 升级，亚特兰蒂斯水上乐园 & 失落的空间水族馆，另含一天自由活动（购物或泳池时光）。
        包含一日阿布扎比（大清真寺入内 + 总统府外苑或卢浮宫其一）。可选加购：迪拜码头日落私人游艇。
      </p>
    </div>

    <div class="text-card">
      <h2 id="packagesS2Title" data-c="@id">条款与细则（行程套餐）</h2>

      <p id="packagesS2P1" data-c-html="@id">
        <strong>价格与房型：</strong>
        纯陆地价按每位成人、双人/大床同住计算，<em>已含 5% VAT</em>。
        儿童（3–10 岁）默认不加床与大人同住；婴儿 0–2 岁免费（不占座/床）。
        酒店「旅游迪拉姆税」由住客于前台自付（约 AED 10–20/间/晚）。
        标准入住 15:00 / 退房 12:00；如需早入住/晚退房，视房态或需附加费。
      </p>

      <p id="packagesS2P2" data-c-html="@id">
        <strong>包含项目：</strong>
        私人往返机场接送（DXB），甄选含早酒店，<em>私人车辆 + 司机兼中文讲解</em>，
        <em>老迪拜徒步配持证中文导游（约2小时）</em>，套餐所列景点门票
        （如哈利法塔 124/125；The View/迪拜之框；卢浮宫/亚特兰蒂斯等以套餐为准），
        迪拜码头晚餐游船（<em>含私人接送</em>），晚间沙漠探险（如标注则为 VIP 升级），
        车载瓶装水。
      </p>

      <p id="packagesS2P3" data-c-html="@id">
        <strong>不含项目：</strong>
        国际机票、签证、个人旅行保险；除说明外的午/晚餐；酒精饮品；个人消费；
        自选项目/升级；除特别说明外，其他日的额外持证导游；旺季/活动附加费；
        单房差/加床费；行李员服务；自愿小费等。
      </p>

      <p id="packagesS2P4" data-c-html="@id">
        <strong>儿童座椅与安全：</strong>
        阿联酋法律要求婴幼儿使用合规安全座椅并单独占座。请在预订时告知实际需求数量；务必遵从当地法规。
      </p>

      <p id="packagesS2P5" data-c-html="@id">
        <strong>阿布扎比大清真寺着装：</strong>
        女士需遮盖头发、肩膀与腿部；男士须着长裤。安检严格，着装不合规可能被拒入。
        周五访客时段有限，我们会提前提醒并给出着装建议。
      </p>

      <p id="packagesS2P6" data-c-html="@id">
        <strong>斋月与旺季：</strong>
        斋月期间沙漠营地表演暂停；酒精供应受限；景点开放时间或有调整。
        新年夜等重大活动可能有强制性附加费用。
      </p>

      <p id="packagesS2P7" data-c-html="@id">
        <strong>改期与取消：</strong>
        ≥48 小时：免费改期/退款；24–48 小时：收取 50%；＜24 小时或未到场：收取 100%。
        不可退门票/酒店晚按供应商政策执行。不可抗力（如沙尘暴、暴雨）优先改期；如无法改期，仅收取不可追回成本。
      </p>
    </div>

    <div class="text-card">
      <h2 id="packagesS3Title" data-c="@id">万德假日 · 套餐服务说明</h2>
      <p id="packagesS3P1" data-c-html="@id">
        我们以「防暑节奏」设计行程（中午室内，黄金时段户外），标配老迪拜徒步 + 阿布拉；
        提供亲子友好的沙漠方案。WhatsApp 礼宾（08:00–22:00）、认证司机、干净营地、
        需提前预约的儿童座椅，以及「≥48 小时一次免费改期」，共同保障旅途顺滑与安全。
      </p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/tour1.jpg'
import car2 from '@/assets/images/cars/tour2.jpg'
import car3 from '@/assets/images/cars/tour3.jpg'
import car4 from '@/assets/images/cars/tour4.jpg'
import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'Packages',
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
          question: "套餐价格包含哪些内容？",
          answer:
            "私人往返机场接送、含早酒店、按行程配备的私人用车、所列景点门票（如哈利法塔124/125、The View/迪拜之框、码头晚餐游船等），以及晚间沙漠探险（亲子可改为更温和的早晨场）。为纯陆地产品，不含机票与签证。",
          open: false
        },
        {
          question: "成人与儿童价格如何适用？",
          answer:
            "成人价适用于 11 岁及以上；儿童价适用于 3–10 岁并与成人同房不加床；婴儿 0–2 岁免费（不占座/床）。加床与单房差按季节与酒店政策收取。",
          open: false
        },
        {
          question: "观光日程的先后顺序可以调整吗？",
          answer:
            "可以。我们为私人行程，可依据您的航班、季节与活动调整每日顺序。旺季/热门景点可能需要更换门票时段。",
          open: false
        },
        {
          question: "阿布扎比清真寺的着装要求会严格执行吗？",
          answer:
            "会。女士需遮盖头发、肩膀与腿部；男士需穿长裤。安检严格，我们会提前说明并提供着装建议。",
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
        this.showToast();
      }
    },
    showToast() {
      this.showEmailToast = true;
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.showEmailToast = false;
      }, 3000);
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
/* 保持现有样式，未改动 */
.safari { font-family: 'Poppins', sans-serif; }
.banner-container { position: relative; width: 100%; height: 300px; overflow: hidden; }
.banner { width: 100%; height: 100%; object-fit: cover; }
.floating-logos { position: absolute; top: 10px; left: 20px; display: flex; flex-direction: column; align-items: flex-start; }
.logo { height: 120px; }
.logo-text { height: 130px; margin-top: -70px; }

.intro { max-width: 1000px; margin: 30px auto; text-align: left; padding: 0 20px; }
.intro h1 { font-size: 2rem; font-weight: bold; margin-bottom: 10px; }

.cards-container { display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; justify-content: center; }

.text-card { background-color: #f8f8f8; margin: 50px auto; padding: 25px; border-radius: 8px; max-width: 1000px; line-height: 1.6; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.text-card h2 { font-size: 1.6rem; margin-bottom: 15px; }
.text-card p { margin-bottom: 30px; }

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

ton img { width: 58px; height: 58px; margin-right: 3px; }
.hover-reveal .whatsapp-text { max-width: 0; opacity: 0; overflow: hidden; transition: all 0.3s ease-in-out; }
.hover-reveal:hover .whatsapp-text { max-width: 200px; opacity: 1; margin-left: 10px; }

.price-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
.price-table th, .price-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
.price-table th { background-color: #f8f8f8; font-weight: 600; }
.price-table tr:nth-child(even) { background-color: #fafafa; }

.faq-card { background: #f8f8f8; margin: 50px auto; padding: 25px; border-radius: 8px; max-width: 1000px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.faq-card h2 { font-size: 1.6rem; margin-bottom: 20px; }
.faq-item { border-bottom: 1px solid #ddd; padding: 15px 0; cursor: pointer; }
.faq-question { display: flex; justify-content: space-between; font-weight: 600; color: #333; }
.faq-icon { font-size: 1rem; color: #b01b1b; }
.faq-answer { margin-top: 10px; color: #555; line-height: 1.6; }

.cta-row-wrapper { max-width: 1000px; margin: 30px auto 10px; }
.cta-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 900px) { .cta-row { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .cta-row { grid-template-columns: 1fr; } }

.cta-btn { height: 56px; border: none; border-radius: 12px; font-weight: 700; font-family: 'Poppins', sans-serif; cursor: pointer; transition: transform .08s ease, box-shadow .18s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.cta-btn:active { transform: translateY(1px); }
.cta-gray  { background:hsl(65, 5%, 53%); color:hsl(0, 0%, 100%); }
.cta-green { background:hsl(136, 90%, 27%); color:hsl(0, 0%, 100%); }
.cta-red   { background:hsl(0, 93%, 32%); color:hsl(0, 0%, 100%); }
.cta-btn:hover { box-shadow: 0 8px 16px rgba(0,0,0,.12); }

.center-toast { position: fixed; inset: 0; display: grid; place-items: center; z-index: 2000; }
.center-toast-box { background:#fff; padding:16px 22px; border-radius:12px; box-shadow: 0 12px 28px rgba(0,0,0,.18); max-width: 90vw; text-align: center; }

.qr-modal { position: fixed; inset: 0; background: rgba(0,0,0,.4); display: grid; place-items: center; z-index: 2000; }
.qr-modal-box { position: relative; background:#fff; border-radius:16px; padding: 16px; width: min(90vw, 520px); box-shadow: 0 16px 32px rgba(0,0,0,.25); }
.qr-modal-box img { width: 100%; height: auto; display: block; border-radius:12px; }
.qr-close { position: absolute; top: 8px; right: 10px; width: 36px; height: 36px; border-radius: 50%; border: none; background:#f2f2f2; font-size: 22px; line-height: 1; cursor: pointer; }
.qr-close:hover { background:#e9e9e9; }
</style>
