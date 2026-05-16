import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import TimelineSteps from '../../components/TimelineSteps';
import CTABanner from '../../components/CTABanner';

export const metadata = {
  title: "Our Delivery Model | The 3-Week Method",
  description: "From legacy workflows to AI-powered operations in 3 weeks. Guaranteed.",
};

const INCLUDED = [
  'One clearly scoped workflow',
  'One to two priority integrations',
  'AI-assisted workflow or agent',
  'User testing with selected staff',
  'Launch to a defined pilot group',
  'Team training and handover',
  'Basic monitoring and support',
];

const CLIENT_PROVIDES = [
  'Process owner (named individual)',
  'Access to sample data',
  'System / API access or export files',
  'One business SME for validation',
  'Timely approvals within agreed SLA',
];

const NOT_INCLUDED = [
  'Full enterprise rollout',
  'Deep legacy system replacement',
  'Unlimited integrations',
  'Large-scale data cleanup',
  'Complex regulatory certification',
];

export default function MethodPage() {
  return (
    <>
      <NavBar />

      {/* S01 Hero */}
      <HeroSection
        headline="From legacy workflows to AI-powered operations."
        subheading="Three weeks. Three phases. One outcome: a working AI system embedded in your operations — guaranteed."
        variant="secondary"
      />

      {/* S02 The 3-Week Model */}
      <TimelineSteps />

      {/* S03 What 3 Weeks Means */}
      <section className="py-20 bg-surface">
        <div className="container-max max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-brand-dark text-center mb-4">
            What "3 Weeks" Actually Means
          </h2>
          <p className="text-lg text-gray-600 font-body text-center mb-12 max-w-2xl mx-auto">
            Guardrails make the promise more believable, not weaker. Here is exactly what is in scope and what is not.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Included */}
            <div className="bg-white rounded-2xl p-7 border border-border">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-full bg-success bg-opacity-15 flex items-center justify-center flex-shrink-0">
                  <span className="text-success text-sm font-bold">✓</span>
                </div>
                <h3 className="text-base font-display font-bold text-brand-dark">Included</h3>
              </div>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-body text-gray-700">
                    <span className="text-success font-bold mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Client provides */}
            <div className="bg-brand-light rounded-2xl p-7 border-2 border-brand-primary">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">→</span>
                </div>
                <h3 className="text-base font-display font-bold text-brand-dark">Client provides</h3>
              </div>
              <ul className="space-y-3">
                {CLIENT_PROVIDES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-body text-gray-700">
                    <span className="text-brand-primary font-bold mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-body text-gray-500 mt-5 italic">
                Delays in client access or approvals pause the 3-week clock.
              </p>
            </div>

            {/* Not included */}
            <div className="bg-white rounded-2xl p-7 border border-border">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-400 text-sm font-bold">—</span>
                </div>
                <h3 className="text-base font-display font-bold text-brand-dark">Not included</h3>
              </div>
              <ul className="space-y-3">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-body text-gray-500">
                    <span className="text-gray-300 font-bold mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-body text-gray-400 mt-5 italic">
                These are scoped separately after the initial quick win is live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S04 How We Differ */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-brand-dark mb-12">
            How Dejin Differs
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface">
                  <th className="p-4 text-left font-display font-bold text-brand-dark">Approach</th>
                  <th className="p-4 text-left font-display font-bold text-brand-dark">Timeline</th>
                  <th className="p-4 text-left font-display font-bold text-brand-dark">Cost</th>
                  <th className="p-4 text-left font-display font-bold text-brand-dark">Guarantee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border bg-brand-light">
                  <td className="p-4 font-body font-bold text-brand-primary">Dejin</td>
                  <td className="p-4 font-body">3 weeks + ongoing support</td>
                  <td className="p-4 font-body">$15–22k</td>
                  <td className="p-4 font-body">Results guaranteed or we extend free</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4 font-body text-gray-700">Typical Consulting</td>
                  <td className="p-4 font-body text-gray-600">3–6 months</td>
                  <td className="p-4 font-body text-gray-600">$50–200k+</td>
                  <td className="p-4 font-body text-gray-600">Recommendations, no guarantee</td>
                </tr>
                <tr className="border-t border-border bg-gray-50">
                  <td className="p-4 font-body text-gray-700">Off-the-Shelf SaaS</td>
                  <td className="p-4 font-body text-gray-600">Months to configure</td>
                  <td className="p-4 font-body text-gray-600">$10k+ annually</td>
                  <td className="p-4 font-body text-gray-600">Platform limitations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to Build Your First Working System?"
        subheading="3 weeks. Guaranteed. Let's start."
        cta1Label="Book a Discovery Call"
        cta1Link="/contact"
        cta2Label="See Our Quick Wins"
        cta2Link="/#quick-wins"
      />

      <Footer />
    </>
  );
}
