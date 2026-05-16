'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#', submenu: true },
    { label: 'Cortex', href: '/cortex' },
    { label: 'Method', href: '/method' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Customer Service Chatbot', href: '/services/chatbot' },
    { label: 'Document Routing', href: '/services/document-routing' },
    { label: 'Status Automation', href: '/services/status-automation' },
    { label: 'Legacy-to-AI Migration', href: '/services/migration' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-sm">
      <div className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <Logo variant="dark" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.submenu ? (
                <>
                  <button className="text-gray-700 font-body hover:text-brand-primary transition-colors">
                    {link.label}
                  </button>
                  {/* Submenu */}
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {serviceLinks.map((sublink) => (
                      <Link
                        key={sublink.label}
                        href={sublink.href}
                        className="block px-4 py-2 text-gray-700 font-body hover:text-brand-primary hover:bg-brand-light transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="text-gray-700 font-body hover:text-brand-primary transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/readiness"
            className="px-4 py-2 border-2 border-brand-primary text-brand-primary font-body font-semibold rounded-lg hover:bg-brand-light transition-colors"
          >
            Take Assessment
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border p-4 space-y-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.submenu ? (
                <>
                  <p className="font-display font-semibold text-gray-900 mb-2">
                    {link.label}
                  </p>
                  <div className="space-y-2 pl-4">
                    {serviceLinks.map((sublink) => (
                      <Link
                        key={sublink.label}
                        href={sublink.href}
                        className="block text-gray-700 font-body hover:text-brand-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block text-gray-700 font-body hover:text-brand-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTAs */}
          <div className="pt-4 border-t border-border space-y-2">
            <Link
              href="/readiness"
              className="block px-4 py-2 border-2 border-brand-primary text-brand-primary font-body font-semibold rounded-lg text-center hover:bg-brand-light transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Take Assessment
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 bg-brand-primary text-white font-body font-semibold rounded-lg text-center hover:opacity-90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
