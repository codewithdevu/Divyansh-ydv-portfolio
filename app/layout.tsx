import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Divyansh Yadav | MERN Stack Software Engineer',
  description:
    'Product-focused MERN Stack Software Engineer specializing in Next.js 15, TypeScript, Node.js, Express, MongoDB, and high-performance backend systems.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#09090b] text-neutral-300 antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
