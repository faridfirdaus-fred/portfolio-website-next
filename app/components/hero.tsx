import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-11/12 md:pt-10 md:w-10/12 lg:w-9/12 mx-auto flex flex-col md:flex-row">
      {/* Bagian kiri */}
      <div className="pt-20 md:pt-44 w-full md:w-1/2 mx-auto md:mr-6">
        <div>
          <h1 className="md:text-2xl text-xl font-semibold">
            Hi everyone, my name is
          </h1>
          <h1 className="md:text-4xl text-2xl font-bold">Farid Firdaus</h1>
          <p className="mt-1 opacity-80">Student</p>
          <p className="mt-2 text-base">
            This is my portfolio website where I showcase various projects and
            accomplishments in the field of IT, particularly in web development.
            Here, you will find examples of my work, including websites,
            applications, and other digital solutions that I have created. My
            goal is to demonstrate my skills and passion for technology through
            these projects.
          </p>
        </div>
        <button className="bg-primary text-white px-4 py-2 mt-4 rounded-3xl hover:scale-105 transform transition duration-300">
          Contact Me
        </button>
      </div>
      {/* Bagian kanan */}
      <div className="w-full md:w-1/2 mt-20 py-20 md:mt-0 flex justify-center relative">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 z-0"
        >
          <path
            fill="#2b4257"
            d="M52.9,-54.9C67.3,-50.9,77.1,-33.1,73.8,-18C70.6,-2.9,54.3,9.6,44.9,26C35.5,42.4,32.9,62.7,23.6,67C14.4,71.3,-1.5,59.4,-12.2,48.9C-22.9,38.3,-28.5,29,-32.7,19.8C-36.8,10.6,-39.5,1.6,-43.1,-12.7C-46.6,-27,-51,-46.5,-44,-51.9C-37,-57.3,-18.5,-48.5,0.4,-48.9C19.2,-49.4,38.4,-59,52.9,-54.9Z"
            transform="translate(90 102)"
          />
        </svg>
        <Image
          src="/farid.png"
          alt="Farid Firdaus"
          width={250}
          height={250}
          className="z-10 absolute top-0 pt-20 rounded-full" // Position the image on top of the blob
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Hero;
