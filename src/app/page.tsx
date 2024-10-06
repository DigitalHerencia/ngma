"use client"

import Image from "next/image"
import { signIn } from "next-auth/react"
import {
    EnvelopeIcon,
    ShieldCheckIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid"

export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image
                    src="/public/SHAPES_WHITE.png"
                    alt="Background Shapes"
                    fill
                    className="object-cover opacity-30"
                />
            </div>

            {/* Logo and Welcome Text */}
            <div className="relative z-10 text-center">
                <Image
                    src="/public/NGMA-AUTH.png"
                    alt="NextGen Management Agency"
                    width={256}
                    height={75}
                    className="mb-8"
                />
                <h1 className="text-6xl font-bold text-accent">
                    Welcome to NextGen Management Agency
                </h1>
                <p className="mt-4 text-xl text-alt">
                    Manage talent and clients seamlessly with our all-in-one
                    solution for agencies.
                </p>

                <ul className="list-decimal text-lg mt-8">
                    <li className="mb-2">
                        To get started, sign in to your account.
                    </li>
                    <li>
                        Manage your talent, track projects, and deliver
                        exceptional results.
                    </li>
                </ul>

                {/* Call to Action Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <a
                        href="/register"
                        className="bg-white text-black px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
                    >
                        Join as a Talent or Client
                    </a>
                    <button
                        onClick={() => signIn("auth0")}
                        className="bg-accent text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-600 transition"
                    >
                        Login
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="absolute bottom-5 flex justify-center gap-6 text-lg">
                <a
                    href="/contact"
                    className="flex items-center gap-2 hover:underline"
                >
                    <EnvelopeIcon className="w-5 h-5" />
                    Contact
                </a>
                <a
                    href="/about"
                    className="flex items-center gap-2 hover:underline"
                >
                    <UserCircleIcon className="w-5 h-5" />
                    About
                </a>
                <a
                    href="/privacy-policy"
                    className="flex items-center gap-2 hover:underline"
                >
                    <ShieldCheckIcon className="w-5 h-5" />
                    Privacy Policy
                </a>
            </footer>
        </div>
    )
}
