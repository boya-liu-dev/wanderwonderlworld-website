<template>
  <div class="safari">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="产品横幅"
        class="banner"
        id="cruiseZhBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="金色徽标"
          class="logo"
          id="cruiseZhLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="文字徽标"
          class="logo-text"
          id="cruiseZhLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="cruiseZhIntroTitle" data-c="@id">迪拜游船晚宴 — 夜色臻享与品质之选</h1>
      <p id="cruiseZhIntroP1" data-c-html="@id">
        提供四条经典夜游航线可选：迪拜河传统木船、Marina 码头天际线、迪拜水运河玻璃游船，以及
        Lotus 超级游艇。价格透明，升级清晰（上层甲板/靠窗座、VIP 休息区），酒店私家接送可选。
        可按需提供素食/耆那教餐；船上文娱遵循当地法规。电子确认单含登船码头地图与 24/7 紧急联系人，
        全程顺畅无忧。
      </p>
    </div>

    <div class="whatsapp-wrapper">
      <a
        id="cruiseZhWhatsappLink"
        data-c-src="@id"
        href="https://wa.me/971589831967?text=你好，万德假日迪拜！我想咨询游船晚宴。"
        class="whatsapp-button hover-reveal">
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp 图标"
          id="cruiseZhWhatsappIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="cruiseZhWhatsappText" data-c="@id">需要帮助？立即咨询！</span>
      </a>
    </div>

    <!-- Cards (4 packages) -->
    <div class="cards-container">
      <CarCard
        key-id="cruiseZhCardCreek"
        :image="car1"
        title="迪拜溪传统独桅帆船晚餐"
        subtitle="游船观光"
        tour="迪拜溪（Al Seef）"
        duration="1.5–2 小时"
        price="AED 85 起"
        link="/city/sndcruise1"
      />

      <CarCard
        key-id="cruiseZhCardMarina"
        :image="car2"
        title="迪拜码头独桅帆船晚餐"
        subtitle="游船观光"
        tour="迪拜码头"
        duration="2 小时"
        price="AED 115 起"
        link="/city/sndcruise1"
      />

      <CarCard
        key-id="cruiseZhCardCanal"
        :image="car3"
        title="水道玻璃游船晚餐"
        subtitle="游船观光"
        tour="迪拜运河"
        duration="2–2.5 小时"
        price="AED 149 起"
        link="/city/sndcruise1"
      />

      <CarCard
        key-id="cruiseZhCardLotus"
        :image="car4"
        title="Lotus 巨型游艇晚餐"
        subtitle="游船观光"
        tour="迪拜码头 / 港湾"
        duration="3 小时"
        price="AED 239 起"
        link="/city/sndcruise1"
      />
    </div>

    <!-- Price List -->
    <div class="text-card">
      <h2 id="cruiseZhPriceTitle" data-c="@id">迪拜游船晚宴价格表</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th id="cruiseZhPriceThProduct" data-c="@id">游船产品</th>
            <th id="cruiseZhPriceThTime" data-c="@id">时间/时长</th>
            <th id="cruiseZhPriceThTicket" data-c="@id">仅门票价格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="cruiseZhPriceCreekTitle" data-c="@id">迪拜溪传统独桅帆船晚餐</td>
            <td id="cruiseZhPriceCreekTime" data-c="@id">90–120 分钟</td>
            <td>
              <strong style="color:#b01b1b;">
                成人
                <span id="cruiseZhPriceCreekAdult" data-c-num="@id" data-format="price-AED">85</span>
                |
                儿童
                <span id="cruiseZhPriceCreekChild" data-c-num="@id" data-format="price-AED">70</span>
              </strong>
            </td>
          </tr>
          <tr>
            <td id="cruiseZhPriceMarinaTitle" data-c="@id">迪拜码头独桅帆船晚餐</td>
            <td id="cruiseZhPriceMarinaTime" data-c="@id">2 小时</td>
            <td>
              <strong style="color:#b01b1b;">
                成人
                <span id="cruiseZhPriceMarinaAdult" data-c-num="@id" data-format="price-AED">115</span>
                |
                儿童
                <span id="cruiseZhPriceMarinaChild" data-c-num="@id" data-format="price-AED">95</span>
              </strong>
            </td>
          </tr>
          <tr>
            <td id="cruiseZhPriceCanalTitle" data-c="@id">水道玻璃游船晚餐</td>
            <td id="cruiseZhPriceCanalTime" data-c="@id">约 2 小时</td>
            <td>
              <strong style="color:#b01b1b;">
                成人
                <span id="cruiseZhPriceCanalAdult" data-c-num="@id" data-format="price-AED">149</span>
                |
                儿童
                <span id="cruiseZhPriceCanalChild" data-c-num="@id" data-format="price-AED">119</span>
              </strong>
            </td>
          </tr>
          <tr>
            <td id="cruiseZhPriceLotusTitle" data-c="@id">Lotus 巨型游艇晚餐</td>
            <td id="cruiseZhPriceLotusTime" data-c="@id">3 小时</td>
            <td>
              <strong style="color:#b01b1b;">
                成人
                <span id="cruiseZhPriceLotusAdult" data-c-num="@id" data-format="price-AED">239</span>
                |
                儿童
                <span id="cruiseZhPriceLotusChild" data-c-num="@id" data-format="price-AED">189</span>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p
        id="cruiseZhPriceNote"
        data-c-html="@id"
        style="margin-top:8px;font-size:0.95rem;color:#555;"
      >
        * 以上价格为<strong>每人</strong>计。婴儿（0–2 岁）免费。仅门票不含酒店接送与座位升级。
        可选私家往返接送（迪拜城区）：轿车 1–4 人 AED 180 / MPV 5–7 人 AED 220 / 面包车 10–14 人 AED 350
        （Jebel Ali/JVC/DIP 额外 +AED 40–60；从沙迦出发 +AED 100）。可按需免费提供儿童安全座椅（数量有限；依据阿联酋法规）。
      </p>
    </div>

    <!-- CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="cruiseZhCTAEmail" data-c="@id">邮件咨询</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="cruiseZhCTAWhatsApp" data-c="@id">WhatsApp 咨询</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="cruiseZhCTAWechat" data-c="@id">微信咨询</button>
        <button class="cta-btn cta-red" @click="bookNow" id="cruiseZhCTACart" data-c="@id">万德购物车</button>
      </div>
    </div>

    <!-- Toast & Modals -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="cruiseZhEmailCopiedText" data-c-html="@id">
          <strong>info@wanderwonderworlddubai.com</strong> 已复制到剪贴板
        </p>
      </div>
    </div>

    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="关闭" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="cruiseZhWhatsappQR" data-c-src="@id" />
      </div>
    </div>

    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="关闭" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="cruiseZhWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="cruiseZhFaqTitle" data-c="@id">常见问题</h2>
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

    <!-- Copy blocks -->
    <div class="text-card">
      <h2 id="cruiseZhS1Title" data-c="@id">水上良宵，从这里挑选：航线总览</h2>
      <p id="cruiseZhS1P1" data-c-html="@id"><strong>迪拜河传统木船晚宴：</strong>乘坐阿拉伯多乌木船（Dhow），欣赏老迪拜天际线；国际自助晚餐，含瓶装水/软饮；按规定开放时有 <em>Tanoura</em> 民俗表演。亲民价位、氛围轻松。可付费锁定<em>上层甲板</em>或<em>靠窗座</em>，加购登船前老城迷你步行＋阿布拉小船，或私家酒店接送。</p>
      <p id="cruiseZhS1P2" data-c-html="@id"><strong>迪拜码头 Marina 木船晚宴：</strong>人气夜景航线——Marina、JBR 与 Bluewaters 一线尽收眼底。船型可能为传统木船或现代玻璃船（由运营方安排）。含自助晚餐与软饮，按规定开放文娱。可选上层/靠窗座位与生日/纪念日桌面布置。</p>
      <p id="cruiseZhS1P3" data-c-html="@id"><strong>迪拜水运河玻璃游船晚宴：</strong>高端玻璃全景船，途经水运河与商务湾桥群，大片落地视野，安静而带“轻法餐”氛围；有机会优先安排窗景位（以当日情况为准）。可加购登船前速览 Dubai Frame 门票。</p>
      <p id="cruiseZhS1P4" data-c-html="@id"><strong>Lotus 超级游艇晚宴：</strong>畅游 3 小时，迪拜大型游艇之一；现场 DJ、多层甲板、开放式料理台与休闲沙发区。可选 VIP 沙发区；在许可日期可加购 Premium Drinks 酒水套餐。</p>
    </div>

    <div class="text-card">
      <h2 id="cruiseZhS2Title" data-c="@id">条款与细则（游船晚宴）</h2>
      <p id="cruiseZhS2P1" data-c-html="@id"><strong>登船与时间：</strong>标准航线（河/码头/水运河）20:00 登船、20:30 开航，航行约 90–120 分钟。Lotus 超级游艇 19:00 报到，19:30–22:30 航行。迟到将视作未到场，由船方认定。</p>
      <p id="cruiseZhS2P2" data-c-html="@id"><strong>费用包含：</strong>仅门票包含船上座位、自助晚餐（清真；可选素/荤；耆那/纯素需提前告知）、瓶装水/软饮，以及在允许时段的演出。含税。酒精饮品仅在持牌船只与非斋月/非禁酒日提供。</p>
      <p id="cruiseZhS2P3" data-c-html="@id"><strong>接送服务：</strong>酒店私家往返接送可按价目表加购。可按需免费提供儿童/增高座椅（数量有限）。车辆内禁止饮食与吸烟。</p>
      <p id="cruiseZhS2P4" data-c-html="@id"><strong>座位安排：</strong>先到先得或由运营方统筹。付费升级保证区域（上层/靠窗/VIP），不保证具体桌号。同行家庭尽量安排同桌。</p>
      <p id="cruiseZhS2P5" data-c-html="@id"><strong>天气/航线：</strong>海事管控、风力或水路交通可能调整航线/泊位（如运河瀑布临时关闭）。如运营方取消，可改期或全额退款；若仅变更航线但照常航行，则不予退款。</p>
      <p id="cruiseZhS2P6" data-c-html="@id"><strong>改期与取消：</strong>河/码头/运河：≥24 小时免费；12–24 小时收 50%；&lt;12 小时或未到场收 100%。Lotus/VIP：≥48 小时免费；24–48 小时收 50%；&lt;24 小时收 100%。节庆夜（跨年/国庆/大型活动）条款更严且可能加价。</p>
      <p id="cruiseZhS2P7" data-c-html="@id"><strong>合规与安全：</strong>船只持 DMCA/RTA 执照，配备救生衣与专业船员；接送车辆已投保并由 RTA 持证司机驾驶。</p>
    </div>

    <div class="text-card">
      <h2 id="cruiseZhS3Title" data-c="@id">为何选择在万德假日预订游船</h2>
      <p id="cruiseZhS3P1" data-c-html="@id">
        票价有竞争力，升级选项清晰，客服响应及时。提供 08:00–22:00 WhatsApp 礼宾服务，可选私家酒店接送（免费儿童座椅按需预留），节日/纪念日加项（蛋糕、桌面布置、摄影），并在规则时窗内提供一次免费改期（视余位而定），
        让您的夜晚从确认到登船都更省心。
      </p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/boat1.jpg'
