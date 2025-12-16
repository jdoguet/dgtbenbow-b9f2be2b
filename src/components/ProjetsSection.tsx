const projets = [
  {
    title: "NRWAI",
    description: "Analyse IA avancée pour la détection intelligente des anomalies dans les réseaux d'eau",
    category: "Eau & IA"
  },
  {
    title: "SRW360",
    description: "Plateforme complète de pilotage avec tableaux de bord dynamiques, cartographies et système d'alertes",
    category: "Eau & Data"
  },
  {
    title: "Innov'Eau",
    description: "Projet d'innovation France 2030 pour la transformation digitale du secteur de l'eau",
    category: "Innovation"
  },
  {
    title: "FASEP 2025",
    description: "Démonstrateur international pour Hydriia, modernisation des infrastructures hydrauliques",
    category: "International"
  },
  {
    title: "Airbyte Multi-régies",
    description: "Intégration de pipelines de données pour plusieurs régies d'eau simultanément",
    category: "Data"
  },
  {
    title: "MNL Shop",
    description: "Développement complet de notre site e-commerce, du design à la logistique",
    category: "E-commerce"
  }
];

const ProjetsSection = () => {
  return (
    <section id="projets" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Projets récents
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Découvrez comment nous transformons nos convictions en réalisations concrètes. 
            Chaque projet reflète notre objectif : associer maîtrise technique et sens.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((projet, index) => (
            <div
              key={projet.title}
              className="group bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-4">
                {projet.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{projet.title}</h3>
              <p className="text-sm opacity-70">{projet.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetsSection;
