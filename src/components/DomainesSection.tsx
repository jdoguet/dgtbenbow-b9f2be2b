import { useState } from "react";
import { Droplets, Brain, ShoppingBag, ChevronDown, X, LayoutDashboard, Workflow } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useTranslation } from "react-i18next";
import eauEnvironnementImg from "@/assets/domaine-eau-environnement.jpg";
import ecommerceLifestyleImg from "@/assets/domaine-ecommerce-lifestyle.jpg";
import technologieIaImg from "@/assets/domaine-technologie-ia.jpg";
import eauDonneesImg from "@/assets/domaine-eau-donnees.jpg";
import dataIaImg from "@/assets/domaine-data-ia.jpg";
import automatisationWorkflowsImg from "@/assets/domaine-automatisation-workflows.jpg";

const DOMAINS_META = [
  { key: "data", icon: Brain, image: dataIaImg },
  { key: "soft", icon: LayoutDashboard, image: eauDonneesImg },
  { key: "auto", icon: Workflow, image: automatisationWorkflowsImg },
  { key: "eau", icon: Droplets, image: eauEnvironnementImg },
  { key: "ecom", icon: ShoppingBag, image: ecommerceLifestyleImg },
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
  const { t } = useTranslation();
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
          <span>{t("domaines.discover")}</span>
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
          aria-label={isExpanded ? t("domaines.close") : t("domaines.open")}
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
              <h4 className="text-sm font-semibold text-primary mb-3">{t("domaines.contributions")}</h4>
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
  const { t } = useTranslation();

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="domaines" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            {t("domaines.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("domaines.intro")}
          </p>
        </ScrollReveal>
        
        {/* Domaines principaux - cartes expansibles */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {DOMAINS_META.map((domaine, idx) => {
            const details = t(`domaines.items.${domaine.key}.details`, { returnObjects: true }) as string[];
            return (
              <ScrollReveal key={domaine.key} direction="up" delay={idx * 100}>
                <ExpandableCard
                  icon={domaine.icon}
                  title={t(`domaines.items.${domaine.key}.title`)}
                  summary={t(`domaines.items.${domaine.key}.summary`)}
                  image={domaine.image}
                  description={t(`domaines.items.${domaine.key}.description`)}
                  details={Array.isArray(details) ? details : []}
                  isExpanded={expandedIndex === idx}
                  onToggle={() => handleToggle(idx)}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainesSection;
