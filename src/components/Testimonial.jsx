import React from 'react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    text: 'Absolutely loved the decoration! Everything was exactly as I imagined.',
  },
  {
    name: 'Anjali Verma',
    text: 'They made my daughter’s birthday magical. Highly recommended!',
  },
  {
    name: 'Vikram Mehta',
    text: 'Professional, punctual, and beautiful setups. 10/10 service!',
  }
];

export default function Testimonial() {
  return (
    <section className="bg-purple-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">“{item.text}”</p>
              <h4 className="text-sm font-semibold text-purple-700">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
