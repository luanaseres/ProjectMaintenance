import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import React from "react";
import { Link } from "expo-router";

export default function LoginScreen() {
  // State para armazenar o email e a senha do usuário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className='flex-1 justify-center items-center bg-white'>
      {/* Container principal para o formulário de login */}
      <View className='w-4/5 bg-white p-8 rounded-xl shadow-lg'>
        <Text className='text-2xl font-bold text-center mb-6'>Login</Text>

        {/* Campo de Email */}
        <TextInput
          className='border border-gray-300 p-3 mb-4 rounded'
          placeholder="Enter your email"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Campo de Senha */}
        <TextInput
          className='border border-gray-300 p-3 mb-4 rounded'
          placeholder="Enter your password"
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Botão de Login com navegação */}
        <TouchableOpacity className="bg-customBlue p-4 rounded-lg mb-4">
          {/* O Link é utilizado para navegação */}
          <Link href={"/(tabs)"}>
            <Text className='text-white text-center text-lg'>Logar</Text>
          </Link>
        </TouchableOpacity>

        {/* Link para a página de cadastro se o usuário ainda não tiver uma conta */}
        <View className='flex-row justify-center w-full'>
          <Text className='text-gray-600 mr-2'>Não tem uma conta?</Text>
          <Link href="/signUp">
            <Text className='text-customBlue font-bold'>Cadastrar-se</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
