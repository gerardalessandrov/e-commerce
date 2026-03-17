"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [imgError, setImgError] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });
    toast.success(`${product.name} agregado al carrito`, {
      duration: 2000,
      position: "bottom-right",
      icon: "🛒",
      style: { background: "#059669", color: "#fff" },
    });
    setIsAdding(false);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 flex flex-col"
      style={{
        animationDelay: `${delay}ms`,
        animation: "fadeIn 0.5s ease-in forwards",
        opacity: 0,
      }}
    >
      {/* ── Imagen ── */}
      <Link href={`/productos/${product.slug}`} className="block">
        <div className="relative h-56 bg-gradient-to-br from-orange-100 to-amber-100 overflow-hidden">
          {!imgError && product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                🍗
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
            S/ {product.price.toFixed(2)}
          </div>
        </div>
      </Link>

      {/* ── Contenido: flex-col para que el botón quede siempre abajo ── */}
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/productos/${product.slug}`}>
          <h3 className="font-display text-2xl text-orange-700 mb-1 group-hover:text-orange-800 transition-colors line-clamp-1">
            {product.name}
          </h3>
          {/* flex-1 hace que esta sección crezca y empuje el botón al fondo */}
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed flex-1 min-h-[2.5rem]">
            {product.description}
          </p>
        </Link>

        {/* El botón siempre queda al fondo gracias al mt-auto */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`mt-auto w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ${
            isAdding ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isAdding ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Agregando...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Agregar al Carrito
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
