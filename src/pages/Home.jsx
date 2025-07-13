import React from 'react';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import WhyChooseUs from '../components/WhyChooseUs';
import PopularServices from '../components/PopularServices';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <WhyChooseUs />
      <PopularServices />
      <Testimonial />
    </div>
  );
}
