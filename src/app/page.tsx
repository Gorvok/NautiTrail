"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Scroll-reveal hook                                                 */
/* ------------------------------------------------------------------ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ------------------------------------------------------------------ */
/*  SVG Icon Components                                                */
/* ------------------------------------------------------------------ */
function WaveIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M4 20c2-3 4-6 8-6s6 6 8 6 4-3 8-6"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <path
        d="M4 14c2-3 4-6 8-6s6 6 8 6 4-3 8-6"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        opacity={0.4}
      />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-8 h-8 text-brand-400/30" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                */
/* ------------------------------------------------------------------ */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* MailerLite script */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/scripts/ml.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  /* Scroll-aware header */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobile = useCallback(() => setMobileMenuOpen(false), []);

  /* ---- Reveal refs ---- */
  const aboutRef = useReveal();
  const stepsRef = useReveal();
  const featuresRef = useReveal();
  const testimonialsRef = useReveal();
  const signupRef = useReveal();

  /* ---- Data ---- */
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#features", label: "Features" },
    { href: "#signup", label: "Sign Up" },
  ];

  const steps = [
    {
      icon: <SearchIcon />,
      number: "01",
      title: "Discover",
      description: "Browse hundreds of trails, boats, RVs, and outdoor rentals with our interactive search.",
    },
    {
      icon: <CheckCircleIcon />,
      number: "02",
      title: "Book Instantly",
      description: "Reserve your adventure in seconds with real-time availability and secure payments.",
    },
    {
      icon: <RocketIcon />,
      number: "03",
      title: "Adventure Awaits",
      description: "Hit the trail with GPS tracking, safety tools, and a community of fellow explorers.",
    },
  ];

  const features = [
    {
      icon: <MapIcon />,
      title: "Trail Discovery",
      description: "Interactive maps with smart filters for rental type, price, location, and user ratings.",
      span: "md:col-span-2 lg:col-span-1",
    },
    {
      icon: <CalendarIcon />,
      title: "Real-Time Booking",
      description: "Seamless booking with live availability calendars and instant confirmations.",
      span: "md:col-span-1 lg:col-span-1",
    },
    {
      icon: <StarIcon />,
      title: "Community Reviews",
      description: "Read and write authentic reviews to build a trusted community of adventurers.",
      span: "md:col-span-1 lg:col-span-1",
    },
    {
      icon: <LocationIcon />,
      title: "Live GPS Tracking",
      description: "Monitor your journey in real time, share your location, and never lose your way.",
      span: "md:col-span-1 lg:col-span-1",
    },
    {
      icon: <ShieldIcon />,
      title: "Safety First",
      description: "Emergency SOS, location sharing, weather alerts, and curated safety tips for every trail.",
      span: "md:col-span-2 lg:col-span-1",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Kayak Enthusiast",
      text: "NautiTrail made finding and booking a kayak rental so easy. The real-time tracking gave my family total peace of mind on the water.",
    },
    {
      name: "Jake R.",
      role: "RV Adventurer",
      text: "I found an incredible RV rental through NautiTrail that I never would have discovered on my own. The reviews from other users sealed the deal.",
    },
    {
      name: "Priya K.",
      role: "Trail Runner",
      text: "The trail discovery feature is a game-changer. I've explored hidden gems in my own state that I had no idea existed. Love this platform!",
    },
  ];

  return (
    <>
      {/* ==================== HEADER ==================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-brand-400 transition-transform duration-300 group-hover:scale-110">
                <WaveIcon className="w-7 h-7" />
              </span>
              <span className="text-xl font-bold text-white tracking-tight">
                Nauti<span className="text-brand-400">Trail</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-gray-400 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#signup"
                className="ml-3 bg-brand-400 text-[#0a0f1e] px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-brand-300 hover:shadow-lg hover:shadow-brand-400/25 hover:scale-105 active:scale-100"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg transition-colors"
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

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0a0f1e]/95 backdrop-blur-xl border-t border-slate-800/50 px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="block text-gray-300 text-base font-medium px-4 py-3 rounded-xl transition-all duration-200 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#signup"
                onClick={closeMobile}
                className="block text-center bg-brand-400 text-[#0a0f1e] px-5 py-3 rounded-full font-semibold text-sm"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.jpeg"
            alt="Outdoor Adventure"
            fill
            className="object-cover"
            priority
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0a0f1e]/50 to-[#0a0f1e]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/60 via-transparent to-[#0a0f1e]/60" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-brand-300 text-xs sm:text-sm font-medium tracking-wide">Now in Early Access</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Your Next{" "}
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-300 bg-clip-text text-transparent">
                Adventure
              </span>
              <br />
              Starts Here
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover, book, and share unique outdoor rentals and experiences.
              Connect with fellow adventurers and explore the world like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#signup"
                className="w-full sm:w-auto bg-brand-400 text-[#0a0f1e] px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-brand-300 hover:shadow-xl hover:shadow-brand-400/20 hover:scale-105 active:scale-100"
              >
                Join the Waitlist
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 text-gray-300 px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5"
              >
                See How It Works
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
            <a href="#about" className="text-gray-500 hover:text-brand-400 transition-colors" aria-label="Scroll down">
              <ChevronDownIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400/5 rounded-full blur-[100px] pointer-events-none" />

        <div ref={aboutRef} className="reveal max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: text */}
            <div>
              <span className="inline-block text-brand-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Adventure made{" "}
                <span className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">
                  simple
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                NautiTrail is a peer-to-peer rental platform connecting outdoor
                enthusiasts with boats, RVs, campers, and gear. We enhance every
                adventure with trail guides, hidden gems, community reviews, and
                real-time tracking — all in one place.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-brand-400">500+</p>
                  <p className="text-gray-500 text-sm mt-1">Trails</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-brand-400">1K+</p>
                  <p className="text-gray-500 text-sm mt-1">Rentals</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-brand-400">10K+</p>
                  <p className="text-gray-500 text-sm mt-1">Adventurers</p>
                </div>
              </div>
            </div>

            {/* Right: visual card grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card gradient-border rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square">
                <MapIcon />
                <p className="text-white font-semibold mt-3 text-sm">Explore Trails</p>
                <p className="text-gray-500 text-xs mt-1">Interactive maps</p>
              </div>
              <div className="glass-card gradient-border rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square mt-8">
                <CalendarIcon />
                <p className="text-white font-semibold mt-3 text-sm">Instant Booking</p>
                <p className="text-gray-500 text-xs mt-1">Seamless reservations</p>
              </div>
              <div className="glass-card gradient-border rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square -mt-4">
                <LocationIcon />
                <p className="text-white font-semibold mt-3 text-sm">GPS Tracking</p>
                <p className="text-gray-500 text-xs mt-1">Stay on course</p>
              </div>
              <div className="glass-card gradient-border rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square mt-4">
                <ShieldIcon />
                <p className="text-white font-semibold mt-3 text-sm">Stay Safe</p>
                <p className="text-gray-500 text-xs mt-1">SOS &amp; alerts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section id="how-it-works" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-400/[0.02] to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              How It Works
            </h2>
          </div>

          <div ref={stepsRef} className="stagger-children grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center group">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-brand-400/30 to-transparent" />
                )}

                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-400/10 border border-brand-400/20 text-brand-400 mb-6 mx-auto transition-all duration-300 group-hover:bg-brand-400/20 group-hover:scale-110">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0a0f1e] border-2 border-brand-400 text-brand-400 text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-400/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Powerful tools to discover, book, and enjoy your next outdoor adventure safely.
            </p>
          </div>

          <div ref={featuresRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`group glass-card gradient-border rounded-2xl p-7 transition-all duration-300 hover:bg-slate-800/60 glow-teal-hover hover:-translate-y-1 ${feature.span}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center text-brand-400 mb-5 transition-all duration-300 group-hover:bg-brand-400/20 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4">
              Community
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What Adventurers Say
            </h2>
          </div>

          <div ref={testimonialsRef} className="stagger-children grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="glass-card gradient-border rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 glow-teal-hover"
              >
                <QuoteIcon />
                <p className="text-gray-300 leading-relaxed mt-4 mb-6 flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                  <div className="w-10 h-10 rounded-full bg-brand-400/20 border border-brand-400/30 flex items-center justify-center text-brand-400 text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SIGNUP / CTA ==================== */}
      <section id="signup" className="relative py-24 sm:py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-400/[0.04] to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-400/5 rounded-full blur-[100px] pointer-events-none" />

        <div ref={signupRef} className="reveal max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card gradient-border rounded-3xl p-8 sm:p-12 text-center">
            <span className="inline-flex items-center gap-2 bg-brand-400/10 border border-brand-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-brand-400 text-xs sm:text-sm font-medium">Free to join</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Join our early access list and be the first to explore. Get exclusive updates,
              new features, and insider tips on the best outdoor adventures.
            </p>

            <div className="ml-embedded" data-form="Vw11Tz"></div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="relative border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <span className="text-brand-400"><WaveIcon className="w-6 h-6" /></span>
                <span className="text-lg font-bold text-white tracking-tight">
                  Nauti<span className="text-brand-400">Trail</span>
                </span>
              </a>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                The peer-to-peer platform for outdoor enthusiasts to discover, rent, and share adventure gear.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-500 text-sm hover:text-brand-400 transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company (placeholder) */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-gray-500 text-sm hover:text-brand-400 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 text-sm hover:text-brand-400 transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#signup" className="text-gray-500 text-sm hover:text-brand-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: "https://www.facebook.com/NautiTrails/", src: "/images/facebook-round-color-icon.svg", alt: "Facebook" },
                  { href: "https://www.instagram.com/nautitrail/", src: "/images/ig-instagram-icon.svg", alt: "Instagram" },
                  { href: "https://www.threads.net/@nautitrail", src: "/images/threads-white-icon.svg", alt: "Threads" },
                  { href: "https://x.com/nautitrail", src: "/images/x-social-media-white-icon.svg", alt: "X" },
                  { href: "https://www.tiktok.com/@nauti_trail", src: "/images/tiktok-color-icon.svg", alt: "TikTok" },
                  { href: "https://www.linkedin.com/showcase/nautitrail/", src: "/images/linkedin-app-icon.svg", alt: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.alt}
                    href={s.href}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-200 hover:bg-brand-400/10 hover:border-brand-400/30 hover:scale-110"
                    aria-label={s.alt}
                  >
                    <Image src={s.src} alt={s.alt} width={18} height={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} NautiTrail. All rights reserved.
            </p>
            <p className="text-gray-700 text-xs">
              Built for adventurers, by adventurers.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
