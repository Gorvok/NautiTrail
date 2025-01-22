"use client";

import { FaSearch, FaCalendarCheck, FaSmile } from "react-icons/fa"; // Import FA icons

const HowItWorksSection = () => {
    return (
        <section className="bg-gradient-to-b from-gray-800 to-gray-700 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-12">How It Works</h2>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center">
                        <FaSearch className="text-teal-500 text-6xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Find Your Adventure</h3>
                        <p className="text-gray-300">
                            Search for trails or rentals nearby and choose your next outdoor experience.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center">
                        <FaCalendarCheck className="text-teal-500 text-6xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Book and Connect</h3>
                        <p className="text-gray-300">
                            Reserve equipment or explore trails instantly through our platform.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center">
                        <FaSmile className="text-teal-500 text-6xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Enjoy and Share</h3>
                        <p className="text-gray-300">
                            Experience your adventure and share feedback with the community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
