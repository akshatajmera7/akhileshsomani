import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
    Coins,
    Brain,
    TrendingUp,
    Target,
    Quote,
    Clock,
    BookOpen,
    BellRing,
    CheckCircle2
} from "lucide-react";

import newBookImage from "@/new book.png";

const features = [
    {
        icon: Coins,
        title: "Money Mindset",
        subtitle: "Paiso ke baare mein apni thinking badliye",
        description: "Transform your subconscious relationship with money and cultivate an abundance mindset.",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        icon: Brain,
        title: "Wealth Psychology",
        subtitle: "Rich thinking ko samajhiye",
        description: "Understand the psychological principles and cognitive habits shared by the world's most successful minds.",
        color: "text-gold",
        bg: "bg-gold/10",
        border: "border-gold/20"
    },
    {
        icon: TrendingUp,
        title: "21 Practical Steps",
        subtitle: "Actionable framework for wealth-building",
        description: "A step-by-step roadmap designed for consistent financial elevation and disciplined execution.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        icon: Target,
        title: "Financial Freedom",
        subtitle: "Apne financial goals ki taraf systematically badhiye",
        description: "Systematically move toward true financial independence, autonomy, and generational wealth.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
];

const UpcomingBookSection = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    const [notified, setNotified] = useState(false);

    const handleNotifyClick = () => {
        setNotified(true);
        toast.info("Coming Soon!", {
            description: "The purchase link for 'The Wealth Code' will be available soon. Stay tuned for the official launch!",
            duration: 4000,
        });
    };

    return (
        <section id="upcoming-book" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-card/30 via-background to-card/20 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-10 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-burgundy/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Top Section Header */}
                <div
                    ref={ref}
                    className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                        <Clock size={13} className="animate-pulse text-gold" />
                        Upcoming Soon • New Release
                    </div>

                    <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3 sm:mb-4">
                        THE <span className="text-gradient-gold">WEALTH CODE</span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl font-medium text-foreground/80 max-w-2xl mx-auto mb-3 sm:mb-4">
                        21 Steps to Building a Wealth Mindset
                    </p>

                    <div className="w-20 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-5 sm:mb-6" />

                    {/* Hindi Quote Badge */}
                    <div className="inline-block max-w-xl mx-auto p-3.5 sm:p-4 rounded-2xl bg-card border border-gold/30 shadow-lg shadow-gold/5">
                        <div className="flex items-center justify-center gap-1.5 text-gold mb-1">
                            <Quote size={14} />
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider">The Core Principle</span>
                        </div>
                        <p className="font-serif text-sm sm:text-base md:text-lg italic text-foreground font-medium">
                            “Wealth sirf paisa kamane se nahi, sahi mindset banane se banti hai.”
                        </p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Left: 3D Book Showcase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-5 flex flex-col items-center justify-center"
                    >
                        <div className="relative group w-full max-w-xs sm:max-w-sm">
                            {/* Glowing aura */}
                            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-gold/30 via-gold/10 to-amber-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Book Card Container */}
                            <div className="relative rounded-2xl overflow-hidden bg-card border border-gold/30 shadow-2xl p-3 sm:p-4 transition-all duration-500 group-hover:border-gold group-hover:shadow-gold/20">
                                {/* Upcoming Ribbon */}
                                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                                    <Badge className="bg-gold text-gold-foreground text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 shadow-md uppercase tracking-wider">
                                        Coming Soon
                                    </Badge>
                                </div>

                                {/* Book Image */}
                                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-black/5 flex items-center justify-center relative">
                                    <img
                                        src={newBookImage}
                                        alt="The Wealth Code - 21 Steps to Building a Wealth Mindset by Akhilesh Somani"
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-md"
                                    />
                                </div>

                                {/* Under-image info */}
                                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/40 text-center">
                                    <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gold mb-0.5">
                                        📖 Apni Wealth Journey Aaj Se Shuru Karein
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                                        By Akhilesh Somani • Official Upcoming Masterpiece
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Narrative & 4 Feature Pillars */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div>
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-snug">
                                Transform Your Financial Thinking & Habits
                            </h3>

                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                                <strong className="text-foreground">The Wealth Code</strong> ek practical guide hai jo aapko <em>money mindset, financial thinking</em> aur <em>wealth-building habits</em> ko samajhne mein help karegi.
                            </p>

                            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3 sm:mb-4">
                                Why The Wealth Code?
                            </p>

                            {/* 4 Pillars Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                                {features.map((feature, idx) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className={`p-3.5 sm:p-4 rounded-2xl bg-card border ${feature.border} hover:border-gold/50 transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-3`}
                                        >
                                            <div className={`p-2 rounded-xl ${feature.bg} ${feature.color} shrink-0 mt-0.5`}>
                                                <Icon size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-serif font-bold text-foreground text-sm mb-0.5">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-[11px] font-medium text-gold/90 mb-1">
                                                    {feature.subtitle}
                                                </p>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Closing Takeaway Card */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/50 border border-gold/20 backdrop-blur-sm mb-6 sm:mb-8">
                                <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                                    "Your income can change when your thinking changes."
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    The Wealth Code padhiye. Apni wealth journey ko ek new direction dijiye.
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                            <Button
                                onClick={handleNotifyClick}
                                className="w-full sm:w-auto bg-gold text-gold-foreground hover:bg-gold/90 px-6 sm:px-8 py-5 sm:py-6 rounded-full font-semibold text-xs sm:text-sm shadow-xl shadow-gold/20 hover:scale-105 transition-all duration-300 gap-2"
                            >
                                {notified ? (
                                    <>
                                        <CheckCircle2 size={16} />
                                        Launch Alert Active!
                                    </>
                                ) : (
                                    <>
                                        <BellRing size={16} />
                                        Get Your Copy Now (Upcoming Soon)
                                    </>
                                )}
                            </Button>

                            <a
                                href="/#book"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-border/70 hover:border-gold text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
                            >
                                <BookOpen size={15} className="text-gold" />
                                View Current Book: The 9 Wonders
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingBookSection;
