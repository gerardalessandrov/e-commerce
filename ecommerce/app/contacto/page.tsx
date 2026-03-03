"use client";

import { useState } from "react";
import toast from "react-hot-toast";

// ── NÚMEROS DE WHATSAPP ────────────────────────────────────────
const WHATSAPP_PEDIDOS   = "51973474568"; // 👈 Número para pedidos / delivery
const WHATSAPP_CONSULTAS = "51900048096"; // 👈 Número para consultas generales

export default function ContactoPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    setSending(true);
    const texto = `🛒 *Nuevo mensaje desde la web*\n\n👤 *Nombre:* ${form.name}\n📱 *Teléfono:* ${form.phone}\n\n💬 *Mensaje:*\n${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_CONSULTAS}?text=${encodeURIComponent(texto)}`, "_blank");
    toast.success("¡Redirigiendo a WhatsApp! 🎉");
    setForm({ name: "", phone: "", message: "" });
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">Contáctanos</h1>
          <p className="text-orange-100 text-lg">Estamos aquí para atenderte</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ── COLUMNA IZQUIERDA: INFO + BOTONES ── */}
        <div>
          <h2 className="font-display text-3xl text-orange-700 mb-8">Información de Contacto</h2>

          {/* Tarjetas de info */}
          <div className="space-y-4 mb-8">
            {[
              { icon: "📍", title: "Dirección",  value: "Jr. Los Sauces 123",       sub: "Lima, Perú" },
              { icon: "🕐", title: "Horario",    value: "Lunes a Domingo",          sub: "9:00 AM - 9:00 PM" },
              { icon: "📧", title: "Email",      value: "bocaditos@ejemplo.com",    sub: "Respondemos en 24h" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-orange-700">{item.title}</p>
                  <p className="text-gray-800 font-medium">{item.value}</p>
                  <p className="text-gray-500 text-sm">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── SECCIÓN DE WHATSAPP ── */}
          <h3 className="font-display text-2xl text-orange-700 mb-4">WhatsApp</h3>

          <div className="flex flex-col gap-3">

            {/* Botón Pedidos / Delivery */}
            <a
              href={`https://wa.me/${WHATSAPP_PEDIDOS}?text=${encodeURIComponent(
                "🛒 Hola! Quiero hacer un pedido:\n\n📝 Producto: \n📍 Dirección: \n📱 Nombre: "
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
            >
              <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-base leading-tight">🚚 Pedidos &amp; Delivery</p>
                <p className="text-green-100 text-xs font-normal mt-0.5">
                  +{WHATSAPP_PEDIDOS} · Lunes a Domingo 9am–9pm
                </p>
              </div>
            </a>

            {/* Botón Consultas Generales */}
            <a
              href={`https://wa.me/${WHATSAPP_CONSULTAS}?text=${encodeURIComponent(
                "👋 Hola! Tengo una consulta:"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white hover:bg-green-50 border-2 border-green-400 text-green-700 font-bold py-4 px-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
            >
              <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-base leading-tight">💬 Consultas Generales</p>
                <p className="text-green-500 text-xs font-normal mt-0.5">
                  +{WHATSAPP_CONSULTAS} · Lunes a Domingo 9am–9pm
                </p>
              </div>
            </a>

          </div>
        </div>

        {/* ── COLUMNA DERECHA: FORMULARIO ── */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="font-display text-3xl text-orange-700 mb-6">Envíanos un Mensaje</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tu nombre</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="María García"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono / WhatsApp</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+51 999 999 999"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hola, quisiera hacer un pedido para..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={sending}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-75"
            >
              {sending ? "Abriendo WhatsApp..." : "Enviar por WhatsApp 📲"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}