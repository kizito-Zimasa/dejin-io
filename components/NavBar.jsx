'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const solutionsQuickWins = [
  { label: 'Customer Service Automation', desc: 'AI agents for repetitive inquiries and support triage.', href: '/services/chatbot' },
  { label: 'Document Routing', desc: 'AI-assisted document intake, classification, and routing.', href: '/services/document-routing' },
  { label: 'Status Automation', desc: 'Live status updates connected to business systems.', href: '/services/status-automation' },
  { label: 'Legacy-to-AI Migration', desc: 'Workflow mapping, integration planning, and AI modernization.', href: '/services/migration' },
];

const solutionsAdvisory = [
  { label: 'AI Training', desc: 'Practical AI training for boards, executives, and teams.', href: '/solutions/ai-training' },
  { label: 'AI Transformation Advisory', desc: 'Strategy, operating model design, and implementation roadmaps.', href: '/solutions/advisory' },
  { label: 'Fractional CTO', desc: 'Embedded technology leadership for AI adoption and scaling.', href: '/solutions/fractional-cto' },
];

const productsItems = [
  { label: 'Ordra', desc: 'Governance, tax, filings, approvals, and audit evidence in one workspace.', href: '/products/ordra' },
  { label: 'Cortex', desc: "AI operations layer behind Dejin's agents, workflows, and integrations.", href: '/cortex' },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const toggleSection = (section) =>
    setMobileExpanded((prev) => (prev === section ? null : section));

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="container-max flex items-center justify-between h-20">
        <Logo variant="dark" />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">

          {/* Solutions */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 font-body hover:text-brand-primary transition-colors">
              Solutions
              <svg className="w-3.5 h-3.5 mt-0.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-[580px] bg-white rounded-xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-5 z-50">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[10px] font-body font-semibold uppercase tracking-[0.15em] text-gray-400 mb-2 px-2">AI Quick Wins</p>
                  {solutionsQuickWins.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-2 py-2 rounded-lg hover:bg-brand-light transition-colors group/item">
                      <p className="text-sm font-body font-semibold text-brand-dark group-hover/item:text-brand-primary leading-tight">{item.label}</p>
                      <p className="text-xs font-body text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-body font-semibold uppercase tracking-[0.15em] text-gray-400 mb-2 px-2">Advisory & Enablement</p>
                  {solutionsAdvisory.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-2 py-2 rounded-lg hover:bg-brand-light transition-colors group/item">
                      <p className="text-sm font-body font-semibold text-brand-dark group-hover/item:text-brand-primary leading-tight">{item.label}</p>
                      <p className="text-xs font-body text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 font-body hover:text-brand-primary transition-colors">
              Products
              <svg className="w-3.5 h-3.5 mt-0.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-50">
              <p className="text-[10px] font-body font-semibold uppercase tracking-[0.15em] text-gray-400 mb-2 px-2">AI Products & Platforms</p>
              {productsItems.map((item) => (
                <Link key={item.href} href={item.href} className="block px-2 py-2 rounded-lg hover:bg-brand-light transition-colors group/item">
                  <p className="text-sm font-body font-semibold text-brand-dark group-hover/item:text-brand-primary leading-tight">{item.label}</p>
                  <p className="text-xs font-body text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/method" className="text-gray-700 font-body hover:text-brand-primary transition-colors">Method</Link>
          <Link href="/about" className="text-gray-700 font-body hover:text-brand-primary transition-colors">About</Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex gap-3 items-center">
          <Link href="/readiness" className="px-4 py-2 border-2 border-brand-primary text-brand-primary font-body font-semibold rounded-lg hover:bg-brand-light transition-colors text-sm">
            Free Scorecard
          </Link>
          <Link href="/contact" className="px-5 py-2 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4 space-y-1">

          {/* Solutions accordion */}
          <div>
            <button onClick={() => toggleSection('solutions')} className="w-full flex items-center justify-between py-3 font-display font-semibold text-gray-900">
              Solutions
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'solutions' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpanded === 'solutions' && (
              <div className="pl-4 pb-2 space-y-3">
                <div>
                  <p className="text-[10px] font-body font-semibold uppercase tracking-[0.15em] text-gray-400 mb-1">AI Quick Wins</p>
                  {solutionsQuickWins.map((item) => (
                    <Link key={item.href} href={item.href} className="block py-1.5 text-sm text-gray-700 font-body hover:text-brand-primary transition-colors" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-body font-semibold uppercase tracking-[0.15em] text-gray-400 mb-1">Advisory & Enablement</p>
                  {solutionsAdvisory.map((item) => (
                    <Link key={item.href} href={item.href} className="block py-1.5 text-sm text-gray-700 font-body hover:text-brand-primary transition-colors" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Products accordion */}
          <div>
            <button onClick={() => toggleSection('products')} className="w-full flex items-center justify-between py-3 font-display font-semibold text-gray-900">
              Products
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'products' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpanded === 'products' && (
              <div className="pl-4 pb-2">
                {productsItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block py-1.5 text-sm text-gray-700 font-body hover:text-brand-primary transition-colors" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/method" className="block py-3 font-display font-semibold text-gray-900 hover:text-brand-primary transition-colors" onClick={() => setMobileOpen(false)}>Method</Link>
          <Link href="/about" className="block py-3 font-display font-semibold text-gray-900 hover:text-brand-primary transition-colors" onClick={() => setMobileOpen(false)}>About</Link>

          {/* Mobile CTAs */}
          <div className="pt-3 border-t border-border space-y-2">
            <Link href="/contact" className="block px-4 py-2.5 bg-brand-primary text-white font-body font-semibold rounded-lg text-center hover:opacity-90 transition-opacity" onClick={() => setMobileOpen(false)}>
              Book a Call
            </Link>
            <Link href="/readiness" className="block px-4 py-2 border-2 border-brand-primary text-brand-primary font-body font-semibold rounded-lg text-center hover:bg-brand-light transition-colors" onClick={() => setMobileOpen(false)}>
              Free Scorecard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
