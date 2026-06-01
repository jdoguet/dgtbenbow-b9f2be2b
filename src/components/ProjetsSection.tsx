import ScrollReveal from "./ScrollReveal";
import hydriiaLogo from "@/assets/hydriia-logo.svg";
import coachIaImg from "@/assets/projet-coach-ia.jpg";
import { Handshake, Rocket, Clock, type LucideIcon } from "lucide-react";

interface Projet {
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  type: "partner" | "internal" | "upcoming";
  mention?: string;
  link?: string;
  image?: string;
  featured?: boolean;
  client?: {
    name: string;
    logo: string;
    link: string;
  };
}

const hydriiaClient = {
  name: "HYDRIIA",
  logo: hydriiaLogo,
  link: "https://hydriia.com/",
};

const projets: Projet[] = [
  {
    title: "SRW360",
    description:
      "Plateforme de pilotage avec tableaux de bord dynamiques, cartographies et système d'alertes. DGTBenbow contribue à sa conception et à son développement pour le compte d'Hydriia.",
    category: "Eau & Data",
    type: "partner",
    link: "https://srw360-wp.hydriia.com/",
    client: hydriiaClient,
  },
  {
    title: "NRWAI",
    description:
      "Modules d'intelligence artificielle dédiés à la détection des fuites, fraudes et anomalies de consommation. DGTBenbow contribue à la conception et au développement de ces composants pour le compte d'Hydriia.",
    category: "Eau & IA",
    type: "partner",
    client: hydriiaClient,
  },
  {
    title: "aquaN3Xus",
    description:
      "Plateforme de gestion clientèle et facturation conçue pour les services d'eau. Elle centralise les données usagers, les contrats, les consommations et les processus métier afin de simplifier l'exploitation quotidienne des régies. DGTBenbow contribue à sa conception et à son évolution pour le compte d'Hydriia.",
    category: "Eau & Data",
    type: "partner",
    client: hydriiaClient,
  },
  {
    title: "MNL Clothes",
    subtitle: "Laboratoire e-commerce & social selling",
    description:
      "Projet entrepreneurial développé en interne pour expérimenter le commerce social, TikTok Shop, le marketing digital, l'automatisation et la gestion d'une activité e-commerce de bout en bout. Une approche terrain qui nourrit directement notre expertise digitale. Ce terrain d'expérimentation permet de tester concrètement des approches mêlant commerce digital, automatisation, IA et acquisition client.",
    category: "E-commerce",
    type: "internal",
    link: "https://mnlclothes.com/",
  },
  {
    title: "Coach IA Nouvelle Génération",
    description:
      "Développement d'une plateforme d'accompagnement intelligent capable d'évoluer d'un coach spécialisé vers un assistant universel. Ce projet explore de nouvelles approches de l'intelligence artificielle appliquées à l'accompagnement personnel et professionnel.",
    category: "IA & Accompagnement",
    type: "upcoming",
    mention: "Disponible prochainement",
  },
];

const typeConfig: Record<
  Projet["type"],
  { label: string; Icon: LucideIcon; className: string; pulse?: boolean }
> = {
  partner: {
    label: "Contribution partenaire",
    Icon: Handshake,
    className: "bg-accent text-accent-foreground",
  },
  internal: {
    label: "Projet interne",
    Icon: Rocket,
    className: "bg-secondary text-secondary-foreground",
  },
  upcoming: {
    label: "En préparation",
    Icon: Clock,
    className: "bg-muted text-muted-foreground",
    pulse: true,
  },
};

const TypeBadge = ({ type }: { type: Projet["type"] }) => {
  const { label, Icon, className, pulse } = typeConfig[type];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full ${className} ${pulse ? "animate-pulse" : ""}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  );
};

const ProjetsSection = () => {
  return (
    <section id="projets" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Projets &amp; réalisations
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            DGTBenbow accompagne la conception, le développement et l'évolution de solutions numériques innovantes, tout en menant ses propres expérimentations autour de l'intelligence artificielle, de la data et du commerce digital. Chaque réalisation illustre notre approche : combiner technologie, innovation et pragmatisme.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((projet, index) => {
            const isUpcoming = projet.type === "upcoming";
            const CardWrapper = projet.link && !isUpcoming ? "a" : "div";
            const cardProps =
              projet.link && !isUpcoming
                ? { href: projet.link, target: "_blank", rel: "noopener noreferrer" }
                : {};

            return (
              <ScrollReveal key={projet.title} direction="scale" delay={index * 100}>
                <CardWrapper
                  {...cardProps}
                  className={`group block h-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 transition-all duration-300 ${isUpcoming ? "opacity-75" : "hover:bg-primary-foreground/10"}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <TypeBadge type={projet.type} />
                      <span className="inline-block px-2.5 py-0.5 text-xs font-medium border border-primary-foreground/20 text-primary-foreground/80 rounded-full">
                        {projet.category}
                      </span>
                    </div>
                    {projet.client && (
                      <a
                        href={projet.client.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:opacity-80 transition-opacity shrink-0"
                        title={`Voir ${projet.client.name}`}
                      >
                        <img src={projet.client.logo} alt={`Logo ${projet.client.name}`} className="h-6 w-auto" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{projet.title}</h3>
                  {projet.subtitle && (
                    <p className="text-sm font-medium text-accent mb-2">{projet.subtitle}</p>
                  )}
                  <p className="text-sm opacity-70">{projet.description}</p>
                  {projet.mention && (
                    <p className="text-xs font-semibold opacity-70 mt-3">{projet.mention}</p>
                  )}
                  {projet.client && (
                    <p className="text-xs opacity-50 mt-3">Pour le compte d'Hydriia</p>
                  )}
                </CardWrapper>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjetsSection;