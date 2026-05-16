import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import CTABanner from '../../../components/CTABanner';
import Link from 'next/link';

export const metadata = {
  title: 'Legacy-to-AI Migration Accelerator | Dejin',
  description:
    'Dejin helps organizations understand, map, and migrate legacy systems into modern AI-ready platforms. Powered by Cortex. Scoped, guided, and validated.',
};

const PHASES = [
  {
    name: 'Discover',
    description:
      'Inventory your systems — including what was never formally documented. Go beyond the architecture diagram to understand what the organization actually runs on.',
  },
  {
    name: 'Decode',
    description:
      'Use Cortex-assisted analysis to interpret legacy data structures, surface business rules from application code, trace integration dependencies, and identify shadow systems. What takes traditional teams months — done in days.',
  },
  {
    name: 'Design',
    description:
      'Convert findings into an executable migration plan. Source-to-target mappings, transformation logic, sequencing, cutover strategy, and governance — all informed by what was actually discovered, not what was assumed.',
  },
  {
    name: 'Demonstrate',
    description:
      'Run a controlled pilot on a defined scope. Show the migration working before committing to full execution. The demo is the proof.',
  },
  {
    name: 'Deliver',
    description:
      'Execute migration cycles with continuous validation — errors surfaced and corrected immediately, not weeks later. Complete audit trail generated throughout.',
  },
  {
    name: 'Develop',
    description:
      'Train your team. Document everything — including the business rules and integration points that were discovered. Many clients leave with better documented knowledge of their own systems than they\'ve had in years.',
  },
  {
    name: 'Drive Value',
    description:
      'Use the clean, modern data foundation to launch AI automation, dashboards, customer service improvements, and workflow redesign. Migration is the foundation. This is what you build on it.',
  },
];

const PACKAGES = [
  {
    name: 'Migration Readiness Assessment',
    timeline: '1–2 weeks',
    price: 'From $8k',
    description:
      'Understand what a migration actually involves before committing. Delivers a system inventory, migration risk and AI-readiness scores, modernization blockers, and a recommended path forward.',
    cta: 'Assess Your Migration Readiness',
    highlight: false,
  },
  {
    name: 'Legacy-to-AI Discovery Sprint',
    timeline: '2–4 weeks',
    price: 'From $15k',
    description:
      'A structured, AI-assisted investigation of your legacy system — surfacing data structures, business rules, integration dependencies, and shadow systems. Delivers more documented knowledge of your own systems than most organizations have had in years.',
    cta: 'Decode Your Legacy Systems',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Migration Blueprint & Pilot',
    timeline: '4–6 weeks',
    price: 'From $25k',
    description:
      'For organizations preparing to execute. Source-to-target mapping, validation framework, pilot migration on a defined data scope, cutover strategy, and business case for full delivery.',
    cta: 'Build Your Migration Blueprint',
    highlight: false,
  },
  {
    name: 'AI-Assisted Migration Delivery',
    timeline: '6–16 weeks',
    price: 'From $40k',
    description:
      'Full migration execution across agreed scope — with continuous validation, SME approval gates, cutover support, and a complete audit trail. Scope confirmed in Blueprint phase before delivery begins.',
    cta: 'Modernize Your Legacy Platform',
    highlight: false,
  },
  {
    name: 'Fractional Migration CTO',
    timeline: 'Min. 3 months',
    price: 'From $5k/mo',
    description:
      'For organizations with an internal team or external vendor running the migration — but without sufficient oversight, governance, or delivery assurance. Dejin provides the senior leadership the program is missing.',
    cta: 'Get Migration Leadership',
    highlight: false,
  },
];

const SECTORS = [
  {
    name: 'Insurance companies',
    description:
      'Running old core systems alongside broker rating workbooks, reinsurance management in Excel, and reconciliation tools that aren\'t on any architecture diagram.',
  },
  {
    name: 'Banks and fintechs',
    description:
      'With core banking customization, loan restructuring models in Excel, treasury workbooks, and regulatory reporting logic that lives partly outside the system.',
  },
  {
    name: 'Healthcare payers and providers',
    description:
      'Managing member data, benefit rules, and claims workflows across disconnected systems.',
  },
  {
    name: 'SACCOs and microfinance institutions',
    description:
      'Moving off locally built or Excel-based platforms to modern digital lending and member management systems.',
  },
  {
    name: 'Any organization',
    description:
      'Where the people who built the system have left, integrations were never fully documented, and shadow systems are carrying operational load the migration plan hasn\'t accounted for.',
  },
];

const GOVERNANCE_SIGNALS = [
  'Least-privilege data access',
  'SME approval gates',
  'Full audit trail',
  'Rollback tested before cutover',
];

const QUICK_WINS = [
  { label: 'Customer Service Chatbot', href: '/services/chatbot' },
  { label: 'Document Routing', href: '/services/document-routing' },
  { label: 'Status Automation', href: '/services/status-automation' },
];

