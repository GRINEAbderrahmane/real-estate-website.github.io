"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Bath, SquareIcon, MapPin, Search, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { toast } from "@/hooks/use-toast"

export function PropertyListing() {
  const [priceRange, setPriceRange] = useState([0, 2000000])
  const [propertyType, setPropertyType] = useState<string>("all")
  const [status, setStatus] = useState<string>("all")
  const [location, setLocation] = useState<string>("all")
  const [bedrooms, setBedrooms] = useState<string>("any")
  const [bathrooms, setBathrooms] = useState<string>("any")

  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [isFiltering, setIsFiltering] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Update the slider when input values change
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value >= 0 && value <= priceRange[1]) {
      setPriceRange([value, priceRange[1]])
    }
  }

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value >= priceRange[0]) {
      setPriceRange([priceRange[0], value])
    }
  }

  // Apply filters function
  const applyFilters = () => {
    setIsFiltering(true)

    // Filter properties based on selected criteria
    const filtered = properties.filter((property) => {
      // Filter by price range
      if (property.price < priceRange[0] || property.price > priceRange[1]) {
        return false
      }

      // Filter by property type (if not "all")
      if (propertyType !== "all") {
        const propertyTypeMap: Record<string, string[]> = {
          residential: [
            "Modern Luxury Home",
            "Furnished One-Bedroom Apartment",
            "Semi-Furnished Apartment",
            "Newly Renovated Furnished Apartment",
          ],
          commercial: ["Commercial Office Space"],
          land: [],
        }

        if (
          propertyTypeMap[propertyType] &&
          !propertyTypeMap[propertyType].some((type) => property.title.includes(type))
        ) {
          return false
        }
      }

      // Filter by status (if not "all")
      if (
        status !== "all" &&
        property.status !== status.replace("for-", "For ").replace("pre-construction", "Pre-Construction")
      ) {
        return false
      }

      // Filter by location (if not "all")
      if (location !== "all" && !property.location.toLowerCase().includes(location.toLowerCase())) {
        return false
      }

      // Filter by bedrooms (if not "any")
      if (bedrooms !== "any") {
        const bedroomCount = Number.parseInt(bedrooms)
        if (bedrooms === "4" && property.beds < 4) return false
        if (bedrooms !== "4" && property.beds !== bedroomCount) return false
      }

      // Filter by bathrooms (if not "any")
      if (bathrooms !== "any") {
        const bathroomCount = Number.parseInt(bathrooms)
        if (bathrooms === "3" && property.baths < 3) return false
        if (bathrooms !== "3" && property.baths !== bathroomCount) return false
      }

      return true
    })

    setFilteredProperties(filtered)
    setIsFiltering(false)

    setCurrentPage(1) // Reset to first page when filters are applied

    toast({
      title: "Filters Applied",
      description: `Found ${filtered.length} properties matching your criteria.`,
    })
  }

  return (
    <section className="py-10 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="w-full md:w-1/4 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Filters</h2>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <Filter className="h-4 w-4 mr-2" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Refine your property search</SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-6">
                    <FilterControls />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="hidden md:block space-y-6">
              <FilterControls />
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold mb-4 sm:mb-0">Properties</h2>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Input placeholder="Search properties..." className="w-full sm:w-auto" />
                <Button>
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties
                  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                  .map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    // Reset filters
                    setPriceRange([0, 2000000])
                    setPropertyType("all")
                    setStatus("all")
                    setLocation("all")
                    setBedrooms("any")
                    setBathrooms("any")
                    setFilteredProperties(properties)
                    setCurrentPage(1)
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}

            <div className="flex justify-center mt-10 border-t pt-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">
                  Page {currentPage} of {Math.max(1, Math.ceil(filteredProperties.length / itemsPerPage))}
                </span>
                <Button
                  variant={currentPage === 1 ? "default" : "outline"}
                  className="mx-1 min-w-[40px]"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                >
                  1
                </Button>
                {filteredProperties.length > itemsPerPage && (
                  <Button
                    variant={currentPage === 2 ? "default" : "outline"}
                    className="mx-1 min-w-[40px]"
                    onClick={() => setCurrentPage(2)}
                  >
                    2
                  </Button>
                )}
                {filteredProperties.length > itemsPerPage * 2 && (
                  <Button
                    variant={currentPage === 3 ? "default" : "outline"}
                    className="mx-1 min-w-[40px]"
                    onClick={() => setCurrentPage(3)}
                  >
                    3
                  </Button>
                )}
                {currentPage < Math.ceil(filteredProperties.length / itemsPerPage) && (
                  <Button
                    variant="outline"
                    className="mx-1"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredProperties.length / itemsPerPage)))
                    }
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  function FilterControls() {
    return (
      <>
        <div className="space-y-2">
          <h3 className="font-medium">Property Type</h3>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Status</h3>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="for-sale">For Sale</SelectItem>
              <SelectItem value="for-rent">For Rent</SelectItem>
              <SelectItem value="pre-construction">Pre-Construction</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Location</h3>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="algiers">Algiers</SelectItem>
              <SelectItem value="oran">Oran</SelectItem>
              <SelectItem value="constantine">Constantine</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <h3 className="font-medium">Price Range</h3>
            <span className="text-sm text-muted-foreground">
              {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} DA
            </span>
          </div>
          <div className="px-1">
            <Slider value={priceRange} max={2000000} step={10000} onValueChange={setPriceRange} className="my-4" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Input type="number" value={priceRange[0]} onChange={handleMinPriceChange} className="w-full" />
            <span className="text-muted-foreground">to</span>
            <Input type="number" value={priceRange[1]} onChange={handleMaxPriceChange} className="w-full" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Bedrooms</h3>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Bathrooms</h3>
          <Select value={bathrooms} onValueChange={setBathrooms}>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full" onClick={applyFilters} disabled={isFiltering}>
          {isFiltering ? "Applying..." : "Apply Filters"}
        </Button>
      </>
    )
  }
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
    <Card className="overflow-hidden">
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
      <CardContent className="p-5">
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
      </CardContent>
    </Card>
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

