import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function LogoTitle() {
  return (
    <View className="flex flex-row justify-around w-full align-middle text-center">
        <FontAwesome name="cog" size={20} color={'white'}/>
        <Text className="text-white text-lg">Maintenance</Text>
    </View>
  );
}
