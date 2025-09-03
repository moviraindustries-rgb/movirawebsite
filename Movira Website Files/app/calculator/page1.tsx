"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Calculator, Calendar, Package, Percent, DollarSign, FileText, Phone } from "lucide-react"
import Link from "next/link"
import EquipmentRequestForm from "@/components/equipment-request-form"

const equipmentData = [
  {
    id: 1,
    name: "Cuplock Vertical 3m",
    category: "Scaffolding",
    dailyRate: 66,
    weeklyRate: 462,
    monthlyRate: 1980,
  },
  {
    id: 2,
    name: "Cuplock Vertical 2.5m",
    category: "Scaffolding",
    dailyRate: 65,
    weeklyRate: 455,
    monthlyRate: 1950,
  },
  {
    id: 3,
    name: "Cuplock Vertical 2m",
    category: "Scaffolding",
    dailyRate: 64,
    weeklyRate: 448,
    monthlyRate: 1920,
  },
  {
    id: 4,
    name: "Cuplock Vertical 1.5m",
    category: "Scaffolding",
    dailyRate: 63,
    weeklyRate: 441,
    monthlyRate: 1890,
  },
  {
    id: 5,
    name: "Cuplock Ledger 3m",
    category: "Scaffolding",
    dailyRate: 62,
    weeklyRate: 434,
    monthlyRate: 1860,
  },
  {
    id: 6,
    name: "Cuplock Ledger 2.5m",
    category: "Scaffolding",
    dailyRate: 61,
    weeklyRate: 427,
    monthlyRate: 1830,
  },
]

