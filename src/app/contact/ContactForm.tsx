"use client";

import { useState, type FormEvent } from "react";

const TO = "matsumotokaya@gmail.com";

const INQUIRY_TYPES = [
  "製品・POCのご相談",
  "取材・メディアのお問い合わせ",
  "投資家・IRのお問い合わせ",
  "その他",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim();

    const inquiryType = g("inquiryType");
    const lines = [
      `お問い合わせ種別: ${inquiryType}`,
      `会社名・団体名: ${g("company")}`,
      `お名前: ${g("lastName")} ${g("firstName")}`,
      `メールアドレス: ${g("email")}`,
      `電話番号: ${g("phone") || "未記入"}`,
      ``,
      `【お問い合わせ内容】`,
      g("message"),
    ];

    const subject = `【お問い合わせ】${inquiryType} — XTRUST`;
    const body = `XTRUSTお問い合わせフォームより以下の内容でご連絡がありました。\n\n${lines.join("\n")}\n`;

    const mailto = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form className="dl__card" onSubmit={handleSubmit} noValidate={false}>
      <div className="dl__field">
        <label className="dl__label" htmlFor="inquiryType">
          お問い合わせ種別<span className="dl__req">必須</span>
        </label>
        <select className="dl__select" id="inquiryType" name="inquiryType" required defaultValue="">
          <option value="" disabled>選択してください</option>
          {INQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="dl__field">
        <label className="dl__label" htmlFor="company">
          会社名・団体名<span className="dl__req">必須</span>
        </label>
        <input className="dl__input" id="company" name="company" type="text" required autoComplete="organization" />
      </div>

      <div className="dl__field dl__row">
        <div>
          <label className="dl__label" htmlFor="lastName">
            姓<span className="dl__req">必須</span>
          </label>
          <input className="dl__input" id="lastName" name="lastName" type="text" required autoComplete="family-name" />
        </div>
        <div>
          <label className="dl__label" htmlFor="firstName">
            名<span className="dl__req">必須</span>
          </label>
          <input className="dl__input" id="firstName" name="firstName" type="text" required autoComplete="given-name" />
        </div>
      </div>

      <div className="dl__field dl__row">
        <div>
          <label className="dl__label" htmlFor="email">
            メールアドレス<span className="dl__req">必須</span>
          </label>
          <input className="dl__input" id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div>
          <label className="dl__label" htmlFor="phone">
            電話番号
          </label>
          <input className="dl__input" id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="dl__field">
        <label className="dl__label" htmlFor="message">
          お問い合わせ内容<span className="dl__req">必須</span>
        </label>
        <textarea
          className="dl__input ct__textarea"
          id="message"
          name="message"
          required
          rows={5}
          placeholder="ご質問・ご要望をご記入ください"
        />
      </div>

      <button className="dl__submit" type="submit">
        送信する
      </button>

      {sent && (
        <p className="dl__sent">
          メールソフトが起動します。内容をご確認のうえ送信してください。
          担当者より通常2営業日以内にご返信いたします。
        </p>
      )}

      <p className="dl__note">
        ご記入いただいた個人情報は、お問い合わせへの対応および当社サービスのご案内に利用いたします。
        詳細は<a href="/privacy">プライバシーポリシー</a>をご確認ください。
      </p>
    </form>
  );
}
