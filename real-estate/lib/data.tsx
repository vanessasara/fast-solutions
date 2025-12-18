import {
    Building2,
    LayoutDashboard,
    ListPlus,
    Settings,
    TrendingUp,
    CheckCircle,
    Target,
    Users,
    Sparkles, Lock, Leaf, Lightbulb, Shield, Trees, Home, Star, Heart, Award
    , MapPin, Camera, Video, PhoneCall, CheckCircle2,
    Plane, FileText, Briefcase, Globe,

} from 'lucide-react';


export const propertyImages = [
    {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        alt: "Modern luxury home exterior",
        title: "Luxury Villa"
    },
    {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        alt: "Contemporary office building",
        title: "Commercial Property"
    },
    {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        alt: "Elegant residential property",
        title: "Family Home"
    },
    {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        alt: "Modern apartment complex",
        title: "Investment Property"
    }
];

export const packages = [
    {
        name: "Basic Package",
        price: "Starting at $499",
        icon: Home,
        features: [
            "Professional photography",
            "Online listing on our website",
            "Property description optimization",
            "Basic social media post",
            "Email notification to database"
        ],
        badge: "Essential"
    },
    {
        name: "Premium Package",
        price: "Starting at $999",
        icon: Star,
        features: [
            "Everything in Basic Package",
            "Featured placement on website",
            "Extended social media campaign",
            "Virtual tour (360° photos)",
            "Drone exterior shots",
            "Weekly performance reports"
        ],
        badge: "Popular"
    },
    {
        name: "Complete Package",
        price: "Starting at $1,999",
        icon: TrendingUp,
        features: [
            "Everything in Premium Package",
            "Professional video walkthrough",
            "Dedicated agent support",
            "Staging consultation",
            "Targeted digital advertising",
            "Print media marketing",
            "Priority buyer matching"
        ],
        badge: "Best Value"
    }
];

export const services = [
    {
        icon: Camera,
        title: "Professional Photography",
        description: "High-quality interior and exterior shots that showcase your property's best features with expert lighting and composition."
    },
    {
        icon: Video,
        title: "Videography & Virtual Tours",
        description: "Immersive video walkthroughs and 360° virtual tours that give potential buyers a complete property experience online."
    },
    {
        icon: MapPin,
        title: "Drone Photography",
        description: "Stunning aerial shots perfect for showcasing large properties, land plots, and surrounding neighborhood amenities."
    },
    {
        icon: TrendingUp,
        title: "Property Valuation",
        description: "Expert market analysis based on current trends, comparable properties, and location to ensure optimal pricing strategy."
    }
];

export const features = [
    {
        icon: CheckCircle2,
        title: "Quick Listing Process",
        description: "Submit your property details and get listed within 24 hours with our streamlined process."
    },
    {
        icon: Users,
        title: "Expert Agent Support",
        description: "Dedicated real estate professionals guide you through every step, from listing to closing."
    },
    {
        icon: TrendingUp,
        title: "Maximum Exposure",
        description: "Your property reaches thousands of qualified buyers through our multi-channel marketing strategy."
    },
    {
        icon: PhoneCall,
        title: "Transparent Communication",
        description: "Regular updates, viewings coordination, and negotiation support throughout the selling process."
    }
];


// TypeScript Interfaces for Dashboard Properties
export interface DashboardProperty {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    type: 'sale' | 'rental';
    propertyType: 'apartment' | 'house' | 'commercial' | 'land';
    status: 'pending' | 'approved' | 'rejected';
    images: string[];
    userId: string;
    bedrooms?: number;
    bathrooms?: number;
    area?: string;
    amenities?: string[];
    createdAt: Date;
}

export const coreValues = [
    {
        icon: Shield,
        title: "Integrity",
        description: "We provide integrity, openness and fair deals in all our dealings, ensuring clients can trust us completely."
    },
    {
        icon: Heart,
        title: "Client Focus",
        description: "The needs of our clients are at the center of every decision, ensuring personalized service and satisfaction."
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We maintain the highest quality standards in everything we do, from property listings to customer service."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We adopt the latest technology and innovative approaches to enhance the property experience."
    },
    {
        icon: CheckCircle,
        title: "Reliability",
        description: "Clients can depend on us for consistent updates, communication, and support throughout their journey."
    },
    {
        icon: Users,
        title: "Community Engagement",
        description: "We actively support local communities through housing projects, urban development, and sustainability."
    }
];

export const achievements = [
    "Thousands of successful property transactions across residential, commercial, and luxury sectors",
    "Recognized as a leading real estate consultancy firm in multiple regions",
    "Industry-leading technology including virtual tours and real-time property updates",
    "Comprehensive visa assistance for international property buyers",
    "Licensed by national and regional real estate boards",
    "Award-winning customer service and market leadership"
];

export const teamMembers = [
    {
        role: "CEO & Founder",
        description: "Experienced industry visionary leading the company's mission of excellence",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
        role: "Chief Operating Officer",
        description: "Manages operations ensuring efficiency and high-quality service delivery",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
        role: "Head of Sales & Marketing",
        description: "Drives property promotion, client relationships and innovative strategies",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
        role: "Head of Consultancy",
        description: "Provides expert consulting on real estate investment and property valuation",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    }
];

export const whyChooseUs = [
    {
        icon: Target,
        title: "Expertise You Can Trust",
        description: "Years of experience delivering evidence-based recommendations for residential, commercial, and investment properties."
    },
    {
        icon: Building2,
        title: "Comprehensive Services",
        description: "One-stop solution for buying, selling, renting, visa assistance, consultancy, and investment guidance."
    },
    {
        icon: Users,
        title: "Client-Centric Approach",
        description: "Customized solutions delivered with transparency, honesty, and professionalism at every step."
    },
    {
        icon: TrendingUp,
        title: "Technology-Driven",
        description: "Advanced tools for property search, virtual tours, and real-time listings for seamless exploration."
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description: "Thousands of successful transactions consistently exceeding client expectations."
    },
    {
        icon: Star,
        title: "Strategic Insights",
        description: "In-depth market analysis, neighborhood research, and trend forecasting for informed decisions."
    }
];
// Real estate dashboard navigation data
export const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: "Properties",
            url: "/dashboard/dashboard-properties",
            icon: Home,
        },
        {
            title: "My Properties",
            url: "/dashboard/my-properties",
            icon: Building2,
        },
        {
            title: "Add Property",
            url: "/dashboard/add-property",
            icon: ListPlus,
        },
        {
            title: "Analytics",
            url: "/dashboard/analytics",
            icon: TrendingUp,
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "/dashboard/settings",
            icon: Settings,
        },
    ],
}



// Mock Dashboard Properties (for add property form and user properties)
export const dashboardProperties: DashboardProperty[] = [
    {
        id: "prop-001",
        title: "Luxury Downtown Apartment",
        description: "Beautiful 2-bedroom apartment in the heart of downtown with stunning city views",
        price: 125000000,
        location: "Downtown Miami, FL",
        type: "rental",
        propertyType: "apartment",
        status: "approved",
        images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90"],
        userId: "user_123",
        bedrooms: 2,
        bathrooms: 2,
        area: "95m²",
        amenities: ["Pool", "Gym", "Parking", "Security"],
        createdAt: new Date("2025-01-15")
    },
    {
        id: "prop-002",
        title: "Modern Family House",
        description: "Spacious 4-bedroom house with large backyard, perfect for families",
        price: 185000000,
        location: "Coral Gables, FL",
        type: "sale",
        propertyType: "house",
        status: "pending",
        images: ["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=90"],
        userId: "user_123",
        bedrooms: 4,
        bathrooms: 3,
        area: "220m²",
        amenities: ["Garden", "Garage", "Patio", "Storage"],
        createdAt: new Date("2025-02-01")
    },
    {
        id: "prop-003",
        title: "Commercial Office Space",
        description: "Prime commercial property in business district, ideal for corporate offices",
        price: 350000000,
        location: "Brickell, Miami",
        type: "sale",
        propertyType: "commercial",
        status: "approved",
        images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=90"],
        userId: "user_456",
        area: "450m²",
        amenities: ["Elevator", "Reception", "Conference Rooms", "Parking"],
        createdAt: new Date("2025-01-20")
    },
    {
        id: "prop-004",
        title: "Beachfront Villa",
        description: "Stunning 5-bedroom villa with direct beach access and ocean views",
        price: 425000000,
        location: "Miami Beach, FL",
        type: "sale",
        propertyType: "house",
        status: "rejected",
        images: ["https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=90"],
        userId: "user_123",
        bedrooms: 5,
        bathrooms: 4,
        area: "380m²",
        amenities: ["Beach Access", "Pool", "Deck", "Garden"],
        createdAt: new Date("2025-01-10")
    },
    {
        id: "prop-005",
        title: "Studio Apartment Downtown",
        description: "Cozy studio apartment perfect for young professionals",
        price: 45000000,
        location: "Wynwood, Miami",
        type: "rental",
        propertyType: "apartment",
        status: "pending",
        images: ["https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=90"],
        userId: "user_789",
        bedrooms: 1,
        bathrooms: 1,
        area: "42m²",
        amenities: ["Balcony", "Security", "Elevator"],
        createdAt: new Date("2025-02-05")
    },
    {
        id: "prop-006",
        title: "Development Land",
        description: "Prime development land in rapidly growing area, zoned for residential",
        price: 200000000,
        location: "Homestead, FL",
        type: "sale",
        propertyType: "land",
        status: "approved",
        images: ["https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=90"],
        userId: "user_456",
        area: "5000m²",
        amenities: ["Road Access", "Utilities Available"],
        createdAt: new Date("2025-01-25")
    }
];

// Utility Functions
export const getPropertiesByUserId = (userId: string): DashboardProperty[] => {
    return dashboardProperties.filter(prop => prop.userId === userId);
};

export const getPropertiesByStatus = (status: 'pending' | 'approved' | 'rejected'): DashboardProperty[] => {
    return dashboardProperties.filter(prop => prop.status === status);
};

export const getPropertiesByType = (type: 'sale' | 'rental'): DashboardProperty[] => {
    return dashboardProperties.filter(prop => prop.type === type);
};

export const getApprovedProperties = (): DashboardProperty[] => {
    return dashboardProperties.filter(prop => prop.status === 'approved');
};

