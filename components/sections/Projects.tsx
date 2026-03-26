'use client'

import { useInView } from 'react-intersection-observer'
import { MapPin, TrendingUp, Pickaxe } from 'lucide-react'

const projects = [
  {
    name: 'Klerksdorp Gold Project',
    location: 'North West Province, South Africa',
    stage: 'Development',
    stageColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
    grade: '4.2 g/t Au',
    hectares: '3,200',
    description:
      'An advanced-stage gold development targeting a high-grade reef in the Witwatersrand Basin. Feasibility study completed with targeted production commencement in 2026.',
    icon: Pickaxe,
  },
  {
    name: 'Free State Alluvial Gold',
    location: 'Free State Province, South Africa',
    stage: 'Production',
    stageColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    grade: '0.8 g/t Au',
    hectares: '5,800',
    description:
      'An active alluvial processing operation delivering consistent production through gravity recovery circuits with a current recovery rate of 92%.',
    icon: TrendingUp,
  },
  {
    name: 'Gauteng Artisanal Formalization',
    location: 'Gauteng, South Africa',
    stage: 'Exploration',
    stageColor: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
    grade: '2.1 g/t Au',
    hectares: '6,000',
    description:
      'An early-stage exploration and formalization programme integrating 500+ artisanal miners into a structured, MPRDA-compliant operational framework.',
    icon: MapPin,
  },
]

export function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-charcoal to-dark-bg" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-gold-primary font-semibold text-sm uppercase tracking-wider border-b-2 border-gold-primary pb-2">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-6 mb-6 text-white">
            Active{' '}
            <span className="gradient-gold-text">Gold Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A focused portfolio of high-potential South African gold assets at exploration, development, and production stage.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`bg-gradient-to-br from-stone/60 to-charcoal rounded-2xl p-8 border border-gold-primary/20 hover:border-gold-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-glow hover:-translate-y-1 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stage badge */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.stageColor}`}
                >
                  {project.stage}
                </span>
                <div className="w-10 h-10 bg-gold-primary/10 rounded-xl flex items-center justify-center">
                  <project.icon className="w-5 h-5 text-gold-primary" />
                </div>
              </div>

              {/* Name & Location */}
              <h3 className="text-xl font-playfair font-bold text-white mb-1">{project.name}</h3>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-4">
                <MapPin className="w-3.5 h-3.5 text-gold-primary flex-shrink-0" />
                <span>{project.location}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gold-primary/20">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Gold Grade</p>
                  <p className="text-gold-primary font-bold font-playfair">{project.grade}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Hectares</p>
                  <p className="text-gold-primary font-bold font-playfair">{project.hectares} ha</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <p className="text-center text-xs text-gray-600 mt-8">
          Project data is indicative and subject to formal technical verification. Refer to our{' '}
          <a href="/disclaimer" className="underline hover:text-gray-400 transition-colors">
            Investment Disclaimer
          </a>{' '}
          for full details.
        </p>
      </div>
    </section>
  )
}
