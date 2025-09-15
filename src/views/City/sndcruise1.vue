<template>
  <div class="packages-56n">
    <!-- Banner -->
    <div class="banner-container">
      <img
        :src="banner"
        alt="游船套餐横幅"
        class="banner"
        id="pkg56ZhBanner"
        data-c-src="@id"
      />
      <div class="floating-logos">
        <img
          :src="logoGold"
          alt="金色标志"
          class="logo"
          id="pkg56ZhLogoGold"
          data-c-src="@id"
        />
        <img
          :src="logoText"
          alt="文字标志"
          class="logo-text"
          id="pkg56ZhLogoText"
          data-c-src="@id"
        />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1 id="pkg56ZhIntroTitle" data-c="@id">迪拜游船晚宴 — 夜色臻享与品质之选</h1>
      <p id="pkg56ZhIntroP1" data-c-html="@id">
        提供四条经典夜游航线可选：迪拜溪传统木船、Marina 码头天际线、迪拜水运玻璃游船，以及
        Lotus 超级游艇。价格透明（仅票/可选私接送），并可升级上层甲板/靠窗桌/VIP 休息区。
        可按需提供素食/耆那教餐；演出在法律允许日期进行。电子确认单含登船码头地图与 24/7
        紧急联系人，轻松登船，无忧出行。
      </p>
    </div>

    <!-- Left floating WhatsApp -->
    <div class="whatsapp-wrapper">
      <a
        href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I'm%20interested%20in%20your%20dhow%20cruises."
        class="whatsapp-button hover-reveal"
      >
        <img
          src="@/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          id="pkg56ZhWhatsappIcon"
          data-c-src="@id"
        />
        <span class="whatsapp-text" id="pkg56ZhWhatsappText" data-c="@id">需要帮助？点击咨询！</span>
      </a>
    </div>

    <!-- CTA buttons -->
    <div class="cta-row-wrapper">
      <div class="cta-row">
        <button class="cta-btn cta-gray" @click="copyEmail" id="pkg56ZhCTAEmail" data-c="@id">邮件联系我们</button>
        <button class="cta-btn cta-green" @click="openWhatsappModal" id="pkg56ZhCTAWhatsApp" data-c="@id">WhatsApp 联系我们</button>
        <button class="cta-btn cta-green" @click="openWechatModal" id="pkg56ZhCTAWechat" data-c="@id">微信联系我们</button>
        <button class="cta-btn cta-red" @click="bookNow" id="pkg56ZhCTACart" data-c="@id">万德购物车</button>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="showEmailToast" class="center-toast" role="status" aria-live="polite">
      <div class="center-toast-box">
        <p id="pkg56ZhEmailCopiedText" data-c-html="@id"><strong>{{ emailToCopy }}</strong> 已复制到您的剪贴板</p>
      </div>
    </div>

    <!-- QR Modals -->
    <div v-if="showWhatsappModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="whatsappQR" alt="WhatsApp 二维码" id="pkg56ZhWhatsappQR" data-c-src="@id" />
      </div>
    </div>
    <div v-if="showWechatModal" class="qr-modal" aria-modal="true" role="dialog">
      <div class="qr-modal-box">
        <button class="qr-close" aria-label="Close" @click="closeModals">×</button>
        <img :src="wechatQR" alt="微信二维码" id="pkg56ZhWechatQR" data-c-src="@id" />
      </div>
    </div>

    <!-- ===== Packages (4 sections) ===== -->
    <section v-for="p in products" :key="p.id" class="product">
      <h2 :id="`pkg56Zh_${p.id}Title`" :data-c="'@id'">{{ p.title }}</h2>
      <p class="blurb" :id="`pkg56Zh_${p.id}Blurb`" :data-c-html="'@id'">{{ p.blurb }}</p>

      <div class="product-grid">
        <div class="product-card">
          <img
            :src="p.variantA.image"
            :alt="p.title"
            :id="`pkg56Zh_${p.id}Image`"
            :data-c-src="'@id'"
          />
          <div class="pc-body">
            <div class="price-line">
              <span class="badge" :id="`pkg56Zh_${p.id}Badge`" :data-c="'@id'">{{ p.variantA.badge }}</span>
              <span class="price" :id="`pkg56Zh_${p.id}Price`" :data-c="'@id'">{{ p.variantA.price }}</span>
            </div>
            <ul class="bullets">
              <li
                v-for="(b,i) in p.variantA.points"
                :key="i"
                :id="`pkg56Zh_${p.id}Point_${i}`"
                :data-c="'@id'"
              >
                {{ b }}
              </li>
            </ul>
            <!-- Add to Cart -->
            <button
              class="btn-addcart"
              @click="addToCart(p.cartName)"
              :id="`pkg56Zh_${p.id}AddCart`"
              :data-c="'@id'"
            >加入万德购物车</button>
          </div>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="itinerary-card">
        <h3 :id="`pkg56Zh_${p.id}ItineraryTitle`" :data-c="'@id'">参考行程</h3>
        <ul>
          <li
            v-for="(step, sIdx) in p.itinerary"
            :key="'it-'+p.id+'-'+sIdx"
            :id="`pkg56Zh_${p.id}It_${sIdx}`"
            :data-c="'@id'"
          >
            {{ step }}
          </li>
        </ul>
        <p class="it-note" :id="`pkg56Zh_${p.id}ItNote`" :data-c="'@id'">
          时间可能因海事管制、景点时段与季节活动而调整。
        </p>
      </div>

      <!-- What’s included / Good to know -->
      <div class="rules">
        <h3 :id="`pkg56Zh_${p.id}IncTitle`" :data-c="'@id'">费用包含</h3>
        <ul>
          <li
            v-for="(i,idx) in p.includes"
            :key="'inc-'+idx"
            :id="`pkg56Zh_${p.id}Inc_${idx}`"
            :data-c="'@id'"
          >
            {{ i }}
          </li>
        </ul>
        <h3 :id="`pkg56Zh_${p.id}NoteTitle`" :data-c="'@id'">预订须知</h3>
        <ul>
          <li
            v-for="(n,idx) in p.notes"
            :key="'note-'+idx"
            :id="`pkg56Zh_${p.id}Note_${idx}`"
            :data-c="'@id'"
          >
            {{ n }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Global Policy / Terms -->
    <div class="text-card">
      <h2 id="pkg56ZhPolicyTitle" data-c="@id">价格与预订政策</h2>
      <ul class="policy">
        <li id="pkg56ZhPolicy_0" data-c="@id">仅票为按人计价。婴儿 0–2 免费（不占座/床）。儿童 3–10 按儿童价；11 岁及以上按成人价。</li>
        <li id="pkg56ZhPolicy_1" data-c="@id">迪拜溪/码头/水道：20:00 登船，20:30 开航（约 90–120 分）。Lotus：19:00 报到，19:30–22:30 航行。</li>
        <li id="pkg56ZhPolicy_2" data-c="@id">可选迪拜市区往返私接：轿车 1–4 人 AED 180 · MPV 5–7 人 AED 220 · Van 10–14 人 AED 350。Jebel Ali/JVC/DIP +AED 40–60；沙迦出发 +AED 100。儿童座椅可免费提供（数量有限；依法必须）。</li>
        <li id="pkg56ZhPolicy_3" data-c="@id">演出在允许日期进行；斋月及官方禁酒日表演暂停且不供应酒精。</li>
        <li id="pkg56ZhPolicy_4" data-c="@id">座位先到先得或由船方分配。付费升级保证区域（上层/靠窗/VIP），不承诺具体桌号。</li>
        <li id="pkg56ZhPolicy_5" data-c="@id">改期/取消：溪/码头/水道 ≥24h 免费；12–24h 50%；&lt;12h 或未到场 100%。Lotus/VIP ≥48h 免费；24–48h 50%；&lt;24h 100%。跨年等活动夜条款更严格并附加费用。</li>
        <li id="pkg56ZhPolicy_6" data-c="@id">天气/航线：海事交通、风力或临时封航可能改变航线/靠泊。若运营方取消，可改期或全退；若调整航线仍开航，则不退费。</li>
        <li id="pkg56ZhPolicy_7" data-c="@id">所有船只受 DMCA/RTA 监管并配备救生衣与专业船员；接送车辆已投保且由 RTA 持证司机驾驶。</li>
      </ul>
    </div>

    <!-- FAQs -->
    <div class="faq-card">
      <h2 id="pkg56ZhFaqTitle" data-c="@id">常见问题</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span :id="`pkg56ZhFaqQ_${index}`" :data-c="'@id'">{{ faq.question }}</span>
          <span class="faq-icon">{{ faq.open ? "▲" : "▼" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p :id="`pkg56ZhFaqA_${index}`" :data-c="'@id'">{{ faq.answer }}</p>
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
import imgCreek from '@/assets/images/cars/boat1.jpg'
import imgMarina from '@/assets/images/cars/boat2.jpg'
import imgCanal from '@/assets/images/cars/boat3.jpg'
import imgLotus from '@/assets/images/cars/boat4.jpg'

import whatsappQR from '@/assets/images/WWD-Whatsapp-code.jpg'
import wechatQR from '@/assets/images/Wechat-code1.jpg'

// cart
import { useWonderCart } from '@/stores/wonderCart'

export default {
  name: 'Package56Nights',
  data() {
    return {
      banner, logoGold, logoText,
      whatsappQR, wechatQR,
      emailToCopy: 'info@wanderwonderworlddubai.com',
      showEmailToast: false,
      showWhatsappModal: false,
      showWechatModal: false,
      toastTimer: null,

      // ===== Four dhow cruise products =====
      products: [
        {
          id: 'creek',
          cartName: 'Creek Classic Dhow Dinner',
          title: '迪拜溪传统独桅帆船晚餐（Al Seef / Dubai Creek）',
          blurb: '传统木船与遗产天际线，性价比之选。20:00 登船 · 20:30 开航 · 航行约 90–120 分钟。起点友好、氛围轻松。',
          variantA: {
            image: imgCreek,
            badge: '拼船 · 支持仅票',
            price: '成人 AED 85 · 儿童 AED 70 · 婴儿免费',
            points: [
              '传统独桅木船：下层空调舱 + 上层露天甲板',
              '国际自助餐（含素/荤；可按需提供耆那教/纯素）',
              '含水/软饮 + 茶/咖啡',
              '背景音乐与旋转舞（依法允许时）',
              '座位先到先得或由船方分配',
              '可选：上层甲板/靠窗位保留与私人接送'
            ]
          },
          itinerary: [
            '20:00 抵达 Al Seef / Creek 码头登船（电子确认单含精确码头）。',
            '20:30 开航 · 夜游溪畔天际线与传统木船。',
            '自助晚餐 + 水/软饮；依法允许时表演旋转舞。',
            '22:00–22:30 返航靠岸 · 如预订接送则安排送回。'
          ],
          includes: [
            '约 90–120 分钟传统木船拼船晚宴巡游。',
            '清真国际自助餐（含素/荤；可预订耆那教/纯素）。',
            '水、软饮、茶/咖啡。',
            '依法允许时的船上表演（如旋转舞）。',
            '电子确认单含登船地图与 24/7 紧急联系人。',
            '旅行社公众责任保险。'
          ],
          notes: [
            '座位升级（付费）：上层甲板保留 +AED 20/人；下层靠窗/双人桌 +AED 25/人（依船型而定）。',
            '可选迪拜市区往返私接：轿车 1–4 人 AED 180 · MPV 5–7 人 AED 220 · Van 10–14 人 AED 350；Jebel Ali/JVC/DIP +AED 40–60；沙迦出发 +AED 100。',
            '加购：老迪拜微徒步 + 阿布拉（45–60 分）成人 +AED 80 / 儿童 +AED 50；小蛋糕 0.5kg AED 95（1kg AED 160）；旅拍 45 分 AED 249（48 小时交付 20 张精修）。',
            '当日销售至约 17:30–18:00 截止，视席位与付款情况而定。'
          ]
        },
        {
          id: 'marina',
          cartName: 'Dubai Marina Dhow Dinner',
          title: '迪拜码头独桅帆船晚餐（JBR & Bluewaters 景观）',
          blurb: '最受欢迎的天际线航线，景致优于溪流线。20:00 登船 · 20:30 开航 · 约 90–120 分钟。运营方安排传统木船或现代玻璃船。',
          variantA: {
            image: imgMarina,
            badge: '拼船 · 支持仅票',
            price: '成人 AED 115 · 儿童 AED 95 · 婴儿免费',
            points: [
              '夜游路线：Marina → JBR → Bluewaters',
              '国际自助 + 水/软饮',
              '依法允许时为现场/录播表演（旋转舞或歌手）',
              '下层空调舱 + 上层露天甲板 / 全景玻璃窗',
              '可升级上层或靠窗（+AED 25/人）',
              '可加购生日/纪念日桌面布置'
            ]
          },
          itinerary: [
            '20:00 抵达迪拜码头（Harbour / Pier 7 一带，以确认单为准）。',
            '20:30 沿码头水道驶向 JBR 与 Bluewaters。',
            '自助晚餐、夜景拍照、依法允许时观看表演。',
            '22:00–22:30 返航下船 · 如预订接送则安排送回。'
          ],
          includes: [
            '传统木船或现代玻璃船拼船巡游（约 90–120 分钟）。',
            '国际自助晚餐；含水与软饮。',
            '依法允许时的娱乐节目（如旋转舞或驻唱）。',
            '下层空调舱与上层露天甲板 / 全景玻璃窗。',
            '电子确认单含登船地图与 24/7 紧急联系人。'
          ],
          notes: [
            '升级上层或靠窗位 +AED 25/人（名额有限）。',
            '可加购布置：生日/纪念日气球与桌面布置 AED 120；蛋糕/摄影同溪流线。',
            '私接送价格矩阵与溪流线一致。'
          ]
        },
        {
          id: 'canal',
          cartName: 'Dubai Water Canal Glassboat Dinner',
          title: '水道玻璃游船晚餐（商务湾 • 宽容之桥）',
          blurb: '差异化精品航线，现代水道风光与灯光桥；航线可能因海事交通调整。20:00 登船 · 20:30 开航 · 约 120 分钟。',
          variantA: {
            image: imgCanal,
            badge: '精品玻璃船 · 支持仅票',
            price: '成人 AED 149 · 儿童 AED 119 · 婴儿免费',
            points: [
              '现代玻璃船体，环幕视野',
              '国际自助；含水与软饮',
              '更安静的「轻法餐」氛围（表演依日期而异）',
              '商务湾与多座灯光桥；穿越瀑布段受闸门管制',
              '有空位时优先安排家庭/情侣靠窗',
              '可选靠窗双人桌保留（+AED 30/人 · 名额有限）'
            ]
          },
          itinerary: [
            '20:00 抵达 Dubai Festival City / Business Bay（以确认单为准）。',
            '20:30 沿水道与商务湾多桥航行。',
            '玻璃船上享用自助餐；背景音乐相伴。',
            '22:30 左右返航 · 下船 · 如预订接送则安排送回。'
          ],
          includes: [
            '现代玻璃船拼船巡游（约 120 分钟）。',
            '国际自助；含水与软饮。',
            '背景音乐；娱乐政策依运营商/日期而异。',
            '电子确认单含登船地图与 24/7 紧急联系人。',
            '旅行社公众责任保险。'
          ],
          notes: [
            '靠窗双人桌保留 +AED 30/人（名额有限）。',
            '可加购行前迪拜之框门票：成人 +AED 65 / 儿童 +AED 30（如预订接送可与接送打包）。',
            '私接送价格矩阵与溪流线一致。'
          ]
        },
        {
          id: 'lotus',
          cartName: 'Lotus Mega Yacht Dinner',
          title: 'Lotus 巨型游艇晚餐（迪拜码头/港湾）',
          blurb: '3 小时大型高端体验：现场 DJ、多层甲板与现场烹饪台。19:00 报到 · 19:30–22:30 航行。以优价带来旗舰体验。',
          variantA: {
            image: imgLotus,
            badge: '高端 · 3 小时',
            price: '成人 AED 239 · 儿童 AED 189 · 婴儿免费',
            points: [
              '迪拜公开售票中体量领先的晚宴游艇之一',
              '国际自助 + 现场烹饪台',
              '含软饮（矿泉水/软饮/茶/咖啡）',
              '依法允许时配现场 DJ 与舞者',
              '多重室内休息厅 + 室外甲板',
              '可选 VIP 休息区/沙发区与高端酒水套餐'
            ]
          },
          itinerary: [
            '19:00 抵达 Dubai Harbour / Marina 报到（以确认单为准）。',
            '19:30 开航 · 3 小时畅游天际线。',
            '自助与现场烹饪；依法允许时 DJ 与舞池开放。',
            '22:30 返航下船 · 如预订接送则安排送回。'
          ],
          includes: [
            'Lotus 巨型游艇 3 小时晚宴体验。',
            '国际自助 + 现场烹饪台。',
            '软饮（矿泉水/软饮/茶/咖啡）。',
            '依法允许时之娱乐表演。',
            '电子确认单含登船地图与 24/7 紧急联系人。'
          ],
          notes: [
            '高端酒水套餐（仅限持牌日期）：+AED 99/成人（需出示证件；斋月/官方禁酒日不可售）。',
            'VIP 休息区/沙发区：+AED 120/人（名额有限）。',
            '私接送价格矩阵与溪流线一致。',
            '取消条款较拼船木船更严格（详见下方政策）。'
          ]
        }
      ],

      // FAQs
      faqs: [
        {
          question: '票价包含什么？',
          answer: '含船票席位、自助晚餐（清真；含素/荤；可按需提供耆那教/纯素）、水与软饮，以及依法允许时的船上表演。税费已含。酒店接送、酒精饮品（限持牌船期）、座位升级、布置与摄影为自选加购。',
          open: false
        },
        {
          question: '在哪里登船？需要提前多久到达？',
          answer: '电子确认单会标注精确码头与地图链接。溪/码头/水道建议 20:00 登船、20:30 开航；Lotus 19:00 报到，19:30–22:30 航行。迟到通常视为未到场，由船方条款执行。',
          open: false
        },
        {
          question: '是否提供酒店接送与儿童座椅？',
          answer: '可提供迪拜市区往返私接（本页列有价格矩阵）。儿童/增高座椅可免费预约（数量有限），并为阿联酋法律要求。',
          open: false
        },
        {
          question: '船上是否提供酒精饮品？',
          answer: '仅持牌船期供应，且斋月/官方禁酒日不提供。Lotus 可在持牌日期加购高端酒水套餐。',
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
.packages-56n { font-family: 'Poppins', sans-serif; }

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
