export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center h-full px-16 text-white">
        <h1 className="text-6xl font-bold leading-tight max-w-2xl">
          Creación tienda online ecommerce
          <br />
          Charitos Repostería
        </h1>

        <button className="mt-8 w-40 border border-white py-2 rounded-full hover:bg-white hover:text-black transition">
          Reservar
        </button>
      </div>
    </section>
  );
}
