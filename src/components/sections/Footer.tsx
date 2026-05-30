import { footer, brand } from "@/content/content";
import { Logo } from "@/components/Logo";

// 14 — Footer.
// NOTE(soil-alignment, legal_entity): operating entity, 特商法表記 and the
// contact method are undecided (farm-014). Legal links are placeholders.
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="sec-footer" data-screen-label="14 Footer">
      <div className="ftop">
        <div className="flogo">
          <Logo height={18} />
        </div>
        <div className="fcols">
          <div className="fcol">
            <h4>Product</h4>
            <a href="#sec-product">製品</a>
            <a href="#sec-use_cases">活用シーン</a>
            <a href="#sec-pricing">料金</a>
            <a href="#sec-faq">FAQ</a>
          </div>
          <div className="fcol">
            <h4>Company</h4>
            <span>運営会社（準備中）</span>
            <a href="#sec-final_cta">お問い合わせ</a>
          </div>
          <div className="fcol">
            <h4>Legal</h4>
            <a href="#">プライバシーポリシー</a>
            <a href="#">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>

      <div className="fbot">
        <span>
          © {year} {brand.name}
        </span>
        <span>{brand.target_audience}</span>
      </div>

      <p className="fnote">
        {footer.note ??
          "法人化前のため、最低限の責任主体明示にとどめています。公開前に運営会社・特商法表記・問い合わせ方式を確定します。"}
      </p>
    </footer>
  );
}
