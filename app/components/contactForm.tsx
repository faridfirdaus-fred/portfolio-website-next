"use client";

import React, { useState } from "react";
import Button from "./button";
import { FaEnvelope, FaExternalLinkAlt, FaCopy, FaCheck } from "react-icons/fa";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  const recipientEmail = "faridfirdaus.mail@gmail.com";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getEmailContent = () => {
    const formattedSubject =
      formData.subject.trim() || `Inquiry from ${formData.name.trim() || "Website Visitor"}`;
    const formattedBody = `From: ${formData.name.trim()}\n\n${formData.message.trim()}`;
    return { formattedSubject, formattedBody };
  };

  const getMailtoUrl = () => {
    const { formattedSubject, formattedBody } = getEmailContent();
    return `mailto:${recipientEmail}?subject=${encodeURIComponent(
      formattedSubject
    )}&body=${encodeURIComponent(formattedBody)}`;
  };

  const getGmailUrl = () => {
    const { formattedSubject, formattedBody } = getEmailContent();
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(
      formattedSubject
    )}&body=${encodeURIComponent(formattedBody)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const mailtoUrl = getMailtoUrl();
    window.location.href = mailtoUrl;
    setDispatched(true);
  };

  const handleCopyBody = () => {
    const { formattedSubject, formattedBody } = getEmailContent();
    const fullText = `Subject: ${formattedSubject}\nTo: ${recipientEmail}\n\n${formattedBody}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-3xl border border-primary/20 bg-[#E5E4E3] p-6 sm:p-8 md:p-10 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight font-outfit text-primary">
          Draft &amp; Send Message
        </h2>
        <p className="text-sm opacity-75 mt-1 font-normal">
          Isi form di bawah untuk membuka dan mengisi otomatis di aplikasi email favoritmu (Gmail, Thunderbird, Outlook, Apple Mail).
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1 font-outfit"
          >
            Nama Lengkap / Instansi <span className="text-red-700">*</span>
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
            htmlFor="subject"
            className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1 font-outfit"
          >
            Subjek / Topik
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Diskusi Proyek / Tawaran Kolaborasi AppSec"
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
            Pesan <span className="text-red-700">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tuliskan detail kebutuhan, proyek, atau pesan kamu di sini..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-primary/25 bg-white/70 text-primary placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all resize-y"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full mt-2 py-3 text-base flex items-center justify-center gap-2"
        >
          <FaEnvelope className="w-4 h-4" />
          <span>Buka &amp; Kirim di Aplikasi Email</span>
        </Button>
      </form>

      {/* Alternative dispatch links & copied status */}
      {dispatched && (
        <div className="mt-5 p-4 rounded-2xl bg-white/80 border border-primary/20 space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-primary">
            Aplikasi email default kamu sedang dibuka dengan subjek dan format pesan terisi otomatis!
          </p>
          <p className="text-xs opacity-75">
            Jika aplikasi email lokal belum terpasang atau tidak terbuka, kamu bisa langsung buka di Web Gmail atau salin teks pesan:
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <a
              href={getGmailUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-primary text-secondary hover:opacity-90 transition-opacity"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              <span>Buka di Web Gmail</span>
            </a>
            <button
              type="button"
              onClick={handleCopyBody}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-primary/25 bg-secondary text-primary hover:bg-primary/5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <FaCheck className="w-3 h-3 text-emerald-600" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <FaCopy className="w-3 h-3" />
                  <span>Salin Teks Lengkap</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
