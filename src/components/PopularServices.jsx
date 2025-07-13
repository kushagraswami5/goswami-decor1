import React from 'react';

const services = [
  { title: 'Wedding Decoration', image: 'https://placehold.co/400x250?text=Wedding' },
  { title: 'Birthday Party', image: 'https://placehold.co/400x250?text=Birthday' },
  { title: 'Baby Shower', image: 'https://placehold.co/400x250?text=Baby+Shower' }
];

export default function PopularServices() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Popular Services</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={service.image} alt={service.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
