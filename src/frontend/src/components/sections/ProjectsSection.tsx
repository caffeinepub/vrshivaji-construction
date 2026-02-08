import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Section from '../layout/Section';
import { marketingContent } from '@/content/marketingContent';

export default function ProjectsSection() {
  return (
    <Section id="projects" variant="muted">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="mb-4 font-bold">Our Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our portfolio of successfully completed projects that showcase our commitment to
          quality and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {marketingContent.projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-construction transition-shadow">
            <div className="aspect-video bg-muted relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <span className="text-4xl font-bold text-muted-foreground/30">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between gap-2 mb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <Badge variant="secondary">{project.type}</Badge>
              </div>
              <CardDescription className="text-sm text-muted-foreground">
                {project.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
