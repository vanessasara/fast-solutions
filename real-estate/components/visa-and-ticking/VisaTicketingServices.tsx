import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Plane, Globe, Clock, RefreshCw, Tag, CheckCircle2, MapPin, Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function VisaTicketingServices() {
  const services = [
    {
      icon: Globe,
      title: "International & Domestic Flight Booking",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      description: "Seamless flight reservations made easy with our expert ticketing services",
      features: [
        "Connections to major destinations worldwide including Europe, North America, Asia, and Middle East",
        "Collaboration with major airlines for reasonable prices and quality services",
        "Travel document assistance, visa advice, and travel insurance",
        "All major airports and cities covered domestically",
        "Economy, business, and first-class flexibility"
      ]
    },
    {
      icon: Clock,
      title: "Last-Minute Booking Services",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
      description: "Quick solutions for urgent travel needs with instant confirmation",
      features: [
        "Quick browsing and reservation of flights",
        "Travel assistance for business or personal emergencies",
        "Live information about seat allocation and schedules",
        "Special rates for last-minute bookings where applicable",
        "Fast and certain booking process without losing comfort"
      ]
    },
    {
      icon: RefreshCw,
      title: "Ticket Change & Refund Support",
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80",
      description: "Flexible solutions for travel plan modifications and cancellations",
      features: [
        "Help in re-booking flights for emergencies or plan alterations",
        "Information about refund policies and cancellation procedures",
        "Documentation and approval assistance for trouble-free transactions",
        "Communication with airlines to reduce fines and increase refunds",
        "Professional handling of all change requests"
      ]
    },
    {
      icon: Tag,
      title: "Preferred Airline Deals",
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
      description: "Exclusive partnerships bringing you the best rates and benefits",
      features: [
        "Fair fares and discounts on domestic and international flights",
        "Premium seating, loyalty points and reward programs",
        "Travel deals and seasonal bonuses on future travel",
        "Priority reservation facilities for loyal customers",
        "Maximum value on each booking with high service delivery"
      ]
    }
  ];

  const travelTypes = [
    { icon: Plane, title: "Business Travel", desc: "Efficient booking for corporate trips" },
    { icon: Globe, title: "Family Tours", desc: "Perfect arrangements for family vacations" },
    { icon: MapPin, title: "Educational Travel", desc: "Student and academic travel support" },
    { icon: Calendar, title: "Recreational Trips", desc: "Leisure and holiday bookings" }
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
              <Plane className="w-4 h-4 mr-2 inline" />
              Travel Made Easy
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Visa Services & Ticketing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50 leading-relaxed max-w-3xl mx-auto">
              One-stop shopping travel solutions for business, education, or recreation. Professional team ensuring pleasant, easy, and relaxing trips with end-to-end travel services.
            </p>
          </div>
        </div>
      </div>

      {/* Travel Types Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {travelTypes.map((type, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50/30">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#009689] to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Ticketing Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional flight booking, changes, refunds, and exclusive airline deals
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
                  <div className="w-16 h-16 bg-gradient-to-br from-[#009689]/90 to-teal-600/90 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm transform group-hover:rotate-12 transition-transform duration-300">
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

      {/* Travel Consultancy Section */}
      <div className="bg-gradient-to-br from-teal-50/50 via-white to-emerald-50/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#009689] to-teal-600 p-1">
                <div className="bg-white p-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#009689] to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Travel Consultancy
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#009689] to-teal-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Expert advice on flight arrangements, visa applications, and travel arrangements for international and domestic travel
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Client guided and destination based travel planning",
                      "Airline choice, ticketing, and preferred offers",
                      "Consultation on visa types and document preparation",
                      "Risk management advisory and travel insurance",
                      "Hassle-free travels with maximum convenience",
                      "Cost-effective solutions and expert recommendations"
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

      {/* Contact Booking Agent Form */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Travel</h2>
            <p className="text-lg text-gray-600">
              Connect with our professional agents for personalized travel services
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
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
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
                    Travel Type *
                  </label>
                  <select className="w-full h-12 rounded-xl border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-[#009689]">
                    <option>Domestic Flight</option>
                    <option>International Flight</option>
                    <option>Business Travel</option>
                    <option>Family Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departure Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input className="pl-10 h-12 rounded-xl" placeholder="From" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input className="pl-10 h-12 rounded-xl" placeholder="To" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departure Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input type="date" className="pl-10 h-12 rounded-xl" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class Preference *
                  </label>
                  <select className="w-full h-12 rounded-xl border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-[#009689]">
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                    <Textarea 
                      className="pl-10 rounded-xl resize-none" 
                      rows={4}
                      placeholder="Seating preferences, meal requirements, or any special needs..."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" className="bg-[#009689] hover:bg-[#007a6f] text-white px-12 h-12 rounded-xl">
                  <Plane className="w-5 h-5 mr-2" />
                  Submit Booking Request
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Our agents will contact you within 24 hours to confirm your booking
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      
    </div>
  );
}
