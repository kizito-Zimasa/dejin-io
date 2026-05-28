import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { FadeUp, FadeIn, Stagger, StaggerItem } from '../../../components/motion';

export const metadata = {
  title: 'Ordra by Dejin — AI Compliance Workspace for Professional Firms',
  description: 'Ordra helps professional firms manage client records, governance, tax compliance, filings, approvals, and audit-ready evidence from one secure AI-powered workspace.',
};

const audiences = [
  {
    hook: 'You carry personal statutory liability. Your tools should match that responsibility.',
    name: 'Company Secretarial Firms',
    desc: 'Entity registers, filings, board meetings, resolutions, compliance calendars, and client entity lifecycle management — structured, evidenced, and audit-ready.',
  },
  {
    hook: "When a client questions whether they were warned, Ordra helps you show exactly what was communicated, when, and to whom.",
    name: 'Tax and Accounting Firms',
    desc: 'Tax deadlines, KRA records, client reminders, assessments, objections, audit support documents, correspondence, and advisory records — all logged and retrievable.',
  },
  {
    hook: 'Every client file, every corporate change, every resolution — in one place from incorporation onwards.',
    name: 'Law Firms and Formation Agents',
    desc: 'Company formation, corporate changes, statutory records, resolutions, contracts, and entity lifecycle work — with every action recorded and every document findable.',
  },
  {
    hook: 'Your work is creative. Your admin does not have to be chaotic.',
    name: 'Engineers, Architects & Consultants',
    desc: 'Client files, project records, contracts, regulatory submissions, professional correspondence, certificates, and approvals — organised by client and matter.',
  },
  {
    hook: 'Member records and compliance obligations managed — even as leadership changes.',
    name: 'Professional Associations & Societies',
    desc: 'Member records, compliance workflows, committee records, approvals, communications, and institutional memory — preserved across leadership transitions.',
  },
  {
    hook: "Auditors don't accept 'we think we complied.' Ordra means you can show it.",
    name: 'Regulated Organizations',
    desc: 'SACCOs, banks, insurers, listed companies, NGOs, and SOEs requiring board governance, director controls, audit trails, and compliance visibility.',
  },
];

const modules = [
  {
    name: 'Ordra Sekretari',
    subtitle: 'Company Secretarial',
    desc: 'Entity governance, statutory registers, board meetings, resolutions, compliance calendars, filing preparation, director workflows, beneficial ownership, and full audit trails.',
    accent: '#1A9E8C',
  },
  {
    name: 'Ordra TaxDesk',
    subtitle: 'Tax & Accounting',
    desc: 'Tax compliance calendars, KRA evidence vault, client reminder logs, tax correspondence tracking, assessments, objection deadlines, and audit support documentation.',
    accent: '#D97706',
  },
  {
    name: 'Ordra Govern',
    subtitle: 'Board & Governance',
    desc: 'Board packs, AI minutes, director declarations, conflict-of-interest tracking, PEP screening workflows, maker-checker approvals, governance reporting, and regulator-ready evidence.',
    accent: '#7C3AED',
  },
  {
    name: 'Ordra Workspaces',
    subtitle: 'Other Professions',
    desc: 'Configurable compliance and records workflows for engineering, architecture, consulting, legal practice management, professional associations, and other regulated professions.',
    accent: '#0369A1',
  },
];

const capabilities = [
  {
    num: '01',
    title: 'Manage Client, Entity & Matter Records',
    body: 'Maintain structured records for companies, clients, directors, shareholders, beneficial owners, proxies, mandates, contracts, and certificates — all in one secure workspace accessible to the whole firm.',
  },
  {
    num: '02',
    title: 'Capture, Organise & Route Documents',
    body: 'Connect emails, documents, notes, alerts, and client communications to the right client, entity, or obligation. AI-assisted routing reduces manual sorting and dependence on personal inboxes.',
    note: 'AI-assisted routing reduces manual filing — with automation expanding as workflows are configured.',
  },
  {
    num: '03',
    title: 'Track Deadlines, Dates & Alerts',
    body: 'Automatically track filing deadlines, tax dates, regulatory obligations, renewal dates, and client follow-ups — with reminders before issues become penalties or disputes. Every reminder timestamped and preserved.',
    note: 'When a client questions whether they were reminded, Ordra shows exactly what was communicated, when, and to whom.',
  },
  {
    num: '04',
    title: 'Generate Professional Documents',
    body: 'Create minutes, resolutions, certificates, notices, board packs, and statutory documents from structured data and firm-approved templates. No retyping. No version confusion. Every document linked to the right client record.',
  },
];

