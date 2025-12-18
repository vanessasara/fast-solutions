'use client'
import React, { useState } from 'react';
import { Camera, Video, Plane, DollarSign, TrendingUp, Users, Megaphone, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ServicesShowcase() {
  const [activeService, setActiveService] = useState(0);

  const photographyServices = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "High-quality interior and exterior shots highlighting your property's best features",
      color: "from-pink-100 to-rose-100",
      borderColor: "border-pink-300",
      iconBg: "bg-pink-400"
    },
    {
      icon: Plane,
      title: "Drone Photography",
      description: "Stunning aerial views perfect for showcasing extensive properties and plots",
      color: "from-blue-100 to-cyan-100",
      borderColor: "border-blue-300",
      iconBg: "bg-blue-400"
    },
    {
      icon: Video,
      title: "Video Walkthroughs",
      description: "Immersive virtual tours and video content for online viewing experiences",
      color: "from-purple-100 to-indigo-100",
      borderColor: "border-purple-300",
      iconBg: "bg-purple-400"
    }
  ];

  const valuationFeatures = [
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Professional evaluation based on current market trends and conditions"
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Strategic pricing to ensure fast sales at optimal market value"
    },
    {
      icon: BarChart,
      title: "ROI Assessment",
      description: "Detailed investment advice and return on investment calculations"
    }
  ];

  const marketingStrategies = [
    {
      title: "Digital Marketing",
      points: [
        "Featured listings on top real estate websites",
        "Social media promotion campaigns",
        "Targeted email marketing to qualified buyers"
      ]
    },
    {
      title: "Visual Content",
      points: [
        "Virtual tours and 3D walkthroughs",
        "Interactive floor plans",
        "Professional video presentations"
      ]
    },
    {
      title: "Traditional Outreach",
      points: [
        "Print advertising in local publications",
        "Neighborhood marketing campaigns",
        "Open house coordination"
      ]
    }
  ];

  const agentServices = [
    "Personalized consultation and strategy planning",
    "Professional property viewings coordination",
    "Expert negotiation for optimal pricing",
    "Legal procedure guidance and support",
    "Regular updates and transparent communication"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-purple-50 py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Professional Services
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            From stunning visuals to strategic marketing and expert valuation, we provide comprehensive services to sell your property quickly and profitably.
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="photography" className="mb-8 md:mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 md:mb-8 bg-gray-100 shadow-md h-auto">
            <TabsTrigger value="photography" className="text-xs md:text-sm py-3">Photography</TabsTrigger>
            <TabsTrigger value="valuation" className="text-xs md:text-sm py-3">Valuation</TabsTrigger>
            <TabsTrigger value="marketing" className="text-xs md:text-sm py-3">Marketing</TabsTrigger>
            <TabsTrigger value="agent" className="text-xs md:text-sm py-3">Agent Support</TabsTrigger>
          </TabsList>

          {/* Photography Tab */}
          <TabsContent value="photography" className="space-y-6">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-slate-900 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl">Professional Videography & Photography</CardTitle>
                <CardDescription className="text-slate-700">
                  Visual presentation plays a vital role in selling properties at the right price
                </CardDescription>
              </CardHeader>
              <CardContent className="p- md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                  {photographyServices.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`text-left p-4 md:p-6 rounded-xl bg-gradient-to-br ${service.color} border-2 transition-all duration-300 transform hover:scale-105 ${
                        activeService === index 
                          ? `${service.borderColor} shadow-lg scale-105` 
                          : 'border-transparent shadow-md hover:shadow-lg'
                      }`}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full ${service.iconBg} text-white mb-3 md:mb-4 transition-transform ${
                        activeService === index ? 'scale-110' : ''
                      }`}>
                        <service.icon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">{service.description}</p>
                      {activeService === index && (
                        <div className="mt-3 pt-3 border-t border-slate-300">
                          <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                            ✓ Currently Selected
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Active Service Details */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6 rounded-lg border-l-4 border-blue-400 shadow-md">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm md:text-base">
                    <Camera className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    About {photographyServices[activeService].title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-700 mb-4">
                    {activeService === 0 && "Our professional photographers capture every detail of your property, from spacious interiors to stunning exteriors. We use advanced equipment and techniques to highlight your property's unique features and create compelling images that attract serious buyers."}
                    {activeService === 1 && "Aerial photography provides a unique perspective that showcases the full scope of your property. Perfect for large estates, commercial properties, and plots, our drone services capture breathtaking views that traditional photography cannot achieve."}
                    {activeService === 2 && "Engage potential buyers with immersive video content. Our professional videography services include cinematic walkthroughs, 360-degree virtual tours, and interactive experiences that allow buyers to explore your property from anywhere in the world."}
                  </p>
                  <div className="bg-white p-3 md:p-4 rounded-lg">
                    <p className="text-xs md:text-sm text-slate-600 font-medium mb-2">Additional Benefits:</p>
                    <ul className="text-xs md:text-sm text-slate-700 space-y-1">
                      <li>• Staging consultation to enhance property appeal</li>
                      <li>• Same-day photo editing and delivery</li>
                      <li>• Professional media ensures market-leading presentation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Valuation Tab */}
          <TabsContent value="valuation" className="space-y-6">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-200 via-green-200 to-teal-200 text-slate-900 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl">Property Valuation Services</CardTitle>
                <CardDescription className="text-slate-700">
                  Professional valuation based on market trends, location, and property characteristics
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                  {valuationFeatures.map((feature, index) => (
                    <Card key={index} className="border-2 border-slate-200 hover:border-green-400 transition-all hover:shadow-lg">
                      <CardContent className="p-4 md:p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-100 text-green-600 mb-3 md:mb-4">
                          <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-xs md:text-sm text-slate-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-green-50 p-4 md:p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-green-900 text-sm md:text-base">Benefits</h4>
                    <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Attract serious buyers with realistic pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Reduce time on market with competitive pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Maximize property value through strategic positioning</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 md:p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-sm md:text-base">What's Included</h4>
                    <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Comprehensive property assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Comparison with similar properties in area</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Detailed valuation report and recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Marketing Tab */}
          <TabsContent value="marketing" className="space-y-6">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-200 via-amber-200 to-yellow-200 text-slate-900 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Megaphone className="w-6 h-6 md:w-7 md:h-7" />
                  Marketing Strategy
                </CardTitle>
                <CardDescription className="text-slate-700">
                  Targeted campaigns designed to reach the right buyers and generate quality leads
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                  {marketingStrategies.map((strategy, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-orange-50 p-4 md:p-6 rounded-lg border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg">
                      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-orange-900">{strategy.title}</h3>
                      <ul className="space-y-2">
                        {strategy.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                            <span className="text-orange-600 mt-1">→</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 md:p-6 rounded-lg border border-orange-200">
                  <h4 className="font-semibold mb-3 text-base md:text-lg">Our Marketing Advantage</h4>
                  <p className="text-slate-700 mb-4 text-xs md:text-sm">
                    Through a combination of digital marketing, professional media, and targeted outreach, we ensure your property receives maximum visibility and attracts buyers who are ready to act.
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full text-xs md:text-sm font-medium text-orange-700 border border-orange-300">
                      Featured Listings
                    </span>
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full text-xs md:text-sm font-medium text-orange-700 border border-orange-300">
                      Social Media Ads
                    </span>
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full text-xs md:text-sm font-medium text-orange-700 border border-orange-300">
                      Email Campaigns
                    </span>
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full text-xs md:text-sm font-medium text-orange-700 border border-orange-300">
                      Virtual Tours
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Agent Support Tab */}
          <TabsContent value="agent" className="space-y-6">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 text-slate-900 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Users className="w-6 h-6 md:w-7 md:h-7" />
                  Dedicated Agent Support
                </CardTitle>
                <CardDescription className="text-slate-700">
                  Expert guidance through every step of the selling process
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4">What Our Agents Provide</h3>
                    <ul className="space-y-3">
                      {agentServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100 hover:border-blue-300 transition-all">
                          <div className="w-6 h-6 rounded-full bg-blue-400 text-white flex items-center justify-center flex-shrink-0 text-xs md:text-sm font-semibold mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-slate-700 text-xs md:text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 md:p-6 rounded-lg border-2 border-indigo-200">
                      <h4 className="font-semibold mb-3 text-indigo-900 text-base md:text-lg">Why Choose Our Agents?</h4>
                      <p className="text-slate-700 text-xs md:text-sm mb-4">
                        Our veteran agents bring years of experience and deep market knowledge to ensure your property sells quickly and at the best possible price.
                      </p>
                      <div className="grid grid-cols-2 gap-3 md:gap-4 text-center">
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-xl md:text-2xl font-bold text-indigo-600">15+</div>
                          <div className="text-xs text-slate-600">Years Experience</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-xl md:text-2xl font-bold text-indigo-600">500+</div>
                          <div className="text-xs text-slate-600">Properties Sold</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 md:p-6 rounded-lg border border-slate-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm md:text-base">
                        <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                        Dedicated Support
                      </h4>
                      <p className="text-xs md:text-sm text-slate-700">
                        From the initial consultation to closing the deal, your dedicated agent will be with you every step of the way, ensuring a smooth and professional experience.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-indigo-400 hover:bg-indigo-500 h-10 md:h-12 text-sm md:text-lg">
                  Connect with an Agent Today
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-slate-800 to-teal-800 text-white border-none shadow-2xl overflow-hidden">
          <CardContent className="p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Sell Your Property?</h2>
            <p className="text-blue-100 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base px-4">
              Let our professional team handle everything from photography to final sale. Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-900 hover:bg-teal-50 h-10 md:h-12 text-sm md:text-base">
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-gray-800 hover:bg-white/10 h-10 md:h-12 text-sm md:text-base">
                View Our Portfolio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
