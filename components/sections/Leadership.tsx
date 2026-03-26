'use client'

import { useInView } from 'react-intersection-observer'
import { Linkedin, Mail, BadgeCheck } from 'lucide-react'
import Image from 'next/image'

export function Leadership() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const leaders = [
    {
      name: 'Bonani Siko',
      role: 'Chief Executive Officer',
      image: '/images/bonani.jpg',
      bio: 'A strategic leader with 20+ years in mining management, driving operational scale, institutional partnerships, and sustainable growth across the South African gold sector.',
      specialty: 'Strategic Leadership',
    },
    {
      name: 'Adiel Hollenbach',
      role: 'Chief Operating Officer',
      image: '/images/adiel.jpg',
      bio: 'A specialist gold geologist with deep expertise in South African mineral deposits, CIL circuit optimization, and high-grade resource development and verification.',
      specialty: 'Gold Extraction',
    },
    {
      name: 'Vuyani Gqiba',
      role: 'Technical Director',
      image: '/images/vuyani.jpg',
      bio: 'An operations and safety expert with a strong track record in large-scale gold mining, multi-site logistics management, and rigorous SHEQ compliance.',
      specialty: 'Operational Excellence',
    },
  ]

  return (
    <section id="leadership" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary font-semibold text-sm uppercase tracking-wider border-b-2 border-gold-primary pb-2">
            Executive Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-6 mb-6">
            Meet Our{' '}
            <span className="gradient-gold-text">Experienced Team</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Rainbow Amakhuma Gold is led by an experienced, diverse executive team with a shared commitment
            to responsible gold mining, sustainable value creation, and community development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-100 hover:border-gold-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 ${inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-4 right-4 text-gold-primary opacity-20 group-hover:opacity-100 transition-opacity">
                <BadgeCheck size={32} />
              </div>

              <div className="mb-6 relative">
                {/* Portrait Image */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gold-primary/20 to-gold-primary/5 p-1 mx-auto overflow-hidden gold-border-thin relative group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-charcoal rounded-xl flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      sizes="(max-width: 768px) 96px, 96px"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1 font-playfair">{leader.name}</h3>
                <p className="text-gold-primary font-semibold text-sm mb-4 uppercase tracking-wider italic">{leader.role}</p>
                <div className="h-px w-10 bg-gold-primary mx-auto mb-6 group-hover:w-20 transition-all" />
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {leader.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  <a href="#" className="w-9 h-9 rounded-full bg-gold-primary/10 flex items-center justify-center hover:bg-gold-primary text-gold-primary hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-gold-primary/10 flex items-center justify-center hover:bg-gold-primary text-gold-primary hover:text-white transition-all">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
