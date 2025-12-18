import React from 'react';
import { Building2, MapPin, Upload, Phone, Mail, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SellPropertyForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50/50 via-white to-emerald-50/50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Sell Your Property
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start your hassle-free selling process today. Fill out the form below and our experts will begin working on your property listing immediately.
          </p>
        </div>

        <Card className="shadow-xl border-slate-200">
          <CardHeader className="bg-gradient-to-r from-[#009689] to-teal-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Property Details</CardTitle>
            <CardDescription className="text-teal-100">
              Provide information about your property to get started
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* Property Type */}
              <div className="space-y-3">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#009689]" />
                  Property Type
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Residential', 'Commercial', 'Plots', 'Rentals'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className="p-4 rounded-lg border-2 border-slate-200 hover:border-[#009689] hover:bg-teal-50 transition-all"
                    >
                      <div className="font-semibold">{type}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-base font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#009689]" />
                  Property Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Enter complete address"
                  className="border-slate-300"
                />
              </div>

              {/* Size and Rooms */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="size" className="text-base font-semibold">
                    Property Size
                  </Label>
                  <Input
                    id="size"
                    name="size"
                    placeholder="e.g., 2500 sq ft"
                    className="border-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rooms" className="text-base font-semibold">
                    Number of Rooms
                  </Label>
                  <Input
                    id="rooms"
                    name="rooms"
                    placeholder="e.g., 3 bedrooms, 2 baths"
                    className="border-slate-300"
                  />
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-2">
                <Label htmlFor="amenities" className="text-base font-semibold">
                  Facilities & Amenities
                </Label>
                <Textarea
                  id="amenities"
                  name="amenities"
                  placeholder="List key features: parking, garden, security, etc."
                  className="border-slate-300 min-h-24"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-base font-semibold">
                  Additional Details
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Any additional information about your property"
                  className="border-slate-300 min-h-24"
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <Upload className="w-5 h-5 text-[#009689]" />
                  Upload Images & Documents
                </Label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-[#009689] transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-sm text-slate-600 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500">Images, floor plans, documents (Max 10MB)</p>
                  <input type="file" multiple className="hidden" />
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#009689]" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      className="border-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#009689]" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="border-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#009689]" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="border-slate-300"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div className="space-y-3 bg-teal-50/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Request Additional Services</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="valuation"
                      className="w-4 h-4 text-[#009689] accent-[#009689]"
                    />
                    <span className="text-sm">Request professional property valuation</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consultation"
                      className="w-4 h-4 text-[#009689] accent-[#009689]"
                    />
                    <span className="text-sm">Schedule a free consultation with our experts</span>
                  </label>
                </div>
              </div>

              <Button className="w-full bg-[#009689] hover:bg-[#007a6f] h-12 text-lg">
                Submit Property for Listing
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-slate-600">
          <p>Our team will review your submission and contact you within 24 hours</p>
        </div>
      </div>
    </div>
  );
}
