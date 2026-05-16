import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import CTABanner from '../components/CTABanner';
import DeliveryTimeline from '../components/DeliveryTimeline';
import DifferentiatorBlock from '../components/DifferentiatorBlock';
import IndustryChips from '../components/IndustryChips';
import ROICalculator from '../components/ROICalculator';
import { homepageContent } from '../content/homepage';

export const metadata = {
  title: "Dejin — AI Systems That Work",
  description: "From AI ambition to working systems — guided. We build working AI systems in 3 weeks that transform your operations.",
};

export default function HomePage() {
  const content = homepageContent;

  return (
    <>
      <NavBar />

      {/* S01 Hero */}
      <HeroSection
        headline={content.hero.headline}
        subheading={content.hero.subheading}
        cta1Label={content.hero.cta1}
        cta1Link="#quick-wins"
        cta2Label={content.hero.cta2}
        cta2Link="/contact"
      />

      {/* S02 The Problem */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-8">
            {content.problem.headline}
          </h2>
          <p className="text-lg text-center text-gray-600 font-body mb-12 max-w-2xl mx-auto">
            {content.problem.body}
          </p>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {content.problem.painPoints.map((point) => (
              <div
                key={point.title}
                className="p-8 bg-surface rounded-lg border border-border"
              >
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 font-body">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S03 The Solution */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center mb-6">
            {content.solution.headline}
          </h2>
          <p className="text-lg text-center font-body mb-12 max-w-2xl mx-auto text-gray-200">
            {content.solution.body}
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {content.solution.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4">
                <span className="text-brand-primary text-2xl font-bold flex-shrink-0">✓</span>
                <p className="font-body text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S04 Quick Wins & ROI Calculator */}
      <section id="quick-wins" className="py-16 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-4">
            {content.quickWins.headline}
          </h2>
          <p className="text-lg text-center text-gray-600 font-body mb-12">
            {content.quickWins.body}
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {content.quickWins.services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>

          {/* ROI Calculator */}
          <ROICalculator />
        </div>
      </section>

      {/* S05 How We Work */}
      <DeliveryTimeline />

      {/* S06 Cortex */}
      <section className="py-16 bg-surface">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-6">
            {content.cortex.headline}
          </h2>
          <p className="text-lg text-gray-600 font-body mb-8 max-w-2xl mx-auto">
            {content.cortex.body}
          </p>
          <a
            href={content.cortex.link}
            className="inline-block px-8 py-3 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            {content.cortex.cta}
          </a>
        </div>
      </section>

      {/* S07 Industries & Africa */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-4">
            {content.industries.headline}
          </h2>
          <p className="text-lg text-center text-gray-600 font-body mb-12">
            {content.industries.body}
          </p>

          {/* Industry Chips */}
          <div className="mb-16 flex justify-center">
            <IndustryChips industries={content.industries.industries} />
          </div>

          {/* Africa Section */}
          <div className="bg-amber bg-opacity-10 border-l-4 border-amber rounded-lg p-12">
            <p className="text-lg text-gray-700 font-body">
              {content.industries.africaBody}
            </p>
          </div>
        </div>
      </section>

      {/* S08 Why Dejin */}
      <section className="py-16 bg-brand-light">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-12">
            {content.whyDejin.headline}
          </h2>

          {/* Differentiators Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {content.whyDejin.differentiators.map((diff) => (
              <DifferentiatorBlock
                key={diff.title}
                title={diff.title}
                description={diff.description}
                icon="→"
              />
            ))}
          </div>
        </div>
      </section>

      {/* S09 AI Readiness Entry */}
      <section className="py-16 bg-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-6">
            {content.readinessEntry.headline}
          </h2>
          <p className="text-lg text-gray-600 font-body mb-8">
            {content.readinessEntry.body}
          </p>
          <a
            href={content.readinessEntry.link}
            className="inline-block px-8 py-3 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            {content.readinessEntry.cta}
          </a>
        </div>
      </section>

      {/* S10 CTA Banner */}
      <CTABanner
        headline={content.ctaBanner.headline}
        subheading={content.ctaBanner.subheading}
        cta1Label={content.ctaBanner.cta1}
        cta1Link="/contact"
        cta2Label={content.ctaBanner.cta2}
        cta2Link="/readiness"
      />

      <Footer />
    </>
  );
}
