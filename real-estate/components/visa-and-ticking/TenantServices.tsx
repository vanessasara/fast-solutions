import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Search, Video, FileText, Wrench, CreditCard, Home, CheckCircle2, Sparkles, Shield, Clock, Star } from 'lucide-react';

export default function TenantServices() {
    const services = [
        {
            icon: Search,
            title: "Property Search Assistance",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
            description: "Special attention to help tenants find the appropriate property",
            features: [
                "Personalized property matching based on lifestyle and budget",
                "Access to extensive database of available rentals",
                "Professional guidance throughout the search process",
                "Expert recommendations for neighborhoods and areas",
                "Filtering by preferences: location, size, amenities, price range"
            ],
            gradient: "from-[#009689] to-teal-600"
        },
        {
            icon: Video,
            title: "Virtual Tours & Bookings",
            image: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=800&q=80",
            description: "Remote property tours and convenient appointment scheduling",
            features: [
                "High-quality virtual tours available 24/7",
                "360-degree property walkthroughs from anywhere",
                "Easy online booking for in-person viewings",
                "Flexible scheduling to match your availability",
                "Detailed property information and floor plans"
            ],
            gradient: "from-teal-600 to-cyan-600"
        },
        {
            icon: FileText,
            title: "Lease Agreements & Documentation",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
            description: "Legal assistance in drafting, reviewing and signing lease agreements",
            features: [
                "Professional lease agreement drafting and review",
                "Clear explanation of terms and conditions",
                "Legal compliance verification for tenant protection",
                "Digital signing for convenience and security",
                "Documentation storage and management support"
            ],
            gradient: "from-emerald-600 to-teal-600"
        },
        {
            icon: Wrench,
            title: "Maintenance & Repairs Coordination",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
            description: "Assistance in reporting and resolving property issues during tenancy",
            features: [
                "24/7 maintenance request submission system",
                "Quick response times for urgent repairs",
                "Coordination with qualified service professionals",
                "Progress tracking and issue resolution updates",
                "Quality assurance on all repair work completed"
            ],
            gradient: "from-cyan-600 to-blue-600"
        },
        {
            icon: CreditCard,
            title: "Payment Support",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
            description: "Guidance on rent payments, deposits and security agreements",
            features: [
                "Multiple secure payment methods available",
                "Automatic payment scheduling options",
                "Clear breakdown of deposits and security requirements",
                "Payment receipt generation and record keeping",
                "Financial assistance program information"
            ],
            gradient: "from-blue-600 to-indigo-600"
        }
    ];

    const benefits = [
        {
            icon: Home,
            title: "Perfect Match",
            description: "Find a home that suits your lifestyle, budget, and preferences"
        },
        {
            icon: Shield,
            title: "Protected Rights",
            description: "Legal support ensuring your rights as a tenant are protected"
        },
        {
            icon: Clock,
            title: "Time-Saving",
            description: "Streamlined process from search to move-in with expert guidance"
        },
        {
            icon: Star,
            title: "Quality Service",
            description: "Professional assistance throughout your entire rental journey"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Search & Discover",
            description: "Browse properties or work with our team to find your ideal rental",
            icon: Search
        },
        {
            step: "02",
            title: "Virtual or In-Person Tour",
            description: "Explore properties through virtual tours or schedule viewings",
            icon: Video
        },
        {
            step: "03",
            title: "Application & Documentation",
            description: "Complete your application and review lease agreements with support",
            icon: FileText
        },
        {
            step: "04",
            title: "Move-In & Ongoing Support",
            description: "Settle into your new home with continued maintenance assistance",
            icon: Home
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
                            <Home className="w-4 h-4 mr-2 inline" />
                            For Tenants
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Tenant Services
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-teal-50 leading-relaxed max-w-3xl mx-auto">
                            At Fast Real Estate, we value tenant satisfaction and offer an array of services to provide a flawless renting experience from search to move-in and beyond
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
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Tenant Support</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need for a seamless rental experience, all in one place
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

            {/* Process Steps */}
            <div className="bg-gradient-to-br from-teal-50/50 via-white to-emerald-50/50 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Rental Journey</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                A simple, straightforward process with professional support at every step
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
            </div>

            {/* Why Choose Us Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    <Card className="border-0 shadow-2xl overflow-hidden">
                        <div className="bg-gradient-to-r from-[#009689] to-teal-600 p-1">
                            <div className="bg-white p-10">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#009689] to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Sparkles className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Why Tenants Choose Fast Real Estate
                                    </h2>
                                    <div className="w-24 h-1 bg-gradient-to-r from-[#009689] to-teal-500 mx-auto rounded-full mb-6"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "Find homes that perfectly match your lifestyle and budget",
                                        "Access to extensive property database with verified listings",
                                        "Professional guidance throughout the entire rental process",
                                        "Legal support ensuring fair lease agreements and tenant rights",
                                        "24/7 maintenance support for quick issue resolution",
                                        "Multiple secure payment options for your convenience",
                                        "Transparent communication and dedicated tenant support",
                                        "Ongoing assistance even after you've moved in"
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
