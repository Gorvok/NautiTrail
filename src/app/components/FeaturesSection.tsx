"use client";

import { FaHiking, FaCampground, FaShieldAlt } from "react-icons/fa"; // Import specific FA icons

const FeaturesSection = () => {
    return (
        <section className="bg-gray-100 py-20 text-gray-800">
            <div className="container mx-auto px-6 text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-12">Why Choose NautiTrail?</h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1: Discover Trails */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
                        <FaHiking className="text-teal-500 text-6xl" />
                        <h3 className="text-xl font-semibold mt-4">Discover Trails</h3>
                        <p className="text-gray-600 mt-2">
                            Explore thousands of curated trails for your next adventure.
                        </p>
                    </div>

                    {/* Feature 2: Rent Outdoor Gear */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
                        <FaCampground className="text-teal-500 text-6xl" />
                        <h3 className="text-xl font-semibold mt-4">Rent Outdoor Gear</h3>
                        <p className="text-gray-600 mt-2">
                            Connect with local enthusiasts to rent equipment easily.
                        </p>
                    </div>

                    {/* Feature 3: Safety Tools */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
                        <FaShieldAlt className="text-teal-500 text-6xl" />
                        <h3 className="text-xl font-semibold mt-4">Safety Tools</h3>
                        <p className="text-gray-600 mt-2">
                            Access emergency SOS features and offline maps for peace of mind.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
