import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <div className="font-heading text-2xl font-bold text-primary mb-4">
              Fast <span className="text-foreground">Printing</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Leading printing and packaging company in Pakistan. We deliver quality, speed, and sustainability in every project.
            </p>
            <div className="flex gap-3">
              <Link href="https://facebook.com" target="_blank" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/digital-printing" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Printing
                </Link>
              </li>
              <li>
                <Link href="/offset-printing" className="text-muted-foreground hover:text-primary transition-colors">
                  Offset Printing
                </Link>
              </li>
              <li>
                <Link href="/custom-packaging" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Packaging
                </Link>
              </li>
              <li>
                <Link href="/brand-design" className="text-muted-foreground hover:text-primary transition-colors">
                  Design Services
                </Link>
              </li>
              <li>
                <Link href="" className="text-primary hover:underline font-medium">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#FDB913] flex-shrink-0 mt-0.5" />
                <Link
                  href="https://maps.google.com/?q=101A+J1+Block+Valencia+Town+Main+Defence+Road+Lahore+Pakistan"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  101A, J1 Block, Valencia Town<br />
                  Main Defence Road, Lahore, Pakistan
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-[#FDB913] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <Link href="tel:+923252467463" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    0325 2467463 (WhatsApp)
                  </Link>
                  <Link href="tel:+923395447890" className="text-muted-foreground hover:text-primary transition-colors">
                    0339 5447890
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FDB913] flex-shrink-0" />
                <Link href="mailto:xfastgroup001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  xfastgroup001@gmail.com
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Business Hours:</p>
              <p className="text-sm">Mon-Sat: 10:00 AM - 8:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-lg mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get printing tips, special offers, and industry insights
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Payment/Certification Icons */}
        <div className="border-t border-border pt-8">
          <div className="space-y-4">
            {/* Security & Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs font-medium text-muted-foreground">SSL Secure</span>
              </div>
              <div className="px-3 py-2 border border-border rounded-md bg-background">
                <span className="text-xs font-medium text-muted-foreground">FSC Certified</span>
              </div>
              <div className="px-3 py-2 border border-border rounded-md bg-background">
                <span className="text-xs font-medium text-muted-foreground">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background">
                <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs font-medium text-muted-foreground">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background">
                <svg className="h-5 w-5 text-[#FDB913]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-medium text-muted-foreground">100% Guaranteed</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 pt-4">
              <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background">
                <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v2h16V6H4zm0 4v8h16v-8H4z"/>
                </svg>
                <span className="text-xs font-medium text-muted-foreground">Credit/Debit Card</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background">
                <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                </svg>
                <span className="text-xs font-medium text-muted-foreground">Bank Transfer</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background">
                <svg className="h-5 w-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
                <span className="text-xs font-medium text-muted-foreground">Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
            <p>© 2025 Fast Printing & Packaging. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