export default function OrdraPage() {
  return (
    <>
      <NavBar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-dark text-white">
        <div className="container-max max-w-4xl">
          <FadeUp>
            <p className="text-xs font-body font-semibold uppercase tracking-widest mb-4" style={{ color: '#1A9E8C' }}>
              AI Compliance Workspace · by Dejin
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
              Bring order to every client file,<br />
              <span style={{ color: '#1A9E8C' }}>deadline, document, and decision.</span>
            </h1>
            <p className="text-lg font-body text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Ordra is the intelligent workspace for professional firms and regulated organisations — bringing client records, correspondence, compliance workflows, approvals, and audit-ready evidence into one secure place.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10">
              {['Company Secretaries', 'Tax & Accounting Firms', 'Law Firms', 'Engineers & Architects', 'Professional Associations', 'Regulated Organizations'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-body text-gray-400 border border-white border-opacity-20 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.18}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Book an Ordra Demo</Link>
              <Link href="#what-ordra-does" className="px-8 py-3.5 border-2 border-white text-white font-body font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors text-center">See What It Does</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Crisis scenario */}
      <section className="py-10 border-l-4" style={{ background: '#FEF3C7', borderColor: '#B45309' }}>
        <div className="container-max max-w-3xl">
          <FadeUp>
            <p className="text-base font-body italic leading-relaxed" style={{ color: '#B45309' }}>
              A client calls. They say they never received the warning. Your best person left six months ago.
              The emails are in their personal inbox. The deadline passed three weeks ago.
            </p>
            <p className="text-base font-body font-semibold text-brand-dark mt-4">
              Ordra exists to make this far less likely — and far easier to prove when questions arise.
            </p>
            <p className="text-sm font-body text-gray-600 mt-2 italic">
              Think of Ordra as your firm's black box: every reminder sent, every document filed, every approval given — recorded, preserved, and ready when you need to prove what happened.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeUp>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-brand-primary mb-3">The Problem</p>
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-4">
              Your firm is running on fragmented tools and personal memory
            </h2>
            <p className="text-lg font-body text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Professional work is becoming more complex, but the tools remain fragmented. Firms lose time and carry unnecessary risk when critical client work is scattered across emails, spreadsheets, personal inboxes, and shared folders.
            </p>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              'Missed filing, tax, and regulatory deadlines — with no record that warnings were ever sent',
              'Critical correspondence trapped in individual employee inboxes',
              'Institutional knowledge lost when staff leave or change roles',
              'Weak audit trails when regulators ask for proof of compliance',
              'Manual drafting of minutes, resolutions, and statutory documents from scratch',
              'Poor visibility across multiple clients, entities, and obligations',
              'Manual director follow-ups, chasing signatures, and slow approvals',
              'Lost client history and records scattered across systems',
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="flex gap-3 p-4 bg-surface rounded-xl border border-border border-l-4 border-l-brand-primary items-start">
                  <p className="text-sm font-body text-gray-700 leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp>
            <div className="bg-brand-dark text-white rounded-xl p-6">
              <p className="text-xs font-body font-semibold uppercase tracking-widest mb-2" style={{ color: '#1A9E8C' }}>The result</p>
              <p className="font-body leading-relaxed">
                Risk, penalties, duplicated work, client disputes, weak handovers, and a firm that cannot scale.
                In professional services, undocumented work is indistinguishable from work that was never done.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Core capabilities */}
      <section id="what-ordra-does" className="py-20 bg-surface">
        <div className="container-max">
          <FadeUp>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-brand-primary mb-3">What Ordra Does</p>
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-4">
              One workspace. Every professional obligation.
            </h2>
            <p className="text-lg font-body text-gray-600 mb-12 max-w-2xl leading-relaxed">
              Ordra manages firm operations, client records, compliance work, correspondence, and audit-ready evidence — with AI-assisted automation reducing routine administration.
            </p>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.num}>
                <div className="bg-white rounded-xl border border-border p-6 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: '#1A9E8C' }} />
                  <p className="text-xs font-body font-bold uppercase tracking-[0.15em] mb-3" style={{ color: '#0F7B6C' }}>{cap.num}</p>
                  <h3 className="text-lg font-display font-bold text-brand-dark mb-3 leading-snug">{cap.title}</h3>
                  <p className="text-sm font-body text-gray-600 leading-relaxed">{cap.body}</p>
                  {cap.note && (
                    <p className="text-xs font-body italic mt-3 pt-3 border-t border-border leading-relaxed" style={{ color: '#0F7B6C' }}>
                      {cap.note}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-max">
          <FadeUp>
            <p className="text-xs font-body font-semibold uppercase tracking-widest mb-3" style={{ color: '#1A9E8C' }}>Key Modules</p>
            <h2 className="text-4xl font-display font-bold mb-4">One platform. Purpose-built workspaces.</h2>
            <p className="text-lg font-body text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Start with the module closest to your core work and expand as your needs grow.
            </p>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-6">
            {modules.map((mod) => (
              <StaggerItem key={mod.name}>
                <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 relative overflow-hidden">
                  <div className="w-8 h-0.5 rounded mb-4" style={{ background: mod.accent }} />
                  <h3 className="text-xl font-display font-bold text-white mb-1">{mod.name}</h3>
                  <p className="text-xs font-body font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {mod.subtitle}
                  </p>
                  <p className="text-sm font-body text-gray-300 leading-relaxed">{mod.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeUp>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-brand-primary mb-3">Who Ordra Is Built For</p>
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-12">
              Every professional firm with clients, deadlines, and obligations to manage
            </h2>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-6">
            {audiences.map((aud) => (
              <StaggerItem key={aud.name}>
                <div className="rounded-xl border border-border p-6 bg-white h-full">
                  <p className="text-sm font-body italic text-gray-500 mb-3 pb-3 border-b border-border leading-relaxed">"{aud.hook}"</p>
                  <h3 className="text-lg font-display font-bold text-brand-dark mb-2">{aud.name}</h3>
                  <p className="text-sm font-body text-gray-600 leading-relaxed">{aud.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-surface border-t border-border">
        <div className="container-max max-w-3xl">
          <p className="text-xs font-body text-gray-500 leading-relaxed text-center">
            Ordra supports compliance operations, record management, workflow tracking, approval evidence, and filing coordination.
            It does not replace professional legal, tax, audit, or regulatory advice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-max text-center">
          <FadeUp>
            <p className="text-xs font-body font-semibold uppercase tracking-widest mb-4" style={{ color: '#1A9E8C' }}>Get Started</p>
            <h2 className="text-4xl font-display font-bold mb-6">Book an Ordra Demo</h2>
            <p className="text-lg font-body text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              We will walk through the module most relevant to your firm — company secretarial, tax, governance, or professional operations.
            </p>
            <Link href="/contact" className="btn-primary">Book a Demo</Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
