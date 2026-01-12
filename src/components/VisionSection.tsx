import ScrollReveal from "./ScrollReveal";
import VisionIllustration from "./VisionIllustration";
import { Compass } from "lucide-react";

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="w-8 h-8 text-accent" aria-hidden="true" />
              <span className="text-accent font-medium uppercase tracking-wider text-sm">Exploration & Sens</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
              Notre vision
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                DGTBenbow n'a jamais été pensée comme une entreprise à métier unique.
                Elle s'est construite autour d'une <span className="text-primary font-semibold">identité plurielle</span>, guidée par le sens et l'exploration, avec une expertise informatique forte au service de systèmes complexes, et tout particulièrement des métiers de l'eau et des infrastructures essentielles.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous évoluons à la croisée de plusieurs mondes — <span className="text-accent font-medium">l'eau, l'intelligence artificielle, la culture, l'e-commerce</span> — nourris par un attachement profond à la nature, à la mer, aux cycles du vivant et aux équilibres fragiles qu'il est urgent de préserver.
              </p>
            </div>
            
            <blockquote className="my-10 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent rounded-full" />
              <div className="pl-8 py-4">
                <p className="text-2xl md:text-3xl font-bold text-primary italic leading-snug">
                  « La science sans conscience n'est que ruine de l'âme. »
                </p>
                <footer className="mt-3 text-accent font-medium">— François Rabelais</footer>
              </div>
            </blockquote>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Cette vision guide l'ensemble de nos projets, qu'ils soient techniques, créatifs ou humains.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Elle nous permet d'innover avec exigence et audace, en développant des <span className="text-primary font-medium">solutions numériques utiles, sobres et pérennes</span>, pensées pour accompagner la transition écologique, la gestion responsable des ressources et une approche plus circulaire, durable et consciente du numérique.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={200}>
            <VisionIllustration />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
