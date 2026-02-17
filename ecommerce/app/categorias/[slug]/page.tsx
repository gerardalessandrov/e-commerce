import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const allProducts = [
  { id: "1", name: "Pollo Broster Familiar", description: "Pollo broster crujiente con papas fritas y ensalada. Rinde para 4 personas.", price: 45.00, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80", slug: "pollo-broster-familiar", category: "pollo-broster" },
  { id: "2", name: "Pollo Broster Personal", description: "Porción individual de pollo broster con papas y ensalada.", price: 18.00, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=600&q=80", slug: "pollo-broster-personal", category: "pollo-broster" },
  { id: "3", name: "Salchipollo Especial", description: "Salchicha con pollo, papas y salsas especiales de la casa.", price: 18.00, image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80", slug: "salchipollo-especial", category: "pollo-broster" },
  { id: "4", name: "Alitas Broster (12 unid.)", description: "Alitas crujientes con salsa BBQ o picante a tu elección.", price: 35.00, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80", slug: "alitas-broster-12", category: "alitas" },
  { id: "5", name: "Alitas Broster (6 unid.)", description: "Porción de 6 alitas crujientes con salsa de tu preferencia.", price: 20.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80", slug: "alitas-broster-6", category: "alitas" },
  { id: "6", name: "Mix de Bocaditos (50 unid.)", description: "Variedad de bocaditos salados perfectos para tus eventos.", price: 55.00, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80", slug: "mix-bocaditos-50", category: "bocaditos" },
  { id: "7", name: "Tequeños (24 unid.)", description: "Tequeños rellenos de queso, dorados y crujientes.", price: 30.00, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80", slug: "tequenos-24", category: "bocaditos" },
  { id: "8", name: "Pastelitos Dulces (12 unid.)", description: "Surtido de pastelitos dulces, rellenos de manjar y frutas.", price: 28.00, image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80", slug: "pastelitos-dulces-12", category: "pastelitos" },
  { id: "9", name: "Pastelitos Salados (12 unid.)", description: "Pastelitos salados rellenos de pollo, carne y queso.", price: 25.00, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80", slug: "pastelitos-salados-12", category: "pastelitos" },
];

const categoryMeta: Record<string, { name: string; icon: string; description: string; color: string }> = {
  "pollo-broster": { name: "Pollo Broster", icon: "🍗", description: "Crujiente por fuera, jugoso por dentro. Preparado con receta secreta.", color: "from-orange-600 to-red-600" },
  "alitas": { name: "Alitas", icon: "🍖", description: "Alitas perfectamente fritas con salsas BBQ o picante.", color: "from-red-600 to-orange-500" },
  "bocaditos": { name: "Bocaditos", icon: "🥐", description: "Los mejores bocaditos para tus eventos y reuniones.", color: "from-yellow-500 to-orange-500" },
  "pastelitos": { name: "Pastelitos", icon: "🧁", description: "Dulces y salados, todos artesanales con amor.", color: "from-amber-500 to-yellow-400" },
};

export default function CategoriaDetailPage({ params }: { params: { slug: string } }) {
  const meta = categoryMeta[params.slug];
  const products = allProducts.filter((p) => p.category === params.slug);

  if (!meta) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 gap-4">
        <p className="text-6xl">😕</p>
        <h1 className="font-display text-4xl text-orange-700">Categoría no encontrada</h1>
        <Link href="/categorias" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
          Ver todas las categorías
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className={`bg-gradient-to-r ${meta.color} py-16 px-4`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-7xl mb-4">{meta.icon}</div>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-3">{meta.name}</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">{meta.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <nav className="text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-orange-600">Inicio</Link>
          <span>/</span>
          <Link href="/categorias" className="hover:text-orange-600">Categorías</Link>
          <span>/</span>
          <span className="text-orange-700 font-semibold">{meta.name}</span>
          <span className="ml-auto text-gray-400 text-xs">{products.length} productos</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 100} />
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/categorias" className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300">
            ← Ver otras categorías
          </Link>
        </div>
      </div>
    </div>
  );
}
