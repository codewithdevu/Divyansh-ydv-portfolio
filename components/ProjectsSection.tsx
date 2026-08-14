'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SingleProjectProps {
  project: (typeof PORTFOLIO_DATA.projects)[0];
}

function ProjectCardContent({ project }: SingleProjectProps) {
  return (
    <div className="border border-dashed border-neutral-800/90 rounded-2xl p-3.5 sm:p-5 md:p-6 bg-[#09090b] hover:border-neutral-700 transition-colors w-full">
      <div className="flex flex-col md:flex-row gap-3.5 sm:gap-6 md:gap-8 items-start">
        {/* Left Column: Image Screenshot Container */}
        <div className="w-full md:w-[42%] shrink-0">
          <div className="relative w-full rounded-xl overflow-hidden border border-neutral-800/90 bg-[#09090b] shadow-xl flex flex-col group">
            {/* macOS Browser Header Bar */}
            <div className="flex items-center justify-between px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-[#121215] border-b border-neutral-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              {project.liveUrl && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[9px] sm:text-[10px] font-mono text-cyan-400 font-medium truncate max-w-[130px] sm:max-w-[180px]">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span className="truncate">{project.liveUrl}</span>
                </div>
              )}
            </div>

            {/* Screenshot Image - Compact Aspect Ratio on Mobile */}
            <div className="relative aspect-[16/9] md:aspect-[16/10] w-full bg-[#09090b] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Title, Live/Repo Badges, Description, Technologies Used */}
        <div className="w-full md:w-[58%] flex flex-col space-y-2 sm:space-y-3">
          {/* Title & Live / GitHub Buttons Row */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base xs:text-lg sm:text-2xl font-bold text-white font-sans tracking-tight">
              {project.title}
            </h3>

            {/* Live & GitHub Badges */}
            <div className="flex items-center gap-1.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#141417] hover:bg-neutral-800 border border-neutral-800 text-[10px] sm:text-xs font-mono text-white font-medium transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                  <span>Live</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#141417] hover:bg-neutral-800 border border-neutral-800 text-[10px] sm:text-xs font-mono text-white font-medium transition-colors cursor-pointer"
                >
                  <Github className="w-3 h-3 text-neutral-400" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Description - Compact & Line Clamped on Mobile */}
          <p className="text-[12px] sm:text-xs md:text-sm text-neutral-300 leading-snug sm:leading-relaxed font-sans font-normal line-clamp-3 sm:line-clamp-none">
            {project.description}
          </p>

          {/* Technologies Used Section */}
          <div className="pt-1 space-y-1 sm:space-y-1.5">
            <h4 className="text-[10px] sm:text-xs font-bold text-white font-mono uppercase tracking-wider">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-[#141417] border border-neutral-800 text-[9px] xs:text-[10px] sm:text-xs font-mono text-neutral-300 font-medium hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StickyCardProps {
  project: (typeof PORTFOLIO_DATA.projects)[0];
  index: number;
  total: number;
  progress: any;
}

function StickyCardItem({ project, index, total, progress }: StickyCardProps) {
  const targetScale = Math.max(0.85, 1 - (total - 1 - index) * 0.05);
  const range: [number, number] = [index * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="sticky top-20 flex items-center justify-center w-full origin-top mb-6"
      style={{
        top: `calc(80px + ${index * 24}px)`,
      }}
    >
      <motion.div style={{ scale }} className="w-full">
        <ProjectCardContent project={project} />
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects = PORTFOLIO_DATA.projects;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="projects" className="py-12 max-w-5xl mx-auto px-4 sm:px-6 border-t border-neutral-900">
      <div className="mb-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          Featured Projects
        </h2>
      </div>

      {/* Desktop Layout - Vertical Stack of Full-Width Dashed Project Cards */}
      <div className="hidden md:flex md:flex-col gap-8 w-full">
        {projects.map((project) => (
          <ProjectCardContent key={project.id} project={project} />
        ))}
      </div>

      {/* Mobile/Single-Column Sticky Card Stacking Animation Container */}
      <div ref={containerRef} className="md:hidden relative flex flex-col w-full pb-8">
        {projects.map((project, i) => (
          <StickyCardItem
            key={`sticky_${project.id}`}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
