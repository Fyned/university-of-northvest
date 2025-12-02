import React from 'react';
import { CheckCircle } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, isLast }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center shrink-0 z-10">
        <CheckCircle className="w-5 h-5 text-secondary-500" />
      </div>
      {!isLast && <div className="w-0.5 h-full bg-neutral-200 my-2" />}
    </div>
    <div className="pb-12">
      <h3 className="text-xl font-bold text-primary-900 mb-2">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Timeline: React.FC<{ items: { title: string; description: string }[] }> = ({ items }) => {
  return (
    <div className="max-w-2xl">
      {items.map((item, index) => (
        <TimelineItem 
          key={index} 
          title={item.title} 
          description={item.description} 
          isLast={index === items.length - 1} 
        />
      ))}
    </div>
  );
};