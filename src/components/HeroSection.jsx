import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white py-32 px-6"
    >
      <div className="max-w-4xl mx-auto text-center bg-black bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Celebrate in Style with Goswami Decor
        </h1>
        <p className="text-lg mb-6">
          From weddings to baby showers – make your event unforgettable.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-red-400 text-white py-2 px-6 rounded-full hover:bg-red-500 transition">
            Explore Services
          </button>
          <button className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
