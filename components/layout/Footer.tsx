import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ]

  const expertise = [
    'Gold Exploration',
    'Mining Engineering',
    'Gold Processing',
    'Project Management',
    'Commodity Trading',
    'Mine Rehabilitation',
  ]

  return (
    <footer className="bg-charcoal text-white pt-16 pb-6 font-jakarta">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A Level 2 BBBEE certified gold mining joint venture. 60+ years of combined operational experience. Committed to responsible mining, community development, and sustainable value creation across South Africa.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                title="Rainbow Amakhuma Gold on LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 gradient-gold-text border-b border-gold-primary/20 pb-1">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Expertise */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 gradient-gold-text border-b border-gold-primary/20 pb-1">Our Expertise</h3>
            <ul className="space-y-2">
              {expertise.map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 gradient-gold-text border-b border-gold-primary/20 pb-1">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Johannesburg, South Africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm whitespace-nowrap">[CONTACT_NUMBER]</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm whitespace-nowrap">info@rainbowamakhuma.co.za</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Rainbow Amakhuma Gold. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Level 2 B-BBEE Compliant · Responsible Gold Mining
              </p>
            </div>
            <div className="flex gap-4 text-xs text-gray-600">
              <Link href="/privacy-policy" className="hover:text-gold-primary transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-gold-primary transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
