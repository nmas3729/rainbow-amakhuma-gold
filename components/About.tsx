'use client'

import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-white text-charcoal" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair leading-tight">
            A Unified Force in<br /><span className="gold-text">South African Gold Mining</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto font-jakarta leading-relaxed">
            Rainbow Amakhuma Gold represents the convergence of two industry leaders, combining decades of operational expertise with cutting-edge processing technology to unlock value in South Africa&apos;s most challenging gold deposits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="bg-white p-10 rounded-3xl border-2 border-gold-primary/10 shadow-xl shadow-gold-glow/5 relative overflow-hidden group hover:border-gold-primary transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-primary/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:w-32 group-hover:h-32" />
            <span className="text-3xl mb-4 block">🤝</span>
            <h3 className="text-xl font-bold mb-4 font-playfair">Amakhuma</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-jakarta">Operational cornerstone with 51% stake in Siko Mining. Two decades of proven excellence across 15+ active mining operations. Expertise spans SHEQ compliance, regulatory navigation, and large-scale logistics management across Free State and Gauteng provinces.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl border-2 border-gold-primary/10 shadow-xl shadow-gold-glow/5 relative overflow-hidden group hover:border-gold-primary transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-primary/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:w-32 group-hover:h-32" />
            <span className="text-3xl mb-4 block">✨</span>
            <h3 className="text-xl font-bold mb-4 font-playfair">Rainbow Minerals</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-jakarta">Specialized processing innovations driving 92% gold recovery efficiency. Experts in CIL (Carbon-in-Leach) circuit design and gravity recovery optimization. Track record of transforming marginal projects into profitable operations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: '60+', sub: 'Years Combined Experience', desc: 'Driving SA Mining Innovation' },
            { label: 'Level 2', sub: 'BBBEE Contributor', desc: 'Advancing Economic Transformation' },
            { label: '100%', sub: 'South African Owned', desc: 'Committed to Local Development' }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-gray-50/50 border border-gray-100 group hover:bg-white hover:shadow-lg transition-all">
              <div className="text-4xl font-bold gold-text mb-2 font-playfair">{item.label}</div>
              <div className="text-sm font-bold text-charcoal mb-1 uppercase tracking-wider">{item.sub}</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
