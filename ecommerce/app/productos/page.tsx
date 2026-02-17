"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";

const allProducts = [
  // ── POLLO BROSTER ──────────────────────────────────────
  {
    id: "1",
    name: "Pollo Broster Familiar",
    description: "Pollo crujiente con papas fritas y ensalada. Rinde para 4 personas.",
    price: 45.00,
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "pollo-broster-familiar",
    category: "pollo-broster",
    emoji: "🍗",
  },
  {
    id: "2",
    name: "Pollo Broster Personal",
    description: "Porción individual de pollo broster con papas y ensalada.",
    price: 18.00,
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "pollo-broster-personal",
    category: "pollo-broster",
    emoji: "🍗",
  },
  {
    id: "3",
    name: "Salchipollo Especial",
    description: "Salchicha con pollo, papas y salsas especiales de la casa.",
    price: 18.00,
    image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "salchipollo-especial",
    category: "pollo-broster",
    emoji: "🌭",
  },
  // ── ALITAS ─────────────────────────────────────────────
  {
    id: "4",
    name: "Alitas Broster (12 unid.)",
    description: "12 alitas crujientes con salsa BBQ o picante a tu elección.",
    price: 35.00,
    image: "https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "alitas-broster-12",
    category: "alitas",
    emoji: "🍖",
  },
  {
    id: "5",
    name: "Alitas Broster (6 unid.)",
    description: "6 alitas crujientes con salsa a tu preferencia.",
    price: 20.00,
    image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "alitas-broster-6",
    category: "alitas",
    emoji: "🍖",
  },
  // ── BOCADITOS ──────────────────────────────────────────
  {
    id: "6",
    name: "Mix de Bocaditos (50 unid.)",
    description: "Variedad de bocaditos salados perfectos para eventos.",
    price: 55.00,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "mix-bocaditos-50",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "7",
    name: "Tequeños (24 unid.)",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    price: 30.00,
    image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "tequenos-24",
    category: "bocaditos",
    emoji: "🥐",
  },
  // ── PASTELITOS ─────────────────────────────────────────
  {
    id: "8",
    name: "Pastelitos Dulces (12 unid.)",
    description: "Surtido de pastelitos dulces con manjar y frutas.",
    price: 28.00,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "pastelitos-dulces-12",
    category: "pastelitos",
    emoji: "🧁",
  },
  {
    id: "9",
    name: "Pastelitos Salados (12 unid.)",
    description: "Rellenos de pollo, carne y queso. Ideales para compartir.",
    price: 25.00,
    image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "pastelitos-salados-12",
    category: "pastelitos",
    emoji: "🥧",
  },
];

const filters = [
  { slug: "all",          label: "Todos",        emoji: "🍽️" },
  { slug: "pollo-broster", label: "Pollo Broster", emoji: "🍗" },
  { slug: "alitas",       label: "Alitas",        emoji: "🍖" },
  { slug: "bocaditos",    label: "Bocaditos",     emoji: "🥐" },
  { slug: "pastelitos",   label: "Pastelitos",    emoji: "🧁" },
];

const FALLBACK = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";

function ProductCard({ p }: { p: typeof allProducts[0] }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.image, slug: p.slug });
    setAdded(true);
    toast.success(`${p.name} agregado al carrito 🛒`, {
      style: { background: "#059669", color: "#fff" },
    });
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      {/* IMAGEN */}
      <Link href={`/productos/${p.slug}`} className="block">
        <div className="relative h-52 bg-orange-100 overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK; }}
          />
          {/* Badge categoría */}
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-orange-700 text-xs font-bold px-2 py-1 rounded-full shadow">
            {p.emoji} {p.category === "pollo-broster" ? "Pollo" : p.category.charAt(0).toUpperCase() + p.category.slice(1)}
          </span>
        </div>
      </Link>

      {/* CONTENIDO */}
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/productos/${p.slug}`}>
          <h3 className="font-display text-xl text-orange-700 leading-tight mb-1 hover:text-orange-800 transition-colors">
            {p.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {p.description}
        </p>

        {/* PRECIO + BOTÓN */}
        <div className="flex items-center gap-3 mt-auto">
          <div>
            <p className="text-xs text-gray-400 leading-none mb-0.5">Precio</p>
            <p className="font-display text-3xl text-orange-600 leading-none">
              S/ {p.price.toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleAdd}
            className={`flex-1 text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow hover:scale-105 active:scale-95 ${
              added
                ? "bg-green-500 text-white"
                : "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
            }`}
          >
            {added ? "✓ Agregado" : "🛒 Agregar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductosPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? allProducts
    : allProducts.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">

      {/* ── HEADER ── */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl text-white mb-3">
            Nuestros Productos
          </h1>
          <p className="text-orange-100 text-lg">
            Todo hecho con ingredientes frescos y el sabor que nos caracteriza
          </p>
        </div>
      </div>

      {/* ── FILTROS ── */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {filters.map((f) => (
            <button
              key={f.slug}
              onClick={() => setActive(f.slug)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                active === f.slug
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
              }`}
            >
              {f.emoji} {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTADOR ── */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-0">
        <p className="text-gray-500 text-sm">
          Mostrando <strong className="text-orange-700">{filtered.length}</strong> producto{filtered.length !== 1 ? "s" : ""}
          {active !== "all" && (
            <> en <strong className="text-orange-700">{filters.find(f => f.slug === active)?.label}</strong></>
          )}
        </p>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} p={product} />
          ))}
        </div>
      </div>

    </div>
  );
}