import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, ShoppingBag, Sparkles } from "lucide-react";
import bookImage from "@/book image.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 bg-gradient-warm relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 w-full">
        {/* Book Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center order-1 md:order-1"
        >
          <div className="relative group max-w-xs sm:max-w-none">
            {/* Glow behind book */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-gold/20 via-transparent to-burgundy/10 rounded-2xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* 3D Book effect */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-52 h-72 sm:w-64 sm:h-96 md:w-72 md:h-[28rem] rounded-xl shadow-2xl overflow-hidden bg-card border border-gold/30 flex items-center justify-center p-2"
            >
              <img
                src={bookImage}
                alt="The 9 Wonders Book Cover by Akhilesh Somani"
                className="w-full h-full object-contain drop-shadow-md"
              />
              {/* Spine highlight */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-gold/15 to-transparent pointer-events-none" />
              {/* Top shine */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Shadow/depth */}
            <div className="absolute -bottom-3 left-4 right-4 h-6 bg-black/20 blur-lg rounded-full" />
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center md:text-left order-2 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-full px-3.5 py-1 mb-4 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-warm font-semibold">National Bestseller</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6"
          >
            The 9{" "}
            <span className="text-gradient-gold">Wonders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md mb-6 sm:mb-8 leading-relaxed mx-auto md:mx-0"
          >
            A transformative book series delving into personal mastery, wealth consciousness, and actionable life strategies to unlock your highest potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <a
              href="https://www.amazon.in/9-WONDERS-AKHILESH-SOMANI/dp/9359897817"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-gold text-gold-foreground hover:bg-gold/90 hover:scale-105 transition-all duration-300 px-7 py-5 text-sm sm:text-base rounded-full font-medium shadow-lg shadow-gold/20 gap-2">
                <ShoppingBag size={17} />
                Buy On Amazon
              </Button>
            </a>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-foreground/20 text-foreground hover:border-gold hover:text-gold transition-all duration-300 px-7 py-5 text-sm sm:text-base rounded-full font-medium gap-2"
              onClick={() => window.open('https://www.amazon.in/9-WONDERS-AKHILESH-SOMANI/dp/9359897817#reader_B0CSZ5YWWX', '_blank')}
            >
              <BookOpen size={17} />
              Read Sample
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
