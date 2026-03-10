import NavBar from "./component/ui/NavBar";
import HeroSection from "./component/sections/HeroSection";
import ProjectsSection from "./component/sections/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header with NavBar - positioned over the hero */}
      <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
        <NavBar />
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects */}
      <ProjectsSection maxProjects={4} />
    </div>
  );
}
