// app/about-me/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import aboutAnimation from "@/animations/influencer.json";

const AboutMePage: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* Banner Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/home/about-me/about-banner-img.svg"
          alt="About Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto py-12 px-6 md:px-10">
        <h1 className="text-6xl font-extrabold mb-8 text-center">About Me</h1>

        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          {/* Lottie Animation */}
          <div className="w-full md:w-1/3">
            <Lottie animationData={aboutAnimation} loop={true} />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              I am Asjath, a dedicated Computer Science undergraduate with a strong passion
              for technology, innovation, and problem-solving. My interests span across IoT,
              embedded systems, and modern web development, where I love combining hardware
              and software to create practical, real-world solutions. I enjoy working with
              microcontrollers, sensors, and IoT modules such as the ESP32, and I’m
              constantly exploring new ways to integrate them into smart systems. Whether
              I’m prototyping a device, writing firmware, or building a web interface, I’m
              motivated by the excitement of seeing an idea come to life through code and
              engineering.
              <br />
              <br />
              Beyond hardware, I am also deeply interested in building clean, responsive,
              and user-friendly web applications. I frequently experiment with frameworks
              like Next.js and React, improving my skills in frontend design and full-stack
              development. Learning new technologies is something I genuinely enjoy, and I
              spend a lot of time reading, researching, and experimenting with tools that
              help me grow as a developer.
              <br />
              <br />
              Outside of my academic work, I like working on small tech projects,
              exploring robotics, and reading articles about emerging technologies. I’m
              always excited to challenge myself, improve my abilities, and contribute to
              impactful projects that blend creativity and engineering.
            </p>
        

            {/* Social Links */}
            <div className="mt-8 flex items-center justify-center gap-10 text-lg font-medium">
              <a
                href="https://instagram.com/"
                target="_blank"
                className="text-gray-700 hover:text-red-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                Instagram
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                className="text-gray-700 hover:text-red-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                Facebook
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="text-gray-700 hover:text-red-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;
