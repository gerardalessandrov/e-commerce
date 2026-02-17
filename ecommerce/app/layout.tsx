import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import { Toaster } from "react-hot-toast";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap',
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bocaditos & Más - Tienda Online",
  description: "Los mejores bocaditos, pollo broster, alitas y pastelitos de la ciudad. Pedidos online con entrega a domicilio.",
  keywords: ["bocaditos", "pollo broster", "alitas", "pastelitos", "delivery", "comida peruana"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${bebasNeue.variable} ${poppins.variable} font-body antialiased`}>
        <Nav />
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
              fontFamily: 'Poppins, sans-serif',
            },
            success: {
              style: {
                background: '#059669',
              },
            },
            error: {
              style: {
                background: '#dc2626',
              },
            },
          }}
        />
      </body>
    </html>
  );
}