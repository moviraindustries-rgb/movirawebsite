import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Award, Clock, Wrench, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">Movira Industries LLP</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
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
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Rental Calculator
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
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
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Established 2010
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About Movira Industries LLP</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            For over a decade, we've been the trusted partner for construction companies across the region, providing
            reliable equipment rental solutions that keep projects moving forward.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010 by industry veterans with over 30 years of combined experience in construction and
                  heavy equipment, Movira Industries LLP began with a simple mission: to provide reliable,
                  well-maintained construction equipment when and where it's needed most.
                </p>
                <p>
                  What started as a small fleet of excavators and bulldozers has grown into a comprehensive equipment
                  rental operation serving contractors, developers, and construction companies throughout the region.
                  Our commitment to quality, reliability, and exceptional customer service has made us the go-to choice
                  for construction professionals.
                </p>
                <p>
                  Today, we maintain one of the largest and most diverse fleets of construction equipment in the area,
                  with over 500 pieces of machinery ranging from compact utility equipment to heavy-duty cranes and
                  specialized construction tools.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/construction-equipment-yard.png"
                alt="Movira Industries equipment yard"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every piece of equipment in our fleet is meticulously maintained and regularly inspected to ensure
                  optimal performance when you need it most.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We build lasting relationships with our clients by understanding their unique needs and providing
                  personalized solutions that exceed expectations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We invest in top-tier equipment from leading manufacturers and maintain the highest standards of
                  quality in everything we do.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Responsiveness</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Time is critical in construction. We provide rapid response times and flexible scheduling to keep your
                  projects on track.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our team brings decades of industry experience and technical knowledge to help you choose the right
                  equipment for every job.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We continuously invest in the latest equipment technology and digital solutions to improve efficiency
                  and project outcomes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">By the Numbers</h2>
            <p className="text-xl text-muted-foreground">Our track record speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Equipment Units</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">14</div>
              <div className="text-muted-foreground">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-muted-foreground">Uptime Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">Experienced professionals leading our mission</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Michael Rodriguez</CardTitle>
                <CardDescription>Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  25+ years in construction and equipment management. Former operations director at major construction
                  firms across the region.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Sarah Chen</CardTitle>
                <CardDescription>Chief Operations Officer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Expert in fleet management and maintenance operations. Mechanical engineer with 20+ years of heavy
                  equipment experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>David Thompson</CardTitle>
                <CardDescription>Business Development Director</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Specializes in client relationships and market expansion. Former project manager with deep
                  understanding of construction industry needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the Movira Industries difference. Let us help you find the right equipment for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href="/calculator">Get Instant Quote</Link>
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
              <h3 className="text-2xl font-bold text-primary mb-4">Movira Industries LLP</h3>
              <p className="text-muted-foreground mb-4">
                Your trusted partner for construction equipment rental. We provide reliable, high-quality equipment with
                exceptional service and competitive pricing.
              </p>
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
