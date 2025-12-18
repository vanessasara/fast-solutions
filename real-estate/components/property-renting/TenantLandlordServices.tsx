'use client'
import React, { useState } from 'react';
import { Users, UserCheck, Search, Video, FileText, Wrench, CreditCard, Camera, Shield, TrendingUp, ClipboardCheck, Home } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TenantLandlordServices() {
  const [activeService, setActiveService] = useState(0);

  const tenantServices = [
    {
      icon: Search,
      title: 'Property Search Assistance',
      description: 'Personalized help to find properties that match your lifestyle, budget, and preferences',
      color: 'bg-blue-500',
      details: [
        'One-on-one consultation',
        'Curated property recommendations',
        'Location and amenity matching',
        'Budget-friendly options'
      ]
    },
    {
      icon: Video,
      title: 'Virtual Tours & Viewings',
      description: 'Remote property tours and convenient appointment scheduling for in-person visits',
      color: 'bg-purple-500',
      details: [
        '360° virtual tours',
        'Video walkthroughs',
        'Flexible viewing schedules',
        'Remote viewing options'
      ]
    },
    {
      icon: FileText,
      title: 'Lease Agreements',
      description: 'Professional legal assistance with lease agreements, reviews, and documentation',
      color: 'bg-green-500',
      details: [
        'Contract drafting support',
        'Legal review services',
        'Terms clarification',
        'Signing assistance'
      ]
    },
    {
      icon: Wrench,
      title: 'Maintenance Support',
      description: 'Assistance with reporting issues and coordinating repairs during your tenancy',
      color: 'bg-orange-500',
      details: [
        '24/7 issue reporting',
        'Quick repair coordination',
        'Maintenance tracking',
        'Emergency support'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Support',
      description: 'Guidance on rent payments, security deposits, and payment agreements',
      color: 'bg-pink-500',
      details: [
        'Multiple payment methods',
        'Deposit management',
        'Payment schedules',
        'Transaction records'
      ]
    }
  ];

  const landlordServices = [
    {
      icon: Camera,
      title: 'Property Listing Management',
      description: 'Professional high-visibility listings with photos, videos, and compelling descriptions',
      color: 'bg-indigo-500',
      details: [
        'Professional photography',
        'Video production',
        'Optimized descriptions',
        'Multi-platform listing'
      ]
    },
    {
      icon: UserCheck,
      title: 'Tenant Screening',
      description: 'Thorough background checks, rental history verification, and creditworthiness assessment',
      color: 'bg-cyan-500',
      details: [
        'Background verification',
        'Credit checks',
        'Rental history review',
        'Reference validation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Promotion',
      description: 'Intensive marketing campaigns to attract qualified tenants quickly',
      color: 'bg-amber-500',
      details: [
        'Social media promotion',
        'Featured listings',
        'Targeted advertising',
        'Market reach expansion'
      ]
    },
    {
      icon: Shield,
      title: 'Legal Contracts',
      description: 'Expert assistance with rental contracts, regulations, and lease conditions',
      color: 'bg-red-500',
      details: [
        'Contract templates',
        'Legal compliance',
        'Regulation guidance',
        'Dispute resolution'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Property Management',
      description: 'Comprehensive oversight of maintenance, rent collection, and property inspections',
      color: 'bg-emerald-500',
      details: [
        'Rent collection',
        'Maintenance oversight',
        'Property inspections',
        'Tenant communication'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Comprehensive Support Services
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Professional services designed to make renting seamless for both tenants and landlords
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="tenant" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white shadow-lg h-auto max-w-md mx-auto">
            <TabsTrigger value="tenant" className="text-sm md:text-base py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              For Tenants
            </TabsTrigger>
            <TabsTrigger value="landlord" className="text-sm md:text-base py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Home className="w-4 h-4 mr-2" />
              For Landlords
            </TabsTrigger>
          </TabsList>

          {/* Tenant Services Tab */}
          <TabsContent value="tenant" className="space-y-8">
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  Tenant Services
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Everything you need for a seamless renting experience
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {tenantServices.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`text-left p-5 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        activeService === index
                          ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                          : 'border-slate-200 bg-white hover:shadow-md'
                      }`}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.color} text-white mb-3`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 line-clamp-2">
                        {service.description}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Active Service Details */}
                <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-lg ${tenantServices[activeService].color} text-white flex items-center justify-center flex-shrink-0`}>
                        {/* <tenantServices[activeService].icon className="w-7 h-7" /> */}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                          {tenantServices[activeService].title}
                        </h3>
                        <p className="text-sm md:text-base text-slate-700">
                          {tenantServices[activeService].description}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                      {tenantServices[activeService].details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="text-sm text-slate-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8 bg-white p-6 rounded-xl border-2 border-blue-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Why Tenants Choose Us</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                      <div className="text-sm text-slate-600">Tenant Satisfaction</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-sm text-slate-600">Support Available</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                      <div className="text-sm text-slate-600">Happy Tenants</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Landlord Services Tab */}
          <TabsContent value="landlord" className="space-y-8">
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                  <Home className="w-8 h-8" />
                  Landlord Services
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Comprehensive support for property owners and landlords
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {landlordServices.map((service, index) => (
                    <Card key={index} className="border-2 border-slate-200 hover:border-purple-400 transition-all hover:shadow-lg">
                      <CardContent className="p-5">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.color} text-white mb-3`}>
                          <service.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-600 mb-4">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.details.slice(0, 3).map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-xl">Maximize Your Returns</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</div>
                          <span className="text-sm text-slate-700">Maximize rental income through strategic pricing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</div>
                          <span className="text-sm text-slate-700">Reduce vacancy periods with effective marketing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</div>
                          <span className="text-sm text-slate-700">Find reliable, verified tenants quickly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</div>
                          <span className="text-sm text-slate-700">Professional property management services</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-300">
                    <CardHeader>
                      <CardTitle className="text-xl">Our Track Record</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="text-sm text-slate-700">Average Time to Rent</span>
                          <span className="text-lg font-bold text-purple-600">14 Days</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="text-sm text-slate-700">Properties Managed</span>
                          <span className="text-lg font-bold text-purple-600">500+</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="text-sm text-slate-700">Landlord Satisfaction</span>
                          <span className="text-lg font-bold text-purple-600">98%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span className="text-sm text-slate-700">Occupancy Rate</span>
                          <span className="text-lg font-bold text-purple-600">95%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-slate-900 to-blue-900 text-white border-none shadow-2xl">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Whether you're a tenant looking for the perfect home or a landlord seeking reliable tenants, our team is here to help you every step of the way.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">5000+</div>
                <div className="text-sm text-blue-200">Properties Listed</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">3000+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm text-blue-200">Support Available</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Find a Property (Tenants)
              </Button>
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
                List Your Property (Landlords)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
