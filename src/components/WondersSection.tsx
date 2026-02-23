import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const wonders = [
  { number: "01", title: "Purpose", description: "Uncover the driving force behind every meaningful pursuit." },
  { number: "02", title: "Resilience", description: "Transform adversity into the foundation of lasting strength." },
  { number: "03", title: "Connection", description: "Build bonds that elevate both the self and those around you." },
  { number: "04", title: "Wisdom", description: "Cultivate discernment through reflection and lived experience." },
  { number: "05", title: "Courage", description: "Step beyond comfort into the realm of true possibility." },
  { number: "06", title: "Gratitude", description: "Find abundance in the practice of appreciating what is." },
  { number: "07", title: "Legacy", description: "Create impact that transcends your own timeline." },
  { number: "08", title: "Wonder", description: "Rekindle the curiosity that makes life endlessly rich." },
  { number: "09", title: "Harmony", description: "Align your inner world with your outer expression." },
];

const WonderCard = ({ wonder, index }: { wonder: typeof wonders[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`p-8 border border-border rounded-sm transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="text-gold font-serif text-2xl font-bold">{wonder.number}</span>
      <h3 className="font-serif text-xl font-semibold text-foreground mt-3 mb-2">{wonder.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{wonder.description}</p>
    </div>
  );
};

const WondersSection = () => {
  return (
    <section id="book" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Explore the Themes</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">The 9 Wonders</h2>
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
