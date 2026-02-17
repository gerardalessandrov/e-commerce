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
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    
    // Simular delay para mejor UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });
    
    toast.success(`${product.name} agregado al carrito`, {
      duration: 2000,
      position: 'bottom-right',
      icon: '🛒',
      style: {
        background: '#059669',
        color: '#fff',
      },
    });
    
    setIsAdding(false);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeIn 0.5s ease-in forwards',
        opacity: 0,
      }}
    >
      <Link href={`/productos/${product.slug}`}>
        <div className="relative h-64 bg-gradient-to-br from-orange-100 to-amber-100 overflow-hidden">
          {/* Placeholder para imagen */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl opacity-30 transform group-hover:scale-110 transition-transform duration-300">
              🍗
            </span>
          </div>
          
          {/* Badge de precio */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg transform group-hover:scale-110 transition-transform">
            S/ {product.price.toFixed(2)}
          </div>

          {/* Overlay en hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/productos/${product.slug}`}>
          <h3 className="font-display text-2xl text-orange-700 mb-2 group-hover:text-orange-800 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        </Link>

        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ${
            isAdding ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isAdding ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Agregando...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Agregar al Carrito
            </span>
          )}
        </button>
      </div>
    </div>
  );
}