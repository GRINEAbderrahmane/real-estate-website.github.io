import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JSK Immobilier</h3>
            <p className="text-white/80">
              Your trusted partner in finding the perfect property in Algeria. We offer a wide range of residential,
              commercial, and land properties.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-white hover:text-white/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-white/80 hover:text-white">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties?type=residential" className="text-white/80 hover:text-white">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/properties?type=commercial" className="text-white/80 hover:text-white">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/properties?type=land" className="text-white/80 hover:text-white">
                  Land
                </Link>
              </li>
              <li>
                <Link href="/properties?type=pre-construction" className="text-white/80 hover:text-white">
                  Pre-Construction
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-white/80">
              <p>123 Real Estate Street</p>
              <p>Algiers, Algeria</p>
              <p className="mt-2">Email: info@jskimmobilier.com</p>
              <p>Phone: +213 555 6789</p>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 text-center text-white/60">
          <p>© {new Date().getFullYear()} JSK Immobilier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

