"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import CartSidebar from "./CartSidebar";

const links = [
  { href: "/",          label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/categorias",label: "Categorías" },
  { href: "/nosotros",  label: "Nosotros" },
  { href: "/contacto",  label: "Contacto" },
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
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-[0_4px_12px_rgba(234,88,12,0.35)] group-hover:shadow-[0_6px_20px_rgba(234,88,12,0.45)] transition-all duration-300 group-hover:scale-105">
                <span className="text-xl">🍗</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse-warm" />
            </div>
            <div>
              <p className="font-display text-xl text-orange-800 leading-none tracking-tight">Sabor Charitos</p>
              <p className="text-[10px] text-orange-400 font-medium tracking-widest uppercase leading-none mt-0.5">El Sabor que enamora</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-stone-600 hover:text-orange-700 transition-colors duration-200 rounded-xl hover:bg-orange-50 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:w-4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <CartSidebar />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-stone-600 hover:text-orange-700 hover:bg-orange-50 transition-all"
              aria-label="Menú"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-orange-100 animate-fade-up">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-700 hover:text-orange-700 hover:bg-orange-50 font-medium transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}