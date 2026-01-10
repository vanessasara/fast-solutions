import { Shield, Award, Leaf, CheckCircle, Lock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    icon: Shield,
    title: "100% Satisfaction",
    subtitle: "Money-Back Guarantee",
    color: "text-green-600",
  },
  {
    icon: Award,
    title: "ISO 9001 Certified",
    subtitle: "Quality Management",
    color: "text-blue-600",
  },
  {
    icon: Leaf,
    title: "FSC Certified",
    subtitle: "Eco-Friendly Materials",
    color: "text-emerald-600",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    subtitle: "SSL Encrypted",
    color: "text-purple-600",
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    subtitle: "Every Print Inspected",
    color: "text-[#FDB913]",
  },
  {
    icon: TrendingUp,
    title: "Trusted by 1000+",
    subtitle: "Business Clients",
    color: "text-[#FDB913]",
  },
];

export default function CertificationsBadges() {
  return (
    <section className="py-12 md:py-16 border-y bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-md"
              >
                <CardContent className="p-4 text-center">
                  <div className={`inline-flex p-3 rounded-full bg-muted mb-3 ${cert.color}`}>
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-sm mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {cert.subtitle}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
