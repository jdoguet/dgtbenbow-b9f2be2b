import Logo from "./Logo";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo className="h-12 brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              {t("footer.tagline")}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t("footer.nav")}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo("vision")} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t("nav.vision")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("domaines")} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t("nav.domaines")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("projets")} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t("nav.projets")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="mailto:contact@dgtbenbow.com" className="hover:text-primary-foreground transition-colors">
                  contact@dgtbenbow.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/dgtbenbow/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://mnlclothes.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  MNL Clothes
                </a>
              </li>
              <li>
                <a href="https://hydriia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  Hydriia
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} DGTBenbow · {t("footer.rights")}</p>
          <p className="mt-2">{t("footer.slogan")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
