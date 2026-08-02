'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import GithubCalendar from './GithubCalendar';

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="pt-4 pb-4 max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
      {/* Responsive Hero Layout: Photo fixed at 280px (never shrinks), text adapts cleanly below 950px */}
      <div className="flex flex-col min-[950px]:flex-row items-center justify-between gap-8 min-[950px]:gap-12">
        {/* Left Bio Content */}
        <div className="order-2 min-[950px]:order-1 flex-1 space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Divyansh, 21
          </h1>

          <div className="text-neutral-300 font-sans text-base sm:text-lg space-y-4 leading-relaxed font-normal">
            <p>
              Product-focused <span className="text-white font-medium">MERN Stack Software Engineer</span> who ships fast. I turn complex ideas into polished, high-performance web applications and obsess over details that make software feel right.
            </p>

            <p>
              I’ve worked on full-stack web apps, async processing queues (<span className="text-white">BullMQ & Redis</span>), video transcoding pipelines (<span className="text-white">FFmpeg & HLS</span>), and type-safe serverless backend systems. Mostly with <span className="text-white">TypeScript, React, Node.js, Express, MongoDB</span>, and <span className="text-white">Next.js 15</span>.
            </p>

            <p>
              Pursuing <span className="text-white">B.Sc. in Mathematics</span> at Samrat Prithviraj Chauhan Govt. College, Ajmer. Combining analytical mathematical logic with modern software engineering.
            </p>

            <p className="pt-2">
              <span className="text-white font-medium">Open to Work</span>: Full-Time, Freelance, or Collabs.{' '}
              <button
                data-cal-namespace=""
                data-cal-link="divyansh-yadav-nffvkt/15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors font-medium cursor-pointer inline-block"
              >
                Let’s talk.
              </button>
            </p>
          </div>
        </div>

        {/* Right Real User Photo - Fixed 280px width & height (shrink-0 prevents image from shrinking below 950px) */}
        <div className="order-1 min-[950px]:order-2 shrink-0 flex items-center justify-center">
          <div className="relative aspect-square w-[280px] h-[280px] shrink-0 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
            <Image
              src="/divyansh_photo.jpg"
              alt="Divyansh Yadav"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>

      {/* Expanded GitHub Activity Heatmap */}
      <GithubCalendar />
    </section>
  );
}
