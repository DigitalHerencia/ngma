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
            <div className="absolute top-0 left-0 w-full h-full opacity-30 z-10 transform scale-[1.5] -translate-x-[-75vw] -scale-x-[1.5]">
                <Image
                    src="/SHAPES_BLACK.png"
                    alt="Background Shapes"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-0 flex flex-col items-start justify-center min-h-screen px-8 md:px-24 -translate-y-[5vw]">
                {/* Logo - doubled size */}
                <div className="mb-6">
                    {" "}
                    {/* Reduced the bottom margin to raise the logo */}
                    <Image
                        src="/NGMA-AUTH-BLACK.png"
                        alt="NextGen Management Agency Logo"
                        width={700} // Increased size from 350 to 700 (100% larger)
                        height={300} // Increased height to match scaling
                        priority
                    />
                </div>

                {/* Headline */}
                <h1 className="text-2xl md:text-3xl font-bold mb-4 ml-10 text-left leading-tight">
                    Elevate Your Career with <br /> NextGen Management Agency
                </h1>

                {/* Subtext */}
                <p className="text-lg text-left max-w-2xl mb-4 ml-10 text-gray-300">
                    Join a platform designed to streamline talent management,
                    boost growth, and deliver outstanding results. Discover how
                    we can help you grow your audience and maximize your
                    potential.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 ml-10">
                    <a
                        href="/register"
                        className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white py-3 px-8 rounded-full text-lg 
                                  transition-colors hover:text-[#48b5ff] hover:text-[#48b5ff]"
                    >
                        Create an Account
                    </a>
                    <button
                        onClick={() => signIn("auth0")}
                        className="bg-white text-black py-3 px-8 rounded-full text-lg transition-colors 
                                   hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 
                                   hover:text-[#48b5ff]" // Matching blue hover text color
                    >
                        Login
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full flex justify-center gap-8 pb-20 text-lg z-50">
                {" "}
                {/* Set z-index to 50 to bring it to the front */}
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
