"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";

export const allProducts = [
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
  // ── PIZZAS ─────────────────────────────────────────────
  {
    id: "10",
    name: "Pizza Margarita",
    description: "Salsa de tomate casera, mozzarella fresca y albahaca. La clásica italiana.",
    price: 28.00,
    image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "pizza-margarita",
    category: "pizzas",
    emoji: "🍕",
  },
  {
    id: "11",
    name: "Pizza Hawaiana",
    description: "Jamón, piña y queso mozzarella. El equilibrio perfecto entre dulce y salado.",
    price: 32.00,
    image: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "pizza-hawaiana",
    category: "pizzas",
    emoji: "🍕",
  },
  {
    id: "12",
    name: "Pizza Pepperoni",
    description: "Generoso pepperoni sobre queso derretido y salsa de tomate especial.",
    price: 34.00,
    image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "pizza-pepperoni",
    category: "pizzas",
    emoji: "🍕",
  },
  {
    id: "13",
    name: "Pizza 4 Quesos",
    description: "Mozzarella, parmesano, gouda y queso crema. Una explosión de sabor.",
    price: 36.00,
    image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "pizza-4-quesos",
    category: "pizzas",
    emoji: "🍕",
  },
  // ── KEKES ──────────────────────────────────────────────
  {
    id: "14",
    name: "Keke de Vainilla",
    description: "Esponjoso keke de vainilla con pasas y un toque de naranja fresca.",
    price: 22.00,
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "keke-vainilla",
    category: "kekes",
    emoji: "🎂",
  },
  {
    id: "15",
    name: "Keke de Chocolate",
    description: "Húmedo y denso, con chips de chocolate y cobertura de ganache.",
    price: 25.00,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "keke-chocolate",
    category: "kekes",
    emoji: "🍫",
  },
  {
    id: "16",
    name: "Keke de Limón",
    description: "Refrescante keke de limón con glasé de azúcar y ralladura cítrica.",
    price: 22.00,
    image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "keke-limon",
    category: "kekes",
    emoji: "🍋",
  },
  // ── HAMBURGUESAS ───────────────────────────────────────
  {
    id: "17",
    name: "Clásica Broster Burger",
    description: "Carne 100% res, lechuga, tomate, queso cheddar y salsa de la casa.",
    price: 20.00,
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "clasica-broster-burger",
    category: "hamburguesas",
    emoji: "🍔",
  },
  {
    id: "18",
    name: "Doble Cheddar Burger",
    description: "Doble carne, doble queso cheddar, cebolla caramelizada y pepinillos.",
    price: 28.00,
    image: "https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "doble-cheddar-burger",
    category: "hamburguesas",
    emoji: "🍔",
  },
  {
    id: "19",
    name: "Burger de Pollo Crispy",
    description: "Filete de pollo crujiente, coleslaw casero y mayo de ajo. Irresistible.",
    price: 22.00,
    image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "burger-pollo-crispy",
    category: "hamburguesas",
    emoji: "🍗",
  },
  {
    id: "20",
    name: "Combo Burger + Papas",
    description: "Tu hamburguesa favorita con papas fritas crujientes y bebida incluida.",
    price: 32.00,
    image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "combo-burger-papas",
    category: "hamburguesas",
    emoji: "🍔",
  },
  // ── TORTAS ─────────────────────────────────────────────
  {
    id: "21",
    name: "Torta de Tres Leches",
    description: "Bizcocho empapado en tres leches con crema chantilly y cerezas.",
    price: 65.00,
    image: "https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "torta-tres-leches",
    category: "tortas",
    emoji: "🎂",
  },
  {
    id: "22",
    name: "Torta de Chocolate Premium",
    description: "Capas de bizcocho de cacao con ganache de chocolate negro y fresas.",
    price: 75.00,
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "torta-chocolate-premium",
    category: "tortas",
    emoji: "🍫",
  },
  {
    id: "23",
    name: "Torta de Fresas",
    description: "Esponjosa base de vainilla con crema, fresas frescas y mermelada artesanal.",
    price: 70.00,
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "torta-fresas",
    category: "tortas",
    emoji: "🍓",
  },
  // ── BEBIDAS ────────────────────────────────────────────
  {
    id: "24",
    name: "Limonada Frozen",
    description: "Limón fresco, hielo granizado y un toque de menta. Refrescante total.",
    price: 8.00,
    image: "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "limonada-frozen",
    category: "bebidas",
    emoji: "🥤",
  },
  {
    id: "25",
    name: "Jugo de Maracuyá",
    description: "Maracuyá natural con azúcar de caña. El sabor tropical que te encanta.",
    price: 7.00,
    image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "jugo-maracuya",
    category: "bebidas",
    emoji: "🧃",
  },
  {
    id: "26",
    name: "Café Helado",
    description: "Espresso sobre leche helada con caramelo. Energía con estilo.",
    price: 9.00,
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "cafe-helado",
    category: "bebidas",
    emoji: "☕",
  },
  {
    id: "27",
    name: "Smoothie de Frutas",
    description: "Mix de frutas frescas, yogur natural y miel. Nutritivo y delicioso.",
    price: 10.00,
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "smoothie-frutas",
    category: "bebidas",
    emoji: "🫐",
  },
  // ── PLATOS A LA CARTA ──────────────────────────────────
  {
    id: "28",
    name: "Lomo Saltado",
    description: "Tiras de lomo fino salteadas con verduras, sillao y ají amarillo.",
    price: 28.00,
    image: "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "lomo-saltado",
    category: "a-la-carta",
    emoji: "🍽️",
  },
  {
    id: "29",
    name: "Arroz con Mariscos",
    description: "Arroz cremoso al estilo risotto con mariscos frescos y salsa americana.",
    price: 35.00,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "arroz-con-mariscos",
    category: "a-la-carta",
    emoji: "🦐",
  },
  {
    id: "30",
    name: "Churrasco a la Parrilla",
    description: "Corte de res a la parrilla con papas doradas, ensalada y chimichurri.",
    price: 38.00,
    image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "churrasco-parrilla",
    category: "a-la-carta",
    emoji: "🥩",
  },
  {
    id: "31",
    name: "Filete de Pescado",
    description: "Pescado fresco a la plancha con arroz, ensalada y salsa tártara casera.",
    price: 32.00,
    image: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "filete-pescado",
    category: "a-la-carta",
    emoji: "🐟",
  },
];

