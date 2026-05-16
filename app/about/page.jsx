import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import DifferentiatorBlock from '../../components/DifferentiatorBlock';
import CTABanner from '../../components/CTABanner';

export const metadata = {
  title: "About Dejin | Why We Exist",
  description: "Dejin transforms operations through AI. We build working systems in 3 weeks.",
};

export default function AboutPage() {
  return (
    <>
      <NavBar />

      {/* Hero */}
      <HeroSection
        headline="Built Because Most AI Projects Fail"
        subheading="We saw 60–70% of AI projects fail. So we built the antidote."
        variant="secondary"
      />

      {/* S01 Mission */}
      <section className="py-20 bg-white">
        <div className="container-max max-w-3xl text-center">
          <p className="text-2xl text-gray-700 font-body leading-relaxed">
            Most AI projects fail because companies build on hunches, not data. They run expensive pilots. They integrate nothing. They deploy to silence.
          </p>
          <p className="text-2xl text-gray-700 font-body leading-relaxed mt-6">
            We built Dejin to fix this. We embed AI into your operations, not as a separate tool. We deliver working systems in 3 weeks. We train your team. We guarantee results.
          </p>
        </div>
      </section>

      {/* S02 Four Differentiators */}
      <section className="py-20 bg-brand-light">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-12">
            What Sets Dejin Apart
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <DifferentiatorBlock
              title="Embed, Don't Bolt On"
              description="AI lives in your systems, your workflows, your data. Not a separate tool. Not a chatbot. Production-grade systems that work."
              icon="→"
            />
            <DifferentiatorBlock
              title="Risk by Design"
              description="We audit for compliance, security, bias. Governance is built in from day one. You own the system."
              icon="→"
            />
            <DifferentiatorBlock
              title="Africa Native"
              description="We're based in Africa. We understand African operations, infrastructure constraints, regulatory context."
              icon="→"
            />
            <DifferentiatorBlock
              title="Platform, Not Services"
              description="Cortex is your platform. Build once, iterate forever. You own the system, not locked into consulting."
              icon="→"
            />
          </div>
        </div>
      </section>

      {/* S03 Africa Advantage */}
      <section className="py-20 bg-white">
        <div className="container-max max-w-3xl text-center">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-8">
            Africa Advantage
          </h2>
          <p className="text-lg text-gray-700 font-body leading-relaxed">
            AI built in San Francisco doesn't work in Nairobi. We get it. Unreliable connectivity. Multilingual teams. Informal processes. Legacy systems. Limited data.
          </p>
          <p className="text-lg text-gray-700 font-body leading-relaxed mt-6">
            We've built for these constraints. We're based here. We understand the context. Our systems work in Africa and scale globally.
          </p>
        </div>
      </section>

      {/* S04 Team */}
      <section className="py-20 bg-surface">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-12">
            The Team
          </h2>
          <div className="bg-white rounded-2xl p-10 border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-brand-primary mx-auto mb-6 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-brand-dark mb-3">
              Built by operators with deep African enterprise technology experience
            </h3>
            <p className="text-gray-600 font-body leading-relaxed max-w-xl mx-auto">
              Dejin is led by practitioners who have built, scaled, and implemented enterprise technology across Africa — across insurance, healthcare, finance, and operational sectors. We've spent our careers solving the exact problems our clients face.
            </p>
            <p className="text-gray-400 font-body text-sm mt-6 italic">
              Full founder profiles coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to Work with Dejin?"
        subheading="Let's talk about your biggest AI bottleneck."
        cta1Label="Book a Discovery Call"
        cta1Link="/contact"
        cta2Label="Take the Scorecard"
        cta2Link="/readiness"
      />

      <Footer />
    </>
  );
}
