"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";

export const allProducts = [
  // ── POLLO BROSTER ──────────────────────────────────────
  {
    id: "1",
    name: "Pollo Broster Personal",
    description: "Pollo crujiente con papas fritas, ensalada y cremas",
    price: 10.00,
    image: "https://minichef.b-cdn.net/assets/e8/02/cc/85/5c/b9/receta%20de%20pollo%20broaster.png",
    slug: "pollo-broster-familiar",
    category: "pollo-broster",
    emoji: "🍗",
  },
  {
    id: "2",
    name: "Pollo Broster + Chaufa",
    description: "Porción individual de pollo broster con papas fritas, arroz chaufa y ensalada.",
    price: 12.00,
    image: "https://pepestubroaster.com/wp-content/uploads/Pollo-broaster-con-papas-fritas-y-arroz-chaufa.jpg",
    slug: "pollo-broster-personal",
    category: "pollo-broster",
    emoji: "🍗",
  },
  {
    id: "3",
    name: "Salchipollo Especial",
    description: "Salchicha con pollo, papas y salsas especiales de la casa.",
    price: 10.00,
    image: "https://as2.ftcdn.net/v2/jpg/05/28/82/45/1000_F_528824598_weNjeRww3UEAQt6XsHCk2Doi58CaSBGe.jpg",
    slug: "salchipollo-especial",
    category: "pollo-broster",  
    emoji: "🌭",
  },
   {
    id: "4",
    name: "Salchipapa",
    description: "Salchicha con pollo, papas y salsas especiales de la casa.",
    price: 8.00,
    image: "https://img.freepik.com/premium-photo/typical-latin-america-salchipapa-sausages-with-fries-ketchup-mayo-mustard_123827-5005.jpg?w=2000",
    slug: "salchipollo-especial",
    category: "pollo-broster",  
    emoji: "🌭",
  },
  // ── ALITAS ─────────────────────────────────────────────
  {
    id: "5",
    name: "Alitas Broster (6 unid.)",
    description: "6 alitas crujientes con papas fritas",
    price: 18.00,
    image: "https://storage.googleapis.com/guiaspro/delivery-caja-alitas-broaster.webp",
    slug: "alitas-broster-12",
    category: "alitas",
    emoji: "🍖",
  },
  {
    id: "6",
    name: "Alitas BBQ (6 unid.)",
    description: "6 alitas crujientes con salsa BBQ a tu preferencia.",
    price: 20.00,
    image: "https://images.pexels.com/photos/30224598/pexels-photo-30224598.jpeg?_gl=1*qm7fse*_ga*MTM1MDA2NzA3LjE3Njg1NzAyNzA.*_ga_8JE65Q40S6*czE3NzE1Mzg2MTUkbzYkZzEkdDE3NzE1NDAwNTkkajU5JGwwJGgw",
    slug: "alitas-broster-6",
    category: "alitas",
    emoji: "🍖",
  }, {
    id: "7",
    name: "Alitas en salsa de Maracuya (6 unid.)",
    description: "6 alitas crujientes con salsa de Maracuya a tu preferencia.",
    price: 20.00,
    image: "https://pronacatqma.com/wp-content/uploads/sites/4/2025/04/17812_1.jpg",
    slug: "alitas-broster-6",
    category: "alitas",
    emoji: "🍖",
  }, {
    id: "8",
    name: "Alitas Acevichadas (6 unid.)",
    description: "6 alitas crujientes con salsa acevichada a tu preferencia.",
    price: 20.00,
    image: "https://i.ytimg.com/vi/bCCLPsf5UVc/maxresdefault.jpg",
    slug: "alitas-broster-6",
    category: "alitas",
    emoji: "🍖",
  },
  // ── BOCADITOS ──────────────────────────────────────────
  {
    id: "9",
    name: "Mix de Bocaditos (50 unid.)",
    description: "Variedad de bocaditos salados perfectos para eventos.",
    price: 55.00,
    image: "https://static.wooweb.site/media/sites/16/2017/05/p_2_0_3_203-Mix-de-Bocaditos-Dulces.jpg",
    slug: "mix-bocaditos-50",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "10",
    name: "Tequeños (24 unid.)",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    price: 30.00,
    image: "https://i.pinimg.com/736x/0d/af/aa/0dafaaa4ebff32cd6c9c98d342daa039.jpg",
    slug: "tequenos-24",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "11",
    name: "Minipizzas",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    price: 30.00,
    image: "https://duulp0xsp2qmz.cloudfront.net/flex-zonecateringflex/media/images/64756c2ac5b16_597abfb500578a52a51a9a5f3dd2ce2f.jpeg",
    slug: "tequenos-24",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "12",
    name: "Brownies",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    price: 30.00,
    image: "https://tse4.mm.bing.net/th/id/OIP.wi2d0bjhflXG7Mo2J3ZXqwHaHa?pid=Api&P=0&h=180",
    slug: "tequenos-24",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "13",
    name: "Mini-Hamburguessas",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    price: 30.00,
    image: "https://www.canaletameat.com/wp-content/uploads/2024/12/4609-hamburguesa-mini-de-ternera-chimichurri-con-queso-azul.jpg",
    slug: "tequenos-24",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "14",
    name: "Mini-Triples",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    price: 30.00,
    image: "https://laprimavera.store/wp-content/uploads/2024/08/mini-sanduchito-triple-de-jamon-pollo-y-huevo.jpg",
    slug: "tequenos-24",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "15",
    name: "Mini-Brochetas",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    price: 30.00,
    image: "https://tse1.mm.bing.net/th/id/OIP.0RoEyNC3y8L7BZP-vRcGBAHaEK?pid=Api&P=0&h=180",
    slug: "tequenos-24",
    category: "bocaditos",
    emoji: "🥐",
  },
  {
    id: "16",
    name: "Alitas Brouchet",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    price: 30.00,
    image: "https://img-global.cpcdn.com/recipes/4d9f6a649942709f/1200x630cq70/photo.jpg",
    slug: "tequenos-24",
    category: "bocaditos",
    emoji: "🥐",
  },
  
  // ── PASTELITOS ─────────────────────────────────────────
  {
    id: "17",
    name: "Pastelitos de Manzana",
    description: "Surtido de pastelitos dulces con manjar y frutas.",
    price: 2.50,
    image: "https://i.ytimg.com/vi/g0LCH0VovyY/maxresdefault.jpg",
    slug: "pastelitos-dulces-12",
    category: "pastelitos",
    emoji: "🧁",
  },
  {
    id: "18",
    name: "Pañuelo",
    description: "Rellenos de pollo, carne y queso. Ideales para compartir.",
    price: 25.00,
    image: "https://i.ytimg.com/vi/PLK9gj5Q7LA/maxresdefault.jpg",
    slug: "pastelitos-salados-12",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "19",
    name: "Brownie",
    description: "Rellenos de pollo, carne y queso. Ideales para compartir.",
    price: 25.00,
    image: "https://bakingamoment.com/wp-content/uploads/2016/10/IMG_8205-brownie-recipe.jpg",
    slug: "pastelitos-salados-12",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "20",
    name: "Botija",
    description: "Rellenos de pollo, carne y queso. Ideales para compartir.",
    price: 25.00,
    image: "https://confiterialuben.com/wp-content/uploads/2021/04/IMG_4664.png",
    slug: "pastelitos-salados-12",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "21",
    name: "Empanada de Pollo",
    description: "Rellenos de pollo, carne y queso. Ideales para compartir.",
    price: 25.00,
    image: "https://www.thespruceeats.com/thmb/cxDL8YLb5Eb2Jx3c_8i5ks-1eaA=/5927x3941/filters:fill(auto,1)/chicken-empanadas-de-pollo-3029662-hero-01-b9c7760ffda1421cabd946b9ab74ebc8.jpg",
    slug: "pastelitos-salados-12",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "22",
    name: "Empanada de Carne",
    description: "Rellenos de pollo, carne y queso. Ideales para compartir.",
    price: 25.00,
    image: "https://assets.unileversolutions.com/recipes-v2/239857.jpg",
    slug: "pastelitos-salados-12",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "23",
    name: "Empanada de Pizza",
    description: "Rellenos de pollo, carne y queso. Ideales para compartir.",
    price: 25.00,
    image: "https://static.americadigital.com/wp-content/uploads/2021/02/america_digital_empanadas_de_pizza_faciles_2021-4.jpg",
    slug: "pastelitos-salados-12",
    category: "pastelitos",
    emoji: "🥧",
  },
  {
    id: "24",
    name: "Orejitas",
    description: "Rellenos de pollo, carne y queso. Ideales para compartir.",
    price: 25.00,
    image: "https://tse4.mm.bing.net/th/id/OIP.Ib3Qf3NncJRYeflPYPhLlAHaHa?pid=Api&P=0&h=180",
    slug: "pastelitos-salados-12",
    category: "pastelitos",
    emoji: "🥧",
  },
  
  // ── PIZZAS ─────────────────────────────────────────────
  {
    id: "25",
    name: "Pizza Peperoni",
    description: "Salsa de tomate casera, mozzarella fresca y albahaca. La clásica italiana.",
    price: 28.00,
    image: "https://tse4.mm.bing.net/th/id/OIP.424A1jgy2iF5wv8kXAfHTwHaD4?pid=Api&P=0&h=180",
    slug: "pizza-margarita",
    category: "pizzas",
    emoji: "🍕",
  },
  {
    id: "26",
    name: "Pizza Especial",
    description: "Jamón, piña y queso mozzarella. El equilibrio perfecto entre dulce y salado.",
    price: 32.00,
    image: "https://www.pizzapizza.cl/wp-content/uploads/2021/03/tocino-bbq-web-1024x686.jpg",
    slug: "pizza-hawaiana",
    category: "pizzas",
    emoji: "🍕",
  },
  
  // ── KEKES ──────────────────────────────────────────────
  {
    id: "27",
    name: "Keke de Vainilla",
    description: "Esponjoso keke de vainilla con pasas y un toque de naranja fresca.",
    price: 22.00,
    image: "https://statics.exitosanoticias.pe/2020/04/4e101e14f36c66aeb81b71f7523772d1.png",
    slug: "keke-vainilla",
    category: "kekes",
    emoji: "🎂",
  },
  {
    id: "28",
    name: "Keke de Zanahoria",
    description: "Húmedo y denso, con chips de chocolate y cobertura de ganache.",
    price: 25.00,
    image: "https://cdn0.recetasgratis.net/es/posts/1/7/4/queque_de_zanahoria_11471_orig.jpg",
    slug: "keke-chocolate",
    category: "kekes",
    emoji: "🍫",
  },
  {
    id: "29",
    name: "Keke de Chocolate",
    description: "Refrescante keke de limón con glasé de azúcar y ralladura cítrica.",
    price: 22.00,
    image: "https://4.bp.blogspot.com/-jMy2CCGAo54/V9wgndH1ROI/AAAAAAAADTg/xWpkUsNZOTUvCYPmFiYUnRCVSyBDXLPkwCLcB/s1600/keke%2Bde%2Bchocolate.jpg",
    slug: "keke-limon",
    category: "kekes",
    emoji: "🍋",
  },
  {
    id: "30",
    name: "Cupcakes con chispas de chocolate",
    description: "Refrescante keke de limón con glasé de azúcar y ralladura cítrica.",
    price: 22.00,
    image: "https://cdn.prod.website-files.com/6421ce75be42e6b8e2158e40/64c42bfde5a82ea793078f06_64bf559351e49298c6d7a874_Cupcakes_chispa_chocolate.jpeg",
    slug: "keke-limon",
    category: "kekes",
    emoji: "🍋",
  },
  // ── HAMBURGUESAS ───────────────────────────────────────
  {
    id: "31",
    name: "Hamburguesa Simple",
    description: "Carne 100% res, lechuga, tomate, queso cheddar y salsa de la casa.",
    price: 20.00,
    image: "https://img.hogar.mapfre.es/wp-content/uploads/2018/09/hamburguesa-sencilla.jpg",
    slug: "clasica-broster-burger",
    category: "hamburguesas",
    emoji: "🍔",
  },
  {
    id: "32",
    name: "Hamburguesa Royal",
    description: "Doble carne, doble queso cheddar, cebolla caramelizada y pepinillos.",
    price: 28.00,
    image: "https://i.pinimg.com/originals/43/21/f8/4321f82dbb317277e9e48be9d4b75404.png",
    slug: "doble-cheddar-burger",
    category: "hamburguesas",
    emoji: "🍔",
  },
  {
    id: "33",
    name: "Hamurguesa Royal con Jamon y Queso",
    description: "Filete de pollo crujiente, coleslaw casero y mayo de ajo. Irresistible.",
    price: 22.00,
    image: "https://viejodave.com.ar/wp-content/uploads/2024/02/hamburguesa-jamon-queso-lechuga-tomate-y-huevo-carne-01.jpg",
    slug: "burger-pollo-crispy",
    category: "hamburguesas",
    emoji: "🍗",
  },
  {
    id: "34",
    name: "Hamburguesa Doble con Tocino",
    description: "https://tse4.mm.bing.net/th/id/OIP.U4khlhrkFAd_bYc5UQyhuQHaHa?pid=Api&P=0&h=180",
    price: 32.00,
    image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "combo-burger-papas",
    category: "hamburguesas",
    emoji: "🍔",
  },
  // ── TORTAS ─────────────────────────────────────────────
  {
    id: "35",
    name: "Torta de Tres Leches",
    description: "Bizcocho empapado en tres leches con crema chantilly y cerezas.",
    price: 65.00,
    image: "https://i.blogs.es/4d76ad/pastel-tres-leches/1366_2000.jpg",
    slug: "torta-tres-leches",
    category: "tortas",
    emoji: "🎂",
  },
  {
    id: "36",
    name: "Torta de Chocolate",
    description: "Capas de bizcocho de cacao con ganache de chocolate negro y fresas.",
    price: 75.00,
    image: "https://www.chocolatto.co/wp-content/uploads/2020/07/IMG_0170-scaled.jpg",
    slug: "torta-chocolate-premium",
    category: "tortas",
    emoji: "🍫",
  },
  {
    id: "37",
    name: "Torta de Cumpleaños",
    description: "Esponjosa base de vainilla con crema, fresas frescas y mermelada artesanal.",
    price: 70.00,
    image: "https://cocina-argentina.com/wp-content/uploads/monton-de-tortas-de-cumpleanos-decoradas-de-forma-creativa.jpg",
    slug: "torta-fresas",
    category: "tortas",
    emoji: "🍓",
  },
  {
    id: "38",
    name: "Pie de Limon",
    description: "Esponjosa base de vainilla con crema, fresas frescas y mermelada artesanal.",
    price: 70.00,
    image: "https://cocinalocal.cl/wp-content/uploads/2021/08/pie-de-limon.jpg",
    slug: "torta-fresas",
    category: "tortas",
    emoji: "🍓",
  },
  // ── BEBIDAS ────────────────────────────────────────────
  {
    id: "39",
    name: "Vaso de Chicha Morada",
    description: "Limón fresco, hielo granizado y un toque de menta. Refrescante total.",
    price: 8.00,
    image: "https://tse2.mm.bing.net/th/id/OIP.-OolMh0-iBN61zk-AAVkzAHaHa?pid=Api&P=0&h=180",
    slug: "limonada-frozen",
    category: "bebidas",
    emoji: "🥤",
  },
  {
    id: "40",
    name: "Jarra de Chicha Morada",
    description: "Maracuyá natural con azúcar de caña. El sabor tropical que te encanta.",
    price: 7.00,
    image: "https://www.lovferments.com/wp-content/uploads/2021/04/beb_chicha.jpg",
    slug: "jugo-maracuya",
    category: "bebidas",
    emoji: "🧃",
  },
  {
    id: "41",
    name: "Vaso de Maracuya",
    description: "Espresso sobre leche helada con caramelo. Energía con estilo.",
    price: 9.00,
    image: "https://tse1.mm.bing.net/th/id/OIP.j0dsgvo5Wi50xhsJKCrHjQHaFj?pid=Api&P=0&h=180",
    slug: "cafe-helado",
    category: "bebidas",
    emoji: "☕",
  },
  {
    id: "42",
    name: "Jarra de Maracuya",
    description: "Mix de frutas frescas, yogur natural y miel. Nutritivo y delicioso.",
    price: 10.00,
    image: "https://eldoradochicken.com/wp-content/uploads/2021/01/Jarra-maracuya.jpg",
    slug: "smoothie-frutas",
    category: "bebidas",
    emoji: "🫐",
  },
  // ── PLATOS A LA CARTA ──────────────────────────────────
  {
    id: "43",
    name: "Lomo Saltado",
    description: "Tiras de lomo fino salteadas con verduras, sillao y ají amarillo.",
    price: 28.00,
    image: "https://cocina-casera.com/wp-content/uploads/2017/12/Lomosaltado2.jpg",
    slug: "lomo-saltado",
    category: "a-la-carta",
    emoji: "🍽️",
  },
  {
    id: "44",
    name: "Churrasco con papas fritas y ensalada",
    description: "Arroz cremoso al estilo risotto con mariscos frescos y salsa americana.",
    price: 35.00,
    image: "https://www.smartienda.cl/smartwebsite/pruebas/7333/-20202183135.jpg",
    slug: "lomo-saltado",
    category: "a-la-carta",
    emoji: "🦐",
  },
  //CHEESECAKES
   {
    id: "45",
    name: "Cheesecake de Oreo",
    description: "Deliciosa torta de cheesecake de Oreo",
    price: 35.00,
    image: "https://imgmedia.buenazo.pe/1200x660/buenazo/original/2021/12/10/61b42ee9a7c5372e257c4dee.jpg",
    slug: "Cheesecakes",
    category: "cheesecakes",
    emoji: "🍰",
  },
   {
    id: "46",
    name: "Vaso de Cheesecake de Oreo ",
    description: "Delicioso cheesecake de Oreo en Vaso",
    price: 35.00,
    image: "https://i.pinimg.com/originals/ec/1d/a9/ec1da9f95baccfad4ecfdf0576084a63.jpg",
    slug: "Cheesecakes",
    category: "cheesecakes",
    emoji: "🍰",
  },
   {
    id: "47",
    name: "Cheesecake de Fresa",
    description: "Deliciosa torta de cheesecake de Fresa",
    price: 35.00,
    image: "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/strawberry-topped-cheesecake.jpg",
    slug: "Cheesecakes",
    category: "cheesecakes",
    emoji: "🍰",
  },
   {
    id: "48",
    name: "Vaso de cheesecake de Fresa",
    description: "Deliciosa cheesecake de Fresa en vaso",
    price: 35.00,
    image: "https://i.ytimg.com/vi/Tkh8tLrD2Vc/maxresdefault.jpg",
    slug: "Cheesecakes",
    category: "cheesecakes",
    emoji: "🍰",
  },
   {
    id: "49",
    name: "Cheesecake de Maracuyá",
    description: "Deliciosa torta de cheesecake de Maracuyá",
    price: 35.00,
    image: "https://i.pinimg.com/originals/70/30/a5/7030a5ef749bcc4daf5c082a4d5eb9a3.jpg",
    slug: "Cheesecakes",
    category: "cheesecakes",
    emoji: "🍰",
  },
   {
    id: "50",
    name: "Vaso de cheesecake de Maracuyá",
    description: "Deliciosa cheesecake de Maracuyá en vaso",
    price: 35.00,
    image: "https://laprimavera.store/wp-content/uploads/2023/10/Imagen-de-WhatsApp-2024-03-18-a-las-22.43.00_27bb3549_11zon-e1712950280587.webp",
    slug: "Cheesecakes",
    category: "cheesecakes",
    emoji: "🍰",
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
  { slug: "cheesecakes",  label: "Cheesecakes",      emoji: "🍰" },
];

const FALLBACK =
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";

function ProductCard({ p }: { p: (typeof allProducts)[0] }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.image,
    slug: p.slug,  // ✅ CORRECTO
  });
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