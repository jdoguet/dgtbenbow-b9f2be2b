import { Button } from "./ui/button";
import CompassRose from "./CompassRose";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background compass */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
        <CompassRose className="w-[800px] h-[800px] animate-spin-slow" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent rounded-full animate-float" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary/20 rounded-full animate-float delay-200" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent/50 rounded-full animate-float delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary mb-6 animate-fade-up">
            Digital roots,{" "}
            <span className="text-gradient">bold</span>
            <br />
            direction
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-100">
            Et si une entreprise pouvait explorer plusieurs horizons tout en gardant une direction claire ?
            <span className="font-semibold text-primary"> DGTBenbow</span> développe des solutions digitales, 
            créatives et responsables au service de l'eau, de la technologie, de la culture et du quotidien.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
            <Button
              size="lg"
              onClick={() => scrollTo("vision")}
              className="bg-accent hover:bg-orange-light text-accent-foreground font-semibold px-8 py-6 text-lg"
            >
              Découvrir notre univers
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("vision")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Défiler vers la section Vision"
      >
        <ChevronDown size={32} aria-hidden="true" />
      </button>
    </section>
  );
};

export default HeroSection;
