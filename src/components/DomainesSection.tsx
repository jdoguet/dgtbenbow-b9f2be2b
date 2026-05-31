import { useState } from "react";
import { Droplets, Brain, ShoppingBag, ChevronDown, X, LayoutDashboard, Workflow } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import eauEnvironnementImg from "@/assets/domaine-eau-environnement.jpg";
import ecommerceLifestyleImg from "@/assets/domaine-ecommerce-lifestyle.jpg";
import technologieIaImg from "@/assets/domaine-technologie-ia.jpg";
import eauDonneesImg from "@/assets/domaine-eau-donnees.jpg";
const domainesPrincipaux = [
  {
    icon: Brain,
    title: "Data & Intelligence Artificielle",
    summary: "Analyse, structuration et valorisation des données pour des outils d'aide à la décision.",
    image: technologieIaImg,
    description: "Nous transformons les données brutes en leviers de décision. Notre expertise couvre la collecte, la structuration, la modélisation et la valorisation des données afin de bâtir des outils d'aide à la décision et des solutions prédictives au plus près des réalités métier.",
    details: [
      "Modèles d'IA opérationnelle : détection, prédiction, anticipation",
      "Structuration, qualité et fiabilisation des données",
      "Tableaux de bord décisionnels et indicateurs métier",
      "Études, benchmarks et intégration des technologies émergentes"
    ]
  },
  {
    icon: LayoutDashboard,
    title: "Logiciels & Plateformes métier",
    summary: "Applications web, plateformes SaaS, CRM, dashboards et outils métiers sur mesure.",
    image: eauDonneesImg,
    description: "Nous concevons et faisons évoluer des logiciels métiers et des plateformes SaaS pensés pour s'intégrer naturellement aux usages réels. De l'architecture aux interfaces, chaque solution est construite pour durer, évoluer et soutenir l'activité quotidienne.",
    details: [
      "Applications web et plateformes SaaS sur mesure",
      "CRM, outils de gestion et dashboards métier",
      "Architectures modulaires et évolutives",
      "Interfaces claires, ergonomiques et orientées usage"
    ]
  },
  {
    icon: Workflow,
    title: "Automatisation & Workflows",
    summary: "Processus automatisés, intégrations entre outils et orchestration de données.",
    image: technologieIaImg,
    description: "Nous fluidifions les opérations en automatisant les tâches répétitives, en connectant les outils existants et en orchestrant la circulation des données. L'objectif : faire gagner du temps, fiabiliser les processus et libérer les équipes des frictions du quotidien.",
    details: [
      "Automatisation de processus métier et tâches répétitives",
      "Intégrations entre outils, API et systèmes existants",
      "Orchestration et synchronisation de données",
      "Optimisation opérationnelle et amélioration continue"
    ]
  },
  {
    icon: Droplets,
    title: "Eau, environnement & territoires",
    summary: "Expertise appliquée aux métiers de l'eau, aux réseaux et aux projets à impact.",
    image: eauEnvironnementImg,
    description: "Forts de plus de 25 ans au contact des régies et opérateurs de l'eau, nous appliquons notre expertise numérique aux enjeux des réseaux, des données environnementales et des projets à impact. En partenariat avec Hydriia, nous contribuons à des solutions de pilotage et de détection au service d'une gestion plus durable de la ressource.",
    details: [
      "Plateformes de pilotage des réseaux et services d'eau (SRW360)",
      "IA pour la détection des fuites, fraudes et anomalies (NRWAI)",
      "Cycle complet de la donnée eau : relevé, facturation, qualité",
      "Projets de modernisation et d'innovation à impact territorial"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Commerce digital & Social Selling",
    summary: "Expérimentation autour du e-commerce, des réseaux sociaux et de l'acquisition client.",
    image: ecommerceLifestyleImg,
    description: "À travers MNL Clothes, notre laboratoire interne, nous explorons concrètement les nouvelles dynamiques du commerce digital : e-commerce, réseaux sociaux, contenu, acquisition client et automatisation marketing. Un terrain d'expérimentation qui nourrit notre expertise et alimente nos approches pour d'autres projets.",
    details: [
      "E-commerce et boutiques en ligne pensées pour l'expérience",
      "Social selling et activation sur les réseaux sociaux",
      "Stratégies de contenu et d'acquisition client",
      "Automatisation marketing et outils d'aide à la vente"
    ]
  }
];

interface ExpandableCardProps {
  icon: React.ElementType;
  title: string;
  summary: string;
  image: string;
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
  image,
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
      {/* Image panoramique - visible seulement quand replié */}
      <div 
        className={`
          relative overflow-hidden transition-all duration-500 ease-out
          ${isExpanded ? 'h-0 opacity-0' : 'h-32 md:h-40 opacity-100'}
        `}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Overlay gradient pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        
        {/* Indicateur "cliquez pour découvrir" */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Découvrir</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>

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
            Nos expertises digitales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous accompagnons des projets numériques innovants à la croisée de la data, de l'intelligence artificielle, du développement logiciel et de l'expérimentation entrepreneuriale.
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
                image={domaine.image}
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
      </div>
    </section>
  );
};

export default DomainesSection;
