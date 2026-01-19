'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const categories = [
    { id: 'cocktails', name: 'Alquimia de Autor', icon: 'auto_awesome' },
    { id: 'premium', name: 'Combinados Premium', icon: 'liquor' },
    { id: 'vinos', name: 'Vinos de Reserva', icon: 'wine_bar' },
];

const menuData = {
    cocktails: [
        {
            name: "El Bolero",
            price: "14€",
            ingredients: "Ron Añejo, Canela, Naranja",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJo82Aftb7Ja-YaZh_0Hvx_NFmWKwE3lgY6SIKxm3rhqNO2CuPdfiQfxWUcb-oNg8iAuHzwAjUgyVwIuuGl5RunezU4UhYa9p5vMW14MiZybfiEq5pObmZSlLCvFVSdFYYuXKYWIVi-g8c2F0P4ZMv7flY5R0Qh7LC1GHW-OTh7TKPRKkdMhi19EODnPJW5eQ5aURmkcgIHUC48Q60gW0TO5d_ekyEdZmyufv983MVfcZq6YSNIu_Fd7EbClOVIlGazlhY_p2QQw"
        },
        {
            name: "Noches de Taberna",
            price: "12€",
            ingredients: "Vermut Rojo, Gin, Amargo",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPTAN8v17OyIHntXMOVAfSQWK70OYy-Bd55xdp1XK6UypkFj-n6i-rHhVMVWNMwoecHHoYPtouk9lRZGfD42kDnv1zIUv8ACoBk-GO9lIF6-KtzCwz6TUWQe0_q0QsM2cEHEExCYvxIS7v9a8cNtjjgvw4SqCqoqRa7I45fpaRkiSXNw1w_rixaGKiiPFbjFrGE9ok3jjcK1OZ0osDY84dkV59AGlV7Mjlrzes12nSEAM8K3DL21-mtO-ZotlWKY53B9eAK0lamg"
        },
        {
            name: "El Mengano",
            price: "15€",
            ingredients: "Whisky, Ahumado, Miel de Agave",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE5r-fNO4GjvvnNq30fQD5AZauV2f1OxCE2RwGGREwdSBomppRBzpCpEfj8YhV1-J1n_Lg-IzzIpph-A0J3Z54aXzS1hyH7_ISOV5qk6joxLFjK08PRzc3H2UYaQBtiNn7hjeaPusjM_H8Kx7TalvxNBebSUY74M-wqDDG51DqnIq9GZ_RfzsleLurTwMg6pKN6sn2MOpK9h8dfLllg823YNO2St7qy8nDDtCCLG56RyHE9mq_5ABh-J5vAQAhj0Of772jdddIDA"
        },
        {
            name: "Tarde de Gloria",
            price: "11€",
            ingredients: "Fino, Soda de Pomelo, Hierbabuena",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvQZYFMX8ymEZoxXqycbbvkupcSdXs0OxxjJ0-mJiP8seKXfecjdtBUU9r1leTRVzxO77iY4PMYgzaNoal3x0HjEeAfbpJnULHzNt8AfMLReUyqRY8dO12avt1serneuCKefsrz7-yVBjm6Ryu-JJij9UgdDPAXvFPHMqy_otUOT9s4UKrF-sk00Xrw3M3Qfgiw4-3FIPv6cOuN-FngjH3Ujt05EGpo7U0I8W7lIjIapoPjg6Ftnj_ita7z-DSJXnsljKne2ba2g"
        }
    ],
    premium: [
        { name: "Hendrick's Tonic", price: "12€", ingredients: "Pepino fresco, pimienta rosa y tónica Fever-Tree." },
        { name: "Macallan 12 Highball", price: "18€", ingredients: "Soda premium, piel de naranja y una gota de miel." },
        { name: "Zacapa 23 Neat", price: "16€", ingredients: "Ron añejo servido con un solo cubo de hielo cristalino." },
        { name: "Patrón Silver Margarita", price: "14€", ingredients: "Triple sec orgánico y lima recién exprimida." }
    ],
    vinos: [
        { name: "Malbec Reserva", region: "Valle de Uco", glass: "6€", bottle: "28€" },
        { name: "Chardonnay 'Brisa'", region: "Chapadmalal", glass: "5€", bottle: "22€" },
        { name: "Pinot Noir", region: "Patagonia", glass: "7€", bottle: "32€" }
    ]
};

export default function MenuGrid() {
    const [activeTab, setActiveTab] = useState('cocktails');

    return (
        <section className="py-32 px-6 bg-background relative overflow-hidden" id="carta">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">

                {/* Left side: Navigation & Branding */}
                <aside className="lg:w-80 shrink-0 space-y-12">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full border border-primary/20 text-[10px] text-primary uppercase font-bold tracking-[0.4em]">
                            Menu Digital
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.8]">
                            Black<br /><span className="text-primary italic">Label</span>
                        </h2>
                    </div>

                    <nav className="flex flex-col gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`group flex items-center justify-between py-2 border-b transition-all duration-500 ${activeTab === cat.id
                                    ? 'border-primary text-primary'
                                    : 'border-white/10 text-white/40 hover:border-white/30'
                                    }`}
                            >
                                <span className="text-sm uppercase tracking-[0.3em] font-bold">{cat.name}</span>
                                <span className={`material-symbols-outlined text-xs transition-transform duration-500 ${activeTab === cat.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>arrow_forward_ios</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Right side: Items */}
                <div className="flex-1 space-y-20">
                    <AnimatePresence mode="wait">
                        {activeTab === 'cocktails' && (
                            <motion.div
                                key="cocktails"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
                            >
                                {menuData.cocktails.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="group space-y-6"
                                    >
                                        <div className="aspect-[16/10] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-baseline">
                                                <h3 className="text-white text-2xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{item.name}</h3>
                                                <span className="text-primary/60 font-bold">{item.price}</span>
                                            </div>
                                            <p className="text-white/30 text-xs italic tracking-wide leading-relaxed pl-4 border-l border-primary/20">
                                                {item.ingredients}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'premium' && (
                            <motion.div
                                key="premium"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="divide-y divide-white/5"
                            >
                                {menuData.premium.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-8 group hover:px-4 transition-all duration-500">
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-tight">{item.name}</h3>
                                            <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">{item.ingredients}</p>
                                        </div>
                                        <span className="text-primary font-bold text-lg tabular-nums tracking-tighter">{item.price}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'vinos' && (
                            <motion.div
                                key="vinos"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="divide-y divide-white/5"
                            >
                                {menuData.vinos.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-10 group hover:bg-white/[0.02] px-6 transition-all duration-700">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-4">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-tight">{item.name}</h3>
                                                <span className="px-2 py-0.5 border border-primary/20 text-[8px] text-primary/60 uppercase tracking-widest font-bold">{item.region}</span>
                                            </div>
                                            <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-medium italic">Selección del Sumiller</p>
                                        </div>
                                        <div className="flex gap-16 text-right">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold mb-1">Copa</span>
                                                <span className="text-primary font-bold text-xl">{item.glass}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold mb-1">Botella</span>
                                                <span className="text-primary font-bold text-xl">{item.bottle}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
