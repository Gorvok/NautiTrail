"use client";

import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white py-10">
            <div className="container mx-auto px-6 md:px-12">
                {/* Top Section: Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Logo and Tagline Section */}
                    <div className="flex flex-col space-y-4">
                        <Image
                            src="/images/nautitrail-align-left.png"
                            alt="NautiTrail Logo"
                            width={200}
                            height={200}
                        />
                        <p className="text-gray-400 text-sm text-left">
                            Your Adventure Starts Here!
                        </p>
                    </div>

                    {/* Navigation Section */}

                    <div className="flex flex-col space-y-2">
                        <h4 className="font-bold text-white text-sm uppercase">Company</h4>
                        <a href="/" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Home
                        </a>
                        <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            About Us
                        </a>
                        <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Careers
                        </a>
                        <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Support
                        </a>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h4 className="font-bold text-white text-sm uppercase">Product</h4>
                        <a href="/overview" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Overview
                        </a>
                        <a href="#features" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Features
                        </a>
                        <a href="#pricing" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Pricing
                        </a>
                        <a href="#comingsoon" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Coming Soon
                        </a>
                    </div>

                    {/* Additional Columns (if needed) */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="font-bold text-white text-sm uppercase">Explore</h4>
                        <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Blog
                        </a>
                        <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            FAQs
                        </a>
                        <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Trails
                        </a>
                        <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Rentals
                        </a>
                    </div>

                    {/* Resources Section */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="font-bold text-white text-sm uppercase">Resources</h4>
                        <a href="/privacy" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Terms of Service
                        </a>
                        <a href="/contact" className="text-gray-400 text-sm hover:text-teal-400 transition">
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/NautiTrails/" aria-label="Facebook">
                            <Image
                                src="/images/facebook-round-color-icon.svg"
                                alt="Facebook"
                                width={20}
                                height={20}
                                className="transition hover:opacity-80"
                            />
                        </a>
                        <a href="https://x.com/nautitrail" aria-label="X">
                            <Image
                                src="/images/x-social-media-white-icon.svg"
                                alt="X"
                                width={20}
                                height={20}
                                className="transition hover:opacity-80"
                            />
                        </a>
                        <a href="https://www.instagram.com/nautitrail/" aria-label="Instagram">
                            <Image
                                src="/images/ig-instagram-icon.svg"
                                alt="Instagram"
                                width={20}
                                height={20}
                                className="transition hover:opacity-80"
                            />
                        </a>
                        <a href="https://www.threads.net/@nautitrail" aria-label="Threads">
                            <Image
                                src="/images/threads-white-icon.svg"
                                alt="Threads"
                                width={20}
                                height={20}
                                className="transition hover:opacity-80"
                            />
                        </a>
                        <a href="https://www.tiktok.com/@nauti_trail" aria-label="TikTok">
                            <Image
                                src="/images/tiktok-color-icon.svg"
                                alt="TikTok"
                                width={20}
                                height={20}
                                className="transition hover:opacity-80"
                            />
                        </a>
                        <a href="https://www.linkedin.com/showcase/nautitrail/" aria-label="LinkedIn">
                            <Image
                                src="/images/linkedin-app-icon.svg"
                                alt="LinkedIn"
                                width={20}
                                height={20}
                                className="transition hover:opacity-80"
                            />
                        </a>
                    </div>
                    <p>© 2025 NautiTrail. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
