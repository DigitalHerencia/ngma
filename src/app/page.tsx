"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"
import {
    EnvelopeIcon,
    ShieldCheckIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid"

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
                <Image
                    src="/SHAPES_BLACK.png"
                    alt="Background Shapes"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                {/* Logo */}
                <div className="mb-8">
                    <Image
                        src="/NGMA-AUTH-BLACK.png"
                        alt="NextGen Management Agency Logo"
                        width={350}
                        height={150}
                        priority
                    />
                </div>

                {/* Headline */}
                <h1 className="text-6xl font-bold mb-6 text-center leading-tight">
                    Elevate Your Career with <br /> NextGen Management Agency
                </h1>

                {/* Subtext */}
                <p className="text-lg text-center max-w-2xl mb-8 text-gray-300">
                    Join a platform designed to streamline talent management,
                    boost growth, and deliver outstanding results. Discover how
                    we can help you grow your audience and maximize your
                    potential.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="/register"
                        className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white py-3 px-8 rounded-full text-lg hover:from-indigo-500 hover:to-purple-600 transition-colors"
                    >
                        Create an Account
                    </a>
                    <button
                        onClick={() => signIn("auth0")}
                        className="bg-white text-black py-3 px-8 rounded-full text-lg hover:bg-gray-300 transition-colors"
                    >
                        Login
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full flex justify-center gap-8 pb-8 text-lg">
                <a
                    className="footer-link flex items-center gap-1 transition-colors hover:text-[#48b5ff]"
                    href="/contact"
                >
                    <EnvelopeIcon className="footer-icon w-7 h-7" />
                    Contact
                </a>
                <a
                    className="footer-link flex items-center gap-1 transition-colors hover:text-[#48b5ff]"
                    href="/about"
                >
                    <UserCircleIcon className="footer-icon w-7 h-7" />
                    About
                </a>
                <a
                    className="footer-link flex items-center gap-1 transition-colors hover:text-[#48b5ff]"
                    href="/privacy-policy"
                >
                    <ShieldCheckIcon className="footer-icon w-7 h-7" />
                    Privacy Policy
                </a>
            </footer>
        </div>
    )
}
