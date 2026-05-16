import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import CTABanner from '../../components/CTABanner';
import CortexDiagram from '../../components/CortexDiagram';
import Link from 'next/link';

export const metadata = {
  title: "Cortex | AI Platform for Operations by Dejin",
  description: "Production-grade AI platform for embedding working systems into operations. Services-led, Cortex-enabled.",
};

const LAYERS = [
  {
    name: 'Orchestration Layer',
    description: 'Routes requests, manages conversations, triggers workflows. The brain that coordinates every interaction.',
    color: 'bg-brand-dark',
    text: 'text-white',
  },
  {
    name: 'Memory Layer',
    description: 'Stores context, history, and operational knowledge. Your AI gets smarter every interaction.',
    color: 'bg-brand-primary',
    text: 'text-white',
  },
  {
    name: 'Governance Layer',
    description: 'Audit trails, access control, compliance monitoring. Built in from day one — not bolted on after.',
    color: 'bg-surface',
    text: 'text-brand-dark',
  },
];

const DIFFERENTIATORS = [
  {
    title: 'Your Data, Your Rules',
    description: 'Cortex runs on your infrastructure. Your data never leaves. You control access, compliance, governance.',
  },
  {
    title: 'Built for Your Context',
    description: 'We embed industry knowledge, local integrations, and compliance requirements. Off-the-shelf doesn\'t.',
  },
  {
    title: 'Scales With Your Operations',
    description: 'Start with 3 quick wins. Add modules. Cortex evolves as you do — no rearchitecting needed.',
  },
  {
    title: 'You Own It',
    description: 'Not locked into consulting retainers. Not subject to SaaS price changes. You own the platform.',
  },
];

export default function CortexPage() {
  return (
    <>
      <NavBar />

      {/* S01 Hero */}
      <section className="pt-32 pb-20 bg-brand-dark text-white">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-sm font-body font-semibold text-brand-primary uppercase tracking-widest mb-4">
              The platform
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Cortex by Dejin
            </h1>
            <p className="text-xl font-body text-gray-200 mb-4 leading-relaxed">
              A production-grade platform for embedding AI into operations. Not a chatbot builder. Not a no-code tool. Operational AI infrastructure.
            </p>
            <p className="text-lg font-body text-gray-400 mb-10 leading-relaxed">
              Every quick win Dejin delivers runs on Cortex. Your working system. Your data. Your platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Demo
              </Link>
              <Link
                href="/#quick-wins"
                className="px-8 py-3.5 border-2 border-white text-white font-body font-semibold rounded-lg hover:bg-white hover:text-brand-dark transition-colors text-center"
              >
                See Quick Wins First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S02 How Cortex Works */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-body font-semibold text-brand-primary uppercase tracking-widest mb-3">
              Architecture
            </p>
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-6">
              How Cortex Works
            </h2>
            <p className="text-lg text-gray-600 font-body">
              Cortex sits between your customer-facing channels and your backend systems — orchestrating, routing, and learning from every interaction.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <CortexDiagram />
          </div>
        </div>
      </section>

      {/* S03 Three Layers */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-4">
              Three Layers. One Platform.
            </h2>
            <p className="text-lg text-gray-600 font-body">
              Cortex is built in three layers that work together as one production system.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {LAYERS.map((layer, i) => (
              <div key={layer.name} className={`rounded-xl p-8 ${layer.color}`}>
                <div className="flex items-start gap-4">
                  <span className={`font-display font-bold text-3xl opacity-30 ${layer.text}`}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className={`text-xl font-display font-bold mb-2 ${layer.text}`}>
                      {layer.name}
                    </h3>
                    <p className={`font-body leading-relaxed ${layer.text} opacity-80`}>
                      {layer.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S04 Why It Matters */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-4">
            Why Proprietary Matters
          </h2>
          <p className="text-lg text-center text-gray-600 font-body mb-12 max-w-xl mx-auto">
            Off-the-shelf AI tools work for demos. They don't work for African enterprise operations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="p-8 bg-surface rounded-xl border border-border">
                <h3 className="text-xl font-display font-bold text-brand-dark mb-3">{d.title}</h3>
                <p className="font-body text-gray-700 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S05 Services + Cortex relationship */}
      <section className="py-20 bg-brand-light">
        <div className="container-max max-w-3xl text-center">
          <p className="text-sm font-body font-semibold text-brand-primary uppercase tracking-widest mb-4">
            How we work
          </p>
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-6">
            Services-led. Cortex-enabled.
          </h2>
          <p className="text-lg text-gray-700 font-body mb-8 leading-relaxed">
            You don't need to buy a platform license. You start with a quick win — a chatbot, a document router, a status automation. That system runs on Cortex. You get a working solution in 3 weeks and a platform that scales everything else you build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#quick-wins" className="btn-primary">
              See the Quick Wins
            </Link>
            <Link href="/method" className="btn-dark">
              Our Method
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to Build on Cortex?"
        subheading="Let's design your first working AI system — delivered in 3 weeks."
        cta1Label="Book a Discovery Call"
        cta1Link="/contact"
        cta2Label="See Quick Wins"
        cta2Link="/#quick-wins"
      />

      <Footer />
    </>
  );
}
