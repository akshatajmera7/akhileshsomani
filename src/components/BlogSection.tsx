import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookText } from "lucide-react";
import { motion } from "framer-motion";

const BlogSection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="blog" className="py-24 px-6 relative overflow-hidden bg-card/30">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl opacity-50" />

            <div
                ref={ref}
                className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
            >
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gold/10 text-gold mb-6">
                    <BookText size={32} />
                </div>

                <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3">Explore Further</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Personal Reflections & Blog</h2>
                <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

                <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                    Beyond the pages of the book, I share ongoing reflections on mindset, success, and the journey of life. Dive deeper into the philosophy of "The 9 Wonders" through my official blog.
                </p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <a
                        href="https://akhileshsomani.blogspot.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <Button className="bg-foreground text-background hover:bg-gold hover:text-gold-foreground px-10 py-7 text-lg rounded-full font-medium transition-all duration-500 shadow-xl hover:shadow-gold/20 flex items-center gap-3">
                            Visit The Blog <ExternalLink size={20} />
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;
