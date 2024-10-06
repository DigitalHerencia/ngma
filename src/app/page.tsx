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
        <div className="absolute min-h-screen bg-[#0a0a0a] text-white font-[Bebas_Neue]">
            {/* Background Shapes moved slightly to the right */}
            <div className="absolute top-0 left-10 w-[225%] h-[225%] translate-x-[8%] -translate-y-[29%] transform rotate-180 z-0">
                <Image
                    className="object-contain opacity-30"
                    src="/SHAPES_BLACK.png"
                    alt="Background Shapes"
                    fill
                />
            </div>

            {/* Main content with logo and text */}
            <div className="absolute grid grid-rows-[20px_1fr_20px] items-center justify-items-center  sm:p-20">
                <main className="flex flex-col  row-start-2 items-center sm:items-start">
                    {/* Logo scaled up by 175% */}
                    <div className="ml-[115px] mb-[145px] scale-[2.25] z-10">
                        <Image
                            src="/NGMA-AUTH-BLACK.png"
                            alt="NextGen Management Agency logo"
                            width={240}
                            height={112}
                            priority
                        />
                    </div>

                    {/* Main content */}
                    <div className="mt-4">
                        <h1 className="text-7xl sm:text-7xl font-bold text-white text-center sm:text-left pr-80 z-20">
                            Welcome to NextGen Management Agency
                        </h1>
                        <p className="text-3xl sm:text-3xl text-center sm:text-left">
                            Experience seamless talent and client management
                            with a platform built <br /> to streamline
                            operations, enhance performance, and drive results.
                        </p>

                        <ol className="list-inside pt-2 pb-4 list-decimal text-lg text-center sm:text-left">
                            <li>
                                Get started today by creating an account or
                                logging in.
                            </li>
                            <li>
                                Track engagement, schedule projects, and
                                maximize growth with our cutting-edge tools.
                            </li>
                        </ol>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex gap-4 items-center flex-col sm:flex-row pb-60">
                        <a
                            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-2 hover:bg-[#48b5ff] hover:text-white text-xl h-14 px-6"
                            href="/register"
                        >
                            Create an account
                        </a>

                        <button
                            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black hover:bg-[#48b5ff] hover:text-white text-xl h-14 px-6 sm:min-w-52"
                            onClick={() => signIn("auth0")}
                        >
                            Login
                        </button>
                    </div>
                </main>

                {/* Footer Section: Icons and Text scaled by 175% */}
                <footer className="footer flex gap-8 flex-wrap items-center justify-center absolute bottom-4 w-full pb-16">
                    <a
                        className="footer-link flex items-center gap-1 transition-colors text-xl hover:text-[#48b5ff]"
                        href="/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <EnvelopeIcon
                            className="footer-icon w-7 h-7" /* Original size scaled by 1.75 */
                            aria-hidden="true"
                        />
                        Contact
                    </a>
                    <a
                        className="footer-link flex items-center gap-1 transition-colors text-xl hover:text-[#48b5ff]"
                        href="/about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserCircleIcon
                            className="footer-icon w-7 h-7" /* Scaled by 1.75 */
                            aria-hidden="true"
                        />
                        About
                    </a>
                    <a
                        className="footer-link flex items-center gap-1 transition-colors text-xl hover:text-[#48b5ff]"
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ShieldCheckIcon
                            className="footer-icon w-7 h-7" /* Scaled by 1.75 */
                            aria-hidden="true"
                        />
                        Privacy Policy
                    </a>
                </footer>
            </div>
        </div>
    )
}
