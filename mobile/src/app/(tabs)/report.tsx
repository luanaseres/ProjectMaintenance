import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

// Mock dos relatórios de manutenção
const relatoriosManutencaoMockados = [
  { maquina: 'Fresadora', data: '01/09/2024', descricao: 'Troca de peças no motor', status: 'Concluída' },
  { maquina: 'Laser Cutter', data: '15/07/2024', descricao: 'Verificação de sistema elétrico', status: 'Em andamento' },
  { maquina: 'Impressora 3D', data: '22/08/2024', descricao: 'Manutenção preventiva', status: 'Pendente' },
  { maquina: 'Plasma Cutter', data: '26/09/2024', descricao: 'Manutenção da bateria', status: 'Em andamento' },
  { maquina: 'CNC', data: '07/08/2024', descricao: 'Manutenção preventiva', status: 'Pendente' },
  { maquina: 'Torno', data: '10/06/2024', descricao: 'Troca de peça de rolamento', status: 'Concluída' },
];

// Mock de estoque de peças
const estoquePecasMockado = [
  { nome: 'Parafuso M8', quantidade: 60 },
  { nome: 'Rolamento 6204', quantidade: 88 },
  { nome: 'Motor Elétrico 1HP', quantidade: 30 },
  { nome: 'Filtro de Óleo', quantidade: 75 },
  { nome: 'Correia Timing', quantidade: 93 },
  { nome: 'Engrenagem 20T', quantidade: 21 },
  { nome: 'Termômetro Digital', quantidade: 7 },
  { nome: 'Válvula de Segurança', quantidade: 26 },
];

// Mock de disponibilidade de peças para manutenção
const disponibilidadePecasMockada = [
  { nome: 'Rolamento 6204', quantidade: 10 },
  { nome: 'Chave Inglesa', quantidade: 29 },
  { nome: 'Parafuso M9', quantidade: 27 },
  { nome: 'Engrenagem 20T', quantidade: 5 },
  { nome: 'Chave de filips', quantidade: 41 },
  { nome: 'Motor Elétrico 1HP', quantidade: 2 },
  { nome: 'Parafuso M8', quantidade: 66 },
  { nome: 'Chave de Fenda', quantidade: 33 },
];

export default function TelaUnica() {
  const [menu, setMenu] = useState(''); // Para navegar entre os menus
  const [peca, setPeca] = useState(''); // Para consultar peças

  const filtrarPecas = () => {
    return disponibilidadePecasMockada.filter(p =>
      p.nome.toLowerCase().includes(peca.toLowerCase())
    );
  };

  return (
    <View className="flex-1 p-4 bg-customBlue">
      {/* Menu de Navegação com Botões Padronizados */}
      <View className="flex-row justify-around p-1 mb-3 bg-customBlue">
        <TouchableOpacity
          className={`flex-1 p-2 m-1 rounded text-center ${
            menu === 'manutencao' ? 'bg-blue-700' : 'bg-gray-700'
          }`}
          onPress={() => setMenu('manutencao')}
        >
          <Text className={`text-center text-white ${menu === 'manutencao' ? 'font-bold' : ''}`}>
            Manutenção
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 p-2 m-1 rounded text-center ${
            menu === 'estoque' ? 'bg-blue-700' : 'bg-gray-700'
          }`}
          onPress={() => setMenu('estoque')}
        >
          <Text className={`text-center text-white ${menu === 'estoque' ? 'font-bold' : ''}`}>
            Estoque
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 p-2 m-1 rounded text-center ${
            menu === 'consulta' ? 'bg-blue-700' : 'bg-gray-700'
          }`}
          onPress={() => setMenu('consulta')}
        >
          <Text className={`text-center text-white ${menu === 'consulta' ? 'font-bold' : ''}`}>
            Consulta
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo Dinâmico baseado no menu selecionado */}
      <ScrollView className="flex-1">
        {menu === '' && (
          <Text className="text-center text-gray-300">Selecione uma opção no menu</Text>
        )}

        {/* Relatório de Manutenções Recentes */}
        {menu === 'manutencao' && (
          <View>
            <Text className="text-2xl font-bold text-white mb-4 text-center">Relatórios de Manutenções Recentes</Text>
            {relatoriosManutencaoMockados.map((relatorio, index) => (
              <View key={index} className="bg-customGrey p-4 mb-2 rounded-lg border border-gray-300">
                <Text className="text-xl font-bold mb-2">{relatorio.maquina}</Text>
                <Text className="text-sm mb-1">Data: {relatorio.data}</Text>
                <Text className="text-sm mb-2">Status: {relatorio.status}</Text>
                <Text className="text-base">{relatorio.descricao}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Relatório de Estoque de Peças Disponíveis */}
        {menu === 'estoque' && (
          <View>
            <Text className="text-2xl font-bold text-white mb-4 text-center">Estoque de Peças Disponíveis</Text>
            {estoquePecasMockado.map((peca, index) => (
              <View key={index} className="bg-white p-4 mb-2 rounded-lg border border-gray-300">
                <Text className="text-lg font-semibold">{peca.nome}</Text>
                <Text className="text-base">Quantidade: {peca.quantidade}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Consultar Disponibilidade de Peças */}
        {menu === 'consulta' && (
          <View>
            <Text className="text-2xl font-bold text-white mb-4 text-center">Consultar Disponibilidade de Peças Para Manutenção</Text>
            <TextInput
              className="border p-2 mb-4 rounded bg-customGrey"
              placeholder="Digite o nome da peça"
              placeholderTextColor={'gray'}
              value={peca}
              onChangeText={setPeca}
            />
            <Button title="Consultar" onPress={() => {}} color="#fff" />

            {filtrarPecas().map((peca, index) => (
              <View key={index} className="bg-customGrey p-4 mb-2 rounded-lg border border-gray-300">
                <Text className="text-lg font-semibold">{peca.nome}</Text>
                <Text className="text-base">Disponível: {peca.quantidade}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
