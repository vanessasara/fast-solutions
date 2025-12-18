'use client'
import React, { useState } from 'react';
import { Home, Building, Palmtree, Crown, MapPin, Bed, Bath, Square, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


export default function RentalListings() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const propertyTypes = [
    {
      id: 'residential',
      icon: Home,
      title: 'Residential Rentals',
      description: 'Apartments, villas, townhouses, and standalone houses',
      subtitle: 'Perfect for families, professionals, and students',
      color: 'from-blue-100 to-cyan-100',
      iconBg: 'bg-blue-500',
      borderColor: 'border-blue-300',
      features: ['Apartments', 'Villas', 'Townhouses', 'Standalone Houses']
    },
    {
      id: 'commercial',
      icon: Building,
      title: 'Commercial Rentals',
      description: 'Office spaces, retail stores, and co-working centers',
      subtitle: 'Ideal for businesses of every size',
      color: 'from-purple-100 to-pink-100',
      iconBg: 'bg-purple-500',
      borderColor: 'border-purple-300',
      features: ['Office Spaces', 'Retail Stores', 'Co-working Centers', 'Business Hubs']
    },
    {
      id: 'vacation',
      icon: Palmtree,
      title: 'Vacation Rentals',
      description: 'Leisure and corporate vacation properties',
      subtitle: 'Short-term stays for travel and relaxation',
      color: 'from-green-100 to-emerald-100',
      iconBg: 'bg-green-500',
      borderColor: 'border-green-300',
      features: ['Beach Properties', 'Mountain Retreats', 'City Apartments', 'Resort Villas']
    },
    {
      id: 'luxury',
      icon: Crown,
      title: 'Luxury Rentals',
      description: 'High-end properties with state-of-the-art facilities',
      subtitle: 'Premium living experiences',
      color: 'from-amber-100 to-yellow-100',
      iconBg: 'bg-amber-500',
      borderColor: 'border-amber-300',
      features: ['Penthouse Suites', 'Luxury Villas', 'Premium Apartments', 'Executive Homes']
    }
  ];

  const sampleListings = [
    {
      id: 1,
      type: 'residential',
      title: 'Modern 3BR Apartment',
      location: 'Downtown District',
      price: '$2,500',
      beds: 3,
      baths: 2,
      area: '1,850',
      image: 'bg-gradient-to-br from-blue-200 to-blue-400'
    },
    {
      id: 2,
      type: 'commercial',
      title: 'Executive Office Space',
      location: 'Business Bay',
      price: '$4,000',
      beds: null,
      baths: 2,
      area: '2,500',
      image: 'bg-gradient-to-br from-purple-200 to-purple-400'
    },
    {
      id: 3,
      type: 'vacation',
      title: 'Beachfront Villa',
      location: 'Coastal Resort',
      price: '$500',
      beds: 4,
      baths: 3,
      area: '3,200',
      image: 'bg-gradient-to-br from-green-200 to-green-400'
    },
    {
      id: 4,
      type: 'luxury',
      title: 'Luxury Penthouse',
      location: 'Premium Heights',
      price: '$8,500',
      beds: 4,
      baths: 4,
      area: '4,500',
      image: 'bg-gradient-to-br from-amber-200 to-amber-400'
    }
  ];

  const listingFeatures = [
    { icon: MapPin, text: 'High-resolution photos of interiors and exteriors' },
    { icon: Home, text: 'Detailed descriptions including size and amenities' },
    { icon: Square, text: 'Rental prices, payment terms, and availability' },
    { icon: Bed, text: 'Virtual tours and interactive floor plans' }
  ];

  const filteredListings = selectedType === 'all' 
    ? sampleListings 
    : sampleListings.filter(listing => listing.type === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-8 md:py-12 px-4 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Rental Property Listings
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Discover quality rental properties for every lifestyle and business need. Browse our thoroughly verified listings in prime locations.
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 shadow-lg border-none">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search by location, property type, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-slate-300"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-6">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Property Types Grid */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
            Browse by Property Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`text-left p-6 rounded-xl bg-gradient-to-br ${type.color} border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedType === type.id 
                    ? `${type.borderColor} shadow-xl scale-105` 
                    : 'border-transparent shadow-md'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${type.iconBg} text-white mb-4`}>
                  <type.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{type.title}</h3>
                <p className="text-sm text-slate-700 mb-3">{type.description}</p>
                <p className="text-xs text-slate-600 italic">{type.subtitle}</p>
                {selectedType === type.id && (
                  <div className="mt-4 pt-4 border-t border-slate-300">
                    <div className="flex flex-wrap gap-2">
                      {type.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-white/70 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button
              variant="outline"
              onClick={() => setSelectedType('all')}
              className={`${selectedType === 'all' ? 'bg-slate-900 text-white' : ''}`}
            >
              View All Properties
            </Button>
          </div>
        </div>

        {/* Featured Listings */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            {selectedType === 'all' ? 'Featured Properties' : `${propertyTypes.find(t => t.id === selectedType)?.title || 'Properties'}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-none">
                <div className={`h-48 ${listing.image} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <Home className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-medium">Virtual Tour Available</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-slate-900">{listing.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-slate-200">
                    {listing.beds && (
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-700">{listing.beds}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-700">{listing.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-700">{listing.area} sqft</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{listing.price}</p>
                      <p className="text-xs text-slate-500">per month</p>
                    </div>
                    <Button size="sm" className="bg-slate-900 hover:bg-slate-800">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Listing Features */}
        <Card className="bg-gradient-to-br from-blue-300 to-pink-300 text-white border-none shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">
              What's Included in Our Listings
            </CardTitle>
            <CardDescription className="text-black text-center">
              Every property listing is thoroughly verified and includes comprehensive details
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800 md:text-base font-medium">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-800 mb-4">Ready to find your perfect rental property?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Browse All Listings
                </Button>
                <Button size="lg" variant="outline" className="border-white text-gray-800 hover:bg-white/10">
                  Schedule a Viewing
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
