import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

// Interfaces para os dados e propriedades
interface Colaborador {
  nome: string;
  disponibilidade: string; 
}

interface Equipe {
  nomeEquipe: string;
  descricao: string;
  membros: Colaborador[];
}

interface Manutencao {
  id: number;
  descricao: string;
  maquina: string;
  responsavel: string;
  status: string; 
  prioridade: string; 
  equipesDisponiveis: string[]; 
}

interface AtribuicaoEquipesProps {
  onSelect: (equipe: string) => void;
  selectedEquipe: string;
}

interface DisponibilidadeEquipesProps {
  onSelect: (manutencao: number) => void;
  selectedManutencao: number;
}

// Dados mockados para manutenção e equipes
const manutencoesMockadas: Manutencao[] = [
  {
    id: 1,
    descricao: 'Troca de óleo',
    maquina: 'Fresadora',
    responsavel: 'Pedro',
    status: 'Concluído',
    prioridade: 'Alta',
    equipesDisponiveis: ['Equipe A', 'Equipe B'], 
  },
  {
    id: 2,
    descricao: 'Substituição de filtro',
    maquina: 'CNC',
    responsavel: 'Maria',
    status: 'Pendente',
    prioridade: 'Média',
    equipesDisponiveis: ['Equipe B', 'Equipe C'], 
  },
  {
    id: 3,
    descricao: 'Ajuste de correia',
    maquina: 'Torno',
    responsavel: 'Augusto',
    status: 'Em progresso',
    prioridade: 'Baixa',
    equipesDisponiveis: ['Equipe A', 'Equipe C'], 
  },
];

const equipesMockadas: Equipe[] = [
  {
    nomeEquipe: 'Equipe A',
    descricao: 'Descrição da Equipe A',
    membros: [
      { nome: 'João Silva', disponibilidade: 'Disponível' },
      { nome: 'Maria Souza', disponibilidade: 'Ocupado' },
    ],
  },
  {
    nomeEquipe: 'Equipe B',
    descricao: 'Descrição da Equipe B',
    membros: [
      { nome: 'Carlos Pereira', disponibilidade: 'Disponível' },
      { nome: 'Ana Oliveira', disponibilidade: 'Disponível' },
    ],
  },
  {
    nomeEquipe: 'Equipe C',
    descricao: 'Descrição da Equipe C',
    membros: [
      { nome: 'Rafael Santos', disponibilidade: 'Ocupado' },
      { nome: 'Beatriz Gomes', disponibilidade: 'Disponível' },
    ],
  },
];

