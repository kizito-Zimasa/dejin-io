export default function IndustryChips({
  industries = [
    'Insurance',
    'Healthcare',
    'Finance',
    'Logistics',
    'Energy',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
  ],
  className = '',
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {industries.map((industry) => (
        <span
          key={industry}
          className="px-4 py-2 bg-brand-light text-brand-primary border border-brand-primary rounded-full font-body text-sm font-semibold hover:bg-brand-primary hover:text-white transition-colors cursor-default"
        >
          {industry}
        </span>
      ))}
    </div>
  );
}
