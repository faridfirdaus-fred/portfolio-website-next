"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";

// Daftar teks untuk animasi scrolling
const texts = [
  "I am Passionate to Learn About Development, especially Web Development",
  "Now, I usually use JavaScript to create an interactive website, I use Next.js as Framework of React.js and TailwindCSS as CSS Framework",
  "Not only that, I also learn about Backend Development, I use Node.js and Express.js to create a RESTful API",
  "I also interested to learn php, especially Laravel Framework",
  "It is also possible that I will learn about AI and Machine Learning in the future"
];

// Komponen utama
const ScrollingText = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollX, setScrollX] = useState(100); // Initial position on the right (100%)
  const [rotateDeg, setRotateDeg] = useState(0); // State to track rotation

  // Fungsi untuk mengatur elemen yang sedang terlihat
  const handleInView = (index: number, inView: boolean) => {
    if (inView) setActiveIndex(index);
  };

  // Track scroll and update scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY; // Get vertical scroll position
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight; // Maximum scroll
      const scrollFraction = scrollPos / maxScroll; // Fraction of the scroll
      const newX = 100 - scrollFraction * 100; // Adjust position based on scroll
      const newRotate = scrollFraction * 10; // Adjust rotation based on scroll (10 degrees max)

      setScrollX(newX); // Update the position
      setRotateDeg(newRotate); // Update the rotation
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up event listener
  }, []);

  return (
    <div className="w-full h-screen flex py-0 md:items-center mt-0 md:mt-48 justify-center mx-auto bg-background md:py-40">
      {/* Bagian Kiri */}
      <div className="md:w-8/12 w-full text-left space-y-8  font-bold px-4 md:px-10 md:space-y-20">
        {texts.map((text, index) => (
          <InViewText
            key={index}
            index={index}
            activeIndex={activeIndex}
            handleInView={handleInView}
            text={text}
          />
        ))}
      </div>

      {/* Bagian Kanan */}
      <div className="md:w-4/12 hidden h-full md:flex justify-center items-center">
        {/* GitHub icon moving dynamically */}
        <motion.div
          className="text-9xl text-gray-700 hover:text-primary transition-all"
          style={{
            transform: `translateX(${scrollX}%) rotate(${rotateDeg}deg)`, // Dynamically move and rotate based on scroll
            transition: "transform 0.5s ease-out", // Smooth transition for movement
          }}
        >
          <a
            href="https://github.com/faridfirdaus-fred"
            target="_blank"
            rel="noopener noreferrer"
            className="text-9xl"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

// Komponen untuk setiap teks
interface InViewTextProps {
  index: number;
  activeIndex: number;
  handleInView: (index: number, inView: boolean) => void;
  text: string;
}

const InViewText = ({
  index,
  activeIndex,
  handleInView,
  text,
}: InViewTextProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Terlihat 50% di viewport
  });

  useEffect(() => {
    handleInView(index, inView);
  }, [inView, index, handleInView]);

  // Mengatur state animasi berdasarkan index
  const animateState =
    activeIndex === index
      ? "visible"
      : activeIndex > index
      ? "inactive"
      : "hidden";

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={animateState}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        inactive: { opacity: 0.5, y: 0 },
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-xl md:text-5xl md:pl-14"
    >
      {text}
    </motion.h1>
  );
};

export default ScrollingText;
