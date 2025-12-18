import Image from 'next/image';
import { Bed, Bath } from 'lucide-react';
import Link from 'next/link';
import { propertiesSection } from '@/lib/data';

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <span className="text-xs sm:text-sm font-semibold">Properties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Discover inspiring designed homes.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 px-4">
            Curated homes where elegance, style, and comfort unite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {propertiesSection.map((property) => (
            <Link 
              key={property.id} 
              href={`/properties/${property.slug}`}
              className="block"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Property Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden group cursor-pointer">
                  <Image
                    fill
                    src={property.image}
                    alt={property.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 truncate">
                        {property.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">
                        {property.address}
                      </p>
                    </div>
                    <span className="bg-teal-50 text-teal-600 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap flex-shrink-0">
                      {property.price}
                    </span>
                  </div>

                  {/* Property Features */}
                  <div className="flex items-center justify-between mt-4 sm:mt-5 lg:mt-6 pt-4 sm:pt-5 lg:pt-6 border-t border-gray-100">
                    <div className="flex flex-col items-center gap-1">
                      <Bed size={16} className="sm:w-[18px] sm:h-[18px] text-gray-400" />
                      <span className="text-xs text-gray-700 font-medium">
                        {property.bedrooms} Bedrooms
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Bath size={16} className="sm:w-[18px] sm:h-[18px] text-gray-400" />
                      <span className="text-xs text-gray-700 font-medium">
                        {property.bathrooms} Bathrooms
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" className="text-gray-400" />
                      </svg>
                      <span className="text-xs text-gray-700 font-medium">
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
    </section>
  );
};

export default PropertiesSection;
