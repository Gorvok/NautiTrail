"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

function MapIcon() {
  return (
    <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/scripts/ml.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#features', label: 'Features' },
    { href: '#signup', label: 'Contact' },
  ];

  const features = [
    {
      icon: <MapIcon />,
      title: 'Trail Discovery',
      description: 'Interactive maps with filters for rental type, price, location, and user ratings.',
    },
    {
      icon: <CalendarIcon />,
      title: 'Real-Time Booking',
      description: 'Seamless booking process with availability calendars and instant confirmations.',
    },
    {
      icon: <StarIcon />,
      title: 'User Reviews',
      description: 'Read and write reviews to help build a trusted community of adventurers.',
    },
    {
      icon: <LocationIcon />,
      title: 'Real-Time Tracking',
      description: 'GPS tracking for users to monitor their progress and stay safe on any trail.',
    },
    {
      icon: <ShieldIcon />,
      title: 'Safety Features',
      description: 'Emergency SOS button, location sharing, and safety tips for each trail or activity.',
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105">
              NautiTrail
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:text-white hover:bg-slate-800"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#signup"
                className="ml-4 bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-teal-400/25 hover:scale-105"
              >
                Get Started
              </a>
            </nav>

            <button
              className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden animate-slide-down border-t border-slate-800/50 bg-slate-900/98 backdrop-blur-md">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 text-base font-medium px-4 py-3 rounded-lg transition-all duration-200 hover:text-white hover:bg-slate-800"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#signup"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center mt-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-image.jpeg"
            alt="Outdoor Adventure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-teal-400 font-semibold text-sm sm:text-base mb-4 uppercase tracking-[0.2em]">
            Discover Your Next Adventure
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Your Adventure<br className="hidden sm:block" /> Starts Here
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover, book, and share unique outdoor rentals and experiences. Connect with fellow adventurers and explore the world like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#signup"
              className="w-full sm:w-auto bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/30 hover:scale-105"
            >
              Join Our Journey
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto border-2 border-teal-400/60 text-teal-400 px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-teal-400 hover:text-slate-900 hover:border-teal-400"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-[0.15em] mb-3">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About NautiTrail</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full" />
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 sm:p-10 backdrop-blur-sm">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center">
              NautiTrail is a peer-to-peer rental platform designed to connect outdoor
              enthusiasts with rental opportunities for boats, RVs, campers, and other
              outdoor equipment. Our mission is to enhance outdoor adventures by
              providing comprehensive information about trails, hidden gems, user
              reviews, and real-time tracking.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-700/50">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">500+</p>
                <p className="text-gray-400 text-sm mt-1">Trails</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">1K+</p>
                <p className="text-gray-400 text-sm mt-1">Rentals</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">10K+</p>
                <p className="text-gray-400 text-sm mt-1">Adventurers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-28 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-[0.15em] mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Powerful Features</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-7 transition-all duration-300 hover:bg-slate-800/80 hover:border-teal-400/30 hover:shadow-lg hover:shadow-teal-400/5 hover:-translate-y-1 ${
                  index >= 3 ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                <div className="mb-5 p-3 bg-slate-700/30 rounded-xl w-fit transition-colors duration-300 group-hover:bg-teal-400/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-[0.15em] mb-3">Stay In The Loop</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Stay Updated with NautiTrail!</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full mb-8" />
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 sm:p-10 backdrop-blur-sm">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center mb-8">
              Join our journey as we build the ultimate platform for outdoor
              enthusiasts. By signing up, you&apos;ll receive exclusive updates, early
              access to new features, and the latest news on outdoor adventures,
              rentals, and hidden gems.
            </p>
            <div className="ml-embedded" data-form="Vw11Tz"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              NautiTrail
            </a>

            <nav className="flex flex-wrap justify-center gap-6 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 text-sm font-medium transition-colors duration-200 hover:text-teal-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 mb-8">
              <a href="https://www.facebook.com/NautiTrails/" className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 transition-all duration-200 hover:bg-slate-700/50 hover:border-teal-400/30" aria-label="Facebook">
                <Image src="/images/facebook-round-color-icon.svg" alt="Facebook" width={20} height={20} />
              </a>
              <a href="https://www.instagram.com/nautitrail/" className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 transition-all duration-200 hover:bg-slate-700/50 hover:border-teal-400/30" aria-label="Instagram">
                <Image src="/images/ig-instagram-icon.svg" alt="Instagram" width={20} height={20} />
              </a>
              <a href="https://www.threads.net/@nautitrail" className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 transition-all duration-200 hover:bg-slate-700/50 hover:border-teal-400/30" aria-label="Threads">
                <Image src="/images/threads-white-icon.svg" alt="Threads" width={20} height={20} />
              </a>
              <a href="https://x.com/nautitrail" className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 transition-all duration-200 hover:bg-slate-700/50 hover:border-teal-400/30" aria-label="X">
                <Image src="/images/x-social-media-white-icon.svg" alt="X" width={20} height={20} />
              </a>
              <a href="https://www.tiktok.com/@nauti_trail" className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 transition-all duration-200 hover:bg-slate-700/50 hover:border-teal-400/30" aria-label="TikTok">
                <Image src="/images/tiktok-color-icon.svg" alt="TikTok" width={20} height={20} />
              </a>
              <a href="https://www.linkedin.com/showcase/nautitrail/" className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 transition-all duration-200 hover:bg-slate-700/50 hover:border-teal-400/30" aria-label="LinkedIn">
                <Image src="/images/linkedin-app-icon.svg" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>

            <div className="w-full border-t border-slate-800/50 pt-6">
              <p className="text-gray-500 text-sm text-center">
                &copy; {new Date().getFullYear()} NautiTrail. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
