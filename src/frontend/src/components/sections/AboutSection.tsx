import React from 'react';
import { Target, Eye, MapPin } from 'lucide-react';
import Section from '../layout/Section';

export default function AboutSection() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="mb-6 font-bold">About VRShivaji Construction</h2>
          <p className="text-lg text-muted-foreground mb-6">
            VRShivaji Construction is a leading construction company dedicated to delivering
            exceptional building solutions across residential and commercial sectors. With years of
            experience and a team of skilled professionals, we transform visions into reality.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Our commitment to quality, safety, and customer satisfaction has made us a trusted name
            in the construction industry. We pride ourselves on completing projects on time, within
            budget, and to the highest standards.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver superior construction services that exceed client expectations through
                innovation, quality craftsmanship, and unwavering commitment to excellence.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and preferred construction partner, recognized for our
                integrity, quality, and sustainable building practices.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Service Area</h3>
              <p className="text-muted-foreground">
                We proudly serve clients across the region, bringing our expertise and dedication to
                communities throughout the area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
