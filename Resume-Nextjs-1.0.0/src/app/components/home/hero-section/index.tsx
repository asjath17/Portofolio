"use client";"use client";

import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "@/animations/man-and-robot.json";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative hero-section pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      
      {/* Hamburger Menu */}
      <div className="absolute top-5 left-5 z-50">
        <button
          className="flex flex-col justify-between w-8 h-6 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block h-1 w-full bg-red-600 rounded transition-transform duration-300"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }}
          ></span>
          <span
            className={`block h-1 w-full bg-red-600 rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className="block h-1 w-full bg-red-600 rounded transition-transform duration-300"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }}
          ></span>
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute left-0 mt-2 bg-red-200 shadow-lg rounded-md py-2 w-40 flex flex-col gap-2 z-50">
            <Link
              href="/about-me"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 text-white hover:bg-red-700 rounded transition-colors duration-300"
            >
              About Me
            </Link>

            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 text-white hover:bg-red-700 rounded transition-colors duration-300"
            >
              Projects
            </Link>

          <Link
  href="/faq"
  onClick={() => setMenuOpen(false)}
  className="px-4 py-2 text-white hover:bg-red-700 rounded transition-colors duration-300"
>
  FAQ
</Link>

          </div>
        )}
      </div>

      {/* Main Hero Content */}
      <div className="container relative z-10">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1 className="text-4xl font-bold">I'm Asjath</h1>
                <div className="wave text-3xl animate-bounce">👋</div>
              </div>
              <h1 className="text-2xl font-medium mt-2">
                Under Graduate / Computer Science
              </h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl mt-4">
              I am a Computer Science undergraduate with a strong interest in IoT
              systems, web development, and embedded programming. I enjoy building
              practical projects with sensors and modern web technologies.
            </p>
          </div>

          {/* Mobile Lottie */}
          <div className="block lg:hidden mt-8 pointer-events-none">
            <Lottie
              animationData={animationData}
              loop
              className="w-full h-80"
            />
          </div>
        </div>
      </div>

      {/* Desktop Lottie */}
      <div className="absolute right-0 top-0 hidden lg:block h-auto w-1/2 2xl:h-[600px] 2xl:w-[500px] z-0 pointer-events-none">
        <Lottie
          animationData={animationData}
          loop
          className="w-full h-full animate-float"
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
