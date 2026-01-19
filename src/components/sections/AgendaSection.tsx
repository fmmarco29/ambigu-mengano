'use client';
import { motion } from 'framer-motion';

const agenda = [
    {
        day: "Miércoles",
        title: "Tardeo de Autor",
        time: "17:00 — 21:00",
        desc: "Probamos los nuevos ensayos del mixólogo con precio de amigo.",
        icon: "science"
    },
    {
        day: "Jueves",
        title: "Bolero & Jazz",
        time: "19:00 — 23:00",
        desc: "Música en vivo que suena a nostalgia y terciopelo.",
        icon: "mic_external_on"
    },
    {
        day: "Viernes",
        title: "La Hora Canalla",
        time: "20:00 — 02:00",
        desc: "Cuando las luces bajan y la barra se llena de historias.",
        icon: "nightlight"
    },
    {
        day: "Sábado",
        title: "Sesión Vinilo",
        time: "13:00 — 21:00",
        desc: "Selección de clásicos en 33 RPM acompañando tu vermut.",
        icon: "album"
    }
];

export default function AgendaSection() {
    return (
        <section className="py-24 px-6 bg-[#1a1a1a]" id="agenda">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase">Cronograma del Deleite</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">La Agenda Mengano</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {agenda.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative p-8 bg-surface/30 border border-white/5 rounded-2xl hover:border-primary/30 transition-all group overflow-hidden"
                        >
                            {/* Number Background */}
                            <span className="absolute -top-4 -right-4 text-8xl font-black text-white/[0.02] group-hover:text-primary/[0.05] transition-colors">
                                {i + 1}
                            </span>

                            <div className="space-y-6 relative z-10">
                                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-primary text-xs font-bold uppercase tracking-widest">{item.day}</p>
                                    <h3 className="text-2xl font-black text-white uppercase">{item.title}</h3>
                                    <p className="text-white/40 text-sm font-sans">{item.time}</p>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
