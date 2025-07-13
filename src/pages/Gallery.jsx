import React, { useState } from 'react';

const galleryImages = [
  { src: 'https://placehold.co/600x400?text=Wedding', category: 'Wedding' },
  { src: 'https://placehold.co/600x400?text=Birthday', category: 'Birthday' },
  { src: 'https://placehold.co/600x400?text=Baby+Shower', category: 'Baby Shower' },
  { src: 'https://placehold.co/600x400?text=Corporate', category: 'Corporate' },
  { src: 'https://placehold.co/600x400?text=Haldi+Ceremony', category: 'Wedding' },
  { src: 'https://placehold.co/600x400?text=Reception', category: 'Wedding' },
  { src: 'https://placehold.co/600x400?text=Mehndi+Night', category: 'Wedding' },
  { src: 'https://placehold.co/600x400?text=Engagement', category: 'Wedding' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Wedding', 'Birthday', 'Baby Shower', 'Corporate'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Event Gallery</h1>
      <p className="text-center text-gray-600 mb-8">
        Browse through decorated events by category.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm border ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white border-purple-600'
                : 'text-purple-700 border-purple-300 hover:bg-purple-100'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => setLightboxImage(img.src)}
          >
            <img src={img.src} alt={img.category} className="w-full h-60 object-cover" />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl transition-all duration-300"
          />
        </div>
      )}
    </div>
  );
}
