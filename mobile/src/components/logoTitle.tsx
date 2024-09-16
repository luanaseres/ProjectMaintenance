import React from "react";
import { View, Text, Image } from "react-native";

export function LogoTitle() {
  const logo = require("../assets/manutencao.png");

  return (
    <View className="ml-4">
      <Image source={logo} className="w-7 h-7" />
      {/* <Text className="text-white text-lg">Maintenance</Text> */}
    </View>
  );
}
