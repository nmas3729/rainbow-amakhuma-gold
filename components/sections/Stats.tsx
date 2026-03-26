'use client'

import { useInView } from 'react-intersection-observer'
import { TrendingUp, Shield, Target, Zap } from 'lucide-react'

export function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { value: '60+', label: 'Years Combined Experience', icon: TrendingUp },
    { value: 'Level 2', label: 'BBBEE Certified Contributor', icon: Shield },
    { value: '100%', label: 'Commitment to Responsible Gold', icon: Target },
    { value: '24/7', label: 'Operational Capability', icon: Zap },
  ]

  return (
    <section className="bg-charcoal py-20 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-dark rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 transform ${
                inView ? 'animate-fade-in-up scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gold-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group hover:gold-shadow transition-all">
                <stat.icon className="w-8 h-8 text-gold-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-playfair font-bold gradient-gold-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 font-semibold uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