import car2 from '@/assets/images/cars/boat2.jpg'
import car3 from '@/assets/images/cars/boat3.jpg'
import car4 from '@/assets/images/cars/boat4.jpg'
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
          question: "票价包含哪些内容？",
          answer:
            "包含船上座位、自助晚餐（清真；可选素/荤；耆那/纯素需提前告知）、瓶装水/软饮，以及在法律/季节允许时的表演。已含税。接送、酒水（限持牌船只）、座位升级与节日布置为自选加购。",
          open: false
        },
        {
          question: "在哪里登船？何时到达？",
          answer:
            "电子确认单会显示具体码头与地图链接。河/码头/运河航线：20:00 登船、20:30 开航。Lotus 超级游艇：19:00 报到，19:30 开航，全程 3 小时。请准时抵达——迟到将由船方视作未到场。",
          open: false
        },
        {
          question: "是否提供酒店接送？",
          answer:
            "提供——迪拜市区私家往返：轿车 1–4 人 AED 180，MPV 5–7 人 AED 220，面包车 10–14 人 AED 350。Jebel Ali/JVC/DIP 额外 +AED 40–60；从沙迦出发 +AED 100。儿童座椅可免费预留（数量有限）。",
          open: false
        },
        {
          question: "船上是否提供酒水？",
          answer:
            "仅在持牌船只/许可日期提供（如 Lotus 可加购 Premium Drinks）。斋月及官方禁酒日不供应含酒精饮品，遵循阿联酋相关法规。",
          open: false
        },
        {
          question: "取消/改期政策是什么？",
          answer:
            "河/码头/运河：≥24h 免费；12–24h 收 50%；<12h 或未到场收 100%。Lotus/VIP：≥48h 免费；24–48h 收 50%；<24h 收 100%。节庆夜条款更严。",
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

.text-card { background-color: #f8f8f8; margin: 50px auto; padding: 25px; border-radius: 8px; max-width: 1000px; line-height: 1.6; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); }
.text-card h2 { font-size: 1.6rem; margin-bottom: 15px; }
.text-card p { margin-bottom: 30px; }

.whatsapp-wrapper { position: fixed; left: 7px; top: 75%; transform: translateY(-50%); z-index: 9999; }
.whatsapp-button { display: flex; align-items: center; background-color: white; padding: 1px 15px; border-radius: 100px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); text-decoration: none; transition: all 0.3s ease-in-out; }
.whatsapp-button:hover { transform: scale(1.05); }
.whatsapp-button img { width: 58px; height: 58px; margin-right: 3px; }
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

.cta-btn { height: 56px; border: none; border-radius: 12px; font-weight: 700; font-family: 'Poppins', sans-serif; cursor: pointer; transition: transform .08s ease, box-shadow .18s ease; box-shadow: 0 4px 12px rgba(0,0,0,.08); }
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
