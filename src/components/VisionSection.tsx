import waterTechImage from "@/assets/water-tech.jpg";
import ScrollReveal from "./ScrollReveal";
import { Compass } from "lucide-react";

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                DGTBenbow n'a jamais été pensée comme une entreprise "d'un seul métier". 
                Nous revendiquons une <span className="text-primary font-semibold">identité plurielle</span>, ancrée dans la boussole, le sens et l'exploration.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous évoluons à la croisée de plusieurs mondes — <span className="text-accent font-medium">l'eau, l'IA, la culture, l'e-commerce</span> — avec une conviction forte :
              </p>
            </div>
            
            <blockquote className="my-10 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent rounded-full" />
              <div className="pl-8 py-4">
                <p className="text-2xl md:text-3xl font-bold text-primary italic leading-snug">
                  "La technologie doit servir le sens, la beauté et l'équilibre du monde."
                </p>
              </div>
            </blockquote>
            
            <p className="text-muted-foreground leading-relaxed">
              Cette vision guide tous nos projets, qu'ils soient techniques, créatifs ou humains. 
              Elle nous permet d'innover avec audace tout en restant fidèles à nos valeurs fondamentales.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={waterTechImage}
                  alt="Technologie et eau - DGTBenbow"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Decorative accents */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Depuis</p>
                <p className="text-2xl font-bold text-primary">2020</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
