'use client'

import { useInView } from 'react-intersection-observer'

export default function Capabilities() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const capabilities = [
    { title: "Gold Exploration & Development", icon: "🔍", desc: "JORC-compliant resource estimation and advanced geological modeling. Systematic prospecting across 15,000+ hectares of granted exploration rights with focus on high-grade zones." },
    { title: "Mining Engineering & Logistics", icon: "🏗️", desc: "Full-cycle mining operations from pre-development through rehabilitation. Integrated logistics network managing ore movement, equipment, and personnel safety across multiple sites with 24/7 operational capability." },
    { title: "Gold Processing Circuits", icon: "⚗️", desc: "Best-in-class CIL and gravity recovery circuits delivering 92% gold recovery rates. Proprietary optimization protocols reducing processing costs while maximizing ore throughput." },
    { title: "Artisanal Integration", icon: "🤝", desc: "Structured formalization program for artisanal miners. Technical training, equipment provision, and market-linked processing facilities benefiting 500+ local operators with documented income increases." },
    { title: "Mine Rehabilitation & Closure", icon: "🌱", desc: "Comprehensive rehabilitation strategy transforming mining footprints into productive assets. Alignment with ISO 14001 standards and biodiversity commitments ensuring community legacy beyond extraction." },
    { title: "Contract Mining Services", icon: "📋", desc: "Turnkey contract mining for independent operators and large-scale mining groups. Flexible service models from equipment provision to full operational management with guaranteed uptime and safety metrics." }
  ]

  return (
    <section id="capabilities" className="section-padding bg-white text-charcoal" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair">
            Our <span className="gold-text">Gold Capabilities</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-10 border-2 border-gold-primary/10 shadow-xl shadow-gold-glow/5 hover:border-gold-primary transition-all group ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">{cap.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-jakarta">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-gray-100 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: 'JORC', sub: 'International Compliance Standards' },
            { metric: '92%', sub: 'Industry-Leading Recovery Efficiency' },
            { metric: 'ISO', sub: 'Certified Environmental Management' },
            { metric: 'BBBEE', sub: 'Transformation Leadership' }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl font-bold gold-text mb-1 font-playfair group-hover:scale-110 transition-transform">{item.metric}</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
