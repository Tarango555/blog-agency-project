import React from 'react';
import HeroSection from '../components/homePage/HeroSection.jsx';
import BlogSection from '../components/homePage/BlogSection.jsx';
import Features from '../components/homePage/Features.jsx';
import Testimonials from '../components/homePage/Testimonials.jsx';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <BlogSection />
            <Features />
            <Testimonials />
        </div>
    );
};

export default HomePage;