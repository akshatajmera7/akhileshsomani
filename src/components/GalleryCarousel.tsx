import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Book, Star } from "lucide-react";

import img1 from "@/1.jpg";
import img2 from "@/2.jpg";
import img3 from "@/3.jpg";
import img4 from "@/4.JPG";
import img5 from "@/5.jpg";
import img6 from "@/6.JPG";

const galleryItems = [
    { img: img1, tag: "Academy", icon: Award, description: "With Sonu Sood & Sneh Desai" },
    { img: img2, tag: "Meeting", icon: Users, description: "With CEO Kishore Kumar S" },
    { img: img3, tag: "Author", icon: Book, description: "With Brian Tracy" },
    { img: img4, tag: "Wisdom", icon: Star, description: "With Deepak Chopra" },
    { img: img5, tag: "Strategy", icon: Users, description: "With Bhupenddra Singh Raathore" },
    { img: img6, tag: "Success", icon: Award, description: "With Suniel Shetty" },
];

const GalleryCarousel = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [api, setApi] = React.useState<CarouselApi>();

    React.useEffect(() => {
        if (!api) return;

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [api]);

    return (
        <section id="gallery" className="py-24 md:py-32 px-6 bg-gradient-section relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl opacity-50" />

            <div className="max-w-6xl mx-auto">
                <div
                    ref={ref}
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                >
                    <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3">Memories & Milestones</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">A Journey of Excellence</h2>
                    <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Glimpses into associations with global leaders and the transformative moments that define the path of a visionary.
                    </p>
                </div>

                <div className="relative px-12">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {galleryItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                        <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/40 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5 h-[450px]">
                                            <div className="absolute inset-0">
                                                <img
                                                    src={item.img}
                                                    alt={item.description}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                            </div>

                                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                <Badge className="w-fit mb-4 bg-gold/20 text-gold border-none backdrop-blur-md px-3 py-1">
                                                    {item.tag}
                                                </Badge>
                                                <div className="flex items-center gap-3">
                                                    <Icon size={20} className="text-gold shrink-0" />
                                                    <p className="font-serif text-xl font-bold text-foreground leading-tight">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 border-gold/20 text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300" />
                        <CarouselNext className="hidden md:flex -right-12 border-gold/20 text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default GalleryCarousel;
