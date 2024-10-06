"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import {
    EnvelopeIcon,
    ShieldCheckIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid"
import React from "react"

export default function Home() {
    const { data: session } = useSession()

    return (
        <div className="relative min-h-screen bg-black text-white">
            {/* Background Shapes */}
            <div className="fixed top-0 left-0 w-[225%] h-[225%] translate-x-[5%] -translate-y-[27%] transform rotate-180">
                <Image
                    className="object-contain opacity-30"
                    src="/SHAPES_BLACK.png"
                    alt="Background Shapes"
                    fill
                />
            </div>

            {/* Main content with logo and text */}
            <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-bebas-neue)] z-10">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    {/* Logo */}
                    <Image
                        src="/NGMA-AUTH-BLACK.png"
                        alt="NextGen Management Agency logo"
                        width={256}
                        height={75}
                        priority
                    />

                    {/* Main content */}
                    <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
                        Welcome to NextGen Management Agency
                    </h1>
                    <p className="text-lg sm:text-xl text-center sm:text-left">
                        Manage talent and clients seamlessly with our all-in-one
                        solution for agencies.
                    </p>

                    <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-bebas-neue)]">
                        <li className="mb-2">
                            {session ? (
                                <>
                                    Signed in as {session.user?.email}.{" "}
                                    <button onClick={() => signOut()}>
                                        Sign out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => signIn("auth0")}>
                                        To get started, sign in to your account.
                                    </button>
                                </>
                            )}
                        </li>
                        <li>
                            Manage your talent, track projects, and deliver
                            exceptional results.
                        </li>
                    </ol>
                </main>

                {/* Footer Section */}
                <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center absolute bottom-5 w-full">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <EnvelopeIcon className="w-5 h-5" aria-hidden="true" />
                        Contact
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="/about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserCircleIcon
                            className="w-5 h-5"
                            aria-hidden="true"
                        />
                        About
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ShieldCheckIcon
                            className="w-5 h-5"
                            aria-hidden="true"
                        />
                        Privacy Policy
                    </a>
                </footer>
            </div>
        </div>
    )
}
