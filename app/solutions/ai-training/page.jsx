import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { FadeUp, Stagger, StaggerItem } from '../../../components/motion';

export const metadata = {
  title: 'AI Training — Dejin',
  description: 'Practical AI training for boards, executives, and operational teams. Dejin helps organisations build AI literacy, identify use cases, and prepare teams to adopt AI safely.',
};

const covers = [
  { title: 'AI fundamentals for business leaders', desc: 'What AI can and cannot do, where it creates real operational value, and how to think about adoption decisions.' },
  { title: 'Use-case discovery and prioritisation', desc: 'Identifying where AI will have the highest impact in your organisation — grounded in your actual workflows and data.' },
  { title: 'Responsible AI and governance basics', desc: 'Risk framing, data handling, bias awareness, and what your board and leadership need to know to govern AI responsibly.' },
  { title: 'Team productivity with AI tools', desc: 'Practical hands-on sessions that help teams work more effectively with AI tools relevant to their roles.' },
  { title: 'Department-specific AI workshops', desc: 'Focused sessions for operations, finance, HR, legal, and customer-facing teams on AI applications in their domain.' },
];

export default function AITrainingPage() {
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
              Practical AI training for boards, executives, and teams.
            </h1>
            <p className="text-lg font-body text-gray-700 mb-8 leading-relaxed">
              Dejin helps organisations build genuine AI literacy — not just awareness. We work with leadership and operational teams to identify where AI creates real value, prepare teams to adopt AI confidently, and establish the governance foundation to scale it responsibly.
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
                <strong className="text-white">Boards and executive teams</strong> who need a working understanding of AI to govern it — not just endorse it. Leaders making decisions about AI investment, vendor selection, and risk.
              </p>
              <p>
                <strong className="text-white">Operational and functional teams</strong> in insurance, healthcare, finance, research, or services who are being asked to work alongside AI tools and need practical confidence to do so.
              </p>
              <p>
                <strong className="text-white">Organisations early in their AI journey</strong> who want to build internal capability before deploying AI in production — so that adoption is led by understanding, not fear or hype.
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
              Ready to talk about AI training?
            </h2>
            <p className="text-lg font-body text-gray-600 mb-8 max-w-xl mx-auto">
              We will listen first — then design a session that matches your team's context and starting point.
            </p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
