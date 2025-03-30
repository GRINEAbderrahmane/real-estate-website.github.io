import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bed, Bath, SquareIcon, MapPin } from "lucide-react"

export function FeaturedProperties() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Properties</h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="for-sale">For Sale</TabsTrigger>
            <TabsTrigger value="for-rent">For Rent</TabsTrigger>
            <TabsTrigger value="pre-construction">Pre-Construction</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </TabsContent>
          <TabsContent value="for-sale" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties
              .filter((p) => p.status === "For Sale")
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </TabsContent>
          <TabsContent value="for-rent" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties
              .filter((p) => p.status === "For Rent")
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </TabsContent>
          <TabsContent value="pre-construction" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties
              .filter((p) => p.status === "Pre-Construction")
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </TabsContent>
        </Tabs>
        <div className="flex justify-center mt-10">
          <Button variant="outline" asChild>
            <Link href="/properties">View All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

interface Property {
  id: number
  title: string
  location: string
  price: number
  beds: number
  baths: number
  area: number
  status: "For Sale" | "For Rent" | "Pre-Construction"
  image: string
  description: string
}

interface PropertyCardProps {
  property: Property
}

function PropertyCard({ property }: PropertyCardProps) {
  const { title, location, price, beds, baths, area, status, image, description } = property

  const statusColor = status === "For Sale" ? "bg-red-500" : status === "For Rent" ? "bg-blue-500" : "bg-amber-500"

  return (
    <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="w-full h-64 object-cover"
        />
        <Badge className={`absolute top-3 left-3 ${statusColor} hover:${statusColor}`}>{status}</Badge>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center mt-2 text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-2xl font-bold mt-4">{price.toLocaleString()} DA</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <SquareIcon className="h-4 w-4 mr-1" />
            <span className="text-sm">{area} m²</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground line-clamp-2">{description}</p>
        <Button className="w-full mt-4" variant="outline">
          View Details
        </Button>
      </div>
    </div>
  )
}

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Home with Cantilevered Design",
    location: "Hydra Hills, Algiers",
    price: 1250000,
    beds: 4,
    baths: 3,
    area: 320,
    status: "For Sale",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial1.jpg-REYByISwacaeuGKNpsnHC0HVzSoeFf.jpeg",
    description:
      "Stunning contemporary home featuring wood paneling, stone accents, and floor-to-ceiling windows. Includes a spacious garden and swimming pool.",
  },
  {
    id: 2,
    title: "Semi-Furnished Apartment",
    location: "Hydra, Algiers",
    price: 250000,
    beds: 2,
    baths: 1,
    area: 120,
    status: "For Sale",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial1.jpg-REYByISwacaeuGKNpsnHC0HVzSoeFf.jpeg",
    description: "Beautiful semi-furnished apartment with modern amenities",
  },
  {
    id: 3,
    title: "Newly Renovated Furnished Apartment",
    location: "Bab Ezzouar, Algiers",
    price: 96000,
    beds: 3,
    baths: 2,
    area: 150,
    status: "For Rent",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial1.jpg-REYByISwacaeuGKNpsnHC0HVzSoeFf.jpeg",
    description: "Newly renovated and fully furnished apartment in the heart of the city",
  },
  {
    id: 4,
    title: "Furnished One-Bedroom Apartment",
    location: "Kouba, Algiers",
    price: 750000,
    beds: 1,
    baths: 1,
    area: 80,
    status: "For Sale",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial1.jpg-REYByISwacaeuGKNpsnHC0HVzSoeFf.jpeg",
    description: "Cozy one-bedroom apartment fully furnished with modern furniture",
  },
  {
    id: 5,
    title: "Commercial Office Space",
    location: "Downtown, Algiers",
    price: 450000,
    beds: 0,
    baths: 2,
    area: 200,
    status: "For Sale",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial1.jpg-REYByISwacaeuGKNpsnHC0HVzSoeFf.jpeg",
    description: "Prime commercial office space in the heart of downtown",
  },
  {
    id: 6,
    title: "Beachfront Villa",
    location: "Sidi Fredj, Algiers",
    price: 180000,
    beds: 5,
    baths: 4,
    area: 400,
    status: "For Rent",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial1.jpg-REYByISwacaeuGKNpsnHC0HVzSoeFf.jpeg",
    description: "Luxurious beachfront villa with panoramic sea views and private access to the beach",
  },
]

