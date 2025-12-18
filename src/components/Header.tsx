import Logo from "./Logo";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("vision")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Notre Vision
          </button>
          <button
            onClick={() => scrollTo("domaines")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Domaines
          </button>
          <button
            onClick={() => scrollTo("projets")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Projets
          </button>
          <Link
            to="/branding"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Notre Histoire
          </Link>
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button
          onClick={() => scrollTo("contact")}
          className="bg-accent hover:bg-orange-light text-accent-foreground font-semibold"
        >
          Nous contacter
        </Button>
      </div>
    </header>
  );
};

export default Header;
