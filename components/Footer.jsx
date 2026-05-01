import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@dejin.io';
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/dejin';

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-2">Dejin</h3>
            <p className="text-gray-300 font-body text-sm leading-relaxed">
              Dejin transforms operations through AI. Working systems in 3 weeks, not 6 months.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/chatbot"
                  className="text-gray-300 font-body text-sm hover:text-brand-primary transition-colors"
                >
                  Customer Service Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="/services/document-routing"
                  className="text-gray-300 font-body text-sm hover:text-brand-primary transition-colors"
                >
                  Document Routing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/status-automation"
                  className="text-gray-300 font-body text-sm hover:text-brand-primary transition-colors"
                >
                  Status Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="font-display font-bold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cortex"
                  className="text-gray-300 font-body text-sm hover:text-brand-primary transition-colors"
                >
                  Cortex
                </Link>
              </li>
              <li>
                <Link
                  href="/method"
                  className="text-gray-300 font-body text-sm hover:text-brand-primary transition-colors"
                >
                  Our Method
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 font-body text-sm hover:text-brand-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 font-body text-sm hover:text-brand-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools Column */}
          <div>
            <h4 className="font-display font-bold mb-4">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/readiness"
                  className="text-gray-300 font-body text-sm hover:text-brand-primary transition-colors"
                >
                  AI Readiness Assessment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="border-t border-gray-700 pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Connect */}
            <div>
              <h4 className="font-display font-bold mb-4">Connect</h4>
              <div className="space-y-2">
                <p className="font-body text-sm">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-gray-300 hover:text-brand-primary transition-colors"
                  >
                    {contactEmail}
                  </a>
                </p>
                <p className="font-body text-sm">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-brand-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex md:justify-end">
              <Link
                href="/contact"
                className="px-6 py-3 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-gray-400">
            © {currentYear} Dejin. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-brand-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-brand-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
