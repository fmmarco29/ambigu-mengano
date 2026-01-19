'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const benefits = [
    {
        icon: "event_seat",
        title: "Mesa Preferente",
        desc: "Tu rincón favorito siempre disponible, sin esperas ni reservas previas."
    },
    {
        icon: "liquor",
        title: "Invitación al Segundo Bolero",
        desc: "La segunda copa corre por nuestra cuenta en cada una de tus visitas."
    },
    {
        icon: "subscriptions",
        title: "Acceso a La Pequeña Pista",
        desc: "Entrada exclusiva a nuestro salón privado con orquesta en vivo los fines de semana."
    }
];

export default function VipSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isJoined, setIsJoined] = useState(false);

    const memberId = name ? `MNG-${Math.random().toString(36).substr(2, 6).toUpperCase()}` : 'MNG-XXXXXX';

    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden" id="vip">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">Membresía Exclusiva</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
                            Club <br />
                            <span className="text-primary italic font-display">Mengano</span>
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed max-w-md italic">
                            &quot;Para los que siempre vuelven&quot;
                        </p>
                    </div>

                    <div className="space-y-6">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-xl bg-surface/30 border border-white/5 hover:border-primary/20 transition-all group"
                            >
                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">{benefit.title}</h4>
                                    <p className="text-white/40 text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {!isJoined ? (
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md pt-4">
                            <div className="flex-1 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Tu Nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-surface/50 border border-white/10 p-4 rounded-xl text-white focus:border-primary focus:outline-none transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Tu Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-surface/50 border border-white/10 p-4 rounded-xl text-white focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>
                            <button
                                onClick={() => setIsJoined(true)}
                                disabled={!name || !email}
                                className="sm:w-32 bg-primary text-black font-black uppercase py-4 rounded-xl hover:bg-old-gold transition-colors disabled:opacity-50 flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined">key</span>
                            </button>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-primary/10 border border-primary/30 p-8 rounded-2xl"
                        >
                            <h3 className="text-primary font-bold text-xl mb-2">¡Bienvenido al Club!</h3>
                            <p className="text-white/80">Tu llave digital ha sido activada. Presenta el código QR al llegar.</p>
                        </motion.div>
                    )}
                </motion.div>

                <div className="relative perspective-1000">
                    <motion.div
                        initial={{ rotateY: 20, rotateX: 10 }}
                        animate={{
                            rotateY: isJoined ? 360 : [20, 25, 20],
                            rotateX: [10, 15, 10]
                        }}
                        transition={{
                            duration: isJoined ? 1.5 : 4,
                            repeat: isJoined ? 0 : Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-full aspect-[1.6/1] rounded-3xl overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(184,134,11,0.3)] group leather-texture"
                    >
                        {/* Membership Card Content */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-black/90"></div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 transition-all text-left">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">Membership Card</p>
                                    <h3 className="text-white text-2xl font-bold font-display italic">Miembro de Honor</h3>
                                </div>
                                <span className="material-symbols-outlined text-primary text-4xl opacity-50">workspace_premium</span>
                            </div>

                            <div className="flex justify-between items-end">
                                <div className="space-y-4">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={name}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="space-y-1"
                                        >
                                            <p className="text-white/40 text-[8px] uppercase tracking-widest leading-none">Miembro desde OCT 2024</p>
                                            <p className="text-white text-xl font-medium tracking-tight">
                                                {name || 'Tu Nombre'}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="space-y-1">
                                        <p className="text-primary/60 text-[8px] uppercase tracking-[0.2em] leading-none">ID de Socio</p>
                                        <p className="text-white/40 font-mono text-xs">{memberId}</p>
                                    </div>
                                </div>

                                <div className="bg-white p-2 rounded-lg group-hover:scale-105 transition-transform duration-500">
                                    <div className="size-16 flex items-center justify-center bg-white">
                                        <svg className="size-full fill-black" viewBox="0 0 100 100">
                                            <rect height="30" width="30" x="0" y="0"></rect>
                                            <rect height="20" width="10" x="0" y="40"></rect>
                                            <rect height="10" width="15" x="15" y="40"></rect>
                                            <rect height="30" width="30" x="0" y="70"></rect>
                                            <rect height="10" width="20" x="40" y="0"></rect>
                                            <rect height="30" width="30" x="70" y="0"></rect>
                                            <rect height="15" width="10" x="40" y="15"></rect>
                                            <rect height="25" width="25" x="40" y="40"></rect>
                                            <rect height="10" width="25" x="75" y="40"></rect>
                                            <rect height="25" width="15" x="40" y="75"></rect>
                                            <rect height="25" width="35" x="65" y="75"></rect>
                                            <rect fill="white" height="20" width="20" x="5" y="5"></rect>
                                            <rect height="10" width="10" x="10" y="10"></rect>
                                            <rect fill="white" height="20" width="20" x="75" y="5"></rect>
                                            <rect height="10" width="10" x="80" y="10"></rect>
                                            <rect fill="white" height="20" width="20" x="5" y="75"></rect>
                                            <rect height="10" width="10" x="10" y="80"></rect>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 border-[0.5px] border-primary/30 rounded-3xl pointer-events-none"></div>
                        <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-45 pointer-events-none"
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
