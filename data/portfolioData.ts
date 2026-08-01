export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails: string[];
  techStack: string[];
  category: 'Full-Stack' | 'Next.js' | 'Backend & System Design';
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
  architectureHighlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string; level?: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Divyansh Yadav",
    handle: "codewithdevu",
    title: "MERN Stack Software Engineer",
    tagline: "Product-focused Engineer who builds high-performance web apps, async media processing pipelines, and scalable APIs.",
    location: "Ajmer, Rajasthan, India",
    email: "divyanshyadav8302@gmail.com",
    phone: "+91-8302949280",
    status: "🟢 Open for Full-Time, Freelance & Collabs",
    bio: [
      "I am a MERN Stack Software Engineer specializing in building robust, production-grade applications. I focus on high-throughput backend architectures, async processing queues, and crisp frontend experiences.",
      "Currently pursuing B.Sc. in Mathematics while architecting scalable software systems like DivyanshTube (asynchronous video processing with BullMQ & FFmpeg) and Mystery Message (type-safe anonymous messaging platform)."
    ],
    socials: {
      github: "https://github.com/codewithdevu",
      x: "https://x.com/divyansh_devv",
      linkedin: "https://www.linkedin.com/in/divyansh-yadav-08649b322/",
      email: "mailto:divyanshyadav8302@gmail.com"
    },
    stats: [
      { label: "Core Stack", value: "MERN + Next.js 15" },
      { label: "Async Pipelines", value: "BullMQ & Redis" },
      { label: "Video Tech", value: "FFmpeg & HLS" },
      { label: "Math Background", value: "B.Sc. Mathematics" }
    ]
  },

  projects: [
    {
      id: "divyanshtube",
      title: "DivyanshTube",
      subtitle: "Scalable Asynchronous Video Streaming Platform",
      description: "Engineered a high-performance video streaming platform featuring multi-resolution video uploads, background transcoding workers, adaptive HLS playback, and channel analytics.",
      fullDetails: [
        "Engineered a scalable video streaming platform supporting multi-resolution video uploads, adaptive stream playback, and channel interactions.",
        "Architected an asynchronous video processing pipeline utilizing BullMQ and Redis queue workers to handle heavy FFmpeg processing in the background without blocking API threads.",
        "Implemented dynamic video transcoding using FFmpeg to convert raw uploaded videos into adaptive HTTP Live Streaming (HLS) segments (.m3u8 format) for low-latency playback.",
        "Architected a hybrid storage infrastructure utilizing AWS S3 for raw/transcoded video storage and Cloudinary for optimized image assets.",
        "Designed high-performance REST APIs with JWT dual-token (Access/Refresh) authentication, MongoDB Aggregation Pipelines for analytics, and pagination for user feeds."
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "AWS S3", "FFmpeg", "HLS"],
      category: "Full-Stack",
      liveUrl: "https://github.com/codewithdevu",
      githubUrl: "https://github.com/codewithdevu",
      image: "/divyanshtube_preview.jpg",
      featured: true,
      architectureHighlights: [
        "Asynchronous FFmpeg Queue with BullMQ & Redis",
        "Adaptive HTTP Live Streaming (.m3u8)",
        "MongoDB Aggregation Pipelines for analytics",
        "AWS S3 + Cloudinary Storage Architecture"
      ]
    },
    {
      id: "mystery-message",
      title: "Mystery Message",
      subtitle: "Full-Stack Anonymous Messaging Platform",
      description: "Developed a full-stack anonymous messaging application utilizing Next.js 15 (App Router) and TypeScript for strict end-to-end type safety and automated OTP email delivery pipelines.",
      fullDetails: [
        "Developed a full-stack anonymous messaging application using Next.js 15 (App Router) and TypeScript for strict end-to-end type safety.",
        "Integrated secure credential-based authentication utilizing NextAuth.js paired with custom Mongoose schemas for session persistence.",
        "Engineered automated email verification and OTP delivery pipelines using Resend API and custom serverless API routes.",
        "Implemented robust request validation using Zod schemas on both client and server sides to protect backend routes from malformed payloads.",
        "Built a responsive dashboard UI with Shadcn UI and Tailwind CSS, featuring real-time message toggling and dynamic toast notifications."
      ],
      techStack: ["Next.js 15", "TypeScript", "NextAuth.js", "MongoDB", "Tailwind CSS", "Shadcn UI", "Zod", "Resend API"],
      category: "Next.js",
      liveUrl: "https://github.com/codewithdevu",
      githubUrl: "https://github.com/codewithdevu",
      image: "/mysterymessage_preview.jpg",
      featured: true,
      architectureHighlights: [
        "Next.js 15 App Router + Server Actions",
        "Strict End-to-End TypeScript + Zod Validation",
        "Resend API Serverless OTP Pipeline",
        "Real-time Toggleable Anonymous Inbox"
      ]
    }
  ] as Project[],

  skills: [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "Python" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js" },
        { name: "Next.js 15 (App Router)" },
        { name: "Redux Toolkit" },
        { name: "Tailwind CSS" },
        { name: "Shadcn UI" },
        { name: "HTML5" },
        { name: "CSS3" }
      ]
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "RESTful APIs" },
        { name: "JWT Authentication" },
        { name: "NextAuth.js" },
        { name: "Zod Validation" }
      ]
    },
    {
      category: "Databases & Caching",
      skills: [
        { name: "MongoDB" },
        { name: "Mongoose (Aggregation Pipelines)" },
        { name: "Redis" }
      ]
    },
    {
      category: "DevOps, Cloud & Streaming",
      skills: [
        { name: "Docker" },
        { name: "AWS S3" },
        { name: "BullMQ (Async Queues)" },
        { name: "Video Transcoding (FFmpeg, HLS)" },
        { name: "Cloudinary" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "VS Code" },
        { name: "Linux / Bash" },
        { name: "Vercel" },
        { name: "Render" },
        { name: "Resend API" }
      ]
    }
  ] as SkillCategory[],

  blogs: [] as BlogPost[]
};
