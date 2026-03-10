import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0059ff] to-[#19253b] text-white overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-24 pt-32 md:pt-48 pb-16">
        {/* Location */}
        <p className="font-[Funnel_Display] font-light text-lg md:text-xl capitalize mb-8">
          Based in Limoges, FR
        </p>

        {/* Main Title */}
        <h1 className="font-[Crimson_Text] italic text-5xl md:text-7xl lg:text-[76px] uppercase leading-[85%] max-w-lg mb-8">
          Creative web Developer
        </h1>

        {/* Description */}
        <p className="font-[Funnel_Display] font-light text-lg md:text-2xl max-w-3xl leading-relaxed mb-16">
          Salut, moi c&apos;est Jean Paugnat. Étudiant en BUT MMI et
          développeur. Je transforme des concepts créatifs en applications web
          performantes et interactives.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-24">
          <Button href="/work" variant="primary">
            View my work
          </Button>
          <Button href="/cv.pdf" variant="outline" download>
            Download CV
          </Button>
        </div>
      </div>

      {/* Social Links - Bottom Right */}
      <div className="absolute bottom-8 right-8 md:right-24">
        <SocialLinks />
      </div>
    </section>
  );
}
