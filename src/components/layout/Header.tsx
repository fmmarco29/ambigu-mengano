'use client';

export default function Header() {
    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between border border-primary/20 bg-glass backdrop-blur-xl px-10 py-3 rounded-full w-[95%] max-w-7xl transition-all duration-500 hover:border-primary/40">
            <div className="flex items-center">
                <div className="size-10 border border-primary/40 rounded-full flex items-center justify-center bg-black/50 overflow-hidden group hover:border-primary transition-all">
                    <span className="text-xl font-black tracking-tighter font-sans leading-none flex items-center justify-center">
                        <span className="text-white group-hover:scale-110 transition-transform">A</span>
                        <span className="text-primary group-hover:scale-110 transition-transform">M</span>
                    </span>
                </div>
            </div>

            <nav className="hidden md:flex items-center gap-12">
                <a href="#carta" className="text-white/40 hover:text-primary text-[10px] font-bold uppercase tracking-[0.4em] transition-all">Carta</a>
                <a href="#agenda" className="text-white/40 hover:text-primary text-[10px] font-bold uppercase tracking-[0.4em] transition-all">Agenda</a>
                <a href="#vip" className="text-white/40 hover:text-primary text-[10px] font-bold uppercase tracking-[0.4em] transition-all">Club</a>
                <a href="#reservas" className="text-black bg-primary px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-lg shadow-primary/20">Reserva</a>
            </nav>

            <button className="flex size-10 items-center justify-center rounded-lg bg-primary/5 text-primary active:scale-90 transition-transform md:hidden">
                <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
        </header>
    );
}