export default function CalculatorPage() {
  const [selectedEquipment, setSelectedEquipment] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [duration, setDuration] = useState(1)
  const [durationType, setDurationType] = useState("days")
  const [subtotal, setSubtotal] = useState(0)
  const [durationDiscount, setDurationDiscount] = useState(0)
  const [quantityDiscount, setQuantityDiscount] = useState(0)
  const [total, setTotal] = useState(0)
  const [isRequestingQuote, setIsRequestingQuote] = useState(false)

  useEffect(() => {
    if (selectedEquipment && quantity && duration) {
      const equipment = equipmentData.find((eq) => eq.id.toString() === selectedEquipment)
      if (equipment) {
        let rate = 0
        let totalDays = 0

        // Calculate rate based on duration type
        if (durationType === "days") {
          rate = equipment.dailyRate
          totalDays = duration
        } else if (durationType === "weeks") {
          rate = equipment.weeklyRate
          totalDays = duration * 7
        } else if (durationType === "months") {
          rate = equipment.monthlyRate
          totalDays = duration * 30
        }

        const baseSubtotal = rate * quantity * duration
        setSubtotal(baseSubtotal)

        // Calculate discounts
        let durationDiscountAmount = 0
        let quantityDiscountAmount = 0

        // 5% discount for 6+ months (180+ days)
        if (totalDays >= 180) {
          durationDiscountAmount = baseSubtotal * 0.05
        }

        // 3% discount for 250+ pieces
        if (quantity >= 250) {
          quantityDiscountAmount = baseSubtotal * 0.03
        }

        setDurationDiscount(durationDiscountAmount)
        setQuantityDiscount(quantityDiscountAmount)

        const finalTotal = baseSubtotal - durationDiscountAmount - quantityDiscountAmount
        setTotal(finalTotal)
      }
    } else {
      setSubtotal(0)
      setDurationDiscount(0)
      setQuantityDiscount(0)
      setTotal(0)
    }
  }, [selectedEquipment, quantity, duration, durationType])

  const selectedEquipmentData = equipmentData.find((eq) => eq.id.toString() === selectedEquipment)

  const handleRequestQuote = async () => {
    if (!selectedEquipmentData) return

    setIsRequestingQuote(true)

    const quoteData = {
      equipment: selectedEquipmentData.name,
      quantity,
      duration,
      durationType,
      subtotal,
      durationDiscount,
      quantityDiscount,
      total,
      customerEmail: "mehtaabhishek281@gmail.com",
    }

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quoteData),
      })

      if (response.ok) {
        alert("Quote request sent successfully! You will receive the details via email.")
      } else {
        alert("Failed to send quote request. Please try again or contact us directly.")
      }
    } catch (error) {
      console.error("Error sending quote:", error)
      alert("Failed to send quote request. Please try again or contact us directly.")
    } finally {
      setIsRequestingQuote(false)
    }
  }

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
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Equipment
                </Link>
                <Link
                  href="/calculator"
                  className="text-foreground hover:text-primary py-2 rounded-md text-sm font-medium leading-7 px-0"
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
              <Button variant="outline" asChild className="bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Calculator className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Rental Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant pricing for your equipment rental needs. Select your equipment, duration, and quantity to see
            transparent pricing with automatic discounts.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Equipment Selection
                </CardTitle>
                <CardDescription>Choose your equipment and rental parameters to calculate pricing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Equipment Selection */}
                <div className="space-y-2">
                  <Label htmlFor="equipment">Select Equipment</Label>
                  <Select value={selectedEquipment} onValueChange={setSelectedEquipment}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose equipment..." />
                    </SelectTrigger>
                    <SelectContent>
                      {equipmentData.map((equipment) => (
                        <SelectItem key={equipment.id} value={equipment.id.toString()}>
                          <div className="flex items-center justify-between w-full">
                            <span>{equipment.name}</span>
                            <Badge variant="outline" className="ml-2">
                              {equipment.category}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                    placeholder="Enter quantity"
                  />
                  {quantity >= 250 && (
                    <div className="flex items-center text-sm text-green-600">
                      <Percent className="h-4 w-4 mr-1" />
                      <span>3% bulk discount applied for 250+ units</span>
                    </div>
                  )}
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label>Rental Duration</Label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      min="1"
                      value={duration}
                      onChange={(e) => setDuration(Number.parseInt(e.target.value) || 1)}
                      placeholder="Duration"
                      className="flex-1"
                    />
                    <Select value={durationType} onValueChange={setDurationType}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="days">Days</SelectItem>
                        <SelectItem value="weeks">Weeks</SelectItem>
                        <SelectItem value="months">Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {durationType === "months" && duration >= 6 && (
                    <div className="flex items-center text-sm text-green-600">
                      <Percent className="h-4 w-4 mr-1" />
                      <span>5% long-term discount applied for 6+ months</span>
                    </div>
                  )}
                </div>

                {/* Equipment Details */}
                {selectedEquipmentData && (
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium mb-2">Selected Equipment Details</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Name: {selectedEquipmentData.name}</div>
                      <div>Category: {selectedEquipmentData.category}</div>
                      <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t">
                        <div>
                          <div className="font-medium">Daily Rate</div>
                          <div>₹{selectedEquipmentData.dailyRate}</div>
                        </div>
                        <div>
                          <div className="font-medium">Weekly Rate</div>
                          <div>₹{selectedEquipmentData.weeklyRate}</div>
                        </div>
                        <div>
                          <div className="font-medium">Monthly Rate</div>
                          <div>₹{selectedEquipmentData.monthlyRate}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Pricing Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Pricing Summary
                  </CardTitle>
                  <CardDescription>Transparent pricing breakdown with automatic discounts</CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedEquipment ? (
                    <div className="space-y-4">
                      {/* Calculation Details */}
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Equipment:</span>
                          <span className="font-medium">{selectedEquipmentData?.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Quantity:</span>
                          <span className="font-medium">{quantity} units</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Duration:</span>
                          <span className="font-medium">
                            {duration} {durationType}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Rate per {durationType.slice(0, -1)}:</span>
                          <span className="font-medium">
                            ₹
                            {durationType === "days"
                              ? selectedEquipmentData?.dailyRate
                              : durationType === "weeks"
                                ? selectedEquipmentData?.weeklyRate
                                : selectedEquipmentData?.monthlyRate}
                          </span>
                        </div>
                      </div>

                      <Separator />

                      {/* Pricing Breakdown */}
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                        </div>

                        {durationDiscount > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span className="flex items-center">
                              <Percent className="h-4 w-4 mr-1" />
                              Long-term Discount (5%):
                            </span>
                            <span>-₹{durationDiscount.toLocaleString()}</span>
                          </div>
                        )}

                        {quantityDiscount > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span className="flex items-center">
                              <Percent className="h-4 w-4 mr-1" />
                              Bulk Discount (3%):
                            </span>
                            <span>-₹{quantityDiscount.toLocaleString()}</span>
                          </div>
                        )}
                      </div>

                      <Separator />

                      {/* Total */}
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-primary">₹{total.toLocaleString()}</span>
                      </div>

                      {/* Discount Information */}
                      <div className="p-4 bg-accent/10 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Available Discounts:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            5% discount for rentals 6+ months
                          </li>
                          <li className="flex items-center">
                            <Package className="h-3 w-3 mr-1" />
                            3% discount for quantities 250+ units
                          </li>
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3 pt-4">
                        <Button className="w-full" size="lg" onClick={handleRequestQuote} disabled={isRequestingQuote}>
                          <FileText className="h-4 w-4 mr-2" />
                          {isRequestingQuote ? "Sending Quote..." : "Request Quote"}
                        </Button>
                        <a href="tel:+918291527207" className="block">
                          <Button variant="outline" className="w-full bg-transparent" size="lg" type="button">
                            <Phone className="h-4 w-4 mr-2" />
                            Speak with Specialist (+91 8291527207)
                          </Button>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Select equipment to see pricing</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Equipment Request Form */}
              <EquipmentRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* Discount Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Automatic Discounts</h2>
            <p className="text-lg text-muted-foreground">
              Save more with our automatic discount system for bulk and long-term rentals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  Long-Term Discount
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">5% OFF</div>
                <p className="text-muted-foreground">
                  Automatically applied for rental periods of 6 months or longer. Perfect for extended construction
                  projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Package className="h-5 w-5 mr-2" />
                  Bulk Quantity Discount
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">3% OFF</div>
                <p className="text-muted-foreground">
                  Automatically applied when renting 250 or more units. Ideal for large-scale construction operations.
                </p>
              </CardContent>
            </Card>
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
