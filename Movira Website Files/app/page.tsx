import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Truck, Shield, Clock, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-1">
                  <div className="relative h-20 w-20">
                    <Image
                      src="/movira-logo-transparent.png"
                      alt="Movira Industries LLP Logo"
                      fill
                      className="object-contain"
                      sizes="80px"
                      priority
                      quality={100}
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-primary">Movira Industries LLP</h1>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/equipment"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Equipment
                </Link>
                <Link
                  href="/calculator"
                  className="text-muted-foreground hover:text-primary py-2 rounded-md text-sm font-medium px-0"
                >
                  Rent Calculator
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild>
                <Link href="/calculator">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Trusted Construction Equipment Rental
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Professional Equipment Rental for Your Construction Needs
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Movira Industries LLP provides reliable, high-quality construction equipment rental services. From
                excavators to cranes, we have the tools you need to get the job done right.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  <Link href="/calculator">
                    <Calculator className="mr-2 h-5 w-5" />
                    Get Rental Quote
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/equipment">
                    <Truck className="mr-2 h-5 w-5" />
                    Browse Equipment
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/construction-site-heavy-equipment.png"
                alt="Construction equipment including excavators and cranes at work site"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose Movira Industries?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive construction equipment rental solutions with unmatched reliability and service
              quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Reliable Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All our equipment is regularly maintained and inspected to ensure optimal performance and safety.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Flexible Rental Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  From daily to long-term rentals, we offer flexible terms that fit your project timeline and budget.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our experienced team provides technical support and guidance to help you choose the right equipment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Use our rental calculator for instant, transparent pricing with automatic discounts for bulk and
                  long-term rentals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Equipment Categories</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive range of construction equipment for all your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Scaffolding",
                description:
                  "Cuplock scaffolding systems, verticals, ledgers and accessories for safe construction work",
                image: "cuplock scaffolding construction equipment steel framework",
                category: "scaffolding",
              },
              {
                title: "Formwork",
                description: "Concrete formwork systems and accessories for structural construction",
                image: "concrete formwork construction equipment structural",
                category: "formwork",
              },
              {
                title: "MS Accessories",
                description: "Mild steel accessories and fittings for construction and scaffolding applications",
                image: "mild steel accessories construction fittings hardware",
                category: "ms-accessories",
              },
              {
                title: "MS Pipes",
                description: "High-quality mild steel pipes for construction and structural applications",
                image: "mild steel pipes construction structural tubing",
                category: "ms-pipes",
              },
              {
                title: "MS Lifts",
                description: "Material handling lifts and hoisting equipment for construction sites",
                image: "construction lift material hoist equipment",
                category: "ms-lifts",
              },
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={`/abstract-geometric-shapes.png?height=300&width=400&query=${category.image}`}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href={`/equipment?category=${category.category}`}>View Equipment</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Use our rental calculator to get instant pricing for your equipment needs, or contact our team for
            personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="/calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Get Rental Quote
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-1 mb-4">
                <div className="relative h-20 w-20">
                  <Image
                    src="/movira-logo-transparent.png"
                    alt="Movira Industries LLP Logo"
                    fill
                    className="object-contain"
                    sizes="80px"
                    quality={100}
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary">Movira Industries LLP</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Your trusted partner for construction equipment rental. We provide reliable, high-quality equipment with
                exceptional service and competitive pricing.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-accent mr-1" />
                  <span>Trusted by 500+ contractors</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/equipment" className="hover:text-primary">
                    Equipment Catalog
                  </Link>
                </li>
                <li>
                  <Link href="/calculator" className="hover:text-primary">
                    Rental Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Phone: +91 8291527207</li>
                <li>Email: info@movira.in</li>
                <li>
                  Address: 105 Commerce House, Nagindas Master Rd
                  <br />
                  Fort, Mumbai-400023
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Movira Industries LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
