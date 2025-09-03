"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Wrench, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import EquipmentRequestForm from "@/components/equipment-request-form"

const equipmentData = [
  {
    id: 1,
    name: "Cuplock Vertical 3m",
    category: "Scaffolding",
    dailyRate: 66,
    weeklyRate: 462,
    monthlyRate: 1980,
    specifications: {
      length: "3 meters",
      material: "Steel",
      weight: "8.5 kg",
    },
    features: ["Hot Dip Galvanized", "Easy Assembly", "High Load Capacity"],
    availability: "Available",
    image: "cuplock scaffolding vertical steel construction equipment",
  },
  {
    id: 2,
    name: "Cuplock Vertical 2.5m",
    category: "Scaffolding",
    dailyRate: 65,
    weeklyRate: 455,
    monthlyRate: 1950,
    specifications: {
      length: "2.5 meters",
      material: "Steel",
      weight: "7.2 kg",
    },
    features: ["Hot Dip Galvanized", "Easy Assembly", "High Load Capacity"],
    availability: "Available",
    image: "cuplock scaffolding vertical steel construction equipment",
  },
  {
    id: 3,
    name: "Cuplock Vertical 2m",
    category: "Scaffolding",
    dailyRate: 64,
    weeklyRate: 448,
    monthlyRate: 1920,
    specifications: {
      length: "2 meters",
      material: "Steel",
      weight: "5.8 kg",
    },
    features: ["Hot Dip Galvanized", "Easy Assembly", "High Load Capacity"],
    availability: "Available",
    image: "cuplock scaffolding vertical steel construction equipment",
  },
  {
    id: 4,
    name: "Cuplock Vertical 1.5m",
    category: "Scaffolding",
    dailyRate: 63,
    weeklyRate: 441,
    monthlyRate: 1890,
    specifications: {
      length: "1.5 meters",
      material: "Steel",
      weight: "4.5 kg",
    },
    features: ["Hot Dip Galvanized", "Easy Assembly", "High Load Capacity"],
    availability: "Available",
    image: "cuplock scaffolding vertical steel construction equipment",
  },
  {
    id: 5,
    name: "Cuplock Ledger 3m",
    category: "Scaffolding",
    dailyRate: 62,
    weeklyRate: 434,
    monthlyRate: 1860,
    specifications: {
      length: "3 meters",
      material: "Steel",
      weight: "6.2 kg",
    },
    features: ["Hot Dip Galvanized", "Easy Assembly", "Horizontal Support"],
    availability: "Available",
    image: "cuplock scaffolding ledger steel construction equipment",
  },
  {
    id: 6,
    name: "Cuplock Ledger 2.5m",
    category: "Scaffolding",
    dailyRate: 61,
    weeklyRate: 427,
    monthlyRate: 1830,
    specifications: {
      length: "2.5 meters",
      material: "Steel",
      weight: "5.1 kg",
    },
    features: ["Hot Dip Galvanized", "Easy Assembly", "Horizontal Support"],
    availability: "Available",
    image: "cuplock scaffolding ledger steel construction equipment",
  },
]

const categories = ["All Categories", "Scaffolding", "Formwork", "MS Accessories", "MS Pipes", "MS Lifts"]

export default function EquipmentPage() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [filteredEquipment, setFilteredEquipment] = useState(equipmentData)

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      const categoryMap: { [key: string]: string } = {
        scaffolding: "Scaffolding",
        formwork: "Formwork",
        "ms-accessories": "MS Accessories",
        "ms-pipes": "MS Pipes",
        "ms-lifts": "MS Lifts",
      }
      const category = categoryMap[categoryParam] || "All Categories"
      setSelectedCategory(category)
    }
  }, [searchParams])

  useEffect(() => {
    if (selectedCategory === "All Categories") {
      setFilteredEquipment(equipmentData)
    } else {
      setFilteredEquipment(equipmentData.filter((item) => item.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <img
                    src="/movira-logo.jpg"
                    alt="Movira Industries LLP Logo"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <h1 className="text-2xl font-bold text-primary">Movira Industries LLP</h1>
                </div>
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
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
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

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Equipment Catalog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our comprehensive selection of construction equipment. All machines are regularly maintained and
              ready for immediate deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search equipment by name or model..." className="pl-10" />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue="availability">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="availability">All</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="limited">Limited</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Equipment Cards */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredEquipment.map((equipment) => (
                  <Card key={equipment.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={`/abstract-geometric-shapes.png?height=300&width=400&query=${equipment.image}`}
                        alt={equipment.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{equipment.category}</Badge>
                        <Badge
                          variant={equipment.availability === "Available" ? "default" : "outline"}
                          className={
                            equipment.availability === "Available" ? "bg-green-100 text-green-800 border-green-200" : ""
                          }
                        >
                          {equipment.availability}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{equipment.name}</CardTitle>
                      <CardDescription className="text-sm">
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {Object.entries(equipment.specifications).map(([key, value]) => (
                            <div key={key} className="flex items-center text-xs">
                              <Wrench className="h-3 w-3 mr-1 text-muted-foreground" />
                              <span className="capitalize">
                                {key}: {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Features */}
                        <div>
                          <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                          <div className="flex flex-wrap gap-1">
                            {equipment.features.map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="border-t pt-4">
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                              <div className="text-xs text-muted-foreground">Daily</div>
                              <div className="font-semibold text-sm">₹{equipment.dailyRate}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Weekly</div>
                              <div className="font-semibold text-sm">₹{equipment.weeklyRate}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Monthly</div>
                              <div className="font-semibold text-sm">₹{equipment.monthlyRate}</div>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          <Button
                            className="flex-1"
                            disabled={equipment.availability === "Limited"}
                            asChild={equipment.availability === "Available"}
                          >
                            {equipment.availability === "Available" ? (
                              <Link href={`/calculator?equipment=${equipment.id}`}>
                                <DollarSign className="h-4 w-4 mr-1" />
                                Get Quote
                              </Link>
                            ) : (
                              <>
                                <Calendar className="h-4 w-4 mr-1" />
                                Request Availability
                              </>
                            )}
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredEquipment.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No equipment available in this category yet.</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Use the request form to inquire about specific equipment.
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <EquipmentRequestForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need Help Choosing Equipment?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our equipment specialists can help you select the right machinery for your specific project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/calculator">
                <DollarSign className="mr-2 h-5 w-5" />
                Use Rental Calculator
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-transparent">
              <Link href="/contact">Contact Equipment Specialist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/movira-logo.jpg"
                  alt="Movira Industries LLP Logo"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <h3 className="text-2xl font-bold text-primary">Movira Industries LLP</h3>
              </div>
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
