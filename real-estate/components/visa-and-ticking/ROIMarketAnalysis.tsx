import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { BarChart3, TrendingUp, Target, FileText, CheckCircle2, DollarSign, MapPin, Building2, LineChart, PieChart, Users, Mail, Phone, Calendar, MessageSquare, Briefcase } from 'lucide-react';

export default function ROIMarketAnalysis() {
  const services = [
    {
      icon: BarChart3,
      title: "In-Depth Market Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description: "Comprehensive analysis of property prices, rentals and buyer behavior",
      features: [
        "Current market trends and pricing analysis",
        "Rental yield and property appreciation forecasts",
        "Buyer and tenant behavior patterns",
        "Supply and demand dynamics in target areas",
        "Seasonal fluctuations and timing recommendations"
      ],
      gradient: "from-[#009689] to-teal-600"
    },
    {
      icon: Target,
      title: "Comparative Market Research",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description: "Identify lucrative areas and compare investment opportunities",
      features: [
        "Side-by-side comparison of similar properties",
        "Neighborhood and area performance metrics",
        "Growth potential and development indicators",
        "Risk assessment across different locations",
        "Competitive advantage identification"
      ],
      gradient: "from-teal-600 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "ROI Projections & Forecasting",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80",
      description: "Short and long-term planning with trend analysis",
      features: [
        "5, 10, and 20-year investment projections",
        "Cash flow analysis and break-even calculations",
        "Tax implications and expense forecasting",
        "Multiple scenario modeling (best/worst case)",
        "Exit strategy recommendations"
      ],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: FileText,
      title: "Custom Investment Reports",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
      description: "Tailored reports for investors, developers and corporate clients",
      features: [
        "Detailed property analysis and due diligence",
        "Portfolio optimization strategies",
        "Market entry and expansion recommendations",
        "Risk mitigation strategies",
        "Executive summaries for stakeholder presentations"
      ],
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Maximize Returns",
      description: "Data-driven insights to identify high-yield investment opportunities"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Make informed decisions backed by comprehensive market intelligence"
    },
    {
      icon: LineChart,
      title: "Future-Proof",
      description: "Trend forecasting helps you stay ahead of market changes"
    },
    {
      icon: Briefcase,
      title: "Professional Grade",
      description: "Institutional-quality reports for serious investors and developers"
    }
  ];

  const reportTypes = [
    {
      icon: Building2,
      title: "Property Investment Report",
      description: "Complete analysis for individual property purchases",
      includes: ["Property valuation", "ROI calculations", "Market positioning", "Risk assessment"]
    },
    {
      icon: PieChart,
      title: "Portfolio Analysis",
      description: "Comprehensive review of multiple property holdings",
      includes: ["Portfolio performance", "Diversification analysis", "Rebalancing recommendations", "Tax optimization"]
    },
    {
      icon: MapPin,
      title: "Market Entry Strategy",
      description: "Regional analysis for new market expansion",
      includes: ["Market overview", "Competition analysis", "Entry barriers", "Growth opportunities"]
    },
    {
      icon: Users,
      title: "Development Feasibility",
      description: "Detailed studies for real estate development projects",
      includes: ["Demand analysis", "Financial modeling", "Timeline projections", "Risk factors"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Requirements",
      description: "Understand your investment goals, timeline, and risk tolerance",
      icon: Users
    },
    {
      step: "02",
      title: "Data Collection & Analysis",
      description: "Gather market data, property information, and economic indicators",
      icon: BarChart3
    },
    {
      step: "03",
      title: "Report Generation",
      description: "Create comprehensive analysis with projections and recommendations",
      icon: FileText
    },
    {
      step: "04",
      title: "Presentation & Strategy",
      description: "Review findings and develop actionable investment strategy",
      icon: TrendingUp
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
              <BarChart3 className="w-4 h-4 mr-2 inline" />
              Data-Driven Intelligence
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ROI & Market Analysis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50 leading-relaxed max-w-3xl mx-auto">
              Understanding market dynamics is essential for making proper decisions. Fast Real Estate provides detailed ROI and market analysis reports to inform investment, sales and business strategy
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Analysis Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional market intelligence and ROI analysis for informed investment decisions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <div className="relative h-72 overflow-hidden">
                <Image
                fill
                  src={service.image}
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

      {/* Report Types */}
      <div className="bg-gradient-to-br from-teal-50/50 via-white to-emerald-50/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tailored Report Types</h2>
              <p className="text-lg text-gray-600">Customized analysis for investors, developers, and corporate clients</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportTypes.map((report, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#009689] to-teal-600 rounded-2xl flex items-center justify-center mb-4">
                      <report.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{report.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{report.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Includes:</p>
                      {report.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#009689]"></div>
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Analysis Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to deliver actionable market intelligence
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

      {/* Key Features Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#009689] to-teal-600 p-1">
              <div className="bg-white p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#009689] to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Why Our Analysis Makes a Difference
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#009689] to-teal-500 mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Make sound decisions backed by data and market intelligence",
                    "Maximize returns through strategic investment planning",
                    "Identify high-potential areas before market saturation",
                    "Understand risk factors and mitigation strategies",
                    "Short and long-term forecasting for better planning",
                    "Comparative analysis to identify best opportunities",
                    "Professional-grade reports for stakeholder presentations",
                    "Ongoing market monitoring and strategy adjustments"
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

      {/* Request Analysis Form */}
      <div className="container mx-auto px-4 py-20 bg-gradient-to-br from-teal-50/50 to-emerald-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Request Analysis Report</h2>
            <p className="text-lg text-gray-600">
              Get started with professional market analysis and ROI projections
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input className="pl-10 h-12 rounded-xl" placeholder="Enter your name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input type="email" className="pl-10 h-12 rounded-xl" placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input type="tel" className="pl-10 h-12 rounded-xl" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Report Type *
                  </label>
                  <select className="w-full h-12 rounded-xl border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-[#009689]">
                    <option>Property Investment Report</option>
                    <option>Portfolio Analysis</option>
                    <option>Market Entry Strategy</option>
                    <option>Development Feasibility</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input className="pl-10 h-12 rounded-xl" placeholder="City, State or Region" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Budget
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input className="pl-10 h-12 rounded-xl" placeholder="Budget range" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Analysis Requirements *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                    <Textarea 
                      className="pl-10 rounded-xl resize-none" 
                      rows={4}
                      placeholder="Describe your investment goals, timeline, and specific analysis requirements..."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" className="bg-[#009689] hover:bg-[#007a6f] text-white px-12 h-12 rounded-xl">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Request Analysis Report
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Our analysts will contact you within 48 hours to discuss your requirements
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
