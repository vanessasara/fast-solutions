'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Images - Order 1 on mobile */}
          <div className="order-1 lg:order-1 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="relative w-full h-[180px] sm:h-[250px] lg:h-[300px]">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90"
                  alt="Modern exterior"
                  className="object-cover rounded-2xl sm:rounded-3xl"
                />
              </div>
              <div className="relative w-full h-[180px] sm:h-[250px] lg:h-[300px]">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=90"
                  alt="Modern living room"
                  className="object-cover rounded-2xl sm:rounded-3xl"
                />
              </div>
            </div>
            <div className="pt-6 sm:pt-8">
              <div className="relative w-full h-[370px] sm:h-[510px] lg:h-[400px]">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=90"
                  alt="Modern dining"
                  className="object-cover rounded-2xl sm:rounded-3xl"
                />
              </div>
            </div>
          </div>

          {/* FAQs - Order 2 on mobile */}
          <div className="order-2 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-semibold">FAQs</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Everything about Fast Solution
            </h2>

            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-relaxed">
              We know that buying, selling, or investing in real estate can be overwhelming. Here are some frequently asked questions to help guide you through the process.
            </p>

            {/* Accordion */}
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-5 sm:py-6 text-left hover:text-teal-600 transition-colors group"
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-teal-600 pr-4">
                      {index + 1}. {faq.question}
                    </span>
                    <ChevronDown
                      className={`flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-5 sm:pb-6' : 'max-h-0'
                      }`}
                  >
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-gray-500 mt-6 sm:mt-8 leading-relaxed">
              Discover a diverse range of premium properties, from luxurious apartments to spacious villas, tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection
