import { achievements } from '@/lib/data';
import { teamMembers } from "@/lib/data";
import Image from 'next/image';
import { coreValues } from '@/lib/data'
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { whyChooseUs } from '@/lib/data';
import { Phone, Mail, MapPin, Users, Target, Heart, CheckCircle, ArrowRight } from 'lucide-react';
export default function AboutUsPage() {


    return (
        <div className="min-h-screen ">
            {/* Hero Section with Background Image */}
            <section className="relative h-[600px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop"
                        alt="Luxury Real Estate"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            About Fast Real Estate
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                            A leading real estate business focused on delivering outstanding property solutions with trust, transparency, and professionalism.
                        </p>
                        <Link href='/properties' >
                            <button className="px-8 py-4 bg-[#00BBA7] text-white font-semibold rounded-lg hover:bg-[#009688] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
                                Explore Our Properties
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Stats Section */}
            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">5000+</div>
                            <div className="text-gray-800/90 text-sm md:text-base">Properties Sold</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">98%</div>
                            <div className="text-gray-800/90 text-sm md:text-base">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">15+</div>
                            <div className="text-gray-800/90 text-sm md:text-base">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">50+</div>
                            <div className="text-gray-800/90 text-sm md:text-base">Expert Agents</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section with Image */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                We believe in delivering high-quality, customer-oriented real estate services that integrate professionalism, technological innovation, and personalized care.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#00BBA7] flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-gray-700">Support clients to locate, invest in, and resell properties effectively</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#00BBA7] flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-gray-700">Provide clear, sincere, and trustworthy recommendations</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#00BBA7] flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-gray-700">Streamline decisions using cutting-edge tools and data insights</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#00BBA7] flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-gray-700">Build long-term partnerships based on trust and satisfaction</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative">
                                <div className="relative w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                                        alt="Team Meeting"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-[#00BBA7] p-8 rounded-xl shadow-xl max-w-xs">
                                    <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        Transform real estate by making property transactions accessible and rewarding for everyone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}

            <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience the difference of working with a trusted partner committed to your success
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 bg-[#00BBA7]/10 rounded-xl flex items-center justify-center mb-6">
                                        <item.icon className="w-8 h-8 text-[#00BBA7]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            {/* Image Gallery Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Workspace</h2>
                        <p className="text-xl text-gray-600">Modern facilities designed for excellence</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 h-96 rounded-2xl overflow-hidden shadow-xl relative">
                            <Image
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
                                alt="Modern Office"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="h-96 rounded-2xl overflow-hidden shadow-xl relative">
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop"
                                alt="Team Collaboration"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="h-96 rounded-2xl overflow-hidden shadow-xl relative">
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=800&fit=crop"
                                alt="Office Space"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="md:col-span-2 h-96 rounded-2xl overflow-hidden shadow-xl relative">
                            <Image
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop"
                                alt="Professional Team"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}

            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide our decisions, relationships, and approach to real estate
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#00BBA7] to-[#009688] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Team Section with Photos */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experienced professionals dedicated to delivering excellence in every transaction
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 h-80">
                                    <Image
                                        src={member.image}
                                        alt={member.role}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.role}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                    {/* Workspace */}

                    <section className="py-20 px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Workspace</h2>
                                <p className="text-xl text-gray-600">Modern facilities designed for excellence</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="md:col-span-2 h-96 rounded-2xl overflow-hidden shadow-xl relative group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
                                        alt="Modern Office"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Open & Collaborative Spaces</h3>
                                            <p className="text-gray-200">Designed to foster creativity and teamwork in a modern environment</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-96 rounded-2xl overflow-hidden shadow-xl relative group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop"
                                        alt="Team Collaboration"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Innovation Hub</h3>
                                            <p className="text-gray-200 text-sm">Where ideas come to life through collaboration</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-96 rounded-2xl overflow-hidden shadow-xl relative group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=800&fit=crop"
                                        alt="Office Space"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Focused Work Areas</h3>
                                            <p className="text-gray-200 text-sm">Quiet zones for deep concentration and productivity</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2 h-96 rounded-2xl overflow-hidden shadow-xl relative group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop"
                                        alt="Professional Team"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Professional Excellence</h3>
                                            <p className="text-gray-200">State-of-the-art facilities that inspire our team to deliver their best</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Additional Team Info */}
                    <div className="bg-gradient-to-r from-[#00BBA7] to-[#009688] p-12 rounded-3xl shadow-2xl">
                        <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Complete Team</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                    <Users className="w-10 h-10 text-white" />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-2">Licensed Agents</h4>
                                <p className="text-white/90">Trained professionals with deep market knowledge and expertise</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-2">Consultants</h4>
                                <p className="text-white/90">Expert advisors providing personalized investment guidance</p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                    <Heart className="w-10 h-10 text-white" />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-2">Support Team</h4>
                                <p className="text-white/90">Dedicated staff ensuring smooth coordination and transactions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Achievements Section */}
            <section className="py-20 px-6 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
                        alt="City Skyline"
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements & Recognition</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our commitment to excellence has earned us industry recognition and client trust
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10">
                                <div className="w-10 h-10 rounded-full bg-[#00BBA7] flex items-center justify-center flex-shrink-0">
                                    {/* Simple SVG Award Icon */}
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-gray-200 leading-relaxed">{achievement}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section with Background */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0">


                </div>
                <div className="relative max-w-4xl mx-auto text-center text-gray-800">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
                    <p className="text-xl text-gray-800 mb-10 leading-relaxed">
                        Join thousands of satisfied clients who have found their dream properties with Fast Real Estate. Let our experienced team guide you every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-[#00BBA7]  text-gray-800 font-semibold rounded-lg hover:bg-[#009688] transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 group">
                            Browse Properties
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            Contact Our Team
                        </button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-16 pt-12 border-t border-white/20">
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-[#00BBA7] flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Call Us</h4>
                                    <p className="text-gray-800 text-sm">+971 XX XXX XXXX</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-[#00BBA7] flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Email Us</h4>
                                    <p className="text-gray-800 text-sm">info@fastrealestate.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-[#00BBA7] flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Visit Us</h4>
                                    <p className="text-gray-800  text-sm">Dubai, United Arab Emirates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
