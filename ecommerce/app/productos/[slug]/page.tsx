"use client";

import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";
import Link from "next/link";
import { useState, use } from "react";

const allProducts = [
  // POLLO BROSTER
  { id: "1",  name: "Pollo Broster Familiar",    description: "Pollo broster crujiente con papas fritas y ensalada. Rinde para 4 personas.",  longDescription: "Nuestro Pollo Broster Familiar es la elección perfecta para compartir en familia. Preparado con nuestra receta secreta de especias, el pollo queda dorado y crujiente por fuera, jugoso y tierno por dentro. Viene acompañado de papas fritas crocantes y una fresca ensalada de la casa.", price: 45.00, image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?w=600&h=400&fit=crop", slug: "pollo-broster-familiar",  category: "Pollo Broster", emoji: "🍗", ingredients: ["Pollo entero", "Papas fritas", "Ensalada fresca", "Salsas especiales"], serves: "4 personas" },
  { id: "2",  name: "Pollo Broster Personal",    description: "Porción individual de pollo broster con papas y ensalada.",                    longDescription: "Porción perfecta para una persona. Todo el sabor de nuestro pollo broster en la medida justa para ti, con papas fritas doradas y ensalada fresca.",                                                                                                                     price: 18.00, image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?w=600&h=400&fit=crop", slug: "pollo-broster-personal",  category: "Pollo Broster", emoji: "🍗", ingredients: ["Pollo (1/4)", "Papas fritas", "Ensalada", "Salsa"],                       serves: "1 persona" },
  { id: "3",  name: "Salchipollo Especial",       description: "Salchicha con pollo, papas y salsas especiales de la casa.",                  longDescription: "Una combinación única de salchicha premium con nuestro pollo broster, acompañado de papas fritas y un toque especial de nuestras salsas de la casa.",                                                                               price: 18.00, image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?w=600&h=400&fit=crop", slug: "salchipollo-especial",    category: "Pollo Broster", emoji: "🌭", ingredients: ["Salchicha premium", "Pollo broster", "Papas fritas", "Salsas"],          serves: "1 persona" },
  // ALITAS
  { id: "4",  name: "Alitas Broster (12 unid.)", description: "Alitas crujientes con salsa BBQ o picante a tu elección.",                     longDescription: "12 alitas de pollo marinadas con nuestros condimentos secretos, fritas hasta lograr el crujiente perfecto. Puedes elegir entre salsa BBQ dulce o salsa picante.",                                                                          price: 35.00, image: "https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?w=600&h=400&fit=crop",  slug: "alitas-broster-12",       category: "Alitas",        emoji: "🍖", ingredients: ["12 alitas de pollo", "Aderezo especial", "Salsa BBQ o picante"],         serves: "2-3 personas" },
  { id: "5",  name: "Alitas Broster (6 unid.)",  description: "Porción de 6 alitas crujientes con salsa de tu preferencia.",                  longDescription: "Porción personal de 6 alitas perfectamente crujientes. Elige tu salsa favorita: BBQ o picante.",                                                                                                                                    price: 20.00, image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?w=600&h=400&fit=crop", slug: "alitas-broster-6", category: "Alitas", emoji: "🍖", ingredients: ["6 alitas de pollo", "Aderezo especial", "Salsa a elegir"], serves: "1 persona" },
  // BOCADITOS
  { id: "6",  name: "Mix de Bocaditos (50 unid.)", description: "Variedad de bocaditos salados perfectos para tus eventos.",                  longDescription: "El pack ideal para eventos y reuniones. Incluye una variedad de bocaditos salados: tequeños, empanadas, mini sandwiches y más.",                                                                                                    price: 55.00, image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?w=600&h=400&fit=crop", slug: "mix-bocaditos-50",         category: "Bocaditos",     emoji: "🥐", ingredients: ["Tequeños", "Mini empanadas", "Sandwiches", "Bocaditos variados"],        serves: "10-15 personas" },
  { id: "7",  name: "Tequeños (24 unid.)",        description: "Tequeños rellenos de queso, dorados y crujientes.",                           longDescription: "24 tequeños artesanales rellenos de queso derretido, con una masa perfectamente dorada y crujiente.",                                                                                                                             price: 30.00, image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?w=600&h=400&fit=crop", slug: "tequenos-24",              category: "Bocaditos",     emoji: "🥐", ingredients: ["Masa artesanal", "Queso especial", "Condimentos"],                        serves: "6-8 personas" },
  // PASTELITOS
  { id: "8",  name: "Pastelitos Dulces (12 unid.)", description: "Surtido de pastelitos dulces, rellenos de manjar y frutas.",               longDescription: "12 pastelitos dulces artesanales con diferentes rellenos: manjar blanco, frutas de temporada y crema.",                                                                                                                         price: 28.00, image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?w=600&h=400&fit=crop",   slug: "pastelitos-dulces-12",    category: "Pastelitos",    emoji: "🧁", ingredients: ["Masa artesanal", "Manjar blanco", "Frutas", "Crema"],                     serves: "4-6 personas" },
  { id: "9",  name: "Pastelitos Salados (12 unid.)", description: "Pastelitos salados rellenos de pollo, carne y queso.",                    longDescription: "12 pastelitos salados con rellenos variados: pollo desmenuzado, carne sazonada y queso derretido.",                                                                                                                            price: 25.00, image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?w=600&h=400&fit=crop",   slug: "pastelitos-salados-12",   category: "Pastelitos",    emoji: "🥧", ingredients: ["Masa artesanal", "Pollo", "Carne", "Queso"],                              serves: "4-6 personas" },
  // PIZZAS
  { id: "10", name: "Pizza Margarita",            description: "Salsa de tomate casera, mozzarella fresca y albahaca.",                       longDescription: "La reina de las pizzas. Nuestra masa artesanal con salsa de tomate casera, mozzarella fresca importada y albahaca recién cortada. Horneada en horno de piedra.",                                                                 price: 28.00, image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?w=600&h=400&fit=crop",  slug: "pizza-margarita",         category: "Pizzas",        emoji: "🍕", ingredients: ["Masa artesanal", "Salsa de tomate", "Mozzarella", "Albahaca"],            serves: "2-3 personas" },
  { id: "11", name: "Pizza Hawaiana",             description: "Jamón, piña y queso mozzarella. Equilibrio perfecto entre dulce y salado.",   longDescription: "El eterno debate resuelto: jamón de calidad, piña fresca y una generosa capa de mozzarella. Un clásico que siempre enamora.",                                                                                               price: 32.00, image: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?w=600&h=400&fit=crop",  slug: "pizza-hawaiana",          category: "Pizzas",        emoji: "🍕", ingredients: ["Masa artesanal", "Jamón", "Piña fresca", "Mozzarella"],                   serves: "2-3 personas" },
  { id: "12", name: "Pizza Pepperoni",            description: "Generoso pepperoni sobre queso derretido y salsa de tomate especial.",         longDescription: "La favorita de los amantes del pepperoni. Rodajas generosas sobre un lecho de queso mozzarella derretido y nuestra salsa especial.",                                                                                      price: 34.00, image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?w=600&h=400&fit=crop",   slug: "pizza-pepperoni",         category: "Pizzas",        emoji: "🍕", ingredients: ["Masa artesanal", "Pepperoni", "Mozzarella", "Salsa especial"],            serves: "2-3 personas" },
  { id: "13", name: "Pizza 4 Quesos",             description: "Mozzarella, parmesano, gouda y queso crema. Una explosión de sabor.",          longDescription: "Para los amantes del queso. Cuatro quesos cuidadosamente seleccionados que se funden en perfecta armonía sobre nuestra masa artesanal.",                                                                                   price: 36.00, image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?w=600&h=400&fit=crop",  slug: "pizza-4-quesos",          category: "Pizzas",        emoji: "🍕", ingredients: ["Mozzarella", "Parmesano", "Gouda", "Queso crema"],                       serves: "2-3 personas" },
  // KEKES
  { id: "14", name: "Keke de Vainilla",           description: "Esponjoso con pasas y toque de naranja fresca.",                               longDescription: "Receta de la abuela, siempre húmedo y esponjoso. Con pasas remojadas en ron y ralladura de naranja para ese toque especial que lo hace único.",                                                                              price: 22.00, image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?w=600&h=400&fit=crop",  slug: "keke-vainilla",           category: "Kekes",         emoji: "🎂", ingredients: ["Vainilla pura", "Pasas", "Naranja", "Huevos frescos"],                    serves: "8-10 porciones" },
  { id: "15", name: "Keke de Chocolate",          description: "Húmedo, denso, con chips de chocolate y cobertura de ganache.",                 longDescription: "El sueño de los amantes del chocolate. Bizcocho húmedo y denso con chips de chocolate en cada mordida, cubierto con ganache de chocolate negro.",                                                                          price: 25.00, image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?w=600&h=400&fit=crop",   slug: "keke-chocolate",          category: "Kekes",         emoji: "🍫", ingredients: ["Cacao premium", "Chips de chocolate", "Ganache", "Mantequilla"],         serves: "8-10 porciones" },
  { id: "16", name: "Keke de Limón",              description: "Refrescante con glasé de azúcar y ralladura cítrica.",                         longDescription: "Ligero y refrescante, perfecto para el verano. Con una intensa nota cítrica y un glasé de azúcar que lo hace brillar.",                                                                                                    price: 22.00, image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?w=600&h=400&fit=crop",  slug: "keke-limon",              category: "Kekes",         emoji: "🍋", ingredients: ["Limón fresco", "Glasé de azúcar", "Ralladura cítrica", "Yogur"],          serves: "8-10 porciones" },
  // HAMBURGUESAS
  { id: "17", name: "Clásica Broster Burger",     description: "Carne 100% res, lechuga, tomate, cheddar y salsa de la casa.",                 longDescription: "La hamburguesa que lo empezó todo. Carne de res 100% en pan brioche tostado, con lechuga fresca, tomate, queso cheddar americano y nuestra salsa secreta.",                                                                  price: 20.00, image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=600&h=400&fit=crop",  slug: "clasica-broster-burger",  category: "Hamburguesas",  emoji: "🍔", ingredients: ["Carne 100% res", "Pan brioche", "Cheddar", "Salsa especial"],            serves: "1 persona" },
  { id: "18", name: "Doble Cheddar Burger",       description: "Doble carne, doble queso, cebolla caramelizada y pepinillos.",                  longDescription: "Para los que no se conforman con poco. Dos hamburguesas de res, doble queso cheddar, cebolla caramelizada y pepinillos crujientes.",                                                                                      price: 28.00, image: "https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?w=600&h=400&fit=crop",  slug: "doble-cheddar-burger",    category: "Hamburguesas",  emoji: "🍔", ingredients: ["2x Carne res", "2x Cheddar", "Cebolla caramelizada", "Pepinillos"],      serves: "1 persona" },
  { id: "19", name: "Burger de Pollo Crispy",     description: "Filete de pollo crujiente, coleslaw y mayo de ajo.",                           longDescription: "Filete de pechuga de pollo empanizado y crujiente en pan brioche, con coleslaw casero y mayonesa de ajo al limón.",                                                                                                        price: 22.00, image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?w=600&h=400&fit=crop",  slug: "burger-pollo-crispy",     category: "Hamburguesas",  emoji: "🍗", ingredients: ["Filete pollo crispy", "Coleslaw", "Mayo de ajo", "Pan brioche"],          serves: "1 persona" },
  { id: "20", name: "Combo Burger + Papas",       description: "Tu hamburguesa favorita con papas fritas y bebida incluida.",                   longDescription: "El combo perfecto: elige tu hamburguesa favorita y recibe papas fritas crujientes + bebida a elegir. ¡La experiencia completa!",                                                                                         price: 32.00, image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?w=600&h=400&fit=crop",  slug: "combo-burger-papas",      category: "Hamburguesas",  emoji: "🍔", ingredients: ["Hamburguesa a elegir", "Papas fritas", "Bebida incluida"],               serves: "1 persona" },
  // TORTAS
  { id: "21", name: "Torta de Tres Leches",       description: "Bizcocho empapado en tres leches con chantilly y cerezas.",                    longDescription: "El postre más querido de la mesa peruana. Bizcocho súper esponjoso empapado en leche entera, leche condensada y leche evaporada. Decorado con crema chantilly y cerezas.",                                               price: 65.00, image: "https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?w=600&h=400&fit=crop",  slug: "torta-tres-leches",       category: "Tortas",        emoji: "🎂", ingredients: ["Bizcocho", "3 tipos de leche", "Chantilly", "Cerezas"],                  serves: "10-12 porciones" },
  { id: "22", name: "Torta de Chocolate Premium", description: "Capas de bizcocho de cacao con ganache y fresas.",                             longDescription: "Tres capas de bizcocho de cacao belga con ganache de chocolate negro y fresas frescas. Una torta para ocasiones verdaderamente especiales.",                                                                                 price: 75.00, image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?w=600&h=400&fit=crop",  slug: "torta-chocolate-premium", category: "Tortas",        emoji: "🍫", ingredients: ["Cacao belga", "Ganache negro", "Fresas", "Crema chantilly"],             serves: "10-12 porciones" },
  { id: "23", name: "Torta de Fresas",            description: "Base de vainilla con crema, fresas y mermelada artesanal.",                    longDescription: "Elegante y deliciosa. Base de bizcocho de vainilla con crema diplomática, fresas frescas de temporada y mermelada artesanal. Perfecta para celebraciones.",                                                               price: 70.00, image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?w=600&h=400&fit=crop",  slug: "torta-fresas",            category: "Tortas",        emoji: "🍓", ingredients: ["Bizcocho vainilla", "Crema diplomática", "Fresas", "Mermelada"],          serves: "10-12 porciones" },
  // BEBIDAS
  { id: "24", name: "Limonada Frozen",            description: "Limón fresco, hielo granizado y toque de menta.",                              longDescription: "Perfecta para el calor. Limones frescos exprimidos al momento con hielo granizado, azúcar natural y un refrescante toque de menta.",                                                                                       price: 8.00,  image: "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?w=600&h=400&fit=crop",  slug: "limonada-frozen",         category: "Bebidas",       emoji: "🥤", ingredients: ["Limón fresco", "Hielo granizado", "Azúcar", "Menta"],                    serves: "1 vaso" },
  { id: "25", name: "Jugo de Maracuyá",           description: "Maracuyá natural con azúcar de caña.",                                         longDescription: "El sabor tropical que define el verano. Maracuyá natural licuado al momento con azúcar de caña. Sin conservantes, sin artificiales.",                                                                                       price: 7.00,  image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?w=600&h=400&fit=crop",  slug: "jugo-maracuya",           category: "Bebidas",       emoji: "🧃", ingredients: ["Maracuyá fresco", "Azúcar de caña", "Agua"],                              serves: "1 vaso" },
  { id: "26", name: "Café Helado",                description: "Espresso sobre leche helada con caramelo.",                                    longDescription: "Para empezar el día con energía y estilo. Doble espresso vertido sobre leche fría con hielo y un toque de caramelo artesanal.",                                                                                          price: 9.00,  image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?w=600&h=400&fit=crop",    slug: "cafe-helado",             category: "Bebidas",       emoji: "☕", ingredients: ["Doble espresso", "Leche fría", "Hielo", "Caramelo"],                     serves: "1 vaso" },
  { id: "27", name: "Smoothie de Frutas",         description: "Mix de frutas frescas, yogur natural y miel.",                                 longDescription: "Nutritivo y delicioso. Plátano, fresa, mango y arándanos mezclados con yogur griego y un toque de miel pura. Energía natural.",                                                                                        price: 10.00, image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?w=600&h=400&fit=crop",  slug: "smoothie-frutas",         category: "Bebidas",       emoji: "🫐", ingredients: ["Mix de frutas", "Yogur griego", "Miel", "Hielo"],                         serves: "1 vaso" },
  // A LA CARTA
  { id: "28", name: "Lomo Saltado",               description: "Tiras de lomo fino salteadas con verduras, sillao y ají amarillo.",            longDescription: "El clásico de la cocina peruana. Lomo fino cortado en tiras, salteado a fuego alto con tomate, cebolla, sillao, vinagre y ají amarillo. Servido con arroz y papas fritas.",                                          price: 28.00, image: "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?w=600&h=400&fit=crop",    slug: "lomo-saltado",            category: "A la Carta",    emoji: "🍽️", ingredients: ["Lomo fino", "Verduras frescas", "Sillao", "Ají amarillo", "Arroz"],      serves: "1 persona" },
  { id: "29", name: "Arroz con Mariscos",         description: "Arroz cremoso con mariscos frescos y salsa americana.",                        longDescription: "Un festín del mar. Arroz cremoso al estilo risotto con camarones, conchas, calamar y pulpo, bañados en nuestra salsa americana con un toque de ají.",                                                                    price: 35.00, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600&h=400&fit=crop",  slug: "arroz-con-mariscos",      category: "A la Carta",    emoji: "🦐", ingredients: ["Arroz", "Mariscos mixtos", "Salsa americana", "Ají amarillo"],           serves: "1 persona" },
  { id: "30", name: "Churrasco a la Parrilla",    description: "Corte de res con papas doradas, ensalada y chimichurri.",                      longDescription: "Corte premium de res a la parrilla al término que prefieras, acompañado de papas doradas al horno, ensalada fresca y chimichurri de hierbas aromáticas.",                                                               price: 38.00, image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?w=600&h=400&fit=crop",  slug: "churrasco-parrilla",      category: "A la Carta",    emoji: "🥩", ingredients: ["Corte de res premium", "Papas doradas", "Ensalada", "Chimichurri"],      serves: "1 persona" },
  { id: "31", name: "Filete de Pescado",          description: "Pescado fresco a la plancha con arroz, ensalada y salsa tártara.",             longDescription: "Filete fresco del día cocinado a la plancha con aceite de oliva y hierbas. Servido con arroz blanco, ensalada y salsa tártara casera.",                                                                                price: 32.00, image: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?w=600&h=400&fit=crop",    slug: "filete-pescado",          category: "A la Carta",    emoji: "🐟", ingredients: ["Filete fresco", "Arroz blanco", "Ensalada", "Salsa tártara"],            serves: "1 persona" },
];

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
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
        <Link
          href="/productos"
          className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
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

  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-2">
        <nav className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
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
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600&h=400&fit=crop";
              }}
            />
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
                  <span key={ing} className="bg-orange-50 text-orange-700 border border-orange-200 text-xs px-3 py-1 rounded-full">
                    {ing}
                  </span>
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

            <button
              onClick={handleAddToCart}
              disabled={adding}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 disabled:opacity-75"
            >
              {adding ? "Agregando..." : "🛒 Agregar al Carrito"}
            </button>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-3xl text-orange-700 mb-6">También te puede gustar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/productos/${p.slug}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex items-center gap-4"
                >
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