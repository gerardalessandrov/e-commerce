"use client";

import { useCartStore } from "@/lib/store/cartStore";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CartSidebar() {
  const [mounted, setMounted] = useState(false);
  const getTotalItems = useCartStore((s) => s.getTotalItems);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <Link
        href="/cart"
        className="relative flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-2xl font-semibold text-sm shadow-[0_4px_14px_rgba(234,88,12,0.3)]"
      >
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="hidden sm:inline">Carrito</span>
      </Link>
    );
  }

  const count = getTotalItems();

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 py-2.5 rounded-2xl font-semibold text-sm shadow-[0_4px_14px_rgba(234,88,12,0.3)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.4)] hover:scale-[1.03] active:scale-95 transition-all duration-200"
    >
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span className="hidden sm:inline">Carrito</span>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 min-w-[20px] h-5 bg-yellow-400 text-orange-900 text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-md border-2 border-white">
          {count}
        </span>
      )}
    </Link>
  );
}