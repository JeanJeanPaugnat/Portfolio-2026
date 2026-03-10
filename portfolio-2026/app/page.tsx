import NavBar from "./component/ui/NavBar";
import HeroSection from "./component/sections/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header with NavBar - positioned over the hero */}
      <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
        <NavBar />
      </header>

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
}
