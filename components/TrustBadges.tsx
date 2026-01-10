import { Settings, CreditCard, Headset, ShieldCheck, Calculator } from "lucide-react";
import { cn } from "@/components/lib/utils";

const badges = [
  {
    id: 1,
    icon: Settings,
    title: "HIGH QUALITY",
    subtitle: "Best Digital Printing",
    color: "text-[#FDB913]", // Yellow/Gold brand color
  },
  {
    id: 2,
    icon: CreditCard,
    title: "ONLINE PAYMENT",
    subtitle: "Payment methods",
    color: "text-blue-600",
  },
  {
    id: 3,
    icon: Headset,
    title: "24/7 SUPPORT",
    subtitle: "Help Desk",
    color: "text-[#FDB913]", // Yellow/Gold brand color
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "100% SAFE",
    subtitle: "View our benefits",
    color: "text-green-600",
  },
  {
    id: 5,
    icon: Calculator,
    title: "BEST PRICING",
    subtitle: "Get a Price Quote",
    color: "text-[#FDB913]", // Yellow/Gold brand color
  },
];

export default function TrustBadges() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Optional Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Why Choose XFast Group?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine quality, reliability, and innovation to deliver exceptional printing solutions
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className={cn(
                  "group flex flex-col items-center text-center p-6 bg-background rounded-lg border border-border shadow-sm",
                  "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  "hover:shadow-[#FDB913]/20"
                )}
              >
                {/* Icon */}
                <div className={cn(
                  "mb-4 transition-transform duration-300 group-hover:scale-110",
                  badge.color
                )}>
                  <Icon className="h-12 w-12 md:h-16 md:w-16" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm md:text-base mb-2 uppercase tracking-wide">
                  {badge.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs md:text-sm text-muted-foreground">
                  {badge.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">1000+</span>
              <span>Happy Clients</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">5-Star</span>
              <span>Rated Service</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Since 2020</span>
              <span>Trusted Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
