'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import GithubCalendar from './GithubCalendar';

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="pt-4 pb-4 max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
      {/* 
        Professional Responsive Layout:
        - Desktop (> 920px): Text left, Photo right (2-column side-by-side)
        - Tablet & Mobile (<= 920px): Photo TOP centered, Text BOTTOM full-width (prevents squished text)
      */}
      <div className="grid grid-cols-1 min-[920px]:grid-cols-3 gap-8 min-[920px]:gap-10 items-center">
        {/* Left Bio Content - Appears below photo on tablet/mobile (<= 920px), left side on desktop */}
        <div className="order-2 min-[920px]:order-1 min-[920px]:col-span-2 space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl min-[920px]:text-5xl font-normal text-white">
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

            {/* Responsive Open to Work + Let's Talk CTA */}
            <p className="pt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-base sm:text-lg">
              <span>
                <span className="text-white font-medium">Open to Work</span>: Full-Time, Freelance, or Collabs.
              </span>
              <button
                data-cal-namespace=""
                data-cal-link="divyansh-yadav-nffvkt/15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="text-white underline underline-offset-4 hover:text-neutral-300 active:scale-95 transition-all font-medium cursor-pointer shrink-0 inline-flex items-center"
              >
                <span>Let’s talk.</span>
              </button>
            </p>
          </div>
        </div>

        {/* Right Real User Photo - Appears TOP centered on tablet/mobile (<= 920px), right side on desktop */}
        <div className="order-1 min-[920px]:order-2 min-[920px]:col-span-1 flex items-center justify-center w-full">
          <div className="relative aspect-square w-full max-w-[240px] sm:max-w-[280px] rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 mx-auto">
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