export const getPendingPropertiesCount = (): number => {
    return dashboardProperties.filter(prop => prop.status === 'pending').length;
};

export const getPropertyById = (id: string): DashboardProperty | undefined => {
    return dashboardProperties.find(prop => prop.id === id);
};

// list of properties in /properties/page.tsx
export const properties = [
    {
        id: 1,
        slug: "serenity-height-villas",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90",
        title: "Serenity height villas",
        address: "15 S aurora ave, miami",
        price: "PKR 158,670,000",
        category: "sale", // Added
        bedrooms: 4,
        bathrooms: 3,
        area: "120m²"
    },
    {
        id: 2,
        slug: "mountain-retreat-villa",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=90",
        title: "Mountain retreat villa",
        address: "18 S aurora ave, miami",
        price: "PKR 160,062,500",
        category: "rent", // Added
        bedrooms: 5,
        bathrooms: 2,
        area: "160m²"
    },
    {
        id: 3,
        slug: "modern-luxe-villa",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=90",
        title: "Modern luxe villa",
        address: "20 S aurora ave, miami",
        price: "PKR 189,280,000",
        category: "sale", // Added
        bedrooms: 3,
        bathrooms: 4,
        area: "180m²"
    },
    {
        id: 4,
        slug: "royal-orchid-villas",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=90",
        title: "Royal orchid villas",
        address: "12 emerald heights, los angeles",
        price: "PKR 192,060,000",
        category: "sale", // Added
        bedrooms: 6,
        bathrooms: 3,
        area: "200m²"
    },
    {
        id: 5,
        slug: "grand-vista-villas",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=90",
        title: "Grand vista villas",
        address: "25 skyline boulevard, san diego",
        price: "PKR 197,630,000",
        category: "rent", // Added
        bedrooms: 2,
        bathrooms: 1,
        area: "90m²"
    },
    {
        id: 6,
        slug: "imperial-pearl-villas",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=90",
        title: "Imperial pearl villas",
        address: "18 sapphire bay road, naples",
        price: "PKR 175,410,000",
        category: "sale", // Added
        bedrooms: 4,
        bathrooms: 2,
        area: "130m²"
    },
    {
        id: 7,
        slug: "opulent-haven-villas",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=90",
        title: "Opulent haven villas",
        address: "22 ocean breeze drive, malibu",
        price: "PKR 172,630,000",
        category: "rent", // Added
        bedrooms: 6,
        bathrooms: 3,
        area: "180m²"
    },
    {
        id: 8,
        slug: "elite-crest-villas",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=90",
        title: "Elite crest villas",
        address: "10 palm view lane, beverly hills",
        price: "PKR 208,875,000",
        category: "sale", // Added
        bedrooms: 4,
        bathrooms: 3,
        area: "160m²"
    },
    {
        id: 9,
        slug: "majestic-bay-villas",
        image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=90",
        title: "Majestic bay villas",
        address: "8 sunset cove, miami beach",
        price: "PKR 189,280,000",
        category: "rent", // Added
        bedrooms: 4,
        bathrooms: 2,
        area: "120m²"
    }
];
//single property details in /properties/[slug]/page.tsx
export const propertiesData = [
    {
        id: 1,
        slug: "serenity-height-villas",
        title: "Serenity height villas",
        address: "15 S aurora ave, miami",
        category: "sale",
        bedrooms: 4,
        bathrooms: 3,
        area: "120m²",
        price: "PKR 158,670,000",
        discountedPrice: "PKR 142,803,000",
        mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600&q=90",
            "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&q=90",
            "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=90"
        ],
        features: [
            {
                icon: <Sparkles size={20} />,
                title: "Garden paradise",
                description: "Beautifully landscaped garden with tropical plants and seating areas."
            },
            {
                icon: <Lock size={20} />,
                title: "Premium security",
                description: "24/7 gated community with advanced surveillance systems."
            },
            {
                icon: <Leaf size={20} />,
                title: "Eco-friendly design",
                description: "Solar panels and rainwater harvesting for sustainable living."
            }
        ],
        description: [
            "Welcome to serenity height villas, an exquisite residence located at 15 s aurora ave in the vibrant heart of miami. priced at PKR 158,670,000, this stunning 120m² property features 4 generously sized bedrooms and 3 modern bathrooms. designed with tranquility in mind, this villa combines sophisticated architecture with peaceful surroundings, offering the perfect retreat from city life while remaining close to all urban amenities.",
            "The interior showcases an elegant open-plan design that flows seamlessly from room to room. the contemporary kitchen features premium appliances, custom cabinetry, and granite countertops. large windows throughout the home invite natural light, creating warm and welcoming spaces perfect for both relaxation and entertaining guests.",
            "Each bedroom has been carefully designed to maximize comfort and privacy. the master suite includes an ensuite bathroom with rainfall shower, dual vanities, and a walk-in wardrobe. the additional bedrooms offer flexibility for family members, guests, or a home office setup.",
            "Outside, the property features a beautifully maintained garden with mature trees, flowering plants, and multiple seating areas. the outdoor space is perfect for weekend barbecues, morning coffee, or simply enjoying miami's beautiful weather year-round."
        ],
        offers: [
            { icon: <Sparkles size={16} />, text: "Gated community" },
            { icon: <Lightbulb size={16} />, text: "Abundant natural light" },
            { icon: <Home size={16} />, text: "Open floor plan" },
            { icon: <Shield size={16} />, text: "Advanced security" },
            { icon: <Leaf size={16} />, text: "Solar power ready" },
            { icon: <Trees size={16} />, text: "Landscaped gardens" }
        ],
        testimonial: {
            text: "Serenity height villas exceeded all our expectations! The attention to detail in every corner of the home is remarkable. The neighborhood is peaceful yet conveniently located. We couldn't be happier with our purchase!",
            author: "Michael & Sarah Johnson",
            role: "Homeowner",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=90"
        }

    },
    {
        id: 2,
        slug: "mountain-retreat-villa",
        title: "Mountain retreat villa",
        address: "18 S aurora ave, miami",
        category: "rent",
        bedrooms: 5,
        bathrooms: 2,
        area: "160m²",
        price: "PKR 160,062,500",
        discountedPrice: "PKR 144,056,250",
        mainImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=90",
            "https://images.unsplash.com/photo-1600566752229-250ed79470d5?w=600&q=90",
            "https://images.unsplash.com/photo-1600566753051-e45eef2c9cf9?w=600&q=90"
        ],
        features: [
            {
                icon: <Sparkles size={20} />,
                title: "Mountain views",
                description: "Panoramic mountain vistas from every major room."
            },
            {
                icon: <Lock size={20} />,
                title: "Biometric entry",
                description: "State-of-the-art fingerprint and facial recognition access."
            },
            {
                icon: <Leaf size={20} />,
                title: "Green living",
                description: "LEED certified with geothermal heating and cooling."
            }
        ],
        description: [
            "Discover mountain retreat villa, a spacious sanctuary at 18 s aurora ave, miami, offering 160m² of luxurious living space. priced at PKR 160,062,500, this magnificent home features 5 bedrooms and 2 beautifully appointed bathrooms. despite its miami address, the property's elevated position and architectural design evoke the serene atmosphere of a mountain retreat, providing residents with a unique living experience.",
            "Inside, you'll find expansive living areas with soaring ceilings and floor-to-ceiling windows that frame breathtaking views. the chef's kitchen boasts professional-grade appliances, a large center island with seating, and custom maple cabinetry. the open layout encourages family gatherings and entertaining.",
            "The five bedrooms are thoughtfully distributed across the home, with the master suite occupying its own private wing. featuring a spa-inspired bathroom with soaking tub and separate shower, the master retreat offers ultimate relaxation. the remaining bedrooms are perfect for children, guests, or home office spaces.",
            "The outdoor areas have been designed to maximize enjoyment of the surrounding landscape. multiple terraces and balconies provide perfect spots for morning meditation or evening relaxation. the backyard includes a fire pit area and space for outdoor dining."
        ],
        offers: [
            { icon: <Sparkles size={16} />, text: "Panoramic views" },
            { icon: <Lightbulb size={16} />, text: "High ceilings" },
            { icon: <Home size={16} />, text: "Five bedrooms" },
            { icon: <Shield size={16} />, text: "Biometric security" },
            { icon: <Leaf size={16} />, text: "LEED certified" },
            { icon: <Trees size={16} />, text: "Multiple terraces" }
        ],
        testimonial: {
            text: "Moving into mountain retreat villa was the best decision we ever made. The space is perfect for our growing family, and the quality of construction is evident everywhere. Highly recommended!",
            author: "David & Jennifer Martinez",
            role: "Resident",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=90"
        }
    },
    {
        id: 3,
        slug: "modern-luxe-villa",
        title: "Modern luxe villa",
        address: "20 s aurora ave, miami",
        bedrooms: 3,
        category: "sale",
        bathrooms: 4,
        area: "180m²",
        price: "PKR 189,280,000",
        discountedPrice: "PKR 170,352,000",
        mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=90",
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=90",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=90"
        ],
        features: [
            {
                icon: <Sparkles size={20} />,
                title: "Poolside bliss",
                description: "One of the few homes in the area with a private pool."
            },
            {
                icon: <Lock size={20} />,
                title: "Smart home access",
                description: "Easily check yourself in with a modern keypad system."
            },
            {
                icon: <Leaf size={20} />,
                title: "Energy efficient",
                description: "Built in 2025 with sustainable and smart-home features."
            }
        ],
        description: [
            "Nestled in the heart of miami, the modern luxe villa at 20 s aurora ave offers a perfect blend of contemporary elegance and smart-home innovation. priced at PKR 189,280,000, this 180m² residence features 3 spacious bedrooms, 4 luxurious bathrooms, and expansive living areas designed for comfort and style. built in 2025, the home boasts energy-efficient systems, abundant natural light, and state-of-the-art security features. outdoor spaces include two stylish bar areas, perfect for entertaining guests. enjoy the ultimate in modern living with premium amenities and a prime location.",
            "Step inside to discover an open-concept layout that seamlessly connects the kitchen, dining, and living spaces. the gourmet kitchen is equipped with top-of-the-line appliances, sleek cabinetry, and a large island perfect for casual dining or meal prep. the sunlit living room offers floor-to-ceiling windows, creating a bright and airy atmosphere while providing stunning views of the outdoor space.",
            "The primary suite serves as a private retreat with a spa-like ensuite bathroom and a spacious walk-in closet. each additional bedroom is thoughtfully designed with comfort and style in mind, offering ample space and modern finishes. the home's four bathrooms feature high-end fixtures, custom vanities, and elegant tiling.",
            "Outdoor living is equally impressive, with a beautifully landscaped backyard, multiple lounge areas, and two fully equipped bar spaces."
        ],
        offers: [
            { icon: <Sparkles size={16} />, text: "Smart home integration" },
            { icon: <Lightbulb size={16} />, text: "Natural light" },
            { icon: <Home size={16} />, text: "Spacious living areas" },
            { icon: <Shield size={16} />, text: "Security systems" },
            { icon: <Leaf size={16} />, text: "Energy efficiency" },
            { icon: <Trees size={16} />, text: "Outdoor spaces" }
        ],
        testimonial: {
            text: "I found my ideal home in no time! The listings were detailed, the photos were accurate, and the whole process felt seamless. Customer service was top-notch, answering all my questions. I will definitely use this platform again in the future!",
            author: "Emily & John Smith",
            role: "Buyer",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=90"
        }
    },
    {
        id: 4,
        slug: "royal-orchid-villas",
        title: "Royal orchid villas",
        address: "12 emerald heights, los angeles",
        bedrooms: 6,
        category: "sale",
        bathrooms: 3,
        area: "200m²",
        price: "PKR 192,060,000",
        discountedPrice: "PKR 172,854,000",
        mainImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600&q=90",
            "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=600&q=90",
            "https://images.unsplash.com/photo-1600047508918-dc066986e98e?w=600&q=90"
        ],
        features: [
            {
                icon: <Sparkles size={20} />,
                title: "Royal elegance",
                description: "Palatial design with imported marble and crystal chandeliers."
            },
            {
                icon: <Lock size={20} />,
                title: "Concierge security",
                description: "Private security team and controlled access entry."
            },
            {
                icon: <Leaf size={20} />,
                title: "Smart climate control",
                description: "Zone-based heating and cooling for optimal comfort."
            }
        ],
        description: [
            "Experience luxury redefined at royal orchid villas, located at 12 emerald heights in prestigious los angeles. priced at PKR 192,060,000, this expansive 200m² estate features 6 elegant bedrooms and 3 sophisticated bathrooms. the property exemplifies royal living with its grand architecture, premium finishes, and meticulous attention to detail. every element has been carefully curated to provide an unparalleled lifestyle experience.",
            "The grand entrance opens to a magnificent foyer with double-height ceilings and a sweeping staircase. the formal living and dining areas feature imported marble flooring and custom millwork. the gourmet kitchen is a chef's dream with professional appliances, dual ovens, wine storage, and a butler's pantry.",
            "With six bedrooms, this villa offers exceptional space for large families or those who love to entertain. the master suite is a true sanctuary featuring a sitting area, dual walk-in closets, and a spa bathroom with jacuzzi tub. five additional bedrooms provide comfortable accommodation for family and guests.",
            "The outdoor spaces are equally impressive, featuring manicured gardens, a covered veranda with outdoor kitchen, and ample space for a pool. the property's elevated position ensures privacy while offering stunning views of the surrounding hills."
        ],
        offers: [
            { icon: <Sparkles size={16} />, text: "Six bedrooms" },
            { icon: <Lightbulb size={16} />, text: "Grand architecture" },
            { icon: <Home size={16} />, text: "Formal dining room" },
            { icon: <Shield size={16} />, text: "Concierge security" },
            { icon: <Leaf size={16} />, text: "Smart climate zones" },
            { icon: <Trees size={16} />, text: "Manicured gardens" }
        ],
        testimonial: {
            text: "Royal orchid villas truly lives up to its name. The craftsmanship is extraordinary, and the space is perfect for our family gatherings. Living here feels like being in a five-star resort every day!",
            author: "Richard & Patricia Anderson",
            role: "Homeowner",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=90"
        }
    },
    {
        id: 5,
        slug: "grand-vista-villas",
        title: "Grand vista villas",
        address: "25 skyline boulevard, san diego",
        category: "rent",
        bedrooms: 2,
        bathrooms: 1,
        area: "90m²",
        price: "PKR 197,630,000",
        discountedPrice: "PKR 177,867,000",
        mainImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&q=90",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=90",
            "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600&q=90"
        ],
        features: [
            {
                icon: <Sparkles size={20} />,
                title: "Skyline views",
                description: "Breathtaking panoramic views of san diego's downtown skyline."
            },
            {
                icon: <Lock size={20} />,
                title: "Smart access",
                description: "Integrated smart locks with mobile app control."
            },
            {
                icon: <Leaf size={20} />,
                title: "Compact luxury",
                description: "Efficiently designed with premium finishes throughout."
            }
        ],
        description: [
            "Grand vista villas at 25 skyline boulevard, san diego, offers sophisticated urban living with spectacular views. priced at PKR 197,630,000, this efficient 90m² residence features 2 well-appointed bedrooms and 1 modern bathroom. perfectly suited for couples, young professionals, or as an investment property, this villa maximizes every square meter with thoughtful design and premium finishes.",
            "The open-concept living area creates a sense of spaciousness, with the kitchen, dining, and living room flowing together seamlessly. floor-to-ceiling windows flood the space with natural light and showcase the stunning city views. the modern kitchen features quartz countertops, stainless steel appliances, and clever storage solutions.",
            "Both bedrooms are designed for comfort and functionality. the master bedroom includes built-in wardrobes and direct access to the bathroom. the second bedroom is versatile, perfect for guests, a home office, or children. the contemporary bathroom features sleek fixtures and a glass-enclosed shower.",
            "A private balcony extends the living space outdoors, providing the perfect spot to enjoy morning coffee or evening sunsets while taking in the magnificent skyline views. the building includes secure parking and shared amenities."
        ],
        offers: [
            { icon: <Sparkles size={16} />, text: "City skyline views" },
            { icon: <Lightbulb size={16} />, text: "Open concept design" },
            { icon: <Home size={16} />, text: "Efficient layout" },
            { icon: <Shield size={16} />, text: "Smart home ready" },
            { icon: <Leaf size={16} />, text: "Energy star rated" },
            { icon: <Trees size={16} />, text: "Private balcony" }
        ],
        testimonial: {
            text: "Perfect starter home! Grand vista villas offers amazing value with those incredible views. The location is unbeatable, and the quality of construction exceeded our expectations for this price point.",
            author: "Alex & Maria Rodriguez",
            role: "First-time Buyers",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=90"
        }
    },
    {
        id: 6,
        slug: "imperial-pearl-villas",
        title: "Imperial pearl villas",
        address: "18 sapphire bay road, naples",
        category: "sale",
        bedrooms: 4,
        bathrooms: 2,
        area: "130m²",
        price: "PKR 175,410,000",
        discountedPrice: "PKR 157,869,000",
        mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=90",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=90",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=90"
        ],
        features: [
            {
                icon: <Sparkles size={20} />,
                title: "Waterfront living",
                description: "Direct access to sapphire bay with private dock."
            },
            {
                icon: <Lock size={20} />,
                title: "Coastal security",
                description: "Hurricane-rated windows and advanced storm protection."
            },
            {
                icon: <Leaf size={20} />,
                title: "Beach lifestyle",
                description: "Designed for indoor-outdoor coastal living."
            }
        ],
        description: [
            "Imperial pearl villas at 18 sapphire bay road, naples, brings waterfront luxury to life. priced at PKR 175,410,000, this beautiful 130m² property features 4 bedrooms and 2 bathrooms, perfectly positioned to capture stunning bay views. the villa embodies coastal elegance with its bright, airy design and premium finishes throughout. this is more than a home; it's a lifestyle.",
            "The interior design reflects sophisticated coastal living with a palette of soft blues, whites, and natural textures. the open living area features vaulted ceilings and expansive sliding glass doors that blur the lines between indoor and outdoor spaces. the kitchen boasts white shaker cabinets, marble countertops, and high-end appliances.",
            "Four generously sized bedrooms provide comfortable accommodation for the whole family. the master suite offers tranquil bay views, an ensuite bathroom with dual vanities and walk-in shower, plus a large closet. the additional bedrooms share a beautifully appointed second bathroom.",
            "The outdoor area is the crown jewel of this property. a spacious deck with built-in seating leads down to your private dock. imagine waking up to sunrise over the bay, spending days on the water, and entertaining friends with stunning sunset views as your backdrop."
        ],
        offers: [
            { icon: <Sparkles size={16} />, text: "Waterfront location" },
            { icon: <Lightbulb size={16} />, text: "Bay views" },
            { icon: <Home size={16} />, text: "Private dock" },
            { icon: <Shield size={16} />, text: "Storm protection" },
            { icon: <Leaf size={16} />, text: "Coastal design" },
            { icon: <Trees size={16} />, text: "Outdoor deck" }
        ],
        testimonial: {
            text: "Living at imperial pearl villas is a dream come true. Waking up to bay views every morning never gets old. The private dock has transformed our lifestyle - we're on the water every weekend!",
            author: "Christopher & Amanda Wilson",
            role: "Coastal Living Enthusiast",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=90"
        }
    },
    {
        id: 7,
        slug: "opulent-haven-villas",
        title: "Opulent haven villas",
        address: "22 ocean breeze drive, malibu",
        category: "rent",
        bedrooms: 6,
        bathrooms: 3,
        area: "180m²",
        price: "PKR 172,630,000",
        discountedPrice: "PKR 155,367,000",
        mainImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=90",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=90",
            "https://images.unsplash.com/photo-1600607688960-e095ff83135e?w=600&q=90"
        ],
        features: [
            {
                icon: <Sparkles size={20} />,
                title: "Ocean breeze",
                description: "Just steps from malibu beach with ocean views from multiple rooms."
            },
            {
                icon: <Lock size={20} />,
                title: "Privacy gates",
                description: "Gated entrance with video intercom and visitor management."
            },
            {
                icon: <Leaf size={20} />,
                title: "Beach modern",
                description: "Contemporary architecture with sustainable materials."
            }
        ],
        description: [
            "Opulent haven villas at 22 ocean breeze drive captures the essence of malibu's legendary coastal lifestyle. priced at PKR 172,630,000, this exceptional 180m² residence offers 6 bedrooms and 3 bathrooms, making it perfect for large families or those who love to host. the property combines beachside sophistication with modern convenience, offering an unparalleled living experience in one of california's most coveted locations.",
            "The interior design celebrates malibu's relaxed yet refined aesthetic. light-filled spaces feature white oak flooring, vaulted ceilings with exposed beams, and oversized windows framing ocean views. the designer kitchen includes custom cabinetry, a large island with waterfall edges, professional appliances, and a walk-in pantry.",
            "Six spacious bedrooms are thoughtfully distributed across two levels. the luxurious master suite occupies the entire upper level, featuring a private balcony with panoramic ocean views, a spa-inspired bathroom with freestanding tub, rain shower, and dual closets. five additional bedrooms accommodate family and guests comfortably.",
            "The outdoor living spaces are designed for the ultimate california lifestyle. multiple decks and patios provide perfect spots for sunbathing, dining al fresco, or watching the sunset. the backyard includes mature landscaping, an outdoor shower, and direct beach access. this is coastal living at its finest."
        ],
        offers: [
            { icon: <Sparkles size={16} />, text: "Ocean views" },
            { icon: <Lightbulb size={16} />, text: "Beach access" },
            { icon: <Home size={16} />, text: "Six bedrooms" },
            { icon: <Shield size={16} />, text: "Gated privacy" },
            { icon: <Leaf size={16} />, text: "Sustainable design" },
            { icon: <Trees size={16} />, text: "Multiple decks" }
        ],
        testimonial: {
            text: "Opulent haven villas is everything we hoped for and more. The beach is literally at our doorstep, and the house is perfect for our family. Malibu living at its absolute best!",
            author: "Jonathan & Rebecca Thompson",
            role: "Beach Lifestyle",
            avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=90"
        }
    },
    {
        id: 8,
        slug: "elite-crest-villas",
        title: "Elite crest villas",
        address: "10 palm view lane, beverly hills",
        category: "sale",
        bedrooms: 4,
        bathrooms: 3,
        area: "160m²",
        price: "PKR 208,875,000",
        discountedPrice: "PKR 187,987,500",
        mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=90",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=90",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=90"
        ],
        features: [
            {
                icon: <Sparkles size={20} />,
                title: "Beverly hills prestige",
                description: "Located in one of the world's most exclusive neighborhoods."
            },
            {
                icon: <Lock size={20} />,
                title: "VIP security",
                description: "Professional monitoring with 24/7 patrol and response team."
            },
            {
                icon: <Leaf size={20} />,
                title: "Luxury automation",
                description: "Fully integrated smart home with voice control throughout."
            }
        ],
        description: [
            "Elite crest villas at 10 palm view lane represents the pinnacle of beverly hills luxury. priced at PKR 208,875,000, this stunning 160m² property features 4 elegant bedrooms and 3 designer bathrooms. this residence embodies sophistication and exclusivity, offering discerning buyers a rare opportunity to own in one of the world's most prestigious addresses. every detail reflects the highest standards of quality and craftsmanship.",
            "Enter through grand double doors into a show-stopping foyer with Italian marble flooring and a custom chandelier. the formal living room features a fireplace, coffered ceilings, and French doors opening to the terrace. the gourmet kitchen showcases top-tier Sub-Zero and Wolf appliances, custom cabinetry, and a spacious dining area with designer lighting.",
            "The four bedrooms are sanctuaries of comfort and style. the master suite is a private oasis with tray ceilings, a sitting area, and a luxurious bathroom featuring a soaking tub, frameless glass shower, and dual vanities. three additional bedrooms each have ensuite or jack-and-jill bathroom access.",
            "The outdoor space is an entertainer's paradise. a resort-style pool and spa are surrounded by travertine decking and mature palm trees. covered cabanas, an outdoor kitchen with bar seating, and a fire pit lounge create multiple spaces for relaxation and entertainment. this is beverly hills living at its finest."
        ],
        offers: [
            { icon: <Sparkles size={16} />, text: "Beverly hills address" },
            { icon: <Lightbulb size={16} />, text: "Resort-style pool" },
            { icon: <Home size={16} />, text: "Gourmet kitchen" },
            { icon: <Shield size={16} />, text: "24/7 security" },
            { icon: <Leaf size={16} />, text: "Full automation" },
            { icon: <Trees size={16} />, text: "Landscaped grounds" }
        ],
        testimonial: {
            text: "Elite crest villas exceeded every expectation. The location is unmatched, the quality is outstanding, and living here truly feels like a privilege. This is what beverly hills luxury should be!",
            author: "Marcus & Victoria Chen",
            role: "Luxury Homeowner",
            avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&q=90"
        }
    },
    {
        id: 9,
        slug: "majestic-bay-villas",
        title: "Majestic bay villas",
        address: "8 sunset cove, miami beach",
        category: "rent",
        bedrooms: 4,
        bathrooms: 2,
        area: "120m²",
        price: "PKR 189,280,000",
        discountedPrice: "PKR 170,352,000",
        mainImage: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=90",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=90",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=90",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=90"
        ],
        features: [
            {
                icon: <Sparkles size={20} />,
                title: "Sunset paradise",
                description: "Spectacular sunset views over biscayne bay every evening."
            },
            {
                icon: <Lock size={20} />,
                title: "Secure living",
                description: "Gated waterfront community with controlled access."
            },
            {
                icon: <Leaf size={20} />,
                title: "Tropical design",
                description: "Architecture inspired by miami's art deco heritage."
            }
        ],
        description: [
            "Majestic bay villas at 8 sunset cove, miami beach, offers the ultimate miami lifestyle. priced at PKR 189,280,000, this beautiful 120m² property features 4 bedrooms and 2 bathrooms with stunning bay views. perfectly positioned in exclusive sunset cove, this residence combines tropical elegance with modern sophistication. the property captures the vibrant energy and laid-back luxury that makes miami beach one of the world's most desirable destinations.",
            "The interior showcases a bright, contemporary design with porcelain tile flooring, recessed lighting, and impact-resistant floor-to-ceiling windows throughout. the open-plan living and dining area flows seamlessly to a private terrace overlooking the bay. the modern kitchen features sleek white cabinetry, granite countertops, and stainless steel appliances.",
            "Four well-appointed bedrooms provide flexible living space. the master bedroom boasts bay views, a walk-in closet, and an ensuite bathroom with dual sinks and a frameless glass shower. three additional bedrooms offer comfort and privacy, sharing a second tastefully designed bathroom.",
            "Step outside to your private oasis. the covered terrace is perfect for year-round entertaining, featuring ample space for dining and lounging while enjoying panoramic bay views. watch boats sail by during the day and experience breathtaking sunsets every evening. community amenities include a waterfront pool, fitness center, and secure boat docking."
        ],
        offers: [
            { icon: <Sparkles size={16} />, text: "Bay views" },
            { icon: <Lightbulb size={16} />, text: "Impact windows" },
            { icon: <Home size={16} />, text: "Private terrace" },
            { icon: <Shield size={16} />, text: "Gated community" },
            { icon: <Leaf size={16} />, text: "Tropical living" },
            { icon: <Trees size={16} />, text: "Waterfront access" }
        ],
        testimonial: {
            text: "Majestic bay villas is everything we wanted in a miami beach home. The sunset views are absolutely stunning, and the location is perfect - close to everything but peaceful and private. We love it here!",
            author: "Carlos & Isabella Garcia",
            role: "Waterfront Resident",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=90"
        }
    }
]

