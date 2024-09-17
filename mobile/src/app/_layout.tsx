import { Stack } from 'expo-router/stack';

// Componente Layout que define a navegação da aplicação
export default function Layout() {
  return (
    <Stack 
      screenOptions={{
        headerShown: false, // Oculta o cabeçalho em todas as telas
        animation: 'ios' // Define o tipo de animação de transição de tela para 'ios'
      }} 
      initialRouteName='index' // Define a rota inicial ao iniciar o aplicativo
    >
      {/* Definição das rotas na pilha de navegação */}
      <Stack.Screen name="index" />       {/* Tela principal ou inicial */}
      <Stack.Screen name="settings" />    {/* Tela de configurações */}
      <Stack.Screen name="(tabs)" />      {/* Tela de navegação por abas (se estiver usando tabs) */}
    </Stack>
  );
}
