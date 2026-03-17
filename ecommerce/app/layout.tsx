import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Toaster } from "react-hot-toast";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bocaditos & Más - Tienda Online",
  description:
    "Los mejores bocaditos, pollo broster, alitas, pizzas, hamburguesas y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${bebasNeue.variable} ${poppins.variable} font-body antialiased`}
      >
        <Nav />
        {/* pt-20 compensa la altura del nav fixed (h-20 = 80px) */}
        <main className="min-h-screen ">{children}</main>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: { background: "#363636", color: "#fff" },
            success: { style: { background: "#059669" } },
            error: { style: { background: "#dc2626" } },
          }}
        />
      </body>
    </html>
  );
}
