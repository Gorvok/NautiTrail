"use client";

const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative bg-cover bg-center bg-no-repeat text-white"
            style={{
                backgroundImage: "url('/images/hero-image.jpeg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative container mx-auto px-8 py-32 text-center flex flex-col items-center">
                {/* Headline */}
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                    Rent Outdoor Gear for Your Next Adventure
                </h1>

                {/* Subheading */}
                <p className="text-gray-300 text-xl md:text-2xl mb-8">
                    Connect with local outdoor enthusiasts to rent equipment and discover amazing trails.
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-2xl mb-8">
                    <input
                        type="text"
                        placeholder="Search for equipment rentals, trails, or adventures..."
                        className="w-full px-6 py-4 rounded-full text-gray-700 focus:outline-none"
                    />
                </div>

                {/* Category Tags */}
                <div className="flex flex-wrap justify-center gap-6">
                    <button className="bg-gray-800 text-gray-300 px-5 py-3 rounded-full hover:bg-teal-500 hover:text-white transition">
                        Boats
                    </button>
                    <button className="bg-gray-800 text-gray-300 px-5 py-3 rounded-full hover:bg-teal-500 hover:text-white transition">
                        RVs
                    </button>
                    <button className="bg-gray-800 text-gray-300 px-5 py-3 rounded-full hover:bg-teal-500 hover:text-white transition">
                        Hiking
                    </button>
                    <button className="bg-gray-800 text-gray-300 px-5 py-3 rounded-full hover:bg-teal-500 hover:text-white transition">
                        Camping
                    </button>
                    <button className="bg-gray-800 text-gray-300 px-5 py-3 rounded-full hover:bg-teal-500 hover:text-white transition">
                        Dog Friendly
                    </button>
                    <button className="bg-gray-800 text-gray-300 px-5 py-3 rounded-full hover:bg-teal-500 hover:text-white transition">
                        Safety
                    </button>
                    <button className="bg-gray-800 text-gray-300 px-5 py-3 rounded-full hover:bg-teal-500 hover:text-white transition">
                        Trails
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
