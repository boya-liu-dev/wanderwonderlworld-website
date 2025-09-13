<template>
  <!-- Overlay -->
  <div v-if="cart.isOpen" class="wc-overlay" @click.self="cart.close()">
    <div class="wc-modal" role="dialog" aria-modal="true" aria-label="WonderCart">
      <!-- Header -->
      <div class="wc-head">
        <h3 class="wc-title">
          <img :src="cartIcon" alt="" class="wc-title-icon" />
          <span>万德购物车</span>
        </h3>
        <button class="wc-close" aria-label="Close" @click="cart.close">×</button>
      </div>

      <!-- Body -->
      <div class="wc-body">
        <!-- Selected items -->
        <div class="wc-section">
          <h4>已选清单</h4>

          <div v-if="!cart.items.length" class="wc-empty">
            购物车此时空空如也 — 但请放心您仍然可以提交此表格来概略性咨询。
          </div>

          <div v-else class="wc-chips">
            <span v-for="it in cart.items" :key="getId(it)" class="wc-chip">
              {{ getName(it) }}
              <button class="wc-chip-x" @click="cart.remove(it)" aria-label="remove">×</button>
            </span>
          </div>
        </div>

        <!-- Your details -->
        <div class="wc-section">
          <h4>您的联系方式</h4>

          <label class="wc-l">如何称呼您</label>
          <input v-model.trim="cart.form.name" class="wc-inp" placeholder="e.g. Alex" />

          <label class="wc-l">
            电子邮箱 <span class="req">*</span>
          </label>
          <input
            v-model.trim="cart.form.email"
            class="wc-inp"
            :class="{ err: emailErr }"
            placeholder="name@example.com"
            inputmode="email"
          />
          <p v-if="emailErr" class="field-err">请输入正确的电子邮箱格式。</p>

          <div class="wc-grid-2">
            <div>
              <label class="wc-l">国际区号</label>
              <input v-model.trim="cart.form.phoneCc" class="wc-inp" placeholder="+1,+44,+971,etc." />
            </div>
            <div>
              <label class="wc-l">电话号码</label>
              <input v-model.trim="cart.form.phoneNumber" class="wc-inp" placeholder="5xxxxxxx" />
            </div>
          </div>

          <label class="wc-l">
            旅行时间 (DD-MM-YYYY) <span class="req">*</span>
          </label>
          <input
            type="date"
            class="wc-inp"
            :class="{ err: dateErr }"
            v-model="cart.form.travelDate"
            :min="todayISO"
            max="2050-12-31"
          />
          <p v-if="dateErr" class="field-err">请选择一个从今天起算的日期。</p>

          <label class="wc-l">
            您的咨询内容 <span class="req">*</span>
          </label>
          <textarea
            v-model.trim="cart.form.message"
            class="wc-inp"
            :class="{ err: msgRequiredErr || msgProfanityErr }"
            rows="4"
            placeholder="告诉我们您的出行计划, 接您的地点, 有什么特殊要求..."
            :maxlength="MESSAGE_LIMIT"
            @input="enforceMsgLimit"
          ></textarea>

          <div class="wc-count">
            {{ (cart.form.message || '').length }}/{{ MESSAGE_LIMIT }}
          </div>

          <p v-if="msgRequiredErr" class="field-err">您需要填写咨询内容才能提交咨询表。</p>
          <p v-else-if="msgProfanityErr" class="field-err">请您移除不恰当的文字。</p>

          <p class="wc-hint">通过提交本次咨询表，我同意万德假日通过我提供的信息联系我。</p>

          <div class="wc-logos">
            <img :src="logoGold" alt="WanderWonderWorld Gold Logo" class="wc-logo-gold" />
            <img :src="logoText" alt="WanderWonderWorld Text Logo" class="wc-logo-text" />
          </div>
        </div>
      </div>

      <!-- Footer actions -->
      <div class="wc-foot">
        <button class="wc-btn wc-light" @click="cart.clear" :disabled="!cart.items.length">清除全部</button>
        <button class="wc-btn wc-primary" @click="onSubmit" :disabled="submitDisabled">提交咨询</button>
      </div>

      <!-- After text -->
      <div class="wc-after">
        <p>
          我们通常会在 <strong>3个工作日内</strong>通过发送电子邮件回复您的讯息；如果您没收到邮件，请检查垃圾箱。也可快速联系：
        </p>
        <div class="wc-links">
          <a href="mailto:info@wanderwonderworlddubai.com">邮件联系</a>
          <a href="https://wa.me/971589831967" target="_blank" rel="noopener">WhatsApp 我们</a>
          <a href="/#wechat" @click.prevent="openWechat">微信扫一扫</a>

          <!-- WeChat QR modal -->
          <div v-if="showWechat" class="wc-qr-overlay" @click.self="closeWechat">
            <div class="wc-qr-box">
              <button class="wc-qr-close" aria-label="Close" @click="closeWechat">×</button>
              <img :src="wechatQR" alt="WeChat QR" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { addEnquiry, queueMail } from '@/firebase' // 最小改动：加入发信队列
