import FeaturedPropertySection from "@/components/FeaturedPropertySection";
import PropertyCategoriesCarousel from "../../../components/property-buying/PropertyCategoriesCarousel";
import Header from "@/components/property-buying/Header";
import Introduction from "@/components/property-buying/Introduction";
import PropertDetails from "@/components/property-buying/PropertDetails";
import MortageAssistance from "@/components/property-buying/MortageAssistance";
import ContactCTA from "@/components/property-buying/ContactCTA";
import FAQSection from "@/components/FAQsection";
import BuyingFaq from "@/components/property-buying/BuyingFaq";

export default function FastRealEstatePage() {
  return (
    <div className="bg-white text-gray-900 mt-10">
      {/* Hero Section */}
     <Header/>
      {/* Introduction */}
      <Introduction/>
      {/* Property Categories */}
      <PropertyCategoriesCarousel/>

      {/* Featured Properties */}
      <FeaturedPropertySection/>

      {/* Property Details */}
     <PropertDetails/>

      {/* Mortgage Assistance */}
     <MortageAssistance/>
     <BuyingFaq/>

      {/* Contact CTA */}
     <ContactCTA/>
    </div>
  );
}
