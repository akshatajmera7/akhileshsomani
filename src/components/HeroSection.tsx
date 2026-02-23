import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Book Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* 3D Book effect */}
            <div className="w-64 h-96 md:w-72 md:h-[26rem] bg-gradient-to-br from-foreground/90 to-foreground/70 rounded-sm shadow-2xl transform perspective-800 rotate-y-[-5deg] flex items-center justify-center p-8">
              <div className="text-center">
                <p className="text-primary-foreground/60 text-xs tracking-[0.3em] uppercase mb-4">
                  Akhilesh Somani
                </p>
                <h3 className="font-serif text-primary-foreground text-3xl font-bold leading-tight">
                  The 9<br />Wonders
                </h3>
                <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
              </div>
            </div>
            {/* Shadow/depth */}
            <div className="absolute -bottom-4 left-4 right-0 h-8 bg-foreground/10 blur-xl rounded-full" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
            A New Book by Akhilesh Somani
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            The 9 Wonders
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            A transformative journey through nine timeless principles that shape
            extraordinary lives. Discover what lies beyond the ordinary.
          </p>
          <Button
            className="bg-gold text-gold-foreground hover:opacity-80 transition-opacity duration-300 px-8 py-6 text-base rounded-sm font-sans font-medium tracking-wide"
          >
            Buy Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
