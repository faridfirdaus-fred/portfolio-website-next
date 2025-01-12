"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Daftar teks untuk animasi scrolling
const texts = [
  "Why did you choose web development? - I chose web development because it allows me to create interactive and dynamic applications that can reach a wide audience.",
  "What projects have you worked on? - I have worked on various projects including e-commerce websites, personal blogs, and portfolio websites using technologies like React, Next.js, and TailwindCSS.",
  "What are your future learning goals? - My future learning goals include diving deeper into backend development, exploring AI and Machine Learning, and mastering full-stack development.",
];

// Komponen utama
const Faq = () => {
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
    <div className="w-full mt-10 md:mt-20 flex flex-col items-center justify-start mx-auto bg-background pt-20 md:py-40 relative">
      {/* Judul FAQ */}
      <div className="absolute top-8 w-full text-center" data-aos="fade-right">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">FAQ</h1>
      </div>

      {/* Section Konten */}
      <div className="flex w-full py-0 md:items-center mt-10 md:mt-4 justify-center">
        {/* Bagian Kiri */}
        <div className="md:w-8/12 w-full text-left space-y-8 font-semibold px-4 md:px-10 md:space-y-20">
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
          {/* FAQ icon moving dynamically */}
          <motion.div
            className="text-9xl text-gray-700 hover:text-primary transition-all"
            style={{
              transform: `translateX(${scrollX}%) rotate(${rotateDeg}deg)`, // Dynamically move and rotate based on scroll
              transition: "transform 0.5s ease-out", // Smooth transition for movement
            }}
          >
            <a href="#faq" className="text-9xl">
              <span>?</span>
            </a>
          </motion.div>
        </div>
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
      className="text-xl md:text-3xl md:pl-14"
    >
      {text}
    </motion.h1>
  );
};

export default Faq;