{/*main page featured properties that must match the list of property and when clicked it must show 
single property details in the /property/[slug]/page.tsx
    */}
export const Featuredproperties = [
    {
        id: 1,
        title: "Modern luxe villa",
        address: "20 S Aurora Ave, Miami",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
        price: "PKR 459,414,250",
        description: "Experience luxury living at modern luxe villa, located at 20 s aurora ave, miami. priced at PKR 459,414,250, this 560 ft² smart home offers 4 bedrooms, 3 bathrooms, and spacious living areas. enjoy energy efficiency, natural light, security systems, outdoor spaces, and 2 bar areas—perfect for 8+ guests. Built in 2025",
        features: [
            {
                icon: "pool",
                title: "Poolside bliss",
                description: "One of the few homes in the area with a private pool."
            },
            {
                icon: "smartphone",
                title: "Smart home access",
                description: "Easily check yourself in with a modern keypad system."
            },
            {
                icon: "lightbulb",
                title: "Energy efficient",
                description: "Built in 2025 with sustainable and smart-home features."
            }
        ]
    },
    {
        id: 2,
        title: "Coastal paradise villa",
        address: "45 Ocean Drive, Malibu",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90",
        price: "PKR 793,507,500",
        description: "Stunning oceanfront property with panoramic views. This 850 ft² masterpiece features 5 bedrooms, 4 bathrooms, infinity pool, and direct beach access. Smart home technology, solar panels, and luxury finishes throughout. Built in 2024",
        features: [
            {
                icon: "pool",
                title: "Infinity pool",
                description: "Breathtaking infinity pool overlooking the ocean."
            },
            {
                icon: "smartphone",
                title: "Beach access",
                description: "Private pathway leading directly to the beach."
            },
            {
                icon: "lightbulb",
                title: "Solar powered",
                description: "100% solar energy with battery backup system."
            }
        ]
    },
    {
        id: 3,
        title: "Mountain retreat estate",
        address: "88 Highland Peak, Aspen",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=90",
        price: "PKR 890,880,000",
        description: "Exclusive mountain estate spanning 1,200 ft² with breathtaking views. Features 6 bedrooms, 5 bathrooms, ski-in/ski-out access, heated floors, wine cellar, and home theater. Perfect alpine luxury retreat. Built in 2023",
        features: [
            {
                icon: "pool",
                title: "Ski access",
                description: "Direct ski-in/ski-out access to premium slopes."
            },
            {
                icon: "smartphone",
                title: "Wine cellar",
                description: "Temperature-controlled wine cellar for 500+ bottles."
            },
            {
                icon: "lightbulb",
                title: "Heated floors",
                description: "Radiant floor heating throughout the entire home."
            }
        ]
    }
];

