"use client";

const CallToAction = () => {
    return (
        <section
            className="relative bg-cover bg-center text-white py-32"
            style={{
                backgroundImage: "url('/images/cta.jpg')", // Replace with your background image
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Start Your Adventure?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Sign up today and explore the best outdoor rentals, trails, and experiences near you.
                </p>
                <a
                    href="/signup"
                    className="bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-400 transition"
                >
                    Join Now
                </a>
            </div>
        </section>
    );
};

export default CallToAction;
