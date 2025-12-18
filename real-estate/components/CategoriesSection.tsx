import Image from 'next/image';
import Link from 'next/link';

const CategoriesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gray-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] border-2 border-gray-100 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm font-semibold">Categories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Explore best properties<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>with expert services.
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Discover a diverse range of premium properties, from luxurious apartments<br className="hidden lg:block" />
              <span className="lg:hidden"> </span>to spacious villas, tailored to your needs.
            </p>
            <Link href="/properties" className="inline-block bg-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-teal-600 transition-colors shadow-lg text-sm sm:text-base">
              View properties
            </Link>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative h-64 sm:h-80 lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              fill
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=90"
              alt="Modern villas"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Luxury Villas Card */}
          <Link href="/properties/mountain-retreat-villa" className="block">
            <div className="relative h-72 sm:h-80 lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer">
              <Image
                fill
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=90"
                alt="Luxury villas"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent sm:from-black/40 sm:via-black/10 sm:to-transparent sm:group-hover:from-black/70 sm:group-hover:via-black/30 transition-all duration-300"></div>

              <button className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Luxury villas</h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Experience elegance and comfort with our exclusive luxury villas, designed for sophisticated living.
                </p>
              </div>
            </div>
          </Link>

          {/* Apartments Card */}
          <Link href="/properties/grand-vista-villas" className="block">
            <div className="relative h-72 sm:h-80 lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer">
              <Image
                fill
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=90"
                alt="Apartments"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent sm:from-black/40 sm:via-black/10 sm:to-transparent sm:group-hover:from-black/70 sm:group-hover:via-black/30 transition-all duration-300"></div>

              <button className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Apartments</h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Modern apartments in prime locations, perfect for urban living with style and convenience.
                </p>
              </div>
            </div>
          </Link>

          {/* Office Spaces Card */}
          <Link href="/properties/elite-crest-villas" className="block">
            <div className="relative h-72 sm:h-80 lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer sm:col-span-2 lg:col-span-1">
              <Image
                fill
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=90"
                alt="Office spaces"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent sm:from-black/40 sm:via-black/10 sm:to-transparent sm:group-hover:from-black/70 sm:group-hover:via-black/30 transition-all duration-300"></div>

              <button className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Office spaces</h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Professional office spaces designed to boost productivity and inspire success in your business.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
