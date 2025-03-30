import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyDetail } from "@/components/property-detail"

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PropertyDetail id={params.id} />
      <Footer />
    </main>
  )
}

