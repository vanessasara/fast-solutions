'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Smartphone, Lightbulb, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Featuredproperties } from '@/lib/data';

const FeaturedPropertySection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const currentProperty = Featuredproperties[currentSlide];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Featuredproperties.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Featuredproperties.length) % Featuredproperties.length);
    };

    const FeatureIcon = ({ type }: { type: string }) => {
        switch (type) {
            case 'pool':
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 19c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                    </svg>
                );
            case 'smartphone':
                return <Smartphone size={24} />;
            case 'lightbulb':
                return <Lightbulb size={24} />;
            default:
                return null;
        }
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Content - Shows first on mobile, second on desktop */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <span className="text-xs sm:text-sm font-semibold">Featured property</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                            {currentProperty.title}
                        </h2>

                        <div className="flex items-center gap-2 text-gray-500 mb-4 sm:mb-6">
                            <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
                            <span className="text-xs sm:text-sm">{currentProperty.address}</span>
                        </div>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                            {currentProperty.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                            {currentProperty.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <div className="scale-90 sm:scale-100">
                                            <FeatureIcon type={feature.icon} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{feature.title}</h4>
                                        <p className="text-xs sm:text-sm text-gray-500">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                            <Link href='/contact' className="bg-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-teal-600 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto">
                                Get in touch
                            </Link>
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{currentProperty.price}</p>
                                <p className="text-xs sm:text-sm text-gray-500">Discounted price</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Carousel - Shows second on mobile, first on desktop */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden">
                            <Image
                                fill
                                src={currentProperty.image}
                                alt={currentProperty.title}
                                className="object-cover"
                            />

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg z-10"
                            >
                                <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg z-10"
                            >
                                <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {Featuredproperties.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2 rounded-full transition-all ${
                                            currentSlide === index ? 'bg-white w-6 sm:w-8' : 'bg-white/50 w-2'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPropertySection
