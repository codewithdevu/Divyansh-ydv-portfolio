'use client';

import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="py-8 border-t border-neutral-900 bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between font-mono text-xs text-neutral-400">
        <div>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
