// ─────────────────────────────────────────────────────────────
//  FUENTE ÚNICA DE DATOS  –  lib/data/products.ts
//  Productos ordenados numéricamente por categoría (slug).
//  Las imágenes de categorías se toman del primer producto de
//  cada grupo, así siempre coinciden.
// ─────────────────────────────────────────────────────────────

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  category: string;
  emoji: string;
};

export const allProducts: Product[] = [
  // ── 1. POLLO BROSTER ────────────────────────────────────────
  {
    id: "1",
    name: "Pollo Broster Personal",
    description: "Pollo crujiente con papas fritas, ensalada y cremas.",
    price: 10.0,
    image:
      "https://minichef.b-cdn.net/assets/e8/02/cc/85/5c/b9/receta%20de%20pollo%20broaster.png",
    slug: "pollo-broster-personal",
    category: "pollo-broster",
    emoji: "🍗",
  },
  {
    id: "2",
    name: "Pollo Broster + Chaufa",
    description:
      "Porción individual de pollo broster con papas fritas, arroz chaufa y ensalada.",
    price: 12.0,
    image:
      "https://pepestubroaster.com/wp-content/uploads/Pollo-broaster-con-papas-fritas-y-arroz-chaufa.jpg",
    slug: "pollo-broster-chaufa",
    category: "pollo-broster",
    emoji: "🍗",
  },
  {
    id: "3",
    name: "Salchipollo Especial",
    description: "Salchicha con pollo, papas y salsas especiales de la casa.",
    price: 10.0,
    image:
      "https://as2.ftcdn.net/v2/jpg/05/28/82/45/1000_F_528824598_weNjeRww3UEAQt6XsHCk2Doi58CaSBGe.jpg",
    slug: "salchipollo-especial",
    category: "pollo-broster",
    emoji: "🌭",
  },
  {
    id: "4",
    name: "Salchipapa",
    description: "Salchicha con papas y salsas especiales de la casa.",
    price: 8.0,
    image:
      "https://img.freepik.com/premium-photo/typical-latin-america-salchipapa-sausages-with-fries-ketchup-mayo-mustard_123827-5005.jpg?w=2000",
    slug: "salchipapa",
    category: "pollo-broster",
    emoji: "🌭",
  },

  // ── 2. ALITAS ───────────────────────────────────────────────
  {
    id: "5",
    name: "Alitas Broster (6 unid.)",
    description: "6 alitas crujientes con papas fritas.",
    price: 18.0,
    image:
      "https://storage.googleapis.com/guiaspro/delivery-caja-alitas-broaster.webp",
    slug: "alitas-broster-6",
    category: "alitas",
    emoji: "🍖",
  },
  {
    id: "6",
    name: "Alitas BBQ (6 unid.)",
    description: "6 alitas crujientes con salsa BBQ a tu preferencia.",
    price: 20.0,
    image:
      "https://images.pexels.com/photos/30224598/pexels-photo-30224598.jpeg",
    slug: "alitas-bbq-6",
    category: "alitas",
    emoji: "🍖",
  },
  {
    id: "7",
    name: "Alitas en salsa de Maracuyá (6 unid.)",
    description: "6 alitas crujientes con salsa de maracuyá.",
    price: 20.0,
    image:
      "https://pronacatqma.com/wp-content/uploads/sites/4/2025/04/17812_1.jpg",
    slug: "alitas-maracuya-6",
    category: "alitas",
    emoji: "🍖",
  },
  {
    id: "8",
    name: "Alitas Acevichadas (6 unid.)",
    description: "6 alitas crujientes con salsa acevichada.",
    price: 20.0,
    image: "https://i.ytimg.com/vi/bCCLPsf5UVc/maxresdefault.jpg",
    slug: "alitas-acevichadas-6",
    category: "alitas",
    emoji: "🍖",
  },

  // ── 3. BOCADITOS ────────────────────────────────────────────
  {
    id: "9",
    name: "Mix de Bocaditos (50 unid.)",
    description: "Variedad de bocaditos salados perfectos para eventos.",
    price: 55.0,
    image:
      "https://static.wooweb.site/media/sites/16/2017/05/p_2_0_3_203-Mix-de-Bocaditos-Dulces.jpg",
    slug: "mix-bocaditos-50",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "10",
    name: "Tequeños (24 unid.)",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    price: 30.0,
    image:
      "https://i.pinimg.com/736x/0d/af/aa/0dafaaa4ebff32cd6c9c98d342daa039.jpg",
    slug: "tequenos-24",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "11",
    name: "Minipizzas",
    description: "Minipizzas de queso doradas y crujientes.",
    price: 30.0,
    image:
      "https://duulp0xsp2qmz.cloudfront.net/flex-zonecateringflex/media/images/64756c2ac5b16_597abfb500578a52a51a9a5f3dd2ce2f.jpeg",
    slug: "minipizzas",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "12",
    name: "Brownies (bocaditos)",
    description: "Brownies de chocolate esponjosos para eventos.",
    price: 30.0,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.wi2d0bjhflXG7Mo2J3ZXqwHaHa?pid=Api&P=0&h=180",
    slug: "brownies-bocaditos",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "13",
    name: "Mini-Hamburguesas",
    description: "Minihamburguesas de carne con queso.",
    price: 30.0,
    image:
      "https://www.canaletameat.com/wp-content/uploads/2024/12/4609-hamburguesa-mini-de-ternera-chimichurri-con-queso-azul.jpg",
    slug: "mini-hamburguesas",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "14",
    name: "Mini-Triples",
    description: "Mini sándwiches triple de jamón, pollo y huevo.",
    price: 30.0,
    image:
      "https://laprimavera.store/wp-content/uploads/2024/08/mini-sanduchito-triple-de-jamon-pollo-y-huevo.jpg",
    slug: "mini-triples",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "15",
    name: "Mini-Brochetas",
    description: "Brochetas miniatura de carne y verduras.",
    price: 30.0,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.0RoEyNC3y8L7BZP-vRcGBAHaEK?pid=Api&P=0&h=180",
    slug: "mini-brochetas",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "16",
    name: "Alitas Brouchet",
    description: "Alitas en brocheta con aderezo especial.",
    price: 30.0,
    image:
      "https://img-global.cpcdn.com/recipes/4d9f6a649942709f/1200x630cq70/photo.jpg",
    slug: "alitas-brouchet",
    category: "bocaditos",
    emoji: "🥐",
  },

  // ── 4. PASTELITOS ───────────────────────────────────────────
  {
    id: "17",
    name: "Pastelitos de Manzana",
    description: "Pastelitos dulces rellenos de manzana.",
    price: 2.5,
    image: "https://i.ytimg.com/vi/g0LCH0VovyY/maxresdefault.jpg",
    slug: "pastelitos-manzana",
    category: "pastelitos",
    emoji: "🧁",
  },
  {
    id: "18",
    name: "Pañuelo",
    description: "Rellenos de pollo, carne y queso. Ideales para compartir.",
    price: 2.5,
    image: "https://i.ytimg.com/vi/PLK9gj5Q7LA/maxresdefault.jpg",
    slug: "panuelo",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "19",
    name: "Brownie",
    description: "Brownie de chocolate húmedo y esponjoso.",
    price: 2.5,
    image:
      "https://bakingamoment.com/wp-content/uploads/2016/10/IMG_8205-brownie-recipe.jpg",
    slug: "brownie",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "20",
    name: "Botija",
    description: "Cono crocante relleno de manjar.",
    price: 2.5,
    image:
      "https://confiterialuben.com/wp-content/uploads/2021/04/IMG_4664.png",
    slug: "botija",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "21",
    name: "Empanada de Pollo",
    description: "Empanada artesanal rellena de pollo sazonado.",
    price: 2.5,
    image:
      "https://www.thespruceeats.com/thmb/cxDL8YLb5Eb2Jx3c_8i5ks-1eaA=/5927x3941/filters:fill(auto,1)/chicken-empanadas-de-pollo-3029662-hero-01-b9c7760ffda1421cabd946b9ab74ebc8.jpg",
    slug: "empanada-pollo",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "22",
    name: "Empanada de Carne",
    description: "Empanada artesanal rellena de carne sazonada.",
    price: 2.5,
    image: "https://assets.unileversolutions.com/recipes-v2/239857.jpg",
    slug: "empanada-carne",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "23",
    name: "Empanada de Pizza",
    description: "Empanada rellena con sabor a pizza.",
    price: 2.5,
    image:
      "https://static.americadigital.com/wp-content/uploads/2021/02/america_digital_empanadas_de_pizza_faciles_2021-4.jpg",
    slug: "empanada-pizza",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "24",
    name: "Orejitas",
    description: "Orejitas de hojaldre crujientes.",
    price: 2.5,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.Ib3Qf3NncJRYeflPYPhLlAHaHa?pid=Api&P=0&h=180",
    slug: "orejitas",
    category: "pastelitos",
    emoji: "🥧",
  },

  // ── 5. PIZZAS ───────────────────────────────────────────────
  {
    id: "25",
    name: "Pizza Pepperoni",
    description: "Salsa de tomate casera, mozzarella fresca y pepperoni.",
    price: 28.0,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.424A1jgy2iF5wv8kXAfHTwHaD4?pid=Api&P=0&h=180",
    slug: "pizza-pepperoni",
    category: "pizzas",
    emoji: "🍕",
  },
  {
    id: "26",
    name: "Pizza Especial",
    description:
      "Jamón, piña y queso mozzarella. El equilibrio perfecto entre dulce y salado.",
    price: 32.0,
    image:
      "https://www.pizzapizza.cl/wp-content/uploads/2021/03/tocino-bbq-web-1024x686.jpg",
    slug: "pizza-especial",
    category: "pizzas",
    emoji: "🍕",
  },

  // ── 6. KEKES ────────────────────────────────────────────────
  {
    id: "27",
    name: "Keke de Vainilla",
    description:
      "Esponjoso keke de vainilla con pasas y un toque de naranja fresca.",
    price: 22.0,
    image:
      "https://statics.exitosanoticias.pe/2020/04/4e101e14f36c66aeb81b71f7523772d1.png",
    slug: "keke-vainilla",
    category: "kekes",
    emoji: "🎂",
  },
  {
    id: "28",
    name: "Keke de Zanahoria",
    description:
      "Húmedo y denso, con chips de chocolate y cobertura de ganache.",
    price: 25.0,
    image:
      "https://cdn0.recetasgratis.net/es/posts/1/7/4/queque_de_zanahoria_11471_orig.jpg",
    slug: "keke-zanahoria",
    category: "kekes",
    emoji: "🍫",
  },
  {
    id: "29",
    name: "Keke de Chocolate",
    description: "Refrescante keke de chocolate con glasé de azúcar.",
    price: 22.0,
    image:
      "https://4.bp.blogspot.com/-jMy2CCGAo54/V9wgndH1ROI/AAAAAAAADTg/xWpkUsNZOTUvCYPmFiYUnRCVSyBDXLPkwCLcB/s1600/keke%2Bde%2Bchocolate.jpg",
    slug: "keke-chocolate",
    category: "kekes",
    emoji: "🍋",
  },
  {
    id: "30",
    name: "Cupcakes con chispas de chocolate",
    description: "Cupcakes esponjosos con chispas de chocolate.",
    price: 22.0,
    image:
      "https://cdn.prod.website-files.com/6421ce75be42e6b8e2158e40/64c42bfde5a82ea793078f06_64bf559351e49298c6d7a874_Cupcakes_chispa_chocolate.jpeg",
    slug: "cupcakes-chocolate",
    category: "kekes",
    emoji: "🧁",
  },

  // ── 7. HAMBURGUESAS ─────────────────────────────────────────
  {
    id: "31",
    name: "Hamburguesa Simple",
    description:
      "Carne 100% res, lechuga, tomate, queso cheddar y salsa de la casa.",
    price: 20.0,
    image:
      "https://img.hogar.mapfre.es/wp-content/uploads/2018/09/hamburguesa-sencilla.jpg",
    slug: "hamburguesa-simple",
    category: "hamburguesas",
    emoji: "🍔",
  },
  {
    id: "32",
    name: "Hamburguesa Royal",
    description:
      "Doble carne, doble queso cheddar, cebolla caramelizada y pepinillos.",
    price: 28.0,
    image:
      "https://i.pinimg.com/originals/43/21/f8/4321f82dbb317277e9e48be9d4b75404.png",
    slug: "hamburguesa-royal",
    category: "hamburguesas",
    emoji: "🍔",
  },
  {
    id: "33",
    name: "Hamburguesa Royal con Jamón y Queso",
    description: "Hamburguesa royal con jamón, queso, lechuga, tomate y huevo.",
    price: 22.0,
    image:
      "https://viejodave.com.ar/wp-content/uploads/2024/02/hamburguesa-jamon-queso-lechuga-tomate-y-huevo-carne-01.jpg",
    slug: "hamburguesa-royal-jamon-queso",
    category: "hamburguesas",
    emoji: "🍗",
  },
  {
    id: "34",
    name: "Hamburguesa Doble con Tocino",
    description: "Doble carne con tocino crujiente y queso fundido.",
    price: 32.0,
    image:
      "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "hamburguesa-doble-tocino",
    category: "hamburguesas",
    emoji: "🍔",
  },

  // ── 8. TORTAS ───────────────────────────────────────────────
  {
    id: "35",
    name: "Torta de Tres Leches",
    description:
      "Bizcocho empapado en tres leches con crema chantilly y cerezas.",
    price: 65.0,
    image: "https://i.blogs.es/4d76ad/pastel-tres-leches/1366_2000.jpg",
    slug: "torta-tres-leches",
    category: "tortas",
    emoji: "🎂",
  },
  {
    id: "36",
    name: "Torta de Chocolate",
    description:
      "Capas de bizcocho de cacao con ganache de chocolate negro y fresas.",
    price: 75.0,
    image:
      "https://www.chocolatto.co/wp-content/uploads/2020/07/IMG_0170-scaled.jpg",
    slug: "torta-chocolate",
    category: "tortas",
    emoji: "🍫",
  },
  {
    id: "37",
    name: "Torta de Cumpleaños",
    description:
      "Esponjosa base de vainilla con crema, fresas frescas y mermelada artesanal.",
    price: 70.0,
    image:
      "https://cocina-argentina.com/wp-content/uploads/monton-de-tortas-de-cumpleanos-decoradas-de-forma-creativa.jpg",
    slug: "torta-cumpleanos",
    category: "tortas",
    emoji: "🍓",
  },
  {
    id: "38",
    name: "Pie de Limón",
    description: "Pie de limón fresco con base crujiente y merengue dorado.",
    price: 70.0,
    image: "https://cocinalocal.cl/wp-content/uploads/2021/08/pie-de-limon.jpg",
    slug: "pie-limon",
    category: "tortas",
    emoji: "🍋",
  },

  // ── 9. BEBIDAS ──────────────────────────────────────────────
  {
    id: "39",
    name: "Vaso de Chicha Morada",
    description: "Chicha morada natural bien fría.",
    price: 4.0,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.-OolMh0-iBN61zk-AAVkzAHaHa?pid=Api&P=0&h=180",
    slug: "vaso-chicha-morada",
    category: "bebidas",
    emoji: "🥤",
  },
  {
    id: "40",
    name: "Jarra de Chicha Morada",
    description: "Jarra de chicha morada natural para compartir.",
    price: 14.0,
    image:
      "https://www.lovferments.com/wp-content/uploads/2021/04/beb_chicha.jpg",
    slug: "jarra-chicha-morada",
    category: "bebidas",
    emoji: "🧃",
  },
  {
    id: "41",
    name: "Vaso de Maracuyá",
    description: "Jugo de maracuyá natural con azúcar de caña.",
    price: 5.0,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.j0dsgvo5Wi50xhsJKCrHjQHaFj?pid=Api&P=0&h=180",
    slug: "vaso-maracuya",
    category: "bebidas",
    emoji: "🥤",
  },
  {
    id: "42",
    name: "Jarra de Maracuyá",
    description: "Jarra de maracuyá natural para compartir.",
    price: 16.0,
    image:
      "https://eldoradochicken.com/wp-content/uploads/2021/01/Jarra-maracuya.jpg",
    slug: "jarra-maracuya",
    category: "bebidas",
    emoji: "🫐",
  },

  // ── 10. A LA CARTA ──────────────────────────────────────────
  {
    id: "43",
    name: "Lomo Saltado",
    description:
      "Tiras de lomo fino salteadas con verduras, sillao y ají amarillo.",
    price: 28.0,
    image:
      "https://cocina-casera.com/wp-content/uploads/2017/12/Lomosaltado2.jpg",
    slug: "lomo-saltado",
    category: "a-la-carta",
    emoji: "🍽️",
  },
  {
    id: "44",
    name: "Churrasco con papas fritas y ensalada",
    description: "Churrasco a la parrilla con papas doradas y ensalada fresca.",
    price: 35.0,
    image:
      "https://www.smartienda.cl/smartwebsite/pruebas/7333/-20202183135.jpg",
    slug: "churrasco-papas-ensalada",
    category: "a-la-carta",
    emoji: "🥩",
  },

  // ── 11. CHEESECAKES ─────────────────────────────────────────
  {
    id: "45",
    name: "Cheesecake de Oreo",
    description: "Deliciosa torta de cheesecake de Oreo.",
    price: 35.0,
    image:
      "https://imgmedia.buenazo.pe/1200x660/buenazo/original/2021/12/10/61b42ee9a7c5372e257c4dee.jpg",
    slug: "cheesecake-oreo",
    category: "cheesecakes",
    emoji: "🍰",
  },
  {
    id: "46",
    name: "Vaso de Cheesecake de Oreo",
    description: "Delicioso cheesecake de Oreo en vaso.",
    price: 12.0,
    image:
      "https://i.pinimg.com/originals/ec/1d/a9/ec1da9f95baccfad4ecfdf0576084a63.jpg",
    slug: "vaso-cheesecake-oreo",
    category: "cheesecakes",
    emoji: "🍰",
  },
  {
    id: "47",
    name: "Cheesecake de Fresa",
    description: "Deliciosa torta de cheesecake de fresa.",
    price: 35.0,
    image:
      "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/strawberry-topped-cheesecake.jpg",
    slug: "cheesecake-fresa",
    category: "cheesecakes",
    emoji: "🍰",
  },
  {
    id: "48",
    name: "Vaso de Cheesecake de Fresa",
    description: "Delicioso cheesecake de fresa en vaso.",
    price: 12.0,
    image: "https://i.ytimg.com/vi/Tkh8tLrD2Vc/maxresdefault.jpg",
    slug: "vaso-cheesecake-fresa",
    category: "cheesecakes",
    emoji: "🍰",
  },
  {
    id: "49",
    name: "Cheesecake de Maracuyá",
    description: "Deliciosa torta de cheesecake de maracuyá.",
    price: 35.0,
    image:
      "https://i.pinimg.com/originals/70/30/a5/7030a5ef749bcc4daf5c082a4d5eb9a3.jpg",
    slug: "cheesecake-maracuya",
    category: "cheesecakes",
    emoji: "🍰",
  },
  {
    id: "50",
    name: "Vaso de Cheesecake de Maracuyá",
    description: "Delicioso cheesecake de maracuyá en vaso.",
    price: 12.0,
    image:
      "https://laprimavera.store/wp-content/uploads/2023/10/Imagen-de-WhatsApp-2024-03-18-a-las-22.43.00_27bb3549_11zon-e1712950280587.webp",
    slug: "vaso-cheesecake-maracuya",
    category: "cheesecakes",
    emoji: "🍰",
  },
];

