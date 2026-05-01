import Link from 'next/link';

export default function CTABanner({
  headline,
  subheading,
  cta1Label,
  cta1Link,
  cta2Label,
  cta2Link,
  variant = 'primary', // primary, secondary
}) {
  const isPrimary = variant === 'primary';

  return (
    <section
      className={`py-16 ${
        isPrimary
          ? 'bg-brand-dark text-white'
          : 'bg-brand-light'
      }`}
    >
      <div className="container-max text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          {headline}
        </h2>

        {subheading && (
          <p className={`text-lg font-body mb-8 max-w-2xl mx-auto ${
            isPrimary ? 'text-gray-200' : 'text-gray-700'
          }`}>
            {subheading}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {cta1Label && (
            <Link
              href={cta1Link || '#'}
              className={`px-8 py-3 font-body font-semibold rounded-lg transition-all ${
                isPrimary
                  ? 'bg-brand-primary text-white hover:opacity-90'
                  : 'bg-brand-primary text-white hover:opacity-90'
              }`}
            >
              {cta1Label}
            </Link>
          )}
          {cta2Label && (
            <Link
              href={cta2Link || '#'}
              className={`px-8 py-3 font-body font-semibold rounded-lg transition-all ${
                isPrimary
                  ? 'border-2 border-white text-white hover:bg-white hover:text-brand-dark'
                  : 'border-2 border-brand-primary text-brand-primary hover:bg-white'
              }`}
            >
              {cta2Label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
