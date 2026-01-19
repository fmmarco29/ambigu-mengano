'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const categories = [
    { id: 'cocktails', name: 'Cócteles de Autor', icon: 'auto_awesome' },
    { id: 'premium', name: 'Combinados Premium', icon: 'liquor' },
    { id: 'vinos', name: 'Vinos de la Tierra', icon: 'wine_bar' },
];

const menuData = {
    cocktails: [
        {
            name: "El Bolero",
            price: "14€",
            ingredients: "Ron Añejo, Canela, Naranja",
            story: "Inspirado en los encuentros fortuitos de las noches porteñas. Un perfil fresco, elegante y levemente dulce.",
            perfectServe: "Vaso de cristal tallado, hielo cristalino y un zest de limón sutilmente quemado.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJo82Aftb7Ja-YaZh_0Hvx_NFmWKwE3lgY6SIKxm3rhqNO2CuPdfiQfxWUcb-oNg8iAuHzwAjUgyVwIuuGl5RunezU4UhYa9p5vMW14MiZybfiEq5pObmZSlLCvFVSdFYYuXKYWIVi-g8c2F0P4ZMv7flY5R0Qh7LC1GHW-OTh7TKPRKkdMhi19EODnPJW5eQ5aURmkcgIHUC48Q60gW0TO5d_ekyEdZmyufv983MVfcZq6YSNIu_Fd7EbClOVIlGazlhY_p2QQw"
        },
        {
            name: "Noches de Taberna",
            price: "12€",
            ingredients: "Vermut Rojo, Gin, Amargo",
            story: "El homenaje definitivo a nuestro barrio. Un trago que captura la esencia del café de esquina: amargo y vibrante.",
            perfectServe: "Copa Nick & Nora con una aceituna rellena de anchoa.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPTAN8v17OyIHntXMOVAfSQWK70OYy-Bd55xdp1XK6UypkFj-n6i-rHhVMVWNMwoecHHoYPtouk9lRZGfD42kDnv1zIUv8ACoBk-GO9lIF6-KtzCwz6TUWQe0_q0QsM2cEHEExCYvxIS7v9a8cNtjjgvw4SqCqoqRa7I45fpaRkiSXNw1w_rixaGKiiPFbjFrGE9ok3jjcK1OZ0osDY84dkV59AGlV7Mjlrzes12nSEAM8K3DL21-mtO-ZotlWKY53B9eAK0lamg"
        },
        {
            name: "El Mengano",
            price: "15€",
            ingredients: "Whisky, Ahumado, Miel de Agave",
            story: "Complejo, profundo y seductor. Ideal para la transición entre la cena y la primera ronda de charlas nocturnas.",
            perfectServe: "Vaso Old Fashioned con un solo cubo de hielo XL.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE5r-fNO4GjvvnNq30fQD5AZauV2f1OxCE2RwGGREwdSBomppRBzpCpEfj8YhV1-J1n_Lg-IzzIpph-A0J3Z54aXzS1hyH7_ISOV5qk6joxLFjK08PRzc3H2UYaQBtiNn7hjeaPusjM_H8Kx7TalvxNBebSUY74M-wqDDG51DqnIq9GZ_RfzsleLurTwMg6pKN6sn2MOpK9h8dfLllg823YNO2St7qy8nDDtCCLG56RyHE9mq_5ABh-J5vAQAhj0Of772jdddIDA"
        },
        {
            name: "Tarde de Gloria",
            price: "11€",
            ingredients: "Fino, Soda de Pomelo, Hierbabuena",
            story: "La frescura de la tarde en un trago. Ligero, cítrico y con el alma de Jerez.",
            perfectServe: "Vaso alto con mucho hielo picado y rama de hierbabuena fresca.",
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
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden" id="carta">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

                {/* Sidebar Navigation */}
                <aside className="lg:w-64 shrink-0 space-y-8">
                    <div className="flex items-center gap-4 p-2">
                        <div className="bg-primary/20 rounded-full p-2 text-primary">
                            <span className="material-symbols-outlined">menu_book</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white uppercase leading-none">Menú Digital</h3>
                            <p className="text-primary text-[10px] uppercase tracking-widest">Interactivo</p>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 text-left ${activeTab === cat.id
                                    ? 'bg-primary text-black font-bold shadow-lg shadow-primary/20'
                                    : 'text-white/60 hover:bg-white/5'
                                    }`}
                            >
                                <span className="material-symbols-outlined">{cat.icon}</span>
                                <span className="text-sm uppercase tracking-widest">{cat.name}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="hidden lg:block p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-4">
                        <p className="text-primary text-[10px] uppercase font-bold tracking-widest">Sugerencia</p>
                        <div className="aspect-square rounded-xl overflow-hidden grayscale opacity-50">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhKU9778oRksmfbLKcx1g92GwLiNaarCapO7lYvZ0sj8StGjgtBiepCR4KnqZhQpX3jRfZEpSaEEdfwg5n3B7vAilGOCg5zpW2BqC2-MJL07lCv6yQoSK6UBuE6h_cj0nXYpK3dc6W8nQPm4eaInDHhPER5FnA6wngqaGOZFDOcJOpob_kPYa8uK7jNaBD18WyqEvwtxqCqRojWLNBLR7hLK-HLF3FiA9PIUKFYheEBctYtt7DZ6_oZh16D6ImNFY2PhzkZroglA" alt="Old Fashioned" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-white font-bold text-sm">Old Fashioned Reserve</h4>
                        <p className="text-primary/60 text-xs italic font-display">&quot;Un clásico reinventado con barrica de roble francés.&quot;</p>
                    </div>
                </aside>

                {/* Main Menu Area */}
                <div className="flex-1 space-y-12">
                    <div className="space-y-4 border-b border-primary/20 pb-12">
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                            La Carta <span className="text-primary italic font-display font-medium">Completa</span>
                        </h2>
                        <p className="text-white/40 text-lg font-serif italic max-w-2xl leading-relaxed">
                            Una selección curada de destilados, alquimia y sabores con historia. Cada trago es un viaje por la nostalgia y el refinamiento.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <AnimatePresence mode="wait">
                            {activeTab === 'cocktails' && (
                                <motion.div
                                    key="cocktails"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-4"
                                >
                                    {menuData.cocktails.map((item, i) => (
                                        <div key={i} className="border border-white/5 rounded-2xl bg-surface/30 hover:border-primary/30 transition-all overflow-hidden">
                                            <button
                                                onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                                                className="w-full flex items-center justify-between p-6 list-none text-left"
                                            >
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-3">
                                                        <h4 className="text-2xl font-bold text-primary font-display">{item.name}</h4>
                                                        <span className="px-2 py-0.5 rounded text-[8px] bg-primary text-black uppercase tracking-[0.2em] font-black">Firma</span>
                                                    </div>
                                                    <p className="text-white/40 text-sm font-sans italic">{item.ingredients}</p>
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <span className="text-xl font-bold text-white">{item.price}</span>
                                                    <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${expandedItem === item.name ? 'rotate-180' : ''}`}>expand_more</span>
                                                </div>
                                            </button>

                                            <AnimatePresence>
                                                {expandedItem === item.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 pb-8 pt-4 border-t border-primary/10 grid md:grid-cols-3 gap-8">
                                                            <div className="md:col-span-1 rounded-xl overflow-hidden aspect-video md:aspect-square brightness-75">
                                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div className="md:col-span-2 space-y-6">
                                                                <div className="space-y-2">
                                                                    <p className="text-primary text-[10px] uppercase font-bold tracking-widest">La Historia</p>
                                                                    <p className="text-white/60 text-base italic font-display leading-relaxed">{item.story}</p>
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <p className="text-primary text-[10px] uppercase font-bold tracking-widest">Perfect Serve</p>
                                                                    <p className="text-white/40 text-sm font-sans">{item.perfectServe}</p>
                                                                </div>
                                                                <button className="bg-primary/10 text-primary border border-primary/20 px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
                                                                    Pedir este trago
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'premium' && (
                                <motion.div
                                    key="premium"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="grid md:grid-cols-2 gap-4"
                                >
                                    {menuData.premium.map((item, i) => (
                                        <div key={i} className="p-8 border border-white/5 rounded-2xl bg-surface/30 hover:border-primary/30 transition-all group">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.name}</h3>
                                                <span className="font-bold text-primary">{item.price}</span>
                                            </div>
                                            <p className="text-white/40 text-sm leading-relaxed mb-6">{item.ingredients}</p>
                                            <div className="h-px w-8 bg-primary/40 group-hover:w-full transition-all duration-700"></div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'vinos' && (
                                <motion.div
                                    key="vinos"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="overflow-hidden rounded-2xl border border-white/5 bg-surface/30"
                                >
                                    <table className="w-full text-left">
                                        <thead className="bg-primary/10 text-primary">
                                            <tr>
                                                <th className="p-6 text-[10px] uppercase tracking-widest font-bold">Etiqueta</th>
                                                <th className="p-6 text-[10px] uppercase tracking-widest font-bold">Región</th>
                                                <th className="p-6 text-[10px] uppercase tracking-widest font-bold">Copa</th>
                                                <th className="p-6 text-[10px] uppercase tracking-widest font-bold">Botella</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {menuData.vinos.map((item, i) => (
                                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                                    <td className="p-6">
                                                        <div className="flex flex-col">
                                                            <span className="font-bold text-white group-hover:text-primary transition-colors">{item.name}</span>
                                                            <span className="text-[10px] text-white/20 uppercase tracking-widest">Reserva Privada</span>
                                                        </div>
                                                    </td>
                                                    <td className="p-6 text-sm text-white/40">{item.region}</td>
                                                    <td className="p-6 font-bold text-primary">{item.glass}</td>
                                                    <td className="p-6 font-bold text-primary">{item.bottle}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
