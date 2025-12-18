
import SellPropertyHero from '@/components/property-selling/SellPropertyHero';
import SellPropertyFormSection from '@/components/property-selling/SellPropertyFormSection';
import ListingPackages from '@/components/property-selling/ListingPackages';
import ServicesShowcase from '@/components/property-selling/ServicesShowcase';

export default function FastRealEstate() {

  return (
    <div>
    <SellPropertyHero/>
    <SellPropertyFormSection/>
    <ListingPackages/>
    <ServicesShowcase/>
    </div>
  )
}
