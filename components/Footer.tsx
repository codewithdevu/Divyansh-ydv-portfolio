'use client';

import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="py-10 border-t border-neutral-900 bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
        <div>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={personal.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Twitter className="w-4 h-4" />
            <span>X</span>
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
