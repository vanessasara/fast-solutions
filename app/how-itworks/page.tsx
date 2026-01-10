import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Palette, Printer, CheckCircle, Truck, ArrowRight, FileCheck, MessageSquare, Sparkles } from "lucide-react";

export const metadata = {
  title: "How It Works - Our Process | Fast Printing & Packaging",
  description: "Discover our streamlined 5-step printing process from consultation to delivery. Transparent, professional, and designed for your success.",
  keywords: "printing process, how printing works, custom printing process, packaging process, print ordering",
};

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Consultation & Quote",
    description: "Share your vision with our expert team",
    details: [
      "Free consultation with printing specialists",
      "24-hour quote response time",
      "No obligation - just honest advice",
      "Help choosing the right materials",
    ],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    imageAlt: "Customer consultation and planning session",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Approval",
    description: "Review mockups and approve every detail",
    details: [
      "Professional design support included FREE",
      "Digital mockups before production",
      "Unlimited revisions until perfect",
      "Expert guidance on best practices",
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    imageAlt: "Graphic designer working on print designs",
  },
  {
    number: "03",
    icon: Printer,
    title: "Production",
    description: "Printing with state-of-the-art equipment",
    details: [
      "Latest digital and offset printing technology",
      "Premium quality materials",
      "Expert craftsmen oversee every job",
      "Real-time production updates",
    ],
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=600&fit=crop",
    imageAlt: "Modern printing press in operation",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Quality Control",
    description: "Rigorous inspection ensures perfection",
    details: [
      "Every piece individually inspected",
      "Color accuracy verification",
      "Material and finish quality checks",
      "100% satisfaction guaranteed",
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
    imageAlt: "Quality control inspection of printed materials",
  },
  {
    number: "05",
    icon: Truck,
    title: "Delivery",
    description: "Fast, secure shipping nationwide",
    details: [
      "Secure packaging to prevent damage",
      "Real-time tracking available",
      "Delivery to your doorstep",
      "On-time delivery guaranteed",
    ],
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    imageAlt: "Secure delivery of printed products",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our streamlined 5-step process makes getting professional printing simple,
              transparent, and stress-free. From your first call to final delivery, we're with you every step.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#FDB913]" />
                <span className="font-medium">5-12 Days Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-[#FDB913]" />
                <span className="font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-[#FDB913]" />
                <span className="font-medium">100% Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Detailed */}
      {steps.map((step, index) => (
        <section
          key={step.number}
          className={index % 2 === 0 ? "py-16 md:py-20" : "py-16 md:py-20 bg-muted/30"}
        >
          <div className="container mx-auto px-4">
            <div className={`grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{step.description}</p>

                <div className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FDB913] mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl ${
                index % 2 === 1 ? 'md:order-1' : ''
              }`}>
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Timeline Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Timeline Overview
            </h2>
            <p className="text-muted-foreground text-lg">
              Typical turnaround times for common projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">3-5</div>
                <div className="text-lg font-semibold mb-3">Business Days</div>
                <p className="text-sm text-muted-foreground">
                  Business cards, flyers, brochures
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">7-10</div>
                <div className="text-lg font-semibold mb-3">Business Days</div>
                <p className="text-sm text-muted-foreground">
                  Custom packaging, larger orders
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">1-2</div>
                <div className="text-lg font-semibold mb-3">Business Days</div>
                <p className="text-sm text-muted-foreground">
                  Rush orders (additional fees apply)
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Timelines may vary based on order complexity and current workload. Rush services available for urgent needs.
          </p>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Our Process Works
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                  <p className="text-muted-foreground">
                    You'll know exactly what to expect at every stage. No surprises, no hidden steps.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Communication</h3>
                  <p className="text-muted-foreground">
                    Regular updates keep you informed. You can reach us anytime with questions or changes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Quality Control</h3>
                  <p className="text-muted-foreground">
                    Every project goes through rigorous checks before leaving our facility.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Your Approval</h3>
                  <p className="text-muted-foreground">
                    Nothing goes to print without your explicit approval. You're in control.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Experience our professional process firsthand. Get started with a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/request-quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
