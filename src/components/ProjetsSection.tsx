import ScrollReveal from "./ScrollReveal";
import { useTranslation } from "react-i18next";
import hydriiaLogo from "@/assets/hydriia-logo.svg";
import coachIaImg from "@/assets/projet-coach-ia.jpg";
import srw360Img from "@/assets/projet-srw360.jpg.asset.json";
import aquan3xusImg from "@/assets/projet-aquan3xus.jpg.asset.json";
import mnlclothesImg from "@/assets/projet-mnlclothes.jpg.asset.json";
import nrwaiImg from "@/assets/projet-nrwai.jpg";
import { Handshake, Rocket, Clock, type LucideIcon } from "lucide-react";

type ProjetType = "partner" | "internal" | "upcoming";

interface ProjetMeta {
  key: string;
  type: ProjetType;
  image?: string;
  link?: string;
  featured?: boolean;
  withSubtitle?: boolean;
  withMention?: boolean;
  client?: { name: string; logo: string; link: string };
}

const hydriiaClient = {
  name: "HYDRIIA",
  logo: hydriiaLogo,
  link: "https://hydriia.com/",
};

const PROJETS_META: ProjetMeta[] = [
  { key: "coach", type: "upcoming", image: coachIaImg, featured: true, withMention: true },
  { key: "srw", type: "partner", link: "https://srw360-wp.hydriia.com/", client: hydriiaClient, image: srw360Img.url },
  { key: "nrwai", type: "partner", client: hydriiaClient, image: nrwaiImg },
  { key: "aqua", type: "partner", client: hydriiaClient, image: aquan3xusImg.url },
  { key: "mnl", type: "internal", link: "https://mnlclothes.com/", image: mnlclothesImg.url, withSubtitle: true },
];

const typeConfig: Record<
  ProjetType,
  { Icon: LucideIcon; className: string; pulse?: boolean }
> = {
  partner: { Icon: Handshake, className: "bg-accent text-accent-foreground" },
  internal: { Icon: Rocket, className: "bg-secondary text-secondary-foreground" },
  upcoming: { Icon: Clock, className: "bg-accent text-accent-foreground", pulse: true },
};

const TypeBadge = ({ type }: { type: ProjetType }) => {
  const { Icon, className, pulse } = typeConfig[type];
  const { t } = useTranslation();
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full ${className} ${pulse ? "animate-pulse" : ""}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {t(`projets.types.${type}`)}
    </span>
  );
};

const ProjetsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="projets" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {t("projets.title")}
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            {t("projets.intro")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJETS_META.map((projet, index) => {
            const isUpcoming = projet.type === "upcoming";
            const CardWrapper = projet.link && !isUpcoming ? "a" : "div";
            const cardProps =
              projet.link && !isUpcoming
                ? { href: projet.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
            const title = t(`projets.items.${projet.key}.title`);
            const category = t(`projets.items.${projet.key}.category`);
            const description = t(`projets.items.${projet.key}.description`);

            return (
              <ScrollReveal key={projet.key} direction="scale" delay={index * 100}>
                <CardWrapper
                  {...cardProps}
                  className={`group block h-full bg-primary-foreground/5 border rounded-xl p-6 transition-all duration-300 ${isUpcoming ? "opacity-75" : "hover:bg-primary-foreground/10"} ${projet.featured ? "border-accent/40 shadow-lg shadow-accent/10" : "border-primary-foreground/10"}`}
                >
                  {projet.image && (
                    <div className="relative h-36 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl">
                      <img src={projet.image} alt={title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <TypeBadge type={projet.type} />
                      <span className="inline-block px-2.5 py-0.5 text-xs font-medium border border-primary-foreground/20 text-primary-foreground/80 rounded-full">
                        {category}
                      </span>
                    </div>
                    {projet.client && (
                      <a
                        href={projet.client.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:opacity-80 transition-opacity shrink-0"
                        title={`${t("projets.see")} ${projet.client.name}`}
                      >
                        <img src={projet.client.logo} alt={`Logo ${projet.client.name}`} className="h-6 w-auto" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{title}</h3>
                  {projet.withSubtitle && (
                    <p className="text-sm font-medium text-accent mb-2">{t(`projets.items.${projet.key}.subtitle`)}</p>
                  )}
                  <p className="text-sm opacity-70">{description}</p>
                  {projet.withMention && (
                    <p className="text-xs font-semibold opacity-70 mt-3">{t(`projets.items.${projet.key}.mention`)}</p>
                  )}
                  {projet.client && (
                    <p className="text-xs opacity-50 mt-3">{t("projets.forHydriia")}</p>
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