import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacing */}
      <div className="h-20"></div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              fill
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=90"
              alt="Contact us"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Overlay Content */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Get in Touch</h3>
              <p className="text-sm lg:text-base text-white/90 mb-6">
                We're here to help you find your perfect home. Let's start a conversation.
              </p>
              
              {/* Contact Info on Image */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm">hello@fastsolutions.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <span className="text-sm">+1-212-456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm">Palm Springs, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm font-semibold">Contact Us</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Have a question or want to schedule a viewing? Fill out the form below and we'll get back to you shortly.
            </p>

            {/* Contact Form */}
            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-gray-900"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-gray-900"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-gray-900"
                  placeholder="Property Inquiry"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none resize-none text-gray-900"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-6"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
