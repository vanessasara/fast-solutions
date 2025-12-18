'use client'
import React, { useState } from 'react';
import { Calendar, Clock, Home, Briefcase, Plane, Key, Shield, Wrench, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function RentalTerms() {
  const [selectedTerm, setSelectedTerm] = useState('short');

  const rentalOptions = [
    {
      id: 'short',
      title: 'Short-Term Rentals',
      subtitle: 'Flexible stays from days to months',
      icon: Calendar,
      color: 'from-orange-100 to-amber-100',
      iconBg: 'bg-orange-500',
      borderColor: 'border-orange-400',
      accentColor: 'text-orange-600',
      features: [
        {
          icon: Plane,
          title: 'Perfect For',
          description: 'Travelers, interns, temporary assignments, and business trips',
          details: ['Vacation stays', 'Work assignments', 'Internships', 'Project-based work']
        },
        {
          icon: Home,
          title: 'Property Types',
          description: 'Fully furnished apartments, serviced villas, and vacation rentals',
          details: ['Serviced apartments', 'Holiday homes', 'Corporate housing', 'Furnished studios']
        },
        {
          icon: Clock,
          title: 'Flexible Terms',
          description: 'Adjustable leasing from a few days to several months',
          details: ['Daily rentals', 'Weekly stays', 'Monthly bookings', 'Seasonal leases']
        },
        {
          icon: CheckCircle,
          title: 'All-Inclusive',
          description: 'Utilities, amenities, and convenience services included',
          details: ['WiFi & utilities', 'Housekeeping', 'Maintenance', 'Concierge services']
        }
      ],
      benefits: [
        'No long-term commitment required',
        'Fully furnished and move-in ready',
        'Utilities and amenities included',
        'Flexible cancellation policies',
        'Ideal for temporary stays'
      ]
    },
    {
      id: 'long',
      title: 'Long-Term Rentals',
      subtitle: 'Stable housing solutions for extended stays',
      icon: Key,
      color: 'from-blue-100 to-indigo-100',
      iconBg: 'bg-blue-500',
      borderColor: 'border-blue-400',
      accentColor: 'text-blue-600',
      features: [
        {
          icon: Home,
          title: 'Ideal For',
          description: 'Families, professionals, and long-term residents',
          details: ['Family homes', 'Professional housing', 'Student accommodation', 'Permanent residents']
        },
        {
          icon: Briefcase,
          title: 'Furnishing Options',
          description: 'Unfurnished or semi-furnished with tailored lease terms',
          details: ['Unfurnished units', 'Semi-furnished', 'Custom arrangements', 'Your choice']
        },
        {
          icon: Shield,
          title: 'Security & Stability',
          description: 'Transparent contracts ensuring protection for both parties',
          details: ['Legal contracts', 'Tenant rights', 'Lease security', 'Clear terms']
        },
        {
          icon: Wrench,
          title: 'Ongoing Support',
          description: 'Regular property maintenance and dedicated team assistance',
          details: ['24/7 support', 'Maintenance services', 'Property inspections', 'Tenant care']
        }
      ],
      benefits: [
        'Long-term price stability',
        'Make it your own home',
        'Build community connections',
        'Professional property management',
        'Maintenance and support included'
      ]
    }
  ];

  const currentOption = rentalOptions.find(opt => opt.id === selectedTerm);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-blue-50 py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Short-Term & Long-Term Rentals
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Flexible rental solutions for every need. Whether you're here for a week or a year, we have the perfect property for you.
          </p>
        </div>

        {/* Toggle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {rentalOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedTerm(option.id)}
              className={`text-left p-6 md:p-8 rounded-2xl bg-gradient-to-br ${option.color} border-4 transition-all duration-300 ${
                selectedTerm === option.id
                  ? `${option.borderColor} shadow-2xl scale-105`
                  : 'border-transparent shadow-lg hover:shadow-xl hover:scale-102'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full ${option.iconBg} text-white flex items-center justify-center flex-shrink-0`}>
                  <option.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                    {option.title}
                  </h2>
                  <p className="text-sm md:text-base text-slate-700">{option.subtitle}</p>
                </div>
              </div>
              {selectedTerm === option.id && (
                <div className="mt-4 pt-4 border-t-2 border-slate-300">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CheckCircle className="w-4 h-4" />
                    Currently Selected
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Detailed Information */}
        {currentOption && (
          <div className="space-y-8">
            {/* Features Grid */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
                {currentOption.title} Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentOption.features.map((feature, index) => (
                  <Card key={index} className="border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg ${currentOption.iconBg} text-white flex items-center justify-center flex-shrink-0`}>
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-slate-600">{feature.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded">
                            <div className={`w-1.5 h-1.5 rounded-full ${currentOption.iconBg}`}></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <Card className={`bg-gradient-to-br ${currentOption.color} border-none shadow-2xl`}>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-center text-slate-900">
                  Why Choose {currentOption.title}?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentOption.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/70 p-4 rounded-lg backdrop-blur-sm">
                      <CheckCircle className={`w-5 h-5 ${currentOption.accentColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-slate-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            <Card className="border-none shadow-xl">
              <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">Quick Comparison</CardTitle>
                <CardDescription className="text-slate-300 text-center">
                  Find the rental term that fits your lifestyle
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-4 text-slate-900 font-semibold">Feature</th>
                        <th className="text-center p-4 text-orange-600 font-semibold">Short-Term</th>
                        <th className="text-center p-4 text-blue-600 font-semibold">Long-Term</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-200">
                        <td className="p-4 font-medium text-slate-700">Duration</td>
                        <td className="p-4 text-center text-slate-600">Days to months</td>
                        <td className="p-4 text-center text-slate-600">6 months - years</td>
                      </tr>
                      <tr className="border-t border-slate-200 bg-slate-50">
                        <td className="p-4 font-medium text-slate-700">Furnishing</td>
                        <td className="p-4 text-center text-slate-600">Fully furnished</td>
                        <td className="p-4 text-center text-slate-600">Flexible options</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="p-4 font-medium text-slate-700">Utilities</td>
                        <td className="p-4 text-center text-slate-600">Included</td>
                        <td className="p-4 text-center text-slate-600">Usually separate</td>
                      </tr>
                      <tr className="border-t border-slate-200 bg-slate-50">
                        <td className="p-4 font-medium text-slate-700">Ideal For</td>
                        <td className="p-4 text-center text-slate-600">Travelers, temporary stays</td>
                        <td className="p-4 text-center text-slate-600">Families, professionals</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="p-4 font-medium text-slate-700">Commitment</td>
                        <td className="p-4 text-center text-slate-600">Flexible, low commitment</td>
                        <td className="p-4 text-center text-slate-600">Stable, long-term</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-teal-500 text-white border-none shadow-2xl">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Find Your Perfect Rental?
                </h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Our team is here to help you find the ideal property for your needs, whether short-term or long-term.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-gray-500 hover:bg-blue-50">
                    Browse Short-Term Rentals
                  </Button>
                  <Button size="lg" className="bg-white text-gray-500 hover:bg-blue-50">
                    Browse Long-Term Rentals
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
