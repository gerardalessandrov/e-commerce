"use client";

import { useCartStore } from "@/lib/store/cartStore";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CartSidebar() {
  const [mounted, setMounted] = useState(false);

  const items = useCartStore((s) => s.items);
  const getTotalItems = useCartStore((s) => s.getTotalItems);

  useEffect(() => { setMounted(true); }, []);

  // Antes de montar: botón sin badge (evita error de hidratación)
  if (!mounted) {
    return (
      <Link
        href="/cart"
        className="relative flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="hidden sm:inline">Carrito</span>
      </Link>
    );
  }

  // Ya montado: count disponible con seguridad
  const count = getTotalItems();

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:scale-105 transition-transform"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span className="hidden sm:inline">Carrito</span>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 text-orange-900 text-xs font-bold rounded-full flex items-center justify-center shadow">
          {count}
        </span>
      )}
    </Link>
  );
}