import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { FadeUp, Stagger, StaggerItem } from '../../../components/motion';

export const metadata = {
  title: 'AI Transformation Advisory — Dejin',
  description: 'Dejin helps organisations define where AI creates measurable value, design the operating model, and build practical AI implementation roadmaps.',
};

const covers = [
  { title: 'AI readiness assessment', desc: 'A structured review of your data, systems, processes, and team capability to understand where you are and what is needed to move forward.' },
  { title: 'Use-case prioritisation', desc: 'Identifying and sequencing the highest-value AI opportunities in your organisation — grounded in operational reality, not aspiration.' },
  { title: 'Operating model and governance design', desc: 'How your organisation needs to change to adopt AI successfully — roles, oversight, decision rights, and risk management.' },
  { title: 'Data and integration readiness', desc: 'Assessing whether your data and systems are ready to support the AI investments you are considering.' },
  { title: 'Implementation roadmap', desc: 'A practical, sequenced plan for moving from where you are today to working AI capability — with milestones, dependencies, and investment guidance.' },
];

export default function AdvisoryPage() {
  return (
    <>
      <NavBar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-light to-white">
        <div className="container-max max-w-3xl">
          <FadeUp>
            <p className="text-sm font-body font-semibold text-brand-primary uppercase tracking-widest mb-4">
              Advisory & Enablement
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-dark mb-6 leading-tight">
              AI strategy that moves from ambition to execution.
            </h1>
            <p className="text-lg font-body text-gray-700 mb-8 leading-relaxed">
              Many organisations have AI ambitions but no clear path. Dejin works with leadership teams to cut through the noise — defining where AI will create measurable value in your specific context, designing the operating model to support it, and building a roadmap you can actually execute.
            </p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </FadeUp>
        </div>
      </section>

      {/* What this covers */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeUp>
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-10">What this covers</h2>
          </FadeUp>
          <Stagger className="grid md:grid-cols-2 gap-6">
            {covers.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-6 bg-surface rounded-xl border border-border h-full">
                  <div className="flex gap-3 items-start">
                    <span className="text-brand-primary font-bold flex-shrink-0 mt-0.5">→</span>
                    <div>
                      <h3 className="font-display font-bold text-brand-dark mb-2">{item.title}</h3>
                      <p className="text-sm font-body text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-max max-w-3xl">
          <FadeUp>
            <h2 className="text-3xl font-display font-bold mb-6">Who this is for</h2>
            <div className="space-y-4 text-gray-300 font-body leading-relaxed">
              <p>
                <strong className="text-white">Executive and leadership teams</strong> at mid-to-large enterprises who are serious about AI but unsure where to start, how to prioritise, or how to govern it effectively.
              </p>
              <p>
                <strong className="text-white">Organisations that have tried AI pilots</strong> and need help understanding why adoption stalled — and what structural or process changes are needed to make the next attempt succeed.
              </p>
              <p>
                <strong className="text-white">Boards and committees</strong> that need an independent, experienced perspective on their organisation's AI strategy, investment, or readiness — before committing to major programmes.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-light">
        <div className="container-max text-center">
          <FadeUp>
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">
              Let's talk about your AI strategy.
            </h2>
            <p className="text-lg font-body text-gray-600 mb-8 max-w-xl mx-auto">
              We start with your context — your operations, your systems, your team — before making any recommendations.
            </p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
