import Link from "next/link";

const WHATSAPP_PEDIDOS = "51973474568";

const mensajePredefinido = encodeURIComponent(
  "🛒 Hola! Quiero hacer un pedido:\n\n📝 *Producto:* \n📍 *Dirección:* \n📱 *Nombre:* \n\n¿Podrían confirmarme disponibilidad y tiempo de entrega? 🙏",
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1a0a00] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Warm glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-radial from-orange-600/20 to-transparent rounded-full blur-3xl" />

      {/* Decorative circles */}
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

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight mb-6 animate-fade-up delay-100">
            El sabor que
            <br />
            <em className="not-italic text-gradient bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              te enamora
            </em>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed mb-10 animate-fade-up delay-200">
            Pollo broster, alitas, bocaditos y pastelitos caseros. Preparados
            con amor y entregados directo a tu puerta.
          </p>

          {/* CTAs — columna en móvil, fila en sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
            <Link
              href="/productos"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base"
            >
              Ver el Menú
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/categorias"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold text-white/90 border border-white/30 hover:border-white/60 hover:bg-white/10 px-7 py-3.5 rounded-full transition-all duration-200"
            >
              Ver categorías
            </Link>
          </div>

          {/* Social proof — se reorganiza en móvil */}
          <div className="mt-10 animate-fade-up delay-400">
            {/* Fila: avatares + estrellas */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex -space-x-3">
                {["🧑", "👩", "🧔", "👱"].map((e, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-sm border-2 border-black/30"
                  >
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-3.5 h-3.5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/60 text-xs mt-0.5">
                  +500 clientes felices
                </p>
              </div>
            </div>

            {/* Botón WhatsApp — ancho completo en móvil, auto en sm+ */}
            <a
              href={`https://wa.me/${WHATSAPP_PEDIDOS}?text=${mensajePredefinido}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-green-500 hover:bg-green-400 active:scale-95 px-5 py-3 rounded-2xl shadow-lg shadow-green-900/30 transition-all duration-200 hover:shadow-green-500/40 hover:scale-105"
            >
              <svg
                className="w-5 h-5 text-white flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <p className="text-white font-bold text-sm leading-none">
                  Pedir por Delivery
                </p>
                <p className="text-green-100 text-[10px] mt-0.5 leading-none">
                  Respuesta inmediata
                </p>
              </div>
              <svg
                className="w-4 h-4 text-green-200 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <p className="text-white/40 text-xs tracking-widest uppercase">
          Explorar
        </p>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
