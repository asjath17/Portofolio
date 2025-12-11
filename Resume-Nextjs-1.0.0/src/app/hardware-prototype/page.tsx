// app/hardware-prototype/page.tsx
"use client";

import Image from "next/image";
import hardwareImg from "@/images/hardwareprototype/hardware.png.jpg"; // path to hardware image
import ciscoImg from "@/images/hardwareprototype/cisco.png.jpg"; // path to networking image

const HardwarePrototype = () => {
  return (
    <div className="container mx-auto py-10 px-4 space-y-12">
      {/* Hardware Prototype Section */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Hardware Prototype</h1>
        <p className="text-gray-700 mb-6">
          Developed a working prototype for an IoT-based hardware project integrating sensors, microcontrollers, and wireless communication modules. Responsible for circuit design, programming, and testing to ensure the prototype functions as intended. Gained hands-on experience with hardware troubleshooting, debugging, and iterative improvements.
        </p>

        {/* Hardware Image */}
        <Image
          src="/images/hardwareprototype/hardware.png.jpg"
          alt="Hardware Prototype"
          width={800}
          height={400}
          className="rounded-lg object-cover w-full h-80 mb-6"
        />

        <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>ESP32 Microcontroller Integration</li>
          <li>Temperature, Humidity, and Soil Moisture Sensors</li>
          <li>Wireless Communication (Wi-Fi / Bluetooth)</li>
          <li>Real-time Data Monitoring</li>
          <li>Battery-powered Portable Prototype</li>
        </ul>
      </section>

      {/* CISCO Networking Section */}
      <section>
        <h1 className="text-4xl font-bold mb-4">CISCO Networking</h1>
        <p className="text-gray-700 mb-6">
          Completed CISCO networking certification (CCNA) to gain practical knowledge in routing, switching, network security, and troubleshooting. This certification demonstrates proficiency in configuring, managing, and securing small to medium-sized networks.
        </p>

        {/* CISCO Image */}
        <Image
          src="/images/hardwareprototype/cisco.png.jpg"
          alt="CISCO Networking"
          width={800}
          height={400}
          className="rounded-lg object-cover w-full h-80 mb-6"
        />

        <h2 className="text-2xl font-semibold mb-2">Key Highlights:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Routing and Switching Fundamentals</li>
          <li>Network Topology Design</li>
          <li>IP Addressing and Subnetting</li>
          <li>Network Troubleshooting</li>
          <li>Security Fundamentals for Small Networks</li>
        </ul>
      </section>
    </div>
  );
};

export default HardwarePrototype;
