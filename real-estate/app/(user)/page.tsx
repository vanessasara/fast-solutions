import BlogSection from "@/components/BlogSection";
import CategoriesSection from "@/components/CategoriesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQsection";
import FeaturedPropertySection from "@/components/FeaturedPropertySection";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertySection";
import ServiceHighlights from "@/components/ServiceHighlights";
import TestimonialsSection from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedPropertySection />
      <PropertiesSection />
      <ServiceHighlights/>
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <FAQSection />
    </div>
  );
}
