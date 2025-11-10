"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/scripts/ml.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>NautiTrail - Your Adventure Starts Here</title>
          <link rel="icon" href="/icon.ico" type="image/x-icon" />
        </Head>
        <header className="sticky top-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 z-50 px-6 md:px-12 py-4 flex justify-between items-center shadow-lg">
          <div className="logo flex items-center gap-2 cursor-pointer group">
            <span className="hidden md:inline text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent max-h-14 transition-transform duration-300 group-hover:scale-110">NautiTrail</span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex space-x-1">
              <li><a href="#" className="text-gray-200 no-underline text-base px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-400 hover:text-slate-900 hover:font-semibold">Home</a></li>
              <li><a href="#about" className="text-gray-200 no-underline text-base px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-400 hover:text-slate-900 hover:font-semibold">About</a></li>
              <li><a href="#features" className="text-gray-200 no-underline text-base px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-400 hover:text-slate-900 hover:font-semibold">Features</a></li>
              <li><a href="#signup" className="text-gray-200 no-underline text-base px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-400 hover:text-slate-900 hover:font-semibold">Contact</a></li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <a href="#signup" className="bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/50 hover:scale-105 inline-block">
              Get Started
            </a>
          </div>
          <button className="md:hidden text-teal-400 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        <section id="hero" className="text-center p-10 md:p-24 bg-gray-100 text-white">
          <div className="hero-content">
            <h1 className="text-3xl md:text-4xl mb-5">Your Adventure Starts Here</h1>
            <p className="text-lg mb-5">Discover, book, and share unique outdoor rentals and experiences.</p>
            <a href="#signup" className="button bg-black text-white px-5 py-2 text-lg rounded">Join Our Journey</a>
          </div>
          <div className="hero-image">
            <Image src="/images/hero-image.jpeg" alt="Outdoor Adventure" width={600} height={400} />
          </div>
        </section>

        <section id="about" className="bg-gray-100 border border-gray-200 rounded-lg mx-auto my-5 max-w-3xl py-16 px-5">
          <h2 className="text-teal-400 text-center text-3xl mb-5">About NautiTrail</h2>
          <p>
            NautiTrail is a peer-to-peer rental platform designed to connect outdoor
            enthusiasts with rental opportunities for boats, RVs, campers, and other
            outdoor equipment. Our mission is to enhance outdoor adventures by
            providing comprehensive information about trails, hidden gems, user
            reviews, and real-time tracking.
          </p>
        </section>

        <section id="features" className="bg-gray-100 border border-gray-200 rounded-lg mx-auto my-5 max-w-3xl py-16 px-5">
          <h2 className="text-teal-400 text-center text-3xl mb-5">Features</h2>
          <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="feature bg-white border border-gray-200 rounded-lg p-5 text-center">
              <h3 className="text-teal-400 text-xl mb-2">Trail Discovery</h3>
              <p>
                Interactive maps with filters for rental type, price, location, and
                user ratings.
              </p>
            </div>
            <div className="feature bg-white border border-gray-200 rounded-lg p-5 text-center">
              <h3 className="text-teal-400 text-xl mb-2">Real-Time Booking</h3>
              <p>
                Seamless booking process with availability calendars and instant
                confirmations.
              </p>
            </div>
            <div className="feature bg-white border border-gray-200 rounded-lg p-5 text-center">
              <h3 className="text-teal-400 text-xl mb-2">User Reviews</h3>
              <p>Read and write reviews to help build a trusted community.</p>
            </div>
            <div className="feature bg-white border border-gray-200 rounded-lg p-5 text-center">
              <h3 className="text-teal-400 text-xl mb-2">Real-Time Tracking</h3>
              <p>GPS tracking for users to monitor their progress and stay safe.</p>
            </div>
            <div className="feature bg-white border border-gray-200 rounded-lg p-5 text-center">
              <h3 className="text-teal-400 text-xl mb-2">Safety Features</h3>
              <p>
                Emergency SOS button, location sharing, and safety tips for each
                trail or activity.
              </p>
            </div>
          </div>
        </section>

        <section id="signup" className="bg-gray-100 border border-gray-200 rounded-lg mx-auto my-5 max-w-3xl py-16 px-5">
          <h2 className="text-teal-400 text-center text-3xl mb-5">Stay Updated with NautiTrail!</h2>
          <p>
            Join our journey as we build the ultimate platform for outdoor
            enthusiasts. By signing up, you&apos;ll receive exclusive updates, early
            access to new features, and the latest news on outdoor adventures,
            rentals, and hidden gems. Be the first to know and never miss out on an
            opportunity to explore the great outdoors with NautiTrail.
          </p>
          <div className="ml-embedded" data-form="Vw11Tz"></div>
        </section>

        <footer className="bg-black text-white text-center py-5">
          <div className="footer-links flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 mb-5">
            <a href="#" className="text-teal-400 no-underline mx-2">Home</a>
            <a href="#about" className="text-teal-400 no-underline mx-2">About</a>
            <a href="#features" className="text-teal-400 no-underline mx-2">Features</a>
            <a href="#signup" className="text-teal-400 no-underline mx-2">Contact</a>
          </div>
          <div className="social-media flex justify-center items-center gap-2 mb-5">
            <a href="https://www.facebook.com/NautiTrails/"><Image src="/images/facebook-round-color-icon.svg" alt="Facebook" width={24} height={24} /></a>
            <a href="https://www.instagram.com/nautitrail/"><Image src="/images/ig-instagram-icon.svg" alt="Instagram" width={24} height={24} /></a>
            <a href="https://www.threads.net/@nautitrail"><Image src="/images/threads-white-icon.svg" alt="Threads" width={24} height={24} /></a>
            <a href="https://x.com/nautitrail"><Image src="/images/x-social-media-white-icon.svg" alt="X" width={24} height={24} /></a>
            <a href="https://www.tiktok.com/@nauti_trail"><Image src="/images/tiktok-color-icon.svg" alt="TikTok" width={24} height={24} /></a>
            <a href="https://www.linkedin.com/showcase/nautitrail/"><Image src="/images/linkedin-app-icon.svg" alt="LinkedIn" width={24} height={24} /></a>
          </div>
          <p className="footer-text text-gray-700">© 2024 NautiTrail. All Rights Reserved.</p>
        </footer>
      </>
  );
}
