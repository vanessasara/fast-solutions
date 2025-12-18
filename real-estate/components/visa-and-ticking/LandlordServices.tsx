import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Building2, Users, Megaphone, FileCheck, Settings, TrendingUp, CheckCircle2, DollarSign, Shield, Clock, Star, BarChart3, Home, Award } from 'lucide-react';

export default function LandlordServices() {
  const services = [
    {
      icon: Building2,
      title: "Property Listing Management",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      description: "Professional high-visibility listings with photos, videos, and descriptions",
      features: [
        "Professional photography and videography services",
        "Compelling property descriptions that attract tenants",
        "Virtual tours and 360-degree walkthroughs",
        "Multi-platform listing distribution for maximum exposure",
        "Regular updates and optimization of listings"
      ],
      gradient: "from-[#009689] to-teal-600"
    },
    {
      icon: Users,
      title: "Tenant Screening",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      description: "Comprehensive background checks to minimize risks and ensure quality tenants",
      features: [
        "Thorough tenant background verification",
        "Credit history and financial stability assessment",
        "Rental history and reference checks",
        "Employment and income verification",
        "Risk assessment reports for informed decisions"
      ],
      gradient: "from-teal-600 to-cyan-600"
    },
    {
      icon: Megaphone,
      title: "Marketing & Promotion",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      description: "Intensive promotion to attract qualified tenants within a short time",
      features: [
        "Targeted digital marketing campaigns",
        "Social media promotion and advertising",
        "Email marketing to qualified tenant database",
        "Premium placement on major property portals",
        "SEO optimization for maximum online visibility"
      ],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: FileCheck,
      title: "Rental Contracts & Legal Advice",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      description: "Professional contracts, regulations compliance, and lease conditions",
      features: [
        "Legally compliant rental agreement drafting",
        "Lease terms negotiation and optimization",
        "Local regulation and compliance guidance",
        "Tenant rights and landlord protection balance",
        "Dispute resolution and legal support"
      ],
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      icon: Settings,
      title: "Property Management",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      description: "Complete oversight for smooth operations and tenant satisfaction",
      features: [
        "Regular property inspections and maintenance coordination",
        "Rent collection and financial management",
        "24/7 tenant communication and support",
        "Emergency maintenance response coordination",
        "Detailed reporting and performance analytics"
      ],
      gradient: "from-blue-600 to-indigo-600"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Maximize Income",
      description: "Optimize rental rates and minimize vacancy periods for maximum returns"
    },
    {
      icon: Shield,
      title: "Risk Protection",
      description: "Thorough tenant screening and legal compliance reduce risks"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "We handle day-to-day management so you can focus on growth"
    },
    {
      icon: Star,
      title: "Quality Tenants",
      description: "Attract and retain reliable, long-term tenants through professional service"
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "95%",
      label: "Average Occupancy Rate",
      description: "Properties managed by us"
    },
    {
      icon: Clock,
      value: "15 Days",
      label: "Average Time to Rent",
      description: "From listing to tenant move-in"
    },
    {
      icon: Users,
      value: "98%",
      label: "Tenant Retention",
      description: "Quality tenants stay longer"
    },
    {
      icon: Award,
      value: "500+",
      label: "Properties Managed",
      description: "Trusted by landlords nationwide"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Property Assessment",
      description: "We evaluate your property and recommend optimal rental strategies",
      icon: Home
    },
    {
      step: "02",
      title: "Professional Marketing",
      description: "Create stunning listings and launch targeted marketing campaigns",
      icon: Megaphone
    },
    {
      step: "03",
      title: "Tenant Screening",
      description: "Thoroughly vet applicants to find the perfect match for your property",
      icon: Users
    },
    {
      step: "04",
      title: "Ongoing Management",
      description: "Handle all aspects from rent collection to maintenance coordination",
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-teal-50/20 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#009689] via-teal-700 to-[#007a6f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white border-white/30 text-base px-4 py-2">
              <Building2 className="w-4 h-4 mr-2 inline" />
              For Landlords
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Landlord Support Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50 leading-relaxed max-w-3xl mx-auto">
              Fast Real Estate offers comprehensive assistance to landlords interested in renting their properties in the most effective and secure way, maximizing rental income while ensuring tenant satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50/30">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#009689] to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Landlord Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Full-service property management to maximize returns and minimize hassle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  fill
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute top-6 right-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm transform group-hover:rotate-12 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-teal-100 text-sm">{service.description}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#009689] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-teal-50/50 via-white to-emerald-50/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
              <p className="text-lg text-gray-600">Our track record speaks for itself</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#009689] to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-[#009689] mb-2">{stat.value}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{stat.label}</h3>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined process to get your property rented quickly and profitably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge className="bg-gradient-to-r from-[#009689] to-teal-600 text-white text-2xl font-bold px-4 py-2">
                        {step.step}
                      </Badge>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-[#009689]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#009689] to-teal-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#009689] to-teal-600 p-1">
              <div className="bg-white p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#009689] to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Why Landlords Trust Fast Real Estate
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#009689] to-teal-500 mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Earn maximum rental income through optimal pricing strategies",
                    "Reduce vacancy time with effective marketing and promotion",
                    "Access to qualified, thoroughly screened tenants",
                    "Professional property management and maintenance coordination",
                    "Legal compliance and risk protection through expert contracts",
                    "Transparent reporting and financial management",
                    "Dedicated support team available for all your needs",
                    "Well-maintained properties with satisfied long-term tenants"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50">
                      <CheckCircle2 className="w-6 h-6 text-[#009689] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

     
    </div>
  );
}
