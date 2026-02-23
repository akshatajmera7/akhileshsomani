import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AuthorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Headshot placeholder */}
        <div className="flex justify-center">
          <div className="w-72 h-80 md:w-80 md:h-96 bg-muted rounded-sm flex items-center justify-center">
            <span className="text-muted-foreground text-sm tracking-widest uppercase">Author Photo</span>
          </div>
        </div>

        {/* Bio */}
        <div>
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">About the Author</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Akhilesh Somani</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Akhilesh Somani is an author, thinker, and lifelong learner whose work sits at the
            intersection of philosophy, personal growth, and storytelling. With a deep reverence
            for the timeless questions of human existence, he crafts narratives that invite
            readers to look inward and outward with fresh eyes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <em className="font-serif">The 9 Wonders</em> is his debut work — a distillation of years of reflection,
            conversation, and observation into nine principles that illuminate the path to a
            more intentional and wonder-filled life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
