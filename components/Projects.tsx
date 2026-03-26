export default function Projects() {
  const projects = [
    {
      name: "Welkom Gold Tailings Recovery Project",
      location: "Free State Province, South Africa",
      status: "Active",
      type: "Tailings Retreatment & Environmental Rehabilitation",
      description: "Systematic recovery of residual gold from established tailings facilities using proprietary CIL technology. Environmental restoration running parallel to ore processing, improving water quality and restoring land capacity for secondary uses. Direct employment of 180+ local contractors.",
      output: "45,000 oz Au (Year 1-3 ramp-up to 65,000 oz)",
      efficiency: "92% gold extraction rate",
      hectares: "380 hectares with rehabilitated areas",
      goals: "Full infrastructure deployment Q2 2026; production ramp-up achieving nameplate capacity by Q4 2027"
    },
    {
      name: "Mpumalanga Artisanal Integration Programme",
      location: "Mpumalanga Province, South Africa",
      status: "Exploration & Community Development",
      type: "Formalization & Economic Empowerment",
      description: "Comprehensive formalization initiative converting 500+ informal artisanal operators into licensed, trained, and equipped mining entrepreneurs. Technical upskilling in safety-compliant extraction and processing. Direct market linkage ensuring transparent pricing and sustainable income. Reduces mercury contamination, improves working conditions, and formalizes economic activity.",
      output: "Supporting 500+ artisanal operators; 12-18 oz Au per formalized operator",
      efficiency: "Target: 150%+ documented income increase per participant",
      hectares: "12,500 hectares exploration rights",
      goals: "400+ fully formalized operations by 2028 with sustainable livelihoods"
    },
    {
      name: "East Rand Underground Gold Development",
      location: "Gauteng Province, South Africa",
      status: "Feasibility Study & Resource Definition",
      type: "Greenfield Exploration & Development",
      description: "Deep-level exploration in proven high-grade zones with preliminary resource estimates supporting economic viability. JORC-Stage 2 resource definition underway with multiple identified ore bodies. Engineering team finalizing underground mining design and processing flowsheet. First ore procurement targeted 2028.",
      output: "Projected 85,000 oz Au per annum at full nameplate",
      efficiency: "Resource grade: 4.2 g/t Au (high-grade deposit category)",
      hectares: "2,800 hectares mining right with 20-year mineral concession",
      goals: "Feasibility completion Q4 2026; first production Q4 2028; nameplate capacity Q4 2029"
    }
  ]

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gold-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gold-gradient mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Three complementary projects spanning tailings recovery, community integration, and greenfield development—each demonstrating our capability to create value across the full spectrum of SA gold mining opportunities.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden gold-border hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6 p-6">
                {/* Left Column - Project Header */}
                <div className="md:col-span-1">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gold-text/10 gold-text">
                      {project.status}
                    </div>
                    <h3 className="text-2xl font-bold gold-text mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">📍 {project.location}</p>
                    <p className="text-gray-400 text-sm mb-4">📋 {project.type}</p>
                  </div>
                </div>

                {/* Middle Column - Description & Goals */}
                <div className="md:col-span-1">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Goals:</h4>
                    <p className="text-gray-400 text-sm">{project.goals}</p>
                  </div>
                </div>

                {/* Right Column - Metrics */}
                <div className="md:col-span-1">
                  <div className="bg-black/50 rounded-lg p-4 gold-border">
                    <h4 className="text-sm font-semibold text-white mb-3">Project Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Annual Output:</span>
                        <span className="gold-text font-semibold text-sm">{project.output}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Recovery Efficiency:</span>
                        <span className="gold-text font-semibold text-sm">{project.efficiency}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Land Area:</span>
                        <span className="gold-text font-semibold text-sm">{project.hectares}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Capabilities Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-800 rounded-lg p-4 gold-border">
            <p className="text-gray-400 text-sm">
              ⚙️ Processing Methods: <span className="text-white">CIL (Carbon-in-Leach)</span> •
              <span className="text-white"> Gravity Recovery Circuits</span> •
              <span className="gold-text"> 92% Fine Gold Recovery – Consistent processing efficiency across all projects</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
