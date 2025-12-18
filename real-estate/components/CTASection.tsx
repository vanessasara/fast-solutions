'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTASection = () => {
    return (
      <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="relative h-[500px] sm:h-[550px] lg:h-[500px]">
              <Image
                fill
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=90"
                alt="Modern interior"
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
  
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-4xl leading-tight">
                Enter a realm where exquisite design and timeless luxury come together.
              </h2>
              <Link href='/contact' className="bg-white text-gray-900 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base">
                Get in touch
              </Link>
            </div>
  
            {/* Bottom Ticker */}
            <div className="absolute bottom-0 left-0 right-0 bg-teal-500 overflow-hidden">
              <div className="flex animate-scroll">
                <div className="flex whitespace-nowrap py-3 sm:py-4">
                  {[...Array(5)].map((_, i) => (
                    <React.Fragment key={i}>
                      <span className="text-white font-semibold text-xs sm:text-sm mx-4 sm:mx-8">
                        BROWSE THOUSANDS OF LISTINGS IN PRIME LOCATIONS
                      </span>
                      <span className="text-white font-semibold text-xs sm:text-sm mx-4 sm:mx-8">—</span>
                      <span className="text-white font-semibold text-xs sm:text-sm mx-4 sm:mx-8">
                        GET A FREE PROPERTY VALUATION
                      </span>
                      <span className="text-white font-semibold text-xs sm:text-sm mx-4 sm:mx-8">—</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </section>
    );
  };

export default CTASection;
