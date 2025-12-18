import { ArrowLeft, Anchor, Compass, Ship, MapPin, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import CompassRose from "@/components/CompassRose";
import benbowPortrait from "@/assets/benbow-portrait.png";
import admiralBenbowInn from "@/assets/admiral-benbow-inn.jpg";
import cherbourgPort from "@/assets/cherbourg-port.jpg";

const Branding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <CompassRose className="w-24 h-24" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6">
              DGTBenbow : une identité qui relie le digital, mes racines et l'imaginaire maritime
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              On me demande souvent d'où vient le nom DGTBenbow. Il ne s'agit pas d'un acronyme corporate 
              ou d'un nom généré par une agence de branding. C'est une construction personnelle, presque intime, 
              qui relie le digital, mon nom, mon territoire, et une figure historique qui a marqué mon imaginaire 
              depuis l'enfance.
            </p>
          </div>
        </section>

        {/* DGT Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  DGT : les racines digitales et familiales
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Le début du nom est simple : <strong className="text-primary">DGT = Digital + Mon nom de famille</strong>. 
                C'est à la fois un clin d'œil à mon activité dans le numérique, et un ancrage dans mon nom de famille.
              </p>
              
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                DGT, c'est l'idée d'un digital qui ne s'éloigne pas trop de l'humain. Un digital qui reste personnel, 
                incarné, artisanal. <strong className="text-primary">Un digital avec des racines.</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background p-6 rounded-xl border border-border/50 shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Digital</h3>
                  <p className="text-muted-foreground text-sm">
                    L'univers du numérique, de l'innovation et de la technologie
                  </p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border/50 shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Mon nom</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon nom de famille, l'ancrage personnel et identitaire
                  </p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border/50 shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Humain</h3>
                  <p className="text-muted-foreground text-sm">
                    Un digital incarné, qui garde son lien avec l'humain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amiral Benbow Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Anchor className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  Benbow : l'amiral, l'aventure et l'imaginaire
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Étant originaire d'une presqu'île et d'une ville portuaire, les ports, les bateaux, 
                    les cartes marines et les récits d'aventure ont toujours fait partie de mon paysage.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-primary">John Benbow (1653-1702)</strong> fut l'un des officiers de marine 
                    les plus emblématiques du XVIIe siècle. Né dans le Shropshire, il s'engage dans la Royal Navy 
                    à 25 ans, combat les pirates barbaresques en Méditerranée, puis participe aux grandes batailles 
                    navales contre la France.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src={benbowPortrait} 
                    alt="Portrait de l'Amiral John Benbow" 
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 mb-10">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Blessé grièvement à la jambe par un boulet, il continue à commander, refusant d'abandonner le combat. 
                  Certains de ses capitaines désobéissent : il les fera juger, et deux seront exécutés."
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-accent mb-1">Ténacité</h4>
                  <p className="text-sm text-muted-foreground">Refus absolu d'abandonner</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-accent mb-1">Droiture</h4>
                  <p className="text-sm text-muted-foreground">Sens aigu de la justice</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-accent mb-1">Courage</h4>
                  <p className="text-sm text-muted-foreground">Bravoure exemplaire</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-accent mb-1">Devoir</h4>
                  <p className="text-sm text-muted-foreground">Engagement absolu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stevenson Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-full">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Stevenson et L'Île au Trésor
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
                <div className="order-2 md:order-1">
                  <img 
                    src={admiralBenbowInn} 
                    alt="Illustration de l'auberge Admiral Benbow" 
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    C'est grâce à <strong>Robert Louis Stevenson</strong> que Benbow deviendra un symbole littéraire.
                    Dans L'Île au Trésor, le roman qui a façonné toute une génération de récits pirates, 
                    Stevenson ouvre son histoire dans une auberge nommée <strong>The Admiral Benbow Inn</strong>.
                  </p>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Le lieu où Billy Bones apporte le "black spot". Le seuil entre l'ordinaire et l'aventure.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold text-accent mb-2">L'ordinaire</h4>
                  <p className="text-sm opacity-80">La vie quotidienne à l'auberge</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold text-accent mb-2">Le seuil</h4>
                  <p className="text-sm opacity-80">L'arrivée du mystère et du danger</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold text-accent mb-2">L'aventure</h4>
                  <p className="text-sm opacity-80">Le départ vers l'île au trésor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cherbourg Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-full">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  Pourquoi Benbow fait-il écho à mon parcours ?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    En venant de <strong className="text-primary">Cherbourg</strong>, ville portuaire, arsenal maritime, 
                    porte océane, le nom Benbow a toujours résonné comme une sorte de boussole imaginaire.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Il y a dans le personnage de Benbow quelque chose de profondément inspirant pour qui travaille 
                    dans l'innovation : <strong className="text-primary">tenir un cap, affronter des contextes complexes, 
                    garder le sens du devoir, avancer même quand la mer est agitée.</strong>
                  </p>
                </div>
                <div>
                  <img 
                    src={cherbourgPort} 
                    alt="Port de Cherbourg" 
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-6 bg-muted/30 rounded-xl">
                  <Ship className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary">L'exploration</h4>
                  <p className="text-xs text-muted-foreground mt-1">Nouveaux horizons</p>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl">
                  <Compass className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary">L'horizon</h4>
                  <p className="text-xs text-muted-foreground mt-1">Vision au-delà de l'immédiat</p>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl">
                  <Anchor className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary">Le courage</h4>
                  <p className="text-xs text-muted-foreground mt-1">Tracer sa route</p>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary">La maîtrise</h4>
                  <p className="text-xs text-muted-foreground mt-1">Contrôle des défis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Roots Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-accent/80 text-primary-foreground py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Digital roots, bold direction
              </h2>
              <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
                En combinant DGT (digital + Doguet) et Benbow, j'ai voulu créer un nom qui reflète ce que je construis : 
                une entreprise ancrée, mais en mouvement.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm text-left">
                  <h3 className="text-2xl font-bold text-accent mb-3">Digital roots</h3>
                  <p className="opacity-90">
                    Les racines digitales, personnelles et techniques qui fondent l'identité
                  </p>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm text-left">
                  <h3 className="text-2xl font-bold text-accent mb-3">Bold direction</h3>
                  <p className="opacity-90">
                    La direction audacieuse, inspirée par l'esprit de l'amiral et l'appel d'aventure de Stevenson
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-semibold">Ancrée</p>
                  <p className="text-sm opacity-70">mais en mouvement</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-semibold">Technologique</p>
                  <p className="text-sm opacity-70">mais reliée à l'imaginaire</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-semibold">Exploration</p>
                  <p className="text-sm opacity-70">et rigueur</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-semibold">Modernité</p>
                  <p className="text-sm opacity-70">avec histoire</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <CompassRose className="w-20 h-20 mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Un nom comme une boussole
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <strong className="text-primary">DGTBenbow n'est pas un nom marketing neutre. C'est une boussole personnelle.</strong>
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Un nom qui relie l'histoire et la technologie, le digital et la mer, l'innovation et l'imaginaire, 
                Stevenson et la Royal Navy, Cherbourg et les Indes.
              </p>
              <p className="text-xl text-primary font-semibold italic">
                "On ne choisit pas par hasard la direction qu'on prend."
              </p>
              <p className="text-muted-foreground mt-4">
                Un nom qui raconte d'où je viens et vers où je vais. Une identité qui est à la fois mémoire et projection, 
                racine et horizon.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-light transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} DGTBenbow. Digital roots, bold direction.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Branding;
