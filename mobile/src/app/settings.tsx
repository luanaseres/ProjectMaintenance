import { Link } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, Switch, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Settings() {
  const [user, setUser] = useState({
    name: 'João Silva',
    email: 'joao.silva@example.com',
  });

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  const toggleEmailNotifications = () => setEmailNotifications(prevState => !prevState);
  const togglePushNotifications = () => setPushNotifications(prevState => !prevState);

  return (
    <SafeAreaView className="flex-1 bg-customBlue">
      <View className='flex flex-row w-full align-middle text-center mt-4'>
        <Link href="/(tabs)" className='mr-4'>
          <AntDesign name="arrowleft" size={30} color="white" />
        </Link>
        <Text className="text-xl font-semibold text-white mb-2 text-center">Configurações</Text>
      </View>
      
      <ScrollView className="flex-1 p-4">
        {/* Perfil do Usuário */}
        <View className="mb-6">
          <Text className="text-xl font-semibold text-white mb-2">Perfil do Usuário</Text>
          <TextInput
            className="p-2 rounded bg-white mb-2"
            placeholder="Nome"
            value={user.name}
            editable={false}
          />
          <TextInput
            className="p-2 rounded bg-white mb-2"
            placeholder="E-mail"
            value={user.email}
            editable={false}
          />
        </View>

        {/* Preferências de Notificação */}
        <View className="mb-6">
          <Text className="text-xl font-semibold text-white mb-2">Preferências de Notificação</Text>
          <View className="flex-row items-center mb-2">
            <Text className="text-lg text-white flex-1">Notificações por E-mail</Text>
            <Switch value={emailNotifications} onValueChange={toggleEmailNotifications} />
          </View>
          <View className="flex-row items-center mb-2">
            <Text className="text-lg text-white flex-1">Notificações Push</Text>
            <Switch value={pushNotifications} onValueChange={togglePushNotifications} />
          </View>
        </View>

        {/* Sobre o Aplicativo */}
        <View className="mb-6">
          <Text className="text-xl font-semibold text-white mb-2">Sobre o Aplicativo</Text>
          <Text className="text-white">Versão 1.0.0</Text>
        </View>

        {/* Logout */}
        <TouchableOpacity className="bg-red-600 p-3 rounded-md">
          <Link href={"/"}>
            <Text className="text-white text-center text-lg">Sair</Text>
          </Link>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}