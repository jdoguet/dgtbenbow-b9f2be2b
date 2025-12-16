import { Leaf, Layers, Target } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Innovation responsable",
    description: "Des solutions qui respectent l'environnement et les personnes"
  },
  {
    icon: Layers,
    title: "Expertise transversale",
    description: "Une approche pluridisciplinaire unique et enrichissante"
  },
  {
    icon: Target,
    title: "Vision à long terme",
    description: "Des projets pensés pour durer et évoluer avec vous"
  }
];

const ValuesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Une entreprise cohérente, malgré la diversité
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ce qui relie toutes nos activités ? Une même philosophie profondément ancrée dans notre ADN : 
            <span className="font-semibold text-primary"> relier ce que d'autres séparent.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Technologie & Culture", desc: "Le digital rencontre l'art et le patrimoine" },
            { title: "IA & Environnement", desc: "L'intelligence artificielle au service de l'eau" },
            { title: "Digital & Réel", desc: "Le numérique s'intègre harmonieusement au monde physique" },
            { title: "Data & Quotidien", desc: "Les données enrichissent la vie de tous les jours" }
          ].map((item, index) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-6 text-center animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <h4 className="font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
