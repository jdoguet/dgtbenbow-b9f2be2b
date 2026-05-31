import ScrollReveal from "./ScrollReveal";
import { Landmark, Globe2, Recycle, Sparkles } from "lucide-react";

const piliers = [
  {
    icon: Landmark,
    text: "Révéler et structurer des patrimoines visibles et invisibles",
  },
  {
    icon: Globe2,
    text: "Relier ingénierie, données et territoires",
  },
  {
    icon: Recycle,
    text: "Inscrire la technologie comme outil d'exploration, de transmission et de protection",
  },
];

const CulturePatrimoineSection = () => {
  return (
    <section
      id="culture-patrimoine"
      className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-accent font-medium uppercase tracking-wider text-xs">
              Vision & engagement
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
            Notre vision
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
            La technologie n'est pas une finalité. Elle est un moyen de mieux
            comprendre, préserver et transmettre ce qui a de la valeur.
          </p>
        </ScrollReveal>

        {/* Bloc principal */}
        <ScrollReveal direction="up" delay={100}>
          <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Culture, Patrimoine & Durabilité
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                DGTBenbow conçoit et accompagne des projets qui explorent le lien
                entre <span className="text-primary font-medium">technologie, patrimoine et durabilité</span>,
                en s'appuyant sur les territoires, leurs ressources et les récits qu'ils portent.
              </p>
              <p>
                L'entreprise œuvre à la mise en valeur des patrimoines matériels et
                immatériels — paysages, infrastructures, savoir-faire, usages et
                mémoire collective — en les reliant aux enjeux contemporains de
                transition écologique, de gestion durable des ressources et
                d'innovation numérique.
              </p>
            </div>

            {/* Piliers */}
            <div className="grid md:grid-cols-3 gap-4 mt-10">
              {piliers.map((pilier, idx) => (
                <ScrollReveal key={idx} direction="up" delay={150 + idx * 100}>
                  <div className="h-full bg-muted/40 hover:bg-muted/60 transition-colors rounded-2xl p-6 border border-border/50">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <pilier.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <p className="text-sm md:text-base text-primary font-medium leading-snug">
                      {pilier.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Conclusion */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-muted-foreground leading-relaxed text-center md:text-lg">
                À travers des projets éditoriaux, numériques et technologiques,
                DGTBenbow place la technologie au service d'un développement
                <span className="text-primary font-semibold"> plus responsable et durable</span>,
                en lien avec les territoires, la nature et les communautés.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CulturePatrimoineSection;