import React from "react";
import { View, Text } from "react-native";

// Componente para exibir o rodapé da página
export function Footer() {
  return (
    <View className="p-4 bg-customBlue items-center justify-center">
      <Text className="text-white text-sm">
        Todos os direitos reservados &copy; 2024
      </Text>
    </View>
  );
}
