import NavBar from "./component/ui/NavBar";
import HeroSection from "./component/sections/HeroSection";
import ProjectsSection from "./component/sections/ProjectsSection";
import Footer from "./component/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header with NavBar - sticky */}
      <header className="sticky top-0 z-50 p-4 md:p-6 bg-transparent">
        <NavBar />
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* All Projects */}
      <ProjectsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
