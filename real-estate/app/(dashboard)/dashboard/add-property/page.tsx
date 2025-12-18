"use client"

import { NavActions } from "@/components/nav-actions"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, Home, Building2, Store, LandPlot } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function AddPropertyPage() {
  const [listingType, setListingType] = useState<"sale" | "rental">("sale")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const amenities = [
    "Swimming Pool",
    "Gym/Fitness Center",
    "Parking",
    "24/7 Security",
    "Garden",
    "Balcony",
    "Elevator",
    "Air Conditioning",
    "Heating",
    "Pet Friendly"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success("Property submitted successfully!", {
      description: "Your property is now pending approval."
    })

    setIsSubmitting(false)
  }

  return (
    <SidebarInset>
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex flex-1 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  Add New Property
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-4">
          <NavActions />
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6 max-w-5xl mx-auto w-full">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-serif font-bold tracking-tight">
            List Your Property
          </h1>
          <p className="text-muted-foreground text-lg">
            Complete the form below to submit your property for approval
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Basic Information</CardTitle>
              <CardDescription>Provide the essential details about your property</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base">Property Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Luxury Downtown Apartment"
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-base">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property in detail..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-base">Price (PKR) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="e.g., 125000000"
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-base">Location *</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Downtown Miami, FL"
                    required
                    className="h-11"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Type & Listing Type */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Property Classification</CardTitle>
              <CardDescription>Select the property and listing type</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Listing Type Toggle */}
              <div className="space-y-3">
                <Label className="text-base">Listing Type *</Label>
                <RadioGroup
                  value={listingType}
                  onValueChange={(value) => setListingType(value as "sale" | "rental")}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem value="sale" id="sale" className="peer sr-only" />
                    <Label
                      htmlFor="sale"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-emerald-600 peer-data-[state=checked]:bg-emerald-50 dark:peer-data-[state=checked]:bg-emerald-950 cursor-pointer transition-all"
                    >
                      <Home className="mb-3 h-8 w-8" />
                      <span className="text-lg font-semibold">For Sale</span>
                      <span className="text-sm text-muted-foreground">Sell your property</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="rental" id="rental" className="peer sr-only" />
                    <Label
                      htmlFor="rental"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 dark:peer-data-[state=checked]:bg-blue-950 cursor-pointer transition-all"
                    >
                      <Building2 className="mb-3 h-8 w-8" />
                      <span className="text-lg font-semibold">For Rent</span>
                      <span className="text-sm text-muted-foreground">Lease your property</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Property Type */}
              <div className="space-y-3">
                <Label htmlFor="propertyType" className="text-base">Property Type *</Label>
                <Select required>
                  <SelectTrigger id="propertyType" className="h-11">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>Apartment</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="house">
                      <div className="flex items-center gap-2">
                        <Home className="h-4 w-4" />
                        <span>House</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="commercial">
                      <div className="flex items-center gap-2">
                        <Store className="h-4 w-4" />
                        <span>Commercial</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="land">
                      <div className="flex items-center gap-2">
                        <LandPlot className="h-4 w-4" />
                        <span>Land</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Property Details */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Property Details</CardTitle>
              <CardDescription>Provide specific measurements and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms" className="text-base">Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    placeholder="e.g., 3"
                    min="0"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bathrooms" className="text-base">Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    placeholder="e.g., 2"
                    min="0"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area" className="text-base">Area (m²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="e.g., 120"
                    className="h-11"
                  />
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-3 pt-2">
                <Label className="text-base">Amenities</Label>
                <div className="grid sm:grid-cols-2 gap-4">
                  {amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox id={amenity} />
                      <Label
                        htmlFor={amenity}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {amenity}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Property Images</CardTitle>
              <CardDescription>Upload photos of your property (UI only)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4 justify-end pt-4">
            <Button type="button" variant="outline" size="lg">
              Cancel
            </Button>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="min-w-[140px]"
            >
              {isSubmitting ? "Submitting..." : "Submit Property"}
            </Button>
          </div>
        </form>
      </div>
    </SidebarInset>
  )
}
