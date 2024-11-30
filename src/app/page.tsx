// File: src/app/page.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      {/* Main Header Section */}
      <header className="w-full p-10 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/assets/logo-main-black.png"
            alt="NextGen Management Agency Logo"
            width={180}
            height={50}
          />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-10 relative">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl font-bold mb-4 text-[#ff00ff]">NEXTGEN</h1>
          <h2 className="text-3xl font-semibold mb-8">MANAGEMENT AGENCY</h2>
          <p className="mb-6 text-lg">
            Empowering Creators & Amplifying Success
          </p>
          <p className="text-md mb-10">
            Join a platform designed to streamline talent management, boost
            growth, and deliver outstanding results. Discover how we can help
            you grow your audience and maximize your potential.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4 justify-center mb-12">
            <Link href="/auth/register">
              <button className="px-8 py-4 text-lg font-bold text-black bg-[#ff00ff] rounded-md hover:bg-[#d100d1]">
                Create an Account
              </button>
            </Link>
            <Link href="/auth/login">
              <button className="px-8 py-4 text-lg font-bold text-black bg-white rounded-md hover:bg-gray-200">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Background Shapes */}
        <div className="absolute top-0 right-0">
          <Image
            src="/assets/background-shape-black.png"
            alt="Background Shape"
            width={500}
            height={500}
          />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full py-6 text-center">
        <div className="flex justify-center space-x-12">
          <Link href="/contact" className="hover:text-[#ff00ff]">
            Contact
          </Link>
          <Link href="/about" className="hover:text-[#ff00ff]">
            About
          </Link>
          <Link href="/privacy" className="hover:text-[#ff00ff]">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
