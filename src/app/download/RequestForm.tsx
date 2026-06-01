"use client";

import { useState, type FormEvent } from "react";

// Material request goes out via a mailto: link to the address below.
// The visitor's mail client opens pre-filled; on send it lands in this
// inbox and is replied to by hand. Swap for a Resend/route-handler
// submission once an API key is available.
const TO = "matsumotokaya@gmail.com";

const DEPARTMENTS = [
  "経営・役員",
  "情報システム・IT",
  "法務・コンプライアンス",
  "財務・経理",
  "人事・総務",
  "研究開発",
  "その他",
];
const SIZES = [
  "〜50名",
  "51〜300名",
  "301〜1,000名",
  "1,001〜5,000名",
  "5,001名以上",
];
const USECASES = [
  "契約・法務",
  "財務・監査",
  "人事",
  "医療",
  "研究開発",
  "投資判断・M&A",
  "未定・情報収集中",
];
const ROLES = [
  "導入を検討している担当者",
  "情報収集をしている",
  "他社サービスと比較検討中",
  "その他",
];

export function RequestForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim();

    const lines = [
      `会社名: ${g("company")}`,
      `お名前: ${g("lastName")} ${g("firstName")}`,
      `勤務先メールアドレス: ${g("email")}`,
      `電話番号: ${g("phone")}`,
      `部署: ${g("department")}`,
      `従業員規模: ${g("size")}`,
      `導入を検討している業務: ${g("usecase")}`,
      `お客様の立場: ${g("role")}`,
    ];
    const subject = "【資料請求】XTRUST サービス紹介資料";
    const body = `XTRUST 資料請求フォームより以下の内容で請求がありました。\n\n${lines.join("\n")}\n`;

    const mailto = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form className="dl__card" onSubmit={handleSubmit} noValidate={false}>
      <div className="dl__field">
        <label className="dl__label" htmlFor="company">
          会社名<span className="dl__req">必須</span>
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
            勤務先メールアドレス<span className="dl__req">必須</span>
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
        <label className="dl__label" htmlFor="department">
          部署<span className="dl__req">必須</span>
        </label>
        <select className="dl__select" id="department" name="department" required defaultValue="">
          <option value="" disabled>選択してください</option>
          {DEPARTMENTS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="dl__field">
        <label className="dl__label" htmlFor="size">
          従業員規模<span className="dl__req">必須</span>
        </label>
        <select className="dl__select" id="size" name="size" required defaultValue="">
          <option value="" disabled>選択してください</option>
          {SIZES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="dl__field">
        <label className="dl__label" htmlFor="usecase">
          導入を検討している業務<span className="dl__req">必須</span>
        </label>
        <select className="dl__select" id="usecase" name="usecase" required defaultValue="">
          <option value="" disabled>選択してください</option>
          {USECASES.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
      </div>

      <div className="dl__field">
        <label className="dl__label" htmlFor="role">
          お客様の立場<span className="dl__req">必須</span>
        </label>
        <select className="dl__select" id="role" name="role" required defaultValue="">
          <option value="" disabled>選択してください</option>
          {ROLES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <button className="dl__submit" type="submit">
        資料を請求する（無料）
      </button>

      {sent && (
        <p className="dl__sent">
          メールソフトが起動します。内容をご確認のうえ送信してください。
          受付後、担当者より資料をメールでお送りします。
        </p>
      )}

      <p className="dl__note">
        ご記入いただいた個人情報は、本資料の送付および当社サービスのご案内に利用いたします。
        詳細は<a href="#">プライバシーポリシー</a>をご確認ください。
      </p>
    </form>
  );
}
