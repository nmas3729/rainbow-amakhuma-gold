'use client'

import { useInView } from 'react-intersection-observer'
import { Droplets, Users, Leaf, Award, Shield, Heart, Globe } from 'lucide-react'

export function Sustainability() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const commitments = [
    'Zero-harm workplace culture with documented safety targets and regular audits',
    'Direct economic upliftment: 1,000+ local jobs and contractor opportunities created',
    'ISO 14001-certified environmental management on all active operations',
    'Annual sustainability reports published, independently verified',
    'Structured formalization and support for 500+ artisanal miners across operating regions',
    'Water recycling programmes targeting 85%+ efficiency across all processing circuits',
  ]

  const initiatives = [
    { icon: Leaf, title: 'Mine Rehabilitation', description: 'Concurrent topsoil restoration and revegetation programmes convert mined land into productive agricultural and community assets.' },
    { icon: Users, title: 'Community Development', description: 'At least 38% of operational spend directed to local suppliers, supported by structured skills training and enterprise development.' },
    { icon: Droplets, title: 'Water Stewardship', description: 'Closed-loop processing circuits and strict site water management significantly reduce consumption and protect local water resources.' },
  ]

  return (
    <section id="sustainability" className="section-padding bg-charcoal text-white relative overflow-hidden" ref={ref}>
      {/* Gold Vein Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(198,164,59,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold-primary font-semibold text-sm uppercase tracking-wider border-l-4 border-gold-primary pl-3">
              Responsible Mining
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-6 mb-6">
              Responsible{' '}
              <span className="gradient-gold-text">Gold Mining</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At Rainbow Amakhuma Gold, responsible mining is not a compliance exercise — it is a core business commitment 
              that shapes every decision we make, from exploration through to final mine closure.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our sustainability framework is structured around the World Gold Council&apos;s Responsible Gold Framework and 
              independently verified, ensuring that our environmental, social, and governance performance remains 
              transparent, measurable, and continuously improved.
            </p>

            {/* ESG Commitments */}
            <div className="space-y-4 mb-8">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 group ${
                    inView ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gold-primary/20 flex items-center justify-center group-hover:bg-gold-primary/30 transition-colors">
                    <Award className="w-3 h-3 text-gold-primary" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{commitment}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-gold-primary" />
                <span className="text-sm">ISO 14001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 text-gold-primary" />
                <span className="text-sm">ESG Transparent</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Heart className="w-4 h-4 text-gold-primary" />
                <span className="text-sm">People Centric</span>
              </div>
            </div>
          </div>

          {/* Right Content - Initiatives */}
          <div className="space-y-5">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-gold-primary/30 transition-all duration-500 transform hover:-translate-x-2 ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-primary/20 to-gold-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <initiative.icon className="w-7 h-7 text-gold-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gold-primary transition-colors">{initiative.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{initiative.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Impact Stat */}
            <div className="bg-gradient-to-r from-gold-primary/20 to-gold-dark/20 rounded-2xl p-6 text-center border border-gold-primary/30">
              <div className="text-3xl font-playfair font-bold text-gold-primary mb-2">100%</div>
              <div className="text-white font-semibold">Responsible Gold Commitment</div>
              <div className="text-gray-400 text-sm mt-1">Audited and aligned with World Gold Council standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
