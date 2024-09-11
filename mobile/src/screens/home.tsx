import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Header } from "../app/components/header";
import { Footer } from "../app/components/footer";
import { Tabela } from "../app/components/tabela";

export default function HomeScreen() {
  const cards = [
    { color: "bg-orange-200", qty: "100", text: "Máquinas", icon: "truck" },
    { color: "bg-blue-200", qty: "350", text: "Equipamentos", icon: "wrench" },
    { color: "bg-red-200", qty: "30", text: "O.S. Negativas", icon: "times-circle" },
    { color: "bg-green-200", qty: "50", text: "O.S. Positivas", icon: "check-circle" },
  ];

  return (
    <View className="flex-1 bg-customBlue">
      <Header />

      <ScrollView className="mt-3">
        <View className="grid grid-cols-2 gap-4 p-6">
          {cards.map((card, index) => (
            <View key={index} className="p-4 rounded-xl shadow-lg" ${card.color}>
              <View style={tailwind('flex-row items-center justify-between')}>
                <Icon name={card.icon} size={48} color="black" />
                <Text className="text-2xl font-bold">{card.qty}</Text>
              </View>
              <Text className="text-lg mt-2">{card.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View className="flex-grow bg-gray-100 p-4"
        <Tabela />
      </View>

      <Footer />
    </View>
  );
}
