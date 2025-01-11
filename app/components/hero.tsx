"use client";

import React, { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

// Dynamic import untuk tombol
const Button = dynamic(() => import("./button"), { ssr: false });

const Hero = () => {
  const ref = useRef(null); // Referensi elemen
  const isInView = useInView(ref, { amount: 0.1 }); // Cek apakah elemen terlihat di viewport

  return (
    <div
      ref={ref} // Hubungkan elemen ini ke useInView
      className="w-full pt-16 h-screen flex flex-col md:flex-row items-center justify-center mx-auto bg-background md:pt-16"
    >
      {/* Bagian kiri */}
      <motion.div   
        className="w-full md:w-1/2 pl-6 md:pl-32 flex flex-col items-start text-center md:text-left"
        initial={{ opacity: 0, y: -50 }} // Animasi awal: posisi di bawah dan transparan
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Jika terlihat, tampilkan
        transition={{ duration: 1 }} // Durasi animasi
      >
        <h1 className="md:text-3xl text-3xl font-bold">
          Hi everyone, my name is
        </h1>
        <h1 className="md:text-5xl text-4xl font-extrabold mt-1">
          Farid Firdaus
        </h1>
        <p className="mt-1 opacity-70 font-semibold text-xl">Student</p>
        <p className="mt-4 md:text-2xl text-lg font-semibold opacity-80 max-w-lg text-left">
          This is my portfolio website where I showcase various projects and
          accomplishments in the field of IT, particularly in web development.
        </p>
        <Button className="text-xl" onClick={() => (window.location.href = "/contact")}>
          Contact Me
        </Button>
      </motion.div>

      {/* Bagian kanan */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center relative mt-16 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }} // Animasi awal
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        } // Jika terlihat, tampilkan
        transition={{ duration: 1 }}
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 z-0"
        >
          <path
            fill="#201315"
            d="M52.9,-54.9C67.3,-50.9,77.1,-33.1,73.8,-18C70.6,-2.9,54.3,9.6,44.9,26C35.5,42.4,32.9,62.7,23.6,67C14.4,71.3,-1.5,59.4,-12.2,48.9C-22.9,38.3,-28.5,29,-32.7,19.8C-36.8,10.6,-39.5,1.6,-43.1,-12.7C-46.6,-27,-51,-46.5,-44,-51.9C-37,-57.3,-18.5,-48.5,0.4,-48.9C19.2,-49.4,38.4,-59,52.9,-54.9Z"
            transform="translate(90 55)"
          />
        </svg>
        <Image
          src="/farid.png"
          alt="Farid Firdaus"
          width={300}
          height={300}
          className="z-10 rounded-full"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      
    </div>
  );
};

export default Hero;
