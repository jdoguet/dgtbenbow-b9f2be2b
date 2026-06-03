import ScrollReveal from "./ScrollReveal";
import { Compass, Landmark, Globe2, Recycle } from "lucide-react";
import { useTranslation } from "react-i18next";

const PILIER_ICONS = [Landmark, Globe2, Recycle];

const VisionSection = () => {
  const { t } = useTranslation();
  const piliers = t("vision.piliers", { returnObjects: true }) as string[];
  return (
    <section id="vision" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header with image inline */}
        <ScrollReveal direction="up">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-7 h-7 text-accent" aria-hidden="true" />
              <span className="text-accent font-medium uppercase tracking-wider text-sm">{t("vision.eyebrow")}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
              {t("vision.title")}
            </h2>
          </div>
        </ScrollReveal>
        
        {/* Content in two columns */}
        <div className="grid lg:grid-cols-2 gap-10">
          <ScrollReveal direction="up" delay={100}>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                {t("vision.p1Pre")}<span className="text-primary font-semibold">{t("vision.p1Strong")}</span>{t("vision.p1Post")}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {t("vision.p2Pre")}<span className="text-accent font-medium">{t("vision.p2Em")}</span>{t("vision.p2Post")}
              </p>
              
              <blockquote className="relative mt-6">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent rounded-full" />
                <div className="pl-6 py-3">
                  <p className="text-xl md:text-2xl font-bold text-primary italic leading-snug">
                    {t("vision.quote")}
                  </p>
                  <footer className="mt-2 text-accent font-medium text-sm">{t("vision.quoteAuthor")}</footer>
                </div>
              </blockquote>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                {t("vision.p3")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("vision.p4Pre")}<span className="text-primary font-medium">{t("vision.p4Em")}</span>{t("vision.p4Post")}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Culture, Patrimoine & Durabilité */}
        <ScrollReveal direction="up" delay={150}>
          <div className="mt-16 max-w-5xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              {t("vision.cardTitle")}
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                {t("vision.card1Pre")}<span className="text-primary font-medium">{t("vision.card1Em")}</span>{t("vision.card1Post")}
              </p>
              <p>
                {t("vision.card2")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-10">
              {piliers.map((text, idx) => {
                const Icon = PILIER_ICONS[idx];
                return (
                  <ScrollReveal key={idx} direction="up" delay={200 + idx * 100}>
                    <div className="h-full bg-muted/40 hover:bg-muted/60 transition-colors rounded-2xl p-6 border border-border/50">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                      <p className="text-sm md:text-base text-primary font-medium leading-snug">
                        {text}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-muted-foreground leading-relaxed text-center md:text-lg">
                {t("vision.footerPre")}<span className="text-primary font-semibold">{t("vision.footerEm")}</span>{t("vision.footerPost")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisionSection;
