import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import React from "react";
import { Link, router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className='flex-1 justify-center items-center bg-white'>

      {/* Quadrado arredondado com sombra */}
      <View className='w-4/5 bg-white p-8 rounded-xl shadow-lg'>
        <Text className='text-2xl font-bold text-center mb-6'>Login</Text>

        {/* Campo de Email */}
        <TextInput
          className='border border-gray-300 p-3 mb-4 rounded'
          placeholder="Enter your email"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Campo de Senha */}
        <TextInput
          className='border border-gray-300 p-3 mb-4 rounded'
          placeholder="Enter your password"
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Botão de Login */}
        <TouchableOpacity
          className="bg-customBlue p-4 rounded-lg mb-4"
        >
          <Link href={"/(tabs)"}>
            <Text className='text-white text-center text-lg'>Logar</Text>
          </Link>
          {/* <Button onPress={()=> {router.push("/")}}></Button> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}