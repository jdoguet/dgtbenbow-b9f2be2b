import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import DomainesSection from "@/components/DomainesSection";
import ProjetsSection from "@/components/ProjetsSection";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DGTBenbow — Solutions digitales responsables</title>
        <meta name="description" content="DGTBenbow conçoit des solutions digitales et responsables au service de l'eau, de la tech, de la culture et du quotidien." />
        <link rel="canonical" href="https://dgtbenbow.lovable.app/" />
        <meta property="og:title" content="DGTBenbow — Solutions digitales responsables" />
        <meta property="og:description" content="DGTBenbow conçoit des solutions digitales et responsables au service de l'eau, de la tech, de la culture et du quotidien." />
        <meta property="og:url" content="https://dgtbenbow.lovable.app/" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <DomainesSection />
        <ProjetsSection />
        <VisionSection />
        <ValuesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
