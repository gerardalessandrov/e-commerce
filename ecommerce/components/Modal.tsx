"use client";
import { useState } from "react";

export default function Modal() {
  const [open, Setopen] = useState(false);
  return (
    <div>
      <button onClick={() => Setopen(true)}>Abrir Modal</button>
      {open && (
        <div>
          <div className="bg-amber-300">
            <div>
              <h2>Hola 👋</h2>
              <p>Este es un modal en Next.js</p>

              <button onClick={() => Setopen(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
