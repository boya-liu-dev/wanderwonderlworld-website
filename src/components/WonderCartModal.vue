<template>
  <!-- Overlay -->
  <div v-if="cart.isOpen" class="wc-overlay" @click.self="cart.close()">
    <div class="wc-modal" role="dialog" aria-modal="true" aria-label="WonderCart">
      <!-- Header -->
      <div class="wc-head">
        <h3 class="wc-title">
          <img :src="cartIcon" alt="" class="wc-title-icon" />
          <span>WonderCart</span>
        </h3>
        <button class="wc-close" aria-label="Close" @click="cart.close">×</button>
      </div>

      <!-- Body -->
      <div class="wc-body">
        <!-- Selected items -->
        <div class="wc-section">
          <h4>Selected items</h4>

          <!-- Empty cart hint (still can submit) -->
          <div v-if="!cart.items.length" class="wc-empty">
            No items selected — you can still submit this as a general enquiry.
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
          <h4>Your details</h4>

          <label class="wc-l">Preferred name</label>
          <input v-model.trim="cart.form.name" class="wc-inp" placeholder="e.g. Alex" />

          <label class="wc-l">
            Email <span class="req">*</span>
          </label>
          <input
            v-model.trim="cart.form.email"
            class="wc-inp"
            :class="{ err: emailErr }"
            placeholder="name@example.com"
            inputmode="email"
          />
          <p v-if="emailErr" class="field-err">Please enter a valid email address.</p>

          <div class="wc-grid-2">
            <div>
              <label class="wc-l">Phone code</label>
              <input v-model.trim="cart.form.phoneCc" class="wc-inp" placeholder="+1,+44,+971,etc." />
            </div>
            <div>
              <label class="wc-l">Phone number</label>
              <input v-model.trim="cart.form.phoneNumber" class="wc-inp" placeholder="5xxxxxxx" />
            </div>
          </div>

          <label class="wc-l">
            Travel date (YYYY-MM-DD) <span class="req">*</span>
          </label>
          <input
            type="date"
            class="wc-inp"
            :class="{ err: dateErr }"
            v-model="cart.form.travelDate"
            :min="todayISO"
            max="2050-12-31"
          />
          <p v-if="dateErr" class="field-err">
            Please choose a date from today.
          </p>

          <label class="wc-l">
            Message <span class="req">*</span>
          </label>
          <textarea
            v-model.trim="cart.form.message"
            class="wc-inp"
            :class="{ err: msgRequiredErr || msgProfanityErr }"
            rows="4"
            placeholder="Tell us your plan, pickup area, pax, special notes..."
            :maxlength="MESSAGE_LIMIT"
            @input="enforceMsgLimit"
          ></textarea>
          <!-- counter -->
          <div class="wc-count">
            {{ (cart.form.message || '').length }}/{{ MESSAGE_LIMIT }}
          </div>

          <p v-if="msgRequiredErr" class="field-err">Message is required.</p>
          <p v-else-if="msgProfanityErr" class="field-err">
            Please remove inappropriate language from your message.
          </p>

          <p class="wc-hint">
            By submitting, I agree WanderWonderWorld to contact me via the details provided.
          </p>

          <!-- Logos under hint -->
          <div class="wc-logos">
            <img :src="logoGold" alt="WanderWonderWorld Gold Logo" class="wc-logo-gold" />
            <img :src="logoText" alt="WanderWonderWorld Text Logo" class="wc-logo-text" />
          </div>
        </div>
      </div>

      <!-- Footer actions -->
      <div class="wc-foot">
        <button class="wc-btn wc-light" @click="cart.clear" :disabled="!cart.items.length">
          Clear all
        </button>
        <button class="wc-btn wc-primary" @click="onSubmit" :disabled="submitDisabled">
          Submit enquiry
        </button>
      </div>

      <!-- After text -->
      <div class="wc-after">
        <p>
          We usually reply within <strong>3 business days</strong>. If you don’t see our email,
          please check your spam folder or contact us via:
        </p>
        <div class="wc-links">
          <a href="mailto:info@wanderwonderworlddubai.com">Email us</a>
          <a href="https://wa.me/971589831967" target="_blank" rel="noopener">WhatsApp us</a>
          <a href="/#wechat" @click.prevent="openWechat">Wechat us</a>

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
import { useWonderCart } from '@/stores/wonderCart'
import wechatQR from '@/assets/images/Wechat-code1.jpg'
import cartIcon from '@/assets/images/wondercart.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'

