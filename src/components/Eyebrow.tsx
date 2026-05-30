// Section eyebrow: index number + rule + uppercase latin label + optional JA gloss.
export function Eyebrow({
  num,
  label,
  ja,
}: {
  num: string;
  label: string;
  ja?: string;
}) {
  return (
    <div className="eyebrow">
      <span className="num">{num}</span>
      <span className="line" />
      <span>{label}</span>
      {ja && <span className="ja">{ja}</span>}
    </div>
  );
}
