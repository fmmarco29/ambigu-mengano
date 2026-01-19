'use client';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b border-primary/20 bg-background/80 backdrop-blur-md px-6 py-4">
            <div className="flex items-center gap-4">
                <div className="size-10 border-2 border-primary rounded-sm shadow-[0_0_15px_rgba(183,134,11,0.2)] flex items-center justify-center">
                    <span className="text-lg font-black tracking-tighter font-sans text-primary leading-none mb-[-1px]">AM</span>
                </div>
                <h2 className="text-white text-xl font-bold leading-tight tracking-[0.1em] uppercase">Ambigú <span className="text-primary">Mengano</span></h2>
            </div>

            <nav className="hidden md:flex items-center gap-10">
                <a href="#carta" className="text-white/60 hover:text-primary text-xs font-bold uppercase tracking-[0.2em] transition-colors">La Carta</a>
                <a href="#agenda" className="text-white/60 hover:text-primary text-xs font-bold uppercase tracking-[0.2em] transition-colors">Agenda</a>
                <a href="#eventos" className="text-white/60 hover:text-primary text-xs font-bold uppercase tracking-[0.2em] transition-colors">Eventos</a>
                <a href="#vip" className="text-white/60 hover:text-primary text-xs font-bold uppercase tracking-[0.2em] transition-colors">Club</a>
                <a href="#regalos" className="text-white/60 hover:text-primary text-xs font-bold uppercase tracking-[0.2em] transition-colors">Regalos</a>
                <a href="#reservas" className="text-black bg-primary px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(184,134,11,0.3)] transition-all">Reserva</a>
            </nav>

            <button className="flex size-10 items-center justify-center rounded-lg bg-primary/5 text-primary active:scale-90 transition-transform md:hidden">
                <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
        </header>
    );
}
