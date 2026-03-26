import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Investment Disclaimer',
  description: 'Investment and forward-looking statement disclaimer for Rainbow Amakhuma Gold.',
  robots: { index: true, follow: true },
}

export default function Disclaimer() {
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
        <h1 className="text-4xl font-playfair font-bold text-charcoal mb-2">Investment Disclaimer</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed font-jakarta">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-amber-900 font-semibold text-sm">
              IMPORTANT: Please read this disclaimer carefully before using this website or relying on any information
              contained herein for investment or business decisions.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">1. General Information Only</h2>
            <p>
              The information published on this website by Rainbow Amakhuma Gold (Pty) Ltd is provided for general
              informational purposes only. It does not constitute financial advice, investment advice, trading advice,
              or any other form of professional advice. You should not rely on any content on this website as the
              basis for any investment decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">2. Forward-Looking Statements</h2>
            <p>
              This website may contain forward-looking statements, including projections, estimates, forecasts,
              and plans relating to Rainbow Amakhuma Gold&apos;s operations, projects, and financial performance. These
              statements are based on current expectations and assumptions and are subject to significant risks
              and uncertainties.
            </p>
            <p className="mt-3">
              Actual results, performance, or outcomes may differ materially from those expressed or implied by
              any forward-looking statement. Rainbow Amakhuma Gold undertakes no obligation to update or revise any
              forward-looking statement to reflect events or circumstances after the date of publication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">3. No Offer or Solicitation</h2>
            <p>
              Nothing on this website constitutes or should be construed as an offer to sell, or a solicitation
              of an offer to purchase, any securities, financial instruments, or interests in Rainbow Amakhuma Gold
              or any related entity, in any jurisdiction. Any such offer or solicitation will be made only through
              formal, legally compliant documentation to qualified parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">4. Mineral Resource & Reserve Statements</h2>
            <p>
              Any references to mineral resources, mineral reserves, gold grades, recovery rates, or production
              estimates on this website are indicative and have not been independently verified unless explicitly
              stated. References to JORC-compliance or similar standards apply only where formally declared in
              official technical reports. Prospective investors should seek independent technical and financial
              advice before making any decisions based on mineral resource estimates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">5. Regulatory Compliance</h2>
            <p>
              Rainbow Amakhuma Gold operates in accordance with applicable South African mining law, the Mineral
              and Petroleum Resources Development Act (MPRDA), BBBEE legislation, and environmental regulations.
              Information regarding regulatory compliance reflects our current understanding and may be subject
              to change as legislation evolves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">6. Third-Party Information</h2>
            <p>
              Where this website references third-party data, standards, or frameworks (e.g., World Gold Council,
              LBMA, ISO), Rainbow Amakhuma Gold does not guarantee the accuracy, completeness, or currency of
              such third-party information. Links to external websites are provided for convenience only and do
              not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Rainbow Amakhuma Gold and its directors, officers,
              and employees accept no liability for any loss or damage arising from reliance on the information
              published on this website, including any direct, indirect, incidental, or consequential loss.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">8. Governing Law</h2>
            <p>
              This disclaimer is governed by and shall be construed in accordance with the laws of the Republic
              of South Africa. Any disputes arising in connection with this disclaimer shall be subject to the
              exclusive jurisdiction of the South African courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">9. Contact</h2>
            <p>
              For queries regarding this disclaimer or our investment-related communications:
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
              This disclaimer should be reviewed and approved by a qualified legal professional before the website goes live. Rainbow Amakhuma Gold holds all rights to this document.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
