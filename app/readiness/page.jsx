import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import CTABanner from '../../components/CTABanner';
import ReadinessAssessment from '../../components/ReadinessAssessment';

export const metadata = {
  title: "Dejin AI Readiness Scorecard | Discover Your Starting Point",
  description: "Free 5-minute diagnostic across 7 AI readiness dimensions. Get your score, maturity stage, and top 3 quick wins.",
};

export default function ReadinessPage() {
  return (
    <>
      <NavBar />

      {/* S01 Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-light to-white text-center">
        <div className="container-max max-w-2xl">
          <p className="text-sm font-body font-semibold text-brand-primary uppercase tracking-widest mb-4">
            Free diagnostic tool
          </p>
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-6 leading-tight">
            Dejin AI Readiness Scorecard
          </h1>
          <p className="text-lg text-gray-700 font-body mb-8 leading-relaxed">
            5 minutes. 21 questions across 7 dimensions. Get your AI readiness score, maturity stage, and your top 3 quick wins — immediately.
          </p>
          <p className="text-sm font-body text-gray-500 mb-8">
            Not ready for a call yet? Start here.
          </p>
          <a
            href="#assessment"
            className="inline-block px-8 py-3.5 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Take the Scorecard →
          </a>
        </div>
      </section>

      {/* S02 What you get */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container-max max-w-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '7–28', label: 'Readiness score' },
              { value: '5', label: 'Maturity stages' },
              { value: '3', label: 'Quick wins identified' },
              { value: '5 min', label: 'Time to complete' },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 bg-surface rounded-xl">
                <p className="text-3xl font-display font-bold text-brand-primary mb-1">{item.value}</p>
                <p className="text-sm font-body text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S03 Assessment Form */}
      <section id="assessment" className="py-16 bg-surface">
        <div className="container-max max-w-2xl">
          <ReadinessAssessment />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Want to discuss your results?"
        subheading="Book a free 30-minute call and we'll walk through your score and recommend the right entry point."
        cta1Label="Book a Discovery Call"
        cta1Link="/contact"
      />

      <Footer />
    </>
  );
}