import { useWonderCart } from '@/stores/wonderCart'
import wechatQR from '@/assets/images/Wechat-code1.jpg'
import cartIcon from '@/assets/images/wondercart.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'

export default {
  name: 'WonderCartModal1',
  setup() {
    const cart = useWonderCart()

    // === Message limit (400 chars) ===
    const MESSAGE_LIMIT = 400
    const enforceMsgLimit = (e) => {
      const v = (e?.target?.value ?? '').slice(0, MESSAGE_LIMIT)
      if (v !== cart.form.message) cart.form.message = v
    }

    // === Helpers for chip text/id ===
    const safeParse = (s) => { try { return JSON.parse(s) } catch { return null } }
    const getName = (it) => (typeof it === 'string' ? (safeParse(it)?.name ?? it) : (it?.name ?? String(it)))
    const getId   = (it) => (typeof it === 'string' ? (safeParse(it)?.id   ?? it) : (it?.id   ?? String(it)))

    // Date lower bound (today)
    const todayISO = new Date().toISOString().slice(0, 10)

    // Validations
    const emailErr = computed(() => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((cart.form.email || '').trim()))
    const dateErr  = computed(() => {
      const v = cart.form.travelDate
      if (!v) return true
      const d = new Date(v + 'T00:00:00')
      const min = new Date(todayISO + 'T00:00:00')
      const max = new Date('2050-12-31T00:00:00')
      return !(d >= min && d <= max)
    })
    const badWords = [
      'fuck','shit','bitch','asshole','dumb','trash','cunt','scam','eat dog','kill','sex',
      'chink','ching','chang','Mao','chong','communist','Trump','racist','suicide','ccp',
      'xijinping','Tiananmen','hell','bastard','third-rate','douchebag','covid','flu','bomb','virus',
      '妈','逼','操','垃圾','傻逼','去死','精神','毛泽东','习近平','枪毙','共产','支那','民主','赔钱','六四','自杀','王八','跳楼','新冠','911','boya','炸弹','独立','刘吉利','刘博雅'
    ]
    const msgRequiredErr = computed(() => !(cart.form.message && cart.form.message.trim().length > 0))
    const msgProfanityErr = computed(() => {
      const m = (cart.form.message || '').toLowerCase()
      return badWords.some(w => m.includes(w))
    })
    const submitDisabled = computed(() =>
      emailErr.value || dateErr.value || msgRequiredErr.value || msgProfanityErr.value || !cart.canSubmitNow()
    )

    // —— 邮件内容模板（中文） ——
    const esc = (s='') =>
      String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&#39;'}[m]))

    const buildHtmlZh = (p, id) => {
      const rows = (p.items || []).map((x,i)=>`
        <tr>
          <td>${i+1}</td>
          <td>${esc(x.title || '')}</td>
          <td>${esc(x.id || '')}</td>
        </tr>`).join('')
      return `
        <h3>新的咨询${id ? ' #' + id : ''}</h3>
        <p><b>姓名：</b>${esc(p.contact?.name || '')}<br/>
           <b>邮箱：</b>${esc(p.contact?.email || '')}<br/>
           <b>电话：</b>${esc(p.contact?.phone || '')}<br/>
           <b>出行日期：</b>${esc(p.travelDate || '')}</p>
        <p><b>留言：</b><br/>${esc(p.message || '').replace(/\n/g,'<br>')}</p>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead><tr><th>序号</th><th>标题</th><th>ID</th></tr></thead>
          <tbody>${rows || '<tr><td colspan="3">没有选择任何项目</td></tr>'}</tbody>
        </table>`
    }

    const buildTextZh = (p, id) => {
      const items = (p.items || []).map((x,i)=>`${i+1}. ${x.title || ''} (id:${x.id || ''})`).join('\n') || '没有选择任何项目'
      return `新的咨询${id ? ' #' + id : ''}
姓名: ${p.contact?.name || ''}
邮箱: ${p.contact?.email || ''}
电话: ${p.contact?.phone || ''}
出行日期: ${p.travelDate || ''}

留言:
${p.message || ''}

项目清单:
${items}
`
    }

    async function onSubmit() {
      if (submitDisabled.value) return

      const payload = {
        items: cart.items.map(i => {
          const obj = typeof i === 'string' ? safeParse(i) || { id: i, name: String(i) } : i
          return { id: obj.id, title: obj.name }
        }),
        contact: {
          name: cart.form.name || '',
          email: (cart.form.email || '').trim(),
          phone: [cart.form.phoneCc || '', cart.form.phoneNumber || ''].filter(Boolean).join(' ')
        },
        travelDate: cart.form.travelDate,
        message: (cart.form.message || '').trim()
      }

      try {
        // 1) 写入 /enquiries（后台追踪）
        const ref = await addEnquiry(payload)

        // 2) 写入 /mail 触发 Trigger Email 扩展
        const subject = `新咨询 — ${payload.contact.name || '访客'} — ${payload.items.length} 项`
        await queueMail({
          to: 'info@wanderwonderworlddubai.com',
          replyTo: payload.contact.email || 'info@wanderwonderworlddubai.com',
          subject,
          html: buildHtmlZh(payload, ref?.id),
          text: buildTextZh(payload, ref?.id)
        })

        cart.markSubmitted()
        cart.toast('您的咨询已提交，我们会尽快联系您。')
        cart.close()
      } catch (e) {
        console.error(e)
        cart.toast('提交失败，请稍后再试。')
      }
    }

    // WeChat modal
    const showWechat = ref(false)
    const openWechat  = () => { showWechat.value = true }
    const closeWechat = () => { showWechat.value = false }

    return {
      cart,
      MESSAGE_LIMIT, enforceMsgLimit,
      getName, getId,
      todayISO, emailErr, dateErr, msgRequiredErr, msgProfanityErr, submitDisabled,
      onSubmit,
      wechatQR, showWechat, openWechat, closeWechat,
      cartIcon, logoGold, logoText
    }
  }
}
</script>

