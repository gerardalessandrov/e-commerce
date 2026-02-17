import Link from "next/link";

const categories = [
  {
    id: "1",
    name: "Pollo Broster",
    slug: "pollo-broster",
    icon: "🍗",
    description: "Crujiente por fuera, jugoso por dentro. Nuestro pollo broster es la estrella de la casa.",
    productCount: 3,
    color: "from-orange-500 to-red-500",
    bg: "from-orange-50 to-red-50",
  },
  {
    id: "2",
    name: "Bocaditos",
    slug: "bocaditos",
    icon: "🥐",
    description: "Perfectos para eventos y reuniones. Tequeños, empanadas y mucho más.",
    productCount: 2,
    color: "from-yellow-500 to-orange-500",
    bg: "from-yellow-50 to-orange-50",
  },
  {
    id: "3",
    name: "Alitas",
    slug: "alitas",
    icon: "🍖",
    description: "Alitas crujientes con salsas BBQ o picante. Irresistibles.",
    productCount: 2,
    color: "from-red-500 to-orange-600",
    bg: "from-red-50 to-orange-50",
  },
  {
    id: "4",
    name: "Pastelitos",
    slug: "pastelitos",
    icon: "🧁",
    description: "Dulces y salados, todos artesanales. El toque perfecto para tu mesa.",
    productCount: 2,
    color: "from-amber-500 to-yellow-500",
    bg: "from-amber-50 to-yellow-50",
  },
];

export default function CategoriasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            Categorías
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            Encuentra exactamente lo que buscas entre nuestras especialidades
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.slug}`}
              className={`bg-gradient-to-br ${cat.bg} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group`}
            >
              <div className="p-8">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-4xl">{cat.icon}</span>
                </div>
                <h2 className="font-display text-4xl text-orange-700 mb-3 group-hover:text-orange-800">
                  {cat.name}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">
                    {cat.productCount} productos
                  </span>
                  <span className="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                    Ver productos
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}