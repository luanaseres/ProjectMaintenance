import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput, Alert, SafeAreaView, ScrollView } from 'react-native';
import { Machine } from '../../types';

const maquinasMocadas: Machine[] = [
  { id: 1, name: 'Fresadora', type: 'Corte', location: 'Fábrica 1', model: 'F-123', manufactureDate: '2020', serialNumber: 'A12345' },
  { id: 2, name: 'Torno', type: 'Furação', location: 'Fábrica 2', model: 'T-456', manufactureDate: '2019', serialNumber: 'B67890' },
  { id: 3, name: 'CNC', type: 'Usinagem', location: 'Fábrica 3', model: 'CNC-789', manufactureDate: '2021', serialNumber: 'C54321' },

];

export default function TabMaintenance() {
  const [selectedMachineId, setSelectedMachineId] = useState<number | null>(null);
  const [comments, setComments] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleMaintenance = () => {
    if (selectedMachineId === null) {
      Alert.alert('Selecione uma máquina', 'Por favor, selecione uma máquina para marcar como em manutenção.');
      return;
    }

    const machine = maquinasMocadas.find((m) => m.id === selectedMachineId);
    if (machine) {
      Alert.alert(
        'Manutenção',
        `A máquina ${machine.name} está agora em manutenção.\nComentários: ${comments}`
      );
    }

  };

  return (
    <SafeAreaView className="flex-1 bg-customBlue">
      <ScrollView className="flex-1 mb-16 m-5">
        <Text className="text-2xl font-bold text-white mb-4">Histórico de Manutenções</Text>

        {/* Seletor de Máquina */}
        <TouchableOpacity
          className="p-4 mb-4 rounded-lg bg-blue-900"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-lg font-bold text-gray-100">
            {selectedMachineId ? maquinasMocadas.find(machine => machine.id === selectedMachineId)?.name : 'Selecione a Máquina'}
          </Text>
        </TouchableOpacity>

        {/* Modal de Seleção de Máquina */}
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <View className="bg-blue-900 p-5 rounded-lg w-80">
              <Text className="text-2xl font-bold text-white mb-4">Escolha uma Máquina</Text>
              <FlatList
                data={maquinasMocadas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className={`p-4 mb-2 rounded-lg ${selectedMachineId === item.id ? 'bg-blue-800' : 'bg-blue-900'}`}
                    onPress={() => {
                      setSelectedMachineId(item.id);
                      setModalVisible(false);
                    }}
                  >
                    <Text className={`text-lg font-bold ${selectedMachineId === item.id ? 'text-white' : 'text-gray-100'}`}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                className="bg-red-600 p-3 rounded-md mt-4"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-white font-bold text-center">Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Comentários */}
        <View className="p-4 bg-blue-900 rounded-lg mb-4">
          <Text className="text-xl text-white mb-2">Comentários:</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-2 text-white bg-blue-800"
            placeholder="Digite os comentários aqui"
            placeholderTextColor="#ccc"
            value={comments}
            onChangeText={setComments}
          />
        </View>

        {/* Botão de Manutenção */}
        <TouchableOpacity
          className="bg-green-500 p-3 rounded-md mt-5"
          onPress={handleMaintenance}
        >
          <Text className="text-white font-bold text-center">Marcar como em Manutenção</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