// properties in main landing page
export const propertiesSection = [
    {
        id: 1,
        slug: "serenity-height-villas",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90",
        title: "Serenity height villas",
        address: "15 s aurora ave, miami",
        price: "PKR 158,670,000",
        bedrooms: 4,
        bathrooms: 3,
        area: "120m²"
    },
    {
        id: 2,
        slug: "mountain-retreat-villa",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=90",
        title: "Mountain retreat villa",
        address: "18 s aurora ave, miami",
        price: "PKR 160,062,500",
        bedrooms: 5,
        bathrooms: 2,
        area: "150m²"
    },
    {
        id: 3,
        slug: "modern-luxe-villa",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=90",
        title: "Modern luxe villa",
        address: "20 s aurora ave, miami",
        price: "PKR 161,455,000",
        bedrooms: 3,
        bathrooms: 4,
        area: "180m²"
    },
    {
        id: 4,
        slug: "royal-orchid-villas",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=90",
        title: "Royal orchid villas",
        address: "12 emerald heights, los angeles",
        price: "PKR 164,235,000",
        bedrooms: 6,
        bathrooms: 3,
        area: "200m²"
    },
    {
        id: 5,
        slug: "grand-vista-villas",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=90",
        title: "Grand vista villas",
        address: "25 skyline boulevard, san diego",
        price: "PKR 197,630,000",
        bedrooms: 2,
        bathrooms: 1,
        area: "90m²"
    },
    {
        id: 6,
        slug: "imperial-pearl-villas",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=90",
        title: "Imperial pearl villas",
        address: "18 sapphire bay road, naples",
        price: "PKR 175,410,000",
        bedrooms: 4,
        bathrooms: 2,
        area: "130m²"
    }
];

