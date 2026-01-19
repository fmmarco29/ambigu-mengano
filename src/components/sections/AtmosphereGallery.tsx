'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const images = [
    {
        url: "/images/ambigu_interior_vibe_1768824867152.png",
        title: "El Escenario",
        desc: "Donde el tiempo se detiene entre terciopelo y madera."
    },
    {
        url: "/images/luxury_cocktail_close_up_1768824884925.png",
        title: "La Alquimia",
        desc: "Cada trago es un verso de un bolero que aún no se ha escrito."
    },
    {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV1ebis5DokCAL5NN_1ktzXT2zpsfFmUDhKEP7XEZ3NuxKC-Wwc-PXiKiINk71MFGl4kcstUx2pieSrc_XsayQO63CfnFIl8qb0Z0ghewm_Ptw9vZWfT-AvyvxO3ZjJtwYgDsaKUw55Xt8lG5AcwniL52E9R-EdfZXLCu5KTaUgHux5BbQo0w_IY_rVzNy1Tiy0BfDIzbU82WdFhonRsNljyevcoziYXxX1x8infV00R_eodm4dS9aBYGjNGWtBGckcrSF45ZfdQ",
        title: "El Alma",
        desc: "Pequeños rincones para grandes confidencias."
    }
];

export default function AtmosphereGallery() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-20 left-6 z-20 space-y-2">
                    <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase">Atmósfera</span>
                    <h2 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter">La Mirada Mengano</h2>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-6">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="relative h-[60vh] w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 rounded-3xl overflow-hidden group shadow-2xl"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-10 left-10 space-y-2">
                                <h3 className="text-3xl font-black text-white uppercase">{img.title}</h3>
                                <p className="text-primary italic font-display text-lg">{img.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
