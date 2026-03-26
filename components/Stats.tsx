'use client'

import { useInView } from 'react-intersection-observer'

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: "60+", label: "Years Experience", sub: "Operational Excellence" },
    { number: "Level 2", label: "BBBEE Contributor", sub: "Proudly South African" },
    { number: "210,000", label: "Annual Gold Production", sub: "Capacity Across Operations" },
    { number: "100%", label: "Shareholder Alignment", sub: "Unified Strategic Vision" }
  ]

  return (
    <section id="stats" className="py-24 bg-[#1a1a1a] text-white overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-10 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center transition-all duration-700 hover:bg-gold-primary/10 hover:border-gold-primary group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-gold-primary text-xl">🏆</span>
              </div>
              <div className="text-4xl md:text-5xl font-bold font-playfair gold-text mb-2">{stat.number}</div>
              <div className="text-base font-bold mb-1 font-jakarta">{stat.label}</div>
              <div className="text-[10px] opacity-40 uppercase tracking-[0.2em] font-bold font-jakarta">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
