import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ListingPackages() {
  const packages = [
    {
      name: "Basic",
      description: "Perfect for getting started",
      price: "Contact Us",
      features: [
        "Professional photography",
        "Online listing on our website",
        "Basic property description",
        "Standard support",
        "7-day featured period"
      ],
      highlighted: false
    },
    {
      name: "Premium",
      description: "Enhanced visibility for faster sales",
      price: "Contact Us",
      features: [
        "Everything in Basic",
        "Featured placement on website",
        "Social media promotion",
        "Virtual tours",
        "Priority support",
        "14-day featured period",
        "Email campaign inclusion"
      ],
      highlighted: true
    },
    {
      name: "Complete",
      description: "Full-scale marketing for maximum impact",
      price: "Contact Us",
      features: [
        "Everything in Premium",
        "Professional videography",
        "Drone aerial photography",
        "Targeted advertising campaigns",
        "Dedicated agent support",
        "30-day featured period",
        "Staging consultation",
        "Print advertising"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Choose Your Listing Package
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select the perfect package to showcase your property and reach serious buyers. Each package is designed to maximize exposure and achieve the best sale price.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.name} 
              className={`relative ${
                pkg.highlighted 
                  ? 'border-2 border-blue-500 shadow-xl scale-105' 
                  : 'border-slate-200'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-slate-900">{pkg.price}</p>
                  <p className="text-sm text-slate-500">Custom pricing based on property</p>
                </div>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    pkg.highlighted 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-slate-900 hover:bg-slate-800'
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Not sure which package is right for you?
          </p>
          <Button variant="outline" size="lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
