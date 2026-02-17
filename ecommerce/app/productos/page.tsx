import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const allProducts = [
  {
    id: "1",
    name: "Pollo Broster Familiar",
    description: "Pollo broster crujiente con papas fritas y ensalada. Rinde para 4 personas.",
    price: 45.00,
    image: "/images/pollo-broster.jpg",
    slug: "pollo-broster-familiar",
    category: "pollo-broster",
  },
  {
    id: "2",
    name: "Pollo Broster Personal",
    description: "Porción individual de pollo broster con papas y ensalada.",
    price: 18.00,
    image: "/images/pollo-personal.jpg",
    slug: "pollo-broster-personal",
    category: "pollo-broster",
  },
  {
    id: "3",
    name: "Salchipollo Especial",
    description: "Salchicha con pollo, papas y salsas especiales de la casa.",
    price: 18.00,
    image: "/images/salchipollo.jpg",
    slug: "salchipollo-especial",
    category: "pollo-broster",
  },
  {
    id: "4",
    name: "Alitas Broster (12 unid.)",
    description: "Alitas crujientes con salsa BBQ o picante a tu elección.",
    price: 35.00,
    image: "/images/alitas.jpg",
    slug: "alitas-broster-12",
    category: "alitas",
  },
  {
    id: "5",
    name: "Alitas Broster (6 unid.)",
    description: "Porción de 6 alitas crujientes con salsa de tu preferencia.",
    price: 20.00,
    image: "/images/alitas-6.jpg",
    slug: "alitas-broster-6",
    category: "alitas",
  },
  {
    id: "6",
    name: "Mix de Bocaditos (50 unid.)",
    description: "Variedad de bocaditos salados perfectos para tus eventos.",
    price: 55.00,
    image: "/images/bocaditos.jpg",
    slug: "mix-bocaditos-50",
    category: "bocaditos",
  },
  {
    id: "7",
    name: "Tequeños (24 unid.)",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    price: 30.00,
    image: "/images/tequenos.jpg",
    slug: "tequenos-24",
    category: "bocaditos",
  },
  {
    id: "8",
    name: "Pastelitos Dulces (12 unid.)",
    description: "Surtido de pastelitos dulces, rellenos de manjar y frutas.",
    price: 28.00,
    image: "/images/pastelitos.jpg",
    slug: "pastelitos-dulces-12",
    category: "pastelitos",
  },
  {
    id: "9",
    name: "Pastelitos Salados (12 unid.)",
    description: "Pastelitos salados rellenos de pollo, carne y queso.",
    price: 25.00,
    image: "/images/pastelitos-salados.jpg",
    slug: "pastelitos-salados-12",
    category: "pastelitos",
  },
];

const categoryFilters = [
  { slug: "all", name: "Todos" },
  { slug: "pollo-broster", name: "🍗 Pollo Broster" },
  { slug: "alitas", name: "🍖 Alitas" },
  { slug: "bocaditos", name: "🥐 Bocaditos" },
  { slug: "pastelitos", name: "🧁 Pastelitos" },
];

export default function ProductosPage({
  searchParams,
}: {
  searchParams: { categoria?: string };
}) {
  const activeCategory = searchParams?.categoria || "all";
  const filtered =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            Nuestros Productos
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            Todo hecho con ingredientes frescos y el sabor que nos caracteriza
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categoryFilters.map((cat) => (
            <Link
              key={cat.slug}
              href={`/productos?categoria=${cat.slug}`}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeCategory === cat.slug
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Grid de productos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-6xl mb-4">🍽️</p>
            <p className="text-xl font-semibold">No hay productos en esta categoría aún.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 80} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}