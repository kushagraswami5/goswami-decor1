import React from 'react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About Goswami Decor</h1>
      
      <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto">
        At Goswami Decor, we turn your special moments into unforgettable memories.
        With years of experience in the event decoration industry, our team brings creativity,
        precision, and passion to every celebration — big or small.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">✨ Our Vision</h2>
          <p className="text-gray-600">
            We aim to be India’s leading celebration decor brand — crafting experiences
            that bring families and friends together. From traditional themes to modern aesthetics,
            we bring your imagination to life.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">🎉 What We Do</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Wedding and Engagement Decorations</li>
            <li>Birthday Parties and Baby Showers</li>
            <li>Corporate Event Styling</li>
            <li>Custom Theme Events & Celebrations</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-2">📍 Based in Delhi NCR</h2>
        <p className="text-gray-600">Serving clients across India with love, lights & laughter.</p>
      </div>
    </div>
  );
}
