import { Mail, Linkedin, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";
import hydriiaLogo from "@/assets/hydriia-logo.svg";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.intro")}
            </p>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ScrollReveal direction="up" delay={0}>
              <a
                href="mailto:contact@dgtbenbow.com"
                className="group flex flex-col items-center p-8 bg-card border border-border rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-1">{t("contact.email")}</h3>
                <p className="text-sm text-muted-foreground text-center">contact@dgtbenbow.com</p>
              </a>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={100}>
              <a
                href="https://www.linkedin.com/company/dgtbenbow/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 bg-card border border-border rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-1">{t("contact.linkedin")}</h3>
                <p className="text-sm text-muted-foreground text-center">{t("contact.linkedinDesc")}</p>
              </a>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <a
                href="https://mnlclothes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 bg-card border border-border rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <ShoppingBag className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-1">{t("contact.mnl")}</h3>
                <p className="text-sm text-muted-foreground text-center">{t("contact.mnlDesc")}</p>
              </a>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <a
                href="https://hydriia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 bg-card border border-border rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors overflow-hidden">
                  <img src={hydriiaLogo} alt="Logo Hydriia" className="w-10 h-10 object-contain" />
                </div>
                <h3 className="font-bold text-primary mb-1">{t("contact.hydriia")}</h3>
                <p className="text-sm text-muted-foreground text-center">{t("contact.hydriiaDesc")}</p>
              </a>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="up" delay={300} className="text-center">
            <p className="text-muted-foreground mb-6">
              {t("contact.closing")}
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-orange-light text-accent-foreground font-semibold px-8"
              asChild
            >
              <a href="mailto:contact@dgtbenbow.com">
                {t("contact.cta")}
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
