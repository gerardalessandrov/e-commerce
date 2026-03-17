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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 50;
          font-family: 'DM Sans', sans-serif;
        }

        .nav-bar {
          background: rgba(255, 252, 248, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(234, 88, 12, 0.08);
          transition: box-shadow 0.35s ease, background 0.35s ease;
        }

        .nav-bar.scrolled {
          background: rgba(255, 252, 248, 0.99);
          box-shadow: 0 1px 0 rgba(234,88,12,0.06), 0 8px 32px rgba(120,40,0,0.07);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 68px;
          display: flex;
          align-items: center;
          gap: 0;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex: 1;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        /* ── Logo ── */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          box-shadow: 0 4px 14px rgba(234,88,12,0.30);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .logo-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%);
          border-radius: inherit;
        }

        .logo-link:hover .logo-icon {
          transform: translateY(-1px) rotate(-3deg);
          box-shadow: 0 6px 20px rgba(234,88,12,0.38);
        }

        .logo-dot {
          width: 7px;
          height: 7px;
          background: #fbbf24;
          border-radius: 50%;
          position: absolute;
          top: -2px;
          right: -2px;
          border: 2px solid rgba(255,252,248,0.97);
        }

        .logo-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .logo-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #92400e;
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .logo-tagline {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f97316;
          line-height: 1;
          opacity: 0.85;
        }

        /* ── Desktop Nav ── */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 0.125rem;
        }

        .nav-link {
          position: relative;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 400;
          color: #57534e;
          text-decoration: none;
          border-radius: 10px;
          letter-spacing: 0.01em;
          transition: color 0.2s ease, background 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, #f97316, #dc2626);
          border-radius: 99px;
          transition: width 0.25s cubic-bezier(0.4,0,0.2,1);
        }

        .nav-link:hover {
          color: #c2410c;
          background: rgba(234,88,12,0.05);
        }

        .nav-link:hover::after {
          width: 18px;
        }

        /* ── Right Actions ── */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        /* Cart button override — wrap CartSidebar with this class on parent */
        .cart-btn-wrap button,
        .cart-btn-wrap a {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1.1rem 0.5rem 0.9rem;
          background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
          color: white !important;
          font-size: 0.8125rem;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.01em;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(234,88,12,0.28);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          text-decoration: none;
        }

        .cart-btn-wrap button:hover,
        .cart-btn-wrap a:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 18px rgba(234,88,12,0.38);
          filter: brightness(1.05);
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          padding: 0.5rem;
          border-radius: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #78716c;
          transition: color 0.2s, background 0.2s;
        }

        .hamburger:hover {
          color: #c2410c;
          background: rgba(234,88,12,0.06);
        }

        .hamburger-lines {
          width: 20px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .hamburger-line {
          display: block;
          height: 1.5px;
          background: currentColor;
          border-radius: 99px;
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
        }

        .hamburger-line.open-1 { transform: rotate(45deg) translate(4.5px, 4.5px); }
        .hamburger-line.open-2 { opacity: 0; transform: scaleX(0); }
        .hamburger-line.open-3 { transform: rotate(-45deg) translate(4.5px, -4.5px); }

        /* ── Divider ── */
        .nav-divider {
          width: 1px;
          height: 20px;
          background: rgba(120,80,0,0.12);
          flex-shrink: 0;
        }

        /* ── Mobile menu ── */
        .mobile-nav {
          border-top: 1px solid rgba(234,88,12,0.07);
          padding: 0.75rem 0 1rem;
          animation: slideDown 0.22s cubic-bezier(0.4,0,0.2,1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-size: 0.9375rem;
          font-weight: 400;
          color: #57534e;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }

        .mobile-link:hover {
          color: #c2410c;
          background: rgba(234,88,12,0.05);
        }

        /* ── Responsive ── */
        @media (max-width: 767px) {
          .desktop-nav { display: none; }
          .hamburger { display: flex; }
          .nav-divider { display: none; }
        }

        @media (min-width: 768px) {
          .mobile-nav { display: none; }
        }
      `}</style>

      <header className="nav-root">
        <div className={`nav-bar${scrolled ? " scrolled" : ""}`}>
          <div className="nav-inner">
            {/* Left: Logo + Nav links together */}
            <div className="nav-left">
              <Link href="/" className="logo-link">
                <div className="logo-icon" style={{ position: "relative" }}>
                  <span>🍗</span>
                  <div className="logo-dot" />
                </div>
                <div className="logo-text-wrap">
                  <span className="logo-name">Sabor Charitos</span>
                  <span className="logo-tagline">El Sabor que enamora</span>
                </div>
              </Link>

              <nav className="desktop-nav" aria-label="Navegación principal">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right: Cart + Hamburger */}
            <div className="nav-right">
              <div className="nav-divider" />
              <div className="cart-btn-wrap">
                <CartSidebar />
              </div>
              <button
                className="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menú"
                aria-expanded={isMenuOpen}
              >
                <div className="hamburger-lines">
                  <span
                    className={`hamburger-line${isMenuOpen ? " open-1" : ""}`}
                  />
                  <span
                    className={`hamburger-line${isMenuOpen ? " open-2" : ""}`}
                  />
                  <span
                    className={`hamburger-line${isMenuOpen ? " open-3" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="nav-bar mobile-nav">
            <div className="mobile-nav-inner">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
