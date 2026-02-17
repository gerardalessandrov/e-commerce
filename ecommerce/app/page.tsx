import Hero from "@/components/Hero";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
// Productos destacados para mostrar en el home
const featuredProducts = [
  {
    id: "1",
    name: "Pollo Broster Familiar",
    description: "Pollo broster crujiente con papas fritas y ensalada",
    price: 45.00,
    image: "/images/pollo-broster.jpg",
    slug: "pollo-broster-familiar",
  },
  {
    id: "4",
    name: "Alitas Broster (12 unid.)",
    description: "Alitas crujientes con salsa BBQ o picante",
    price: 35.00,
    image: "/images/alitas.jpg",
    slug: "alitas-broster-12",
  },
  {
    id: "6",
    name: "Mix de Bocaditos (50 unid.)",
    description: "Variedad de bocaditos salados para tus eventos",
    price: 55.00,
    image: "/images/bocaditos.jpg",
    slug: "mix-bocaditos-50",
  },
  {
    id: "3",
    name: "Salchipollo Especial",
    description: "Salchicha con pollo, papas y salsas",
    price: 18.00,
    image: "/images/salchipollo.jpg",
    slug: "salchipollo-especial",
  },
];

const categories = [
  {
    id: "1",
    name: "Pollo Broster",
    slug: "pollo-broster",
    icon: "🍗",
    description: "Crujiente y jugoso"
  },
  {
    id: "2",
    name: "Bocaditos",
    slug: "bocaditos",
    icon: "🥐",
    description: "Para tus eventos"
  },
  {
    id: "3",
    name: "Alitas",
    slug: "alitas",
    icon: "🍖",
    description: "Con diferentes salsas"
  },
  {
    id: "4",
    name: "Pastelitos",
    slug: "pastelitos",
    icon: "🧁",
    description: "Dulces y salados"
  },
];

export default function Home() {
  return (
    <>
      {/* Tu Hero actual */}
      <Hero />

      {/* Sección de Categorías */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-orange-700 mb-4">
              Nuestras Categorías
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explora nuestra variedad de productos frescos y deliciosos
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={category.id}
                href={`/categorias/${category.slug}`}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 p-8 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-display text-3xl text-orange-700 mb-2 group-hover:text-orange-800">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                  Ver productos
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-orange-700 mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los favoritos de nuestros clientes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/productos" 
              className="inline-block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-3xl text-orange-700 mb-3">Entrega Rápida</h3>
              <p className="text-gray-600">Recibe tu pedido en 30-45 minutos</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-3xl text-orange-700 mb-3">Calidad Garantizada</h3>
              <p className="text-gray-600">Ingredientes frescos y de primera</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-3xl text-orange-700 mb-3">Hechos con Amor</h3>
              <p className="text-gray-600">Recetas caseras y auténticas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-20 relative overflow-hidden">
        {/* Textura de fondo */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            ¿Listo para Ordenar?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Haz tu pedido ahora y disfruta de nuestros deliciosos productos en la comodidad de tu hogar
          </p>
          <Link 
            href="/productos" 
            className="inline-block bg-white text-orange-700 hover:bg-orange-50 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Hacer Pedido Ahora
          </Link>
        </div>
      </section>
    </>
  );
}