'use client'
import React from 'react';
import Link from 'next/link';

const SellPropertyHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" opacity="0.3"/>
              <circle cx="30" cy="30" r="20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Home Icon 1 */}
        <div className="absolute top-20 left-10 opacity-5 animate-float">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        
        {/* Key Icon */}
        <div className="absolute top-40 right-20 opacity-5 animate-float-delayed">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
          </svg>
        </div>

        {/* Building Icon */}
        <div className="absolute bottom-20 left-1/4 opacity-5 animate-float">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
            <path d="M9 22v-4h6v4M8 6h.01M8 10h.01M8 14h.01M16 6h.01M16 10h.01M16 14h.01"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 px-6 py-2 rounded-full mb-6">
            <svg className="w-4 h-4 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-sm font-semibold text-white">Fast Real Estate - Property Selling</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sell Your Property with
            <span className="block text-teal-300">Confidence & Ease</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-teal-50 leading-relaxed max-w-3xl mx-auto">
            We simplify the property selling process to be easy, efficient, and profitable. 
            Whether you're selling a house, office building, investment parcel, or rental property, 
            we have all the solutions to promote your property and find serious buyers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="#sell-form"
              className="bg-white text-teal-900 hover:bg-teal-50 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 group"
            >
              List Your Property
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            <Link 
              href="#consultation"
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Schedule Consultation
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-300 mb-2">500+</div>
              <div className="text-sm text-teal-100">Properties Sold</div>
            </div>
            <div className="text-center border-x border-teal-600/30">
              <div className="text-3xl md:text-4xl font-bold text-teal-300 mb-2">98%</div>
              <div className="text-sm text-teal-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-300 mb-2">30+</div>
              <div className="text-sm text-teal-100">Expert Agents</div>
            </div>
          </div>
        </div>
      </div>
  <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SellPropertyHero;
