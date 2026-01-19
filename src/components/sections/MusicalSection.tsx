'use client';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Boleros Modernos",
        desc: "La nostalgia de los 50 reinterpretada con la elegancia del siglo XXI.",
        icon: "mic_external_on",
        highlight: true
    },
    {
        title: "Tardeo Golfo",
        desc: "Cuando la tarde se alarga y los vinilos empiezan a girar sin prisa.",
        icon: "nightlife",
        highlight: false
    },
    {
        title: "Copas de Autor",
        desc: "Alquimia líquida diseñada para acompañar cada estribillo.",
        icon: "local_bar",
        highlight: false
    }
];

const playlistItems = [
    {
        title: "Spanish Guitar",
        desc: "Sonidos de siempre en directo. Acordes que narran historias de pasión y nostalgia bajo la luz tenue de nuestros candiles.",
        icon: "music_note"
    },
    {
        title: "Vintage Mic",
        desc: "La esencia del bolero moderno. Voces aterciopeladas que reinterpretan los clásicos para los oídos de hoy.",
        icon: "settings_voice"
    }
];

export default function MusicalSection() {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden" id="musical">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 rounded-3xl border transition-all duration-500 group ${feature.highlight
                                ? 'bg-primary border-primary shadow-[0_20px_40px_-10px_rgba(184,134,11,0.3)]'
                                : 'bg-surface/30 border-white/5 hover:border-primary/30'
                                }`}
                        >
                            <div className={`size-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${feature.highlight ? 'bg-black text-primary' : 'bg-primary/10 text-primary'
                                }`}>
                                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                            </div>
                            <h3 className={`text-2xl font-black mb-4 uppercase ${feature.highlight ? 'text-black' : 'text-white'}`}>
                                {feature.title}
                            </h3>
                            <p className={feature.highlight ? 'text-black/70' : 'text-white/40'}>
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Spotify Playlist Integration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-primary/20"
                >
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/playlist/4SXiLOnc0Yp63YdyqMExWv?utm_source=generator"
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </motion.div>

                {/* Playlist description Section */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-primary/20"></div>
                        <h2 className="text-white text-3xl md:text-4xl font-black font-display italic text-center uppercase tracking-tighter">La Esencia</h2>
                        <div className="h-px flex-1 bg-primary/20"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {playlistItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group flex flex-col gap-6 rounded-3xl border border-primary/10 bg-surface/20 p-10 hover:border-primary/40 transition-all cursor-default relative overflow-hidden"
                            >
                                <div className="text-primary opacity-20 absolute -right-4 -top-4 group-hover:opacity-40 transition-opacity">
                                    <span className="material-symbols-outlined !text-9xl">{item.icon}</span>
                                </div>

                                <div className="text-primary relative z-10">
                                    <span className="material-symbols-outlined !text-5xl">{item.icon}</span>
                                </div>
                                <div className="space-y-4 relative z-10">
                                    <h3 className="text-white text-2xl font-black font-display uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed max-w-md">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
