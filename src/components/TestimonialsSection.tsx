import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "A rare book that genuinely shifts the way you see the world. Each wonder is a doorway.",
    author: "Priya Mehta",
    title: "Reader & Educator",
  },
  {
    quote: "Somani writes with the precision of a philosopher and the warmth of a storyteller. Extraordinary.",
    author: "David Chen",
    title: "Book Reviewer",
  },
  {
    quote: "I found myself underlining nearly every page. This is a book you return to again and again.",
    author: "Sarah Lindqvist",
    title: "Literary Critic",
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
    <section id="testimonials" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">What Readers Say</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-16">Testimonials</h2>

        <div className="relative min-h-[200px] flex items-center justify-center">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-opacity duration-300 hover:opacity-60"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="px-12">
            <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic mb-6">
              "{testimonials[current].quote}"
            </blockquote>
            <div>
              <p className="font-medium text-foreground">{testimonials[current].author}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].title}</p>
            </div>
          </div>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-opacity duration-300 hover:opacity-60"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-6" : "bg-border"
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
