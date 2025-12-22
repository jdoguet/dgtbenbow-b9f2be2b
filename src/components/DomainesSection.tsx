import { useState } from "react";
import { Droplets, Brain, Globe, ShoppingBag, ChevronDown, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const domainesPrincipaux = [
  {
    icon: Droplets,
    title: "Eau & Environnement",
    summary: "Expertise data et IA au service de la gestion durable de l'eau, en partenariat avec Hydriia.",
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
    icon: Globe,
    title: "Culture, Patrimoine & Durabilité",
    summary: "Projets reliant technologie, patrimoine et durabilité au service des territoires.",
    description: "DGTBenbow conçoit et accompagne des projets qui explorent le lien entre technologie, patrimoine et durabilité, en s'appuyant sur les territoires, leurs ressources et les récits qu'ils portent.",
    subdescription: "L'entreprise œuvre à la mise en valeur des patrimoines matériels et immatériels — paysages, infrastructures, savoir-faire, usages et mémoire collective — en les reliant aux enjeux contemporains de transition écologique, de gestion durable des ressources et d'innovation numérique.",
    details: [
      "Révéler et structurer des patrimoines visibles et invisibles",
      "Relier ingénierie, données et territoires",
      "Inscrire la technologie comme outil d'exploration, de transmission et de protection"
    ],
    footer: "À travers des projets éditoriaux, numériques et technologiques, DGTBenbow place la technologie au service d'un développement plus responsable et durable, en lien avec les territoires, la nature et les communautés."
  }
];

const domainesSecondaires = [
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

interface ExpandableCardProps {
  icon: React.ElementType;
  title: string;
  summary: string;
  description: string;
  subdescription?: string;
  details: string[];
  footer?: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ExpandableCard = ({ 
  icon: Icon, 
  title, 
  summary, 
  description, 
  subdescription, 
  details, 
  footer,
  isExpanded,
  onToggle
}: ExpandableCardProps) => {
  return (
    <div 
      className={`
        group bg-card border rounded-2xl overflow-hidden transition-all duration-500 ease-out
        ${isExpanded 
          ? 'border-accent shadow-2xl shadow-accent/10' 
          : 'border-border hover:border-accent/30 hover:shadow-lg cursor-pointer'
        }
      `}
      onClick={() => !isExpanded && onToggle()}
    >
      {/* Header - toujours visible */}
      <div className={`p-6 flex items-center gap-4 ${isExpanded ? 'border-b border-border/50' : ''}`}>
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
          ${isExpanded ? 'bg-accent text-accent-foreground' : 'bg-accent/10 group-hover:bg-accent/20'}
        `}>
          <Icon className={`w-6 h-6 ${isExpanded ? '' : 'text-accent'}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-primary">
            {title}
          </h3>
          {!isExpanded && (
            <p className="text-muted-foreground text-sm mt-1 line-clamp-1">
              {summary}
            </p>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
            ${isExpanded 
              ? 'bg-muted hover:bg-muted/80' 
              : 'bg-accent/10 group-hover:bg-accent/20'
            }
          `}
          aria-label={isExpanded ? "Fermer" : "Ouvrir"}
        >
          {isExpanded ? (
            <X className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-accent group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>
      </div>

      {/* Contenu expansible */}
      <div 
        className={`
          grid transition-all duration-500 ease-out
          ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-4 space-y-4">
            <p className="text-muted-foreground">
              {description}
            </p>
            
            {subdescription && (
              <p className="text-muted-foreground text-sm">
                {subdescription}
              </p>
            )}

            <div className="pt-2">
              <h4 className="text-sm font-semibold text-primary mb-3">Contributions clés</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {details.map((detail, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3"
                    style={{ 
                      animationDelay: `${i * 50}ms`,
                      animation: isExpanded ? 'fade-in 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            {footer && (
              <p className="text-sm text-muted-foreground italic border-t border-border/50 pt-4 mt-4">
                {footer}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DomainesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
        
        {/* Domaines principaux - cartes expansibles */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {domainesPrincipaux.map((domaine, idx) => (
            <ScrollReveal key={domaine.title} direction="up" delay={idx * 100}>
              <ExpandableCard
                icon={domaine.icon}
                title={domaine.title}
                summary={domaine.summary}
                description={domaine.description}
                subdescription={domaine.subdescription}
                details={domaine.details}
                footer={domaine.footer}
                isExpanded={expandedIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Domaines secondaires en grille */}
        <div className="grid md:grid-cols-2 gap-6">
          {domainesSecondaires.map((domaine, index) => (
            <ScrollReveal
              key={domaine.title}
              direction="up"
              delay={(index + 2) * 100}
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
