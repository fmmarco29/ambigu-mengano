'use client';
import { motion } from 'framer-motion';

export default function DanceFloor() {
    return (
        <section className="relative py-32 px-6 overflow-hidden flex items-center justify-center bg-black/50">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full pointer-events-none animate-pulse" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="relative z-10 text-center space-y-10 max-w-4xl mx-auto border-y border-primary/30 py-20 backdrop-blur-sm"
            >
                <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="material-symbols-outlined text-6xl text-primary/60 inline-block"
                >
                    stars
                </motion.span>

                <h2 className="text-6xl md:text-8xl font-extrabold text-white uppercase tracking-tighter leading-[0.85]">
                    Pista<br /><span className="text-primary italic">Íntima</span>
                </h2>

                <p className="text-xl md:text-2xl text-white/70 font-light tracking-widest italic max-w-xl mx-auto">
                    &quot;Donde los pasos cortos dicen más que las palabras largas&quot;
                </p>

                <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-primary/80 text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-bold pt-6">
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Aforo Limitado</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Luz Tenue</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Sin Prisas</span>
                </div>
            </motion.div>
        </section>
    )
}
