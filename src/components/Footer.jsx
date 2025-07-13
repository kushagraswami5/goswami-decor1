import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Goswami Decor</h2>
          <p>We bring beauty to every celebration — with love, lights & creativity.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-purple-400">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-purple-400">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Need help with decoration?</p>
          <a
            href="https://wa.me/919876543210?text=Hi%20Goswami%20Decor%2C%20I%20want%20to%20book%20an%20event!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-green-400 hover:text-green-300"
          >
            <FaWhatsapp /> Message us on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-10 text-gray-500">
        © {new Date().getFullYear()} Goswami Decor. All rights reserved.
      </div>
    </footer>
  );
}
