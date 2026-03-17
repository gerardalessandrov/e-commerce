"use client";

import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";
import Link from "next/link";
import { useState, use } from "react";

const allProducts = [
  // ── 1. POLLO BROSTER ────────────────────────────────────────
  {
    id: "1",
    name: "Pollo Broster Personal",
    description: "Pollo crujiente con papas fritas, ensalada y cremas.",
    longDescription:
      "Nuestro Pollo Broster Personal es la combinación perfecta de textura y sabor. Preparado con una marinada secreta de especias que penetra hasta el hueso, luego frito a la perfección para lograr una costra dorada e irresistiblemente crujiente por fuera, mientras mantiene cada bocado jugoso y tierno por dentro. Acompañado de papas fritas recién hechas, ensalada fresca de la casa y nuestras salsas especiales. Una porción completa ideal para darte ese gustito que mereces.",
    price: 10.0,
    image:
      "https://minichef.b-cdn.net/assets/e8/02/cc/85/5c/b9/receta%20de%20pollo%20broaster.png",
    slug: "pollo-broster-familiar",
    category: "pollo-broster",
    emoji: "🍗",
    ingredients: [
      "Pollo entero",
      "Papas fritas",
      "Ensalada fresca",
      "Salsas especiales",
    ],
    serves: "1 persona",
  },
  {
    id: "2",
    name: "Pollo Broster + Chaufa",
    description:
      "Porción individual de pollo broster con papas fritas, arroz chaufa y ensalada.",
    longDescription:
      "La fusión perfecta entre el sabor criollo y la cocina chifa. Nuestro pollo broster dorado y crujiente se sirve junto a un generoso plato de arroz chaufa salteado al wok con huevo, cebolla china, sillao y verduras frescas — todo preparado al instante para que llegue humeante a tu mesa. Completado con papas fritas doradas y ensalada fresca, este plato combina dos de los favoritos de Lima en una sola y satisfactoria porción.",
    price: 12.0,
    image:
      "https://pepestubroaster.com/wp-content/uploads/Pollo-broaster-con-papas-fritas-y-arroz-chaufa.jpg",
    slug: "pollo-broster-personal",
    category: "pollo-broster",
    emoji: "🍗",
    ingredients: [
      "Pollo broster",
      "Papas fritas",
      "Arroz chaufa",
      "Ensalada fresca",
    ],
    serves: "1 persona",
  },
  {
    id: "3",
    name: "Salchipollo Especial",
    description: "Salchicha con pollo, papas y salsas especiales de la casa.",
    longDescription:
      "Un clásico de la calle elevado a otro nivel. El Salchipollo Especial combina una salchicha jugosa y bien sazonada con trozos de pollo broster crujiente, todo sobre una cama de papas fritas recién salidas del aceite. Lo que lo hace único son nuestras salsas de la casa — una mezcla secreta de cremas, hierbas y condimentos que une todos los sabores en cada bocado. Rápido, contundente y absolutamente adictivo.",
    price: 10.0,
    image:
      "https://as2.ftcdn.net/v2/jpg/05/28/82/45/1000_F_528824598_weNjeRww3UEAQt6XsHCk2Doi58CaSBGe.jpg",
    slug: "salchipollo-especial",
    category: "pollo-broster",
    emoji: "🌭",
    ingredients: [
      "Salchicha",
      "Pollo broster",
      "Papas fritas",
      "Salsas de la casa",
    ],
    serves: "1 persona",
  },
  {
    id: "4",
    name: "Salchipapa",
    description: "Salchicha con papas y salsas especiales de la casa.",
    longDescription:
      "El snack más querido de todos, hecho con cariño y los mejores ingredientes. Salchichas frescas y bien doradas sobre una montaña de papas fritas crujientes, bañadas con la combinación clásica de ketchup, mayonesa y mostaza — o pídelas con nuestra salsa especial de la casa. Simple, sabrosa y reconfortante. La Salchipapa de Sabor Charitos es perfecta a cualquier hora del día.",
    price: 8.0,
    image:
      "https://img.freepik.com/premium-photo/typical-latin-america-salchipapa-sausages-with-fries-ketchup-mayo-mustard_123827-5005.jpg?w=2000",
    slug: "salchipapa-especial",
    category: "pollo-broster",
    emoji: "🌭",
    ingredients: [
      "Salchicha",
      "Papas fritas",
      "Ketchup",
      "Mayonesa",
      "Mostaza",
    ],
    serves: "1 persona",
  },

  // ── 2. ALITAS ───────────────────────────────────────────────
  {
    id: "5",
    name: "Alitas Broster (6 unid.)",
    description: "6 alitas crujientes con papas fritas.",
    longDescription:
      "Seis alitas de pollo marinadas durante horas en nuestra mezcla especial de especias, luego sometidas al proceso broster que las hace increíblemente crujientes por fuera sin perder la jugosidad interior. Servidas con papas fritas recién hechas y salsas para dipear. Son el aperitivo o plato principal perfecto para una tarde de antojo. Una vez que las pruebas, es difícil pedir menos de seis.",
    price: 18.0,
    image:
      "https://storage.googleapis.com/guiaspro/delivery-caja-alitas-broaster.webp",
    slug: "alitas-broster-12",
    category: "alitas",
    emoji: "🍖",
    ingredients: ["6 alitas de pollo", "Papas fritas", "Salsas especiales"],
    serves: "1-2 personas",
  },
  {
    id: "6",
    name: "Alitas BBQ (6 unid.)",
    description: "6 alitas crujientes con salsa BBQ a tu preferencia.",
    longDescription:
      "Nuestras alitas clásicas broster bañadas generosamente en una salsa BBQ casera con el equilibrio exacto entre dulce, ahumado y un toque picante. La salsa se carameliza ligeramente sobre la costra crujiente del pollo creando una capa glaseada que hace imposible dejar de comer. Seis unidades perfectas para compartir — o no. Acompañadas de papas fritas y más salsa para dipear al gusto.",
    price: 20.0,
    image:
      "https://images.pexels.com/photos/30224598/pexels-photo-30224598.jpeg",
    slug: "alitas-broster-6",
    category: "alitas",
    emoji: "🍖",
    ingredients: ["6 alitas de pollo", "Salsa BBQ casera", "Papas fritas"],
    serves: "1-2 personas",
  },
  {
    id: "7",
    name: "Alitas en salsa de Maracuyá (6 unid.)",
    description: "6 alitas crujientes con salsa de maracuyá.",
    longDescription:
      "Una explosión de sabor tropical que no encontrarás en ningún otro lugar. Nuestras alitas broster crujientes se sumergen en una salsa de maracuyá fresca y natural — ácida, aromática y con un toque dulce que contrasta perfectamente con la costra salada y crocante del pollo. Es la combinación más sorprendente del menú y la favorita de quienes buscan algo diferente. Seis unidades que te transportan directo al verano.",
    price: 20.0,
    image:
      "https://pronacatqma.com/wp-content/uploads/sites/4/2025/04/17812_1.jpg",
    slug: "alitas-maracuya-12 ",
    category: "alitas",
    emoji: "🍖",
    ingredients: ["6 alitas de pollo", "Salsa de maracuyá", "Papas fritas"],
    serves: "1-2 personas",
  },
  {
    id: "8",
    name: "Alitas Acevichadas (6 unid.)",
    description: "6 alitas crujientes con salsa acevichada.",
    longDescription:
      "Lo mejor de la cocina marina y el pollo broster fusionados en un solo plato. Nuestras alitas crujientes se cubren con una salsa acevichada elaborada con limón fresco, ají amarillo, cebolla y culantro — exactamente como un buen ceviche peruano, pero sobre pollo. El resultado es un sabor intenso, cítrico y ligeramente picante que limpia el paladar con cada bocado. Una experiencia única que refleja todo el orgullo de la cocina peruana.",
    price: 20.0,
    image: "https://i.ytimg.com/vi/bCCLPsf5UVc/maxresdefault.jpg",
    slug: "alitas-acevichadas-6",
    category: "alitas",
    emoji: "🍖",
    ingredients: [
      "6 alitas de pollo",
      "Salsa acevichada",
      "Limón",
      "Ají amarillo",
    ],
    serves: "1-2 personas",
  },

  // ── 3. BOCADITOS ────────────────────────────────────────────
  {
    id: "9",
    name: "Mix de Bocaditos (50 unid.)",
    description: "Variedad de bocaditos salados perfectos para eventos.",
    longDescription:
      "El paquete definitivo para hacer brillar cualquier reunión, cumpleaños, bautizo o evento corporativo. Cincuenta bocaditos artesanales surtidos preparados el mismo día de entrega para garantizar frescura total. La selección incluye tequeños de queso, mini-triples, empanadas variadas, brochetas y más sorpresas de la casa. Todo elaborado con ingredientes frescos y recetas propias. Solo dinos la fecha, nosotros nos encargamos del resto.",
    price: 55.0,
    image:
      "https://static.wooweb.site/media/sites/16/2017/05/p_2_0_3_203-Mix-de-Bocaditos-Dulces.jpg",
    slug: "mix-bocaditos-50",
    category: "bocaditos",
    emoji: "🥐",
    ingredients: [
      "Tequeños",
      "Empanadas",
      "Mini-triples",
      "Brochetas",
      "Variedad artesanal",
    ],
    serves: "10-15 personas",
  },
  {
    id: "10",
    name: "Tequeños (24 unid.)",
    description: "Tequeños rellenos de queso, dorados y crujientes.",
    longDescription:
      "Veinticuatro unidades de puro placer en forma de tequeño. Nuestra masa es preparada a mano cada mañana — ligera, elástica y con el punto justo de sal — envolviendo un generoso relleno de queso que se derrite completamente al freírse. El resultado es un exterior dorado y crujiente que al morderlo revela un interior suave y quesoso. Ideales para fiestas, reuniones o simplemente para darte un antojo bien merecido. Difícil comer solo uno.",
    price: 30.0,
    image:
      "https://i.pinimg.com/736x/0d/af/aa/0dafaaa4ebff32cd6c9c98d342daa039.jpg",
    slug: "tequenos-24",
    category: "bocaditos",
    emoji: "🥐",
    ingredients: ["Masa de hojaldre", "Queso amarillo", "Aceite para freír"],
    serves: "6-8 personas",
  },
  {
    id: "11",
    name: "Minipizzas",
    description: "Minipizzas de queso doradas y crujientes.",
    longDescription:
      "Pequeñas pero llenas de personalidad. Nuestras minipizzas se elaboran con masa artesanal preparada en casa, extendida finamente para lograr una base crocante que aguanta bien los ingredientes sin perder su textura. Cubiertas con salsa de tomate casera cocinada a fuego lento, una capa generosa de queso mozzarella que se gratina a la perfección y un toque de orégano seco. Son el bocadito perfecto para eventos o para picar en casa con la familia.",
    price: 30.0,
    image:
      "https://duulp0xsp2qmz.cloudfront.net/flex-zonecateringflex/media/images/64756c2ac5b16_597abfb500578a52a51a9a5f3dd2ce2f.jpeg",
    slug: "minipizzas",
    category: "bocaditos",
    emoji: "🥐",
    ingredients: [
      "Masa artesanal",
      "Salsa de tomate",
      "Queso mozzarella",
      "Orégano",
    ],
    serves: "6-8 personas",
  },
  {
    id: "12",
    name: "Brownies (bocaditos)",
    description: "Brownies de chocolate esponjosos para eventos.",
    longDescription:
      "Brownies elaborados con una receta que llevamos perfeccionando años. Usamos chocolate bitter de alta calidad derretido con mantequilla real para obtener esa textura densa y húmeda que todo brownie debe tener. El resultado es un cuadradito intensamente chocolatoso, con bordes ligeramente crujientes y un interior fudgy que se deshace en la boca. Espolvoreados con azúcar impalpable para ese toque elegante que los hace irresistibles en cualquier mesa de dulces.",
    price: 30.0,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.wi2d0bjhflXG7Mo2J3ZXqwHaHa?pid=Api&P=0&h=180",
    slug: "brownies-bocaditos",
    category: "bocaditos",
    emoji: "🥐",
    ingredients: [
      "Chocolate bitter",
      "Mantequilla",
      "Huevos",
      "Harina",
      "Azúcar impalpable",
    ],
    serves: "6-8 personas",
  },
  {
    id: "13",
    name: "Mini-Hamburguesas",
    description: "Minihamburguesas de carne con queso.",
    longDescription:
      "Todo el sabor de una hamburguesa gourmet en tamaño bocado. Cada mini-hamburguesa lleva una medallón de carne de res 100% natural sazonada y jugosa, colocada sobre un pan brioche mini recién horneado, con queso cheddar fundido, una hoja de lechuga fresca y rodaja de tomate. Son perfectas para eventos donde quieres impresionar sin complicarte — elegantes, deliciosas y fáciles de comer de un solo bocado.",
    price: 30.0,
    image:
      "https://www.canaletameat.com/wp-content/uploads/2024/12/4609-hamburguesa-mini-de-ternera-chimichurri-con-queso-azul.jpg",
    slug: "mini-hamburguesas",
    category: "bocaditos",
    emoji: "🥐",
    ingredients: [
      "Carne de res",
      "Pan brioche mini",
      "Queso cheddar",
      "Lechuga",
      "Tomate",
    ],
    serves: "6-8 personas",
  },
  {
    id: "14",
    name: "Mini-Triples",
    description: "Mini sándwiches triple de jamón, pollo y huevo.",
    longDescription:
      "El clásico sándwich triple reinventado en formato mini, perfecto para eventos y reuniones. Tres capas de pan de molde suave con rellenos intercalados de jamón ahumado, pollo desmenuzado y huevo, todo unido con una capa fina de mayonesa casera. Cortados en triángulos sin corteza para ese toque elegante que siempre funciona. Frescos, ligeros y sabrosos — desaparecen de la bandeja antes de que te des cuenta.",
    price: 30.0,
    image:
      "https://laprimavera.store/wp-content/uploads/2024/08/mini-sanduchito-triple-de-jamon-pollo-y-huevo.jpg",
    slug: "mini-triples",
    category: "bocaditos",
    emoji: "🥐",
    ingredients: ["Pan de molde", "Jamón", "Pollo", "Huevo", "Mayonesa"],
    serves: "6-8 personas",
  },
  {
    id: "15",
    name: "Mini-Brochetas",
    description: "Brochetas miniatura de carne y verduras.",
    longDescription:
      "Pequeñas piezas de arte culinario en palillo. Cada mini-brocheta lleva trozos de carne tierna alternados con pimiento de colores, cebolla y tomate cherry, todo marinado en nuestro aderezo especial de hierbas y especias antes de ser cocinado a punto. Son visualmente atractivas y deliciosas — el bocadito perfecto para pasar en reuniones formales o informales. Tu mesa lucirá profesional y tus invitados quedarán encantados.",
    price: 30.0,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.0RoEyNC3y8L7BZP-vRcGBAHaEK?pid=Api&P=0&h=180",
    slug: "mini-brochetas",
    category: "bocaditos",
    emoji: "🥐",
    ingredients: [
      "Carne de res",
      "Pimiento",
      "Cebolla",
      "Tomate cherry",
      "Aderezo especial",
    ],
    serves: "6-8 personas",
  },
  {
    id: "16",
    name: "Alitas Brouchet",
    description: "Alitas en brocheta con aderezo especial.",
    longDescription:
      "La innovación que combina dos favoritos: las alitas crujientes de Sabor Charitos presentadas en formato brocheta para una experiencia más cómoda y elegante. Cada alita es deshuesada, marinada en nuestro aderezo especial de hierbas aromáticas y especias, luego cocinada a la perfección y montada en palillo. Son perfectas para eventos donde no quieres que tus invitados batalleen con los huesos, pero sí quieran ese sabor inconfundible de nuestras alitas.",
    price: 30.0,
    image:
      "https://img-global.cpcdn.com/recipes/4d9f6a649942709f/1200x630cq70/photo.jpg",
    slug: "alitas-brouchet",
    category: "bocaditos",
    emoji: "🥐",
    ingredients: ["Alitas de pollo", "Aderezo especial", "Hierbas frescas"],
    serves: "6-8 personas",
  },

  // ── 4. PASTELITOS ───────────────────────────────────────────
  {
    id: "17",
    name: "Pastelitos de Manzana",
    description: "Pastelitos dulces rellenos de manzana.",
    longDescription:
      "Un abrazo en forma de pastelito. Elaborados con masa hojaldre artesanal que se lamina a mano para lograr esas capas finas y crujientes que se separan al morderlo, revelando un relleno generoso de manzana cocinada con canela y azúcar hasta caramelizarse suavemente. El contraste entre la masa crocante y el relleno tierno y aromático es simplemente irresistible. Perfectos para el desayuno, la merienda o como postre ligero.",
    price: 2.5,
    image: "https://i.ytimg.com/vi/g0LCH0VovyY/maxresdefault.jpg",
    slug: "pastelitos-manzana",
    category: "pastelitos",
    emoji: "🧁",
    ingredients: ["Masa hojaldre", "Manzana", "Canela", "Azúcar"],
    serves: "1 unidad",
  },
  {
    id: "18",
    name: "Pañuelo",
    description: "Rellenos de pollo, carne y queso. Ideales para compartir.",
    longDescription:
      "El pañuelo es uno de los pastelitos más queridos de nuestra carta. Su masa artesanal, suave y ligeramente hojaldrada, se dobla en forma de triángulo para encerrar un relleno abundante que puede ser de pollo guisado, carne sazonada o queso derretido. Cada bocado es una combinación perfecta de masa tierna y relleno sabroso. Son ideales para llevar al trabajo, al colegio, o simplemente para tener a la mano cuando el antojo aparece.",
    price: 2.5,
    image: "https://i.ytimg.com/vi/PLK9gj5Q7LA/maxresdefault.jpg",
    slug: "panuelo",
    category: "pastelitos",
    emoji: "🥧",
    ingredients: ["Masa artesanal", "Pollo", "Carne", "Queso"],
    serves: "1 unidad",
  },
  {
    id: "19",
    name: "Brownie",
    description: "Brownie de chocolate húmedo y esponjoso.",
    longDescription:
      "Nuestro brownie individual es una pequeña obra maestra de la repostería casera. Preparado con chocolate bitter de calidad, mantequilla real y la cantidad exacta de harina para lograr esa textura que todos buscan: denso, húmedo y con ese interior fudgy que se resiste a secarse. Espolvoreado con azúcar impalpable para darle ese acabado elegante y un toque extra de dulzor. Un solo brownie es suficiente para satisfacer cualquier antojo de chocolate.",
    price: 2.5,
    image:
      "https://bakingamoment.com/wp-content/uploads/2016/10/IMG_8205-brownie-recipe.jpg",
    slug: "brownie",
    category: "pastelitos",
    emoji: "🥧",
    ingredients: [
      "Chocolate bitter",
      "Mantequilla",
      "Huevos",
      "Harina",
      "Azúcar impalpable",
    ],
    serves: "1 unidad",
  },
  {
    id: "20",
    name: "Botija",
    description: "Cono crocante relleno de manjar.",
    longDescription:
      "La botija es uno de esos dulces que despiertan nostalgia con solo verlos. Un cono de masa frita crocante y dorada, relleno hasta el tope con manjar blanco cremoso y suave preparado en casa. La combinación de texturas es lo que lo hace especial: el crujido de la masa al morderla y la suavidad sedosa del manjar que fluye hacia adentro. Un pastelito sencillo y honesto que representa todo lo que amamos de la repostería peruana tradicional.",
    price: 2.5,
    image:
      "https://confiterialuben.com/wp-content/uploads/2021/04/IMG_4664.png",
    slug: "botija",
    category: "pastelitos",
    emoji: "🥧",
    ingredients: ["Masa crocante", "Manjar blanco"],
    serves: "1 unidad",
  },
  {
    id: "21",
    name: "Empanada de Pollo",
    description: "Empanada artesanal rellena de pollo sazonado.",
    longDescription:
      "Empanada artesanal elaborada con una masa propia que logramos suave por dentro y ligeramente dorada por fuera al hornearse. El relleno de pollo es preparado cada mañana: pollo desmenuzado salteado con cebolla, ají amarillo y un toque de culantro que le da ese sabor peruano inconfundible. Cada empanada es sellada a mano con el repulgue tradicional. Un clásico que nunca falla y que siempre llena de satisfacción.",
    price: 2.5,
    image:
      "https://www.thespruceeats.com/thmb/cxDL8YLb5Eb2Jx3c_8i5ks-1eaA=/5927x3941/filters:fill(auto,1)/chicken-empanadas-de-pollo-3029662-hero-01-b9c7760ffda1421cabd946b9ab74ebc8.jpg",
    slug: "empanada-pollo",
    category: "pastelitos",
    emoji: "🥧",
    ingredients: [
      "Masa artesanal",
      "Pollo sazonado",
      "Cebolla",
      "Ají amarillo",
    ],
    serves: "1 unidad",
  },
  {
    id: "22",
    name: "Empanada de Carne",
    description: "Empanada artesanal rellena de carne sazonada.",
    longDescription:
      "La versión con carne de nuestra empanada artesanal es un clásico que nunca decepciona. Carne molida de res sazonada con cebolla, ajo, especias y aceitunas — un relleno con carácter y profundidad de sabor que se cocina lentamente para que todos los sabores se integren. Todo envuelto en nuestra masa artesanal de elaboración propia y horneado hasta lograr ese color dorado apetecible. Una empanada completa, sabrosa y hecha con dedicación.",
    price: 2.5,
    image: "https://assets.unileversolutions.com/recipes-v2/239857.jpg",
    slug: "empanada-carne",
    category: "pastelitos",
    emoji: "🥧",
    ingredients: ["Masa artesanal", "Carne molida", "Cebolla", "Aceitunas"],
    serves: "1 unidad",
  },
  {
    id: "23",
    name: "Empanada de Pizza",
    description: "Empanada rellena con sabor a pizza.",
    longDescription:
      "La unión de dos favoritos de todos los tiempos. Nuestra empanada de pizza tiene toda la esencia de una pizza italiana dentro de nuestra masa artesanal peruana. El relleno combina salsa de tomate cocinada a fuego lento, jamón en trozos, queso que se derrite completamente y orégano seco espolvoreado generosamente. Al morderla, el queso se estira y los sabores estallan exactamente como cuando comes una buena pizza. Innovadora, deliciosa y adictiva.",
    price: 2.5,
    image:
      "https://static.americadigital.com/wp-content/uploads/2021/02/america_digital_empanadas_de_pizza_faciles_2021-4.jpg",
    slug: "empanada-pizza",
    category: "pastelitos",
    emoji: "🥧",
    ingredients: [
      "Masa artesanal",
      "Salsa de tomate",
      "Jamón",
      "Queso",
      "Orégano",
    ],
    serves: "1 unidad",
  },
  {
    id: "24",
    name: "Orejitas",
    description: "Orejitas de hojaldre crujientes.",
    longDescription:
      "Las orejitas son ese dulce sencillo que enamora por su elegancia natural. Elaboradas con masa hojaldre laminada a mano, espolvoreada con azúcar y una pizca de canela, luego enrollada desde ambos lados hacia el centro para formar esa forma característica de corazón o mariposa. Al hornearse, el azúcar se carameliza sobre las capas de hojaldre creando una textura crujiente, acaramelada y ligeramente hojaldrada que se deshace en la boca. Perfectas con una taza de té o café.",
    price: 2.5,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.Ib3Qf3NncJRYeflPYPhLlAHaHa?pid=Api&P=0&h=180",
    slug: "orejitas",
    category: "pastelitos",
    emoji: "🥧",
    ingredients: ["Masa hojaldre", "Azúcar", "Canela"],
    serves: "1 unidad",
  },

  // ── 5. PIZZAS ───────────────────────────────────────────────
  {
    id: "25",
    name: "Pizza Pepperoni",
    description: "Salsa de tomate casera, mozzarella fresca y pepperoni.",
    longDescription:
      "Nuestra pizza pepperoni es un homenaje a la pizza clásica italiana hecha con el alma de una cocina casera. La masa se prepara cada día con harina de calidad, levadura natural y un tiempo de reposo que le da esa textura esponjosa por dentro y crujiente por fuera. La salsa de tomate es cocinada lentamente con ajo, albahaca y especias hasta lograr una concentración de sabor intensa. Cubierta con queso mozzarella que se funde en burbujas doradas y rodajas generosas de pepperoni ligeramente crujiente en los bordes. Una pizza honesta y deliciosa.",
    price: 28.0,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.424A1jgy2iF5wv8kXAfHTwHaD4?pid=Api&P=0&h=180",
    slug: "pizza-pepperoni",
    category: "pizzas",
    emoji: "🍕",
    ingredients: [
      "Masa artesanal",
      "Salsa de tomate casera",
      "Queso mozzarella",
      "Pepperoni",
      "Orégano",
    ],
    serves: "2-3 personas",
  },
  {
    id: "26",
    name: "Pizza Especial",
    description:
      "Jamón, piña y queso mozzarella. El equilibrio perfecto entre dulce y salado.",
    longDescription:
      "La Pizza Especial es para quienes no temen los contrastes. Sobre nuestra masa artesanal y salsa de tomate casera, colocamos generosas capas de queso mozzarella, jamón ahumado en trozos y piña natural fresca cortada al momento. La piña aporta un dulzor tropical y una jugosidad que equilibra perfectamente la salinidad del jamón y el queso. Al salir del horno, los bordes se doran, el queso burbujea y el aroma te conquista antes del primer bocado. Una combinación que divide al mundo — pero que todos terminan amando.",
    price: 32.0,
    image:
      "https://www.pizzapizza.cl/wp-content/uploads/2021/03/tocino-bbq-web-1024x686.jpg",
    slug: "pizza-especial",
    category: "pizzas",
    emoji: "🍕",
    ingredients: [
      "Masa artesanal",
      "Salsa de tomate",
      "Queso mozzarella",
      "Jamón",
      "Piña natural",
    ],
    serves: "2-3 personas",
  },

  // ── 6. KEKES ────────────────────────────────────────────────
  {
    id: "27",
    name: "Keke de Vainilla",
    description:
      "Esponjoso keke de vainilla con pasas y un toque de naranja fresca.",
    longDescription:
      "Nuestro Keke de Vainilla es la receta de toda la vida, guardada con cariño y preparada con los mejores ingredientes. Esponjoso, húmedo y con un aroma que llena la cocina desde que sale del horno. Preparado con vainilla natural de calidad, huevos frescos y mantequilla real, con pasas distribuidas uniformemente en cada rebanada y un toque sutil de ralladura de naranja fresca que le da un aroma cítrico irresistible. Un keke que sabe a hogar, a domingo y a los momentos más simples y felices.",
    price: 22.0,
    image:
      "https://statics.exitosanoticias.pe/2020/04/4e101e14f36c66aeb81b71f7523772d1.png",
    slug: "keke-vainilla",
    category: "kekes",
    emoji: "🎂",
    ingredients: [
      "Harina",
      "Huevos",
      "Esencia de vainilla",
      "Pasas",
      "Ralladura de naranja",
    ],
    serves: "8-10 porciones",
  },
  {
    id: "28",
    name: "Keke de Zanahoria",
    description:
      "Húmedo y denso, con chips de chocolate y cobertura de ganache.",
    longDescription:
      "No te dejes engañar por el nombre — el Keke de Zanahoria es uno de los postres más indulgentes de nuestra carta. La zanahoria rallada aporta humedad natural y un dulzor suave que hace la base perfecta para los chips de chocolate distribuidos en cada porción. La cobertura de ganache de chocolate negro, preparada con crema de leche caliente y chocolate de calidad, le da un acabado brillante y un contraste de sabor que lo eleva completamente. Húmedo, denso, chocolatoso y absolutamente irresistible.",
    price: 25.0,
    image:
      "https://cdn0.recetasgratis.net/es/posts/1/7/4/queque_de_zanahoria_11471_orig.jpg",
    slug: "keke-zanahoria",
    category: "kekes",
    emoji: "🍫",
    ingredients: [
      "Zanahoria rallada",
      "Harina",
      "Huevos",
      "Chips de chocolate",
      "Ganache de chocolate",
    ],
    serves: "8-10 porciones",
  },
  {
    id: "29",
    name: "Keke de Chocolate",
    description: "Húmedo keke de chocolate con glasé de azúcar.",
    longDescription:
      "Para los amantes del chocolate que no negocian intensidad. Nuestro Keke de Chocolate está elaborado con cacao en polvo de alta calidad que le da ese color oscuro profundo y ese sabor amargo-dulce tan característico. La textura es densa y húmeda gracias al balance perfecto entre grasa y líquidos en la receta. Coronado con un glasé de azúcar blanco que endulza los bordes y contrasta visualmente con el oscuro del keke. Cada rebanada es un momento de pura felicidad chocolatosa.",
    price: 22.0,
    image:
      "https://4.bp.blogspot.com/-jMy2CCGAo54/V9wgndH1ROI/AAAAAAAADTg/xWpkUsNZOTUvCYPmFiYUnRCVSyBDXLPkwCLcB/s1600/keke%2Bde%2Bchocolate.jpg",
    slug: "keke-chocolate",
    category: "kekes",
    emoji: "🍋",
    ingredients: [
      "Cacao en polvo",
      "Harina",
      "Huevos",
      "Mantequilla",
      "Glasé de azúcar",
    ],
    serves: "8-10 porciones",
  },
  {
    id: "30",
    name: "Cupcakes con chispas de chocolate",
    description: "Cupcakes esponjosos con chispas de chocolate.",
    longDescription:
      "Doce pequeñas torres de alegría. Nuestros cupcakes tienen una base de bizcocho esponjoso y suave elaborado con mantequilla real y vainilla natural, con chips de chocolate distribuidos en la masa para que cada bocado tenga ese sorpresivo toque chocolatoso. Coronados con un betún de vainilla cremoso y suave, aplicado en espiral para ese acabado visual que hace imposible no sonreír al verlos. Perfectos para cumpleaños, eventos o simplemente para endulzar cualquier día ordinario.",
    price: 22.0,
    image:
      "https://cdn.prod.website-files.com/6421ce75be42e6b8e2158e40/64c42bfde5a82ea793078f06_64bf559351e49298c6d7a874_Cupcakes_chispa_chocolate.jpeg",
    slug: "cupcakes-chocolate",
    category: "kekes",
    emoji: "🧁",
    ingredients: [
      "Harina",
      "Mantequilla",
      "Huevos",
      "Chips de chocolate",
      "Betún de vainilla",
    ],
    serves: "12 unidades",
  },

  // ── 7. HAMBURGUESAS ─────────────────────────────────────────
  {
    id: "31",
    name: "Hamburguesa Simple",
    description:
      "Carne 100% res, lechuga, tomate, queso cheddar y salsa de la casa.",
    longDescription:
      "A veces lo simple es lo mejor, y nuestra Hamburguesa Simple lo demuestra con creces. Una medallón de carne 100% res molida a diario, sazonada únicamente con sal y pimienta para que el sabor natural de la carne sea la estrella, cocinada al punto en plancha caliente. Colocada sobre pan brioche suave y ligeramente tostado, con una hoja de lechuga fresca y crocante, rodaja de tomate maduro, queso cheddar fundido encima y nuestra salsa especial de la casa. Sin adornos innecesarios — solo una gran hamburguesa.",
    price: 20.0,
    image:
      "https://img.hogar.mapfre.es/wp-content/uploads/2018/09/hamburguesa-sencilla.jpg",
    slug: "hamburguesa-simple",
    category: "hamburguesas",
    emoji: "🍔",
    ingredients: [
      "Carne 100% res",
      "Pan brioche",
      "Lechuga",
      "Tomate",
      "Queso cheddar",
      "Salsa de la casa",
    ],
    serves: "1 persona",
  },
  {
    id: "32",
    name: "Hamburguesa Royal",
    description:
      "Doble carne, doble queso cheddar, cebolla caramelizada y pepinillos.",
    longDescription:
      "La Hamburguesa Royal es para quienes no hacen las cosas a medias. Dos medallones de carne de res 100% natural apilados generosamente, cada uno cubierto con una rebanada de queso cheddar que se funde entre las capas de carne creando un efecto de queso derretido por todas partes. Completada con cebolla caramelizada a fuego lento hasta lograr esa textura suave y ese dulzor profundo, más pepinillos para el toque ácido que equilibra todo. Todo esto entre un pan brioche suave que aguanta cada capa sin desmoronarse.",
    price: 28.0,
    image:
      "https://i.pinimg.com/originals/43/21/f8/4321f82dbb317277e9e48be9d4b75404.png",
    slug: "hamburguesa-royal",
    category: "hamburguesas",
    emoji: "🍔",
    ingredients: [
      "Doble carne de res",
      "Pan brioche",
      "Doble queso cheddar",
      "Cebolla caramelizada",
      "Pepinillos",
    ],
    serves: "1 persona",
  },
  {
    id: "33",
    name: "Hamburguesa Royal con Jamón y Queso",
    description: "Hamburguesa royal con jamón, queso, lechuga, tomate y huevo.",
    longDescription:
      "Una hamburguesa que lo tiene todo. Sobre la base clásica de nuestra carne de res jugosa y pan brioche, añadimos láminas de jamón ahumado, queso fundido en capas, una hoja de lechuga crocante, rodaja de tomate fresco y un huevo frito con la yema ligeramente líquida que al romperse crea una salsa natural que impregna toda la hamburguesa. Cada bocado es una experiencia diferente dependiendo de qué capa protagonice. Abundante, satisfactoria y completamente irresistible.",
    price: 22.0,
    image:
      "https://viejodave.com.ar/wp-content/uploads/2024/02/hamburguesa-jamon-queso-lechuga-tomate-y-huevo-carne-01.jpg",
    slug: "hamburguesa-royal-jamon-queso",
    category: "hamburguesas",
    emoji: "🍗",
    ingredients: [
      "Carne de res",
      "Pan brioche",
      "Jamón",
      "Queso",
      "Lechuga",
      "Tomate",
      "Huevo",
    ],
    serves: "1 persona",
  },
  {
    id: "34",
    name: "Hamburguesa Doble con Tocino",
    description: "Doble carne con tocino crujiente y queso fundido.",
    longDescription:
      "La hamburguesa más contundente de nuestra carta, diseñada para los que no tienen miedo de un buen reto. Dos medallones de carne de res generosos y jugosos, con tiras de tocino crujiente ahumado que aportan un sabor profundo y salado a cada bocado, todo unido por queso fundido que fluye entre las capas. Nuestra salsa especial aporta el toque final que redondea todos los sabores. En pan brioche resistente y suave. Una hamburguesa que deja huella y que recuerdas mucho tiempo después.",
    price: 32.0,
    image:
      "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    slug: "hamburguesa-doble-tocino",
    category: "hamburguesas",
    emoji: "🍔",
    ingredients: [
      "Doble carne de res",
      "Pan brioche",
      "Tocino crujiente",
      "Queso fundido",
      "Salsa especial",
    ],
    serves: "1 persona",
  },

  // ── 8. TORTAS ───────────────────────────────────────────────
  {
    id: "35",
    name: "Torta de Tres Leches",
    description:
      "Bizcocho empapado en tres leches con crema chantilly y cerezas.",
    longDescription:
      "Nuestra Torta de Tres Leches es un ícono de la repostería latinoamericana llevado a su máxima expresión. El bizcocho se hornea esponjoso y ligero, luego se perfora cuidadosamente para que la mezcla de tres leches — leche entera, leche condensada y leche evaporada — penetre hasta el último rincón, creando una textura increíblemente húmeda que casi se deshace en la boca. Coronada con crema chantilly batida al momento y cerezas rojas brillantes. Una torta que emociona desde el primer bocado y que es perfecta para cualquier celebración.",
    price: 65.0,
    image: "https://i.blogs.es/4d76ad/pastel-tres-leches/1366_2000.jpg",
    slug: "torta-tres-leches",
    category: "tortas",
    emoji: "🎂",
    ingredients: [
      "Bizcocho esponjoso",
      "Leche entera",
      "Leche condensada",
      "Leche evaporada",
      "Crema chantilly",
      "Cerezas",
    ],
    serves: "12-15 porciones",
  },
  {
    id: "36",
    name: "Torta de Chocolate",
    description:
      "Capas de bizcocho de cacao con ganache de chocolate negro y fresas.",
    longDescription:
      "La Torta de Chocolate de Sabor Charitos es una declaración de amor para los amantes del cacao. Múltiples capas de bizcocho húmedo preparado con cacao en polvo de alta calidad, alternadas con capas de ganache de chocolate negro elaborado con crema de leche y chocolate premium. El exterior está cubierto con más ganache brillante que le da un acabado lujoso, decorado con fresas frescas que aportan acidez y color. Es densa, intensa y perfectamente equilibrada entre lo amargo y lo dulce. Ideal para cumpleaños o cualquier ocasión que merezca algo extraordinario.",
    price: 75.0,
    image:
      "https://www.chocolatto.co/wp-content/uploads/2020/07/IMG_0170-scaled.jpg",
    slug: "torta-chocolate",
    category: "tortas",
    emoji: "🍫",
    ingredients: [
      "Bizcocho de cacao",
      "Ganache de chocolate negro",
      "Fresas frescas",
      "Crema chantilly",
    ],
    serves: "12-15 porciones",
  },
  {
    id: "37",
    name: "Torta de Cumpleaños",
    description:
      "Esponjosa base de vainilla con crema, fresas frescas y mermelada artesanal.",
    longDescription:
      "Porque cada cumpleaños merece una torta que esté a la altura de la celebración. Nuestra Torta de Cumpleaños tiene una base de bizcocho de vainilla esponjoso y ligero, rellena generosamente con crema chantilly batida al momento y fresas frescas en rodajas bañadas en mermelada artesanal de fresa preparada en casa. El exterior está cubierto con crema suave y decorado con frutas frescas. La podemos personalizar con el mensaje que quieras. Una torta que sabe tan bien como se ve y que hace que cualquier cumpleaños sea memorable.",
    price: 70.0,
    image:
      "https://cocina-argentina.com/wp-content/uploads/monton-de-tortas-de-cumpleanos-decoradas-de-forma-creativa.jpg",
    slug: "torta-cumpleanos",
    category: "tortas",
    emoji: "🍓",
    ingredients: [
      "Base de vainilla",
      "Crema chantilly",
      "Fresas frescas",
      "Mermelada artesanal",
      "Decoración personalizada",
    ],
    serves: "12-15 porciones",
  },
  {
    id: "38",
    name: "Pie de Limón",
    description: "Pie de limón fresco con base crujiente y merengue dorado.",
    longDescription:
      "El Pie de Limón es uno de esos postres que conquistan a todos sin excepción. Nuestra base de galleta triturada con mantequilla forma una costra crocante y aromática que sostiene perfectamente el relleno de crema de limón — hecha con limones frescos exprimidos al momento, yemas de huevo y leche condensada — que tiene esa acidez brillante y refrescante que despierta el paladar. Coronado con merengue italiano batido hasta formar picos firmes y luego dorado ligeramente. Una experiencia completa de texturas y sabores que deja siempre con ganas de más.",
    price: 70.0,
    image: "https://cocinalocal.cl/wp-content/uploads/2021/08/pie-de-limon.jpg",
    slug: "pie-limon",
    category: "tortas",
    emoji: "🍋",
    ingredients: [
      "Base de galleta",
      "Crema de limón",
      "Merengue italiano",
      "Limón fresco",
    ],
    serves: "10-12 porciones",
  },

  // ── 9. BEBIDAS ──────────────────────────────────────────────
  {
    id: "39",
    name: "Vaso de Chicha Morada",
    description: "Chicha morada natural bien fría.",
    longDescription:
      "Nuestra chicha morada se prepara desde cero cada día con maíz morado cocido lentamente junto a cáscara de piña, membrillo, canela en rama y clavo de olor — la receta tradicional peruana sin atajos ni concentrados. El resultado es una bebida de color violeta intenso, con un sabor complejo que combina notas frutales, especiadas y un dulzor natural. Servida bien fría en vaso grande. Una bebida peruana de bandera que acompaña perfectamente cualquier plato de nuestra carta.",
    price: 4.0,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.-OolMh0-iBN61zk-AAVkzAHaHa?pid=Api&P=0&h=180",
    slug: "vaso-chicha-morada",
    category: "bebidas",
    emoji: "🥤",
    ingredients: [
      "Maíz morado",
      "Piña",
      "Membrillo",
      "Canela",
      "Clavo",
      "Azúcar de caña",
    ],
    serves: "1 vaso",
  },
  {
    id: "40",
    name: "Jarra de Chicha Morada",
    description: "Jarra de chicha morada natural para compartir.",
    longDescription:
      "La misma chicha morada natural que preparamos cada día, ahora en jarra para compartir con toda la mesa. Ideal para reuniones, almuerzos familiares o eventos donde quieres ofrecer algo tradicional y delicioso. La jarra rinde generosamente para cuatro o cinco vasos, y la puedes pedir con hielo para mantenerla fría durante toda la comida. Maíz morado, piña, membrillo, canela y clavo — nada más, nada menos. La chicha morada de Sabor Charitos es pura tradición peruana en cada sorbo.",
    price: 14.0,
    image:
      "https://www.lovferments.com/wp-content/uploads/2021/04/beb_chicha.jpg",
    slug: "jarra-chicha-morada",
    category: "bebidas",
    emoji: "🧃",
    ingredients: [
      "Maíz morado",
      "Piña",
      "Membrillo",
      "Canela",
      "Clavo",
      "Azúcar de caña",
    ],
    serves: "4-5 vasos",
  },
  {
    id: "41",
    name: "Vaso de Maracuyá",
    description: "Jugo de maracuyá natural con azúcar de caña.",
    longDescription:
      "El maracuyá es el rey de las frutas tropicales y nosotros lo tratamos con el respeto que merece. Nuestro jugo de maracuyá se prepara con pulpa de maracuyá fresco exprimido al momento, sin concentrados ni saborizantes artificiales. La acidez intensa y el aroma tropical característico del maracuyá se equilibran con la cantidad exacta de azúcar de caña para lograr una bebida refrescante, vibrante y perfectamente balanceada. Servida fría, es el complemento ideal para nuestro pollo, alitas o cualquier plato de la carta.",
    price: 5.0,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.j0dsgvo5Wi50xhsJKCrHjQHaFj?pid=Api&P=0&h=180",
    slug: "vaso-maracuya",
    category: "bebidas",
    emoji: "🥤",
    ingredients: ["Maracuyá natural", "Azúcar de caña", "Agua"],
    serves: "1 vaso",
  },
  {
    id: "42",
    name: "Jarra de Maracuyá",
    description: "Jarra de maracuyá natural para compartir.",
    longDescription:
      "Nuestra jarra de maracuyá es la compañía perfecta para una mesa completa. El mismo jugo natural de maracuyá fresco que preparamos al instante, ahora en formato familiar para compartir sin que nadie se quede sin su vaso. Cuatro o cinco porciones generosas de ese sabor tropical intenso, ácido y aromático que tanto encanta. La puedes pedir con hielo o sin hielo según tu preferencia. Perfecta para acompañar pedidos grandes de pollo broster, alitas o una variedad de bocaditos.",
    price: 16.0,
    image:
      "https://eldoradochicken.com/wp-content/uploads/2021/01/Jarra-maracuya.jpg",
    slug: "jarra-maracuya",
    category: "bebidas",
    emoji: "🫐",
    ingredients: ["Maracuyá natural", "Azúcar de caña", "Agua"],
    serves: "4-5 vasos",
  },

  // ── 10. A LA CARTA ──────────────────────────────────────────
  {
    id: "43",
    name: "Lomo Saltado",
    description:
      "Tiras de lomo fino salteadas con verduras, sillao y ají amarillo.",
    longDescription:
      "El Lomo Saltado es uno de los platos más emblemáticos de la gastronomía peruana y en Sabor Charitos lo preparamos con el orgullo que merece. Tiras de lomo fino de res salteadas a fuego alto en wok junto a cebolla en plumas, tomate en gajos, ají amarillo fresco y un buen chorro de sillao que genera ese humo aromático característico del plato. Todo en su punto exacto para que la carne quede tierna y las verduras mantengan su textura. Servido con papas fritas crujientes y arroz blanco graneado. Un plato que resume en sí mismo toda la riqueza de Lima.",
    price: 28.0,
    image:
      "https://cocina-casera.com/wp-content/uploads/2017/12/Lomosaltado2.jpg",
    slug: "lomo-saltado",
    category: "a-la-carta",
    emoji: "🍽️",
    ingredients: [
      "Lomo fino de res",
      "Cebolla",
      "Tomate",
      "Ají amarillo",
      "Sillao",
      "Papas fritas",
      "Arroz",
    ],
    serves: "1 persona",
  },
  {
    id: "44",
    name: "Churrasco con papas fritas y ensalada",
    description: "Churrasco a la parrilla con papas doradas y ensalada fresca.",
    longDescription:
      "Un corte de res generoso y de calidad, marinado durante horas en nuestra mezcla de hierbas, ajo y especias para que el sabor penetre bien antes de llegar a la parrilla caliente. El churrasco se cocina al punto solicitado — vuelta y vuelta o más cocido — logrando una costra sabrosa por fuera que sella los jugos adentro. Acompañado de papas fritas doradas y crujientes más una ensalada fresca de la casa. Y el toque final: chimichurri casero de hierbas verdes y ajo que eleva todo el plato a otro nivel.",
    price: 35.0,
    image:
      "https://www.smartienda.cl/smartwebsite/pruebas/7333/-20202183135.jpg",
    slug: "churrasco-papas-ensalada",
    category: "a-la-carta",
    emoji: "🥩",
    ingredients: [
      "Churrasco de res",
      "Papas fritas doradas",
      "Ensalada fresca",
      "Chimichurri",
    ],
    serves: "1 persona",
  },

  // ── 11. CHEESECAKES ─────────────────────────────────────────
  {
    id: "45",
    name: "Cheesecake de Oreo",
    description: "Deliciosa torta de cheesecake de Oreo.",
    longDescription:
      "El cheesecake de Oreo es el favorito absoluto de nuestra sección de postres y con razón. La base está hecha con galletas Oreo trituradas mezcladas con mantequilla, formando una costra oscura, crocante y con ese sabor inconfundible a cacao y crema. El relleno es una mezcla sedosa de queso crema batido con azúcar y crema de leche, con trozos de Oreo integrados que dan textura en cada bocado. La torta se refrigera hasta alcanzar esa consistencia firme pero cremosa que caracteriza al buen cheesecake. Decorada con galletas Oreo enteras encima. Un postre que nunca falla.",
    price: 35.0,
    image:
      "https://imgmedia.buenazo.pe/1200x660/buenazo/original/2021/12/10/61b42ee9a7c5372e257c4dee.jpg",
    slug: "cheesecake-oreo",
    category: "cheesecakes",
    emoji: "🍰",
    ingredients: [
      "Base de galleta Oreo",
      "Queso crema",
      "Crema de leche",
      "Galletas Oreo trituradas",
    ],
    serves: "10-12 porciones",
  },
  {
    id: "46",
    name: "Vaso de Cheesecake de Oreo",
    description: "Delicioso cheesecake de Oreo en vaso.",
    longDescription:
      "Toda la magia del Cheesecake de Oreo en formato individual y perfecto para comer en el momento. En el fondo del vaso encontrarás una capa de galleta Oreo triturada con mantequilla que aporta ese crujido inicial, seguida de una generosa capa de crema de cheesecake de Oreo suave y sedosa, y coronada con más galleta Oreo triturada por encima. La presentación en vaso permite ver cada capa claramente y hace que cada cucharada sea una experiencia completa. Frío, cremoso y absolutamente delicioso.",
    price: 12.0,
    image:
      "https://i.pinimg.com/originals/ec/1d/a9/ec1da9f95baccfad4ecfdf0576084a63.jpg",
    slug: "vaso-cheesecake-oreo",
    category: "cheesecakes",
    emoji: "🍰",
    ingredients: [
      "Base de galleta Oreo",
      "Queso crema",
      "Crema de leche",
      "Galletas Oreo",
    ],
    serves: "1 persona",
  },
  {
    id: "47",
    name: "Cheesecake de Fresa",
    description: "Deliciosa torta de cheesecake de fresa.",
    longDescription:
      "Fresco, frutal y visualmente precioso — el Cheesecake de Fresa es el postre perfecto para quienes buscan algo más ligero y aromático. Base de galleta crocante, relleno de queso crema batido con azúcar y crema de leche, incorporado con pulpa de fresa natural que tiñe la crema de un rosa suave y delicado. La cubierta lleva fresas frescas en rodajas bañadas con mermelada de fresa casera que les da un brillo apetitoso. Cada porción tiene el balance perfecto entre la suavidad del queso crema y la acidez fresca de la fresa.",
    price: 35.0,
    image:
      "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/strawberry-topped-cheesecake.jpg",
    slug: "cheesecake-fresa",
    category: "cheesecakes",
    emoji: "🍰",
    ingredients: [
      "Base de galleta",
      "Queso crema",
      "Fresas frescas",
      "Mermelada de fresa",
      "Crema de leche",
    ],
    serves: "10-12 porciones",
  },
  {
    id: "48",
    name: "Vaso de Cheesecake de Fresa",
    description: "Delicioso cheesecake de fresa en vaso.",
    longDescription:
      "El encanto del Cheesecake de Fresa en una presentación individual elegante y práctica. Capas perfectamente visibles desde el exterior del vaso: primero la base crocante de galleta con mantequilla, luego la crema de queso con fresa naturalmente rosada y aromática, y coronada con trozos de fresa fresca y un hilo de mermelada artesanal. Es ideal para llevar, para eventos o simplemente para darte ese antojo sin necesidad de cortar una torta entera. Refrescante, cremoso y lleno de sabor frutal.",
    price: 12.0,
    image: "https://i.ytimg.com/vi/Tkh8tLrD2Vc/maxresdefault.jpg",
    slug: "vaso-cheesecake-fresa",
    category: "cheesecakes",
    emoji: "🍰",
    ingredients: [
      "Base de galleta",
      "Queso crema",
      "Fresas frescas",
      "Mermelada de fresa",
    ],
    serves: "1 persona",
  },
  {
    id: "49",
    name: "Cheesecake de Maracuyá",
    description: "Deliciosa torta de cheesecake de maracuyá.",
    longDescription:
      "La versión más tropical y vibrante de nuestros cheesecakes. La pulpa de maracuyá fresco aporta una acidez intensa y un aroma exótico que transforma completamente la cremosidad del queso crema, creando un contraste de sabores que es imposible olvidar. La base de galleta crocante equilibra la intensidad del relleno, y la cubierta de gel de maracuyá brillante le da un acabado visual espectacular con ese color amarillo dorado característico. Si buscas un postre que sorprenda y deleite a partes iguales, este es el indicado.",
    price: 35.0,
    image:
      "https://i.pinimg.com/originals/70/30/a5/7030a5ef749bcc4daf5c082a4d5eb9a3.jpg",
    slug: "cheesecake-maracuya",
    category: "cheesecakes",
    emoji: "🍰",
    ingredients: [
      "Base de galleta",
      "Queso crema",
      "Pulpa de maracuyá",
      "Crema de leche",
      "Azúcar",
    ],
    serves: "10-12 porciones",
  },
  {
    id: "50",
    name: "Vaso de Cheesecake de Maracuyá",
    description: "Delicioso cheesecake de maracuyá en vaso.",
    longDescription:
      "Todo el sabor tropical e intenso del Cheesecake de Maracuyá presentado en un vaso elegante para disfrutar al instante. La capa de base crocante en el fondo, seguida de la crema de queso con maracuyá de ese color amarillo dorado vibrante, y coronada con un generoso chorro de coulis de maracuyá fresco que aporta acidez brillante al último bocado. El vaso individual es perfecto para regalos, mesas de postres o simplemente para llevar tu postre favorito a donde quieras. Tropical, cremoso e irresistible.",
    price: 12.0,
    image:
      "https://laprimavera.store/wp-content/uploads/2023/10/Imagen-de-WhatsApp-2024-03-18-a-las-22.43.00_27bb3549_11zon-e1712950280587.webp",
    slug: "vaso-cheesecake-maracuya",
    category: "cheesecakes",
    emoji: "🍰",
    ingredients: [
      "Base de galleta",
      "Queso crema",
      "Pulpa de maracuyá",
      "Crema de leche",
    ],
    serves: "1 persona",
  },
];

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
        <h1 className="font-display text-4xl text-orange-700">
          Producto no encontrado
        </h1>
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
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        slug: product.slug,
      });
    }
    toast.success(`${product.name} agregado al carrito`, {
      icon: "🛒",
      style: { background: "#059669", color: "#fff" },
    });
    setAdding(false);
  };

  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-2">
        <nav className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-orange-600">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-orange-600">
            Productos
          </Link>
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
            <h1 className="font-display text-4xl md:text-5xl text-orange-700 mb-3">
              {product.name}
            </h1>
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              {product.longDescription}
            </p>

            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Incluye
              </p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="bg-orange-50 text-orange-700 border border-orange-200 text-xs px-3 py-1 rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              🍽️ Rinde para: <strong>{product.serves}</strong>
            </p>

            <div className="flex items-center gap-6 mb-6">
              <span className="font-display text-4xl text-orange-700">
                S/ {(product.price * qty).toFixed(2)}
              </span>
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 rounded-full bg-white shadow text-orange-700 font-bold hover:bg-orange-100 transition"
                >
                  −
                </button>
                <span className="w-6 text-center font-semibold">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-7 h-7 rounded-full bg-white shadow text-orange-700 font-bold hover:bg-orange-100 transition"
                >
                  +
                </button>
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
            <h2 className="font-display text-3xl text-orange-700 mb-6">
              También te puede gustar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/productos/${p.slug}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex items-center gap-4"
                >
                  <span className="text-4xl">{p.emoji}</span>
                  <div>
                    <h3 className="font-display text-xl text-orange-700">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      S/ {p.price.toFixed(2)}
                    </p>
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
