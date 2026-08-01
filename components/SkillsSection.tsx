'use client';

import React from 'react';
import Image from 'next/image';
import { CheckSquare } from 'lucide-react';

interface SkillItem {
  name: string;
  customImage?: string;
  icon?: React.ReactNode;
}

export default function SkillsSection() {
  // Shortened clean skill names matching dhavaljprasad.vercel.app 1:1
  const row1Skills: SkillItem[] = [
    { 
      name: 'Next.js', 
      customImage: '/icons/nextjs.png' 
    },
    { 
      name: 'TypeScript', 
      customImage: '/icons/typescript.png' 
    },
    { 
      name: 'React', 
      customImage: '/icons/react.png' 
    },
    { 
      name: 'Node.js', 
      customImage: '/icons/nodejs.png' 
    },
    { 
      name: 'Express', 
      customImage: '/icons/express.png' 
    },
    { 
      name: 'MongoDB', 
      customImage: '/icons/mongodb.png' 
    },
    { 
      name: 'AWS S3', 
      customImage: '/icons/aws.png' 
    },
    { 
      name: 'Zod', 
      icon: <CheckSquare className="w-12 h-12 text-blue-400" /> 
    },
  ];

  const row2Skills: SkillItem[] = [
    { 
      name: 'BullMQ', 
      customImage: '/icons/bullmq.png' 
    },
    { 
      name: 'FFmpeg', 
      customImage: '/icons/star.png' 
    },
    { 
      name: 'HLS', 
      customImage: '/icons/cloud.png' 
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
      name: 'REST API', 
      customImage: '/icons/api.png' 
    },
    { 
      name: 'JWT Auth', 
      customImage: '/icons/nextauth.png' 
    },
  ];

  return (
    <section id="skills" className="py-10 max-w-5xl mx-auto px-4 sm:px-6 border-t border-neutral-900 overflow-hidden">
      <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6 font-normal">
        Technology & Tools
      </h2>

      {/* Marquee Container with Gradient Mask matching dhavaljprasad.vercel.app 1:1 */}
      <div className="relative w-full overflow-hidden space-y-4 rounded-xl py-2">
        {/* Left & Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Moves Left (Pauses on Hover) */}
        <div className="animate-marquee-left flex gap-4">
          {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, idx) => (
            <div
              key={`r1-${idx}`}
              className="bg-[#18181c] hover:bg-[#222228] border border-neutral-800/80 hover:border-neutral-700 rounded-2xl w-32 h-32 flex flex-col items-center justify-center p-3 gap-2 transition-all cursor-pointer shadow-lg group shrink-0"
            >
              <div className="group-hover:scale-110 transition-transform flex items-center justify-center h-14 w-14">
                {skill.customImage ? (
                  <Image
                    src={skill.customImage}
                    alt={skill.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 object-contain drop-shadow"
                  />
                ) : (
                  skill.icon
                )}
              </div>
              <span className="text-xs font-mono text-neutral-300 font-medium text-center truncate max-w-full">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 - Moves Right in Opposite Direction (Pauses on Hover) */}
        <div className="animate-marquee-right flex gap-4">
          {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, idx) => (
            <div
              key={`r2-${idx}`}
              className="bg-[#18181c] hover:bg-[#222228] border border-neutral-800/80 hover:border-neutral-700 rounded-2xl w-32 h-32 flex flex-col items-center justify-center p-3 gap-2 transition-all cursor-pointer shadow-lg group shrink-0"
            >
              <div className="group-hover:scale-110 transition-transform flex items-center justify-center h-14 w-14">
                {skill.customImage ? (
                  <Image
                    src={skill.customImage}
                    alt={skill.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 object-contain drop-shadow"
                  />
                ) : (
                  skill.icon
                )}
              </div>
              <span className="text-xs font-mono text-neutral-300 font-medium text-center truncate max-w-full">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
