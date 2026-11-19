"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _gotcha: "", // Honeypot anti-spam
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Silently reject spam bots that fill hidden honeypot
    if (formData._gotcha) {
      setStatus({ type: "success", message: "Message dispatched successfully." });
      setFormData({ name: "", email: "", subject: "", message: "", _gotcha: "" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const emailParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Portfolio Inquiry",
        message: formData.message,
      };

      await emailjs.send(
        "service_fed5lpw",
        "template_gbepq5g",
        emailParams,
        "CQdaKkJvBqKsiPYJ4"
      );

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      });
      setFormData({ name: "", email: "", subject: "", message: "", _gotcha: "" });
    } catch (error) {
      console.error("EmailJS dispatch error:", error);
      setStatus({
        type: "error",
        message:
          "Unable to send message via form. Please email directly at faridfirdaus.mail@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full rounded-3xl border border-primary/20 bg-[#E5E4E3] p-6 sm:p-8 md:p-10 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight font-outfit text-primary">
          Send a Message
        </h2>
        <p className="text-sm opacity-75 mt-1 font-normal">
          Inquiries for software development, AppSec audits, or technical consulting.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="_gotcha"
          value={formData._gotcha}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1 font-outfit"
          >
            Your Name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Farid Firdaus"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-primary/25 bg-white/70 text-primary placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1 font-outfit"
          >
            Email Address <span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@domain.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-primary/25 bg-white/70 text-primary placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1 font-outfit"
          >
            Subject / Topic
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Fullstack Role / AppSec Collaboration"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-primary/25 bg-white/70 text-primary placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1 font-outfit"
          >
            Message <span className="text-red-700">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell me about your project, timeline, or requirements..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-primary/25 bg-white/70 text-primary placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all resize-y"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          className="w-full mt-2 py-3 text-base"
        >
          {isSubmitting ? "Sending Dispatch..." : "Send Message"}
        </Button>
      </form>

      {status.message && (
        <div
          role="status"
          aria-live="polite"
          className={`mt-4 p-4 rounded-xl text-sm font-medium border ${
            status.type === "success"
              ? "bg-emerald-50 text-emerald-900 border-emerald-300"
              : "bg-red-50 text-red-900 border-red-300"
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
