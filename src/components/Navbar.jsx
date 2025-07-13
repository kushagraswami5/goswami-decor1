import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-900">GOSWAMI DECOR</h1>
        <nav className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-purple-700">Home</Link>
          <Link to="/services" className="hover:text-purple-700">Services</Link>
          <Link to="/gallery" className="hover:text-purple-700">Gallery</Link>
          <Link to="/about" className="hover:text-purple-700">About</Link>
          <a
            href="https://wa.me/919871787440?text=Hi%20Goswami%20Decor%2C%20I%20want%20to%20book%20an%20event!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-700"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
