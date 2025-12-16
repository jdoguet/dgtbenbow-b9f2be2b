import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import DomainesSection from "@/components/DomainesSection";
import ProjetsSection from "@/components/ProjetsSection";
import ValuesSection from "@/components/ValuesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <DomainesSection />
        <ProjetsSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
