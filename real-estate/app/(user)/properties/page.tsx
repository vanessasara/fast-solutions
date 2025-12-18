import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Home } from 'lucide-react';
import { properties } from '@/lib/data';
import HeroSection from '@/components/HeroSection';

const PropertiesPage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Spacing */}
        <HeroSection/>
     

      {/* Hero Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <span className="text-sm font-semibold">Properties</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Luxury villas
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience elegance and comfort with our exclusive luxury villas, designed for sophisticated living.
          </p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link 
              key={property.id} 
              href={`/properties/${property.slug}`}
              className="block group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Property Image with Category Tag */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    fill
                    src={property.image}
                    alt={property.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg ${
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
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 capitalize">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-500 capitalize">
                      {property.address}
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-teal-600">
                      {property.price}
                    </span>
                  </div>

                  {/* Property Features */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Bed size={18} className="text-gray-400" />
                      <span className="text-sm text-gray-700 font-medium">
                        {property.bedrooms}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath size={18} className="text-gray-400" />
                      <span className="text-sm text-gray-700 font-medium">
                        {property.bathrooms}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Home size={18} className="text-gray-400" />
                      <span className="text-sm text-gray-700 font-medium">
                        {property.area}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
