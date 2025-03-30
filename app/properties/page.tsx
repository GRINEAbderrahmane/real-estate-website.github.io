import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyListing } from "@/components/property-listing"

export default function PropertiesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PropertyListing />
      <Footer />
    </main>
  )
}

