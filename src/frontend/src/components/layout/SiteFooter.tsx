import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export default function SiteFooter() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">VRShivaji Construction</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building excellence with quality, integrity, and innovation since our inception.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Our Services</h3>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Residential Construction</span>
              <span className="text-sm text-muted-foreground">Commercial Projects</span>
              <span className="text-sm text-muted-foreground">Renovations</span>
              <span className="text-sm text-muted-foreground">Project Management</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@vrshivaji.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Your City, State, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with ❤️ using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
