import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// Definição do tipo para representar um item (máquinas ou peças)
type Item = {
  id: number;
  nome: string;
  modelo: string;
  quantidade: string;
  status: string;
};

// Dados mockados de máquinas e peças
const itensMockados: Item[] = [
  { id: 1, nome: 'CNC', modelo: 'XYZ-1000', quantidade: '26', status: 'Ativo' },
  { id: 2, nome: 'Impressora 3D', modelo: 'Ultimaker S5', quantidade: '12', status: 'Inativo' },
  { id: 3, nome: 'Torno', modelo: 'HAAS ST-20', quantidade: '23', status: 'Ativo' },
  { id: 4, nome: 'Fresadora', modelo: 'Bridgeport VMC', quantidade: '10', status: 'Em Manutenção' },
  { id: 5, nome: 'Laser Cutter', modelo: 'Trotec Speedy 300', quantidade: '6', status: 'Ativo' },
  { id: 6, nome: 'Router CNC', modelo: 'ShopBot PRSalpha', quantidade: '13', status: 'Inativo' },
  { id: 7, nome: 'Plasma Cutter', modelo: 'Hypertherm Powermax45', quantidade: '2', status: 'Em Manutenção' },
  { id: 8, nome: 'CNC', modelo: 'DMG Mori CMX 600 V', quantidade: '15', status: 'Ativo' },
  { id: 9, nome: 'Impressora 3D', modelo: 'Formlabs Form 3', quantidade: '7', status: 'Inativo' },
  { id: 10, nome: 'Torno', modelo: 'Mazak QT-250MSY', quantidade: '8', status: 'Ativo' },
  { id: 11, nome: 'Parafuso M8', modelo: 'M8-01', quantidade: '150', status: 'Disponível' },
  { id: 12, nome: 'Rolamento 6204', modelo: '6204-AB', quantidade: '75', status: 'Disponível' },
  { id: 13, nome: 'Correia Timing', modelo: 'T5-100', quantidade: '30', status: 'Em Falta' },
  { id: 14, nome: 'Engrenagem 20T', modelo: '20T-PL', quantidade: '50', status: 'Disponível' },
  { id: 15, nome: 'Motor Elétrico 1HP', modelo: '1HP-MOTOR', quantidade: '12', status: 'Em Manutenção' },
];

// Função Tabela em React Native
export function Tabela() {
  const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual
  const itemsPerPage = 10; // Quantidade de itens por página

  // Calcula o número total de páginas
  const totalPages = Math.ceil(itensMockados.length / itemsPerPage);

  // Função para trocar de página
  const handleChangePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Índices para fatiar o array de itens
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itensMockados.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <View className="flex flex-1 p-4">
      <Text className="text-2xl font-bold mb-4 text-center text-white">Itens da Empresa</Text>

      <ScrollView horizontal={false}>
        <View className="w-full bg-white">
          {/* Cabeçalho da Tabela */}
          <View className="flex-row bg-customBlue p-2 border border-gray-300">
            <Text className="flex-1 text-white font-bold text-center">ID</Text>
            <Text className="flex-1 text-white font-bold text-center">Nome</Text>
            <Text className="flex-1 text-white font-bold text-center">Modelo</Text>
            <Text className="flex-1 text-white font-bold text-center">Qtd</Text>
            <Text className="flex-1 text-white font-bold text-center">Status</Text>
          </View>

          {/* Linhas da Tabela */}
          {currentItems.map((item) => (
            <View key={item.id} className="flex-row border border-gray-300 p-2">
              <Text className="flex-1 text-center text-black">{item.id}</Text>
              <Text className="flex-1 text-center text-black">{item.nome}</Text>
              <Text className="flex-1 text-center text-black">{item.modelo}</Text>
              <Text className="flex-1 text-center text-black">{item.quantidade}</Text>
              <Text className="flex-1 text-center text-black">{item.status}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Controles de Paginação */}
      <View className="flex-row justify-between items-center mt-5">
        <TouchableOpacity
          onPress={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded ${currentPage === 1 ? 'bg-gray-700' : 'bg-blue-500'}`}
        >
          <Text className="text-white">Anterior</Text>
        </TouchableOpacity>
        <Text className='text-white'>Página {currentPage} de {totalPages}</Text>
        <TouchableOpacity
          onPress={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded ${currentPage === totalPages ? 'bg-gray-700' : 'bg-blue-500'}`}
        >
          <Text className="text-white">Próxima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
