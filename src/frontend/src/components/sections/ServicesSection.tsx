import React from 'react';
import { Building2, Home, Hammer, Wrench, PaintBucket, Ruler } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Section from '../layout/Section';
import { marketingContent } from '@/content/marketingContent';

const iconMap = {
  Building2,
  Home,
  Hammer,
  Wrench,
  PaintBucket,
  Ruler,
};

export default function ServicesSection() {
  return (
    <Section id="services" variant="muted">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="mb-4 font-bold">Our Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive construction solutions tailored to meet your unique needs and exceed your
          expectations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {marketingContent.services.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          return (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