export const blogs = [
    {
        id: 1,
        slug: "home-buying-tips",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=90",
        title: "Home buying tips",
        date: "Feb 20, 2025",
        category: "Tips"
    },
    {
        id: 2,
        slug: "boost-home-value",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90",
        title: "Boost home value",
        date: "Feb 18, 2025",
        category: "Guides"
    },
    {
        id: 3,
        slug: "mortgage-rates-update",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=90",
        title: "Mortgage rates update",
        date: "Feb 18, 2025",
        category: "Updates"
    },
    {
        id: 4,
        slug: "luxury-homes-defined",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=90",
        title: "Luxury homes defined",
        date: "Feb 17, 2025",
        category: "Insights"
    },
    {
        id: 5,
        slug: "smart-homes-future",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=90",
        title: "Smart homes future",
        date: "Feb 16, 2025",
        category: "Insights"
    },
    {
        id: 6,
        slug: "sell-property-fast",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=90",
        title: "Sell property fast",
        date: "Feb 15, 2025",
        category: "Advice"
    },
    {
        id: 7,
        slug: "top-investment-spots",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=90",
        title: "Top investment spots",
        date: "Feb 14, 2025",
        category: "Hotspots"
    },
    {
        id: 8,
        slug: "apartment-or-house",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=90",
        title: "Apartment or house?",
        date: "Feb 13, 2025",
        category: "Options"
    },
    {
        id: 9,
        slug: "staging-secrets-revealed",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=90",
        title: "Staging secrets revealed",
        date: "Feb 12, 2025",
        category: "Tricks"
    }
];

