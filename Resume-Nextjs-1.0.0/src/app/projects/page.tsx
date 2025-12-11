// app/projects/page.tsx
"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
  const [iotAnimationData, setIotAnimationData] = useState<any>(null);
  const [ciscoAnimationData, setCiscoAnimationData] = useState<any>(null);
  const [bgAnimationData, setBgAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/wave.json")
      .then((res) => res.json())
      .then((data) => setIotAnimationData(data));
    fetch("/animations/wave.json")
      .then((res) => res.json())
      .then((data) => setCiscoAnimationData(data));
    fetch("/animations/background.json")
      .then((res) => res.json())
      .then((data) => setBgAnimationData(data));
  }, []);

  return (
    <section className="relative py-16 md:py-32 bg-softGray">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-30 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/images/home/about-me/about-banner-img.svg')",
        }}
      ></div>

      {/* Background Lottie Animation */}
      {bgAnimationData && (
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
          <Lottie animationData={bgAnimationData} loop className="w-full h-full" />
        </div>
      )}

      <div className="relative z-20 container mx-auto flex flex-col gap-16">
        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-white">
          My Projects
        </h1>

        {/* IoT Hardware Prototype */}
        <div className="relative bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              IoT Hardware Prototype
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Developed a working IoT hardware prototype using ESP32, temperature, humidity, and soil moisture sensors. Implemented real-time data monitoring and wireless communication.
            </p>

            {/* PDF Link */}
      <a
  href="/leaf.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-block text-red-500 font-semibold mt-4 transition-all duration-300 ease-in-out hover:text-red-700 hover:scale-105"
>
  View PDF
  <span
    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-700 transition-all duration-300 ease-in-out hover:w-full"
  ></span>
</a>

          </div>

          {/* IoT Lottie Animation */}
          {iotAnimationData && (
            <div className="w-[300px] h-[300px] flex-shrink-0">
              <Lottie animationData={iotAnimationData} loop />
            </div>
          )}
        </div>

        {/* CISCO Networking Setup */}
        <div className="relative bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              CISCO Networking Setup
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Configured and tested networking setups as part of CISCO CCNA certification practice.
            </p>

            {/* PDF Link */}
         <a
  href="/leaf.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-block text-red-500 font-semibold mt-4 transition-all duration-300 ease-in-out hover:text-red-700 hover:scale-105"
>
  View PDF
  <span
    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-700 transition-all duration-300 ease-in-out hover:w-full"
  ></span>
</a>

          </div>

          {/* CISCO Lottie Animation */}
          {ciscoAnimationData && (
            <div className="w-[300px] h-[300px] flex-shrink-0">
              <Lottie animationData={ciscoAnimationData} loop />
            </div>
          )}
        </div>

        {/* Web Development Projects */}
        <div className="relative bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Web Development Projects
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Built personal and university web projects using Next.js, React, and Tailwind CSS.
          </p>

          {/* PDF Link */}
        <a
  href="/leaf.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-block text-red-500 font-semibold mt-4 transition-all duration-300 ease-in-out hover:text-red-700 hover:scale-105"
>
  View PDF
  <span
    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-700 transition-all duration-300 ease-in-out hover:w-full"
  ></span>
</a>

        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
