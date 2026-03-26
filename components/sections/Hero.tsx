'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Award, TrendingUp } from 'lucide-react'

export function Hero() {
  const [particles, setParticles] = useState<{
    width: string;
    height: string;
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles([...Array(20)].map(() => ({
      width: Math.random() * 100 + 50 + 'px',
      height: Math.random() * 100 + 50 + 'px',
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      animationDelay: Math.random() * 5 + 's',
      animationDuration: Math.random() * 8 + 4 + 's',
    })))
  }, [])

  const stats = [
    { icon: Shield, value: 'Level 2', label: 'BBBEE Compliant' },
    { icon: TrendingUp, value: '60+', label: 'Years Experience' },
    { icon: Award, value: 'Minerals', label: 'Council Member' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-charcoal">
      {/* Background - Pure CSS/SVG (Copyright-Free alternative) */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,#1e1e1e_0%,#0a0a0a_100%)]"
        />
        {/* Geology / Ore pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 50 Q 25 25 50 50 T 100 50' stroke='%23C6A43B' stroke-width='0.5' fill='none'/%3E%3Cpath d='M0 70 Q 25 45 50 70 T 100 70' stroke='%23C6A43B' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* Animated Gold Particles - Only rendered after mount to prevent hydration mismatch */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute bg-gold-primary/20 rounded-full animate-pulse"
              style={{
                width: particle.width,
                height: particle.height,
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration,
              }}
            />
          ))}
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Gold Badge - PREMIER JOINT VENTURE */}
          <div className="mb-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-primary/20 backdrop-blur-sm border border-gold-primary/40">
              <span className="w-2 h-2 bg-gold-primary rounded-full mr-2 animate-pulse" />
              <span className="text-gold-primary text-sm font-semibold tracking-wide">PREMIER JOINT VENTURE</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 animate-fade-in-up text-white">
            South Africa&apos;s Premier
            <span className="gradient-gold-text block mt-2">Gold Partnership</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
            A certified Level 2 BBBEE joint venture bringing together Amakhuma&apos;s 60+ years of operational expertise 
            and Rainbow Minerals&apos; gold processing innovation. Together, we unlock the full potential of South Africa&apos;s 
            gold resources — responsibly, efficiently, and with lasting community impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up animation-delay-400">
            <Link
              href="#capabilities"
              className="group relative overflow-hidden inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-primary to-gold-dark text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg text-sm md:text-base"
            >
              <span className="relative z-10">Explore Our Capabilities</span>
              <ArrowRight className="ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white rounded-full font-semibold transition-all backdrop-blur-sm text-sm md:text-base"
            >
              Partner With Us
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-white/20 animate-fade-in-up animation-delay-600">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-full bg-gold-primary/20 flex items-center justify-center group-hover:bg-gold-primary/30 transition-colors">
                  <stat.icon className="w-5 h-5 text-gold-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 border-2 border-gold-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
