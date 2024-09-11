import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Pressable } from 'react-native';

// Componente Header que representa o cabeçalho da página
export function Header() {
  // Estado para controlar a visibilidade dos menus dropdown
  const [menuVisible, setMenuVisible] = React.useState({
    cadastrar: false,
    relatorios: false,
    controle: false,
  });

  return (
    <View className="p-3 bg-customBlue flex-row justify-between items-center">
      <View className="flex-row items-center">
        <Image 
          source={{ uri: "/image/manutencao.png" }} 
          className='w-12 h-12 ml-2 mt-1'
        />
        <Text className="text-white p-4 font-semibold">Maintenance</Text>
      </View>

      {/* Seção de navegação */}
      <View className="flex-row space-x-4">
        <TouchableOpacity>
          <Text className="text-white font-semibold">Home</Text>
        </TouchableOpacity>

        {/* Menu dropdown para Cadastrar */}
        <TouchableOpacity
          onPress={() => setMenuVisible({ ...menuVisible, cadastrar: !menuVisible.cadastrar })}
        >
          <Text className="text-white font-semibold">Cadastrar</Text>
        </TouchableOpacity>
        {menuVisible.cadastrar && (
          <View className="absolute top-14 left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg">
            <Pressable className="px-4 py-2 hover:bg-gray-100">
              <Text>Cadastrar Máquinas e Equipamentos</Text>
            </Pressable>
            <Pressable className="px-4 py-2 hover:bg-gray-100">
              <Text>Cadastrar Manutenção</Text>
            </Pressable>
            <Pressable className="px-4 py-2 hover:bg-gray-100">
              <Text>Cadastrar Peças e Materiais</Text>
            </Pressable>
          </View>
        )}

        {/* Menu dropdown para Relatórios */}
        <TouchableOpacity
          onPress={() => setMenuVisible({ ...menuVisible, relatorios: !menuVisible.relatorios })}
        >
          <Text className="text-white font-semibold">Relatórios</Text>
        </TouchableOpacity>
        {menuVisible.relatorios && (
          <View className="absolute top-14 left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg">
            <Pressable className="px-4 py-2 hover:bg-gray-100">
              <Text>Relatório de Desempenho</Text>
            </Pressable>
            <Pressable className="px-4 py-2 hover:bg-gray-100">
              <Text>Relatório de Estoque</Text>
            </Pressable>
            <Pressable className="px-4 py-2 hover:bg-gray-100">
              <Text>Relatório de Manutenção</Text>
            </Pressable>
          </View>
        )}

        {/* Menu dropdown para Controle */}
        <TouchableOpacity
          onPress={() => setMenuVisible({ ...menuVisible, controle: !menuVisible.controle })}
        >
          <Text className="text-white font-semibold">Controle</Text>
        </TouchableOpacity>
        {menuVisible.controle && (
          <View className="absolute top-14 left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg">
            <Pressable className="px-4 py-2 hover:bg-gray-100">
              <Text>Controle de Custos</Text>
            </Pressable>
            <Pressable className="px-4 py-2 hover:bg-gray-100">
              <Text>Controle de Estoque</Text>
            </Pressable>
          </View>
        )}

        <TouchableOpacity>
          <Text className="text-white font-semibold">Manutenções</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="text-white font-semibold">Equipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
