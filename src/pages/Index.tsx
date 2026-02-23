import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WondersSection from "@/components/WondersSection";
import AuthorSection from "@/components/AuthorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WondersSection />
      <AuthorSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
