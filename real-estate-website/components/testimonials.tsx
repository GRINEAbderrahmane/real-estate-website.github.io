import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Think</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <p className="italic mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground ml-2">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    id: 1,
    name: "Lina Hamdi",
    location: "Algiers",
    rating: 5,
    text: "I had the best experience working with JSK Immobilier. They understood my needs and found me the perfect property. The entire process was smooth and efficient.",
  },
  {
    id: 2,
    name: "Karim Benali",
    location: "Oran",
    rating: 5,
    text: "The team at JSK Immobilier was professional and responsive. They helped me find my dream home within my budget. I highly recommend their services.",
  },
  {
    id: 3,
    name: "Amina Khelif",
    location: "Constantine",
    rating: 4,
    text: "Great service and attention to detail. The agents were knowledgeable about the local market and provided valuable insights during my property search.",
  },
]

