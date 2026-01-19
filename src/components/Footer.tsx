export default function Footer() {
    return (
        <footer className="mt-0 px-8 py-16 bg-black border-t border-primary/30 text-center relative z-10">
            <div className="mb-10">
                <h4 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-8">Horario Tardeo Golfo</h4>
                <div className="space-y-6">
                    <div>
                        <p className="text-white text-lg font-bold">Jueves a Sábado</p>
                        <p className="text-primary/60 font-sans text-sm">17:00h — 02:00h</p>
                    </div>
                    <div>
                        <p className="text-white text-lg font-bold">Domingos de Vermut</p>
                        <p className="text-primary/60 font-sans text-sm">12:00h — 18:00h</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-8 mb-10 text-primary/80">
                <span className="material-symbols-outlined border border-primary/30 p-3 rounded-full hover:bg-primary hover:text-black transition-colors cursor-pointer">share</span>
                <span className="material-symbols-outlined border border-primary/30 p-3 rounded-full hover:bg-primary hover:text-black transition-colors cursor-pointer">location_on</span>
                <span className="material-symbols-outlined border border-primary/30 p-3 rounded-full hover:bg-primary hover:text-black transition-colors cursor-pointer">mail</span>
            </div>

            <p className="text-[13px] text-white/40 italic leading-relaxed max-w-[300px] mx-auto font-display">
                <p className="text-primary/60 italic text-sm mt-2">&quot;Si la vida fuera un bolero, este sería el estribillo que nunca querrías que terminase.&quot;</p>
            </p>

            <div className="mt-12 text-white/20 text-[10px] uppercase tracking-widest font-sans">
                © 2024 Ambigú Mengano • Madrid
            </div>
        </footer>
    );
}
