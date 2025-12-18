"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Upload, ArrowRight, ArrowLeft } from "lucide-react";

export default function RequestQuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Service Selection
    serviceType: "",
    productType: "",
    
    // Step 2: Project Details
    quantity: "",
    size: "",
    material: "",
    finish: "",
    colors: "",
    additionalInfo: "",
    
    // Step 3: Contact & Delivery
    name: "",
    email: "",
    phone: "",
    company: "",
    deliveryDate: "",
    rushOrder: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    setStep(4); // Success step
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Free Quote</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get a detailed quote for your printing or packaging project in 24 hours or less
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            {step < 4 && (
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          step >= num
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {num}
                      </div>
                      {num < 3 && (
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            step > num ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm text-center">
                  <div className={step >= 1 ? "font-medium" : "text-muted-foreground"}>
                    Service Type
                  </div>
                  <div className={step >= 2 ? "font-medium" : "text-muted-foreground"}>
                    Project Details
                  </div>
                  <div className={step >= 3 ? "font-medium" : "text-muted-foreground"}>
                    Contact Info
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>What service do you need?</CardTitle>
                    <CardDescription>Select the type of printing or packaging service</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Service Category *</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                      >
                        <option value="">Choose a service</option>
                        <option value="printing">Printing Services</option>
                        <option value="packaging">Packaging Solutions</option>
                        <option value="design">Design Services</option>
                        <option value="combo">Printing + Packaging</option>
                      </select>
                    </div>

                    {formData.serviceType && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Product Type *</label>
                        <select
                          name="productType"
                          value={formData.productType}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          required
                        >
                          <option value="">Select product type</option>
                          {formData.serviceType === "printing" && (
                            <>
                              <option value="business-cards">Business Cards</option>
                              <option value="brochures">Brochures</option>
                              <option value="flyers">Flyers</option>
                              <option value="posters">Posters</option>
                              <option value="banners">Banners</option>
                              <option value="catalogs">Catalogs</option>
                              <option value="stationery">Stationery</option>
                            </>
                          )}
                          {formData.serviceType === "packaging" && (
                            <>
                              <option value="custom-boxes">Custom Boxes</option>
                              <option value="product-boxes">Product Boxes</option>
                              <option value="food-packaging">Food Packaging</option>
                              <option value="labels">Labels & Stickers</option>
                              <option value="bags">Bags & Pouches</option>
                              <option value="luxury-packaging">Luxury Packaging</option>
                            </>
                          )}
                          {formData.serviceType === "design" && (
                            <>
                              <option value="logo">Logo Design</option>
                              <option value="brand-identity">Brand Identity</option>
                              <option value="packaging-design">Packaging Design</option>
                              <option value="marketing-materials">Marketing Materials</option>
                            </>
                          )}
                        </select>
                      </div>
                    )}

                    <Button type="button" onClick={nextStep} disabled={!formData.productType}>
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Project Details */}
              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Project Specifications</CardTitle>
                    <CardDescription>Provide details about your project requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Quantity *</label>
                        <Input
                          name="quantity"
                          type="number"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g., 1000"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Size/Dimensions *</label>
                        <Input
                          name="size"
                          value={formData.size}
                          onChange={handleChange}
                          placeholder="e.g., A4, 10x15cm, Custom"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Material</label>
                        <select
                          name="material"
                          value={formData.material}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="">Select material</option>
                          <option value="standard-paper">Standard Paper</option>
                          <option value="premium-paper">Premium Paper</option>
                          <option value="cardstock">Cardstock</option>
                          <option value="corrugated">Corrugated Board</option>
                          <option value="vinyl">Vinyl</option>
                          <option value="other">Other (specify below)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Finish</label>
                        <select
                          name="finish"
                          value={formData.finish}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="">Select finish</option>
                          <option value="matte">Matte</option>
                          <option value="glossy">Glossy</option>
                          <option value="uv">UV Coating</option>
                          <option value="lamination">Lamination</option>
                          <option value="embossing">Embossing</option>
                          <option value="foil">Foil Stamping</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Colors</label>
                        <select
                          name="colors"
                          value={formData.colors}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="">Select color options</option>
                          <option value="full-color">Full Color (CMYK)</option>
                          <option value="1-color">1 Color</option>
                          <option value="2-color">2 Colors</option>
                          <option value="black-white">Black & White</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Additional Information</label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Any special requirements, design notes, or questions..."
                        rows={4}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Upload Design Files (Optional)</label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-1">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF, AI, PSD, PNG, JPG (Max 10MB)
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button type="button" onClick={nextStep} disabled={!formData.quantity || !formData.size}>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Contact & Delivery */}
              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Contact & Delivery Information</CardTitle>
                    <CardDescription>How can we reach you with your quote?</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number *</label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92-XXX-XXXXXXX"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Company Name</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Target Delivery Date</label>
                        <Input
                          name="deliveryDate"
                          type="date"
                          value={formData.deliveryDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="rushOrder"
                        name="rushOrder"
                        checked={formData.rushOrder}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <label htmlFor="rushOrder" className="text-sm font-medium">
                        This is a rush order (2-3 day turnaround)
                      </label>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        By submitting this form, you agree to receive a quote via email within 24 hours. 
                        We respect your privacy and will never share your information.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button type="submit">
                        Submit Quote Request
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Success */}
              {step === 4 && (
                <Card className="text-center">
                  <CardContent className="pt-12 pb-12">
                    <div className="mb-6 inline-flex p-4 bg-green-100 rounded-full">
                      <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Quote Request Received!</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                      Thank you for your interest. We've received your quote request and will send you 
                      a detailed proposal within 24 hours.
                    </p>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        A confirmation email has been sent to <strong>{formData.email}</strong>
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild>
                          <a href="/">Return to Homepage</a>
                        </Button>
                        <Button variant="outline" onClick={() => {
                          setStep(1);
                          setFormData({
                            serviceType: "",
                            productType: "",
                            quantity: "",
                            size: "",
                            material: "",
                            finish: "",
                            colors: "",
                            additionalInfo: "",
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            deliveryDate: "",
                            rushOrder: false,
                          });
                        }}>
                          Request Another Quote
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {step < 4 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">We Review Your Request</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team carefully reviews your requirements and specifications
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Detailed Quote in 24hrs</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive a comprehensive quote with pricing, timeline, and options
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Expert Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    Speak with our team to refine details and start your project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
