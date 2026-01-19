'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-slow-zoom"
                style={{
                    backgroundImage: 'url("/images/black_label_hero.png")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="relative z-10 flex h-full flex-col items-start justify-center text-left px-12 md:px-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col gap-8 max-w-4xl"
                >
                    <div className="space-y-2">
                        <span className="text-primary text-sm font-bold tracking-[0.6em] uppercase block">Black Label Edition</span>
                        <div className="h-[1px] w-12 bg-primary/40"></div>
                    </div>

                    <h1 className="text-white text-6xl md:text-9xl font-black leading-[0.8] tracking-tighter drop-shadow-2xl uppercase">
                        Ambigú<br /><span className="text-primary">Mengano</span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex flex-col gap-4"
                    >
                        <h2 className="text-white/80 text-xl md:text-2xl font-light tracking-[0.3em] uppercase italic">
                            Tardeo & Madrugadas
                        </h2>
                        <p className="text-white/40 text-sm md:text-base font-light tracking-wide max-w-sm border-l border-primary/20 pl-6 italic">
                            &quot;Donde el tiempo se detiene entre terciopelo, mármol y un buen bolero.&quot;
                        </p>
                    </motion.div>

                    <div className="pt-8">
                        <a href="#carta" className="group flex items-center gap-4 text-white text-xs font-bold uppercase tracking-[0.4em]">
                            Explorar la Carta
                            <span className="w-12 h-px bg-white/20 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
