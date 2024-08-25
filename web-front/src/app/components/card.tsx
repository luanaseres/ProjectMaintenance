import React from "react";

// Define a interface para as propriedades do componente Card
interface CardInterface {
  color?: string; // Cor de fundo do cartão, opcional
  qty?: string;   // Quantidade ou valor principal a ser exibido
  text?: string;  // Texto descritivo ou secundário
  icon?: React.ReactNode; // Ícone ou componente React a ser exibido no cartão
}

// Componente Card que usa as propriedades definidas na interface
export function Card({ color, qty, text, icon }: CardInterface) {
  return (
    <div className={`${color} p-6 flex gap-2 rounded-xl`}>
      <div className="flex-1 flex flex-col">
        <strong className="text-3xl font-bold">{qty}</strong>
        <span className="text-sm text-zinc-500">{text}</span>
      </div>
      {icon}
    </div>
  );
}
