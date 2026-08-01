import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Divyansh Yadav | MERN Stack Software Engineer',
  description: 'Portfolio of Divyansh Yadav - MERN Stack Software Engineer specializing in scalable full-stack web applications, async processing queues, and video streaming architectures.',
  keywords: ['Divyansh Yadav', 'MERN Stack Developer', 'React', 'Node.js', 'Next.js 15', 'TypeScript', 'Express', 'MongoDB', 'BullMQ', 'FFmpeg', 'HLS'],
  authors: [{ name: 'Divyansh Yadav' }],
  openGraph: {
    title: 'Divyansh Yadav | MERN Stack Software Engineer',
    description: 'Product-focused Engineer building high-throughput backend pipelines and modern full-stack web apps.',
    url: 'https://github.com/codewithdevu',
    siteName: 'Divyansh Yadav Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#09090b] text-neutral-200 antialiased min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
