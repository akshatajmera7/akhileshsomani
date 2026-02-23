import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const AuthorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-gradient-section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-48 h-48 bg-sage/5 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Headshot placeholder */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-gold/20 via-transparent to-sage/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative w-72 h-80 md:w-80 md:h-96 bg-gradient-to-br from-muted to-muted/80 rounded-lg flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 shimmer" />
              <span className="text-muted-foreground text-sm tracking-widest uppercase relative z-10">Author Photo</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3">About the Author</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Akhilesh Somani</h2>
          <div className="w-12 h-[1.5px] bg-gradient-to-r from-gold to-gold-light mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            Akhilesh Somani is an author, thinker, and lifelong learner whose work sits at the
            intersection of philosophy, personal growth, and storytelling. With a deep reverence
            for the timeless questions of human existence, he crafts narratives that invite
            readers to look inward and outward with fresh eyes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <em className="font-serif">The 9 Wonders</em> is his debut work — a distillation of years of reflection,
            conversation, and observation into nine principles that illuminate the path to a
            more intentional and wonder-filled life.
          </p>
          <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border/60">
            <Quote size={18} className="text-gold mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "I believe that every person holds a spark of wonder — this book is an invitation to find and fan that flame."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
