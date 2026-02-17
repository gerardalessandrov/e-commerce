"use client";

import Link from "next/link";
import { use } from "react";
import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";

// ── PRODUCTOS CON IMÁGENES DE FOOD (pexels - sin bloqueo) ──────────────────
const allProducts = [
  // POLLO BROSTER
  {
    id: "1",
    name: "Pollo Broster Familiar",
    description: "Pollo crujiente con papas fritas y ensalada. Rinde para 4 personas.",
    price: 45.00,
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?w=600&h=400&fit=crop",
    slug: "pollo-broster-familiar",
    category: "pollo-broster",
  },
  {
    id: "2",
    name: "Pollo Broster Personal",
    description: "Porción individual con papas fritas y ensalada.",
    price: 18.00,
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?w=600&h=400&fit=crop",
    slug: "pollo-broster-personal",
    category: "pollo-broster",
  },
  {
    id: "3",
    name: "Salchipollo Especial",
    description: "Salchicha con pollo, papas y salsas especiales.",
    price: 18.00,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600&h=400&fit=crop",
    slug: "salchipollo-especial",
    category: "pollo-broster",
  },
  // ALITAS
  {
    id: "4",
    name: "Alitas Broster (12 unid.)",
    description: "12 alitas crujientes con salsa BBQ o picante.",
    price: 35.00,
    image: "https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?w=600&h=400&fit=crop",
    slug: "alitas-broster-12",
    category: "alitas",
  },
  {
    id: "5",
    name: "Alitas Broster (6 unid.)",
    description: "6 alitas crujientes con salsa a tu elección.",
    price: 20.00,
    image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?w=600&h=400&fit=crop",
    slug: "alitas-broster-6",
    category: "alitas",
  },
  // BOCADITOS
  {
    id: "6",
    name: "Mix de Bocaditos (50 unid.)",
    description: "Surtido de bocaditos salados para eventos.",
    price: 55.00,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?w=600&h=400&fit=crop",
    slug: "mix-bocaditos-50",
    category: "bocaditos",
  },
  {
    id: "7",
    name: "Tequeños (24 unid.)",
    description: "Tequeños de queso dorados y crujientes.",
    price: 30.00,
    image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?w=600&h=400&fit=crop",
    slug: "tequenos-24",
    category: "bocaditos",
  },
  // PASTELITOS
  {
    id: "8",
    name: "Pastelitos Dulces (12 unid.)",
    description: "Surtido dulce de manjar, frutas y crema.",
    price: 28.00,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?w=600&h=400&fit=crop",
    slug: "pastelitos-dulces-12",
    category: "pastelitos",
  },
  {
    id: "9",
    name: "Pastelitos Salados (12 unid.)",
    description: "Rellenos de pollo, carne y queso.",
    price: 25.00,
    image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?w=600&h=400&fit=crop",
    slug: "pastelitos-salados-12",
    category: "pastelitos",
  },
];

const categoryMeta: Record<string, { name: string; icon: string; description: string; color: string }> = {
  "pollo-broster": { name: "Pollo Broster", icon: "🍗", description: "Crujiente por fuera, jugoso por dentro.", color: "from-orange-600 to-red-600" },
  "alitas":        { name: "Alitas",        icon: "🍖", description: "Alitas perfectas con salsas BBQ o picante.", color: "from-red-600 to-orange-500" },
  "bocaditos":     { name: "Bocaditos",     icon: "🥐", description: "Los mejores bocaditos para tus eventos.", color: "from-yellow-500 to-orange-500" },
  "pastelitos":    { name: "Pastelitos",    icon: "🧁", description: "Dulces y salados, todos artesanales.", color: "from-amber-500 to-yellow-400" },
};

function ProductCard({ product }: { product: typeof allProducts[0] }) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, slug: product.slug });
    toast.success(`${product.name} agregado 🛒`, { style: { background: "#059669", color: "#fff" } });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* IMAGEN */}
      <div className="relative h-52 overflow-hidden bg-orange-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600&h=400&fit=crop";
          }}
        />
      </div>

      {/* INFO */}
      <div className="p-5">
        <h3 className="font-display text-xl text-orange-700 mb-1 leading-tight">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>

        {/* PRECIO + BOTÓN */}
        <div className="flex items-center justify-between gap-3">
          <span className="font-display text-3xl text-orange-600 font-bold">
            S/ {product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow"
          >
            🛒 Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CategoriaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const meta = categoryMeta[slug];
  const products = allProducts.filter((p) => p.category === slug);

  if (!meta) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 gap-4">
        <p className="text-6xl">😕</p>
        <h1 className="font-display text-4xl text-orange-700">Categoría no encontrada</h1>
        <Link href="/categorias" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold">
          Ver todas las categorías
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">

      {/* HERO */}
      <div className={`bg-gradient-to-r ${meta.color} py-14 px-4`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-7xl mb-3">{meta.icon}</div>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-2">{meta.name}</h1>
          <p className="text-white/80 text-lg">{meta.description}</p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 pt-5 pb-1">
        <nav className="text-sm text-gray-500 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-orange-600 transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/categorias" className="hover:text-orange-600 transition-colors">Categorías</Link>
          <span>/</span>
          <span className="text-orange-700 font-semibold">{meta.name}</span>
          <span className="ml-auto text-gray-400 text-xs font-medium bg-white px-2 py-0.5 rounded-full shadow-sm">
            {products.length} productos
          </span>
        </nav>
      </div>

      {/* CATÁLOGO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {products.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-6xl mb-4">🍽️</p>
            <p className="text-xl">Próximamente más productos aquí.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/categorias" className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300">
            ← Ver otras categorías
          </Link>
        </div>
      </div>
    </div>
  );
}