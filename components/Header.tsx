'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CAPABILITIES', href: '#capabilities' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SUSTAINABILITY', href: '#sustainability' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl">⛏️</span>
          <div className="font-playfair font-bold">
            <span className="gold-text block leading-tight text-xl">Rainbow</span>
            <span className={`${isScrolled ? 'text-charcoal' : 'text-white'} text-[10px] uppercase tracking-[0.2em] block leading-tight font-bold transition-colors`}>Amakhuma Gold</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest">
          {navItems.map(item => (
            <Link 
              key={item.label} 
              href={item.href} 
              className={`${isScrolled ? 'text-charcoal' : 'text-white'} hover:text-gold-primary transition-all duration-300 relative group`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <button className="bg-gradient-to-r from-[#A68936] to-[#C6A43B] px-8 py-2.5 rounded-full text-white text-[10px] shadow-lg shadow-gold-glow/20 transform hover:scale-105 active:scale-95 transition-all font-bold uppercase tracking-widest">
            Partner
          </button>
        </nav>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className={`${isScrolled ? 'text-charcoal' : 'text-white'} md:hidden p-2`}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
           <span className="text-2xl">⛏️</span>
           <button onClick={() => setIsMobileMenuOpen(false)} className="text-charcoal"><X size={32} /></button>
        </div>
        <div className="p-8 flex flex-col space-y-6">
           {navItems.map(item => (
             <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-playfair font-bold text-charcoal border-b border-gray-50 pb-4">{item.label}</Link>
           ))}
        </div>
      </div>
    </header>
  )
}
