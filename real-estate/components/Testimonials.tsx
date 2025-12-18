'use client';
import {useState} from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/data';

const TestimonialsSection= () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const currentTest = testimonials[currentTestimonial];
  
    const nextTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
  
    return (
      <section id='testimonials' className="py-20 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Decorative curved line */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] border-2 border-teal-500/10 rounded-full translate-x-1/3 -translate-y-1/2"></div>
  
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-sm font-semibold">Testimonials</span>
              </div>
  
              <h2 className="text-5xl font-bold text-white mb-12">
                What our clients says
              </h2>
  
              <div className="relative">
                {/* House Icon */}
                <div className="absolute -left-4 top-0">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-500/20">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
  
                {/* Testimonial Text */}
                <p className="text-white text-xl leading-relaxed mb-8 pl-12">
                  {currentTest.quote}
                </p>
  
                {/* Author Info */}
                <div className="pl-12">
                  <p className="text-white font-semibold text-lg">{currentTest.name}</p>
                  <p className="text-gray-400 text-sm">{currentTest.role}</p>
                </div>
              </div>
            </div>
  
            {/* Right - Image with Navigation */}
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="absolute -top-16 right-0 flex gap-4 z-20">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
  
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
  
              {/* Image */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  fill
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default TestimonialsSection;
