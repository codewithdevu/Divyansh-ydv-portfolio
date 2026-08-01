import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col items-center justify-center p-4 font-mono">
      <h1 className="text-4xl font-bold font-serif mb-2">404 - Page Not Found</h1>
      <p className="text-neutral-400 mb-6">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
