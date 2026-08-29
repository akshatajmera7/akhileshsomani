import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    Search,
    Maximize2,
    X,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Check,
    Share2,
    ExternalLink,
    Building2,
    Award,
    Star,
    BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import img1 from "@/1.jpg";
import img2 from "@/2.jpg";
import img3 from "@/3.jpg";
import img4 from "@/4.JPG";
import img5 from "@/5.jpg";
import img6 from "@/6.JPG";
import img7 from "@/7.jpeg";
import img8 from "@/8.png";
import authorImg from "@/author.jpeg";
import bookImg from "@/book image.jpeg";
import newBookImg from "@/new book.png";

const GOOGLE_FORM_URL = "https://forms.gle/EpbLTF72mWNv7rcD8";

export interface GalleryPhoto {
    id: string;
    img: string;
    title: string;
    description: string;
    category: "all" | "hzl" | "luminaries" | "mentorship" | "books";
    categoryName: string;
    tag: string;
    featured?: boolean;
}

const galleryPhotos: GalleryPhoto[] = [
    {
        id: "hzl-ceo-arun-misra",
        img: img8,
        title: "With HZL CEO Mr. Arun Misra & HZL Top Leaders",
        description: "Akhilesh Somani with HZL CEO Mr. Arun Misra and top leaders of Hindustan Zinc Limited.",
        category: "hzl",
        categoryName: "HZL Leadership",
        tag: "Corporate Conclave",
        featured: true,
    },
    {
        id: "deepak-chopra",
        img: img4,
        title: "With Deepak Chopra",
        description: "World's greatest Indian-American author Dr. Deepak Chopra & Akhilesh Somani.",
        category: "luminaries",
        categoryName: "Global Luminaries",
        tag: "Global Luminary",
        featured: true,
    },
    {
        id: "brian-tracy",
        img: img3,
        title: "With Brian Tracy",
        description: "Akhilesh Somani & Brian Tracy collaborative book 'Wealth to Secret II'.",
        category: "luminaries",
        categoryName: "Global Luminaries",
        tag: "Literary Synergy",
        featured: false,
    },
    {
        id: "suniel-shetty",
        img: img6,
        title: "With Suniel Shetty",
        description: "Akhilesh Somani & Suniel Shetty, Indian actor, film producer, and entrepreneur.",
        category: "luminaries",
        categoryName: "Arts & Cinema",
        tag: "Youth Inspiration",
        featured: false,
    },
    {
        id: "kishore-kumar",
        img: img2,
        title: "With CEO Kishore Kumar S",
        description: "Akhilesh Somani with Kishore Kumar S, CEO of Hindustan Zinc Limited, Agucha.",
        category: "hzl",
        categoryName: "HZL Leadership",
        tag: "Executive Meeting",
        featured: false,
    },
    {
        id: "sonu-sood",
        img: img1,
        title: "With Sonu Sood & Sneh Desai",
        description: "Certificate for Train The Trainer by Sonu Sood, Akhilesh Somani & Sneh Desai.",
        category: "mentorship",
        categoryName: "Mentorship & Honors",
        tag: "Train The Trainer",
        featured: false,
    },
    {
        id: "kumar-vishwas",
        img: img7,
        title: "With Kumar Vishwas",
        description: "Akhilesh Somani with Kumar Vishwas.",
        category: "luminaries",
        categoryName: "Arts & Cinema",
        tag: "Literary Meeting",
        featured: false,
    },
    {
        id: "bsr",
        img: img5,
        title: "With Bhupenddra Singh Raathore",
        description: "Akhilesh Somani & Bhupenddra Singh Raathore (BSR).",
        category: "mentorship",
        categoryName: "Mentorship & Honors",
        tag: "Breakthrough Summit",
        featured: false,
    },
    {
        id: "new-book-wealth-code",
        img: newBookImg,
        title: "The Wealth Code (Upcoming Book)",
        description: "21 Steps to Building a Wealth Mindset — Upcoming new book by Akhilesh Somani.",
        category: "books",
        categoryName: "Books & Masterpieces",
        tag: "Upcoming Soon",
        featured: true,
    },
    {
        id: "author-akhilesh-somani",
        img: authorImg,
        title: "Akhilesh Somani",
        description: "Author, Mind Trainer & Speaker Akhilesh Somani.",
        category: "books",
        categoryName: "Books & Masterpieces",
        tag: "Author Portrait",
        featured: false,
    },
    {
        id: "book-9-wonders",
        img: bookImg,
        title: "The 9 Wonders (Bestseller)",
        description: "The 9 Wonders of Mind — Practical guide by Akhilesh Somani.",
        category: "books",
        categoryName: "Books & Masterpieces",
        tag: "Bestseller Book",
        featured: false,
    },
];

