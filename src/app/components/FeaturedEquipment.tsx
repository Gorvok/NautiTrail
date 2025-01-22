"use client";

import { FaStar, FaHeart } from "react-icons/fa";
import Image from "next/image";

const FeaturedEquipment = () => {
    const equipmentData = [
        {
            id: 1,
            title: "Premium Kayak Set",
            location: "Lake Tahoe",
            price: 75,
            rating: 4.9,
            image: "/images/kayak.jpg",
        },
        {
            id: 2,
            title: "Luxury RV - 2023 Model",
            location: "Yosemite Valley",
            price: 249,
            rating: 4.8,
            image: "/images/rv.jpg",
        },
        {
            id: 3,
            title: "Mountain Bike Package",
            location: "Pacific Northwest",
            price: 45,
            rating: 4.95,
            image: "/images/mountain-bike.jpg",
        },
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center mb-12">Featured Equipment</h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipmentData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            {/* Image Section */}
                            <div className="relative w-full h-48">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill // Replaces `layout="fill"`
                                    className="object-cover" // Replaces `objectFit="cover"`
                                />
                                <button className="absolute top-3 right-3 text-gray-600 bg-white rounded-full p-2 hover:text-red-500 transition">
                                    <FaHeart />
                                </button>
                            </div>

                            {/* Content Section */}
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.location}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center">
                                        <FaStar className="text-yellow-500" />
                                        <span className="ml-1 text-gray-600">{item.rating}</span>
                                    </div>
                                    <p className="text-gray-800 font-semibold">${item.price}/night</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedEquipment;