<style scoped>
/* 现有样式，保持不变 */
.wc-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);display:grid;place-items:center;z-index:3500;padding:16px;}
.wc-modal{background:#fff;border-radius:16px;max-width:720px;width:min(92vw,720px);max-height:88vh;display:flex;flex-direction:column;box-shadow:0 16px 40px rgba(0,0,0,.25);overflow:hidden;}
.wc-head{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #eee;}
.wc-head h3{margin:0;font-size:1.1rem}
.wc-close{background:#f3f3f3;border:none;border-radius:10px;width:32px;height:32px;font-size:18px;cursor:pointer}
.wc-body{padding:14px 16px;overflow:auto}
.wc-section{margin-bottom:18px}
.wc-chips{display:flex;flex-wrap:wrap;gap:8px}
.wc-chip{background:#f1f5ff;border:1px solid #e2e8ff;color:#1f3a8a;padding:6px 8px;border-radius:999px;display:inline-flex;gap:6px;align-items:center}
.wc-chip-x{border:none;background:transparent;cursor:pointer;font-size:16px;line-height:1}
.wc-empty{color:#666}
.wc-l{display:block;margin:10px 0 6px;font-weight:600}
.wc-inp{width:100%;box-sizing:border-box;border:1px solid #ddd;border-radius:10px;padding:10px}
.wc-inp.err{border-color:#d33;background:#fff5f5}
.wc-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.wc-hint{color:#666;font-size:.9rem}
.wc-count{text-align:right;font-size:.85rem;color:#666;margin-top:6px;}
.field-err{color:#d33;font-size:.9rem;margin:6px 0 0}
.wc-foot{padding:12px 16px;border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end}
.wc-btn{height:40px;border:none;border-radius:10px;padding:0 14px;font-weight:700;cursor:pointer}
.wc-light{background:#f1f1f1}
.wc-primary{background:#c3aa0c;color:#fff}
.wc-btn:disabled{opacity:.5;cursor:not-allowed}
.wc-after{padding:10px 16px 16px;color:#444}
.wc-links{display:flex;gap:14px;flex-wrap:wrap}
.wc-links a{color:#1f6feb;text-decoration:none;font-weight:600}
@media (max-width:520px){ .wc-grid-2{grid-template-columns:1fr} }
.wc-qr-overlay{position:fixed; inset:0; background:rgba(0,0,0,.45); display:grid; place-items:center; z-index:4000; padding:16px;}
.wc-qr-box{position:relative; background:#fff; border-radius:16px; padding:16px; width:min(90vw,520px); box-shadow:0 16px 32px rgba(0,0,0,.25);}
.wc-qr-box img{ width:100%; height:auto; display:block; border-radius:12px; }
.wc-qr-close{ position:absolute; top:8px; right:10px; width:36px; height:36px; border-radius:50%; border:none; background:#f2f2f2; font-size:22px; line-height:1; cursor:pointer; }
.wc-qr-close:hover{ background:#e9e9e9; }
.wc-title{ margin:0; display:flex; align-items:center; gap:8px; font-size:1.1rem; }
.wc-title-icon{ width:20px; height:20px; object-fit:contain; }
.wc-logos{ display:flex; align-items:center; gap:0px; margin-top:8px; }
.wc-logo-gold{ height:160px; } .wc-logo-text{ height:180px; margin-top:-1px; }
</style>
