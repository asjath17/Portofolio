"use client";

import Lottie from "lottie-react";
import aboutAnimation from "@/animations/home.json";

const AboutMe = () => {
  return (
    <section className="relative">
      {/* Background Section */}
      <div className="relative bg-softGray py-20 md:py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center opacity-10"
          style={{
            backgroundImage: "url('/images/home/about-me/about-banner-img.svg')",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
          
          {/* Left Text Section */}
          <div className="flex-1 lg:max-w-2xl">
            {/* Heading */}
            <div className="flex items-center gap-2 border-b border-black pb-3 mb-6">
              <h2>About Me</h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-black leading-relaxed">
              I am a motivated and creative technology enthusiast with a strong passion for web development and modern digital solutions. Over the course of my studies and personal projects, I have developed a solid understanding of programming languages, responsive design, and building user-friendly interfaces. I enjoy exploring new frameworks and tools to enhance my skills, and I continuously strive to write clean, efficient code that contributes to meaningful digital experiences. Collaborating on real-world projects has strengthened my problem-solving abilities and adaptability, allowing me to effectively translate ideas into functional solutions. My focus is on continuous learning and innovation, aiming to create digital products that are both intuitive and impactful. I am excited to apply my technical expertise and creativity to contribute to projects that drive positive change.
            </p>

            {/* Languages */}
            <div className="pt-8 flex flex-wrap items-center gap-3">
              <h2 className="text-base xl:text-xl text-black mr-3">Languages:</h2>
              {["English", "Tamil", "Sinhala"].map((lang) => (
                <p
                  key={lang}
                  className="bg-transparent border-2 border-red-500 py-2 md:py-3.5 px-4 md:px-5 rounded-full text-base xl:text-xl text-black 
                             transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-500 hover:text-white hover:shadow-lg cursor-pointer"
                >
                  {lang}
                </p>
              ))}
            </div>
          </div>

<div className="w-[303px] h-[440px] -mt-2 translate-x-5 flex flex-col items-center">

  <Lottie
    animationData={aboutAnimation}
    loop
    autoplay
    className="w-full h-full"
  />

  {/* Text below animation */}
  <p className="mt-2 w-full text-black text-base md:text-lg font-sans font-bold italic text-justify leading-tight">
    "I love connecting with the tech community, sharing ideas and projects. Follow me on social media to see my latest work and collaborations, or just say hi!"
  </p>
            
            {/* Social Links */}
            {/* Social Links */}
<div className="pt-8 w-full flex justify-end">
  <div className="flex gap-6 items-center">
  
</div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/accounts/login/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent p-3 rounded-full text-black hover:text-pink-500 hover:bg-white shadow-sm transition-transform duration-300 transform hover:scale-110"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 0 5.5 0 4.3.1 3.3.3c-1 .2-1.8.5-2.6 1.2C.5 2.3.2 3.1 0 4.1.1 5.1 0 6.3 0 7.8c0 1.3 0 1.7 0 5.2s0 3.9.1 5.2c.1 1.5.2 2.7.3 3.7.2 1 .5 1.8 1.2 2.6.8.8 1.6 1 2.6 1.2 1 .1 2.2.2 3.7.3 1.3.1 1.7.1 5.2.1s3.9 0 5.2-.1c1.5-.1 2.7-.2 3.7-.3 1-.2 1.8-.5 2.6-1.2.8-.8 1-1.6 1.2-2.6.1-1 .2-2.2.3-3.7.1-1.3.1-1.7.1-5.2s0-3.9-.1-5.2c-.1-1.5-.2-2.7-.3-3.7-.2-1-.5-1.8-1.2-2.6-.8-.8-1.6-1-2.6-1.2C19.7.1 18.5 0 17 0h-5z"/>
                  <circle cx="12" cy="12" r="3.2"/>
                  <circle cx="18.4" cy="5.6" r="1.2"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent p-3 rounded-full text-black hover:text-blue-600 hover:bg-white shadow-sm transition-transform duration-300 transform hover:scale-110"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.765v2.316h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.406 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent p-3 rounded-full text-black hover:text-blue-700 hover:bg-white shadow-sm transition-transform duration-300 transform hover:scale-110"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.09 20.452H3.545V9h3.545v11.452zM5.318 7.544a2.054 2.054 0 110-4.108 2.054 2.054 0 010 4.108zM20.452 20.452h-3.546v-5.568c0-1.33-.025-3.039-1.85-3.039-1.851 0-2.136 1.446-2.136 2.939v5.668h-3.545V9h3.405v1.561h.049c.474-.9 1.632-1.85 3.36-1.85 3.593 0 4.255 2.365 4.255 5.444v6.297z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
