import Logo from "./Logo";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" className="stroke-primary-foreground" strokeWidth="3" fill="none" />
                  <path
                    d="M24 8L26 20L38 18L26 24L38 30L26 28L24 40L22 28L10 30L22 24L10 18L22 20L24 8Z"
                    className="fill-accent"
                  />
                  <circle cx="24" cy="24" r="4" className="fill-primary-foreground" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight">DGT</span>
                <span className="text-xl font-extrabold tracking-wider">BENBOW</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              Une technologie qui relie. Nous créons des ponts entre l'eau et l'IA, 
              entre la culture et le digital, entre le technique et l'humain.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo("vision")} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Notre Vision
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("domaines")} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Domaines
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("projets")} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Projets
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
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
                <a href="https://mnlshop.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  MNL Shop
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
          <p>© {new Date().getFullYear()} DGTBenbow · Tous droits réservés</p>
          <p className="mt-2">Digital roots, bold direction</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
