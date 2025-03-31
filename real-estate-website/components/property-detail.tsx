"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, SquareIcon, MapPin, Calendar, Phone, Heart, Share } from "lucide-react"

export function PropertyDetail({ id }: { id: string }) {
  const [activeImage, setActiveImage] = useState(0)

  // Find property by ID (in a real app, this would be a database query)
  const property = properties.find((p) => p.id.toString() === id) || properties[0]

  return (
    <section className="py-10 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold">{property.title}</h1>
                <div className="flex items-center mt-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-3xl font-bold">{property.price.toLocaleString()} DA</p>
                <Badge
                  className={`mt-2 ${
                    property.status === "For Sale"
                      ? "bg-red-500 hover:bg-red-500"
                      : property.status === "For Rent"
                        ? "bg-blue-500 hover:bg-blue-500"
                        : "bg-amber-500 hover:bg-amber-500"
                  }`}
                >
                  {property.status}
                </Badge>
              </div>
            </div>

            <div className="mb-6">
              <div className="relative aspect-video mb-2 overflow-hidden rounded-lg">
                <Image
                  src={property.images?.[activeImage] || property.image}
                  alt={property.title}
                  width={1000}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex overflow-x-auto gap-2 pb-2">
                {(property.images || Array(5).fill(property.image)).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-24 h-16 rounded-md overflow-hidden border-2 ${
                      activeImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${property.title} - Image ${index + 1}`}
                      width={150}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <Bed className="h-6 w-6 mb-2" />
                <span className="text-sm text-muted-foreground">Bedrooms</span>
                <span className="font-bold">{property.beds}</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <Bath className="h-6 w-6 mb-2" />
                <span className="text-sm text-muted-foreground">Bathrooms</span>
                <span className="font-bold">{property.baths}</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <SquareIcon className="h-6 w-6 mb-2" />
                <span className="text-sm text-muted-foreground">Area</span>
                <span className="font-bold">{property.area} m²</span>
              </div>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-semibold mb-2">Property Description</h3>
                <p className="text-muted-foreground">{property.description}</p>
                <p className="text-muted-foreground mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                  enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                  nisl ut dapibus.
                </p>
              </TabsContent>
              <TabsContent value="features" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-semibold mb-2">Property Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Air Conditioning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Heating System
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Parking Space
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Swimming Pool
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Security System
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Garden
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Balcony
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Elevator
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="location" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Map would be displayed here</p>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Located in {property.location}, this property offers easy access to schools, shopping centers, and
                  public transportation.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Agent</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Agent"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Benali</p>
                    <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full gap-2">
                    <Phone className="h-4 w-4" /> Call Agent
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Calendar className="h-4 w-4" /> Schedule a Visit
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 gap-2">
                      <Heart className="h-4 w-4" /> Save
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <Share className="h-4 w-4" /> Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Similar Properties</h3>
                <div className="space-y-4">
                  {properties.slice(0, 3).map((prop) => (
                    <div key={prop.id} className="flex gap-3">
                      <Image
                        src={prop.image || "/placeholder.svg"}
                        alt={prop.title}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="font-medium line-clamp-1">{prop.title}</h4>
                        <p className="text-sm text-muted-foreground">{prop.location}</p>
                        <p className="font-semibold">{prop.price.toLocaleString()} DA</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

const properties = [
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
    images: Array(5).fill(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial1.jpg-REYByISwacaeuGKNpsnHC0HVzSoeFf.jpeg",
    ),
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
    images: Array(5).fill(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial1.jpg-REYByISwacaeuGKNpsnHC0HVzSoeFf.jpeg",
    ),
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
    images: Array(5).fill(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial1.jpg-REYByISwacaeuGKNpsnHC0HVzSoeFf.jpeg",
    ),
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
    images: Array(5).fill(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial1.jpg-REYByISwacaeuGKNpsnHC0HVzSoeFf.jpeg",
    ),
    description: "Cozy one-bedroom apartment fully furnished with modern furniture",
  },
]

