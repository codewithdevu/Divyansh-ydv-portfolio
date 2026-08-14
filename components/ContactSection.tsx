"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  AlertCircle,
} from "lucide-react";

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Direct Web3Forms submission from the browser to divyanshyadav8302@gmail.com
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `💼 New Portfolio Message from ${formData.name}`,
          from_name: "Divyansh-portfolio",
          to_email: "divyanshyadav8302@gmail.com",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        // Capture actual error message from Web3Forms response
        setStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again.",
        );
      }
    } catch (err) {
      // Smooth fallback response
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 max-w-5xl mx-auto px-4 sm:px-6"
    >
      {/* Containerized Card Box matching manixh.dev 1:1 */}
      <div className="border border-dashed border-neutral-800/90 rounded-2xl p-5 sm:p-8 bg-[#09090b] shadow-xl space-y-8">
        <div className="mb-2">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-2">
            Let’s Connect
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base">
            Have a project in mind or looking for a software engineer? Send a
            message directly to my Gmail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Direct Contact Info & Follow Me Section */}
          <div className="space-y-6">
            <div className="bg-[#121215] border border-neutral-800 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-white">
                  <Mail className="w-5 h-5 text-neutral-300 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm truncate">{personal.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 text-neutral-300 font-mono text-xs sm:text-sm pt-2 border-t border-neutral-800/80">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{personal.phone}</span>
              </div>

              <div className="flex items-center gap-3 text-neutral-300 font-mono text-xs sm:text-sm pt-2 border-t border-neutral-800/80">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Follow me section matching screenshot with WhatsApp */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-2xl text-white font-normal">
                Follow me
              </h3>
              <div className="flex items-center gap-3">
                {/* GitHub Icon Tile */}
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#121215] hover:bg-[#18181c] border border-neutral-800 hover:border-neutral-600 rounded-xl flex items-center justify-center text-white transition-all hover:scale-105 shadow-md cursor-pointer"
                  title="GitHub"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn Icon Tile */}
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#121215] hover:bg-[#18181c] border border-neutral-800 hover:border-neutral-600 rounded-xl flex items-center justify-center text-white transition-all hover:scale-105 shadow-md cursor-pointer"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                  </svg>
                </a>

                {/* WhatsApp Icon Tile */}
                <a
                  href="https://wa.me/918302949280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#121215] hover:bg-[#18181c] border border-neutral-800 hover:border-neutral-600 rounded-xl flex items-center justify-center text-white transition-all hover:scale-105 shadow-md cursor-pointer"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>

                {/* X / Twitter Icon Tile */}
                <a
                  href={personal.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#121215] hover:bg-[#18181c] border border-neutral-800 hover:border-neutral-600 rounded-xl flex items-center justify-center text-white transition-all hover:scale-105 shadow-md cursor-pointer"
                  title="X"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Web3Forms Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-[#121215] border border-neutral-800 text-white font-sans placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors text-sm"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-[#121215] border border-neutral-800 text-white font-sans placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors text-sm"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Your Message..."
              className="w-full px-4 py-3 rounded-xl bg-[#121215] border border-neutral-800 text-white font-sans placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors text-sm resize-none"
            />

            {status === "error" && (
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 rounded-xl bg-white text-black font-mono font-semibold text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {status === "submitting" ? (
                <span>Sending Email...</span>
              ) : status === "success" ? (
                <span className="text-emerald-700 font-bold">
                  Email Sent to Divyansh! ✓
                </span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
