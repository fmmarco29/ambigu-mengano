'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcWD6u6Vf4EQ6pXVP61JQSoATxoI1yDLrmsSbCIW5IU4OtWQhRuSw3UASC0B-5vUT4xsjxJceukLEEVltGPk-NSwf4p1g4TqWoU1EOLQAFYEbpUg2AJjf4zRzSPduqdxFJLns2JIm1uLYZ_YbnpFeLJ7tfDzkHqjy88k19WM8tG-rSJaLXWdVGs6xIv6UfkuFRXMtnuGM79AF98NtBEGZcGt7PvAe8DOx6XgsjX3VV_vHbUgwjT0q4ieuJ3OC7pVUALNm5VJ0wCA")',
                }}
            >
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/40 via-transparent to-background" />
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col gap-6 max-w-4xl"
                >
                    <span className="text-primary text-xs md:text-sm font-bold tracking-[0.5em] uppercase">Tardeo & Madrugadas</span>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter drop-shadow-2xl uppercase">
                        Ambigú<br /><span className="text-primary">Mengano</span>
                    </h1>
                    <div className="h-[2px] w-24 bg-primary mx-auto my-2"></div>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-primary text-xl md:text-3xl font-medium tracking-wide italic font-display"
                    >
                        El arte de perder el tiempo con clase
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 animate-bounce"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
