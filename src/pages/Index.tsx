import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WondersSection from "@/components/WondersSection";
import BlogSection from "@/components/BlogSection";
import AuthorSection from "@/components/AuthorSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WondersSection />
      <BlogSection />
      <AuthorSection />
      <GalleryCarousel />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
