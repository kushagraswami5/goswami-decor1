import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Wedding Decoration',
    description: 'Elegant themes and floral setups for your big day.',
    image: 'https://placehold.co/400x250?text=Wedding'
  },
  {
    title: 'Birthday Party',
    description: 'Colorful decorations for all age groups with balloons and banners.',
    image: 'https://placehold.co/400x250?text=Birthday'
  },
  {
    title: 'Baby Shower',
    description: 'Charming and cozy setups to welcome your little one.',
    image: 'https://placehold.co/400x250?text=Baby+Shower'
  },
  {
    title: 'Corporate Events',
    description: 'Professional decorations for meetings, launches, and seminars.',
    image: 'https://placehold.co/400x250?text=Corporate+Event'
  }
];


export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
      <p className="text-center text-gray-600 mb-12">
        Choose from our wide range of decoration themes tailored for every celebration.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}
