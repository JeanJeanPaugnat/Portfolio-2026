import { Metadata } from "next";
import NavBar from "../component/ui/NavBar";
import ProjectsSection from "../component/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projets | Jean Paugnat",
  description:
    "Découvrez mes projets de développement web - applications, sites et solutions créatives.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 md:p-6">
        <NavBar />
      </header>

      {/* All Projects */}
      <ProjectsSection showAll />
    </div>
  );
}
