import NavBar from "./component/ui/NavBar";
import HeroSection from "./component/sections/HeroSection";
import ProjectsSection from "./component/sections/ProjectsSection";
import Footer from "./component/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with NavBar - sticky */}
        <NavBar />


      {/* Hero Section */}
      <HeroSection />

      {/* All Projects */}
      <ProjectsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
