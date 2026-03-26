'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShieldCheck, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  const [particles, setParticles] = useState<{ x: number; y: number; s: number; d: number }[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles([...Array(15)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 150 + 50,
      d: Math.random() * 10,
    })))
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-black">
      {/* Glow Effects - Based on screenshot */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold-primary/5 rounded-full blur-[100px] animate-pulse transition-delay-1000" />
      
      {/* Background circles - rendered after mount to prevent hydration mismatch */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {particles.map((p, i) => (
            <div 
              key={i}
              className="absolute rounded-full border border-gold-primary/30"
              style={{
                width: p.s + 'px',
                height: p.s + 'px',
                left: p.x + '%',
                top: p.y + '%',
                animation: `pulse-slow ${p.d + 5}s infinite ease-in-out`
              }}
            />
          ))}
        </div>
      )}

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-4xl">
          <div className="mb-6 animate-fade-in-up">
            <span className="text-gold-primary font-bold text-[10px] uppercase tracking-[0.4em] bg-gold-primary/10 px-4 py-2 rounded-full border border-gold-primary/20">
               Strategic Gold Partnership
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-playfair font-bold mb-8 animate-fade-in-up leading-[1.1]">
            South Africa&apos;s Integrated<br />
            <span className="gradient-gold-text">Gold Solution</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200 font-jakarta">
            Strategic partnership uniting <span className="text-white font-bold">Amakhuma&apos;s</span> operational excellence with <span className="text-white font-bold">Rainbow Minerals&apos;</span> processing innovation. Level 2 BBBEE contributor backed by 60+ years of combined mining leadership in South Africa&apos;s most productive gold regions.
          </p>

          <div className="flex flex-wrap gap-5 mb-16 animate-fade-in-up animation-delay-400">
            <Link
              href="#capabilities"
              className="px-10 py-5 bg-gradient-to-r from-[#C6A43B] to-[#A68936] text-white rounded-full font-bold shadow-xl shadow-gold-glow/20 transform hover:scale-105 transition-all text-sm uppercase tracking-widest"
            >
              Explore Capabilities
            </Link>
            <Link
              href="#contact"
              className="px-10 py-5 border-2 border-gold-primary/50 text-gold-primary hover:bg-gold-primary hover:text-white rounded-full font-bold transition-all text-sm uppercase tracking-widest"
            >
              Partner With Us
            </Link>
          </div>

          <div className="flex flex-wrap gap-12 pt-10 border-t border-white/10 animate-fade-in-up animation-delay-600">
            {[
              { icon: ShieldCheck, val: 'Level 2', txt: 'BBBEE Status' },
              { icon: TrendingUp, val: '92%', txt: 'Gold Recovery Rate' },
              { icon: Users, val: '60+', txt: 'Years Combined Expertise' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                 <item.icon className="text-gold-primary" size={24} />
                 <div>
                    <div className="text-xl font-bold font-playfair">{item.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.txt}</div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp - Reference from screenshot */}
      <a 
        href="https://wa.me/[CONTACT_NUMBER]" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform shadow-green-500/20"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448L0 24zm5.835-3.266c1.551.921 3.234 1.407 4.958 1.408 5.405 0 9.803-4.397 9.805-9.802 0-2.618-1.02-5.08-2.871-6.932-1.85-1.85-4.311-2.872-6.929-2.872-5.406 0-9.803 4.397-9.806 9.802 0 1.81.474 3.578 1.373 5.116L1.23 21.047l3.44-.913z" /></svg>
      </a>
    </section>
  )
}
