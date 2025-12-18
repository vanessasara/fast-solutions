'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, LogOut, User, ChevronDown } from 'lucide-react';
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/', id: 'home' },
        { name: 'About Us', href: '/about-us', id: 'about-us' },
        { name: 'Visa and ticking', href: '/visa-and-ticking', id: 'visa-and-ticking' },
        { name: 'Blog', href: '/blog', id: 'blog' },
        { name: 'Contact', href: '/contact', id: 'contact' },
        { name: 'Dashboard', href: '/dashboard', id: 'dashboard' },
    ];

    const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

    const propertyLinks = [
        { name: 'Property Buying', href: '/property-buying', id: 'property-buying' },
        { name: 'Property Selling', href: '/property-selling', id: 'property-selling' },
        { name: 'Property Rent', href: '/property-renting', id: 'property-renting' },
    ];

    // Determine active section based on current pathname
    const getActiveSection = () => {
        if (pathname === '/') return 'home';
        if (pathname.startsWith('/about-us')) return 'about-us';
        if (pathname.startsWith('/visa-and-ticking')) return 'visa-and-ticking';
        if (pathname.startsWith('/blog')) return 'blog';
        if (pathname.startsWith('/contact')) return 'contact';
        if (pathname.startsWith('/dashboard')) return 'dashboard';
        return '';
    };

    // Check if any property page is active
    const isPropertyActive = () => {
        return pathname === '/properties' ||
            pathname.startsWith('/property-buying') ||
            pathname.startsWith('/property-selling') ||
            pathname.startsWith('/property-renting');
    };

    // Get specific property page
    const getActivePropertyPage = () => {
        if (pathname.startsWith('/property-buying')) return 'property-buying';
        if (pathname.startsWith('/property-selling')) return 'property-selling';
        if (pathname.startsWith('/property-renting')) return 'property-renting';
        return '';
    };

    const activeSection = getActiveSection();
    const activePropertyPage = getActivePropertyPage();

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* Sticky Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-2">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src='/logoImage.png'
                            alt="Fast solution Logo"
                            width={150}
                            height={150}
                            className="h-8 w-auto"
                        />
                    </Link>

                    <div className="flex items-center gap-6">
                        <a
                            href="tel:+12124567890"
                            className="hidden lg:flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                        >
                            <Phone size={20} strokeWidth={1.5} />
                            <span className="text-sm font-normal">+1-212-456-7890</span>
                        </a>


                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button className="bg-black backdrop-blur-sm text-white/80 px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-black/50 transition-all shadow-sm hover:shadow-md">
                                    <Menu size={20} strokeWidth={1.5} />
                                    <span className="font-medium text-sm">Menu</span>
                                </button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="w-full sm:w-96 bg-slate-900 border-none p-8"
                            >
                                {/* Add this for accessibility */}
                                
                                    <SheetTitle className='text-white'>Navigation Menu</SheetTitle>
                                
                                <div className="flex flex-col h-full">
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="self-end w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors mb-12"
                                    >
                                        <X size={24} className="text-white" strokeWidth={1.5} />
                                    </button>

                                    {/* Navigation Links */}
                                    <nav className="flex flex-col gap-6">
                                        <SignedIn>
                                            <div className="flex items-center gap-4 p-2 bg-white/10 rounded-lg mb-4">
                                                <User size={24} className="text-white" />
                                                <span className="text-white text-lg font-medium">Profile</span>
                                                <div className="ml-auto">
                                                    <UserButton afterSignOutUrl="/" />
                                                </div>
                                            </div>
                                        </SignedIn>
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.id}
                                                href={link.href}
                                                onClick={handleNavClick}
                                                className={`text-lg font-normal transition-colors ${activeSection === link.id
                                                        ? 'text-teal-400'
                                                        : 'text-gray-400 hover:text-white'
                                                    }`}
                                            >
                                                {activeSection === link.id && '— '}
                                                {link.name}
                                            </Link>
                                        ))}

                                        {/* Properties Dropdown in Mobile Menu */}
                                        <div className="flex flex-col gap-3">
                                            <button
                                                onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                                                className="flex items-center justify-between text-lg font-normal transition-colors group"
                                            >
                                                <Link
                                                    href="/properties"
                                                    onClick={handleNavClick}
                                                    className={`${isPropertyActive() ? 'text-teal-400' : 'text-gray-400 group-hover:text-white'}`}
                                                >
                                                    {isPropertyActive() && '— '}
                                                    Properties
                                                </Link>
                                                <ChevronDown
                                                    size={20}
                                                    className={`text-gray-400 transition-transform duration-200 ${isPropertiesOpen ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            {isPropertiesOpen && (
                                                <div className="pl-6 flex flex-col gap-3">
                                                    {propertyLinks.map((link) => (
                                                        <Link
                                                            key={link.id}
                                                            href={link.href}
                                                            onClick={handleNavClick}
                                                            className={`text-base font-normal transition-colors ${activePropertyPage === link.id
                                                                    ? 'text-teal-400'
                                                                    : 'text-gray-400 hover:text-white'
                                                                }`}
                                                        >
                                                            {activePropertyPage === link.id && '— '}
                                                            {link.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </nav>

                                    <SignedOut>
                                        <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-white/10">
                                            <SignUpButton mode="modal">
                                                <button className="w-full bg-white text-black px-5 py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-all shadow-sm hover:shadow-md">
                                                    <User size={20} strokeWidth={1.5} />
                                                    <span className="font-medium text-sm">Sign Up</span>
                                                </button>
                                            </SignUpButton>
                                            <SignInButton mode="modal">
                                                <button className="w-full bg-teal-400 text-slate-900 px-5 py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-teal-300 transition-all shadow-sm hover:shadow-md">
                                                    <User size={20} strokeWidth={1.5} />
                                                    <span className="font-medium text-sm">Sign In</span>
                                                </button>
                                            </SignInButton>
                                        </div>
                                    </SignedOut>
                                    <SignedIn>
                                        <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-white/10">
                                            <SignOutButton>
                                                <button className="w-full bg-red-500 text-white px-5 py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-red-600 transition-all shadow-sm hover:shadow-md">
                                                    <LogOut size={20} strokeWidth={1.5} />
                                                    <span className="font-medium text-sm">Sign Out</span>
                                                </button>
                                            </SignOutButton>
                                        </div>
                                    </SignedIn>

                                    {/* Contact Info */}
                                    <div className="mt-auto pt-12 border-t border-white/10">
                                        <div className="mb-6">
                                            <p className="text-gray-500 text-sm mb-2">Contact</p>
                                            <a
                                                href="mailto:hello@fastsolution.com"
                                                className="text-white text-base hover:text-teal-400 transition-colors block"
                                            >
                                                hello@fastsolution.com
                                            </a>
                                            <a
                                                href="tel:+12124567890"
                                                className="text-white text-base hover:text-teal-400 transition-colors block mt-1"
                                            >
                                                +1-212-456-7890
                                            </a>
                                        </div>

                                        {/* Social Links */}
                                        <div>
                                            <p className="text-gray-500 text-sm mb-2">Socials</p>
                                            <div className="flex flex-col gap-1">
                                                <a
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white text-base hover:text-teal-400 transition-colors"
                                                >
                                                    X / Twitter
                                                </a>
                                                <a
                                                    href="https://facebook.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white text-base hover:text-teal-400 transition-colors"
                                                >
                                                    Facebook
                                                </a>
                                                <a
                                                    href="https://instagram.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white text-base hover:text-teal-400 transition-colors"
                                                >
                                                    Instagram
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
