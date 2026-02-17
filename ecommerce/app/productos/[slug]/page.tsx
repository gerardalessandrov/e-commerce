"use client";

import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";
import Link from "next/link";
import { useState, use } from "react";

const allProducts = [
  { id: "1", name: "Pollo Broster Familiar", description: "Pollo broster crujiente con papas fritas y ensalada. Rinde para 4 personas.", longDescription: "Nuestro Pollo Broster Familiar es la elección perfecta para compartir en familia. Preparado con nuestra receta secreta de especias, el pollo queda dorado y crujiente por fuera, jugoso y tierno por dentro. Viene acompañado de papas fritas crocantes y una fresca ensalada de la casa.", price: 45.00, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80", slug: "pollo-broster-familiar", category: "Pollo Broster", emoji: "🍗", ingredients: ["Pollo entero", "Papas fritas", "Ensalada fresca", "Salsas especiales"], serves: "4 personas" },
  { id: "2", name: "Pollo Broster Personal", description: "Porción individual de pollo broster con papas y ensalada.", longDescription: "Porción perfecta para una persona. Todo el sabor de nuestro pollo broster en la medida justa para ti.", price: 18.00, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=600&q=80", slug: "pollo-broster-personal", category: "Pollo Broster", emoji: "🍗", ingredients: ["Pollo (1/4)", "Papas fritas", "Ensalada", "Salsa"], serves: "1 persona" },
  { id: "3", name: "Salchipollo Especial", description: "Salchicha con pollo, papas y salsas especiales de la casa.", longDescription: "Una combinación única de salchicha premium con nuestro pollo broster, acompañado de papas fritas y un toque especial de nuestras salsas de la casa.", price: 18.00, image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80", slug: "salchipollo-especial", category: "Pollo Broster", emoji: "🌭", ingredients: ["Salchicha premium", "Pollo broster", "Papas fritas", "Salsas especiales"], serves: "1 persona" },
  { id: "4", name: "Alitas Broster (12 unid.)", description: "Alitas crujientes con salsa BBQ o picante a tu elección.", longDescription: "12 alitas de pollo marinadas con nuestros condimentos secretos, fritas hasta lograr el crujiente perfecto. Puedes elegir entre salsa BBQ dulce o salsa picante para acompañar.", price: 35.00, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80", slug: "alitas-broster-12", category: "Alitas", emoji: "🍖", ingredients: ["12 alitas de pollo", "Aderezo especial", "Salsa BBQ o picante"], serves: "2-3 personas" },
  { id: "5", name: "Alitas Broster (6 unid.)", description: "Porción de 6 alitas crujientes con salsa de tu preferencia.", longDescription: "Porción personal de 6 alitas perfectamente crujientes. Elige tu salsa favorita: BBQ o picante.", price: 20.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80", slug: "alitas-broster-6", category: "Alitas", emoji: "🍖", ingredients: ["6 alitas de pollo", "Aderezo especial", "Salsa a elegir"], serves: "1 persona" },
  { id: "6", name: "Mix de Bocaditos (50 unid.)", description: "Variedad de bocaditos salados perfectos para tus eventos.", longDescription: "El pack ideal para eventos y reuniones. Incluye una variedad de bocaditos salados: tequeños, empanadas, mini sandwiches y más.", price: 55.00, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80", slug: "mix-bocaditos-50", category: "Bocaditos", emoji: "🥐", ingredients: ["Tequeños", "Mini empanadas", "Sandwiches", "Bocaditos variados"], serves: "10-15 personas" },
  { id: "7", name: "Tequeños (24 unid.)", description: "Tequeños rellenos de queso, dorados y crujientes.", longDescription: "24 tequeños artesanales rellenos de queso derretido, con una masa perfectamente dorada y crujiente.", price: 30.00, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80", slug: "tequenos-24", category: "Bocaditos", emoji: "🥐", ingredients: ["Masa artesanal", "Queso especial", "Condimentos"], serves: "6-8 personas" },
  { id: "8", name: "Pastelitos Dulces (12 unid.)", description: "Surtido de pastelitos dulces, rellenos de manjar y frutas.", longDescription: "12 pastelitos dulces artesanales con diferentes rellenos: manjar blanco, frutas de temporada y crema.", price: 28.00, image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80", slug: "pastelitos-dulces-12", category: "Pastelitos", emoji: "🧁", ingredients: ["Masa artesanal", "Manjar blanco", "Frutas", "Crema"], serves: "4-6 personas" },
  { id: "9", name: "Pastelitos Salados (12 unid.)", description: "Pastelitos salados rellenos de pollo, carne y queso.", longDescription: "12 pastelitos salados con rellenos variados: pollo desmenuzado, carne sazonada y queso derretido.", price: 25.00, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80", slug: "pastelitos-salados-12", category: "Pastelitos", emoji: "🥧", ingredients: ["Masa artesanal", "Pollo", "Carne", "Queso"], serves: "4-6 personas" },
];

// ✅ Next.js 15 client component: usa React.use() para leer params
export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = allProducts.find((p) => p.slug === slug);
  const addItem = useCartStore((state) => state.addItem);
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 gap-4">
        <p className="text-6xl">😕</p>
        <h1 className="font-display text-4xl text-orange-700">Producto no encontrado</h1>
        <Link href="/productos" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
          Ver todos los productos
        </Link>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setAdding(true);
    await new Promise((r) => setTimeout(r, 300));
    for (let i = 0; i < qty; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image, slug: product.slug });
    }
    toast.success(`${product.name} agregado al carrito`, { icon: "🛒", style: { background: "#059669", color: "#fff" } });
    setAdding(false);
  };

  const related = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-2">
        <nav className="text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-orange-600">Inicio</Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-orange-600">Productos</Link>
          <span>/</span>
          <span className="text-orange-700 font-medium">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Imagen */}
          <div className="relative h-72 md:h-full min-h-[320px] overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow">
              {product.category}
            </div>
          </div>

          {/* Info */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl text-orange-700 mb-3">{product.name}</h1>
            <p className="text-gray-600 text-base mb-6 leading-relaxed">{product.longDescription}</p>

            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Incluye</p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span key={ing} className="bg-orange-50 text-orange-700 border border-orange-200 text-xs px-3 py-1 rounded-full">{ing}</span>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-6">🍽️ Rinde para: <strong>{product.serves}</strong></p>

            <div className="flex items-center gap-6 mb-6">
              <span className="font-display text-4xl text-orange-700">S/ {(product.price * qty).toFixed(2)}</span>
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-7 h-7 rounded-full bg-white shadow text-orange-700 font-bold hover:bg-orange-100 transition">−</button>
                <span className="w-6 text-center font-semibold">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="w-7 h-7 rounded-full bg-white shadow text-orange-700 font-bold hover:bg-orange-100 transition">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} disabled={adding} className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 disabled:opacity-75">
              {adding ? "Agregando..." : "🛒 Agregar al Carrito"}
            </button>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-3xl text-orange-700 mb-6">También te puede gustar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/productos/${p.slug}`} className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex items-center gap-4">
                  <span className="text-4xl">{p.emoji}</span>
                  <div>
                    <h3 className="font-display text-xl text-orange-700">{p.name}</h3>
                    <p className="text-sm text-gray-500">S/ {p.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}