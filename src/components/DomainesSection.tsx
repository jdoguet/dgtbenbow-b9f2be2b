import { Droplets, Brain, BookOpen, ShoppingBag } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const domaines = [
  {
    icon: Droplets,
    title: "Eau & Environnement",
    description: "DGTBenbow met son expertise informatique et data au service de Hydriia, en contribuant au développement de SRW360, une plateforme dédiée à la réduction des Non-Revenue Water. Nous concevons des outils numériques et d'intelligence artificielle pour superviser les services d'eau, détecter les pertes et soutenir une gestion durable de la ressource.",
    details: [
      "Modules d'IA pour la détection des fuites, fraudes et anomalies de consommation (NRWAI)",
      "Plateforme de pilotage décisionnel et cartographique (SRW360)",
      "Intégration des données CRM",
      "Projets de modernisation et d'innovation (Innov'Eau, FASEP), accompagnement stratégique et technique pour Hydriia"
    ],
    footer: "Cette collaboration s'inscrit dans une approche responsable et durable du numérique, visant à réduire les pertes, optimiser les usages et renforcer la résilience des territoires face aux enjeux liés à l'eau."
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
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Nos domaines d'activités
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous évoluons à la croisée de plusieurs mondes avec une approche transversale unique.
          </p>
        </ScrollReveal>
        
        {/* Premier domaine en pleine largeur */}
        <ScrollReveal direction="up" delay={0} className="mb-8">
          <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Droplets className="w-7 h-7 text-accent" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {domaines[0].title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {domaines[0].description}
                </p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                  {domaines[0].details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
                {domaines[0].footer && (
                  <p className="text-sm text-muted-foreground italic border-t border-border/50 pt-4">
                    {domaines[0].footer}
                  </p>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trois autres domaines en grille */}
        <div className="grid md:grid-cols-3 gap-6">
          {domaines.slice(1).map((domaine, index) => (
            <ScrollReveal
              key={domaine.title}
              direction="up"
              delay={(index + 1) * 100}
            >
              <div className="group h-full bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors mb-4">
                  <domaine.icon className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">
                  {domaine.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {domaine.description}
                </p>
                <ul className="space-y-2">
                  {domaine.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainesSection;
