"use client";

import { useState } from "react";

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "What programming languages do you use?",
      answer: "I primarily use JavaScript, TypeScript, and Python for projects and web development. I also occasionally work with C++ and Java for small applications and microcontroller projects. My focus is on writing clean, efficient code and building scalable applications across web and hardware platforms.",
    },
    {
      question: "Do you work on hardware projects?",
      answer: "Yes! I build IoT prototypes using ESP32, sensors, and microcontrollers. These projects include smart home devices, environmental monitoring systems, and automation tools for small-scale applications. I enjoy combining software and hardware to create functional, real-world solutions.",
    },
    {
      question: "How can I contact you?",
      answer: "You can contact me via email at hello@example.com, through my LinkedIn profile, or via my portfolio contact form. I usually respond within 24 hours to inquiries regarding collaborations, freelance projects, or questions about my work.",
    },
    {
      question: "Do you offer freelance services?",
      answer: "Yes, I take freelance projects in web development, IoT solutions, and small apps. I enjoy working on short-term contracts that require both creativity and technical expertise. You can reach out with project details and timelines for a consultation.",
    },
    {
      question: "Can I see some of your past projects?",
      answer: "Yes, my portfolio showcases projects related to web apps, IoT devices, and microcontroller-based solutions. Each project includes a brief description, technologies used, and links to live demos or source code where available.",
    },
    {
      question: "What frameworks do you work with?",
      answer: "I mostly work with React, Next.js, and Node.js for web projects, and Arduino and ESP32 for hardware projects. I also have experience with TailwindCSS for styling, Express.js for backend APIs, and Firebase for quick cloud solutions.",
    },
    {
      question: "Do you provide maintenance for your projects?",
      answer: "Yes, I offer maintenance and updates for both web and IoT projects on request. This includes bug fixes, security updates, adding new features, and ensuring that the application continues to perform optimally over time.",
    },
    {
      question: "Are you open to collaboration?",
      answer: "Absolutely! I enjoy collaborating with developers, designers, and tech enthusiasts on innovative projects. Working together allows for idea sharing, problem solving, and building better solutions than one could achieve alone.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Truncate text for preview
  const truncateText = (text: string, wordLimit = 50) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-16 px-6"
      style={{
        backgroundImage: `url("/images/home/about-me/about-banner-img.svg")`,
      }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="border rounded-lg p-6 cursor-pointer bg-white hover:bg-red-100 hover:shadow-xl hover:scale-105 transition-all duration-200 ease-in-out"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg md:text-xl font-semibold flex justify-between items-center">
                  {faq.question}
                  <span className="ml-4 text-red-500 font-medium">
                    {isExpanded ? "Show Less ↑" : "Read More ↓"}
                  </span>
                </h2>

                <p className="mt-3 text-gray-700">
                  {isExpanded ? faq.answer : truncateText(faq.answer, 50)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
