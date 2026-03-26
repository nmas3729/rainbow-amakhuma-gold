'use client'

import { useInView } from 'react-intersection-observer'
import { 
  MapPin, 
  HardHat, 
  Factory, 
  TrendingUp, 
  Truck, 
  Recycle,
  Sparkles
} from 'lucide-react'

export function Capabilities() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const capabilities = [
    {
      icon: MapPin,
      title: 'Gold Exploration & Development',
      description: 'JORC-compliant resource estimation across 15,000+ hectares of active exploration rights, with a focused pipeline of high-grade targets in South Africa\'s most productive gold corridors.',
      gradient: 'from-amber-700 to-gold-primary',
    },
    {
      icon: HardHat,
      title: 'Mining Engineering & Logistics',
      description: '60+ years of integrated mine planning, safety management, and bulk logistics expertise across multiple operational sites in Free State and Gauteng.',
      gradient: 'from-stone-700 to-charcoal',
    },
    {
      icon: Factory,
      title: 'Gold Processing Technology',
      description: 'Advanced CIL and gravity recovery circuits delivering a consistent 92% gold recovery rate, with proprietary optimizations that lower processing costs and maximize throughput.',
      gradient: 'from-amber-700 to-gold-primary',
    },
    {
      icon: TrendingUp,
      title: 'Project Management',
      description: 'Full-cycle oversight from pre-feasibility through to production ramp-up, with a proven track record of delivering on schedule and within budget.',
      gradient: 'from-stone-700 to-charcoal',
    },
    {
      icon: Truck,
      title: 'Commodity Trading & Logistics',
      description: 'Established trading relationships, transparent pricing mechanisms, and efficient bulk handling infrastructure enabling reliable, high-value gold off-take.',
      gradient: 'from-amber-700 to-gold-primary',
    },
    {
      icon: Recycle,
      title: 'Mine Rehabilitation',
      description: 'Structured 20-year closure plans with concurrent rehabilitation converting mined land into productive community assets — aligned with ISO 14001 and Minerals Council standards.',
      gradient: 'from-stone-700 to-charcoal',
    },
  ]

  const achievements = [
    { value: '60+', label: 'Years Combined Experience', suffix: 'Gold mining in South Africa' },
    { value: 'Gold Focus', label: 'Specialized Operations', suffix: 'Dedicated to gold excellence' },
    { value: '92%', label: 'Gold Recovery Rate', suffix: 'Industry-leading efficiency' },
    { value: 'Level 2', label: 'BBBEE Rating', suffix: 'Committed to transformation' },
  ]

  return (
    <section id="capabilities" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none text-gold-primary">
        <div className="absolute top-20 left-10 w-72 h-72 bg-current rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-dark rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary font-semibold text-sm uppercase tracking-wider border-b-2 border-gold-primary pb-2">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-6 mb-6">
            Our{' '}
            <span className="gradient-gold-text">Gold Capabilities</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We deliver integrated expertise across the entire gold value chain — from discovery to delivery
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-primary/20 to-gold-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <cap.icon className="w-7 h-7 text-gold-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold-primary transition-colors">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cap.description}</p>
              </div>
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${cap.gradient} w-0 group-hover:w-full transition-all duration-500`} />
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white rounded-2xl gold-border hover:gold-shadow transition-all transform hover:scale-105 ${
                inView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 6) * 100}ms` }}
            >
              <Sparkles className="w-8 h-8 text-gold-primary mx-auto mb-3" />
              <div className="text-2xl font-playfair font-bold gradient-gold-text mb-2">{achievement.value}</div>
              <div className="font-semibold text-gray-800 mb-1">{achievement.label}</div>
              <div className="text-xs text-gray-500">{achievement.suffix}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
