"use client";

const SignupForm = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
        <section
            id="signup"
            className="bg-gray-100 rounded-lg mx-auto my-10 max-w-3xl py-12 px-6 text-white shadow-lg"
        >
            <h2 className="text-teal-400 text-center text-4xl font-bold mb-6">
                Stay Updated with NautiTrail!
            </h2>
            <p className="text-gray-300 text-lg text-center mb-8 leading-relaxed">
                Join our journey as we build the ultimate platform for outdoor enthusiasts.
                By signing up, you'll receive exclusive updates, early access to new
                features, and the latest news on outdoor adventures, rentals, and hidden
                gems. Be the first to know and never miss out on an opportunity to explore
                the great outdoors with NautiTrail.
            </p>
            {/* MailerLite Form */}
            <div className="flex justify-center">
                <div className="ml-embedded w-full" data-form="Vw11Tz"></div>
            </div>
        </section>
    </div>
    );
};

export default SignupForm;
