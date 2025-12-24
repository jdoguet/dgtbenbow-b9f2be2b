import ScrollReveal from "./ScrollReveal";
import hydriiaLogo from "@/assets/hydriia-logo.svg";

interface Projet {
  title: string;
  description: string;
  category: string;
  link?: string;
  client?: {
    name: string;
    logo: string;
    link: string;
  };
}

const projets: Projet[] = [
  {
    title: "SRW360",
    description: "Plateforme complète de pilotage avec tableaux de bord dynamiques, cartographies et système d'alertes",
    category: "Eau & Data",
    link: "https://srw360-wp.hydriia.com/",
    client: {
      name: "HYDRIIA",
      logo: hydriiaLogo,
      link: "https://hydriia.com/"
    }
  },
  {
    title: "MNL Shop",
    description: "Développement complet de notre site e-commerce, du design à la logistique",
    category: "E-commerce"
  },
  {
    title: "Création de sites web",
    description: "Conception et développement de sites vitrines modernes, responsives et optimisés SEO",
    category: "Web"
  }
];

const ProjetsSection = () => {
  return (
    <section id="projets" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Projets récents
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Découvrez comment nous transformons nos convictions en réalisations concrètes. 
            Chaque projet reflète notre objectif : associer maîtrise technique et sens.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((projet, index) => {
            const CardWrapper = projet.link ? 'a' : 'div';
            const cardProps = projet.link ? { 
              href: projet.link, 
              target: "_blank", 
              rel: "noopener noreferrer" 
            } : {};
            
            return (
              <ScrollReveal
                key={projet.title}
                direction="scale"
                delay={index * 100}
              >
                <CardWrapper 
                  {...cardProps}
                  className="group block h-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                      {projet.category}
                    </span>
                    {projet.client && (
                      <a 
                        href={projet.client.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:opacity-80 transition-opacity"
                        title={`Voir ${projet.client.name}`}
                      >
                        <img 
                          src={projet.client.logo} 
                          alt={projet.client.name}
                          className="h-6 w-auto"
                        />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{projet.title}</h3>
                  <p className="text-sm opacity-70">{projet.description}</p>
                  {projet.client && (
                    <p className="text-xs opacity-50 mt-3">Pour le compte de {projet.client.name}</p>
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
