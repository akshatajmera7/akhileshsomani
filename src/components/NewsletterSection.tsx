import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-burgundy/5 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`max-w-xl mx-auto text-center relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3">Stay Connected</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Join the Journey</h2>
        <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Receive reflections, updates, and early access to new work — delivered thoughtfully to your inbox.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                <Check size={18} className="text-sage" />
              </div>
              <p className="font-serif text-lg text-foreground">Thank you for joining the journey.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full bg-card border-border/60 flex-1 px-5 focus:border-gold transition-colors duration-300"
              />
              <Button
                type="submit"
                className="bg-gold text-gold-foreground hover:shadow-lg hover:shadow-gold/20 hover:scale-105 transition-all duration-300 rounded-full px-8 font-sans font-medium tracking-wide gap-2"
              >
                Subscribe <Send size={14} />
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsletterSection;
