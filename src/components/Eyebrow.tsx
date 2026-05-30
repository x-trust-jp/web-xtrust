// Standard section eyebrow: index number + rule + latin label + JA gloss.
// (Hero and Final CTA use bespoke eyebrows inline.)
export function Eyebrow({
  num,
  label,
  ja,
}: {
  num: string;
  label: string;
  ja: string;
}) {
  return (
    <div className="eyebrow">
      <span className="num">{num}</span>
      <span className="line" />
      <span>{label}</span>
      <span className="ja">{ja}</span>
    </div>
  );
}
