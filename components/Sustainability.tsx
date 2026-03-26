'use client'

import { useInView } from 'react-intersection-observer'
import { Leaf, Users, ShieldCheck } from 'lucide-react'

export default function Sustainability() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="sustainability" className="section-padding bg-[#1a1a1a] text-white relative overflow-hidden" ref={ref}>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={inView ? 'animate-fade-in-up' : 'opacity-0'}>
            <span className="text-gold-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Commitment</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4 mb-8">Responsible <span className="gold-text">Gold Mining — Strategic Imperative</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed font-jakarta max-w-lg">
              Environmental stewardship and community prosperity are intrinsic to our business model. Every operational decision prioritizes long-term ecosystem integrity and stakeholder value creation. Our commitment extends beyond compliance—we aspire to set new standards for responsible gold mining in South Africa.
            </p>
            <div className="space-y-4">
               {[
                 'Zero-Harm Safety Culture with documented achievement targets',
                 'ISO 14001 Certified Environmental Management Systems',
                 'Minerals Council South Africa Code of Conduct Adherence',
                 '20-Year Mine Closure & Rehabilitation Plans',
                 'Water Recycling Programs targeting 85%+ cycle efficiency',
                 'Transparent Annual Sustainability Reporting'
               ].map((item, i) => (
                 <div key={i} className="flex items-center space-x-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                    <span>{item}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="grid gap-6">
            {[
              { icon: Leaf, title: 'Mine Rehabilitation & Environmental Restoration', desc: 'Proactive conversion of mining footprints into productive assets. Topsoil restoration, native plant revegetation, and water quality improvement. Welkom tailings facility undergoing concurrent rehabilitation—creating 60 hectares of usable agricultural land annually while ore processing continues. ISO 14001 certification drives continuous environmental improvement.' },
              { icon: Users, title: 'Community Economic Development & Job Creation', desc: 'Direct employment of 320+ full-time staff plus 800+ contractor positions across all operations. Skills transfer programs upskilling local communities in equipment operation, safety compliance, and business management. Preference for local supply chain procurement—38% of operations spending benefiting SA-based suppliers.' },
              { icon: ShieldCheck, title: 'Ethical Supply Chain & Responsible Sourcing', desc: 'International gold standards compliance ensuring conflict-free sourcing. Transparent auditing of all processing inputs and outputs. Partnership with independent third-party verifiers confirming responsible practices. Alignment with London Bullion Market Association (LBMA) responsible gold guidance.' }
            ].map((card, index) => (
              <div key={index} className={`flex items-start space-x-6 bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-gold-primary transition-all group ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-14 h-14 bg-gold-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6 text-gold-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 font-playfair text-xl">{card.title}</h3>
                  <p className="text-gray-400 text-sm font-jakarta leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
            <div className="bg-gold-primary/5 border border-gold-primary/20 p-6 rounded-2xl text-center">
               <span className="text-[10px] font-bold text-gold-primary uppercase tracking-[0.3em]">Corporate Responsibility Report 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
