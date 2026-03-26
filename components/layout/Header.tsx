'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CAPABILITIES', href: '#capabilities' },
    { label: 'SUSTAINABILITY', href: '#sustainability' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-gold-primary transition-colors font-medium text-sm tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a href="#contact" className="relative overflow-hidden group bg-gradient-to-r from-gold-primary to-gold-dark text-white px-5 py-2 rounded-full font-semibold text-sm transition-all transform hover:scale-105 shadow-lg ml-2 inline-block">
              <span className="relative z-10">Partner With Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-charcoal/95 backdrop-blur-md shadow-xl py-6 px-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-gold-primary transition-colors py-3 border-b border-white/10 text-sm tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-gradient-to-r from-gold-primary to-gold-dark text-white px-6 py-3 rounded-full w-full font-semibold mt-4">
                Partner With Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
