'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

const CONSENT_KEY = 'rag_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      // Small delay so it doesn't flash on fast loads
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] bg-charcoal/97 backdrop-blur-md border-t border-gold-primary/30 shadow-2xl animate-fade-in-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container-custom py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-white text-sm leading-relaxed">
              <span className="font-semibold text-gold-primary">We value your privacy.</span>{' '}
              This website uses standard cookies to improve your experience and collect basic analytics. 
              We do not use advertising trackers. By continuing, you consent to our{' '}
              <Link
                href="/privacy-policy"
                className="underline text-gold-light hover:text-gold-primary transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={accept}
              className="bg-gradient-to-r from-gold-primary to-gold-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:from-gold-dark hover:to-gold-primary transition-all transform hover:scale-105 shadow-lg"
            >
              Accept & Continue
            </button>
            <button
              onClick={accept}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
