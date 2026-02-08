import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: 'default' | 'muted';
}

export default function Section({
  id,
  children,
  className,
  containerClassName,
  variant = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        variant === 'muted' && 'bg-muted/30',
        className
      )}
    >
      <div className={cn('container', containerClassName)}>{children}</div>
    </section>
  );
}
