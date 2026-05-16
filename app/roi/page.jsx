import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ROICalculator from '../../components/ROICalculator';
import CTABanner from '../../components/CTABanner';

export const metadata = {
  title: "ROI Calculator | Dejin",
  description: "See the financial case for your first AI system. Calculate monthly savings, payback period, and Year 1 ROI for each Dejin quick win.",
};

export default function ROIPage() {
  return (
    <>
      <NavBar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-brand-light to-white text-center">
        <div className="container-max max-w-2xl">
          <p className="text-sm font-body font-semibold text-brand-primary uppercase tracking-widest mb-4">
            Free tool
          </p>
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-6 leading-tight">
            What's Your ROI?
          </h1>
          <p className="text-lg text-gray-700 font-body leading-relaxed">
            See the financial case for your first AI system before you commit. Adjust the sliders to match your operation and get an instant estimate of monthly savings, payback period, and Year 1 return.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-surface">
        <div className="container-max max-w-3xl">
          <ROICalculator />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-12 bg-surface">
        <div className="container-max max-w-2xl text-center">
          <p className="text-sm font-body text-gray-500 leading-relaxed">
            Estimates are based on typical Dejin deployment outcomes. Your actual results will depend on your specific workflows, team size, and systems. Book a discovery call to get numbers based on your operation.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Ready to see your actual numbers?"
        subheading="Book a free 30-minute call. We'll scope the right quick win and give you a real estimate based on your operation."
        cta1Label="Book a Discovery Call"
        cta1Link="/contact"
        cta2Label="Take the Free Scorecard"
        cta2Link="/readiness"
      />

      <Footer />
    </>
  );
}
