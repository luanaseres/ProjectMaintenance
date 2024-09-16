import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View className='flex-1 justify-center items-center bg-white'>

      {/* Quadrado arredondado com sombra */}
      <View className='w-4/5 bg-white p-8 rounded-xl shadow-lg'>
        <Text className='text-2xl font-bold text-center mb-6'>Cadastrar-se</Text>

        {/* Campo de Nome */}
        <TextInput
          className='border border-gray-300 p-3 mb-4 rounded'
          placeholder="Enter your name"
          placeholderTextColor="black"
          value={name}
          onChangeText={setName}
        />

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

        {/* Confirmar Senha */}
        <TextInput
          className='border border-gray-300 p-3 mb-4 rounded'
          placeholder="Confirm your password"
          placeholderTextColor="black"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Botão de Cadastro */}
        <TouchableOpacity className="bg-customBlue p-4 rounded-lg mb-4 items-center">
          <Link href={"/"}> {/* Redireciona para a aba principal após cadastro */}
            <Text className='text-white text-center text-lg'>Cadastrar</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}