export default function MigrationPage() {
  return (
    <>
      <NavBar />

      {/* S01 — Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-light to-white">
        <div className="container-max max-w-3xl text-center">
          <p className="text-sm font-body font-semibold text-brand-primary uppercase tracking-widest mb-4">
            Legacy-to-AI Migration Accelerator
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-dark mb-6 leading-tight">
            Move from legacy systems to AI-ready operations — guided.
          </h1>
          <p className="text-xl text-gray-700 font-body mb-6 leading-relaxed">
            Dejin helps organizations understand, map, validate, and migrate priority legacy data,
            rules, integrations, and workflows into modern AI-ready systems. Powered by Cortex by Dejin.
          </p>
          <p className="text-lg text-gray-600 font-body mb-10 leading-relaxed max-w-2xl mx-auto">
            Most migrations fail not because the technology doesn't work — but because nobody fully
            understood the system before trying to move it. The undocumented integrations. The business
            logic buried in application code. The Excel workbooks doing real work that aren't on any
            architecture diagram.
            <br /><br />
            We find those first. Then we migrate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Assess Your Migration Readiness →
            </Link>
            <a
              href="#how-it-works"
              className="px-8 py-3.5 border-2 border-brand-dark text-brand-dark font-body font-semibold rounded-lg hover:bg-brand-light transition-colors"
            >
              See How It Works →
            </a>
          </div>
        </div>
      </section>

      {/* S02 — The Problem */}
      <section className="py-20 bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-8 text-center">
            Your legacy system isn't just holding data. It's holding your organization back.
          </h2>
          <div className="space-y-5 text-lg text-gray-700 font-body leading-relaxed">
            <p>
              Every AI initiative, automation program, and modernization project you want to run
              depends on one thing: clean, accessible, well-understood data. And right now, that data
              is locked in a system that modern tools can't connect to cleanly.
            </p>
            <p>
              The migration has been planned. Maybe even started. But migrations fail — not because of
              bad technology, but because of fragmented context. Disconnected teams. Late-stage
              validation. Business rules nobody wrote down. Shadow systems that nobody mapped.
            </p>
          </div>

          {/* Shadow system callout */}
          <div className="mt-10 bg-brand-primary rounded-2xl px-8 py-8 text-white">
            <p className="text-2xl font-display font-bold mb-4">
              The shadow system problem is the most common and least discussed.
            </p>
            <p className="font-body leading-relaxed opacity-90">
              In most large organizations, there are tools doing real operational work that never appear
              on the architecture diagram. A premium rating model in Excel. A loan restructuring tracker.
              A reconciliation workbook that finance built because the system's numbers never quite
              matched the accounts. These tools are load-bearing. They are almost never on the migration
              plan. And they are almost always what breaks at cutover.
            </p>
          </div>
        </div>
      </section>

      {/* S03 — The Solution */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            {/* Left: copy */}
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
                Understand your legacy systems. Map what actually matters. Migrate what unlocks
                modernization.
              </h2>
              <p className="text-gray-300 font-body leading-relaxed mb-6">
                Dejin's Legacy-to-AI Migration Accelerator is a guided, AI-assisted service that does
                what standard migration vendors don't: it helps you understand what you actually run on
                before anything is moved.
              </p>
              <p className="text-gray-300 font-body leading-relaxed mb-6">
                Powered by Cortex by Dejin — our AI-assisted migration intelligence layer — we analyze
                your legacy data, surface business logic embedded in application code, trace integration
                points that were never formally documented, and identify the shadow systems carrying
                operational load alongside your official platform.
              </p>
              <p className="text-white font-body font-semibold mb-8">
                The output is a <span className="text-brand-primary">system intelligence picture</span> — a
                structured, validated view of what your organization actually runs on. That's the
                foundation that makes the subsequent migration trustworthy.
              </p>
              <Link
                href="/cortex"
                className="inline-block px-6 py-3 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                See the Cortex Migration Intelligence Demo →
              </Link>
            </div>

            {/* Right: Cortex layer panel */}
            <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl p-8">
              <p className="text-xs font-body font-semibold text-brand-primary uppercase tracking-widest mb-6">
                Powered by Cortex by Dejin
              </p>
              <p className="text-sm font-body font-semibold text-gray-400 uppercase tracking-wide mb-2">
                AI-assisted, SME-approved
              </p>
              <p className="text-gray-300 font-body text-sm mb-8 leading-relaxed">
                Cortex accelerates the discovery and mapping work. Your business and technical experts
                validate every finding before it informs any migration decision. Speed from AI.
                Confidence from human expertise.
              </p>
              <div className="space-y-3">
                {[
                  { layer: 'Interpretive Layer', desc: 'Reads and decodes legacy data structures, code, and logic' },
                  { layer: 'State Layer', desc: 'Maintains a live model of discovered system context (<10ms)' },
                  { layer: 'Expressive Layer', desc: 'Produces structured intelligence outputs for SME review' },
                ].map((l) => (
                  <div key={l.layer} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-sm font-body font-semibold text-white">{l.layer}</p>
                      <p className="text-xs font-body text-gray-400">{l.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S04 — How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-4 text-center">
            The Dejin AI Migration Pathway
          </h2>
          <p className="text-lg text-gray-600 font-body text-center mb-14">
            Seven phases from system discovery to live AI operations.
          </p>

          <div className="space-y-0">
            {PHASES.map((phase, i) => (
              <div key={phase.name} className="flex gap-6 group">
                {/* Timeline spine */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < PHASES.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-1 mb-1 min-h-[2rem]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <p className="text-lg font-display font-bold text-brand-dark mb-1">{phase.name}</p>
                  <p className="text-gray-600 font-body leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S05 — Packages */}
      <section className="py-20 bg-surface">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-4 text-center">
            Five ways to engage — starting from where you are
          </h2>
          <p className="text-lg text-gray-600 font-body text-center mb-14 max-w-2xl mx-auto">
            {/* Pricing shown as "From $X" — confirm final pricing presentation with founders before publishing */}
            Each engagement is scoped before delivery begins. No open-ended retainers.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  pkg.highlight
                    ? 'bg-white border-2 border-brand-primary shadow-lg'
                    : 'bg-white border border-border'
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-6 bg-brand-primary text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                )}
                <div className="mb-4">
                  <p className="text-base font-display font-bold text-brand-dark mb-1">{pkg.name}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-body text-gray-500">{pkg.timeline}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-sm font-body font-semibold text-brand-primary">{pkg.price}</span>
                  </div>
                </div>
                <p className="text-sm font-body text-gray-600 leading-relaxed flex-1 mb-6">
                  {pkg.description}
                </p>
                <Link
                  href="/contact"
                  className={`text-sm font-body font-semibold py-2.5 rounded-lg text-center transition-all ${
                    pkg.highlight
                      ? 'bg-brand-primary text-white hover:opacity-90'
                      : 'border border-brand-primary text-brand-primary hover:bg-brand-light'
                  }`}
                >
                  {pkg.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S06 — Who This Is For */}
      <section className="py-20 bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-4 text-center">
            Built for any organization with legacy complexity
          </h2>
          <p className="text-lg text-gray-600 font-body text-center mb-12">
            We prioritize where the migration complexity and shadow system risk are highest.
          </p>

          <div className="space-y-6">
            {SECTORS.map((sector) => (
              <div key={sector.name} className="flex items-start gap-4 p-6 bg-surface rounded-xl">
                <span className="text-brand-primary font-bold text-xl flex-shrink-0 mt-0.5">→</span>
                <p className="font-body text-gray-700 leading-relaxed">
                  <span className="font-semibold text-brand-dark">{sector.name} </span>
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S07 — Governance */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-max max-w-3xl text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Every engagement is governed. Nothing moves without sign-off.
          </h2>
          <p className="text-gray-300 font-body leading-relaxed mb-6">
            Least-privilege data access from day one. SME approval required before any finding informs
            a migration decision. A complete decision log generated throughout — not reconstructed after
            the fact. Rollback plan tested before cutover is agreed.
          </p>
          <p className="text-gray-300 font-body leading-relaxed mb-6">
            Cortex does not make final migration decisions without human approval. It does not bypass
            client governance or security controls. Every action is auditable.
          </p>
          <p className="text-gray-300 font-body leading-relaxed mb-12">
            For sensitive data — health records, financial records, reinsurance and actuarial data — a
            data protection impact assessment is completed before access begins.
          </p>

          {/* Trust signal chips */}
          <div className="flex flex-wrap gap-3 justify-center">
            {GOVERNANCE_SIGNALS.map((signal) => (
              <span
                key={signal}
                className="px-4 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full text-sm font-body font-semibold text-white"
              >
                ✓ {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* S08 — Portfolio Connection */}
      <section className="py-20 bg-brand-light">
        <div className="container-max max-w-3xl text-center">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-6">
            Migration is the foundation. This is what you build on it.
          </h2>
          <p className="text-gray-700 font-body leading-relaxed mb-6 text-lg">
            Once your data is clean, your systems are modern, and your APIs work — the programs you've
            been planning become achievable.
          </p>
          <p className="text-gray-700 font-body leading-relaxed mb-10">
            Customer service automation. Document intake and routing. Real-time status responses. AI
            agents for claims triage, loan origination, member service. Operational dashboards. Workflow
            redesign. These are all Dejin quick wins — working AI systems deployed in 3–4 weeks, built
            on the modern data foundation the migration creates.
          </p>
          <p className="text-brand-dark font-body font-semibold mb-8">
            Migration unlocks everything else. The roadmap starts the moment cutover is stable.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {QUICK_WINS.map((qw) => (
              <Link
                key={qw.label}
                href={qw.href}
                className="px-5 py-2.5 bg-white border-2 border-brand-primary text-brand-primary font-body font-semibold rounded-lg hover:bg-brand-primary hover:text-white transition-all"
              >
                {qw.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S09 — Final CTA */}
      <CTABanner
        headline="Ready to understand what you actually run on?"
        subheading="Start with a conversation. We'll assess your situation, tell you honestly what we see, and recommend the right entry point. No 18-month commitment to find out if it's feasible."
        cta1Label="Book a Migration Discovery Call →"
        cta1Link="/contact"
        cta2Label="Assess Your Readiness →"
        cta2Link="/readiness"
      />

      <Footer />
    </>
  );
}
