import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CalEmbed from '@/components/CalEmbed';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-neutral-300 font-sans selection:bg-white selection:text-black">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <CalEmbed />
    </main>
  );
}