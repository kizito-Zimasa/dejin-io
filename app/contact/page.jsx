import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';

export const metadata = {
  title: "Contact Dejin | Let's Talk",
  description: "Book a discovery call with the Dejin team. Let's discuss your biggest bottleneck.",
};

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@dejin.io';
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/dejin';

  return (
    <>
      <NavBar />

      {/* Hero */}
      <HeroSection
        headline="Let's Talk About Your Biggest Bottleneck"
        subheading="Book a time to discuss your AI challenges and quick wins"
        variant="secondary"
      />

      {/* Calendly Embed */}
      <section className="py-16 bg-white">
        <div className="container-max max-w-2xl">
          <div className="bg-surface rounded-lg p-8 min-h-96 flex items-center justify-center">
            <p className="text-gray-500 font-body text-center">
              Calendly widget — embed at {calendlyUrl}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-brand-light">
        <div className="container-max max-w-2xl text-center">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-12">
            Or reach out directly
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-gray-600 font-body mb-2">Email</p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-2xl font-display font-bold text-brand-primary hover:opacity-80 transition-opacity"
              >
                {contactEmail}
              </a>
            </div>

            <div>
              <p className="text-gray-600 font-body mb-2">Response Time</p>
              <p className="text-xl text-gray-700 font-body">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
