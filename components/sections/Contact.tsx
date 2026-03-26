'use client'

import { useState, useCallback, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Send, Phone, Mail, MapPin, Clock, Building2, RefreshCw } from 'lucide-react'

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function generateCaptcha() {
  const code = Array.from({ length: 5 }, () =>
    CHARS[Math.floor(Math.random() * CHARS.length)]
  ).join('')
  return { code, answer: code }
}

// SVG CAPTCHA renderer — each char has random tilt, color, size + noise
function CaptchaSVG({ code }: { code: string }) {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  const W = 200, H = 60
  const colors = ['#C6A43B', '#A68936', '#7a6029', '#1a1a1a', '#4a3a10']
  // deterministic-ish positions so React doesn't re-render a new noise every keystroke
  const chars = code.split('').map((ch, i) => ({
    ch,
    x: 18 + i * 36,
    y: 36,
    rotate: (((i * 37 + code.charCodeAt(i)) % 30) - 15),
    color: colors[(code.charCodeAt(i) + i) % colors.length],
    size: 22 + (code.charCodeAt(i) % 6),
  }))
  // noise lines seeded from code
  const lines = Array.from({ length: 6 }, (_, i) => ({
    x1: (code.charCodeAt(i % 5) * 7 + i * 23) % W,
    y1: (code.charCodeAt((i + 1) % 5) * 5 + i * 11) % H,
    x2: (code.charCodeAt((i + 2) % 5) * 11 + i * 17) % W,
    y2: (code.charCodeAt((i + 3) % 5) * 3 + i * 29) % H,
  }))
  const dots = Array.from({ length: 20 }, (_, i) => ({
    cx: (code.charCodeAt(i % 5) * 13 + i * 19) % W,
    cy: (code.charCodeAt((i + 1) % 5) * 7 + i * 7) % H,
    r: 1 + (i % 2),
  }))
  if (!isMounted) {
    return (
      <svg width={W} height={H} xmlns="http://www.w3.org/2000/svg"
        style={{ background: '#f3f4f6', borderRadius: 8, display: 'block', userSelect: 'none' }}
      />
    )
  }

  return (
    <svg width={W} height={H} xmlns="http://www.w3.org/2000/svg"
      style={{ background: '#f3f4f6', borderRadius: 8, display: 'block', userSelect: 'none' }}
    >
      {/* noise */}
      {lines.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#aaa" strokeWidth="1" opacity="0.5" />)}
      {dots.map((d, i) => <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="#bbb" opacity="0.6" />)}
      {/* characters */}
      {chars.map((c, i) => (
        <text
          key={i}
          x={c.x} y={c.y}
          textAnchor="middle"
          fill={c.color}
          fontSize={c.size}
          fontWeight="bold"
          fontFamily="Georgia, serif"
          transform={`rotate(${c.rotate}, ${c.x}, ${c.y})`}
          style={{ letterSpacing: 2 }}
        >
          {c.ch}
        </text>
      ))}
    </svg>
  )
}

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [captcha, setCaptcha] = useState(() => generateCaptcha())
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const regenerateCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha())
    setCaptchaInput('')
    setCaptchaError(false)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (captchaInput.trim().toUpperCase() !== captcha.answer.toUpperCase()) {
      setCaptchaError(true)
      regenerateCaptcha()
      return
    }

    setIsSubmitting(true)
    
    // Build mailto link and open it
    const subject = encodeURIComponent(`Partnership Inquiry from ${formData.name} – ${formData.company}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:info@rainbowamakhuma.co.za?subject=${subject}&body=${body}`
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    setPrivacyAccepted(false)
    regenerateCaptcha()
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: Phone, title: 'Phone', details: ['[CONTACT_NUMBER]'] },
    { icon: Mail, title: 'Email', details: ['info@rainbowamakhuma.co.za'] },
    { icon: MapPin, title: 'Head Office', details: ['Johannesburg, South Africa'] },
    { icon: Clock, title: 'Business Hours', details: ['Mon - Fri: 8:00 - 17:00'] },
  ]

  return (
    <section id="contact" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary font-semibold text-sm uppercase tracking-wider border-b-2 border-gold-primary pb-2">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-6 mb-6">
            Partner With{' '}
            <span className="gradient-gold-text">Rainbow Amakhuma Gold</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to explore off-take agreements, joint venture opportunities, or project-level due diligence? 
            We welcome serious inquiries from investors, operators, and industry partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100 ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all outline-none"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all outline-none"
                  placeholder="your@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all outline-none"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message / Inquiry *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all outline-none"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#C6A43B] cursor-pointer flex-shrink-0"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                  I have read and understand the{' '}
                  <a href="/privacy-policy" className="text-gold-primary underline hover:text-gold-dark transition-colors font-medium">
                    privacy policy
                  </a>.
                </label>
              </div>

              {/* CAPTCHA */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Captcha</label>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1">
                    <CaptchaSVG code={captcha.code} />
                  </div>
                  <button
                    type="button"
                    onClick={regenerateCaptcha}
                    title="Regenerate"
                    className="p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gold-primary transition-colors"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
                <input
                  type="text"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="characters"
                  spellCheck={false}
                  maxLength={5}
                  placeholder=""
                  value={captchaInput}
                  onChange={(e) => { setCaptchaInput(e.target.value); setCaptchaError(false) }}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all outline-none font-mono tracking-widest ${
                    captchaError ? 'border-red-400 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {captchaError && (
                  <p className="text-red-500 text-xs mt-1">Incorrect — a new captcha has been generated, please try again.</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !privacyAccepted}
                className="w-full bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-gold-primary text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Your Inquiry</span>
                  </>
                )}
              </button>
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg animate-fade-in text-center">
                  ✓ Your inquiry has been prepared. Please complete sending via your email client.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-gold-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 font-playfair">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 whitespace-nowrap">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Map Placeholder with Embed */}
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-md border border-gray-100 ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '500ms' }}>
              <div className="h-48 bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-500">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.898254748922!2d28.047285!3d-26.139927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1a5e8e5e5f%3A0x2e5e5e5e5e5e5e5e!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 text-center border-t border-gray-100 bg-gray-50/50">
                <Building2 className="w-4 h-4 text-gold-primary inline mr-1" />
                <span className="text-sm font-semibold text-gray-700">South Africa Headquarters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
