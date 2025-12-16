import waterTechImage from "@/assets/water-tech.jpg";

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8">
              Notre vision
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              DGTBenbow n'a jamais été pensée comme une entreprise "d'un seul métier". 
              Nous revendiquons une identité plurielle, ancrée dans la boussole, le sens et l'exploration.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Nous évoluons à la croisée de plusieurs mondes — l'eau, l'IA, la culture, l'e-commerce — 
              avec une conviction forte :
            </p>
            
            <blockquote className="border-l-4 border-accent pl-6 py-2">
              <p className="text-xl font-semibold text-primary italic">
                "La technologie doit servir le sens, la beauté et l'équilibre du monde."
              </p>
            </blockquote>
            
            <p className="text-muted-foreground mt-8">
              Cette vision guide tous nos projets, qu'ils soient techniques, créatifs ou humains. 
              Elle nous permet d'innover avec audace tout en restant fidèles à nos valeurs fondamentales.
            </p>
          </div>
          
          <div className="relative animate-fade-up delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={waterTechImage}
                alt="Technologie et eau - DGTBenbow"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
