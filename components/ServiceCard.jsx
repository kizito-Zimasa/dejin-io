import Link from 'next/link';

export default function ServiceCard({
  icon,
  title,
  description,
  link,
  variant = 'default', // default, featured
}) {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={`rounded-lg overflow-hidden transition-all hover:shadow-lg ${
        isFeatured
          ? 'bg-brand-primary text-white p-8'
          : 'bg-white border border-border p-8'
      }`}
    >
      {/* Icon */}
      {icon && (
        <div
          className={`text-4xl mb-6 ${
            isFeatured ? 'text-white' : 'text-brand-primary'
          }`}
        >
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className={`text-2xl font-display font-bold mb-3 ${
        isFeatured ? 'text-white' : 'text-brand-dark'
      }`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`font-body mb-6 leading-relaxed ${
        isFeatured ? 'text-gray-100' : 'text-gray-600'
      }`}>
        {description}
      </p>

      {/* Link */}
      {link && (
        <Link
          href={link}
          className={`inline-block font-body font-semibold transition-colors ${
            isFeatured
              ? 'text-white hover:opacity-80'
              : 'text-brand-primary hover:text-brand-dark'
          }`}
        >
          Learn more →
        </Link>
      )}
    </div>
  );
}
