'use client'

import { useInView } from 'react-intersection-observer'
import { Shield, TrendingUp, Users, Leaf, Award } from 'lucide-react'

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partners = [
    {
      name: 'Amakhuma',
      description: 'A proven leader in mining engineering, bulk logistics, and regulatory compliance — with a 20-year track record across 15+ active operations in Free State and Gauteng.',
      icon: Shield,
      stats: '60+ Years',
    },
    {
      name: 'Rainbow Minerals',
      description: 'Gold processing specialists delivering industry-leading 92% recovery rates through advanced CIL circuit design and gravity recovery, turning marginal deposits into profitable operations.',
      icon: TrendingUp,
      stats: 'Gold Specialists',
    },
  ]

  const values = [
    { title: 'Gold Focus', description: 'Our entire operational model is built around gold — bringing specialized expertise, focused capital, and dedicated resources to every project.', icon: Award },
    { title: 'Community First', description: 'We are committed to creating meaningful employment, equitable skills transfer, and measurable socio-economic growth in every region we operate.', icon: Users },
    { title: 'Environmental Stewardship', description: 'ISO 14001-aligned practices guide every operational decision — from active mining to concurrent rehabilitation and long-term land restoration.', icon: Leaf },
  ]

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary font-semibold text-sm uppercase tracking-wider border-b-2 border-gold-primary pb-2">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-6 mb-6">
            A Trusted{' '}
            <span className="gradient-gold-text">Gold-Focused</span>{' '}
            Joint Venture
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Rainbow Amakhuma Gold is the strategic union of two industry leaders — Amakhuma and Rainbow Minerals — 
            combining deep operational expertise with cutting-edge gold processing technology. With over 60 years of 
            combined experience in South Africa&apos;s mining sector, we are uniquely positioned to develop gold assets 
            responsibly and create lasting value for partners, communities, and investors.
          </p>
        </div>

        {/* Partners Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:border-gold-primary/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-primary/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-primary/20 to-gold-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <partner.icon className="w-8 h-8 text-gold-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{partner.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{partner.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-gold-primary/10 rounded-full">
                  <span className="text-gold-primary font-semibold text-sm">{partner.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className={`text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl gold-border transform hover:scale-105 transition-all duration-300 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <div className="text-5xl font-playfair font-bold gradient-gold-text mb-3">60+</div>
            <div className="text-gray-600 font-semibold">Years Combined Experience</div>
            <div className="text-sm text-gray-400 mt-1">Decades of proven South African mining excellence</div>
          </div>
          <div className={`text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl gold-border transform hover:scale-105 transition-all duration-300 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '450ms' }}>
            <div className="text-5xl font-playfair font-bold gradient-gold-text mb-3">Level 2</div>
            <div className="text-gray-600 font-semibold">BBBEE Contributor</div>
            <div className="text-sm text-gray-400 mt-1">Committed to inclusive economic transformation</div>
          </div>
          <div className={`text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl gold-border transform hover:scale-105 transition-all duration-300 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <div className="text-5xl font-playfair font-bold gradient-gold-text mb-3">100%</div>
            <div className="text-gray-600 font-semibold">South African Owned</div>
            <div className="text-sm text-gray-400 mt-1">Rooted in and reinvesting in South Africa</div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center p-6 group ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-gold-primary/10 to-gold-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-10 h-10 text-gold-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
