import Link from "next/link";

export default function ConfirmacionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 px-4 text-center">
      <div className="text-8xl mb-6 animate-bounce">🎉</div>
      <h1 className="font-display text-5xl text-green-700 mb-3">¡Pedido Enviado!</h1>
      <p className="text-gray-600 text-lg max-w-md mb-8">Tu pedido fue enviado por WhatsApp. Nos pondremos en contacto contigo muy pronto para coordinar la entrega.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          Volver al inicio
        </Link>
        <Link href="/productos" className="border-2 border-orange-600 text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all">
          Seguir comprando
        </Link>
      </div>
    </div>
  );
}