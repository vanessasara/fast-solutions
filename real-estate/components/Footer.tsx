import { X, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Newsletter Section */}
                <div className="flex flex-col gap-6 md:gap-8 pb-8 md:pb-12 border-b border-gray-800">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">
                            Stay updated with the latest news, promotions, and exclusive offers.
                        </h3>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 text-white px-6 py-3 rounded-full w-full sm:flex-1 sm:max-w-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>

                    <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
                        By subscribing, you agree to receive our promotional emails. You can unsubscribe at any time.
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start gap-6">
                        <a href="#" className="hover:text-teal-500 transition-colors" aria-label="X (Twitter)">
                            <X size={24} />
                        </a>
                        <a href="#" className="hover:text-teal-500 transition-colors" aria-label="Facebook">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="hover:text-teal-500 transition-colors" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-8 md:py-12 border-b border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {/* CTA Section */}
                        <div className="lg:col-span-2 text-center md:text-left">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                                Begin your path to success—contact us today.
                            </h2>
                            <button className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition-colors">
                                Get in touch
                            </button>
                        </div>

                        {/* Links Column 1 */}
                        <div className="text-center md:text-left">
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Categories</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Properties</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Featured property</a>
                                </li>
                            </ul>
                        </div>

                        {/* Links Column 2 */}
                        <div className="text-center md:text-left">
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">©2025 Fast solutions</p>
                    <div className="flex items-center gap-6 md:gap-8">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Terms of service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Privacy policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
