export default function MetricCard({
  value,
  label,
  icon,
  variant = 'default', // default, highlight
}) {
  const isHighlight = variant === 'highlight';

  return (
    <div
      className={`p-8 rounded-lg text-center transition-all ${
        isHighlight
          ? 'bg-brand-primary text-white'
          : 'bg-surface border border-border'
      }`}
    >
      {/* Icon */}
      {icon && (
        <div className={`text-4xl mb-4 ${
          isHighlight ? 'text-white' : 'text-brand-primary'
        }`}>
          {icon}
        </div>
      )}

      {/* Value */}
      <div className={`text-4xl font-display font-bold mb-2 ${
        isHighlight ? 'text-white' : 'text-brand-dark'
      }`}>
        {value}
      </div>

      {/* Label */}
      <p className={`font-body text-sm ${
        isHighlight ? 'text-gray-100' : 'text-gray-600'
      }`}>
        {label}
      </p>
    </div>
  );
}
