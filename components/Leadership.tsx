'use client'

import { useInView } from 'react-intersection-observer'
import { Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Leadership() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const leaders = [
    { name: 'Bonani Siko', role: 'Chief Executive Officer', image: '/image/bonani.jpg', bio: '18-year mining industry veteran with proven track record in strategic positioning and operational delivery. Led three major mining transitions from exploration through full commercial production. Deep expertise in project finance, stakeholder engagement, and BBBEE transformation strategy. Certified in mining engineering with specialization in large-scale open-pit and tailings operations.' },
    { name: 'Adiel Hollenbach', role: 'Technical Director & Chief Geologist', image: '/image/adiel.jpg', bio: '22-year geology and resource estimation career across six southern African countries. JORC panel member with deep expertise in gold deposit characterization and mining feasibility. Led successful resource development projects ranging from exploration discovery through production. Published contributions to gold deposit geology literature.' },
    { name: 'Vuyani Gqiba', role: 'Chief Operating Officer', image: '/image/vuyani.jpg', bio: '16-year operational leadership background spanning underground and alluvial mining. Specialist in zero-harm culture implementation with record of achieving 2+ years consecutive lost-time-injury-free operations at previous employer. Expert in processing circuit optimization and cost reduction. SHEQ training certifications across levels; committed to industry safety advancement.' }
  ]

  return (
    <section id="leadership" className="section-padding bg-white text-charcoal" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Management</span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair">
            Meet Our <span className="gold-text">Experienced Team</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-10 border-2 border-gold-primary/10 shadow-xl shadow-gold-glow/5 text-center group transition-all hover:border-gold-primary ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-24 h-24 bg-charcoal rounded-3xl mx-auto mb-8 flex items-center justify-center text-4xl shadow-xl relative overflow-hidden group-hover:scale-105 transition-transform">
                 <div className="absolute inset-0 bg-gold-primary opacity-0 group-hover:opacity-10 transition-opacity z-10" />
                 <Image 
                   src={leader.image} 
                   alt={leader.name} 
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 96px, 96px"
                 />
              </div>
              <h3 className="text-2xl font-bold mb-1 font-playfair">{leader.name}</h3>
              <p className="text-gold-primary text-[10px] font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">{leader.role}</p>
              <p className="text-gray-500 text-sm mb-8 font-jakarta leading-relaxed">{leader.bio}</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-gold-primary transition-all"><Linkedin size={20} /></a>
                <a href="#" className="text-gray-300 hover:text-gold-primary transition-all"><Mail size={20} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
