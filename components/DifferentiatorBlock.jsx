export default function DifferentiatorBlock({
  icon,
  title,
  description,
  variant = 'default', // default, featured
}) {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={`p-8 rounded-xl transition-all ${
        isFeatured
          ? 'bg-brand-primary text-white'
          : 'bg-surface'
      }`}
    >
      {/* Icon */}
      {icon && (
        <div className={`text-4xl mb-4 font-bold ${
          isFeatured ? 'text-white' : 'text-brand-dark'
        }`}>
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className={`text-2xl font-display font-bold mb-4 ${
        isFeatured ? 'text-white' : 'text-brand-dark'
      }`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`font-body leading-relaxed ${
        isFeatured ? 'text-gray-100' : 'text-gray-700'
      }`}>
        {description}
      </p>
    </div>
  );
}
