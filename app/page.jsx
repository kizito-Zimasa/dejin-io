import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import CTABanner from '../components/CTABanner';
import DeliveryTimeline from '../components/DeliveryTimeline';
import DifferentiatorBlock from '../components/DifferentiatorBlock';
import IndustryChips from '../components/IndustryChips';
import DeviceMockup from '../components/DeviceMockup';
import ChatPreview from '../components/ChatPreview';
import CortexDiagram from '../components/CortexDiagram';
import { FadeUp, FadeIn, Stagger, StaggerItem } from '../components/motion';
import Link from 'next/link';
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-light to-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <FadeUp delay={0}>
                <p className="text-sm font-body font-semibold text-brand-primary uppercase tracking-widest mb-4">
                  AI Transformation · Africa-native · 3 weeks
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-dark mb-6 leading-tight">
                  {content.hero.headline}
                </h1>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p className="text-lg text-gray-700 font-body mb-10 leading-relaxed">
                  {content.hero.subheading}
                </p>
              </FadeUp>
              <FadeUp delay={0.24}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#quick-wins" className="btn-primary">
                    {content.hero.cta1}
                  </Link>
                  <Link href="/contact" className="btn-dark">
                    {content.hero.cta2}
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right: device mockup */}
            <FadeIn delay={0.3} className="hidden md:block">
              <DeviceMockup url="dejin.io/services/chatbot">
                <div className="h-[420px] flex flex-col">
                  <ChatPreview />
                </div>
              </DeviceMockup>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* S02 Proof Strip */}
      <section className="py-12 bg-brand-dark">
        <div className="container-max max-w-4xl">
          <FadeUp>
            <p className="text-xs font-body font-semibold text-gray-500 uppercase tracking-widest text-center mb-2">
              {content.proofStrip.context}
            </p>
            <p className="text-sm font-body text-gray-400 text-center mb-10 max-w-xl mx-auto">
              {content.proofStrip.subtext}
            </p>
          </FadeUp>
          <Stagger className="grid grid-cols-3 gap-6 text-center">
            {content.proofStrip.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-3xl font-display font-bold text-brand-primary mb-1">{stat.value}</p>
                <p className="text-sm font-body text-gray-400">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* S03 The Problem */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeUp>
            <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-8">
              {content.problem.headline}
            </h2>
            <p className="text-lg text-center text-gray-600 font-body mb-12 max-w-2xl mx-auto">
              {content.problem.body}
            </p>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-6">
            {content.problem.painPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="p-8 bg-surface rounded-xl border border-border h-full">
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 font-body">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* S04 The Solution */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-max">
          <FadeUp>
            <h2 className="text-4xl font-display font-bold text-center mb-6">
              {content.solution.headline}
            </h2>
            <p className="text-lg text-center font-body mb-12 max-w-2xl mx-auto text-gray-200">
              {content.solution.body}
            </p>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {content.solution.benefits.map((benefit) => (
              <StaggerItem key={benefit}>
                <div className="flex items-start gap-4">
                  <span className="text-brand-primary text-xl font-bold flex-shrink-0 mt-0.5">✓</span>
                  <p className="font-body text-lg">{benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* S05 Quick Wins */}
      <section id="quick-wins" className="py-20 bg-white">
        <div className="container-max">
          <FadeUp>
            <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-4">
              {content.quickWins.headline}
            </h2>
            <p className="text-lg text-center text-gray-600 font-body mb-12">
              {content.quickWins.body}
            </p>
          </FadeUp>

          <Stagger className="grid md:grid-cols-3 gap-8 mb-12">
            {content.quickWins.services.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp>
            <div className="text-center">
              <Link href="/roi" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-primary text-brand-primary font-body font-semibold rounded-lg hover:bg-brand-light transition-colors">
                Calculate your ROI →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* S06 How We Work */}
      <DeliveryTimeline />

      {/* S07 Cortex */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <p className="text-xs font-body font-semibold text-brand-primary uppercase tracking-widest mb-3">
                The platform
              </p>
              <h2 className="text-4xl font-display font-bold mb-6">
                {content.cortex.headline}
              </h2>
              <p className="text-lg font-body mb-4 text-gray-200 leading-relaxed">
                {content.cortex.body}
              </p>
              <p className="text-gray-400 font-body mb-8 leading-relaxed">
                Every quick win you deliver runs on Cortex. One platform — embed once, scale forever.
              </p>
              <Link
                href={content.cortex.link}
                className="inline-block px-8 py-3 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {content.cortex.cta}
              </Link>
            </FadeUp>

            <FadeIn delay={0.15} className="bg-white bg-opacity-5 rounded-2xl p-6 border border-white border-opacity-10">
              <CortexDiagram />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* S08 Industries */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeUp>
            <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-4">
              {content.industries.headline}
            </h2>
            <p className="text-lg text-center text-gray-600 font-body mb-12 max-w-2xl mx-auto">
              {content.industries.body}
            </p>
          </FadeUp>

          <FadeIn className="mb-16 flex justify-center">
            <IndustryChips industries={content.industries.industries} />
          </FadeIn>

          <FadeUp>
            <div className="bg-amber bg-opacity-10 border-l-4 border-amber rounded-xl p-10">
              <p className="text-lg text-gray-700 font-body">
                {content.industries.africaBody}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* S09 Why Dejin */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <FadeUp>
            <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-12">
              {content.whyDejin.headline}
            </h2>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-6">
            {content.whyDejin.differentiators.map((diff) => (
              <StaggerItem key={diff.title}>
                <DifferentiatorBlock
                  title={diff.title}
                  description={diff.description}
                  icon="→"
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* S10 AI Readiness Entry */}
      <section className="py-20 bg-white">
        <div className="container-max text-center">
          <FadeUp>
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-6">
              {content.readinessEntry.headline}
            </h2>
            <p className="text-lg text-gray-600 font-body mb-8">
              {content.readinessEntry.body}
            </p>
            <Link
              href={content.readinessEntry.link}
              className="inline-block px-8 py-3 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              {content.readinessEntry.cta}
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* S11 CTA Banner */}
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
