import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput, Alert, SafeAreaView, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur'; // Importando BlurView para o efeito de desfoque
import { Machine, Maintenance } from '../../types'; // Ajuste o caminho conforme necessário

// Dados fictícios de máquinas e manutenções
const maquinasMocadas: Machine[] = [
  { id: 1, name: 'Fresadora', type: 'Corte', location: 'Fábrica 1', model: 'F-123', manufactureDate: '2020', serialNumber: 'A12345' },
  { id: 2, name: 'Torno', type: 'Furação', location: 'Fábrica 2', model: 'T-456', manufactureDate: '2019', serialNumber: 'B67890' },
  { id: 3, name: 'CNC', type: 'Usinagem', location: 'Fábrica 3', model: 'CNC-789', manufactureDate: '2021', serialNumber: 'C54321' },
  { id: 4, name: 'Injetora', type: 'Moldagem', location: 'Fábrica 4', model: 'INJ-500', manufactureDate: '2022', serialNumber: 'D98765' },
  { id: 5, name: 'Prensa Hidráulica', type: 'Compressão', location: 'Fábrica 5', model: 'PR-700', manufactureDate: '2018', serialNumber: 'E54321' },
  { id: 6, name: 'Laser Cutter', type: 'Corte a Laser', location: 'Fábrica 6', model: 'LC-350', manufactureDate: '2023', serialNumber: 'F11223' },
  { id: 7, name: 'Robô Industrial', type: 'Montagem', location: 'Fábrica 7', model: 'RB-900', manufactureDate: '2021', serialNumber: 'G55678' },
  { id: 8, name: 'Compressores de Ar', type: 'Pressurização', location: 'Fábrica 8', model: 'CP-1000', manufactureDate: '2020', serialNumber: 'H11234' },
  { id: 9, name: 'Esteira Transportadora', type: 'Transporte', location: 'Fábrica 9', model: 'ET-450', manufactureDate: '2017', serialNumber: 'I22334' },
  { id: 10, name: 'Empilhadeira', type: 'Movimentação', location: 'Fábrica 10', model: 'EP-150', manufactureDate: '2016', serialNumber: 'J33445' },
  { id: 11, name: 'Forno de Indução', type: 'Fusão de Metais', location: 'Fábrica 11', model: 'FI-600', manufactureDate: '2019', serialNumber: 'K44556' },
  { id: 12, name: 'Serra de Fita', type: 'Corte', location: 'Fábrica 12', model: 'SF-250', manufactureDate: '2021', serialNumber: 'L55667' },
];

const historicoManutencaoMock: Maintenance[] = [
  { id: 1, machineId: 1, maintenanceDate: '2023-09-01', comments: 'Substituição de peças.' },
  { id: 2, machineId: 2, maintenanceDate: '2023-08-25', comments: 'Lubrificação.' },
  { id: 3, machineId: 3, maintenanceDate: '2023-08-20', comments: 'Ajuste de precisão.' },
  { id: 4, machineId: 4, maintenanceDate: '2023-09-03', comments: 'Inspeção de segurança.' },
  { id: 5, machineId: 5, maintenanceDate: '2023-08-28', comments: 'Troca de óleo hidráulico.' },
  { id: 6, machineId: 6, maintenanceDate: '2023-09-05', comments: 'Limpeza dos filtros a laser.' },
  { id: 7, machineId: 7, maintenanceDate: '2023-08-30', comments: 'Recalibração do braço robótico.' },
  { id: 8, machineId: 8, maintenanceDate: '2023-09-02', comments: 'Troca de mangueiras.' },
  { id: 9, machineId: 9, maintenanceDate: '2023-08-26', comments: 'Verificação dos motores da esteira.' },
  { id: 10, machineId: 10, maintenanceDate: '2023-09-01', comments: 'Revisão completa e troca de bateria.' },
  { id: 11, machineId: 11, maintenanceDate: '2023-08-22', comments: 'Substituição de resistências de aquecimento.' },
  { id: 12, machineId: 12, maintenanceDate: '2023-09-04', comments: 'Troca da lâmina de corte.' },
];


export default function TabMaintenance() {
  const [selectedMachineId, setSelectedMachineId] = useState<number | null>(null);
  const [comments, setComments] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const [historicoManutencao, setHistoricoManutencao] = useState<Maintenance[]>(historicoManutencaoMock);

  // Simula a marcação da máquina em manutenção
  const handleMaintenance = () => {
    if (selectedMachineId === null) {
      Alert.alert('Selecione uma máquina', 'Por favor, selecione uma máquina para marcar como em manutenção.');
      return;
    }

    const novaManutencao: Maintenance = {
      id: historicoManutencao.length + 1,
      machineId: selectedMachineId,
      maintenanceDate: new Date().toISOString().split('T')[0], // Data atual formatada
      comments: comments || 'Manutenção preventiva.',
    };

    setHistoricoManutencao([...historicoManutencao, novaManutencao]);
    Alert.alert('Manutenção', `A máquina foi marcada como em manutenção.`);
    setSelectedMachineId(null); // Limpar seleção de máquina
    setComments(''); // Limpar comentários
  };

  // Renderiza o histórico de manutenção
  const renderHistoricoItem = ({ item }: { item: Maintenance }) => {
    const machine = maquinasMocadas.find((m) => m.id === item.machineId);
    return (
      <View className="p-4 mb-2 rounded-lg bg-blue-800">
        <Text className="text-lg font-bold text-white">{machine?.name}</Text>
        <Text className="text-gray-300">Data: {item.maintenanceDate}</Text>
        <Text className="text-gray-300">Comentários: {item.comments}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-customBlue">
      <ScrollView className="flex-1 mb-16 m-5">
      <Text className="text-2xl font-bold text-white mb-4">Selecionar Máquina para Manutenção</Text>
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
          {/* BlurView para o efeito de embaçado */}
          <BlurView intensity={50} className="flex-1 justify-center items-center">
            <View className="bg-blue-900 p-5 rounded-lg w-80 h-2/3">
              <Text className="text-2xl font-bold text-white mb-4">Escolha uma Máquina</Text>
              <ScrollView className="mb-4">
                <FlatList
                  data={maquinasMocadas}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      className={`p-4 mb-2 rounded-lg ${
                        selectedMachineId === item.id ? 'bg-blue-800' : 'bg-blue-900'
                      }`}
                      onPress={() => {
                        setSelectedMachineId(item.id);
                        setModalVisible(false);
                      }}
                    >
                      <Text
                        className={`text-lg font-bold ${
                          selectedMachineId === item.id ? 'text-white' : 'text-gray-100'
                        }`}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </ScrollView>
              <TouchableOpacity className="bg-red-600 p-3 rounded-md mt-4" onPress={() => setModalVisible(false)}>
                <Text className="text-white font-bold text-center">Cancelar</Text>
              </TouchableOpacity>
            </View>
          </BlurView>

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

        {/* Histórico de Manutenções */}
        <Text className="text-2xl font-bold text-white mb-4 mt-4">Histórico de Manutenções</Text>
        <FlatList
          data={historicoManutencao}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderHistoricoItem}
          ListEmptyComponent={<Text className="text-gray-300">Nenhuma manutenção registrada.</Text>}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
