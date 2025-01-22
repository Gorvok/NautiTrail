"use client";

import { FaHiking, FaCampground, FaShip, FaDog, FaMountain, FaBinoculars } from "react-icons/fa";

const ExploreAdventures = () => {
    const adventureCategories = [
        { id: 1, name: "Boating", icon: FaShip },
        { id: 2, name: "Hiking", icon: FaHiking },
        { id: 3, name: "Camping", icon: FaCampground },
        { id: 4, name: "Dog Friendly", icon: FaDog },
        { id: 5, name: "Trails", icon: FaMountain },
        { id: 6, name: "Scenic Views", icon: FaBinoculars },
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">Explore Your Next Adventure</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                    {adventureCategories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                            <category.icon className="text-teal-500 text-6xl mb-4" />
                            <h3 className="text-xl font-semibold">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreAdventures;
