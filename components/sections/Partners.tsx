'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Handshake } from 'lucide-react'

type Partner = {
  name: string
  url: string
  logo: string
  role: string
  description: string
  highlights: string[]
  roundedCorners: boolean
  fallbackInitial: string
}

const partners: Partner[] = [
  {
    name: 'Rainbow Nation Minerals',
    url: 'https://rainbowminerals.co.za',
    logo: '/images/rmnlogo.jpg',
    role: 'JOINT VENTURE PARTNER',
    description:
      'A capital raising, mining, and commodity trading company built on transparency and due diligence. Successfully raised over R240 million across the mineral and commodities sectors.',
    highlights: ['Capital Raising', 'Due Diligence', 'Commodity Trading', 'Mining Project Development'],
    roundedCorners: false,
    fallbackInitial: 'RNM',
  },
  {
    name: 'Amakhuma',
    url: 'https://amakhuma.co.za',
    logo: '/images/amakhumalogo.jpg',
    role: 'JOINT VENTURE PARTNER & MAJORITY SHAREHOLDER',
    description:
      'A forward-thinking mining company with a strong commitment to excellence, sustainability, and innovation. Holds a 51% majority stake in Siko Mining Services.',
    highlights: ['Mining Operations', 'Equipment & Personnel', 'Reclamation & Restoration', 'Consultancy Services'],
    roundedCorners: false,
    fallbackInitial: 'A',
  },
  {
    name: 'Siko Mining Services',
    url: 'http://sikomining.co.za',
    logo: '/images/sikologo.jpg',
    role: 'OPERATIONAL PARTNER (51% OWNED BY AMAKHUMA)',
    description:
      'A Level 2 BBBEE-compliant mining entity with over 60 years of combined experience. Specialises in contracting expertise, fine coal & pelletising technology, and project management.',
    highlights: ['Mining Consultancy', 'Bulk Transportation', 'Commodity Trading', 'Mine Rehabilitation'],
    roundedCorners: false,
    fallbackInitial: 'S',
  },
  {
    name: 'NMAS Innovations',
    url: 'https://nmas.co.za',
    logo: '/images/nmaslogo.jpg',
    role: 'TECHNOLOGY PARTNER | LEVEL 1 BBBEE',
    description:
      'Mining IT & OT specialists delivering cloud infrastructure, SCADA security, and 24/7 monitoring for mining operations across Africa.',
    highlights: ['Cloud Infrastructure', 'SCADA Security', '24/7 Monitoring', '100% Uptime'],
    roundedCorners: true,
    fallbackInitial: 'N',
  },
]

function PartnerLogo({ src, name, roundedCorners, fallbackInitial }: { src: string; name: string, roundedCorners?: boolean, fallbackInitial?: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`w-14 h-14 border border-gold-primary/20 bg-gradient-to-br from-gold-primary/20 to-gold-primary/5 flex items-center justify-center ${roundedCorners ? 'rounded-full' : 'rounded-xl'}`}>
        <span className="text-gold-primary font-playfair font-bold text-xl">{fallbackInitial || name.charAt(0)}</span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} logo`}
      className={`h-14 w-auto max-w-[140px] border border-white/5 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${roundedCorners ? 'rounded-full overflow-hidden' : ''}`}
      onError={() => setFailed(true)}
    />
  )
}

export function Partners() {
  return (
    <section
      id="partners"
      className="section-padding bg-deep-charcoal relative overflow-hidden"
      aria-label="Partners and accreditations"
    >
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(198,164,59,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(198,164,59,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(198,164,59,0.06)_0%,transparent_65%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/15 border border-gold-primary/30 mb-6 font-semibold text-xs tracking-[0.2em] uppercase text-gold-primary">
            <Handshake className="w-3.5 h-3.5" />
            Strategic Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Built on{' '}
            <span className="gradient-gold-text">Trusted Relationships</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our operations are supported by a network of world-class partners across
            finance, engineering, technology, and operational expertise.
          </p>
        </motion.div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-gold-primary/35 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Logo */}
                <div className="flex items-center justify-between mb-5">
                  <PartnerLogo src={partner.logo} name={partner.name} roundedCorners={partner.roundedCorners} fallbackInitial={partner.fallbackInitial} />
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-gold-primary transition-colors duration-300 self-start" />
                </div>

                {/* Role pill */}
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold-primary/10 border border-gold-primary/20 text-gold-primary text-[10px] font-semibold uppercase tracking-widest mb-3">
                  {partner.role}
                </span>

                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-gold-primary transition-colors duration-300 leading-snug">
                  {partner.name}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {partner.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {partner.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-0.5 bg-white/[0.06] rounded text-[11px] text-gray-400 border border-white/[0.08]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