export default {
  name: 'WonderCartModal',
  setup() {
    const cart = useWonderCart()

    // === Message limit (400 chars) ===
    const MESSAGE_LIMIT = 400
    const enforceMsgLimit = (e) => {
      const v = (e?.target?.value ?? '').slice(0, MESSAGE_LIMIT)
      if (v !== cart.form.message) cart.form.message = v
    }

    // === Helpers to support both object and stringified JSON ===
    const safeParse = (s) => {
      try { return JSON.parse(s) } catch { return null }
    }
    const getName = (it) => {
      if (typeof it === 'string') {
        const obj = safeParse(it)
        return obj?.name ?? it
      }
      return it?.name ?? String(it)
    }
    const getId = (it) => {
      if (typeof it === 'string') {
        const obj = safeParse(it)
        return obj?.id ?? it
      }
      return it?.id ?? String(it)
    }

    // Date lower bound (today)
    const todayISO = new Date().toISOString().slice(0, 10)

    // Email validation
    const emailErr = computed(() => {
      const val = (cart.form.email || '').trim()
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
    })

    // Travel date validation: required, >= today, <= 2050-12-31
    const dateErr = computed(() => {
      const v = cart.form.travelDate
      if (!v) return true
      const d = new Date(v + 'T00:00:00')
      const min = new Date(todayISO + 'T00:00:00')
      const max = new Date('2050-12-31T00:00:00')
      return !(d >= min && d <= max)
    })

    // Message validation: required + profanity filter
    const badWords = [
      'fuck','shit','bitch','asshole','dumb','trash','cunt','scam','eat dog','kill','sex',
      'chink','ching','chang','Mao','chong','communist','Trump','racist','suicide','ccp',
      'xijinping','Tiananmen','hell','bastard','third-rate','douchebag','covid','flu','bomb','virus',
      '妈','逼','操','垃圾','傻逼','去死','精神','毛泽东','习近平','枪毙',
      '共产','支那','民主','赔钱','六四','自杀','王八','跳楼','新冠','911','boya','炸弹','独立','刘吉利','刘博雅'
    ]
    const msgRequiredErr = computed(() => !(cart.form.message && cart.form.message.trim().length > 0))
    const msgProfanityErr = computed(() => {
      const m = (cart.form.message || '').toLowerCase()
      return badWords.some(w => m.includes(w))
    })

    // Allow empty cart; throttle via canSubmitNow()
    const submitDisabled = computed(() =>
      emailErr.value ||
      dateErr.value ||
      msgRequiredErr.value ||
      msgProfanityErr.value ||
      !cart.canSubmitNow()
    )

    async function onSubmit() {
      if (submitDisabled.value) return

      // Build payload (items may be empty)
      const payload = {
        items: cart.items.map(i => {
          // normalize to object for sending
          const obj = typeof i === 'string' ? safeParse(i) || { id: i, name: String(i) } : i
          return { id: obj.id, title: obj.name }
        }),
        contact: {
          name: cart.form.name || '',
          email: cart.form.email.trim(),
          phone: [cart.form.phoneCc || '', cart.form.phoneNumber || ''].filter(Boolean).join(' ')
        },
        travelDate: cart.form.travelDate,
        message: cart.form.message.trim(),
        createdAt: new Date().toISOString()
      }

      // TODO: send payload via Firebase/Cloud Function/email service to info@...
      // await sendEnquiry(payload)

      cart.markSubmitted()
      cart.toast('Your order has been successfully sent')
      cart.close()
    }

    // WeChat QR modal
    const showWechat = ref(false)
    const openWechat  = () => { showWechat.value = true }
    const closeWechat = () => { showWechat.value = false }

    return {
      cart,
      // message limit
      MESSAGE_LIMIT, enforceMsgLimit,
      // helpers for chips
      getName, getId,

      todayISO,
      emailErr,
      dateErr,
      msgRequiredErr,
      msgProfanityErr,
      submitDisabled,
      onSubmit,

      // assets & wechat modal
      wechatQR, showWechat, openWechat, closeWechat,
      cartIcon, logoGold, logoText
    }
  }
}
</script>

<style scoped>
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

/* Counter under textarea */
.wc-count{ text-align:right; font-size:.85rem; color:#666; margin-top:6px; }

/* Field errors */
.field-err{color:#d33;font-size:.9rem;margin:6px 0 0}

/* Footer */
.wc-foot{padding:12px 16px;border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end}
.wc-btn{height:40px;border:none;border-radius:10px;padding:0 14px;font-weight:700;cursor:pointer}
.wc-light{background:#f1f1f1}
.wc-primary{background:#c3aa0c;color:#fff}
.wc-btn:disabled{opacity:.5;cursor:not-allowed}

/* After copy */
.wc-after{padding:10px 16px 16px;color:#444}
.wc-links{display:flex;gap:14px;flex-wrap:wrap}
.wc-links a{color:#1f6feb;text-decoration:none;font-weight:600}

@media (max-width:520px){
  .wc-grid-2{grid-template-columns:1fr}
}
.wc-qr-overlay{
  position:fixed; inset:0; background:rgba(0,0,0,.45);
  display:grid; place-items:center; z-index:4000; padding:16px;
}
.wc-qr-box{
  position:relative; background:#fff; border-radius:16px;
  padding:16px; width:min(90vw,520px); box-shadow:0 16px 32px rgba(0,0,0,.25);
}
.wc-qr-box img{ width:100%; height:auto; display:block; border-radius:12px; }
.wc-qr-close{
  position:absolute; top:8px; right:10px; width:36px; height:36px;
  border-radius:50%; border:none; background:#f2f2f2; font-size:22px;
  line-height:1; cursor:pointer;
}
.wc-qr-close:hover{ background:#e9e9e9; }

/* Title with icon */
.wc-title{
  margin:0;
  display:flex;
  align-items:center;
  gap:8px;
  font-size:1.1rem;
}
.wc-title-icon{
  width:20px;
  height:20px;
  object-fit:contain;
}

/* Logos row */
.wc-logos{
  display:flex;
  align-items:center;
  gap:0px;
  margin-top:8px;
}
.wc-logo-gold{ height:160px; }
.wc-logo-text{ height:180px; margin-top:-1px; }
</style>
