import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1a0a00] flex items-center">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Rich layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Warm glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-radial from-orange-600/20 to-transparent rounded-full blur-3xl" />

      {/* Decorative geometric accent */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/10 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 border border-orange-500/20 rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-24 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="badge-warm mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Delivery disponible ahora
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight mb-6 animate-fade-up delay-100">
            El sabor que<br />
            <em className="not-italic text-gradient bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              te enamora
            </em>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed mb-10 animate-fade-up delay-200">
            Pollo broster, alitas, bocaditos y pastelitos artesanales. 
            Preparados con amor y entregados directo a tu puerta.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link
              href="/productos"
              className="btn-primary inline-flex items-center gap-2 text-base"
            >
              Ver el Menú
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/categorias"
              className="inline-flex items-center gap-2 text-base font-semibold text-white/90 border border-white/30 hover:border-white/60 hover:bg-white/10 px-7 py-3.5 rounded-full transition-all duration-200"
            >
              Ver categorías
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 mt-14 animate-fade-up delay-400">
            <div className="flex -space-x-3">
              {["🧑", "👩", "🧔", "👱"].map((e, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-sm border-2 border-black/30">
                  {e}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-xs mt-0.5">+500 clientes felices</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <p className="text-white font-bold text-lg leading-none">🚚 Delivery</p>
              <p className="text-white/60 text-xs mt-0.5">Por WhatsApp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <p className="text-white/40 text-xs tracking-widest uppercase">Explorar</p>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}