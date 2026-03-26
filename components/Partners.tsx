'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Partners() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const partners = [
    {
      name: "Rainbow Nation Minerals",
      url: "https://rainbowminerals.co.za",
      logo: "/images/rmnlogo.jpg",
      logoAlt: "Rainbow Nation Minerals logo",
      description: "A capital raising, mining, and commodity trading company built on transparency and due diligence. Successfully raised over R240 million across the mineral and commodities sectors.",
      role: "JOINT VENTURE PARTNER",
      roundedCorners: false,
      fallbackInitial: "RNM",
      highlights: ["Capital Raising", "Due Diligence", "Commodity Trading", "Mining Project Development"]
    },
    {
      name: "Amakhuma",
      url: "https://amakhuma.co.za",
      logo: "/images/amakhumalogo.jpg",
      logoAlt: "Amakhuma logo",
      description: "A forward-thinking mining company with a strong commitment to excellence, sustainability, and innovation. Holds a 51% majority stake in Siko Mining Services.",
      role: "JOINT VENTURE PARTNER & MAJORITY SHAREHOLDER",
      roundedCorners: false,
      fallbackInitial: "A",
      highlights: ["Mining Operations", "Equipment & Personnel", "Reclamation & Restoration", "Consultancy Services"]
    },
    {
      name: "Siko Mining Services",
      url: "http://sikomining.co.za",
      logo: "/images/sikologo.jpg",
      logoAlt: "Siko Mining Services logo",
      description: "A Level 2 BBBEE-compliant mining entity with over 60 years of combined experience. Specialises in contracting expertise, fine coal & pelletising technology, and project management.",
      role: "OPERATIONAL PARTNER (51% OWNED BY AMAKHUMA)",
      roundedCorners: false,
      fallbackInitial: "S",
      highlights: ["Mining Consultancy", "Bulk Transportation", "Commodity Trading", "Mine Rehabilitation"]
    },
    {
      name: "NMAS Innovations",
      url: "https://nmas.co.za",
      logo: "/images/nmaslogo.jpg",
      logoAlt: "NMAS Innovations logo",
      description: "Mining IT & OT specialists delivering cloud infrastructure, SCADA security, and 24/7 monitoring for mining operations across Africa.",
      role: "TECHNOLOGY PARTNER | LEVEL 1 BBBEE",
      roundedCorners: true,
      fallbackInitial: "N",
      highlights: ["Cloud Infrastructure", "SCADA Security", "24/7 Monitoring", "100% Uptime"]
    }
  ]

  const handleImageError = (partnerName: string) => {
    setImageErrors(prev => ({ ...prev, [partnerName]: true }))
  }

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Strategic <span className="gold-text">Partners</span>
          </h2>
          <div className="w-20 h-1 gold-gradient mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Trusted Relationships — Our operations are supported by a network of world-class partners across finance, engineering, technology, and operational expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 rounded-xl p-6 gold-border hover:transform hover:scale-105 transition-all duration-300 block group"
            >
              {/* Logo Section */}
              <div className="flex justify-center mb-4 h-20">
                {!imageErrors[partner.name] ? (
                  <div className={`relative w-full max-w-[120px] h-full ${partner.roundedCorners ? 'rounded-full overflow-hidden' : ''}`}>
                    <Image
                      src={partner.logo}
                      alt={partner.logoAlt}
                      fill
                      className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      onError={() => handleImageError(partner.name)}
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full gold-border flex items-center justify-center bg-gray-800">
                    <span className="text-xl font-bold gold-text">
                      {partner.fallbackInitial}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="text-center mb-3">
                <span className="text-xs font-semibold gold-text tracking-wider">
                  {partner.role}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white text-center mb-3 group-hover:gold-text transition">
                {partner.name}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4 text-center">
                {partner.description}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {partner.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
