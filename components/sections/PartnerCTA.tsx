'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'

export function PartnerCTA() {
  return (
    <section
      id="partner"
      className="section-padding bg-charcoal relative overflow-hidden"
      aria-label="Partner with us"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(198,164,59,0.07)_0%,transparent_70%)]" />
      </div>

      {/* Top gold rule */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/15 border border-gold-primary/30 mb-8">
            <span className="w-1.5 h-1.5 bg-gold-primary rounded-full animate-pulse" />
            <span className="text-gold-primary font-semibold text-xs uppercase tracking-[0.2em]">
              Investment Opportunities
            </span>
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Partner With{' '}
            <span className="gradient-gold-text block mt-1">
              Rainbow Amakhuma Gold
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            We welcome serious inquiries from investors, off-take partners, and industry operators
            looking to participate in South Africa&apos;s next generation of responsible gold production.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.18 }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-dark text-white rounded-full font-semibold tracking-wide shadow-lg hover:shadow-gold-glow/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              Initiate Due Diligence
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-primary/50 text-gold-primary hover:bg-gold-primary hover:text-white rounded-full font-semibold tracking-wide transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-14 pt-10 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              'Level 2 BBBEE Certified',
              '100% South African Owned',
              'ISO 14001 Aligned',
              'World Gold Council Standards',
            ].map((label) => (
              <span key={label} className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gold rule */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
    </section>
  )
}
