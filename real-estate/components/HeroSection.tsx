'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Search } from "lucide-react";
import Image from 'next/image'

const images = [
    "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=2100&q=80",
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full overflow-hidden">
            {/* Carousel Image */}
            <div className="relative w-full h-[70vh] rounded-b-[40px] overflow-hidden shadow-xl">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image
                            src={image}
                            fill
                            priority
                            alt={`Hero Background ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                {/* Centered Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-white/90 text-sm tracking-wide mb-4">
                            Palm Springs, CA
                        </p>

                        <h1 className="text-white font-light text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
                            Greetings, welcome to Fast Real Estate Agency, your property partners.
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <Button
                                className="bg-white/95 text-gray-900 hover:bg-gray-200 shadow-md rounded-full px-10 py-6 text-sm"
                            >
                                Get in touch
                            </Button>

                            <Button
                                variant="outline"
                                className="border-white/50 text-gray-800 hover:bg-white/10 shadow-md rounded-full px-10 py-6 text-sm"
                            >
                                View Details
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Progress Dots */}
                <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all ${
                                i === current ? "w-16 bg-white" : "w-8 bg-white/40"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative z-20 flex justify-center -mt-10 px-6">
                <Card className="w-full max-w-5xl rounded-2xl shadow-2xl border bg-white/95 backdrop-blur-xl">
                    <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                        
                        {/* Location Input */}
                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-sm text-gray-600 mb-1">Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input
                                    className="pl-10 h-12 rounded-xl"
                                    placeholder="Enter a city or area"
                                />
                            </div>
                        </div>

                        {/* Date Input */}
                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-sm text-gray-600 mb-1">Move-in Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input
                                    type="date"
                                    className="pl-10 h-12 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="flex flex-col justify-end w-full md:w-1/3">
                            <Button className="h-12 rounded-xl bg-[#009689] hover:bg-[#007a6f] text-white flex items-center gap-2">
                                <Search size={18} />
                                Search Properties
                            </Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default HeroSection;
