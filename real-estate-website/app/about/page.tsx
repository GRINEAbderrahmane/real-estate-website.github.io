import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="py-16 bg-background">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">About JSK Immobilier</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Trusted Real Estate Partner in Algeria</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2010, JSK Immobilier has established itself as a leading real estate agency in Algeria,
                specializing in residential, commercial, and land properties across the country.
              </p>
              <p className="text-muted-foreground mb-4">
                Our mission is to provide exceptional service to our clients, helping them find their perfect property
                or sell their existing one at the best possible price. We pride ourselves on our in-depth knowledge of
                the Algerian real estate market and our commitment to transparency and integrity.
              </p>
              <p className="text-muted-foreground">
                With a team of experienced professionals, we offer personalized solutions tailored to each client's
                unique needs and preferences. Whether you're looking to buy, sell, or rent, JSK Immobilier is here to
                guide you through every step of the process.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Extensive portfolio of properties across Algeria</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Expert knowledge of local markets and trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Personalized service tailored to your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Transparent and straightforward process</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Support for both Algerian bank and cash payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Dedicated team of professional agents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

