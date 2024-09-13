import React from "react";
import { View, Text } from "react-native";

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
    <View className={`p-6 flex-row rounded-xl ${color}`}>
      <View className="flex-1 flex-col justify-between">
        <Text className="text-3xl font-bold">{qty}</Text>
        <Text className="text-sm text-gray-500">{text}</Text>
      </View>
      {icon}
    </View>
  );
}
