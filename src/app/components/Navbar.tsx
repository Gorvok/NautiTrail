"use client";

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-4 shadow-md">
            <div className="flex items-center justify-between container mx-auto">
                {/* Logo */}
                <div className="logo">
                    <Link href="/">
                        <Image
                            src="/images/icon.svg"
                            alt="NautiTrail Logo"
                            width={120}
                            height={120}
                            className="max-h-16"
                        />
                    </Link>
                </div>

                {/* Navbar Links */}
                <div className="space-x-6 text-sm">
                    <Link
                        href="/"
                        className="text-gray-400 hover:text-teal-400 transition"
                    >
                        Home
                    </Link>
                    <Link
                        href="#about"
                        className="text-gray-400 hover:text-teal-400 transition"
                    >
                        About
                    </Link>
                    <Link
                        href="#trails"
                        className="text-gray-400 hover:text-teal-400 transition"
                    >
                        Trails
                    </Link>
                    <Link
                        href="#rentals"
                        className="text-gray-400 hover:text-teal-400 transition"
                    >
                        Rentals
                    </Link>
                </div>

                {/* Sign In / Sign Up or User Profile */}
                <div className="flex items-center space-x-4">
                    {!session ? (
                        <>
                            <button
                                onClick={() => signIn()}
                                className="text-gray-400 hover:text-teal-400 transition"
                            >
                                Sign In
                            </button>
                            <Link href="/signup">
                                <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-400 transition">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-400 text-sm">
                                {session.user?.name}
                            </span>
                            <button
                                onClick={() => signOut()}
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
