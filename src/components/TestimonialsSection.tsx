import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "The 9 Wonders is a simple yet thought-provoking book written in lucid language. It defines the path to success focusing on 9 different elements. A practical approach to handling life.",
    author: "Ankita Hundekar",
    title: "Verified Purchase",
    stars: 5,
  },
  {
    quote: "An absolutely amazing book. It's like having a wise mentor by your side, encouraging you every step of the way. I highly recommend it for anyone who wants to improve their life.",
    author: "Jeetendra Prasad",
    title: "Reader",
    stars: 5,
  },
  {
    quote: "A transformative book that offers readers a roadmap to personal empowerment and fulfillment. Written with clarity, compassion, and wisdom.",
    author: "Subha Padhi",
    title: "Guide to Empowerment",
    stars: 5,
  },
  {
    quote: "Great book with insightful words on how to manage money. It's a great journey for financial independence. Highly recommended.",
    author: "Deeksha Tamboli",
    title: "Verified Purchase",
    stars: 5,
  },
  {
    quote: "Author explains the 9 wonders for a successful life in simple language with gratitude. A very good read.",
    author: "Anamika Deshmukh",
    title: "Verified Purchase",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 relative">
      {/* Decorative quote marks */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-gold/10 font-serif text-[200px] leading-none select-none pointer-events-none">
        "
      </div>

      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3">What Readers Say</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Testimonials</h2>
        <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-16" />

        <div className="relative min-h-[220px] flex items-center justify-center">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>

                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic mb-6">
                  "{testimonials[current].quote}"
                </blockquote>
                <div>
                  <p className="font-medium text-foreground">{testimonials[current].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === current ? "bg-gold w-8" : "bg-border w-2 hover:bg-gold/40"
                }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
