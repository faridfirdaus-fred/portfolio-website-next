"use client"
import React, { useState } from "react";
import Image from "next/image";

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Mulai dari gambar tengah

  const works = [
    {
      title: "Cassian Frost",
      subtitle: "Cassian's Folio",
      image: "/Screenshot (1).png", // Updated path
      description:
        "A detailed portfolio of Cassian Frost showcasing urban photography.",
    },
    {
      title: "YSL - Men's Spring 25",
      subtitle: "Fashion Showcase",
      image: "/Screenshot (2).png", // Updated path
      description:
        "A high-end fashion showcase highlighting the spring collection.",
    },
    {
      title: "Honors",
      subtitle: "Art Exhibition",
      image: "/Screenshot (2).png", // Updated path
      description:
        "An exhibition displaying abstract art and modern creativity.",
    },
    {
      title: "Future Vision",
      subtitle: "Concept Design",
      image: "/Screenshot (2).png", // Updated path
      description: "A conceptual design project for futuristic city planning.",
    },
    {
      title: "Urban Evolution",
      subtitle: "Architecture Showcase",
      image: "/Screenshot (1).png", // Updated path
      description: "A visual exploration of modern architectural marvels.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + works.length) % works.length
    );
  };

  return (
    <section id="work" className="p-8 mt-28 font-semibold py-10 w-full mx-auto h-full text-center">
      <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
      <div className="relative mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 space-x-4" // Add space between images
          style={{
            transform: `translateX(-${(currentIndex - 1) * 33.33}%)`, // Set the correct translateX value
          }}
        >
          {works.map((work, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-1/3 text-center transition-transform duration-500 ${
                currentIndex === index
                  ? "scale-100 opacity-100" // Gambar tengah lebih besar
                  : "scale-75 opacity-50" // Gambar di kiri/kanan lebih kecil
              }`}
            >
              <Image
                src={work.image}
                alt={work.title}
                width={500}
                height={500}
                className={`rounded-2xl bg-white mx-auto mb-4 transition-transform duration-500 ${
                  currentIndex === index ? "" : "blur-[2px]" // Subtle blur effect
                }`}
              />
              {currentIndex === index && (
                <div className="text-center h-32 overflow-auto">
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                  <p className="text-gray-600">{work.subtitle}</p>
                  <p className="text-gray-500 mt-2">{work.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-20  top-1/3 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-600 transition-colors duration-300"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-20 top-1/3 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-600 transition-colors duration-300"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default WorkSection;