export const blogsData = [
    {
        id: 1,
        slug: "home-buying-tips",
        category: "Tips",
        title: "Top 5 tips for first-time home buyers navigating the market",
        excerpt: "Buying your first home is an exciting milestone, but it can also feel overwhelming with so many factors to consider. To help you make informed decisions, here are the top five tips for first-time home buyers to successfully navigate the real estate market.",
        author: {
            name: "Carl Sagan",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=90"
        },
        date: "January 15, 2025",
        readTime: "5 min",
        views: "4,578 Views",
        likes: 1358,
        comments: 42,
        featuredImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=90",
        content: {
            intro: [
                "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisl, tellus tincidunt. At feugiat sapien varius id.",
                "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus vitae, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, et donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat."
            ],
            quote: {
                text: "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisl, tellus tincidunt. At feugiat sapien varius id.",
                author: "Ariene McCoy, Golden Paws Breeders"
            },
            sections: [
                {
                    title: "1. Determine your budget and get pre-approved",
                    content: "Before you start house hunting, establish a clear budget by assessing your income, expenses, and savings. a mortgage pre-approval will help you understand how much you can afford and show sellers that you're a serious buyer. this step can also give you an advantage in competitive markets.",
                    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=90"
                },
                {
                    title: "2. Research the market and neighborhoods",
                    content: "Location is key when purchasing a home. research different neighborhoods based on factors like property values, crime rates, school districts, and future development plans. visiting potential areas at different times of the day can help you get a better sense of the community.",
                    bulletPoints: [
                        "Mi tincidunt elit, id quisque ligula ac diam, amet.",
                        "Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis.",
                        "Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.",
                        "Mauris posuere vulputate arcu amet, vitae nisl, tellus tincidunt.",
                        "At feugiat sapien varius id."
                    ],
                    secondList: [
                        "Mi tincidunt elit, id quisque ligula ac diam, amet.",
                        "Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis.",
                        "Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.",
                        "Mauris posuere vulputate arcu amet, vitae nisl, tellus tincidunt.",
                        "At feugiat sapien varius id."
                    ]
                },
                {
                    title: "3. Work with a trusted real estate agent",
                    content: "A knowledgeable real estate agent can be invaluable in your home-buying journey. they can provide market insights, negotiate on your behalf, and guide you through the complex paperwork. choose an agent who understands your needs and has experience in the area where you want to buy."
                },
                {
                    title: "4. Consider additional costs beyond the purchase price",
                    content: "Many first-time buyers focus only on the home's price, but additional costs like closing fees, property taxes, homeowners insurance, and maintenance should also be factored into your budget. understanding these expenses will prevent financial surprises down the road."
                },
                {
                    title: "5. Don't rush the decision",
                    content: "Buying a home is a significant investment, so take your time to evaluate your options. attend multiple showings, compare properties, and don't feel pressured to make an offer before you're ready. ensure the home meets your long-term needs and lifestyle before making a commitment."
                }
            ],
            conclusion: {
                title: "Final thoughts",
                content: "Navigating the housing market as a first-time buyer can be challenging, but with the right preparation and guidance, you can make confident decisions. by following these tips, you'll be well on your way to finding the perfect home. happy house hunting!"
            }
        }
    },
    {
        id: 2,
        slug: "boost-home-value",
        category: "Guides",
        title: "Simple ways to boost your home value before selling",
        excerpt: "Planning to sell your home? Small improvements can make a big difference in your property's market value. Discover practical strategies to enhance your home's appeal and maximize your selling price with these proven techniques.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=90"
        },
        date: "February 18, 2025",
        readTime: "6 min",
        views: "3,241 Views",
        likes: 892,
        comments: 28,
        featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
        content: {
            intro: [
                "Increasing your home's value doesn't always require expensive renovations. Strategic improvements can significantly impact buyer perception and your final selling price. Understanding which upgrades offer the best return on investment will help you make smart decisions.",
                "Whether you're preparing to list your property or simply want to maintain its worth, these actionable tips will guide you through cost-effective enhancements. From curb appeal to interior updates, small changes can yield impressive results in today's competitive real estate market."
            ],
            quote: {
                text: "The best home improvements are those that buyers notice immediately. First impressions matter tremendously, and investing in visible upgrades often delivers the highest returns when it's time to sell.",
                author: "Jessica Park, Premier Home Staging"
            },
            sections: [
                {
                    title: "1. Enhance curb appeal with landscaping",
                    content: "Your home's exterior is the first thing potential buyers see. Well-maintained landscaping creates an inviting atmosphere and suggests the property has been cared for. Fresh mulch, trimmed hedges, and colorful flowers can transform your home's appearance without breaking the bank.",
                    image: "https://images.unsplash.com/photo-1585128903994-85c29d0f2bfd?w=600&q=90"
                },
                {
                    title: "2. Update kitchen fixtures and hardware",
                    content: "The kitchen is often considered the heart of the home. Instead of a complete remodel, focus on affordable updates that modernize the space. Replacing cabinet hardware, updating light fixtures, and installing a new faucet can give your kitchen a fresh look.",
                    bulletPoints: [
                        "Replace outdated cabinet handles with modern designs",
                        "Install energy-efficient LED lighting fixtures",
                        "Update the kitchen faucet to a contemporary style",
                        "Consider painting cabinets for a complete refresh",
                        "Add a stylish backsplash to create visual interest"
                    ]
                },
                {
                    title: "3. Apply fresh paint throughout",
                    content: "Paint is one of the most cost-effective ways to transform your home. Neutral colors appeal to the broadest range of buyers and help them envision their own belongings in the space. Focus on high-traffic areas and rooms with outdated or bold color schemes.",
                    secondList: [
                        "Choose neutral tones like soft grays, beiges, or whites",
                        "Repaint trim and doors to look crisp and clean",
                        "Touch up any scuffs or marks on walls",
                        "Consider an accent wall in living spaces",
                        "Don't forget to paint the front door for instant appeal"
                    ]
                },
                {
                    title: "4. Improve bathroom aesthetics",
                    content: "Bathrooms significantly influence buying decisions. Simple upgrades like new mirrors, updated lighting, modern faucets, and fresh caulking can make these spaces feel cleaner and more luxurious. Consider re-grouting tiles and replacing worn shower curtains or doors."
                },
                {
                    title: "5. Maximize natural light",
                    content: "Bright, well-lit homes feel more spacious and welcoming. Clean windows inside and out, remove heavy curtains, and consider adding mirrors to reflect light. Replace dark or outdated window treatments with lighter options that allow sunlight to flood your rooms."
                },
                {
                    title: "6. Address necessary repairs",
                    content: "Deferred maintenance can be a red flag for buyers. Fix leaky faucets, repair cracked tiles, replace broken fixtures, and ensure all doors and windows operate smoothly. These small repairs demonstrate that the home has been well-maintained and is move-in ready."
                }
            ],
            conclusion: {
                title: "Final thoughts",
                content: "Boosting your home's value doesn't require a complete overhaul. By focusing on strategic improvements that enhance appearance and functionality, you can attract more buyers and command a higher price. Start with these cost-effective upgrades and watch your property's appeal soar. Remember, the goal is to help buyers envision themselves living in your space while showcasing your home's best features."
            }
        }
    },
    {
        id: 3,
        slug: "mortgage-rates-update",
        category: "Updates",
        title: "Understanding current mortgage rates and what they mean for you",
        excerpt: "Mortgage rates continue to fluctuate in response to economic conditions. Stay informed about current trends and learn how interest rate changes impact your home buying power and monthly payments.",
        author: {
            name: "David Thompson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=90"
        },
        date: "February 18, 2025",
        readTime: "7 min",
        views: "5,892 Views",
        likes: 1547,
        comments: 63,
        featuredImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=90",
        content: {
            intro: [
                "Mortgage rates play a crucial role in determining how much home you can afford. Even a small percentage change can significantly impact your monthly payment and the total amount you'll pay over the life of your loan. Understanding these rates helps you make informed decisions about when to buy or refinance.",
                "The mortgage market is influenced by various factors including Federal Reserve policies, inflation rates, and economic growth indicators. By staying informed about these trends, you can better time your home purchase and potentially save thousands of dollars over the term of your mortgage."
            ],
            quote: {
                text: "A difference of just half a percent in your mortgage rate can mean tens of thousands of dollars over a 30-year loan. That's why timing and shopping around for the best rate is so critical for homebuyers.",
                author: "Robert Chen, Mortgage Finance Advisor"
            },
            sections: [
                {
                    title: "1. Current rate environment overview",
                    content: "Today's mortgage rates reflect a complex interplay of economic factors. While rates have seen fluctuations, understanding the current landscape helps you gauge whether it's a good time to lock in a rate. Fixed-rate mortgages offer stability, while adjustable-rate mortgages may provide lower initial payments.",
                    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=90"
                },
                {
                    title: "2. Factors affecting mortgage rates",
                    content: "Multiple elements influence the rates lenders offer. Economic indicators, your credit score, down payment size, and loan type all play significant roles in determining your interest rate. Understanding these factors empowers you to improve your rate potential.",
                    bulletPoints: [
                        "Federal Reserve monetary policy decisions",
                        "Inflation rates and economic growth projections",
                        "Your personal credit score and financial history",
                        "The size of your down payment",
                        "Type and term length of the mortgage"
                    ]
                },
                {
                    title: "3. Fixed vs. adjustable-rate mortgages",
                    content: "Choosing between fixed and adjustable rates depends on your financial situation and how long you plan to stay in the home. Fixed-rate mortgages provide payment predictability, while ARMs offer lower initial rates that adjust after a specified period.",
                    secondList: [
                        "Fixed-rate mortgages maintain the same rate for the entire loan term",
                        "ARMs typically offer lower initial rates for 3, 5, 7, or 10 years",
                        "Consider your long-term plans when choosing loan types",
                        "Calculate break-even points for rate differences",
                        "Evaluate your risk tolerance for potential rate increases"
                    ]
                },
                {
                    title: "4. How to qualify for the best rates",
                    content: "Securing the lowest possible rate requires preparation. Lenders reward borrowers who present lower risk with better rates. Improving your credit score, saving a larger down payment, and reducing your debt-to-income ratio all contribute to rate qualification."
                },
                {
                    title: "5. The impact of rate changes on affordability",
                    content: "Even small rate increases affect purchasing power significantly. A one percent rate increase can reduce the home price you can afford by approximately ten percent. Understanding this relationship helps you set realistic expectations and budget accordingly."
                },
                {
                    title: "6. Timing your mortgage application",
                    content: "While predicting exact rate movements is impossible, monitoring trends helps you make strategic decisions. Consider getting pre-approved to lock in rates when they're favorable, and be prepared to act quickly when you find the right property at the right time."
                }
            ],
            conclusion: {
                title: "Final thoughts",
                content: "Mortgage rates are a critical factor in your home buying journey, but they're just one piece of the puzzle. Focus on improving your financial profile to qualify for the best rates, and work with experienced lenders who can guide you through various options. Remember, the 'perfect' rate may not exist, but the right rate for your situation and timeline certainly does. Stay informed, be prepared, and make decisions based on your personal circumstances rather than trying to time the market perfectly."
            }
        }
    },
    {
        id: 4,
        slug: "luxury-homes-defined",
        category: "Insights",
        title: "What defines a luxury home in today's market",
        excerpt: "Luxury real estate goes beyond square footage and price tags. Explore the characteristics, amenities, and features that distinguish high-end properties from standard homes in the modern market.",
        author: {
            name: "Victoria Laurent",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=90"
        },
        date: "February 17, 2025",
        readTime: "8 min",
        views: "4,156 Views",
        likes: 1203,
        comments: 45,
        featuredImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
        content: {
            intro: [
                "The definition of luxury in real estate has evolved significantly over recent years. Today's luxury homes combine architectural excellence, premium locations, cutting-edge technology, and exceptional amenities. These properties represent the pinnacle of residential living and cater to discerning buyers with sophisticated tastes.",
                "Understanding what qualifies as luxury varies by market and region. While a luxury home in one area might start at two million dollars, in another market it could be ten million or more. Beyond price, luxury homes share common characteristics that set them apart from conventional properties."
            ],
            quote: {
                text: "True luxury isn't just about opulence—it's about creating spaces that seamlessly blend beauty, functionality, and innovation. Modern luxury buyers seek homes that reflect their lifestyle and values while offering unparalleled comfort and convenience.",
                author: "Alexander Stone, Luxury Real Estate Specialist"
            },
            sections: [
                {
                    title: "1. Prime location and exclusivity",
                    content: "Location remains paramount in luxury real estate. Premium properties are situated in prestigious neighborhoods, offer stunning views, provide privacy, and ensure convenient access to cultural attractions, fine dining, and elite schools. Waterfront estates, mountain retreats, and urban penthouses all command luxury status through their enviable locations.",
                    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=90"
                },
                {
                    title: "2. Architectural significance and design",
                    content: "Luxury homes showcase exceptional architectural design and craftsmanship. Many feature work by renowned architects, incorporate unique design elements, and utilize premium building materials. Attention to detail, custom finishes, and timeless aesthetics distinguish these properties from standard constructions.",
                    bulletPoints: [
                        "Custom architectural designs by renowned firms",
                        "High ceilings, expansive windows, and open floor plans",
                        "Premium materials like marble, hardwood, and natural stone",
                        "Thoughtful interior design and expert craftsmanship",
                        "Seamless indoor-outdoor living spaces"
                    ]
                },
                {
                    title: "3. State-of-the-art technology integration",
                    content: "Modern luxury homes embrace smart home technology and automation. Integrated systems control lighting, climate, security, entertainment, and energy management through centralized interfaces. These technologies enhance convenience, efficiency, and security while future-proofing the property.",
                    secondList: [
                        "Whole-home automation and smart control systems",
                        "Advanced security with biometric access",
                        "Multi-room audio and home theater systems",
                        "Climate control with zone-specific management",
                        "Energy-efficient systems and renewable energy integration"
                    ]
                },
                {
                    title: "4. Resort-style amenities",
                    content: "Luxury properties offer amenities typically found at five-star resorts. Infinity pools, home gyms, wine cellars, private theaters, spa facilities, and gourmet kitchens elevate everyday living. These features provide entertainment, relaxation, and wellness opportunities without leaving home."
                },
                {
                    title: "5. Exceptional outdoor spaces",
                    content: "Outdoor living areas are essential to luxury properties. Professionally landscaped grounds, outdoor kitchens, fire features, water elements, and entertainment spaces extend the living area beyond interior walls. These spaces are designed for both intimate gatherings and large-scale entertaining."
                },
                {
                    title: "6. Sustainability and eco-conscious features",
                    content: "Today's luxury buyers increasingly prioritize sustainability. Solar panels, geothermal heating, rainwater harvesting, energy-efficient appliances, and eco-friendly building materials demonstrate environmental responsibility. These features reduce operating costs while minimizing environmental impact."
                }
            ],
            conclusion: {
                title: "Final thoughts",
                content: "Luxury homes represent the intersection of location, design, technology, and lifestyle. They offer more than just beautiful spaces—they provide experiences, convenience, and status. As the luxury market continues to evolve, properties that successfully balance timeless elegance with modern innovation will remain most desirable. Whether you're considering purchasing a luxury home or simply appreciating fine real estate, understanding these defining characteristics helps you recognize true quality and value in the high-end market."
            }
        }
    },
    {
        id: 5,
        slug: "smart-homes-future",
        category: "Insights",
        title: "The future of smart homes: technology shaping modern living",
        excerpt: "Smart home technology is rapidly evolving, transforming the way homeowners interact with their living spaces. Explore how automation, AI, and connected devices are redefining convenience, security, and efficiency in the modern home.",
        author: {
            name: "Emily Carter",
            avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=100&q=90"
        },
        date: "February 16, 2025",
        readTime: "7 min",
        views: "3,984 Views",
        likes: 1104,
        comments: 37,
        featuredImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=90",
        content: {
            intro: [
                "Smart home innovations have revolutionized how we manage daily tasks, optimize energy usage, and enhance household security. With AI-driven automation and interconnected devices, homeowners can enjoy unprecedented convenience and personalization.",
                "As technology continues advancing, today's smart features are only the beginning. Understanding what lies ahead helps homeowners and buyers make informed decisions about future-ready properties."
            ],
            quote: {
                text: "Smart homes are no longer a luxury—they're becoming the new standard. The next decade will bring even more intuitive and interconnected living experiences.",
                author: "Liam Brooks, Smart Home Architect"
            },
            sections: [
                {
                    title: "1. AI-powered home automation",
                    content: "Artificial intelligence is transforming home automation from simple commands to predictive, adaptive systems. Homes are beginning to anticipate user behaviors and optimize comfort, security, and efficiency automatically.",
                    image: "https://images.unsplash.com/photo-1581092160562-0400b1b5a1a7?w=600&q=90"
                },
                {
                    title: "2. Enhanced security features",
                    content: "Smart security systems now include biometric access, AI detection for unusual activity, and real-time monitoring. These advancements offer improved safety and peace of mind.",
                    bulletPoints: [
                        "Facial and fingerprint recognition systems",
                        "AI-powered cameras with motion analytics",
                        "Real-time mobile alerts and remote access",
                        "Smart locks with programmable guest access",
                        "Integrated emergency response triggers"
                    ]
                },
                {
                    title: "3. Energy efficiency through connected devices",
                    content: "Smart thermostats, lighting, and appliances help homeowners reduce energy waste and cut utility costs. Automation ensures optimal usage while maintaining comfort.",
                    secondList: [
                        "Adaptive lighting systems",
                        "Smart HVAC optimization",
                        "Automated energy-saving modes",
                        "Advanced appliance monitoring",
                        "Renewable energy integration"
                    ]
                },
                {
                    title: "4. Voice and gesture control",
                    content: "Homes are increasingly adopting hands-free control options. Voice assistants, gesture-based interfaces, and multi-device synchronization provide seamless interaction throughout the home."
                },
                {
                    title: "5. Interconnected ecosystems",
                    content: "Smart homes are evolving into unified ecosystems where devices communicate to create a cohesive living experience. This integration enhances convenience and unlocks advanced automation capabilities."
                }
            ],
            conclusion: {
                title: "Final thoughts",
                content: "The future of smart homes promises unparalleled efficiency, customization, and security. As AI and IoT continue accelerating, homeowners stand to benefit from systems that make living easier, safer, and more sustainable. Smart homes are not just the future—they're rapidly becoming the new normal."
            }
        }
    },
    {
        id: 6,
        slug: "sell-property-fast",
        category: "Advice",
        title: "How to sell your property fast: proven strategies that work",
        excerpt: "Selling a property quickly requires strategy, timing, and preparation. Explore effective methods to attract buyers, create strong impressions, and secure offers in record time.",
        author: {
            name: "Michael Reyes",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=90"
        },
        date: "February 15, 2025",
        readTime: "6 min",
        views: "4,102 Views",
        likes: 978,
        comments: 31,
        featuredImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=90",
        content: {
            intro: [
                "In a competitive housing market, selling your property quickly demands more than simply listing it online. Presentation, pricing strategy, and timing all play critical roles in attracting the right buyers.",
                "With the right preparation and marketing approach, you can significantly shorten your time on the market and secure stronger offers."
            ],
            quote: {
                text: "Properties that create an immediate positive impression tend to sell faster and command better prices. Buyers make decisions emotionally long before they rationalize the purchase.",
                author: "Olivia Hart, Real Estate Consultant"
            },
            sections: [
                {
                    title: "1. Price it strategically",
                    content: "Setting the right price from the start can dramatically affect buyer interest. Pricing slightly below market value often increases competition and accelerates offers.",
                    image: "https://images.unsplash.com/photo-1590595906931-81f8c2f6014b?w=600&q=90"
                },
                {
                    title: "2. Optimize presentation and staging",
                    content: "Proper staging highlights your home's potential and encourages buyers to envision themselves living there. Declutter, neutralize décor, and arrange furniture for flow and openness.",
                    bulletPoints: [
                        "Declutter and remove personal items",
                        "Use neutral color palettes",
                        "Highlight natural light",
                        "Rearrange furniture for open space",
                        "Add modern décor for warmth"
                    ]
                },
                {
                    title: "3. Invest in high-quality listing photos",
                    content: "Professional photography is essential. Buyers often make decisions based on online impressions before visiting the property.",
                    secondList: [
                        "Use wide-angle lenses for spaciousness",
                        "Capture rooms from multiple angles",
                        "Showcase standout features",
                        "Ensure proper lighting",
                        "Include exterior and neighborhood shots"
                    ]
                },
                {
                    title: "4. Market aggressively",
                    content: "Use multiple channels for exposure including listing sites, social media, email campaigns, and neighborhood advertising. More visibility means faster offers."
                },
                {
                    title: "5. Make your home move-in ready",
                    content: "Buyers prefer properties requiring minimal work. Repair minor issues, update outdated fixtures, and ensure everything is clean and functioning properly."
                }
            ],
            conclusion: {
                title: "Final thoughts",
                content: "Selling a property fast requires preparation, strategy, and strong marketing. By pricing correctly, presenting your home effectively, and maximizing exposure, you can accelerate the selling process and achieve a strong return. The goal is simple: make your property the easiest and most appealing option for buyers."
            }
        }
    },
    {
        id: 7,
        slug: "top-investment-spots",
        category: "Hotspots",
        title: "Top real estate investment hotspots to watch in 2025",
        excerpt: "Real estate investors are constantly seeking markets with strong growth potential, appreciation rates, and rental demand. Discover the top hotspots that offer promising returns and long-term value in 2025.",
        author: {
            name: "Jonathan Pierce",
            avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=90"
        },
        date: "February 14, 2025",
        readTime: "7 min",
        views: "6,204 Views",
        likes: 1623,
        comments: 54,
        featuredImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=90",
        content: {
            intro: [
                "The real estate landscape continues to shift as economic conditions, migration patterns, and industry trends reshape property markets. Investors looking to maximize returns must stay ahead of these changes and identify markets with strong growth potential.",
                "From emerging urban hubs to fast-growing suburban communities, 2025 presents several standout opportunities for both seasoned and new investors."
            ],
            quote: {
                text: "Investment success is about timing, location, and understanding market fundamentals. The fastest-growing markets often combine strong job growth, affordability, and rising demand.",
                author: "Melanie Grant, Real Estate Investment Analyst"
            },
            sections: [
                {
                    title: "1. Rapidly growing metropolitan areas",
                    content: "Major cities experiencing population booms and job market expansion continue attracting investors. These hotspots offer robust rental demand and consistent appreciation.",
                    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=600&q=90"
                },
                {
                    title: "2. Emerging secondary cities",
                    content: "Secondary cities are gaining traction as affordability in major metros declines. These markets offer lower entry points with strong appreciation potential.",
                    bulletPoints: [
                        "Growing job sectors and diversified economies",
                        "Strong rental demand from young professionals",
                        "Infrastructure expansion and development",
                        "Affordable entry-priced properties",
                        "Higher cap rates compared to major cities"
                    ]
                },
                {
                    title: "3. Suburban hotspots",
                    content: "Suburban areas with strong schools, improved transportation, and modern amenities are seeing increased demand, especially among families.",
                    secondList: [
                        "High-quality school districts",
                        "New residential developments",
                        "Improved connectivity to major cities",
                        "Lower cost of living",
                        "Strong long-term appreciation trends"
                    ]
                },
                {
                    title: "4. Vacation rental markets",
                    content: "Tourist-driven markets continue performing well for investors focused on short-term rentals. These areas offer high seasonal occupancy and strong cash flow."
                },
                {
                    title: "5. Opportunity zones",
                    content: "Government-designated opportunity zones offer tax incentives for investors while supporting community development. These areas can provide high upside for long-term investors willing to participate early."
                }
            ],
            conclusion: {
                title: "Final thoughts",
                content: "The best investment markets balance stability, strong demand, and long-term growth. By understanding the underlying drivers of each hotspot, investors can make informed decisions that maximize both cash flow and appreciation. 2025 offers abundant opportunities—success depends on acting strategically and staying ahead of emerging trends."
            }
        }
    },
    {
        id: 8,
        slug: "apartment-or-house",
        category: "Options",
        title: "Apartment or house: which is the better choice for your lifestyle?",
        excerpt: "Choosing between an apartment and a house can be challenging for buyers and renters alike. Explore the pros and cons of each option and determine which one aligns best with your lifestyle, budget, and long-term goals.",
        author: {
            name: "Rebecca Lin",
            avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=90"
        },
        date: "February 13, 2025",
        readTime: "5 min",
        views: "3,754 Views",
        likes: 1021,
        comments: 29,
        featuredImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=90",
        content: {
            intro: [
                "Selecting between an apartment and a house is a major decision influenced by lifestyle preferences, financial considerations, and long-term plans. Each option offers unique benefits and potential drawbacks.",
                "Understanding these differences helps you make a confident choice that aligns with your budget, comfort needs, and future aspirations."
            ],
            quote: {
                text: "The right home is the one that supports your lifestyle and goals—not the one that simply looks appealing on the surface.",
                author: "Samantha Rhodes, Housing Market Specialist"
            },
            sections: [
                {
                    title: "1. Space and layout considerations",
                    content: "Houses typically offer more square footage, larger yards, and greater layout flexibility. Apartments offer compact living with efficient designs and convenient shared amenities.",
                    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=90"
                },
                {
                    title: "2. Cost and affordability",
                    content: "Apartments generally come with lower upfront costs and reduced maintenance responsibilities. Houses may require higher purchases or rents but offer increased autonomy and long-term value potential.",
                    bulletPoints: [
                        "Lower utility costs for apartments",
                        "Higher maintenance responsibilities for houses",
                        "Condos may include HOA fees",
                        "Houses offer greater appreciation over time",
                        "Apartments are often more budget-friendly initially"
                    ]
                },
                {
                    title: "3. Maintenance and responsibilities",
                    content: "Apartment living often reduces maintenance burdens due to building management support. Homeowners handle more repairs and upkeep but gain full control over their property.",
                    secondList: [
                        "Maintenance-free amenities for apartments",
                        "Homeowners manage yard and structural upkeep",
                        "Greater freedom to customize houses",
                        "Shared responsibility in condo buildings",
                        "Time commitment differs significantly"
                    ]
                },
                {
                    title: "4. Lifestyle and community",
                    content: "Apartments tend to offer easier access to urban amenities, social environments, and shared spaces. Houses provide privacy, larger outdoor areas, and a quieter atmosphere."
                },
                {
                    title: "5. Long-term goals",
                    content: "Your future plans—family, career, investment objectives—play a major role. Apartments suit short-term flexibility, while houses better serve long-term stability and wealth-building."
                }
            ],
            conclusion: {
                title: "Final thoughts",
                content: "Choosing between an apartment and a house ultimately comes down to lifestyle priorities, budget considerations, and long-term intentions. Evaluate what matters most to you and select the option that best supports your goals and daily comfort. The right choice is the one that aligns with your vision for the life you want to build."
            }
        }
    },
    {
        id: 9,
        slug: "staging-secrets-revealed",
        category: "Tricks",
        title: "Home staging secrets that make buyers fall in love instantly",
        excerpt: "Discover the strategies professional stagers use to create irresistible spaces that captivate buyers the moment they walk in.",
        author: {
            name: "Sophie Daniels",
            avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&q=90"
        },
        date: "February 12, 2025",
        readTime: "5 min",
        views: "4,998 Views",
        likes: 1421,
        comments: 48,
        featuredImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=90",
        content: {
            intro: [
                "Staging can transform a property’s appeal and dramatically increase buyer interest. The goal is simple: create an emotional connection the moment someone steps inside.",
                "Professional stagers use a blend of design psychology, layout optimization, and subtle visual cues to make homes feel warm, spacious, and move-in ready."
            ],
            quote: {
                text: "Great staging makes a home feel like a lifestyle upgrade—not just a space. Buyers purchase the feeling more than the floor plan.",
                author: "Rebecca Shaw, Lead Home Stager"
            },
            sections: [
                {
                    title: "1. Mastering the first impression",
                    content: "Entryways set the tone for the entire viewing experience. Clean, well-lit entry spaces invite buyers to explore further.",
                    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=90"
                },
                {
                    title: "2. Using color psychology effectively",
                    content: "Neutral palettes broaden appeal and make spaces feel larger. Strategic pops of color draw attention to key features.",
                    bulletPoints: [
                        "Use soft neutrals for walls",
                        "Add accent pillows for visual warmth",
                        "Incorporate plants for freshness",
                        "Use art to create focal points",
                        "Avoid bold, polarizing colors"
                    ]
                },
                {
                    title: "3. Declutter and optimize layouts",
                    content: "Stagers focus on flow, ensuring pathways are open and furniture enhances usability rather than crowding rooms.",
                    secondList: [
                        "Remove excess personal items",
                        "Use appropriately sized furniture",
                        "Highlight natural light sources",
                        "Float furniture to improve flow",
                        "Create defined zones in open layouts"
                    ]
                },
                {
                    title: "4. Highlighting key features",
                    content: "Fireplaces, large windows, and architectural details must be showcased to maximize perceived value."
                },
                {
                    title: "5. Elevating with scents and ambiance",
                    content: "Subtle scents, soft lighting, and curated music influence buyer emotions and elevate the experience."
                }
            ],
            conclusion: {
                title: "Final thoughts",
                content: "Staging transforms a property from a simple living space into an aspirational vision. The right techniques create emotional impact, boost perceived value, and accelerate offers. A well-staged home doesn’t just look better—it sells better."
            }
        }
    }
];

