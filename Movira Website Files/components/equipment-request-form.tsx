"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail } from "lucide-react"

export default function EquipmentRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Request Submitted!</h3>
            <p className="text-sm text-muted-foreground">
              We'll contact you within 24 hours with availability and pricing.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Request Equipment</CardTitle>
        <CardDescription className="text-sm">
          Can't find what you need? Let us know and we'll help you find it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="name" className="text-sm">
                Name
              </Label>
              <Input id="name" placeholder="Your name" required className="h-9" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm">
                Phone
              </Label>
              <Input id="phone" placeholder="Phone number" required className="h-9" />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input id="email" type="email" placeholder="your@email.com" required className="h-9" />
          </div>

          <div>
            <Label htmlFor="category" className="text-sm">
              Category
            </Label>
            <Select required>
              <SelectTrigger className="h-9">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="scaffolding">Scaffolding</SelectItem>
                <SelectItem value="formwork">Formwork</SelectItem>
                <SelectItem value="ms-accessories">MS Accessories</SelectItem>
                <SelectItem value="ms-pipes">MS Pipes</SelectItem>
                <SelectItem value="ms-lifts">MS Lifts</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="equipment" className="text-sm">
              Equipment Details
            </Label>
            <Textarea
              id="equipment"
              placeholder="Describe the equipment you need..."
              required
              className="min-h-[60px] resize-none"
            />
          </div>

          <Button type="submit" className="w-full h-9" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
