import React from 'react';
import { FaStar, FaClock, FaSmile } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Goswami Decor?</h2>
        <p className="text-gray-600 mb-12">Here’s what makes us the top choice for your celebration:</p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <FaStar className="text-purple-600 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Professional Quality</h3>
            <p className="text-gray-600">We deliver stunning, top-quality decoration for all kinds of events.</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <FaClock className="text-purple-600 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">On-Time Setup</h3>
            <p className="text-gray-600">Timely delivery and setup, so your day goes off without a hitch.</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <FaSmile className="text-purple-600 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Customer Happiness</h3>
            <p className="text-gray-600">Our mission is to make you smile. We prioritize satisfaction always.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
