import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 font-jakarta">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl">⛏️</span>
              <div className="font-playfair font-bold">
                <span className="gradient-gold-text block">Rainbow</span>
                <span className="text-white text-sm block">Amakhuma Gold</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">A premier integrated gold mining joint venture in South Africa, combining 60+ years of operational expertise with innovative processing technology to unlock value across the nation&apos;s most productive gold provinces.</p>
            <div className="flex space-x-4">
               {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-primary transition-colors"><Icon size={16} /></a>)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold gradient-gold-text mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3"><MapPin size={18} className="text-gold-primary" /> <span>Johannesburg, SA</span></li>
              <li className="flex items-center space-x-3"><Phone size={18} className="text-gold-primary" /> <span>[CONTACT_NUMBER]</span></li>
              <li className="flex items-center space-x-3"><Mail size={18} className="text-gold-primary" /> <span>info@rainbowamakhuma.co.za</span></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Rainbow Amakhuma Gold. All rights reserved.</p>
          <p className="mt-2 md:mt-0 italic">Created by NMAS WebCraft</p>
        </div>
      </div>
    </footer>
  )
}
