import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-warm relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Book Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateY: -15 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Glow behind book */}
            <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 via-transparent to-burgundy/10 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* 3D Book effect */}
            <motion.div
              whileHover={{ scale: 1.03, rotateY: 5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-64 h-96 md:w-72 md:h-[26rem] rounded-sm shadow-2xl overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/90 to-foreground/75" />
              {/* Spine highlight */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gold/30 to-transparent" />
              {/* Top shine */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
              
              <div className="relative flex items-center justify-center h-full p-8">
                <div className="text-center">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-primary-foreground/50 text-xs tracking-[0.3em] uppercase mb-4"
                  >
                    Akhilesh Somani
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="font-serif text-primary-foreground text-3xl font-bold leading-tight"
                  >
                    The 9<br />Wonders
                  </motion.h3>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="w-12 h-[1.5px] bg-gradient-to-r from-gold to-gold-light mx-auto mt-6"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mt-4"
                  >
                    <Sparkles size={14} className="text-gold/60 mx-auto" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Shadow/depth */}
            <div className="absolute -bottom-4 left-4 right-0 h-8 bg-foreground/10 blur-xl rounded-full" />
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-warm font-medium">Now Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
          >
            The 9{" "}
            <span className="text-gradient-gold">Wonders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed mx-auto md:mx-0"
          >
            A transformative journey through nine timeless principles that shape
            extraordinary lives. Discover what lies beyond the ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button className="bg-gold text-gold-foreground hover:shadow-xl hover:shadow-gold/25 hover:scale-105 transition-all duration-300 px-8 py-6 text-base rounded-full font-sans font-medium tracking-wide">
              Buy Now
            </Button>
            <Button variant="outline" className="border-foreground/20 text-foreground hover:border-gold hover:text-gold transition-all duration-300 px-8 py-6 text-base rounded-full font-sans font-medium tracking-wide">
              Read Preview
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
