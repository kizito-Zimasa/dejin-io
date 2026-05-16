export default function MaturityBadge({ score, stage, stageName, tailwindBg, tailwindText, tailwindBorder }) {
  return (
    <div className={`inline-flex flex-col items-center gap-2 px-8 py-6 rounded-2xl border-2 ${tailwindBg} ${tailwindBorder}`}>
      <span className={`text-5xl font-display font-bold ${tailwindText}`}>
        {score}<span className="text-2xl font-medium opacity-60">/28</span>
      </span>
      <span className={`text-lg font-display font-semibold ${tailwindText}`}>
        {stageName}
      </span>
      <span className={`text-sm font-body opacity-70 ${tailwindText}`}>
        Stage {stage} of 5
      </span>
    </div>
  );
}
