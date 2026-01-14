import visionIllustration from "@/assets/vision-illustration.png";
import ScrollReveal from "./ScrollReveal";
import { Compass } from "lucide-react";

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header with image inline */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-7 h-7 text-accent" aria-hidden="true" />
                <span className="text-accent font-medium uppercase tracking-wider text-sm">Exploration & Sens</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
                Notre vision
              </h2>
            </div>
            
            {/* Smaller image on the right */}
            <div className="lg:flex-shrink-0">
              <img
                src={visionIllustration}
                alt="Vision DGTBenbow - Eau, technologie, nature"
                className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
              />
            </div>
          </div>
        </ScrollReveal>
        
        {/* Content in two columns */}
        <div className="grid lg:grid-cols-2 gap-10">
          <ScrollReveal direction="up" delay={100}>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                DGTBenbow n'a jamais été pensée comme une entreprise à métier unique.
                Elle s'est construite autour d'une <span className="text-primary font-semibold">identité plurielle</span>, guidée par le sens et l'exploration, avec une expertise informatique forte au service de systèmes complexes, et tout particulièrement des métiers de l'eau et des infrastructures essentielles.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Nous évoluons à la croisée de plusieurs mondes — <span className="text-accent font-medium">l'eau, l'intelligence artificielle, la culture, l'e-commerce</span> — nourris par un attachement profond à la nature, à la mer, aux cycles du vivant et aux équilibres fragiles qu'il est urgent de préserver.
              </p>
              
              <blockquote className="relative mt-6">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent rounded-full" />
                <div className="pl-6 py-3">
                  <p className="text-xl md:text-2xl font-bold text-primary italic leading-snug">
                    « La science sans conscience n'est que ruine de l'âme. »
                  </p>
                  <footer className="mt-2 text-accent font-medium text-sm">— François Rabelais</footer>
                </div>
              </blockquote>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Cette vision guide l'ensemble de nos projets, qu'ils soient techniques, créatifs ou humains.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Elle nous permet d'innover avec exigence et audace, en développant des <span className="text-primary font-medium">solutions numériques utiles, sobres et pérennes</span>, pensées pour accompagner la transition écologique, la gestion responsable des ressources et une approche plus circulaire, durable et consciente du numérique.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
