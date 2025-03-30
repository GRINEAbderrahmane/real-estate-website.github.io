import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ContactSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-muted-foreground mb-4">Have questions about a property?</p>
              <p className="font-medium">+213 555 6789</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
              <p className="text-muted-foreground mb-4">
                We're here to answer all your questions related to real estate in Algeria
              </p>
              <p className="font-medium">info@jskimmobilier.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Team</h3>
              <p className="text-muted-foreground mb-4">
                We are a team of expert real estate agents who are here to help with your property journey
              </p>
              <Button asChild>
                <Link href="/about">Meet Our Team</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

