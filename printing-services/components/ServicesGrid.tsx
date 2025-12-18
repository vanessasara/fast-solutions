import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Package, Palette, Sparkles, Maximize, Leaf, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Digital Printing",
    description: "Fast, flexible, high-quality printing for short runs and quick turnarounds",
    href: "services/digital-printing",
  },
  {
    icon: Printer,
    title: "Offset Printing",
    description: "Large volume printing with consistent quality and cost-effectiveness",
    href: "services/offset-printing",
  },
  {
    icon: Package,
    title: "Screen Printing",
    description: "Screen printing for t-shirts, promotional items, signage, and specialty applications. Perfect for bold designs and unique materials.",
    href: "services/screen-printing",
  },
  {
    icon: Maximize,
    title: "Large Format Printing",
    description: "Banners, posters, billboards, and exhibition displays that make an impact",
    href: "services/large-format-printing",
  },
  {
    icon: Palette,
    title: "Labels Stickers",
    description: "Custom labels and stickers in any shape, size, or material. Perfect for products, packaging, and promotions.",
    href: "services/labels-stickers",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "Sustainable materials, recyclable packaging, and environmentally responsible printing",
    href: "services/eco-friendly-packaging",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Printing & Packaging Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to delivery, we provide end-to-end solutions for all your printing and packaging needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
                <Link href={service.href}>
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                  <span className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all group-hover:underline">Learn More

                  <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
              </CardContent>
            </Card>
                </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
