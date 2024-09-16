import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Machine } from '../../types'; 
import { FontAwesome5 } from '@expo/vector-icons';

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


export default function TabManagementMachine() {
  const [maquinaSelecionada, setMaquinaSelecionada] = useState<number | null>(null);

  const selecionarMaquina = (id: number) => {
    setMaquinaSelecionada(id);
  };

  const maquinaAtiva = maquinasMocadas.find((maquina) => maquina.id === maquinaSelecionada);

  return (
    <SafeAreaView className="flex-1 bg-customBlue">
      <ScrollView className="flex-1">
        {maquinaSelecionada === null ? (
          <View className="flex-1 m-5">
            <Text className="text-2xl font-bold text-white mb-4">Selecione uma Máquinas</Text>
            {maquinasMocadas.map((maquina) => (
              <TouchableOpacity
                key={maquina.id}
                className={`p-4 mb-4 rounded-lg ${maquinaSelecionada === maquina.id ? 'bg-customGrey' : 'bg-customGrey'}`}
                onPress={() => selecionarMaquina(maquina.id)}
              >
                <Text className={`text-lg font-bold ${maquinaSelecionada === maquina.id ? 'text-black' : 'text-black'}`}>
                  {maquina.name} - {maquina.type}
                </Text>
                <Text className="text-slate-900">Localização: {maquina.location}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View className="flex-1 m-4">
            <Text className="text-2xl font-bold text-white text-center mb-4">Detalhes da Máquina</Text>
            
            <View className="p-4 rounded-lg mb-4">
              <View className="flex-row items-center mb-2">
                <FontAwesome5 name="tools" size={20} color="white" />
                <Text className="text-xl text-white ml-3">Nome: {maquinaAtiva?.name}</Text>
              </View>
              <View className="h-0.5 bg-white mb-2" />

              <View className="flex-row items-center mb-2">
                <FontAwesome5 name="industry" size={20} color="white" />
                <Text className="text-xl text-white ml-3">Tipo: {maquinaAtiva?.type}</Text>
              </View>
              <View className="h-0.5 bg-white mb-2" />

              <View className="flex-row items-center mb-2">
                <FontAwesome5 name="map-marker-alt" size={20} color="white" />
                <Text className="text-xl text-white ml-3">Localização: {maquinaAtiva?.location}</Text>
              </View>
              <View className="h-0.5 bg-white mb-2" />

              <View className="flex-row items-center mb-2">
                <FontAwesome5 name="cogs" size={20} color="white" />
                <Text className="text-xl text-white ml-3">Modelo: {maquinaAtiva?.model}</Text>
              </View>
              <View className="h-0.5 bg-white mb-2" />

              <View className="flex-row items-center mb-2">
                <FontAwesome5 name="calendar-alt" size={20} color="white" />
                <Text className="text-xl text-white ml-3">Data de Fabricação: {maquinaAtiva?.manufactureDate}</Text>
              </View>
              <View className="h-0.5 bg-white mb-2" />

              <View className="flex-row items-center mb-2">
                <FontAwesome5 name="barcode" size={20} color="white" />
                <Text className="text-xl text-white ml-3">Número de Série: {maquinaAtiva?.serialNumber}</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {maquinaSelecionada !== null && (
        <View className="absolute bottom-0 left-0 right-0 p-4 bg-customBlue">
          <View className="flex-row justify-between">
            <TouchableOpacity
              className="bg-customGrey p-3 rounded-md flex-1 ml-2"
              onPress={() => setMaquinaSelecionada(null)}
            >
              <Text className="text-black font-bold text-center">Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
