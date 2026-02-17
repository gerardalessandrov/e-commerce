export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">Nuestra Historia</h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">Una familia, una pasión, un sabor que enamora</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-display text-4xl text-orange-700 mb-6">¿Quiénes somos?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">Bocaditos & Más nació de una pasión familiar por la buena comida y el deseo de compartir sabores auténticos con nuestra comunidad. Desde el primer día, nos hemos comprometido a usar solo ingredientes frescos y de la mejor calidad.</p>
            <p className="text-gray-700 text-lg leading-relaxed">Nuestras recetas son el resultado de años de tradición familiar, combinadas con el toque especial que nos hace únicos en la ciudad.</p>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl h-72 flex items-center justify-center shadow-xl">
            <span className="text-9xl">🍗</span>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-display text-4xl text-orange-700 text-center mb-10">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: "❤️", title: "Pasión",    desc: "Cocinamos con amor en cada preparación." },
              { icon: "✅", title: "Calidad",   desc: "Solo ingredientes frescos y de primera." },
              { icon: "🤝", title: "Confianza", desc: "Relaciones honestas con nuestros clientes." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-display text-2xl text-orange-700 mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "5+",   label: "Años de experiencia"  },
              { number: "500+", label: "Clientes satisfechos" },
              { number: "30+",  label: "Productos en carta"   },
              { number: "100%", label: "Ingredientes frescos" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl mb-2">{s.number}</div>
                <div className="text-orange-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}