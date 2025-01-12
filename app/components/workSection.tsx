"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const works = [
    {
      title: "Calcumat",
      subtitle: "Calculus Calculator App",
      image: "/calcumat.png",
      description:
        "A Calculus calculator app that provides complex number and determinant calculations, along with quizzes on these topics.",
      url: "https://faridfirdaus-fred.github.io/calculus-project/",
    },
    {
      title: "Portfolio Website",
      subtitle: "Portfolio Website Using Tailwind CSS",
      image: "/portfoliotailwind.png",
      description:
        "A Portfolio Website Using Tailwind CSS and Javascript Vanila.",
      url: "https://faridfirdaus-fred.github.io/portfolio-website",
    },
    {
      title: "Portfolio Website",
      subtitle: "Portfolio Website Using Tailwind CSS",
      image: "/portfolio.png",
      description:
        "A Portfolio Website Using Tailwind CSS and Javascript Vanila.",
      url: "https://portfolio-website-next-coral.vercel.app/",
    },
  ];

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? works.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    let timeoutId;
    if (isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Increased duration for smoother transition
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isTransitioning]);

  // Calculate indices with circular looping
  const prevIndex = (currentIndex - 1 + works.length) % works.length;
  const nextIndex = (currentIndex + 1) % works.length;

  return (
    <section
      id="work"
      className="p mt-28 font-semibold py-10 w-full mx-auto h-full text-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
      <div className="relative mx-auto overflow-hidden max-w-full">
        <div className="w-full flex justify-center items-center space-x-4">
          <a
            href={works[prevIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full px-2 text-center transition-transform duration-1000 ease-in-out
              z-10 scale-75 opacity-50 ${isTransitioning ? "-translate-x-full" : "translate-x-0"}
            `}
          >
            <Image
              src={works[prevIndex].image}
              alt={works[prevIndex].title}
              width={500}
              height={500}
              className="rounded-2xl bg-white mx-auto mb-4 shadow-lg"
            />
          </a>
          <a
            href={works[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full px-2 text-center transition-transform duration-1000 ease-in-out
              z-20 scale-100 opacity-100 ${isTransitioning ? "translate-x-0" : "translate-x-0"}
            `}
          >
            <Image
              src={works[currentIndex].image}
              alt={works[currentIndex].title}
              width={500}
              height={500}
              className="rounded-2xl bg-white mx-auto mb-4 shadow-lg"
            />
            <div className="text-center h-32 overflow-auto">
              <h3 className="text-xl font-semibold">{works[currentIndex].title}</h3>
              <p className="text-gray-600">{works[currentIndex].subtitle}</p>
              <p className="text-gray-500 mt-2">{works[currentIndex].description}</p>
            </div>
          </a>
          <a
            href={works[nextIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full px-2 text-center transition-transform duration-1000 ease-in-out
              z-10 scale-75 opacity-50 ${isTransitioning ? "translate-x-full" : "translate-x-0"}
            `}
          >
            <Image
              src={works[nextIndex].image}
              alt={works[nextIndex].title}
              width={500}
              height={500}
              className="rounded-2xl bg-white mx-auto mb-4 shadow-lg"
            />
          </a>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-1/4 top-1/3 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-600 transition-colors duration-300 z-30"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-1/4 top-1/3 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-600 transition-colors duration-300 z-30"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default WorkSection;
