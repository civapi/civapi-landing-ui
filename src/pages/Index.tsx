import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DataSection from "@/components/DataSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import GlobeLayer from "@/components/GlobeLayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      {/* <GlobeLayer /> */}
      <Hero />
      <Features />
      <DataSection />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
