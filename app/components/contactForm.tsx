"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "./button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // Status untuk feedback pengguna

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Log formData to ensure values are correct
    console.log("Form Data:", formData);

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Log emailParams to ensure correct data is being sent
    console.log("Email Params:", emailParams);

    emailjs
      .send(
        "service_fed5lpw", // Ganti dengan Service ID Anda
        "template_gbepq5g", // Ganti dengan Template ID Anda
        emailParams,
        "CQdaKkJvBqKsiPYJ4" // Ganti dengan User ID Anda
      )
      .then((result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset formulir
      })
      .catch((error) => {
        console.error(error.text);
        setStatus("Failed to send message. Please try again later.");
      });
  };

  return (
    <div
      data-aos="fade-up"
      className="md:w-6/12 md:mb-20 md:px-28 md:py-10 md:mt-24 mx-auto contact-form bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg"
    >
      <h2 className="text-2xl text-center font-bold mb-4">Contact Us</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name:
          </label>
          <input
            placeholder="Your Name"
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Email:
          </label>
          <input
            placeholder="example@gmail.com"
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium">
            Message:
          </label>
          <textarea
            placeholder="Hola, I'm interested in your services"
            id="message"
            name="message"
            rows={5}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
        </div>
        <Button
          type="submit"
          className="bg-primary hover:scale-105 text-white rounded-xl"
        >
          Send
        </Button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
    </div>
  );
};

export default ContactForm;
