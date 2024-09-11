import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Header } from "../app/components/header";
import { Footer } from "../app/components/footer";
import { Tabela } from "../app/components/tabela";

export default function HomeScreen({ navigation }: { navigation: any }) {
  const cards = [
    { color: "bg-orange-200", qty: "100", text: "Máquinas", icon: "truck" },
    { color: "bg-blue-200", qty: "350", text: "Equipamentos", icon: "wrench" },
    { color: "bg-red-200", qty: "30", text: "O.S. Negativas", icon: "times-circle" },
    { color: "bg-green-200", qty: "50", text: "O.S. Positivas", icon: "check-circle" },
  ];

  return (
    <View className="flex-1 bg-customBlue">
      {/* Header */}
      <Header />

      {/* Cards */}
      <ScrollView className="mt-3">
        <View className="p-6">
          <View className="flex-row flex-wrap justify-between">
            {cards.map((card, index) => (
              <View
                key={index}
                className={`w-1/2 p-4 mb-4 rounded-xl shadow-lg ${card.color}`}
              >
                <View className="flex-row items-center justify-between">
                  <Icon name={card.icon} size={48} color="black" />
                  <Text className="text-2xl font-bold">{card.qty}</Text>
                </View>
                <Text className="text-lg mt-2">{card.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Main Content */}
      <View className="flex-grow bg-gray-100 p-4">
        <Tabela />
      </View>

      {/* Footer */}
      <Footer />
    </View>
  );
}
