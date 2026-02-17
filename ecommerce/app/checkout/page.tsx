"use client";

import { useCartStore } from "@/lib/store/cartStore";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const getTotalPrice = useCartStore((s) => s.getTotalPrice);
  const clearCart = useCartStore((s) => s.clearCart);

  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="min-h-screen flex items-center justify-center bg-orange-50"><div className="text-6xl animate-pulse">💳</div></div>;

  const total = getTotalPrice();

  const handleOrder = () => {
    if (!form.name || !form.phone) return alert("Por favor completa nombre y teléfono");
    const lines = items.map(i => `• ${i.name} x${i.quantity} = S/ ${(i.price * i.quantity).toFixed(2)}`).join("\n");
    const msg = `🛒 *Nuevo Pedido*\n\n👤 *Nombre:* ${form.name}\n📱 *Teléfono:* ${form.phone}\n📍 *Dirección:* ${form.address || "Por definir"}\n\n*Productos:*\n${lines}\n\n💰 *Total: S/ ${total.toFixed(2)}*\n\n📝 *Notas:* ${form.notes || "Ninguna"}`;
    window.open(`https://wa.me/51900048096?text=${encodeURIComponent(msg)}`, "_blank");
    clearCart();
    router.push("/checkout/confirmacion");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl text-white">Finalizar Pedido</h1>
          <p className="text-orange-100 mt-1">Completa tus datos y te contactamos por WhatsApp</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6">
          <h2 className="font-bold text-gray-800 text-xl mb-5">Tus datos</h2>
          <div className="space-y-4">
            {[
              { key: "name", label: "Nombre completo", placeholder: "María García", type: "text" },
              { key: "phone", label: "WhatsApp / Teléfono", placeholder: "+51 999 999 999", type: "tel" },
              { key: "address", label: "Dirección de entrega", placeholder: "Jr. Los Sauces 123, Lima", type: "text" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} value={(form as any)[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Notas adicionales</label>
              <textarea placeholder="Sin cebolla, extra salsa..." rows={3} value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 resize-none" />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 mb-4">
            <h2 className="font-bold text-gray-800 text-xl mb-4">Tu pedido</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.name} × {item.quantity}</span>
                  <span className="font-semibold text-gray-800">S/ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-dashed border-orange-200 mt-4 pt-4 flex justify-between items-center">
              <span className="font-bold text-gray-700">Total</span>
              <span className="font-bold text-3xl text-orange-600">S/ {total.toFixed(2)}</span>
            </div>
          </div>
          <button onClick={handleOrder}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar Pedido por WhatsApp
          </button>
          <Link href="/cart" className="block text-center text-gray-500 text-sm hover:text-orange-600 mt-3">← Volver al carrito</Link>
        </div>
      </div>
    </div>
  );
}