const filters = [
  { slug: "all",          label: "Todos",          emoji: "🍽️" },
  { slug: "pollo-broster", label: "Pollo Broster",  emoji: "🍗" },
  { slug: "alitas",       label: "Alitas",          emoji: "🍖" },
  { slug: "bocaditos",    label: "Bocaditos",       emoji: "🥐" },
  { slug: "pastelitos",   label: "Pastelitos",      emoji: "🧁" },
  { slug: "pizzas",       label: "Pizzas",          emoji: "🍕" },
  { slug: "kekes",        label: "Kekes",           emoji: "🎂" },
  { slug: "hamburguesas", label: "Hamburguesas",    emoji: "🍔" },
  { slug: "tortas",       label: "Tortas",          emoji: "🎂" },
  { slug: "bebidas",      label: "Bebidas",         emoji: "🥤" },
  { slug: "a-la-carta",  label: "A la Carta",      emoji: "🍽️" },
];

const FALLBACK =
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";

function ProductCard({ p }: { p: (typeof allProducts)[0] }) {
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

  const catLabel: Record<string, string> = {
    "pollo-broster": "Pollo",
    alitas: "Alitas",
    bocaditos: "Bocaditos",
    pastelitos: "Pastelitos",
    pizzas: "Pizza",
    kekes: "Keke",
    hamburguesas: "Burger",
    tortas: "Torta",
    bebidas: "Bebida",
    "a-la-carta": "Carta",
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
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK;
            }}
          />
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-orange-700 text-xs font-bold px-2 py-1 rounded-full shadow">
            {p.emoji} {catLabel[p.category] ?? p.category}
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

  const filtered =
    active === "all" ? allProducts : allProducts.filter((p) => p.category === active);

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
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
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
          Mostrando{" "}
          <strong className="text-orange-700">{filtered.length}</strong>{" "}
          producto{filtered.length !== 1 ? "s" : ""}
          {active !== "all" && (
            <>
              {" "}
              en{" "}
              <strong className="text-orange-700">
                {filters.find((f) => f.slug === active)?.label}
              </strong>
            </>
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