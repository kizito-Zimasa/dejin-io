import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import ThreeLayerBlock from '../../components/ThreeLayerBlock';
import DifferentiatorBlock from '../../components/DifferentiatorBlock';
import CTABanner from '../../components/CTABanner';

export const metadata = {
  title: "Cortex | AI Platform for Operations",
  description: "Production-grade AI platform for embedding systems into operations.",
};

export default function CortexPage() {
  return (
    <>
      <NavBar />

      {/* S01 Hero */}
      <HeroSection
        headline="Powered by Cortex by Dejin"
        subheading="Not a chatbot builder. A production-grade platform for embedding AI into operations."
        cta1Label="Book a Demo"
        cta1Link="/contact"
        variant="secondary"
      />

      {/* S02 What Is Cortex */}
      <section className="py-16 bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-8">
            What is Cortex?
          </h2>

          <div className="space-y-6 font-body text-lg text-gray-700">
            <p>
              Cortex is a platform, not a chatbot builder. It's designed to embed AI into your operations — your workflows, your systems, your data.
            </p>
            <p>
              Most AI tools treat intelligence as a bolt-on. A chatbot here. A classifier there. Cortex treats intelligence as embedded infrastructure.
            </p>
            <p>
              Three layers. One platform. Your working system.
            </p>
          </div>
        </div>
      </section>

      {/* S03 Three-Layer Visualiser */}
      <ThreeLayerBlock />

      {/* S04 Why It Matters */}
      <section className="py-16 bg-brand-light">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-12">
            Why Proprietary Matters
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <DifferentiatorBlock
              title="Your Data, Your Rules"
              description="Cortex runs on your infrastructure. Your data never leaves. You control access, compliance, governance."
              icon="🔒"
            />
            <DifferentiatorBlock
              title="Built for Your Context"
              description="We embed industry knowledge, local integrations, compliance requirements. Off-the-shelf doesn't."
              icon="🎯"
            />
            <DifferentiatorBlock
              title="Scales with Your Operations"
              description="From 3 quick wins to production systems. Cortex evolves as you do."
              icon="📈"
            />
            <DifferentiatorBlock
              title="You Own It"
              description="Not locked into consulting. Not dependent on SaaS pricing. You own the platform."
              icon="✓"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to Build on Cortex?"
        subheading="Let's design your first working AI system"
        cta1Label="Book a Discovery Call"
        cta1Link="/contact"
        cta2Label="See Quick Wins"
        cta2Link="/#quick-wins"
      />

      <Footer />
    </>
  );
}
