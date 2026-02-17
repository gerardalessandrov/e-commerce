"use client";

import { useCartStore } from "@/lib/store/cartStore";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);
  const getTotalItems = useCartStore((s) => s.getTotalItems);
  const getTotalPrice = useCartStore((s) => s.getTotalPrice);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="min-h-screen flex items-center justify-center bg-orange-50"><div className="text-6xl animate-pulse">🛒</div></div>;

  const total = getTotalPrice();
  const count = getTotalItems();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-10 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium hidden sm:inline">Volver</span>
          </button>
          <div className="h-5 w-px bg-white/30 hidden sm:block" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-none">Mi Carrito</h1>
            <p className="text-orange-100 text-sm mt-1">{count === 0 ? "Vacío" : `${count} producto${count !== 1 ? "s" : ""}`}</p>
          </div>
          <div className="ml-auto text-4xl">🛒</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-6">
            <div className="text-8xl animate-bounce">🛒</div>
            <h2 className="text-2xl font-bold text-gray-600">Tu carrito está vacío</h2>
            <p className="text-gray-400 text-center max-w-xs">Aún no has agregado ningún producto. ¡Explora nuestro menú!</p>
            <Link href="/" className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">Ver productos →</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-700 text-lg">Productos</h2>
                <button onClick={() => clearCart?.()} className="text-xs text-red-400 hover:text-red-600 underline">Vaciar carrito</button>
              </div>
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-orange-100 p-4 flex gap-4 hover:shadow-md transition-shadow group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-100 rounded-xl overflow-hidden flex-shrink-0">
                    {item.image?.startsWith("http") ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl">🍗</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-bold text-gray-800 text-sm sm:text-base leading-tight line-clamp-2 flex-1">{item.name}</p>
                      <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-500 transition-colors p-1 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <p className="text-orange-500 font-semibold text-sm mt-1">S/ {item.price.toFixed(2)} <span className="text-gray-400 font-normal">c/u</span></p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1 bg-orange-50 border border-orange-200 rounded-full px-1 py-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 bg-white shadow-sm rounded-full text-orange-700 font-bold flex items-center justify-center hover:bg-orange-100 transition">−</button>
                        <span className="text-sm font-bold w-6 text-center text-gray-700">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 bg-white shadow-sm rounded-full text-orange-700 font-bold flex items-center justify-center hover:bg-orange-100 transition">+</button>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Subtotal</p>
                        <p className="font-bold text-gray-800">S/ {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-5 sticky top-4">
                <h2 className="font-bold text-gray-800 text-lg mb-4">Resumen del pedido</h2>
                <div className="space-y-2 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm text-gray-500">
                      <span className="truncate flex-1 mr-2">{item.name} x{item.quantity}</span>
                      <span className="font-medium text-gray-700 flex-shrink-0">S/ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-dashed border-orange-200 my-4" />
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600 font-semibold">Total</span>
                  <span className="text-4xl font-bold text-orange-600">S/ {total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-400 mb-5">{count} producto{count !== 1 ? "s" : ""}</p>
                <div className="bg-orange-50 rounded-xl px-4 py-3 mb-5 flex items-start gap-2">
                  <span className="text-lg">🚚</span>
                  <div>
                    <p className="text-xs font-semibold text-orange-700">Delivery por WhatsApp</p>
                    <p className="text-xs text-orange-500">Coordinamos el envío contigo</p>
                  </div>
                </div>
                <Link href="/checkout" className="block w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 rounded-2xl text-center transition-all hover:scale-[1.02] shadow-lg mb-3">
                  Proceder al Pago →
                </Link>
                <Link href="/" className="block w-full text-center text-gray-500 text-sm hover:text-orange-600 transition-colors py-2">← Seguir comprando</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}