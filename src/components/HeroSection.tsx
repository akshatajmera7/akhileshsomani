import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import bookImage from "@/book image.jpeg";

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
              className="relative w-64 h-96 md:w-72 md:h-[28rem] rounded-sm shadow-2xl overflow-hidden bg-white flex items-center justify-center p-2"
              style={{ perspective: "1000px" }}
            >
              <img
                src={bookImage}
                alt="The 9 Wonders Book Cover"
                className="w-full h-full object-contain"
              />
              {/* Spine highlight */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gold/10 to-transparent pointer-events-none" />
              {/* Top shine */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
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
            A transformative book series delving into the intricacies of personal development
            and success. Practical guidance and actionable strategies to empower you to unlock your full potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="https://www.amazon.in/9-WONDERS-AKHILESH-SOMANI/dp/9359897817" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gold text-gold-foreground hover:shadow-xl hover:shadow-gold/25 hover:scale-105 transition-all duration-300 px-8 py-6 text-base rounded-full font-sans font-medium tracking-wide w-full sm:w-auto">
                Buy Now
              </Button>
            </a>
            <Button variant="outline" className="border-foreground/20 text-foreground hover:border-gold hover:text-gold transition-all duration-300 px-8 py-6 text-base rounded-full font-sans font-medium tracking-wide" onClick={() => window.open('https://www.amazon.in/9-WONDERS-AKHILESH-SOMANI/dp/9359897817#reader_B0CSZ5YWWX', '_blank')}>
              Read Sample
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
