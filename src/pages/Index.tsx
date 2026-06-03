import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import DomainesSection from "@/components/DomainesSection";
import ProjetsSection from "@/components/ProjetsSection";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || "fr").slice(0, 2);
  return (
    <div className="min-h-screen bg-background">
      <Helmet htmlAttributes={{ lang }}>
        <title>{`DGTBenbow — ${t("hero.subtitle")}`}</title>
        <meta name="description" content={t("hero.subtitle")} />
        <link rel="canonical" href="https://dgtbenbow.lovable.app/" />
        <meta property="og:title" content={`DGTBenbow — ${t("hero.subtitle")}`} />
        <meta property="og:description" content={t("hero.subtitle")} />
        <meta property="og:url" content="https://dgtbenbow.lovable.app/" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <DomainesSection />
        <ProjetsSection />
        <VisionSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
