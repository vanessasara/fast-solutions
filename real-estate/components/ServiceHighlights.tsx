import React from 'react';
import { Card, CardContent} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight} from 'lucide-react';
import Image from 'next/image'
import { Homeservices,benefits } from '@/lib/data';

export default function ServiceHighlights() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-teal-50/30 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#009689] via-teal-700 to-[#007a6f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white border-white/30 text-base px-4 py-2">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Service Highlights
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50 leading-relaxed max-w-3xl mx-auto">
              Fast Real Estate offers more than property listing services, creating a seamless process for all clients with comprehensive support from start to finish
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {Homeservices.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-6 right-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#009689] to-teal-400 rounded-full"></div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 group/item">
                      <div className="mt-1">
                        <CheckCircle2 className="w-6 h-6 text-[#009689] flex-shrink-0" />
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All-Inclusive Experience Section */}
      <div className="bg-gradient-to-br from-teal-50/50 via-white to-emerald-50/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#009689] to-teal-600 p-1">
                <div className="bg-white p-10">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      All-Inclusive Property Acquisition
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#009689] to-teal-500 mx-auto rounded-full"></div>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed text-center mb-10">
                    These services are aimed at providing an <span className="font-bold text-[#009689]">all-inclusive experience</span> in property acquisition, ensuring clients enjoy the benefits of having <span className="font-bold text-teal-600">start-to-finish services</span>. The combination of several services reinforces our commitment to comprehensive support.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#009689] to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <benefit.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* SEO Keywords Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-5xl mx-auto border-0 shadow-xl bg-gradient-to-br from-[#009689] to-teal-700 text-white overflow-hidden">
          <CardContent className="p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Our Expertise Includes</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Real Estate Consultancy",
                    "Visa Support for Property Purchase",
                    "Property Investment Services",
                    "International Property Acquisition",
                    "Legal Documentation Support",
                    "Market Analysis & Portfolio Planning"
                  ].map((keyword, index) => (
                    <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 backdrop-blur border-white/30">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Button size="lg" className="bg-white text-[#009689] hover:bg-teal-50 shadow-xl">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
