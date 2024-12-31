import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import backgroundImage from "../assets/images/background4.jpg";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50" data-aos="fade-down">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-lg/6 font-semibold text-gray-900">Home</a>
            <a href="#nominees" className="text-lg/6 font-semibold text-gray-900">Nominees</a>
            <a href="#aboutus" className="text-lg/6 font-semibold text-gray-900">About Us</a>
            <a href="#" className="text-lg/6 font-semibold text-gray-900">Contact Us</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/authpage" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Wolkite University Online Voting System</h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">We strive for wisdom. This platform will provide a secure and outstanding online voting system for students union presidential selection.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/authpage" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" data-aos="fade-up" data-aos-delay="200">Get started</a>
              <a href="#how-it-works" className="text-sm/6 font-semibold text-gray-900" data-aos="fade-up" data-aos-delay="400">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
