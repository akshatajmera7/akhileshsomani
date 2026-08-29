import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Maximize2,
    X,
    Sparkles,
    ExternalLink,
    Share2,
    Check
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

import img1 from "@/1.jpg";
import img2 from "@/2.jpg";
import img3 from "@/3.jpg";
import img4 from "@/4.JPG";
import img5 from "@/5.jpg";
import img6 from "@/6.JPG";
import img7 from "@/7.jpeg";
import img8 from "@/8.png";

const GOOGLE_FORM_URL = "https://forms.gle/EpbLTF72mWNv7rcD8";

export interface CarouselCard {
    id: string;
    img: string;
    title: string;
    description: string;
    tag: string;
}

const galleryData: CarouselCard[] = [
    {
        id: "hzl-arun-misra",
        img: img8,
        title: "With HZL CEO Mr. Arun Misra & HZL Top Leaders",
        description: "Akhilesh Somani with HZL CEO Mr. Arun Misra and top leaders of Hindustan Zinc Limited.",
        tag: "HZL Leadership"
    },
    {
        id: "deepak-chopra",
        img: img4,
        title: "With Deepak Chopra",
        description: "World's greatest Indian-American author Dr. Deepak Chopra & Akhilesh Somani.",
        tag: "Global Luminary"
    },
    {
        id: "brian-tracy",
        img: img3,
        title: "With Brian Tracy",
        description: "Akhilesh Somani & Brian Tracy collaborative book 'Wealth to Secret II'.",
        tag: "Author & Mentor"
    },
    {
        id: "suniel-shetty",
        img: img6,
        title: "With Suniel Shetty",
        description: "Akhilesh Somani & Suniel Shetty, Indian actor, film producer, and entrepreneur.",
        tag: "Youth & Fitness"
    },
    {
        id: "kishore-kumar",
        img: img2,
        title: "With CEO Kishore Kumar S",
        description: "Akhilesh Somani with Kishore Kumar S, CEO of Hindustan Zinc Limited, Agucha.",
        tag: "Executive Meeting"
    },
    {
        id: "sonu-sood",
        img: img1,
        title: "With Sonu Sood & Sneh Desai",
        description: "Certificate for Train The Trainer by Sonu Sood, Akhilesh Somani & Sneh Desai.",
        tag: "Train The Trainer"
    },
    {
        id: "kumar-vishwas",
        img: img7,
        title: "With Kumar Vishwas",
        description: "Akhilesh Somani with renowned poet & orator Dr. Kumar Vishwas.",
        tag: "Literary Meeting"
    },
    {
        id: "bsr",
        img: img5,
        title: "With Bhupenddra Singh Raathore",
        description: "Akhilesh Somani & Bhupenddra Singh Raathore (BSR) breakthrough session.",
        tag: "Breakthrough Summit"
    },
];

// Duplicate items for continuous infinite rotating marquee loop
const infiniteGalleryData = [...galleryData, ...galleryData];

const GalleryCarousel = () => {
    const [lightboxItem, setLightboxItem] = useState<CarouselCard | null>(null);
    const [copied, setCopied] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const handleShare = (item: CarouselCard) => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        toast.success(`Copied link for "${item.title}"!`);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="gallery"
            className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 2500)}
        >
            {/* Ambient Background Lights */}
            <div className="absolute top-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-burgundy/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
                <div className="text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                        <Sparkles size={13} className="animate-pulse" />
                        Photo Gallery & Archives
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                        Moments of <span className="text-gradient-gold">Excellence</span>
                    </h2>
                </div>
            </div>

            {/* Continuous Infinitely Rotating Marquee Track (GPU Accelerated) */}
            <div className="relative w-full overflow-hidden py-4">
                {/* Left/Right Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                <div className="animate-marquee-smooth gap-4 sm:gap-6">
                    {infiniteGalleryData.map((item, idx) => (
                        <div
                            key={`${item.id}-${idx}`}
                            onClick={() => setLightboxItem(item)}
                            className="w-[260px] sm:w-[300px] md:w-[330px] shrink-0 rounded-3xl overflow-hidden bg-card border border-border/80 hover:border-gold/60 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-gold/15 cursor-pointer flex flex-col justify-between group select-none"
                        >
                            {/* Card Image */}
                            <div className="aspect-[4/5] relative overflow-hidden bg-black/40">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                                {/* Top Badge */}
                                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                                    <Badge className="bg-black/70 backdrop-blur-md text-gold border border-gold/40 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5">
                                        {item.tag}
                                    </Badge>
                                    <span className="p-1.5 rounded-full bg-gold text-gold-foreground shadow-md opacity-90 group-hover:scale-110 transition-transform">
                                        <Maximize2 size={13} />
                                    </span>
                                </div>

                                {/* Bottom Info inside image */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug group-hover:text-gold transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Lightbox Modal */}
            <AnimatePresence>
                {lightboxItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6"
                        onClick={() => setLightboxItem(null)}
                    >
                        {/* Top Bar */}
                        <div
                            className="absolute top-4 left-4 right-4 flex items-center justify-between z-30"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="text-xs text-white/70 font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
                                {lightboxItem.tag}
                            </span>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleShare(lightboxItem)}
                                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md"
                                    title="Share photo"
                                >
                                    {copied ? <Check size={16} className="text-green-400" /> : <Share2 size={16} />}
                                </button>
                                <button
                                    onClick={() => setLightboxItem(null)}
                                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md"
                                    title="Close (Esc)"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Card Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-w-3xl w-full bg-card rounded-3xl overflow-hidden border border-gold/30 shadow-2xl z-20 flex flex-col max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image Viewport */}
                            <div className="max-h-[55vh] sm:max-h-[60vh] bg-black/80 flex items-center justify-center overflow-hidden p-2">
                                <img
                                    src={lightboxItem.img}
                                    alt={lightboxItem.title}
                                    className="max-h-[50vh] sm:max-h-[58vh] w-auto max-w-full object-contain rounded-xl"
                                />
                            </div>

                            {/* Caption & Connect CTA */}
                            <div className="p-5 sm:p-6 bg-card border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-y-auto">
                                <div>
                                    <Badge className="bg-gold/15 text-gold border-gold/30 text-[10px] sm:text-xs px-2.5 py-0.5 mb-1.5">
                                        {lightboxItem.tag}
                                    </Badge>
                                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-foreground mb-1">
                                        {lightboxItem.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {lightboxItem.description}
                                    </p>
                                </div>

                                <a
                                    href={GOOGLE_FORM_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-gold text-gold-foreground font-semibold text-xs shrink-0 hover:bg-gold/90 transition-all shadow-md shadow-gold/20"
                                >
                                    <span>Connect Form</span>
                                    <ExternalLink size={13} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GalleryCarousel;
