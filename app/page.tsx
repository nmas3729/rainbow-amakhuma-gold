import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Capabilities } from '@/components/sections/Capabilities'
import { Stats } from '@/components/sections/Stats'
import { Projects } from '@/components/sections/Projects'
import { Partners } from '@/components/sections/Partners'
import { Sustainability } from '@/components/sections/Sustainability'
import { Leadership } from '@/components/sections/Leadership'
import { PartnerCTA } from '@/components/sections/PartnerCTA'
import { Contact } from '@/components/sections/Contact'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/ui/CookieBanner'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Capabilities />
      <Stats />
      <Projects />
      <Partners />
      <Sustainability />
      <Leadership />
      <PartnerCTA />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  )
}
