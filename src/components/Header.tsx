import { useState } from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: t("nav.vision"), action: () => scrollTo("vision") },
    { label: t("nav.domaines"), action: () => scrollTo("domaines") },
    { label: t("nav.projets"), action: () => scrollTo("projets") },
    { label: t("nav.histoire"), to: "/branding" },
    { label: t("nav.contact"), action: () => scrollTo("contact") },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      role="banner"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" aria-label={t("nav.homeAria")}>
          <Logo />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Navigation principale">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={link.action}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button
            onClick={() => scrollTo("contact")}
            className="hidden sm:flex bg-accent hover:bg-orange-light text-accent-foreground font-semibold"
          >
            {t("nav.contactBtn")}
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav 
          className="bg-background/95 backdrop-blur-lg border-t border-border/50 px-6 py-4 space-y-4"
          role="navigation"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={link.action}
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </button>
            )
          )}
          <Button
            onClick={() => scrollTo("contact")}
            className="w-full bg-accent hover:bg-orange-light text-accent-foreground font-semibold mt-4"
          >
            {t("nav.contactBtn")}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
