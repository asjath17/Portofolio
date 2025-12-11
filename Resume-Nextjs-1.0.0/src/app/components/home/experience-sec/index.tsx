"use client";

import React from "react";
import Link from "next/link";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2024",
      title: "Hardware Prototype Developer",
      company: "Personal Project / University Lab",
      type: "Project-Based",
      description:
        "Developed a working prototype for an IoT-based hardware project integrating sensors, microcontrollers, and wireless communication modules. Responsible for circuit design, programming, and testing to ensure the prototype functions as intended. Gained hands-on experience with hardware troubleshooting, debugging, and iterative improvements.",
      slug: "hardware-prototype",
    },
    {
      year: "2024",
      title: "Networking Certification",
      company: "CISCO",
      type: "Certificate",
      description:
        "Successfully completed a CISCO networking certification, gaining practical knowledge in networking fundamentals, routing and switching, and network troubleshooting. The certification demonstrates proficiency in configuring, managing, and securing networks.",
      slug: "cisco-certification",
    },
  ];

  return (
    <section className="py-10 bg-softGray">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-2 border-b border-black pb-3 mb-6">
          <h2>Experience</h2>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                group bg-white p-6 rounded-lg border border-gray-200
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl hover:border-black
              "
            >
              <p className="text-sm text-gray-500">
                {exp.year} • {exp.type}
              </p>

              <h3 className="text-xl font-semibold mt-1 text-black">
                {exp.title}
              </h3>

              <p className="text-base text-gray-700">{exp.company}</p>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-relaxed line-clamp-3">
                {exp.description}
              </p>

              {/* Read More */}
  <Link
  href="/hardware-prototype"
  className="inline-block mt-4 font-medium text-black border-b border-transparent transition-all duration-300 group-hover:border-black group-hover:tracking-wide"
>
  Read more →
</Link>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
