"use client";

import Link from "next/link";

interface CategoryCardProps {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  color: string;
  image: string;
}

export default function CategoryCard({
  name,
  slug,
  icon,
  description,
  color,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={`/categorias/${slug}`}
      className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
    >
      {/* Imagen con overlay */}
      <div className="relative h-36 sm:h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 group-hover:opacity-70 transition-opacity`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl sm:text-5xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
        </div>
      </div>

      {/* Texto */}
      <div className="p-3 sm:p-4 text-center">
        <h3 className="font-display text-lg sm:text-2xl text-orange-700 mb-1 group-hover:text-orange-800 leading-tight">
          {name}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm mb-3 line-clamp-1">
          {description}
        </p>
        <div className="inline-flex items-center text-orange-600 text-xs sm:text-sm font-semibold group-hover:text-orange-700">
          Ver productos
          <svg
            className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
