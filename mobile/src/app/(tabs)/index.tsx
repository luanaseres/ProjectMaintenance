import React from "react";
import { View, ScrollView, Text } from "react-native"; 
import { Tabela } from "@/src/components/tabela";
import { Card } from "@/src/components/cards";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; 

export default function HomeScreen() {
  // Dados mockados para os cartões que serão exibidos na tela
  const cards = [
    { color: "bg-orange-200", qty: "100", text: "Máquinas", icon: "truck-ramp-box" },
    { color: "bg-blue-200", qty: "350", text: "Equipamentos", icon: "screwdriver-wrench" },
    { color: "bg-red-200", qty: "30", text: "O.S. Negativas", icon: "times-circle" },
    { color: "bg-green-200", qty: "50", text: "O.S. Positivas", icon: "check-circle" },
  ];

  return (
    <View className="flex-1 bg-customBlue"> 
      <ScrollView className=""> 
        <View className="flex flex-row flex-wrap justify-between p-6">

          {/* Mapeia e exibe os cartões com base nos dados fornecidos */}
          {cards.map((card, index) => (
            <View key={index} className={`w-[48%] mb-4 p-4 rounded-xl shadow-lg ${card.color}`}>
              <View className="flex-row items-center justify-between">

                {/* Exibe a quantidade e o ícone do cartão */}
                <Text className="text-2xl font-bold">{card.qty}</Text>
                <FontAwesome6 name={card.icon} size={24} color="black" />
              </View>
              <Text className="text-lg mt-2">{card.text}</Text>
            </View>
          ))}
        </View>

        {/* Exibe o componente Tabela abaixo dos cartões */}
        <Tabela />
      </ScrollView>
    </View>
  );
}
