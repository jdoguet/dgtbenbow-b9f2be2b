import { Droplets, Brain, BookOpen, ShoppingBag } from "lucide-react";

const domaines = [
  {
    icon: Droplets,
    title: "Eau & Environnement",
    description: "Modernisation des infrastructures, IA pour la détection des fuites, plateformes de pilotage décisionnel, protection de la ressource en eau.",
    details: [
      "IA pour la détection des fuites, fraudes et anomalies (NRWAI)",
      "Plateforme de pilotage décisionnel (SRW360)",
      "CRM & facturation métiers (aquaN3Xus)",
      "Projets Innov'Eau, FASEP, modernisation pour Hydriia"
    ]
  },
  {
    icon: Brain,
    title: "Technologie & IA",
    description: "Solutions numériques sur mesure, automatisation des processus, développement logiciel, intégration multi-systèmes et pipelines de données.",
    details: [
      "IA opérationnelle",
      "Développement logiciel",
      "Benchmarks & études",
      "Intégration systèmes"
    ]
  },
  {
    icon: BookOpen,
    title: "Culture & Patrimoine",
    description: "Valorisation des contes et légendes, projets éditoriaux, contenus culturels reliant l'ingénierie à l'imaginaire et la mémoire collective.",
    details: [
      "Valorisation des patrimoines immatériels",
      "Projets éditoriaux",
      "Relier technologie et culture"
    ]
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Digital",
    description: "MNL Shop, notre laboratoire d'expérimentation en design, ergonomie moderne, performance front-end et expérience utilisateur fluide.",
    details: [
      "Design pastel moderne",
      "Performance technique",
      "UI/UX soigné",
      "Logistique intelligente"
    ]
  }
];

const DomainesSection = () => {
  return (
    <section id="domaines" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Nos domaines d'activités
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous évoluons à la croisée de plusieurs mondes avec une approche transversale unique.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {domaines.map((domaine, index) => (
            <div
              key={domaine.title}
              className={`group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <domaine.icon className="w-7 h-7 text-accent" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {domaine.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {domaine.description}
                  </p>
                  <ul className="space-y-2">
                    {domaine.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainesSection;
