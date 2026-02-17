"use client";

import Link from "next/link";
import { useState } from "react";


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">🍗</span>
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl text-orange-700 leading-none">
                Bocaditos & Más
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Sabor que enamora</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link 
              href="/productos" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Productos
            </Link>
            <Link 
              href="/categorias" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Categorías
            </Link>
            <Link 
              href="/nosotros" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Nosotros
            </Link>
            <Link 
              href="/contacto" 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Contacto
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* <CartButton /> */}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-orange-50 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/productos" 
                className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-orange-50 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link 
                href="/categorias" 
                className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-orange-50 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorías
              </Link>
              <Link 
                href="/nosotros" 
                className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-orange-50 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/contacto" 
                className="text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-orange-50 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}