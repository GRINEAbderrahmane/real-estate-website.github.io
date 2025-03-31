import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedProperties } from "@/components/featured-properties"
import { PropertyTypes } from "@/components/property-types"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <PropertyTypes />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}