// Componente para atribuição de equipes
export default function TabManagementSquad() {
  const [telaAtiva, setTelaAtiva] = useState<'atribuir' | 'verificar'>('atribuir');
  const [equipeSelecionada, setEquipeSelecionada] = useState<string>('');
  const [manutencaoSelecionada, setManutencaoSelecionada] = useState<number>(0);

  return (
    <View className="flex-1 bg-customBlue">
      <View className="flex-row justify-around p-4 bg-customBlue">
        <TouchableOpacity
          className={`flex-1 p-2 m-1 rounded bg-blue-500 text-center ${
            telaAtiva === 'atribuir' ? 'bg-blue-700' : 'bg-gray-700'
          }`}
          onPress={() => setTelaAtiva('atribuir')}
        >
          <Text className={` self-center text-center ${
            telaAtiva === 'atribuir' ? 'text-white' : 'text-white'
          }`}>Visualizar Equipe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 p-2 m-1 rounded bg-blue-500 text-center ${
            telaAtiva === 'verificar' ? 'bg-blue-700' : 'bg-gray-700'
          }`}
          onPress={() => setTelaAtiva('verificar')}
        >
          <Text className={`text-center ${
            telaAtiva === 'verificar' ? 'text-white' : 'text-white'
          }`}>Verificar Disponibilidade</Text>
        </TouchableOpacity>
      </View>

      {telaAtiva === 'atribuir' && (
        <AtribuicaoEquipes onSelect={setEquipeSelecionada} selectedEquipe={equipeSelecionada} />
      )}
      {telaAtiva === 'verificar' && (
        <DisponibilidadeEquipes onSelect={setManutencaoSelecionada} selectedManutencao={manutencaoSelecionada} />
      )}
    </View>
  );
}

// Componente para atribuição de equipes
function AtribuicaoEquipes({ onSelect, selectedEquipe }: AtribuicaoEquipesProps) {
  const equipeSelecionada = equipesMockadas.find(equipe => equipe.nomeEquipe === selectedEquipe);

  return (
    <View className="flex-1 justify-center items-center p-4 bg-customBlue">
      <Text className="text-2xl font-bold text-white mb-4">Visualização de Equipes</Text>
      <ScrollView className="w-full">
        <Text className="text-lg font-bold text-white mb-2">Selecione a Equipe</Text>
        {equipesMockadas.map((equipe, index) => (
          <TouchableOpacity
            key={index}
            className={`p-4 mb-2 rounded ${
              selectedEquipe === equipe.nomeEquipe ? 'bg-blue-700' : 'bg-customGrey'
            }`}
            onPress={() => onSelect(equipe.nomeEquipe)}
          >
            <Text
              className={`text-center ${
                selectedEquipe === equipe.nomeEquipe ? 'text-white' : 'text-black'
              }`}
            >
              {equipe.nomeEquipe}
            </Text>
          </TouchableOpacity>
        ))}

        {equipeSelecionada && (
          <View className="mt-4 p-4 bg-gray-200 shadow-md rounded">
            <Text className="text-xl font-bold mb-2">{equipeSelecionada.nomeEquipe}</Text>
            <Text className="mb-2">{equipeSelecionada.descricao}</Text>
            <Text className="text-lg font-bold mb-2">Membros:</Text>
            {equipeSelecionada.membros.map((membro, idx) => (
              <View key={idx} className="flex-row justify-between mb-2">
                <Text className="text-black">{membro.nome}</Text>
                <Text className={membro.disponibilidade === 'Disponível' ? 'text-green-500' : 'text-red-500'}>
                  {membro.disponibilidade}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

// Componente para verificar a disponibilidade
function DisponibilidadeEquipes({ onSelect, selectedManutencao }: DisponibilidadeEquipesProps) {
  const manutencaoSelecionada = manutencoesMockadas.find(manutencao => manutencao.id === selectedManutencao);
  const equipesDisponiveis = equipesMockadas.filter(equipe =>
    manutencaoSelecionada?.equipesDisponiveis.includes(equipe.nomeEquipe)
  );

  return (
    <View className="flex-1 p-4 bg-customBlue">
      <Text className="text-2xl font-bold text-white mb-4 text-center">Verificar Disponibilidade</Text>
      <ScrollView className="w-full">
        <Text className="text-lg font-bold text-white mb-2">Selecione a Manutenção</Text>
        {manutencoesMockadas.map((manutencao) => (
          <TouchableOpacity
            key={manutencao.id}
            className={`p-4 mb-2 rounded ${
              selectedManutencao === manutencao.id ? 'bg-blue-500' : 'bg-customGrey'
            }`}
            onPress={() => onSelect(manutencao.id)}
          >
            <Text
              className={`text-center ${
                selectedManutencao === manutencao.id ? 'text-black' : 'text-black'
              }`}
            >
              {manutencao.descricao}
            </Text>
            <Text className="text-sm text-black">Máquina: {manutencao.maquina}</Text>
            <Text className="text-sm text-black">Responsável: {manutencao.responsavel}</Text>
            <Text className="text-sm text-black">Prioridade: {manutencao.prioridade}</Text>
          </TouchableOpacity>
        ))}

        {manutencaoSelecionada && (
          <View className="mt-4 p-4 bg-customGrey shadow-md rounded">
            <Text className="text-xl font-bold mb-2">Manutenção Selecionada</Text>
            <Text className="mb-2">Descrição: {manutencaoSelecionada.descricao}</Text>
            <Text className="mb-2">Máquina: {manutencaoSelecionada.maquina}</Text>
            <Text className="mb-2">Responsável: {manutencaoSelecionada.responsavel}</Text>
            <Text className="mb-2">Prioridade: {manutencaoSelecionada.prioridade}</Text>

            <Text className="text-lg font-bold mb-2">Equipes Disponíveis:</Text>
            {equipesDisponiveis.map((equipe, idx) => (
              <View key={idx} className="mb-2 p-2 rounded bg-gray-200">
                <Text className="text-lg font-bold">{equipe.nomeEquipe}</Text>
                <Text>{equipe.descricao}</Text>
                <Text className="text-sm">Membros:</Text>
                {equipe.membros.map((membro, i) => (
                  <View key={i} className="flex-row justify-between mb-1">
                    <Text className="text-black">{membro.nome}</Text>
                    <Text className={membro.disponibilidade === 'Disponível' ? 'text-green-500' : 'text-red-500'}>
                      {membro.disponibilidade}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
