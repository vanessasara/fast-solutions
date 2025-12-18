'use client';

import { useState } from 'react';
import Image from 'next/image';

// Sample properties data with categories
const properties = [
    {
        id: 1,
        slug: "serenity-height-villas",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90",
        title: "Serenity height villas",
        address: "15 S aurora ave, miami",
        price: "PKR 158,670,000",
        category: "sale",
        bedrooms: 4,
        bathrooms: 3,
        area: "120m²"
    },
    {
        id: 2,
        slug: "mountain-retreat-villa",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=90",
        title: "Mountain retreat villa",
        address: "18 S aurora ave, miami",
        price: "PKR 160,062,500",
        category: "rent",
        bedrooms: 5,
        bathrooms: 2,
        area: "160m²"
    },
    {
        id: 3,
        slug: "modern-luxe-villa",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=90",
        title: "Modern luxe villa",
        address: "20 S aurora ave, miami",
        price: "PKR 189,280,000",
        category: "sale",
        bedrooms: 3,
        bathrooms: 4,
        area: "180m²"
    },
    {
        id: 4,
        slug: "royal-orchid-villas",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=90",
        title: "Royal orchid villas",
        address: "12 emerald heights, los angeles",
        price: "PKR 192,060,000",
        category: "sale",
        bedrooms: 6,
        bathrooms: 3,
        area: "200m²"
    },
    {
        id: 5,
        slug: "grand-vista-villas",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=90",
        title: "Grand vista villas",
        address: "25 skyline boulevard, san diego",
        price: "PKR 197,630,000",
        category: "rent",
        bedrooms: 2,
        bathrooms: 1,
        area: "90m²"
    },
    {
        id: 6,
        slug: "imperial-pearl-villas",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=90",
        title: "Imperial pearl villas",
        address: "18 sapphire bay road, naples",
        price: "PKR 175,410,000",
        category: "sale",
        bedrooms: 4,
        bathrooms: 2,
        area: "130m²"
    }
];

const categories = [
  { id: 'residential', name: 'Residential Properties', description: 'Independent homes, townhouses, villas, and apartments designed for families.' },
  { id: 'commercial', name: 'Commercial Properties', description: 'Offices, retail outlets, warehouses, and business complexes in strategic locations.' },
  { id: 'plots', name: 'Plots & Land', description: 'Residential and commercial development land for building your vision.' },
  { id: 'rental', name: 'Rental Properties', description: 'Apartments, villas, and commercial spaces available for lease.' }
];

export default function PropertyCategoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, properties.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, properties.length - 2)) % Math.max(1, properties.length - 2));
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Property Categories</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Tailored solutions for every real estate need</p>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{category.name}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Properties Carousel */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold text-slate-800">Featured Properties</h3>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:bg-teal-50"
                aria-label="Previous"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:bg-teal-50"
                aria-label="Next"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {properties.map((property) => (
                <div key={property.id} className="w-full md:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    {/* Property Image with Category Tag */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Category Tag */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${
                          property.category === 'sale' 
                            ? 'bg-teal-500' 
                            : 'bg-orange-500'
                        }`}>
                          For {property.category.charAt(0).toUpperCase() + property.category.slice(1)}
                        </span>
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 capitalize">
                        {property.title}
                      </h4>
                      <p className="text-sm text-gray-500 mb-4 capitalize">
                        {property.address}
                      </p>
                      <div className="text-2xl font-bold text-teal-600 mb-4">
                        {property.price}
                      </div>
                      
                      {/* Property Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600">
                        <span>{property.bedrooms} Beds</span>
                        <span>{property.bathrooms} Baths</span>
                        <span>{property.area}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.max(1, properties.length - 2) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-teal-500 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
