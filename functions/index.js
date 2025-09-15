"use strict";

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

const ALLOWED_ORIGINS = [
  "https://wanderwonderworlddubai.com",
  "https://www.wanderwonderworlddubai.com",
  "https://wanderwonderworld-dubai.web.app",
  "https://wanderwonderworld-dubai.firebaseapp.com",
  "http://localhost:5173",
  "http://127.0.0.1:5173"
];

exports.enquiryCn = onRequest(
  { region: "us-central1", cors: ALLOWED_ORIGINS },
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        res.status(405).json({ok: false, error: "method_not_allowed"});
        return;
      }

      const body = req.body || {};
      const token = body.token;
      const payload = body.payload;

      if (!token || !payload || !payload.contact?.email || !payload.travelDate || !payload.message) {
        res.status(400).json({ok: false, error: "bad_request"});
        return;
      }

      const secret = process.env.TURNSTILE_SECRET ||
        "0x4AAAAAAB1PYQCcS33yzfG7nK-1cFMqy2U"; 

      // —— Turnstile 校验 ——
      const params = new URLSearchParams();
      params.append("secret", secret);
      params.append("response", String(token));
      if (req.ip) params.append("remoteip", req.ip);

      const vr = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {"Content-Type": "application/x-www-form-urlencoded"},
          body: params.toString()
        }
      );
      const vjson = await vr.json();
      if (!vjson.success) {
        logger.warn("Turnstile failed", vjson);
        res.status(400).json({ok: false, error: "captcha_failed"});
        return;
      }

      // —— 写 enquiries ——
      const docRef = await db.collection("enquiries").add({
        ...payload,
        status: "new",
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });

      // —— 写 mail（Trigger Email 扩展会发信） ——
      const subject = `新咨询 — ${payload.contact.name || "访客"} — ${(payload.items || []).length} 项`;
      const html = buildHtml(payload, docRef.id);
      const text = buildText(payload, docRef.id);

      await db.collection("mail").add({
        to: ["info@wanderwonderworlddubai.com"],
        replyTo: payload.contact.email || "info@wanderwonderworlddubai.com",
        message: { subject, html, text }
      });

      res.json({ok: true, id: docRef.id});
    } catch (err) {
      logger.error("enquiryCn error", err);
      res.status(500).json({ok: false, error: "internal"});
    }
  }
);

// —— 简单模板 —— //
function esc(s = "") {
  return String(s).replace(/[&<>"']/g, (m) =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
}

function buildHtml(p, id) {
  const rows = (p.items || [])
    .map((x, i) => `<tr><td>${i + 1}</td><td>${esc(x.title || "")}</td><td>${esc(x.id || "")}</td></tr>`)
    .join("");
  return `<h3>新的咨询 #${id}</h3>
<p><b>姓名：</b>${esc(p.contact?.name || "")}<br/>
<b>邮箱：</b>${esc(p.contact?.email || "")}<br/>
<b>电话：</b>${esc(p.contact?.phone || "")}<br/>
<b>出行日期：</b>${esc(p.travelDate || "")}</p>
<p><b>留言：</b><br/>${esc(p.message || "").replace(/\n/g, "<br>")}</p>
<table border="1" cellpadding="6" cellspacing="0">
<thead><tr><th>序号</th><th>标题</th><th>ID</th></tr></thead>
<tbody>${rows || '<tr><td colspan="3">没有选择任何项目</td></tr>'}</tbody></table>`;
}

function buildText(p, id) {
  const items = (p.items || [])
    .map((x, i) => `${i + 1}. ${x.title || ""} (id:${x.id || ""})`)
    .join("\n") || "没有选择任何项目";
  return `新的咨询 #${id}
姓名: ${p.contact?.name || ""}
邮箱: ${p.contact?.email || ""}
电话: ${p.contact?.phone || ""}
出行日期: ${p.travelDate || ""}

留言:
${p.message || ""}

项目清单:
${items}
`;
}
