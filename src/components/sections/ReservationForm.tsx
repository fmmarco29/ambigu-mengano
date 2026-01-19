'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ReservationForm() {
    const [form, setForm] = useState({
        name: '',
        date: '',
        time: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (name === 'time') setError('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const [hours, minutes] = form.time.split(':').map(Number);
        const totalMinutes = hours * 60 + minutes;
        const start = 17 * 60; // 17:00
        const end = 22 * 60 + 30; // 22:30

        if (totalMinutes < start || totalMinutes > end) {
            setError('Lo sentimos, las reservas solo están disponibles entre las 17:00 y las 22:30.');
            return;
        }

        const message = `Hola Mengano, quiero reservar una mesa para el tardeo del día ${form.date} a las ${form.time}. Soy ${form.name}.`;
        const whatsappUrl = `https://wa.me/34600000000?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="reservas">
            <div className="absolute inset-0 bg-primary/5"></div>

            <div className="max-w-2xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-white uppercase mb-2">Reserva tu Rincón</h2>
                    <p className="text-primary/80 text-sm font-sans tracking-widest uppercase">No te quedes sin sitio en la barra</p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="bg-surface/30 vintage-border paper-texture p-10 rounded-2xl backdrop-blur-md shadow-2xl space-y-6 relative"
                >
                    <span className="material-symbols-outlined absolute top-4 left-4 text-primary opacity-10 text-2xl">filter_vintage</span>
                    <span className="material-symbols-outlined absolute top-4 right-4 text-primary opacity-10 text-2xl">filter_vintage</span>
                    <div className="space-y-1">
                        <label className="text-xs text-primary font-bold uppercase tracking-widest">Nombre del Titular</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Ej. Lola Flowers"
                            className="w-full bg-black/40 border border-primary/30 rounded-lg p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors font-sans"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs text-primary font-bold uppercase tracking-widest">Fecha</label>
                            <input
                                type="date"
                                name="date"
                                required
                                value={form.date}
                                onChange={handleChange}
                                className="w-full bg-black/40 border border-primary/30 rounded-lg p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors font-sans [&::-webkit-calendar-picker-indicator]:invert"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs text-primary font-bold uppercase tracking-widest">Hora</label>
                            <input
                                type="time"
                                name="time"
                                required
                                value={form.time}
                                onChange={handleChange}
                                className="w-full bg-black/40 border border-primary/30 rounded-lg p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors font-sans [&::-webkit-calendar-picker-indicator]:invert"
                            />
                            <p className="text-[10px] text-white/40 mt-1 pl-1">Horario: 17:00 - 22:30</p>
                        </div>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-red-900/20 border border-red-500/30 text-red-200 p-3 rounded-lg text-sm text-center"
                        >
                            {error}
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-old-gold text-black font-black uppercase tracking-widest py-4 rounded-xl shadow-lg hover:shadow-primary/20 transition-all transform active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                    >
                        <span className="material-symbols-outlined">send</span>
                        Confirmar por WhatsApp
                    </button>
                </motion.form>
            </div>
        </section>
    )
}