export const blogsSection = [
    {
        id: 1,
        slug: "home-buying-tips",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=90",
        title: "Home buying tips",
        date: "Feb 20, 2025",
        category: "Tips",
        categoryColor: "bg-purple-100 text-purple-600"
    },
    {
        id: 2,
        slug: "boost-home-value",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90",
        title: "Boost home value",
        date: "Feb 18, 2025",
        category: "Guides",
        categoryColor: "bg-blue-100 text-blue-600"
    },
    {
        id: 3,
        slug: "mortgage-rates-update",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=90",
        title: "Mortgage rates update",
        date: "Feb 18, 2025",
        category: "Updates",
        categoryColor: "bg-green-100 text-green-600"
    }
];

export const faqs = [
    {
        question: "What are the contact numbers of Fast Real Estate? ",
        answer: "You can contact us either through phone, WhatsApp, email, live chat, or pay us a visit in one of our offices. We have got our support team ready to help you with your questions on property, travel, visa and consultancy services."
    },
    {
        question: "What are your working hours?",
        answer: "Our offices are available between Monday and Saturday 9:00 AM and 7:00 PM. There are live chat and online inquiry forms which are 24/7 convenient."
    },
    {
        question: "What is the way I arrange a consultation?",
        answer: "To book a consultation, you may complete contact form, make an appointment online, and directly contact our support team.."
    },
    {
        question: "Do you offer services throughout the U.S/ globally?",
        answer: "Yes, Fast Real Estate offers services in the country and it offers international travel, visa and consultancy services."
    },
    {
        question: "The level of security of my personal data is how secure is it?",
        answer: "To allow the security and confidentiality of client information, we adhere to tough data privacy policies and encrypt sensitive information."
    },
];

