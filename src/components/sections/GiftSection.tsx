'use client';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Pareja de Boleros",
        desc: "2 Cócteles de Autor & Maridaje de Aperitivos",
        price: "45€",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgyaScWQtUHnILo9sJwG2zXaSNLaJ9o9jVZwiE6KeGJUkLFQdv143uzWC3834kxogDUG7YDmhHGnwt8417XEApN0Ni2etONLe-7pB-_mEUfIl05wFchZIb5aut1sym9QwRDikkTrlhAgoytbHjFecLMhcKoRf5A00ENaQ0iHZbxGw9RZzmhImm346LyL7eTd2_6WvAIol1SZpPSXAhBAHQ5f2v8My1Joel5rlrzy_QPdyLp0n09Ie7tgdBieYYNSMfBL1bB4EtiQ"
    },
    {
        title: "Noche de Amigos",
        desc: "Menú Degustación Privado para 4 a 6 Personas",
        price: "180€",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCotAP-BdtGRGs3ou8u2DI2qW-nk74O3e-uKtjIocny1Z0avvxyAwlbZ8m1bzfPfSbO7TGaBH1CQ6WVuqBd5CtUJl1AMLwE1zYnjP6SMGsG0BUbtInbpzXo-U3dEs8Rbk17rLB6o_JTWvHwy65uNDzkvsUSxhEZOdomZIbtWngORkw2n0PHkmZLA8Zqo1Av0BtHnT8Cpj5JJDYbG7steiv-zdUKu5wvTAtsIqgwRBL0W8p-jmlX9VVcH2mWhUvweL1IE3ttANK49A"
    }
];

export default function GiftSection() {
    return (
        <section className="py-24 px-6 bg-[#0f0c08] relative" id="regalos">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-white text-5xl md:text-6xl font-extrabold uppercase tracking-tighter">
                        Regala un <span className="text-primary">Bolero</span>
                    </h2>
                    <p className="text-primary text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase opacity-70">
                        Música, Sabor y Recuerdos
                    </p>
                </div>

                <div className="bg-surface/20 vintage-border paper-texture p-8 md:p-12 relative overflow-hidden">
                    <span className="material-symbols-outlined absolute top-4 left-4 text-primary opacity-20 text-4xl">filter_vintage</span>
                    <span className="material-symbols-outlined absolute top-4 right-4 text-primary opacity-20 text-4xl">filter_vintage</span>
                    <span className="material-symbols-outlined absolute bottom-4 left-4 text-primary opacity-20 text-4xl">filter_vintage</span>
                    <span className="material-symbols-outlined absolute bottom-4 right-4 text-primary opacity-20 text-4xl">filter_vintage</span>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer relative aspect-[4/5] overflow-hidden rounded-xl border border-primary/20"
                            >
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-8 text-center space-y-2">
                                    <h3 className="text-primary text-2xl font-bold">{exp.title}</h3>
                                    <p className="text-white/70 text-sm italic">{exp.desc}</p>
                                    <div className="h-px bg-primary/30 w-full my-4"></div>
                                    <p className="text-white font-bold text-xl">{exp.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="space-y-8 border-t border-primary/10 pt-12">
                        <h3 className="text-white text-center text-xl font-bold uppercase italic tracking-wider">Personaliza tu Regalo</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Para:" className="bg-transparent border-b border-primary/30 p-2 text-white italic focus:border-primary outline-none" />
                            <input type="text" placeholder="De:" className="bg-transparent border-b border-primary/30 p-2 text-white italic focus:border-primary outline-none" />
                        </div>
                        <textarea placeholder="Un mensaje especial..." className="w-full bg-transparent border border-primary/10 rounded-xl p-4 text-white italic focus:border-primary outline-none h-32" />

                        <div className="flex flex-col items-center gap-6 pt-4">
                            <button className="bg-primary text-white font-black uppercase py-4 px-12 rounded-full hover:shadow-[0_0_30px_rgba(184,134,11,0.3)] transition-all">
                                Comprar Experiencia
                            </button>
                            <p className="text-white/20 text-[10px] uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">verified</span>
                                Ambigú Mengano Certificada Experiencia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
