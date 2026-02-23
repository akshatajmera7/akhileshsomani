import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div
        ref={ref}
        className={`max-w-xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Stay Connected</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Join the Journey</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Receive reflections, updates, and early access to new work — delivered thoughtfully to your inbox.
        </p>

        {submitted ? (
          <p className="font-serif text-lg text-gold">Thank you for joining the journey.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-sm bg-background border-border flex-1"
            />
            <Button
              type="submit"
              className="bg-gold text-gold-foreground hover:opacity-80 transition-opacity duration-300 rounded-sm px-8 font-sans font-medium tracking-wide"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
