import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles, MessageSquare, Mail, ArrowRight, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const GOOGLE_FORM_URL = "https://forms.gle/EpbLTF72mWNv7rcD8";

const NewsletterSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="connect" className="py-24 md:py-32 px-6 bg-gradient-to-b from-card/30 via-background to-card/40 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-burgundy/10 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-5">
          <Sparkles size={14} className="animate-pulse" />
          Get In Touch & Collaborate
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
          Connect with <span className="text-gradient-gold">Akhilesh Somani</span>
        </h2>

        <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are looking to invite Akhilesh Somani for a keynote address, corporate workshop, 1-on-1 mentorship, media inquiry, or book discussion — we would love to hear from you.
        </p>

        {/* Connect Action Card */}
        <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-card border border-gold/30 shadow-2xl shadow-gold/5 relative overflow-hidden backdrop-blur-md">
          <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
            <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
              <div className="flex items-center gap-2 text-gold font-semibold text-xs uppercase tracking-wider mb-1">
                <CalendarCheck size={16} />
                Keynotes & Speaking
              </div>
              <p className="text-xs text-muted-foreground">
                Invite for summits, corporate retreats & youth conclaves.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
              <div className="flex items-center gap-2 text-gold font-semibold text-xs uppercase tracking-wider mb-1">
                <MessageSquare size={16} />
                Mentorship & Inquiries
              </div>
              <p className="text-xs text-muted-foreground">
                Reach out for personal guidance, workshops, & book collaborations.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gold text-gold-foreground hover:bg-gold/90 px-8 py-4 rounded-full font-semibold text-sm shadow-xl shadow-gold/25 hover:scale-105 transition-all duration-300"
            >
              <span>Connect via Official Form</span>
              <ExternalLink size={16} />
            </a>

            <a
              href="mailto:somani.akhil09@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-border/80 hover:border-gold text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <Mail size={15} className="text-gold" />
              <span>somani.akhil09@gmail.com</span>
            </a>
          </div>

          <p className="text-[11px] text-muted-foreground/70 mt-5">
            Fill out the quick Google Form and our team will get back to you shortly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
