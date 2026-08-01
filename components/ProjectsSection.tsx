'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="py-12 max-w-5xl mx-auto px-4 sm:px-6 border-t border-neutral-900">
      <div className="mb-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          Featured Projects
        </h2>
      </div>

      {/* 2-Column Grid Layout matching ayushworks.com screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between space-y-4"
          >
            {/* Top Project Screenshot */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-neutral-800/90 bg-neutral-950 shadow-lg group-hover:border-neutral-700 transition-colors">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-neutral-200 transition-colors">
                {project.title}
              </h3>
              <div className="text-xs sm:text-sm font-mono text-neutral-400 font-medium">
                {project.techStack.join(' / ')}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed font-sans font-normal line-clamp-3">
              {project.description}
            </p>

            {/* Action Links matching ayushworks.com screenshot 1:1 */}
            <div className="pt-2 flex items-center gap-6 font-mono text-sm border-t border-neutral-900/60">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-300 underline underline-offset-4 flex items-center gap-1.5 font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white underline underline-offset-4 flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repo Url</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
