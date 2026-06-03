import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import jcPhoto from "@/assets/jc-doguet.asset.json";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <img
                src={jcPhoto.url}
                alt={t("about.photoAlt")}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              {t("about.p1Pre")}<strong className="text-primary">{t("about.p1Strong")}</strong>{t("about.p1Post")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("about.p2")}
            </p>
            <Link
              to="/branding"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-light transition-colors"
            >
              {t("about.cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;