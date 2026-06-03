import { ArrowLeft, Anchor, Compass, Ship, MapPin, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import CompassRose from "@/components/CompassRose";
import benbowPortrait from "@/assets/benbow-portrait.png";
import admiralBenbowInn from "@/assets/admiral-benbow-inn.jpg";
import cherbourgPort from "@/assets/cherbourg-port.jpg";

const Branding = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || "fr").slice(0, 2);
  const dgtCards = t("branding.dgtCards", { returnObjects: true }) as { title: string; desc: string }[];
  const benbowValues = t("branding.benbowValues", { returnObjects: true }) as { t: string; d: string }[];
  const stevensonCards = t("branding.stevensonCards", { returnObjects: true }) as { t: string; d: string }[];
  const cherbourgCards = t("branding.cherbourgCards", { returnObjects: true }) as { t: string; d: string }[];
  const cherbourgIcons = [Ship, Compass, Anchor, MapPin];
  const rootsTags = t("branding.rootsTags", { returnObjects: true }) as { t: string; d: string }[];
  return (
    <div className="min-h-screen bg-background">
      <Helmet htmlAttributes={{ lang }}>
        <title>{t("branding.metaTitle")}</title>
        <meta name="description" content={t("branding.metaDesc")} />
        <link rel="canonical" href="https://dgtbenbow.lovable.app/branding" />
        <meta property="og:title" content={t("branding.metaTitle")} />
        <meta property="og:description" content={t("branding.metaDesc")} />
        <meta property="og:url" content="https://dgtbenbow.lovable.app/branding" />
      </Helmet>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("branding.back")}
            </Link>
          </div>
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
              {t("branding.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("branding.heroLead")}
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
                  {t("branding.dgtTitle")}
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("branding.dgtP1Pre")}<strong className="text-primary">{t("branding.dgtP1Strong")}</strong>{t("branding.dgtP1Post")}
              </p>
              
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                {t("branding.dgtP2Pre")}<strong className="text-primary">{t("branding.dgtP2Strong")}</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {dgtCards.map((c, i) => (
                  <div key={i} className="bg-background p-6 rounded-xl border border-border/50 shadow-sm">
                    <h3 className="font-semibold text-primary mb-2">{c.title}</h3>
                    <p className="text-muted-foreground text-sm">{c.desc}</p>
                  </div>
                ))}
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
                  {t("branding.benbowTitle")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {t("branding.benbowP1")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-primary">{t("branding.benbowP2Strong")}</strong>{t("branding.benbowP2Post")}
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src={benbowPortrait} 
                    alt={t("branding.benbowP2Strong")}
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 mb-10">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  {t("branding.benbowQuote")}
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {benbowValues.map((v, i) => (
                  <div key={i} className="text-center p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-accent mb-1">{v.t}</h4>
                    <p className="text-sm text-muted-foreground">{v.d}</p>
                  </div>
                ))}
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
                  {t("branding.stevensonTitle")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
                <div className="order-2 md:order-1">
                  <img 
                    src={admiralBenbowInn} 
                    alt={t("branding.stevensonP1Strong2")}
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    {t("branding.stevensonP1Pre")}<strong>{t("branding.stevensonP1Strong1")}</strong>{t("branding.stevensonP1Mid")}<strong>{t("branding.stevensonP1Strong2")}</strong>{t("branding.stevensonP1Post")}
                  </p>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {t("branding.stevensonP2")}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {stevensonCards.map((c, i) => (
                  <div key={i} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <h4 className="font-semibold text-accent mb-2">{c.t}</h4>
                    <p className="text-sm opacity-80">{c.d}</p>
                  </div>
                ))}
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
                  {t("branding.cherbourgTitle")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {t("branding.cherbourgP1Pre")}<strong className="text-primary">{t("branding.cherbourgP1Strong")}</strong>{t("branding.cherbourgP1Post")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("branding.cherbourgP2Pre")}<strong className="text-primary">{t("branding.cherbourgP2Strong")}</strong>
                  </p>
                </div>
                <div>
                  <img 
                    src={cherbourgPort} 
                    alt={t("branding.cherbourgP1Strong")}
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cherbourgCards.map((c, i) => {
                  const Icon = cherbourgIcons[i];
                  return (
                    <div key={i} className="text-center p-6 bg-muted/30 rounded-xl">
                      <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                      <h4 className="font-semibold text-primary">{c.t}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{c.d}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Digital Roots Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-accent/80 text-primary-foreground py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {t("branding.rootsTitle")}
              </h2>
              <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("branding.rootsLead")}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm text-left">
                  <h3 className="text-2xl font-bold text-accent mb-3">{t("branding.rootsCard1Title")}</h3>
                  <p className="opacity-90">{t("branding.rootsCard1Desc")}</p>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm text-left">
                  <h3 className="text-2xl font-bold text-accent mb-3">{t("branding.rootsCard2Title")}</h3>
                  <p className="opacity-90">{t("branding.rootsCard2Desc")}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {rootsTags.map((tag, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-lg">
                    <p className="font-semibold">{tag.t}</p>
                    <p className="text-sm opacity-70">{tag.d}</p>
                  </div>
                ))}
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
                {t("branding.conclTitle")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <strong className="text-primary">{t("branding.conclP1Strong")}</strong>
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("branding.conclP2")}
              </p>
              <p className="text-xl text-primary font-semibold italic">
                {t("branding.conclQuote")}
              </p>
              <p className="text-muted-foreground mt-4">
                {t("branding.conclEnd")}
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-light transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("branding.back")}
              </Link>
            </div>
          </div>
        </section>

        {/* Conclusion - Une boussole pour innover */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  {t("branding.boussoleTitle")}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t("branding.boussoleP1")}
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t("branding.boussoleP2")}
              </p>
              <p className="text-lg text-primary font-semibold italic">
                {t("branding.boussoleQuote")}
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-light transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("branding.back")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} DGTBenbow. {t("branding.footerRights")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Branding;
