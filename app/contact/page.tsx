"use client"

import Head from "next/head";
import ContactForm from "../components/contactForm";
import Faq from "../components/faq";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ClipPathLink } from "../components/clipPathLink";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Increase duration for smoother animation
      easing: 'ease-in-out', // Use a smoother easing function
    });
    const mainElement = document.querySelector(".contact-page");
    if (mainElement) {
      mainElement.classList.add("animate-entrance");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className="contact-page" data-aos="fade-up">
        <h1>Contact Page</h1>
        <ContactForm />
        <Faq />
        <ClipPathLink />
      </main>
    </>
  );
}
