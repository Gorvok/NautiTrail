"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import HeroSection from "@/app/components/HeroSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import HowItWorksSection from "@/app/components/HowItWorksSection";
import SignupForm from "@/app/components/SignupForm";
import FeaturedEquipment from "@/app/components/FeaturedEquipment";
import ExploreAdventures from "@/app/components/ExploreAdventures";
import CallToAction from "@/app/components/CallToAction";

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

        {/*<section*/}
        {/*    id="hero"*/}
        {/*    className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-6 md:px-12"*/}
        {/*>*/}
        {/*  <div className="container mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">*/}
        {/*    /!* Hero Content *!/*/}
        {/*    <div className="text-center md:text-left md:w-1/2">*/}
        {/*      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">*/}
        {/*        Your Adventure Starts Here*/}
        {/*      </h1>*/}
        {/*      <p className="text-gray-400 text-lg md:text-xl mb-6">*/}
        {/*        Discover, book, and share unique outdoor rentals and experiences.*/}
        {/*      </p>*/}
        {/*      <a*/}
        {/*          href="#signup"*/}
        {/*          className="bg-teal-500 hover:bg-teal-400 transition px-6 py-3 text-lg rounded-md"*/}
        {/*      >*/}
        {/*        Join Our Journey*/}
        {/*      </a>*/}
        {/*    </div>*/}

        {/*    /!* Hero Image *!/*/}
        {/*    <div className="md:w-1/2 flex justify-center">*/}
        {/*      <Image*/}
        {/*          src="/images/hero-image.jpeg"*/}
        {/*          alt="Outdoor Adventure"*/}
        {/*          width={600}*/}
        {/*          height={400}*/}
        {/*          className="rounded-lg shadow-lg"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <HeroSection/>
        <FeaturesSection/>
        <HowItWorksSection/>
          <FeaturedEquipment/>
          <ExploreAdventures/>
          <CallToAction/>

        {/*<section id="about" className="bg-gray-100 border border-gray-200 rounded-lg mx-auto my-5 max-w-3xl py-16 px-5">*/}
        {/*  <h2 className="text-teal-400 text-center text-3xl mb-5">About NautiTrail</h2>*/}
        {/*  <p>*/}
        {/*    NautiTrail is a peer-to-peer rental platform designed to connect outdoor*/}
        {/*    enthusiasts with rental opportunities for boats, RVs, campers, and other*/}
        {/*    outdoor equipment. Our mission is to enhance outdoor adventures by*/}
        {/*    providing comprehensive information about trails, hidden gems, user*/}
        {/*    reviews, and real-time tracking.*/}
        {/*  </p>*/}
        {/*</section>*/}

        {/*<section id="features" className="bg-gray-100 border border-gray-200 rounded-lg mx-auto my-5 max-w-3xl py-16 px-5">*/}
        {/*  <h2 className="text-teal-400 text-center text-3xl mb-5">Features</h2>*/}
        {/*  <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-5">*/}
        {/*    <div className="feature bg-white border border-gray-200 rounded-lg p-5 text-center">*/}
        {/*      <h3 className="text-teal-400 text-xl mb-2">Trail Discovery</h3>*/}
        {/*      <p>*/}
        {/*        Interactive maps with filters for rental type, price, location, and*/}
        {/*        user ratings.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="feature bg-white border border-gray-200 rounded-lg p-5 text-center">*/}
        {/*      <h3 className="text-teal-400 text-xl mb-2">Real-Time Booking</h3>*/}
        {/*      <p>*/}
        {/*        Seamless booking process with availability calendars and instant*/}
        {/*        confirmations.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="feature bg-white border border-gray-200 rounded-lg p-5 text-center">*/}
        {/*      <h3 className="text-teal-400 text-xl mb-2">User Reviews</h3>*/}
        {/*      <p>Read and write reviews to help build a trusted community.</p>*/}
        {/*    </div>*/}
        {/*    <div className="feature bg-white border border-gray-200 rounded-lg p-5 text-center">*/}
        {/*      <h3 className="text-teal-400 text-xl mb-2">Real-Time Tracking</h3>*/}
        {/*      <p>GPS tracking for users to monitor their progress and stay safe.</p>*/}
        {/*    </div>*/}
        {/*    <div className="feature bg-white border border-gray-200 rounded-lg p-5 text-center">*/}
        {/*      <h3 className="text-teal-400 text-xl mb-2">Safety Features</h3>*/}
        {/*      <p>*/}
        {/*        Emergency SOS button, location sharing, and safety tips for each*/}
        {/*        trail or activity.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*<section id="signup" className="bg-gray-100 border border-gray-200 rounded-lg mx-auto my-5 max-w-3xl py-16 px-5">*/}
        {/*  <h2 className="text-teal-400 text-center text-3xl mb-5">Stay Updated with NautiTrail!</h2>*/}
        {/*  <p>*/}
        {/*    Join our journey as we build the ultimate platform for outdoor*/}
        {/*    enthusiasts. By signing up, you&apos;ll receive exclusive updates, early*/}
        {/*    access to new features, and the latest news on outdoor adventures,*/}
        {/*    rentals, and hidden gems. Be the first to know and never miss out on an*/}
        {/*    opportunity to explore the great outdoors with NautiTrail.*/}
        {/*  </p>*/}
        {/*  <div className="ml-embedded" data-form="Vw11Tz"></div>*/}
        {/*</section>*/}
      </>
  );
}
