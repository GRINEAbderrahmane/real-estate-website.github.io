"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative min-h-[500px] md:h-[600px] w-full bg-cover bg-center flex items-center justify-center py-16 md:py-0"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-30%20002727.jpg-ehY9MkTDitJhUFJlWSxbQYDFCG5afk.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-8 max-w-full md:max-w-5xl lg:max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Find Your Perfect Property in Algeria
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Browse our extensive collection of properties for sale and rent across Algeria
        </p>
        <div className="mt-8 w-full bg-card text-card-foreground rounded-lg p-4 sm:p-6 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Input placeholder="City, neighborhood..." className="w-full" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Property Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="for-sale">For Sale</SelectItem>
                  <SelectItem value="for-rent">For Rent</SelectItem>
                  <SelectItem value="pre-construction">Pre-Construction</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Price Range (DA)</label>
              <div className="flex items-center gap-2">
                <Input type="number" placeholder="0" className="w-full" />
                <span className="text-muted-foreground">to</span>
                <Input type="number" placeholder="1000000" className="w-full" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Bedrooms</label>
              <Select>
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
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base py-2 h-auto sm:h-10">
            <Search className="mr-2 h-4 w-4" /> Search Properties
          </Button>
        </div>
      </div>
    </section>
  )
}

