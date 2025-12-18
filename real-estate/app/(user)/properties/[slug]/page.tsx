import Image from 'next/image';
import { Bed, Bath, Home, MapPin } from 'lucide-react';
import { propertiesData } from '@/lib/data';

interface PropertySlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const PropertySlugPage = async ({ params }: PropertySlugPageProps) => {
  const { slug } = await params;
  
  const propertyDetails = propertiesData.find(
    (property) => property.slug === slug
  );

  if (!propertyDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Badge and Title Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm font-semibold">Featured property</span>
            </div>
            
            {/* Category Tag */}
            <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${
              propertyDetails.category === 'sale' 
                ? 'bg-teal-500' 
                : 'bg-orange-500'
            }`}>
              For {propertyDetails.category.charAt(0).toUpperCase() + propertyDetails.category.slice(1)}
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 capitalize">
            {propertyDetails.title}
          </h1>
          
          <div className="flex items-center gap-2 text-gray-600 mb-6">
            <MapPin size={18} />
            <span className="text-sm capitalize">{propertyDetails.address}</span>
          </div>

          {/* Property Stats */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Bed size={20} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-700">{propertyDetails.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath size={20} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-700">{propertyDetails.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Home size={20} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-700">{propertyDetails.area}</span>
            </div>
          </div>
        </div>

        {/* Rest of your existing code remains the same... */}
        {/* Full Width Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[920px_1fr] gap-4">
            <div className="rounded-2xl overflow-hidden h-[540px] relative">
              <Image
                fill
                src={propertyDetails.mainImage} 
                alt={propertyDetails.title}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden h-[300px] relative">
                <Image
                  fill
                  src={propertyDetails.gallery[0] || propertyDetails.mainImage} 
                  alt="Gallery 1"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden h-[200px] relative">
                  <Image
                    fill
                    src={propertyDetails.gallery[1] || propertyDetails.mainImage} 
                    alt="Gallery 2"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-[200px] relative">
                  <Image
                    fill
                    src={propertyDetails.gallery[2] || propertyDetails.mainImage} 
                    alt="Gallery 3"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout - Content and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Property Details (2/3 width) */}
          <div className="lg:col-span-2">
            
            {/* Property Details Section */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property details</h2>
              
              {/* Feature List */}
              <div className="space-y-6 mb-8">
                {propertyDetails.features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                {propertyDetails.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* What This Property Offers */}
            <div className="bg-white rounded-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What this property offers</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {propertyDetails.offers.map((offer, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-gray-400">{offer.icon}</span>
                    <span className="text-sm text-gray-700">{offer.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <div className="bg-teal-50 rounded-2xl p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {propertyDetails.price}
                  </div>
                  <div className="text-sm text-gray-600">{propertyDetails.discountedPrice}</div>
                </div>

                <button className="w-full bg-teal-500 text-white px-6 py-4 rounded-full font-semibold hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl">
                  Get in touch
                </button>
              </div>

              {/* Testimonial Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                    <Home size={24} className="text-teal-500" />
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  {propertyDetails.testimonial.text}
                </p>

                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      fill
                      src={propertyDetails.testimonial.avatar}
                      alt={propertyDetails.testimonial.author}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {propertyDetails.testimonial.author}
                    </div>
                    <div className="text-xs text-gray-500">
                      {propertyDetails.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertySlugPage;