export const testimonials = [
    {
        id: 1,
        quote: "Fast Real Estate has assisted me to locate my dream apartment in a few weeks. It went on very professionally and without difficulties! ",
        name: " Sarah M.",
        role: "Buyer",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=90"
    },
    {
        id: 2,
        quote: "They were very helpful in advising me on how to buy a business property in a foreign country with visa advice. Highly recommended",
        name: "Ahmed K.",
        role: "Investor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90"
    },
    {
        id: 3,
        quote: "I used Fast Real Estate, and their staff did everything effectively to sell my villa. Indeed an honest real estate partner.",
        name: "Priya S.",
        role: "Seller",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=90"
    }
];

export const Homeservices = [
    {
        icon: Plane,
        title: "Ticketing Services",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
        alt: "Travel and transportation services",
        features: [
            "Escorting and helping with property viewing, travelling, and moving",
            "Reservation services for local and international customers"
        ],
        gradient: "from-[#009689]/80 to-[#00b8a9]/80"
    },
    {
        icon: FileText,
        title: "Visa Services",
        image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&q=80",
        alt: "Visa and documentation services",
        features: [
            "Assistance for foreign clients who want to purchase property overseas",
            "Support on visa paperwork and legal services"
        ],
        gradient: "from-[#009689]/80 to-teal-500/80"
    },
    {
        icon: Briefcase,
        title: "Consultancy Services",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        alt: "Real estate consultancy and planning",
        features: [
            "Professional opinions regarding investment in real estate, appraisal of property, and market analysis",
            "Portfolio planning and legal advice to make informed decisions"
        ],
        gradient: "from-emerald-500/80 to-[#009689]/80"
    },
    {
        icon: Home,
        title: "Real Estate Services",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        alt: "Comprehensive real estate services",
        features: [
            "Full solutions for purchasing, selling and renting properties",
            "Transaction management, market analysis and professional negotiation"
        ],
        gradient: "from-teal-500/80 to-cyan-500/80"
    }
];

export const benefits = [
    {
        icon: Globe,
        title: "International Reach",
        description: "Supporting clients worldwide with comprehensive property solutions"
    },
    {
        icon: Briefcase,
        title: "End-to-End Support",
        description: "From initial consultation to final transaction, we're with you every step"
    },
    {
        icon: TrendingUp,
        title: "Investment Expertise",
        description: "Professional market analysis and portfolio planning for maximum returns"
    }
];

// Dashboard statistics data
export const dashboardStats = [
    {
        title: "Total Properties",
        value: "9",
        icon: "Building2",
        description: "Properties in portfolio",
        change: "+2 from last month",
        changeType: "positive" as const
    },
    {
        title: "Portfolio Value",
        value: "PKR 1.6B",
        icon: "TrendingUp",
        description: "Total property value",
        change: "+12% from last month",
        changeType: "positive" as const
    },
    {
        title: "Average Price",
        value: "PKR 178M",
        icon: "Home",
        description: "Average property value",
        change: "+5% from last month",
        changeType: "positive" as const
    },
    {
        title: "Total Rooms",
        value: "37",
        icon: "Users",
        description: "Combined bedrooms",
        change: "Across all properties",
        changeType: "neutral" as const
    }
];

// Quick actions for dashboard
export const dashboardActions = [
    {
        label: "Add New Property",
        variant: "default" as const,
        href: "/dashboard/properties/new"
    },
    {
        label: "View All Properties",
        variant: "outline" as const,
        href: "/dashboard/properties"
    },
    {
        label: "Generate Report",
        variant: "outline" as const,
        href: "/dashboard/analytics"
    }
];

// Property Type Distribution Chart Data
export const propertyTypeData = [
    { type: "villa", count: 5, fill: "var(--color-villa)" },
    { type: "apartment", count: 2, fill: "var(--color-apartment)" },
    { type: "house", count: 1, fill: "var(--color-house)" },
    { type: "condo", count: 1, fill: "var(--color-condo)" }
];

export const propertyTypeConfig = {
    count: {
        label: "Properties",
    },
    villa: {
        label: "Villa",
        color: "var(--chart-1)",
    },
    apartment: {
        label: "Apartment",
        color: "var(--chart-2)",
    },
    house: {
        label: "House",
        color: "var(--chart-3)",
    },
    condo: {
        label: "Condo",
        color: "var(--chart-4)",
    }
};

// Property Status Chart Data
export const propertyStatusData = [
    { status: "available", count: 6, fill: "var(--color-available)" },
    { status: "rented", count: 2, fill: "var(--color-rented)" },
    { status: "sold", count: 1, fill: "var(--color-sold)" }
];

export const propertyStatusConfig = {
    count: {
        label: "Properties",
    },
    available: {
        label: "Available",
        color: "var(--chart-1)",
    },
    rented: {
        label: "Rented",
        color: "var(--chart-2)",
    },
    sold: {
        label: "Sold",
        color: "var(--chart-3)",
    }
};

// Location Distribution Chart Data
export const locationDistributionData = [
    { location: "miami", count: 3, fill: "var(--color-miami)" },
    { location: "losAngeles", count: 1, fill: "var(--color-losAngeles)" },
    { location: "sanDiego", count: 1, fill: "var(--color-sanDiego)" },
    { location: "naples", count: 1, fill: "var(--color-naples)" },
    { location: "other", count: 3, fill: "var(--color-other)" }
];

export const locationDistributionConfig = {
    count: {
        label: "Properties",
    },
    miami: {
        label: "Miami",
        color: "var(--chart-1)",
    },
    losAngeles: {
        label: "Los Angeles",
        color: "var(--chart-2)",
    },
    sanDiego: {
        label: "San Diego",
        color: "var(--chart-3)",
    },
    naples: {
        label: "Naples",
        color: "var(--chart-4)",
    },
    other: {
        label: "Other",
        color: "var(--chart-5)",
    }
};

// Price Range Distribution Chart Data
export const priceRangeData = [
    { range: "under150M", count: 1, fill: "var(--color-under150M)" },
    { range: "150to175M", count: 3, fill: "var(--color-150to175M)" },
    { range: "175to190M", count: 3, fill: "var(--color-175to190M)" },
    { range: "over190M", count: 2, fill: "var(--color-over190M)" }
];

export const priceRangeConfig = {
    count: {
        label: "Properties",
    },
    under150M: {
        label: "Under 150M",
        color: "var(--chart-1)",
    },
    "150to175M": {
        label: "150M - 175M",
        color: "var(--chart-2)",
    },
    "175to190M": {
        label: "175M - 190M",
        color: "var(--chart-3)",
    },
    over190M: {
        label: "Over 190M",
        color: "var(--chart-4)",
    }
};
