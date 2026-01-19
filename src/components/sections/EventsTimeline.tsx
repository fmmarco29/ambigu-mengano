'use client';
import { motion } from 'framer-motion';

const events = [
    {
        tag: "Vivo & Acústico",
        time: "22 Oct, 22:00H",
        title: "Noche de Boleros: Trío Los Santos",
        desc: "Una velada íntima con los mejores clásicos del bolero en vivo. Disfruta de nuestra selección de rones añejos mientras la música envuelve el rincón.",
        icon: "music_note",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ8IfpCDlAdiUUMBWgzKW1JC_MHVmjfT9qbv5CIzoO70BDS1qRXrDvC0fB_InDSQlh8NY8ZQXqOy7w25RcnCmflgcniE25xeWwF3RwC5udTyPXB4JpBwcvgui0z4sbnWzoIiIoGnQrPIL-XUQHMzMz87brFez7G6rxUuPTxLcYhF6YzeddJIJDVjTthKLr71TpI1dVK46D5E9SkdBWi-WYI7SH83zcg_Tx2rnGMR-2zTLZFjwLbdnrrH5DoQNz6wOMFxFgo_VaJw"
    },
    {
        tag: "Mixología de Autor",
        time: "25 Oct, 20:00H",
        title: "Guest Bartender: Alex S.",
        desc: "Sesión de coctelería de autor inspirada en la era de la prohibición. Prueba el 'Mengano Sour', nuestra firma exclusiva para esta noche.",
        icon: "liquor",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl8ErkKfZttfOVNTjMpWKyuzEbYNtblo8dZm7r9o5Vw1s0OCpvp874JvnM_5ATun1PIph2HTJr1VD9QC_1T-7Gj_jC6g8ZFzZ-ZPZqGdagMdqw9UMOq2kuG0SnwyfymZsi6M3Mh0W7ZbLQu0rM6QjXsITPZ8ClAuMofupQlWeeklov3b54KWEnCAOvQDXQIDiCeK_KLhUICSFFR4mFfnGSQxUBevRlt1iudxIz2m01CFSnAbSo4fliy_ZgfyAWc5XQfk3TsnwPFQ"
    },
    {
        tag: "Tardeo Golfo",
        time: "27 Oct, 18:00H",
        title: "Especial Aperitivos y Vinilos",
        desc: "La transición perfecta entre la tarde y la noche. Selección de vinilos soul & funk acompañados de nuestra tabla de quesos y vermut artesano.",
        icon: "wb_sunny",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCQuap-pOc-v_I_jKXSQ_s6ELOXxCg9WXfWT5VTmHJgoGhryYKSekj1aJGNwnd_YXmPgBcLvHW3rdhpPxa3H2BGcO1Vlus4ZXB1EtOnX1HBPx780pMBdsyKZ-l_WJ1pwtVbjQ0fGBbrAmelm00kyFfH9zlCJrGav8LPaIzdS9o-QewVfYGByl3Kdgk_9jTNdiFkHFxqKpsCW2V0DrXtA67qjB5qCaoTLQtTTv0UBFFY01C2HOgiAJKScgSX-oQNlpG0uX8ctkBeA"
    }
];

export default function EventsTimeline() {
    return (
        <section className="py-24 px-6 bg-black" id="eventos">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase">Próximas Madrugadas</h2>
                    <p className="text-primary/80 text-lg max-w-2xl font-sans italic italic">
                        Sumérgete en la atmósfera de nuestras noches de Bolero, sesiones de mixología de autor y tardes de aperitivo golfo.
                    </p>
                </div>

                <div className="relative space-y-12">
                    <div className="absolute left-[19px] top-4 bottom-4 w-px bg-primary/20"></div>

                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="grid grid-cols-[40px_1fr] gap-8 group"
                        >
                            <div className="flex flex-col items-center">
                                <div className="z-10 size-10 rounded-full bg-primary flex items-center justify-center text-black spotlight-glow">
                                    <span className="material-symbols-outlined text-xl">{event.icon}</span>
                                </div>
                            </div>

                            <div className="pb-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">{event.tag}</span>
                                    <div className="h-px flex-1 bg-white/5"></div>
                                    <span className="text-white/40 text-sm font-sans">{event.time}</span>
                                </div>

                                <div className="bg-surface/30 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/20 transition-all">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="md:w-1/3 aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="md:w-2/3 space-y-4 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                                <p className="text-white/40 text-sm leading-relaxed">{event.desc}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-primary/60 text-xs italic flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-sm">confirmation_number</span>
                                                    Entrada libre hasta completar aforo
                                                </div>
                                                <button className="text-white text-xs font-bold uppercase tracking-widest border border-primary/30 px-6 py-2 rounded-full hover:bg-primary hover:text-black transition-all">
                                                    Me interesa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-10 rounded-3xl bg-primary/5 border border-primary/10 text-center space-y-6">
                    <h2 className="text-3xl font-black text-white uppercase italic">¿Deseas organizar un evento privado?</h2>
                    <p className="text-white/50 max-w-xl mx-auto font-sans leading-relaxed">
                        Nuestro salón está disponible para celebraciones exclusivas, catas privadas y rodajes cinematográficos. Hablemos sobre tu idea.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 bg-primary text-black font-bold rounded-lg hover:scale-105 transition-all">Contactar ahora</button>
                        <button className="px-8 py-3 bg-transparent border border-primary/50 text-primary font-bold rounded-lg hover:bg-primary/5 transition-all">Dossier para Eventos</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
