"use client";
import Link from "next/link";
const categories = [
  {
    id: "1",
    name: "Pollo Broster",
    slug: "pollo-broster",
    icon: "🍗",
    description:
      "Crujiente por fuera, jugoso por dentro. Nuestro pollo broster es la estrella de la casa.",
    productCount: 3,
    color: "from-orange-500 to-red-500",
    bg: "from-orange-50 to-red-50",
  },
  {
    id: "2",
    name: "Alitas",
    slug: "alitas",
    icon: "🍖",
    description:
      "Alitas crujientes con salsas BBQ o picante. Irresistibles en cualquier reunión.",
    productCount: 2,
    color: "from-red-500 to-orange-600",
    bg: "from-red-50 to-orange-50",
  },
  {
    id: "3",
    name: "Bocaditos",
    slug: "bocaditos",
    icon: "🥐",
    description:
      "Perfectos para eventos y reuniones. Tequeños, empanadas y mucho más.",
    productCount: 2,
    color: "from-yellow-500 to-orange-500",
    bg: "from-yellow-50 to-orange-50",
  },
  {
    id: "4",
    name: "Pastelitos",
    slug: "pastelitos",
    icon: "🧁",
    description:
      "Dulces y salados, todos artesanales. El toque perfecto para tu mesa.",
    productCount: 2,
    color: "from-amber-500 to-yellow-500",
    bg: "from-amber-50 to-yellow-50",
  },
  {
    id: "5",
    name: "Pizzas",
    slug: "pizzas",
    icon: "🍕",
    description:
      "Masa artesanal, salsa casera y los mejores ingredientes. Pizzas que enamoran.",
    productCount: 4,
    color: "from-red-600 to-rose-500",
    bg: "from-red-50 to-rose-50",
  },
  {
    id: "6",
    name: "Kekes",
    slug: "kekes",
    icon: "🎂",
    description:
      "Recetas tradicionales con un toque moderno. Húmedos, esponjosos y deliciosos.",
    productCount: 3,
    color: "from-violet-500 to-purple-500",
    bg: "from-violet-50 to-purple-50",
  },
  {
    id: "7",
    name: "Hamburguesas",
    slug: "hamburguesas",
    icon: "🍔",
    description:
      "Pan brioche, carne jugosa y salsas especiales. La hamburguesa que siempre quisiste.",
    productCount: 4,
    color: "from-yellow-600 to-orange-500",
    bg: "from-yellow-50 to-amber-50",
  },
  {
    id: "8",
    name: "Tortas",
    slug: "tortas",
    icon: "🎂",
    description:
      "Elaboradas con amor para celebrar tus momentos más especiales e inolvidables.",
    productCount: 3,
    color: "from-teal-500 to-emerald-500",
    bg: "from-teal-50 to-emerald-50",
  },
  {
    id: "9",
    name: "Bebidas",
    slug: "bebidas",
    icon: "🥤",
    description:
      "Refrescantes, naturales y perfectas para acompañar cualquier plato del menú.",
    productCount: 4,
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-50 to-cyan-50",
  },
  {
    id: "10",
    name: "Platos a la Carta",
    slug: "a-la-carta",
    icon: "🍽️",
    description:
      "Platos completos, generosos y llenos de sabor. La experiencia gastronómica completa.",
    productCount: 4,
    color: "from-green-600 to-lime-500",
    bg: "from-green-50 to-lime-50",
  },
  {
    id: "11",
    name: "Cheesecakes",
    slug: "cheesecakes",
    icon: "🍰",
    description: "Deliciosos cheesecakes en torta y en vasito.  ",
    productCount: 4,
    color: "from-green-600 to-lime-500",
    bg: "from-green-50 to-lime-50",
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
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.slug}`}
              className={`bg-gradient-to-br ${cat.bg} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group`}
            >
              <div className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl">{cat.icon}</span>
                </div>
                <h2 className="font-display text-3xl text-orange-700 mb-2 group-hover:text-orange-800">
                  {cat.name}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">
                    {cat.productCount} productos
                  </span>
                  <span className="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700 text-sm">
                    Ver productos
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
