"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useRouter } from "next/navigation"
import { Menu, Home, Building, Info, Phone } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleGetInTouch = () => {
    router.push("/contact")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden mr-2">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>JSK Immobilier</SheetTitle>
                <SheetDescription>Find your perfect property in Algeria</SheetDescription>
              </SheetHeader>
              <div className="py-6 flex flex-col gap-4">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/properties"
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Building className="h-5 w-5" />
                    <span>Properties</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Info className="h-5 w-5" />
                    <span>About</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="h-5 w-5" />
                    <span>Contact</span>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="text-xl font-bold text-white">
            JSK Immobilier
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 mx-auto">
          <Link href="/" className="text-sm font-medium text-white hover:text-white/80 flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link
            href="/properties"
            className="text-sm font-medium text-white hover:text-white/80 flex items-center gap-1"
          >
            <Building className="h-4 w-4" />
            <span>Properties</span>
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-white hover:text-white/80 flex items-center gap-1"
            prefetch={false}
          >
            <Info className="h-4 w-4" />
            <span>About</span>
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-white hover:text-white/80 flex items-center gap-1"
            prefetch={false}
          >
            <Phone className="h-4 w-4" />
            <span>Contact</span>
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle className="text-white" />
          <Button
            variant="outline"
            className="hidden md:flex bg-white text-primary hover:bg-white/90"
            onClick={handleGetInTouch}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  )
}

