import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Compass, Shield, Users, BookOpen, Flame, Heart, Crown, Sparkles, Scale } from "lucide-react";

const wonders = [
  { number: "01", title: "How to Manage Mind", description: "Master your internal dialogue and cultivate a resilient mental foundation for success.", icon: Compass, color: "text-gold" },
  { number: "02", title: "How to Manage Behavior", description: "Align your daily actions with your values to build a character of excellence.", icon: Shield, color: "text-burgundy" },
  { number: "03", title: "How to Manage Money", description: "Learn the principles of financial literacy to build and sustain lasting wealth.", icon: Scale, color: "text-sage" },
  { number: "04", title: "How to Manage Time", description: "Optimize your most precious resource to achieve more with less stress.", icon: BookOpen, color: "text-warm" },
  { number: "05", title: "How to Manage Goals", description: "Transform your vision into reality with actionable strategies and clear roadmaps.", icon: Flame, color: "text-burgundy" },
  { number: "06", title: "How to Manage Health", description: "Invest in your physical and mental well-being as the bedrock of your performance.", icon: Heart, color: "text-gold" },
  { number: "07", title: "How to Manage Wealth", description: "Understand the mindset and mechanics behind creating a legacy of abundance.", icon: Crown, color: "text-warm" },
  { number: "08", title: "How to Manage Relationships", description: "Build deep, meaningful connections that enrich your personal and professional life.", icon: Users, color: "text-sage" },
  { number: "09", title: "How to Manage Life", description: "Integrate all elements into a harmonious, purpose-driven journey towards fulfillment.", icon: Sparkles, color: "text-gold" },
];

const WonderCard = ({ wonder, index }: { wonder: typeof wonders[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = wonder.icon;

  return (
    <div
      ref={ref}
      className={`group relative p-8 rounded-lg bg-card border border-border/60 transition-all duration-700 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon size={22} className={`${wonder.color} transition-transform duration-300 group-hover:scale-110`} />
          <span className="text-gold/40 font-serif text-lg font-bold">{wonder.number}</span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{wonder.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{wonder.description}</p>
      </div>
    </div>
  );
};

const WondersSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="book" className="py-24 md:py-32 px-6 relative">
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3">Explore the Themes</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">The 9 Wonders</h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wonders.map((wonder, i) => (
            <WonderCard key={wonder.number} wonder={wonder} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WondersSection;
