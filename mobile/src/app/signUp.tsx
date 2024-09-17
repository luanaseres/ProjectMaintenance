import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { Link } from "expo-router";

export default function SignupScreen() {
  // Estados para armazenar os dados do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Função para validar e enviar o formulário
  const handleSubmit = () => {
    // Validação básica dos campos
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não correspondem');
      return;
    }

    // Supondo que o cadastro foi bem-sucedido
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
    // Redireciona para a página inicial
    // Aqui, você pode substituir a lógica de redirecionamento conforme necessário
  };

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
          accessibilityLabel="Nome"
          accessibilityHint="Digite seu nome completo"
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
          accessibilityLabel="E-mail"
          accessibilityHint="Digite seu e-mail"
        />

        {/* Campo de Senha */}
        <TextInput
          className='border border-gray-300 p-3 mb-4 rounded'
          placeholder="Enter your password"
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          accessibilityLabel="Senha"
          accessibilityHint="Digite sua senha"
        />

        {/* Confirmar Senha */}
        <TextInput
          className='border border-gray-300 p-3 mb-4 rounded'
          placeholder="Confirm your password"
          placeholderTextColor="black"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          accessibilityLabel="Confirmar Senha"
          accessibilityHint="Confirme sua senha"
        />

        {/* Botão de Cadastro */}
        <TouchableOpacity className="bg-customBlue p-4 rounded-lg mb-4 items-center" onPress={handleSubmit}>
          <Text className='text-white text-center text-lg'>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
