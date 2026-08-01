'use client';

import React from 'react';
import Image from 'next/image';

interface SkillItem {
  name: string;
  customImage?: string;
  icon?: React.ReactNode;
}

export default function SkillsSection() {
  // Exact 15 skills requested by user split across 2 marquee rows
  const row1Skills: SkillItem[] = [
    { 
      name: 'JavaScript', 
      customImage: '/icons/javascript.png' 
    },
    { 
      name: 'TypeScript', 
      customImage: '/icons/typescript.png' 
    },
    { 
      name: 'Python', 
      customImage: '/icons/python.png' 
    },
    { 
      name: 'React.js', 
      customImage: '/icons/react.png' 
    },
    { 
      name: 'Next.js', 
      customImage: '/icons/nextjs.png' 
    },
    { 
      name: 'Tailwind CSS', 
      icon: (
        <svg className="w-12 h-12 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      ) 
    },
    { 
      name: 'Shadcn Ui', 
      icon: (
        <svg className="w-11 h-11 text-white" viewBox="0 0 256 256" fill="currentColor">
          <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      name: 'Node.js', 
      customImage: '/icons/nodejs.png' 
    },
  ];

  const row2Skills: SkillItem[] = [
    { 
      name: 'MongoDB', 
      customImage: '/icons/mongodb.png' 
    },
    { 
      name: 'Redis', 
      customImage: '/icons/redis.png' 
    },
    { 
      name: 'Docker', 
      customImage: '/icons/docker.png' 
    },
    { 
      name: 'GitHub', 
      customImage: '/icons/github.png' 
    },
    { 
      name: 'Postman', 
      customImage: '/icons/postman.png' 
    },
    { 
      name: 'Vercel', 
      customImage: '/icons/vercel.png' 
    },
    { 
      name: 'BullMQ', 
      customImage: '/icons/bullmq.png' 
    },
  ];

  return (
    <section id="skills" className="py-10 max-w-5xl mx-auto px-4 sm:px-6 border-t border-neutral-900 overflow-hidden">
      <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6 font-normal">
        Technology & Tools
      </h2>

      {/* Marquee Container with Generous Padding to Prevent Edge Clipping */}
      <div className="relative w-full overflow-hidden space-y-4 rounded-xl py-6 px-1">
        {/* Left & Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Moves Left (Hovers UPWARDS with py-3 padding) */}
        <div className="animate-marquee-left flex gap-4 py-3">
          {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, idx) => (
            <div
              key={`r1-${idx}`}
              className="bg-[#18181c] hover:bg-[#24242a] border border-neutral-800/80 hover:border-neutral-600 rounded-2xl w-32 h-32 flex flex-col items-center justify-center p-3 gap-2 transition-all duration-300 hover:-translate-y-2.5 hover:scale-105 hover:shadow-2xl hover:shadow-white/5 cursor-pointer group shrink-0"
            >
              <div className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-14 w-14">
                {skill.customImage ? (
                  <Image
                    src={skill.customImage}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className={`object-contain rounded-lg drop-shadow ${
                      skill.name === 'BullMQ' ? 'w-16 h-16 scale-125' : 'w-14 h-14'
                    }`}
                  />
                ) : (
                  skill.icon
                )}
              </div>
              <span className="text-xs font-mono text-neutral-400 group-hover:text-neutral-200 font-medium text-center truncate max-w-full transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 - Moves Right (Hovers DOWNWARDS with py-3 padding) */}
        <div className="animate-marquee-right flex gap-4 py-3">
          {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, idx) => (
            <div
              key={`r2-${idx}`}
              className="bg-[#18181c] hover:bg-[#24242a] border border-neutral-800/80 hover:border-neutral-600 rounded-2xl w-32 h-32 flex flex-col items-center justify-center p-3 gap-2 transition-all duration-300 hover:translate-y-2.5 hover:scale-105 hover:shadow-2xl hover:shadow-white/5 cursor-pointer group shrink-0"
            >
              <div className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-14 w-14">
                {skill.customImage ? (
                  <Image
                    src={skill.customImage}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className={`object-contain rounded-lg drop-shadow ${
                      skill.name === 'BullMQ' ? 'w-16 h-16 scale-125' : 'w-14 h-14'
                    }`}
                  />
                ) : (
                  skill.icon
                )}
              </div>
              <span className="text-xs font-mono text-neutral-400 group-hover:text-neutral-200 font-medium text-center truncate max-w-full transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
