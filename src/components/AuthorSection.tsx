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
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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
            Akhilesh Somani is an <strong>author, trainer, and speaker</strong>. In his work,
            he shares transformative techniques that helped him achieve his own personal goals.
            His mission is to assist <strong>100,000 people by 2028</strong> in achieving their goals
            more quickly, easily, and intelligently, leading to financial independence, respect,
            and a legacy of happiness.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Akhilesh has co-authored with international bestselling author <strong>Brian Tracy</strong> in
            the book <em className="font-serif">"Secret To Wealth."</em> This series,
            <em className="font-serif">The 9 Wonders</em>, is a distillation of practical guidance
            and actionable strategies for personal and professional excellence.
          </p>
          <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border/60">
            <Quote size={18} className="text-gold mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "A roadmap for personal and professional excellence, empowering readers to unlock their potential, cultivate a success-oriented mindset, and embark on a fulfilling journey towards a purposeful life."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
