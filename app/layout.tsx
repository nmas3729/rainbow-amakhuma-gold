import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rainbowamakhuma.co.za'),
  title: {
    default: 'Rainbow Amakhuma Gold | Premier Gold Mining Joint Venture, South Africa',
    template: '%s | Rainbow Amakhuma Gold',
  },
  description: 'Rainbow Amakhuma Gold is a Level 2 BBBEE certified, 100% South African gold mining joint venture combining 60+ years of operational excellence with specialized gold processing technology. Committed to responsible mining, community upliftment, and sustainable value creation.',
  keywords: [
    'gold mining South Africa',
    'BBBEE mining company',
    'gold exploration SA',
    'mining joint venture',
    'CIL gold processing',
    'responsible gold mining',
    'Amakhuma mining',
    'Rainbow Minerals',
    'Free State gold mining',
    'Gauteng mining',
    'gold off-take agreements',
    'mining engineering South Africa',
  ],
  authors: [{ name: 'Rainbow Amakhuma Gold' }],
  creator: 'Rainbow Amakhuma Gold',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: 'Rainbow Amakhuma Gold | Premier Gold Mining Joint Venture',
    description: 'A certified Level 2 BBBEE gold mining joint venture combining 60+ years of operational excellence with gold processing innovation across South Africa.',
    url: 'https://www.rainbowamakhuma.co.za',
    siteName: 'Rainbow Amakhuma Gold',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rainbow Amakhuma Gold — Premier Gold Mining Joint Venture, South Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rainbow Amakhuma Gold | Premier Gold Mining Joint Venture',
    description: 'Level 2 BBBEE certified gold mining JV. 60+ years experience. 92% recovery rate. Responsible mining across South Africa.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rainbow Amakhuma Gold',
  url: 'https://www.rainbowamakhuma.co.za',
  email: 'info@rainbowamakhuma.co.za',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Johannesburg',
    addressCountry: 'ZA',
  },
  description: 'A Level 2 BBBEE certified gold mining joint venture in South Africa, combining 60+ years of operational excellence with specialized gold processing technology.',
  foundingDate: '2020',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 300,
  },
  areaServed: 'South Africa',
  knowsAbout: [
    'Gold Mining',
    'Gold Exploration',
    'CIL Processing',
    'Mine Rehabilitation',
    'BBBEE Compliance',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
