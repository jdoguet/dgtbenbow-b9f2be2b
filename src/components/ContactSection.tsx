import { Mail, Linkedin, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Envie de collaborer ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet à explorer, une idée à concrétiser ou simplement l'envie d'échanger 
              sur les possibilités de collaboration ? Nous serions ravis d'en discuter avec vous.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ScrollReveal direction="up" delay={0}>
              <a
                href="mailto:contact@dgtbenbow.com"
                className="group flex flex-col items-center p-8 bg-card border border-border rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-1">Email</h3>
                <p className="text-sm text-muted-foreground text-center">contact@dgtbenbow.com</p>
              </a>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={100}>
              <a
                href="https://linkedin.com/company/dgtbenbow"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 bg-card border border-border rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-1">LinkedIn</h3>
                <p className="text-sm text-muted-foreground text-center">Retrouvez-nous sur LinkedIn</p>
              </a>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <a
                href="#"
                className="group flex flex-col items-center p-8 bg-card border border-border rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <ShoppingBag className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-1">MNL Shop</h3>
                <p className="text-sm text-muted-foreground text-center">Découvrez notre boutique en ligne</p>
              </a>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="up" delay={300} className="text-center">
            <p className="text-muted-foreground mb-6">
              Que vous représentiez une régie d'eau, une institution publique, une entreprise privée 
              ou que vous portiez un projet culturel ou technologique, prenons le temps d'imaginer ensemble 
              ce que nous pourrions créer.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-orange-light text-accent-foreground font-semibold px-8"
              asChild
            >
              <a href="mailto:contact@dgtbenbow.com">
                Nous contacter
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