const categoryTabs = [
    { id: "all", label: "All Archives" },
    { id: "hzl", label: "HZL Leadership" },
    { id: "luminaries", label: "Global Luminaries" },
    { id: "mentorship", label: "Mentorship & Awards" },
    { id: "books", label: "Books & Author" },
];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    // Filtered photos
    const filteredPhotos = useMemo(() => {
        return galleryPhotos.filter((item) => {
            const matchesCategory =
                selectedCategory === "all" || item.category === selectedCategory;
            const query = searchTerm.toLowerCase().trim();
            const matchesSearch =
                !query ||
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                item.tag.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm]);

    const handleShare = (photo: GalleryPhoto) => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        toast.success(`Copied link for "${photo.title}"!`);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleNextPhoto = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) =>
            prev === null ? 0 : (prev + 1) % filteredPhotos.length
        );
    };

    const handlePrevPhoto = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) =>
            prev === null ? 0 : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === "Escape") setLightboxIndex(null);
            if (e.key === "ArrowRight") handleNextPhoto();
            if (e.key === "ArrowLeft") handlePrevPhoto();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, filteredPhotos.length]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [lightboxIndex]);

    const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

    return (
        <main className="bg-background min-h-screen text-foreground relative selection:bg-gold/20 selection:text-foreground">
            <Navbar />

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px]" />
                <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-burgundy/10 rounded-full blur-[140px]" />
            </div>

            {/* Page Header */}
            <section className="relative z-10 pt-32 sm:pt-40 pb-12 px-6 border-b border-border/40 bg-gradient-to-b from-background via-card/30 to-background">
                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6 justify-center">
                        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-gold font-semibold">Photographic Gallery</span>
                    </nav>

                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                            <Sparkles size={14} className="animate-pulse" />
                            Official Visual Chronicle
                        </div>

                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
                            Moments of <span className="text-gradient-gold">Leadership</span> & Impact
                        </h1>

                        <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-5" />

                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            A curated gallery capturing pivotal associations with industrial titans, global authors, renowned artists, and transformative mentorship summits.
                        </p>
                    </div>

                    {/* Filter Tabs & Search Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto pt-4">
                        {/* Categories */}
                        <div className="flex items-center gap-2 flex-wrap justify-center">
                            {categoryTabs.map((tab) => {
                                const isActive = selectedCategory === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setSelectedCategory(tab.id)}
                                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                                            isActive
                                                ? "bg-gold text-gold-foreground font-semibold shadow-md shadow-gold/20 scale-105"
                                                : "bg-card border border-border/70 text-muted-foreground hover:text-foreground hover:border-gold/40"
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-64">
                            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search moments..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-card border border-border/70 rounded-full pl-9 pr-8 py-2 text-xs sm:text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-all"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
                {/* Result count */}
                {(selectedCategory !== "all" || searchTerm) && (
                    <div className="flex items-center justify-between mb-8 pb-3 border-b border-border/40 text-xs sm:text-sm text-muted-foreground">
                        <p>
                            Showing <span className="text-foreground font-semibold">{filteredPhotos.length}</span> moments
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory("all");
                                setSearchTerm("");
                            }}
                            className="text-gold hover:underline font-medium"
                        >
                            Reset filters
                        </button>
                    </div>
                )}

                {/* Empty state */}
                {filteredPhotos.length === 0 && (
                    <div className="py-20 text-center bg-card/40 rounded-2xl border border-dashed border-border p-8 max-w-md mx-auto">
                        <Search size={36} className="mx-auto text-muted-foreground/40 mb-3" />
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2">No moments found</h3>
                        <p className="text-xs text-muted-foreground mb-4">
                            Try searching with another keyword or explore all archives.
                        </p>
                        <Button
                            onClick={() => {
                                setSelectedCategory("all");
                                setSearchTerm("");
                            }}
                            className="bg-gold text-gold-foreground rounded-full text-xs"
                        >
                            Show All Photos
                        </Button>
                    </div>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPhotos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            onClick={() => setLightboxIndex(index)}
                            className="group relative rounded-3xl overflow-hidden bg-card border border-border/70 hover:border-gold/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-gold/15 cursor-pointer flex flex-col justify-between"
                        >
                            {/* Image Container with pristine framing */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-black/40 flex items-center justify-center">
                                <img
                                    src={photo.img}
                                    alt={photo.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                                />

                                {/* Top Floating Badge */}
                                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                                    <Badge className="bg-black/75 backdrop-blur-md text-gold border border-gold/40 text-[11px] font-medium px-3 py-1 shadow-md">
                                        {photo.tag}
                                    </Badge>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold text-gold-foreground p-2 rounded-full shadow-lg">
                                        <Maximize2 size={14} />
                                    </span>
                                </div>

                                {/* Vignette gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </div>

                            {/* Caption Footer */}
                            <div className="p-6 bg-card border-t border-border/40 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors leading-snug">
                                        {photo.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                        {photo.description}
                                    </p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-border/30 flex items-center justify-between text-xs text-gold font-semibold">
                                    <span>Expand Photo</span>
                                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom Invitation & Google Form Banner */}
            <section className="relative z-10 py-20 px-6 border-t border-border/40 bg-gradient-to-b from-card/30 to-background">
                <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 border border-gold/30 bg-gradient-to-br from-card via-background to-card shadow-2xl shadow-gold/5 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-burgundy/10 rounded-full blur-3xl pointer-events-none" />

                    <Badge className="bg-gold/10 text-gold border border-gold/30 text-xs px-3.5 py-1 uppercase tracking-widest mb-4">
                        Collaborations & Keynotes
                    </Badge>

                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Connect with <span className="text-gradient-gold">Akhilesh Somani</span>
                    </h2>

                    <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
                        Looking to invite Akhilesh Somani for keynote speaking, corporate masterclasses, executive mentorship, or media interactions? Reach out through our official connect form.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={GOOGLE_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gold text-gold-foreground px-8 py-4 rounded-full font-semibold text-sm shadow-xl shadow-gold/25 hover:scale-105 transition-all duration-300"
                        >
                            <span>Open Google Form</span>
                            <ExternalLink size={16} />
                        </a>
                        <Link
                            to="/#book"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-card border border-gold/40 hover:border-gold px-8 py-4 rounded-full font-medium text-sm text-foreground hover:text-gold transition-all duration-300"
                        >
                            <BookOpen size={16} className="text-gold" />
                            <span>Explore The Books</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Clean Lightbox Modal */}
            <AnimatePresence>
                {lightboxIndex !== null && activePhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 lg:p-8"
                        onClick={() => setLightboxIndex(null)}
                    >
                        {/* Top Bar */}
                        <div
                            className="absolute top-4 left-4 right-4 flex items-center justify-between z-30"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="text-xs text-white/70 font-medium px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md">
                                {lightboxIndex + 1} of {filteredPhotos.length}
                            </span>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleShare(activePhoto)}
                                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md"
                                    title="Share photo"
                                >
                                    {copied ? <Check size={16} className="text-green-400" /> : <Share2 size={16} />}
                                </button>
                                <button
                                    onClick={() => setLightboxIndex(null)}
                                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md"
                                    title="Close (Esc)"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {filteredPhotos.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrevPhoto();
                                    }}
                                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white border border-white/20 transition-all shadow-2xl backdrop-blur-md"
                                    title="Previous (←)"
                                >
                                    <ChevronLeft size={22} />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNextPhoto();
                                    }}
                                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white border border-white/20 transition-all shadow-2xl backdrop-blur-md"
                                    title="Next (→)"
                                >
                                    <ChevronRight size={22} />
                                </button>
                            </>
                        )}

                        {/* Card Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden border border-gold/30 shadow-2xl z-20 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image Viewport */}
                            <div className="max-h-[60vh] sm:max-h-[66vh] bg-black/80 flex items-center justify-center overflow-hidden p-2 sm:p-4">
                                <img
                                    src={activePhoto.img}
                                    alt={activePhoto.title}
                                    className="max-h-[56vh] sm:max-h-[62vh] w-auto max-w-full object-contain rounded-xl"
                                />
                            </div>

                            {/* Caption Details */}
                            <div className="p-6 sm:p-8 bg-card border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <Badge className="bg-gold/15 text-gold border-gold/30 text-xs px-2.5 py-0.5 mb-2">
                                        {activePhoto.tag}
                                    </Badge>
                                    <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
                                        {activePhoto.title}
                                    </h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {activePhoto.description}
                                    </p>
                                </div>

                                <div className="shrink-0 flex items-center gap-3">
                                    <a
                                        href={GOOGLE_FORM_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-gold-foreground text-xs font-semibold hover:bg-gold/90 transition-all shadow-md shadow-gold/20"
                                    >
                                        <span>Connect Form</span>
                                        <ExternalLink size={13} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
};

export default Gallery;
