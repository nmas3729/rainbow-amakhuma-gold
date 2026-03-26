'use client'

import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-16">
           <span className="text-gold-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
           <h2 className="text-4xl md:text-5xl font-bold font-playfair leading-tight mb-4">
              Partner With <span className="gold-text">Rainbow Amakhuma Gold</span>
           </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className={`p-10 rounded-3xl bg-white border-2 border-gold-primary/10 shadow-2xl shadow-gold-glow/5 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold mb-8 font-playfair border-b border-gray-100 pb-4">Send Us a Message</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-xl border-2 border-gray-50 bg-gray-50/50 outline-none focus:border-gold-primary transition-colors font-jakarta text-sm" />
              <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl border-2 border-gray-50 bg-gray-50/50 outline-none focus:border-gold-primary transition-colors font-jakarta text-sm" />
              <textarea placeholder="How can we help you?" rows={4} className="w-full px-5 py-4 rounded-xl border-2 border-gray-50 bg-gray-50/50 outline-none focus:border-gold-primary transition-colors font-jakarta text-sm"></textarea>
              <button className="w-full bg-gradient-to-r from-[#A68936] to-[#C6A43B] text-white font-bold py-5 rounded-xl shadow-xl hover:shadow-gold-glow/40 active:scale-95 transition-all uppercase tracking-widest text-sm">
                Get Started
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-4">
             {[
               { icon: Phone, label: 'Call Us', val: '[CONTACT_NUMBER]' },
               { icon: Mail, label: 'Email', val: 'info@rainbowamakhuma.co.za' },
               { icon: MapPin, label: 'Visit Us', val: 'Johannesburg, South Africa' }
             ].map((item, i) => (
               <div key={i} className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-gold-primary transition-all group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <item.icon size={20} className="text-gold-primary" />
                  </div>
                  <div>
                     <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</div>
                     <div className="text-sm font-bold text-charcoal">{item.val}</div>
                  </div>
               </div>
             ))}
             <div className="h-48 rounded-2xl bg-gray-100 overflow-hidden border-2 border-gold-primary/10 relative group mt-4">
                <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73924765792!2d27.9351!3d-26.139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1a5e8e5e5f%3A0x2e5e5e5e5e5e5e5e!2sJohannesburg!5e0!3m2!1sen!2sza!4v1234567890" width="100%" height="100%" style={{ border: 0 }} />
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
