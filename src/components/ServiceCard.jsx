import React from 'react';

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <button className="mt-4 text-sm text-purple-700 hover:underline">View Details</button>
      </div>
    </div>
  );
}
