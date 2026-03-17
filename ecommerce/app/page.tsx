import Hero from "@/components/Hero";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";

const featuredProducts = [
  {
    id: "2",
    name: "Pollo Broster + Chaufa",
    description:
      "Pollo broster crujiente con papas fritas, arroz chaufa y ensalada.",
    price: 12.0,
    image:
      "https://pepestubroaster.com/wp-content/uploads/Pollo-broaster-con-papas-fritas-y-arroz-chaufa.jpg",
    slug: "pollo-broster-chaufa",
  },
  {
    id: "5",
    name: "Alitas Broster (6 unid.)",
    description: "Alitas crujientes con papas fritas.",
    price: 18.0,
    image:
      "https://storage.googleapis.com/guiaspro/delivery-caja-alitas-broaster.webp",
    slug: "alitas-broster-6",
  },
  {
    id: "9",
    name: "Mix de Bocaditos (50 unid.)",
    description: "Variedad de bocaditos para tus eventos.",
    price: 55.0,
    image:
      "https://static.wooweb.site/media/sites/16/2017/05/p_2_0_3_203-Mix-de-Bocaditos-Dulces.jpg",
    slug: "mix-bocaditos-50",
  },
  {
    id: "45",
    name: "Cheesecake de Oreo",
    description: "Deliciosa torta de cheesecake de Oreo.",
    price: 35.0,
    image:
      "https://imgmedia.buenazo.pe/1200x660/buenazo/original/2021/12/10/61b42ee9a7c5372e257c4dee.jpg",
    slug: "cheesecake-oreo",
  },
];

const categories = [
  {
    id: "1",
    name: "Pollo Broster",
    slug: "pollo-broster",
    icon: "🍗",
    description: "Crujiente y jugoso",
    color: "from-orange-600 to-red-600",
    image:
      "https://minichef.b-cdn.net/assets/e8/02/cc/85/5c/b9/receta%20de%20pollo%20broaster.png",
  },
  {
    id: "2",
    name: "Alitas",
    slug: "alitas",
    icon: "🍖",
    description: "Con diferentes salsas",
    color: "from-red-600 to-orange-500",
    image:
      "https://storage.googleapis.com/guiaspro/delivery-caja-alitas-broaster.webp",
  },
  {
    id: "3",
    name: "Bocaditos",
    slug: "bocaditos",
    icon: "🥐",
    description: "Para tus eventos",
    color: "from-yellow-500 to-orange-500",
    image:
      "https://static.wooweb.site/media/sites/16/2017/05/p_2_0_3_203-Mix-de-Bocaditos-Dulces.jpg",
  },
  {
    id: "4",
    name: "Pastelitos",
    slug: "pastelitos",
    icon: "🧁",
    description: "Dulces y salados",
    color: "from-amber-500 to-yellow-400",
    image: "https://i.ytimg.com/vi/g0LCH0VovyY/maxresdefault.jpg",
  },
  {
    id: "5",
    name: "Pizzas",
    slug: "pizzas",
    icon: "🍕",
    description: "Masa artesanal",
    color: "from-red-600 to-rose-500",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.424A1jgy2iF5wv8kXAfHTwHaD4?pid=Api&P=0&h=180",
  },
  {
    id: "6",
    name: "Kekes",
    slug: "kekes",
    icon: "🎂",
    description: "Recetas de siempre",
    color: "from-violet-600 to-purple-500",
    image:
      "https://statics.exitosanoticias.pe/2020/04/4e101e14f36c66aeb81b71f7523772d1.png",
  },
  {
    id: "7",
    name: "Hamburguesas",
    slug: "hamburguesas",
    icon: "🍔",
    description: "Pan brioche y más",
    color: "from-yellow-600 to-orange-500",
    image:
      "https://img.hogar.mapfre.es/wp-content/uploads/2018/09/hamburguesa-sencilla.jpg",
  },
  {
    id: "8",
    name: "Tortas",
    slug: "tortas",
    icon: "🎂",
    description: "Para celebrar",
    color: "from-teal-600 to-emerald-500",
    image: "https://i.blogs.es/4d76ad/pastel-tres-leches/1366_2000.jpg",
  },
  {
    id: "9",
    name: "Bebidas",
    slug: "bebidas",
    icon: "🥤",
    description: "Frescas y naturales",
    color: "from-blue-600 to-cyan-500",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.-OolMh0-iBN61zk-AAVkzAHaHa?pid=Api&P=0&h=180",
  },
  {
    id: "10",
    name: "A la Carta",
    slug: "a-la-carta",
    icon: "🍽️",
    description: "Platos completos",
    color: "from-green-600 to-lime-500",
    image:
      "https://cocina-casera.com/wp-content/uploads/2017/12/Lomosaltado2.jpg",
  },
  {
    id: "11",
    name: "Cheesecakes",
    slug: "cheesecakes",
    icon: "🍰",
    description: "En torta y en vasito",
    color: "from-pink-500 to-rose-400",
    image:
      "https://imgmedia.buenazo.pe/1200x660/buenazo/original/2021/12/10/61b42ee9a7c5372e257c4dee.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Categorías ── */}
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

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="w-[calc(50%-8px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(25%-18px)]"
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Productos Destacados ── */}
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

      {/* ── Características ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                color: "from-orange-500 to-red-500",
                bg: "from-orange-50 to-amber-50",
                title: "Entrega Rápida",
                desc: "Recibe tu pedido en 30-45 minutos",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                color: "from-yellow-500 to-orange-500",
                bg: "from-yellow-50 to-orange-50",
                title: "Calidad Garantizada",
                desc: "Ingredientes frescos y de primera",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
                color: "from-red-500 to-orange-500",
                bg: "from-red-50 to-orange-50",
                title: "Hechos con Amor",
                desc: "Recetas caseras y auténticas",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br ${item.bg} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center`}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-display text-3xl text-orange-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
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
            Haz tu pedido ahora y disfruta de nuestros deliciosos productos en
            la comodidad de tu hogar
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