// ─────────────────────────────────────────────────────────────
//  CATEGORÍAS  –  imagen tomada automáticamente del primer
//  producto de cada categoría (siempre en sync).
// ─────────────────────────────────────────────────────────────

export type Category = {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  image: string; // ← primer producto de esa categoría
};

const firstImage = (slug: string) =>
  allProducts.find((p) => p.category === slug)?.image ?? "";

export const categories: Category[] = [
  {
    id: "1",
    slug: "pollo-broster",
    name: "Pollo Broster",
    icon: "🍗",
    description: "Crujiente por fuera, jugoso por dentro.",
    color: "from-orange-600 to-red-600",
    image: firstImage("pollo-broster"),
  },
  {
    id: "2",
    slug: "alitas",
    name: "Alitas",
    icon: "🍖",
    description: "Alitas perfectas con salsas BBQ o picante.",
    color: "from-red-600 to-orange-500",
    image: firstImage("alitas"),
  },
  {
    id: "3",
    slug: "bocaditos",
    name: "Bocaditos",
    icon: "🥐",
    description: "Los mejores bocaditos para tus eventos.",
    color: "from-yellow-500 to-orange-500",
    image: firstImage("bocaditos"),
  },
  {
    id: "4",
    slug: "pastelitos",
    name: "Pastelitos",
    icon: "🧁",
    description: "Dulces y salados, todos artesanales.",
    color: "from-amber-500 to-yellow-400",
    image: firstImage("pastelitos"),
  },
  {
    id: "5",
    slug: "pizzas",
    name: "Pizzas",
    icon: "🍕",
    description: "Masa artesanal y los mejores ingredientes.",
    color: "from-red-600 to-rose-500",
    image: firstImage("pizzas"),
  },
  {
    id: "6",
    slug: "kekes",
    name: "Kekes",
    icon: "🎂",
    description: "Húmedos, esponjosos y deliciosos.",
    color: "from-violet-600 to-purple-500",
    image: firstImage("kekes"),
  },
  {
    id: "7",
    slug: "hamburguesas",
    name: "Hamburguesas",
    icon: "🍔",
    description: "Pan brioche, carne jugosa y salsas especiales.",
    color: "from-yellow-600 to-orange-500",
    image: firstImage("hamburguesas"),
  },
  {
    id: "8",
    slug: "tortas",
    name: "Tortas",
    icon: "🎂",
    description: "Elaboradas con amor para tus momentos especiales.",
    color: "from-teal-600 to-emerald-500",
    image: firstImage("tortas"),
  },
  {
    id: "9",
    slug: "bebidas",
    name: "Bebidas",
    icon: "🥤",
    description: "Refrescantes y naturales para acompañar tu pedido.",
    color: "from-blue-600 to-cyan-500",
    image: firstImage("bebidas"),
  },
  {
    id: "10",
    slug: "a-la-carta",
    name: "A la Carta",
    icon: "🍽️",
    description: "Platos completos llenos de sabor.",
    color: "from-green-600 to-lime-500",
    image: firstImage("a-la-carta"),
  },
  {
    id: "11",
    slug: "cheesecakes",
    name: "Cheesecakes",
    icon: "🍰",
    description: "Deliciosos cheesecakes en torta y en vasito.",
    color: "from-pink-500 to-rose-400",
    image: firstImage("cheesecakes"),
  },
];

// Helpers
export const filters = [
  { slug: "all", label: "Todos", emoji: "🍽️" },
  { slug: "pollo-broster", label: "Pollo Broster", emoji: "🍗" },
  { slug: "alitas", label: "Alitas", emoji: "🍖" },
  { slug: "bocaditos", label: "Bocaditos", emoji: "🥐" },
  { slug: "pastelitos", label: "Pastelitos", emoji: "🧁" },
  { slug: "pizzas", label: "Pizzas", emoji: "🍕" },
  { slug: "kekes", label: "Kekes", emoji: "🎂" },
  { slug: "hamburguesas", label: "Hamburguesas", emoji: "🍔" },
  { slug: "tortas", label: "Tortas", emoji: "🎂" },
  { slug: "bebidas", label: "Bebidas", emoji: "🥤" },
  { slug: "a-la-carta", label: "A la Carta", emoji: "🍽️" },
  { slug: "cheesecakes", label: "Cheesecakes", emoji: "🍰" },
];

export const catLabel: Record<string, string> = {
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
  cheesecakes: "Cheesecake",
};

export const FALLBACK =
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";
