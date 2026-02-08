import React from 'react';
import { Shield, Clock, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import Section from '../layout/Section';
import { marketingContent } from '@/content/marketingContent';

const iconMap = {
  Shield,
  Clock,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
};

export default function WhyChooseUsSection() {
  return (
    <Section id="why-choose-us">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="mb-4 font-bold">Why Choose VRShivaji Construction</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We combine expertise, dedication, and innovation to deliver exceptional results on every
          project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {marketingContent.differentiators.map((item, index) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          return (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
