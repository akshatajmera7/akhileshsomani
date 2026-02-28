import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import img1 from "@/1.jpg";
import img2 from "@/2.jpg";
import img3 from "@/3.jpg";
import img4 from "@/4.JPG";
import img5 from "@/5.jpg";
import img6 from "@/6.JPG";

const galleryItems = [
    { img: img1, title: "Train The Trainer Certificate", description: "Certificate for train the trainer by Sonu Sood, Akhilesh Somani & Sneh Desai." },
    { img: img2, title: "With CEO Kishore Kumar S", description: "Akhilesh Somani with Kishore Kumar S, CEO of Hindustan Zinc Limited, Agucha." },
    { img: img3, title: "With Brian Tracy", description: "Akhilesh somani & Brian Tracy book wealth to Secret ll" },
    { img: img4, title: "With Deepak Chopra", description: "World's greatest Indian American author Mr. Deepak Chopra & Akhilesh Somani." },
    { img: img5, title: "With Bhupenddra Singh Raathore", description: "Akhilesh Somani & Bhupenddra Singh Raathore." },
    { img: img6, title: "With Suniel Shetty", description: "Akhilesh Somani & Suniel Shetty, Indian actor, film producer, and entrepreneur." },
];

const GalleryItem = ({ item, index }: { item: typeof galleryItems[0]; index: number }) => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-card border border-border/60 hover:shadow-2xl transition-all duration-500"
        >
            <div className="aspect-[4/5] overflow-hidden">
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {item.description}
                    </p>
                </div>
            </div>

            {/* Mobile-only info below image if hover isn't preferred or as fallback */}
            <div className="p-4 md:hidden">
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </div>
        </motion.div>
    );
};

const Gallery = () => {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-16">
                        <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3">Memories & Milestones</p>
                        <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Gallery</h1>
                        <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Moments from a journey of growth, collaboration with global leaders, and the
                            pursuit of excellence in shaping a brighter future.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item, index) => (
                            <GalleryItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Gallery;
