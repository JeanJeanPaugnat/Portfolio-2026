import Link from "next/link";
import NavBar from "@/app/component/ui/NavBar";
import Button from "@/app/component/ui/Button";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 md:p-6">
        <NavBar />
      </header>

      <main className="container mx-auto px-6 md:px-24 py-20 text-center">
        <h1 className="font-[Crimson_Text] italic text-6xl md:text-8xl text-black uppercase mb-6">
          404
        </h1>
        <p className="font-[Funnel_Display] text-xl text-[#717171] mb-8">
          Ce projet n&apos;existe pas ou a été déplacé.
        </p>
        <Button href="/work" variant="primary">
          Voir tous les projets
        </Button>
      </main>
    </div>
  );
}
