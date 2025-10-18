import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyBuyHere from '@/components/WhyBuyHere'
import FeaturedVehicles from '@/components/FeaturedVehicles'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyBuyHere />
      <FeaturedVehicles />
      <ContactSection />
      <Footer />
    </main>
  )
}
