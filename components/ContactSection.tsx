'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 max-w-5xl mx-auto px-4 sm:px-6 border-t border-neutral-900">
      <div className="mb-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-2">
          Let’s Connect
        </h2>
        <p className="text-neutral-400 font-sans text-sm sm:text-base">
          Have a project in mind or looking for a software engineer? Send a message directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {/* Direct Contact Info */}
        <div className="space-y-6">
          <div className="bg-[#121215] border border-neutral-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-5 h-5 text-neutral-300" />
                <span className="font-mono text-sm">{personal.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center gap-3 text-neutral-300 font-mono text-sm pt-2 border-t border-neutral-800/80">
              <Phone className="w-4 h-4 text-neutral-400" />
              <span>{personal.phone}</span>
            </div>

            <div className="flex items-center gap-3 text-neutral-300 font-mono text-sm pt-2 border-t border-neutral-800/80">
              <MapPin className="w-4 h-4 text-neutral-400" />
              <span>{personal.location}</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-[#121215] border border-neutral-800 text-white font-sans placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors text-sm"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-[#121215] border border-neutral-800 text-white font-sans placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors text-sm"
          />
          <textarea
            required
            rows={4}
            placeholder="Your Message..."
            className="w-full px-4 py-3 rounded-xl bg-[#121215] border border-neutral-800 text-white font-sans placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors text-sm resize-none"
          />
          <button
            type="submit"
            disabled={status !== 'idle'}
            className="w-full py-3 rounded-xl bg-white text-black font-mono font-semibold text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <span>Sending...</span>
            ) : status === 'success' ? (
              <span className="text-emerald-700">Message Sent Successfully!</span>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
