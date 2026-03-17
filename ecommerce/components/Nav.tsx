"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import CartSidebar from "./CartSidebar";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/categorias", label: "Categorías" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(26,10,0,0.08)]"
          : "bg-white/90 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2 group flex-shrink-0 min-w-0"
          >
            <div className="relative flex-shrink-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-[0_4px_12px_rgba(234,88,12,0.35)] group-hover:shadow-[0_6px_20px_rgba(234,88,12,0.45)] transition-all duration-300 group-hover:scale-105">
                <span className="text-base sm:text-xl">🍗</span>
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full border-2 border-white animate-pulse-warm" />
            </div>
            <div className="min-w-0">
              <p className="font-display text-base sm:text-xl text-orange-800 leading-none tracking-tight truncate">
                Sabor Charitos
              </p>
              <p className="text-[9px] sm:text-[10px] text-orange-400 font-medium tracking-widest uppercase leading-none mt-0.5 truncate">
                El Sabor que enamora
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav links ── */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-stone-600 hover:text-orange-700 transition-colors duration-200 rounded-xl hover:bg-orange-50 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:w-4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* ── Right: carrito + hamburger ── */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <CartSidebar />
            {/* Hamburger — visible en < lg */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-600 hover:text-orange-700 hover:bg-orange-50 transition-all flex-shrink-0"
              aria-label="Menú"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-orange-100 bg-white/95 backdrop-blur-md animate-fade-up">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl text-stone-700 hover:text-orange-700 hover:bg-orange-50 font-medium transition-all text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
