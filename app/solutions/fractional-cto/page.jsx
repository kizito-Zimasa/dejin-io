import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { FadeUp, Stagger, StaggerItem } from '../../../components/motion';

export const metadata = {
  title: 'Fractional CTO — Dejin',
  description: 'Embedded technology leadership for AI adoption and scaling. Dejin provides Fractional CTO services to help organisations align AI, systems, teams, vendors, and delivery priorities.',
};

const covers = [
  { title: 'Technology strategy and roadmap', desc: 'Defining the right architecture, platform decisions, and sequencing for AI and systems investment — matched to your organisation\'s actual constraints and priorities.' },
  { title: 'AI implementation oversight', desc: 'Providing experienced leadership on active AI implementation programmes — ensuring scope discipline, quality, and delivery velocity.' },
  { title: 'Vendor and architecture review', desc: 'Evaluating vendors, platforms, and proposals with technical depth — so your leadership makes informed decisions rather than relying on vendor-provided framing.' },
  { title: 'Product and engineering leadership', desc: 'Bridging the gap between business requirements and technical delivery — especially in teams without experienced in-house technology leadership.' },
  { title: 'Team mentoring and delivery governance', desc: 'Coaching technical staff, improving engineering practices, and establishing delivery governance that keeps programmes on track.' },
];

export default function FractionalCTOPage() {
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
              Technology leadership for AI adoption and scaling.
            </h1>
            <p className="text-lg font-body text-gray-700 mb-8 leading-relaxed">
              Not every organisation needs a full-time CTO. But organisations that are serious about AI adoption need experienced technology leadership to align systems, teams, vendors, and delivery priorities. Dejin provides that on a fractional basis — embedded in your context, not parachuted in for a report.
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
                <strong className="text-white">Growing organisations</strong> that are investing in AI and digital systems but do not yet have — or need — a full-time technical leader. You need CTO-level thinking without the full-time overhead.
              </p>
              <p>
                <strong className="text-white">Organisations mid-programme</strong> where technology delivery has stalled, vendors are underperforming, or technical decisions are being made without adequate leadership oversight.
              </p>
              <p>
                <strong className="text-white">CEOs and COOs</strong> who are making significant technology and AI investments but do not have the technical background to evaluate proposals, challenge vendors, or govern delivery confidently.
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
              Need technology leadership?
            </h2>
            <p className="text-lg font-body text-gray-600 mb-8 max-w-xl mx-auto">
              Let's discuss what level of engagement makes sense for your organisation's current priorities.
            </p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
