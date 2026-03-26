import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Rainbow Amakhuma Gold — how we collect, use, and protect your personal information in compliance with POPIA.',
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header bar */}
      <div className="bg-charcoal py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-gold-primary font-playfair font-bold text-xl hover:opacity-80 transition-opacity">
            ← Rainbow Amakhuma Gold
          </Link>
          <span className="text-white/40 text-sm">Legal</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-playfair font-bold text-charcoal mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed font-jakarta">

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">1. Introduction</h2>
            <p>
              Rainbow Amakhuma Gold (Pty) Ltd (&ldquo;Rainbow Amakhuma Gold&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting
              your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, share,
              and protect personal information in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA)
              and any other applicable South African data protection legislation.
            </p>
            <p className="mt-3">
              By accessing our website or submitting an inquiry, you consent to the collection and use of your personal
              information as described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">2. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Contact details:</strong> Full name, email address, phone number, and company or organisation name.</li>
              <li><strong>Inquiry content:</strong> Information you provide in contact forms, emails, or meeting requests.</li>
              <li><strong>Technical data:</strong> IP address, browser type, and pages visited, collected automatically via standard web server logs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">3. How We Use Your Information</h2>
            <p>We use personal information only for the following lawful purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>To respond to inquiries, partnership requests, or off-take agreement discussions.</li>
              <li>To communicate relevant updates about Rainbow Amakhuma Gold&apos;s projects and developments.</li>
              <li>To comply with legal, regulatory, and reporting obligations.</li>
              <li>To improve our website and communications.</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">4. Information Sharing</h2>
            <p>
              We may share your information with trusted professional service providers (e.g., legal advisors, IT support)
              who are contractually obligated to protect your data and use it only for specified purposes. We will disclose
              information where required to do so by law or regulatory authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this
              policy, or as required by applicable law. Once information is no longer required, it is securely deleted
              or anonymised.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">6. Your Rights Under POPIA</h2>
            <p>As a data subject, you have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Request access to your personal information held by us.</li>
              <li>Request correction of inaccurate or outdated information.</li>
              <li>Object to the processing of your personal information.</li>
              <li>Request deletion of your personal information, subject to certain conditions.</li>
              <li>Lodge a complaint with the Information Regulator of South Africa.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at:{' '}
              <a href="mailto:info@rainbowamakhuma.co.za" className="text-amber-700 hover:underline">
                info@rainbowamakhuma.co.za
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">7. Security</h2>
            <p>
              We implement appropriate technical and organisational safeguards to protect your personal information
              against unauthorised access, loss, or disclosure. However, no internet transmission is entirely secure,
              and we cannot guarantee absolute data security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">8. Cookies</h2>
            <p>
              Our website may use standard session cookies to improve user experience. We do not use tracking or
              advertising cookies. You may disable cookies in your browser settings without affecting core site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be published on this page with
              an updated date. Continued use of our website following changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">10. Contact</h2>
            <p>
              For privacy-related queries or to exercise your rights, contact our Information Officer:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p><strong>Rainbow Amakhuma Gold (Pty) Ltd</strong></p>
              <p>Johannesburg, South Africa</p>
              <p>
                Email:{' '}
                <a href="mailto:info@rainbowamakhuma.co.za" className="text-amber-700 hover:underline">
                  info@rainbowamakhuma.co.za
                </a>
              </p>
            </div>
          </section>

          <div className="pt-8 border-t border-gray-100 mt-8">
            <p className="text-xs text-gray-400 italic">
              This Privacy Policy should be reviewed by a qualified legal professional before going live. Rainbow Amakhuma Gold holds all rights to this document.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
