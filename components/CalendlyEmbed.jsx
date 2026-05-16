'use client';

export default function CalendlyEmbed({ url }) {
  const isPlaceholder = !url || url.includes('your-calendly') || url === 'https://calendly.com/dejin';

  if (isPlaceholder) {
    return (
      <div className="bg-surface rounded-xl p-16 text-center border border-border">
        <p className="text-lg font-display font-bold text-brand-dark mb-3">
          Book a Discovery Call
        </p>
        <p className="text-gray-500 font-body mb-6">
          Our calendar is being set up. In the meantime, email us directly and we'll respond within 24 hours.
        </p>
        <a
          href="mailto:contact@dejin.io"
          className="inline-block px-6 py-3 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Email contact@dejin.io
        </a>
      </div>
    );
  }

  return (
    <iframe
      src={`${url}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=F28C28`}
      width="100%"
      height="700"
      frameBorder="0"
      title="Book a call with Dejin"
      className="rounded-xl"
    />
  );
}
