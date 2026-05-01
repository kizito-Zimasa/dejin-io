import Link from 'next/link';

export default function HeroSection({
  headline,
  subheading,
  body,
  cta1Label,
  cta1Link,
  cta2Label,
  cta2Link,
  variant = 'primary', // primary, secondary
}) {
  const isPrimary = variant === 'primary';

  return (
    <section
      className={`min-h-screen flex items-center justify-center pt-20 pb-16 ${
        isPrimary
          ? 'bg-gradient-to-br from-brand-light to-white'
          : 'bg-white'
      }`}
    >
      <div className="container-max text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-dark mb-6 leading-tight animate-fadeIn">
          {headline}
        </h1>

        {subheading && (
          <p className="text-xl md:text-2xl text-gray-700 font-body mb-6 leading-relaxed animate-slideUp">
            {subheading}
          </p>
        )}

        {body && (
          <p className="text-lg text-gray-600 font-body mb-8 leading-relaxed max-w-2xl mx-auto">
            {body}
          </p>
        )}

        {(cta1Label || cta2Label) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            {cta1Label && (
              <Link
                href={cta1Link || '#'}
                className="px-8 py-3 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                {cta1Label}
              </Link>
            )}
            {cta2Label && (
              <Link
                href={cta2Link || '#'}
                className="px-8 py-3 border-2 border-brand-primary text-brand-primary font-body font-semibold rounded-lg hover:bg-brand-light transition-colors w-full sm:w-auto"
              >
                {cta2Label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
