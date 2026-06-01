import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import jcPhoto from "@/assets/jc-doguet.asset.json";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <img
                src={jcPhoto.url}
                alt="Jean-Christophe Doguet, fondateur de DGTBenbow"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Qui est DGTBenbow&nbsp;?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              Derrière DGTBenbow se trouve <strong className="text-primary">Jean-Christophe Doguet</strong>,
              entrepreneur et architecte logiciel passionné par l'innovation numérique, les territoires
              et les projets à impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Depuis plus de 25 ans, il accompagne la conception et le développement de solutions digitales
              dans des domaines aussi variés que l'eau, la data, l'intelligence artificielle et
              l'entrepreneuriat numérique.
            </p>
            <Link
              to="/branding"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-light transition-colors"
            >
              Découvrir l'histoire de DGTBenbow
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;