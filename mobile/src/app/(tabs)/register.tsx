import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

// Dados fictícios para simular manutenções
const manutencoesMocadas = [
  { id: 1, descricao: 'Troca de óleo', maquina: 'Fresadora', responsavel: 'Pedro', status: 'Concluído', prioridade: 'Alta' },
  { id: 2, descricao: 'Substituição de filtro', maquina: 'CNC', responsavel: 'Maria', status: 'Pendente', prioridade: 'Média' },
  { id: 3, descricao: 'Ajuste de correia', maquina: 'Torno', responsavel: 'Augusto', status: 'Em progresso', prioridade: 'Baixa' },
];

// Interface para definir o formato dos itens de peça/material
interface PecaMaterial {
  descricao: string;
  quantidade: string;
}

export default function RegistroMateriaisManutencao() {
  // Estado para controlar a manutenção selecionada e as peças materiais
  const [manutencaoSelecionada, setManutencaoSelecionada] = useState<number | null>(null);
  const [pecasMateriais, setPecasMateriais] = useState<PecaMaterial[]>([
    { descricao: 'Parafuso', quantidade: '100' },
    { descricao: 'Chave de fenda', quantidade: '10' },
  ]);

  // Função para selecionar uma manutenção específica
  const selecionarManutencao = (id: number) => {
    setManutencaoSelecionada(id);
  };

  // Função para adicionar uma nova peça/material à lista
  const adicionarPecaMaterial = () => {
    setPecasMateriais([...pecasMateriais, { descricao: '', quantidade: '' }]);
  };

  // Função para remover uma peça/material da lista
  const removerPecaMaterial = (index: number) => {
    const updatedPecas = pecasMateriais.filter((_, i) => i !== index);
    setPecasMateriais(updatedPecas);
  };

  // Função para atualizar uma peça/material existente
  const atualizarPecaMaterial = (index: number, field: keyof PecaMaterial, value: string) => {
    const updatedPecas = pecasMateriais.map((peca, i) =>
      i === index ? { ...peca, [field]: value } : peca
    );
    setPecasMateriais(updatedPecas);
  };

  // Obtemos os detalhes da manutenção selecionada
  const manutencaoAtiva = manutencoesMocadas.find(
    (manutencao) => manutencao.id === manutencaoSelecionada
  );

  return (
    <SafeAreaView className="flex-1 bg-customBlue">
      <ScrollView className="flex-1 mb-16">
        
        {/* Condicional para exibir a lista de manutenções ou os detalhes da manutenção selecionada */}
        {manutencaoSelecionada === null ? (
          <View className="flex-1 m-5">
            <Text className="text-2xl font-bold text-white mb-4 text-center">Selecione uma Manutenção</Text>
            {manutencoesMocadas.map((manutencao) => (
              <TouchableOpacity
                key={manutencao.id}
                className={`p-4 mb-4 rounded-lg ${manutencaoSelecionada === manutencao.id ? 'bg-customGrey' : 'bg-customGrey'}`}
                onPress={() => selecionarManutencao(manutencao.id)}
              >
                <Text className={`text-lg font-bold ${manutencaoSelecionada === manutencao.id ? 'text-black' : 'text-black'}`}>
                  {manutencao.descricao} - {manutencao.maquina}
                </Text>
                <Text className="text-slate-900">Responsável: {manutencao.responsavel}</Text>
                <Text className="text-slate-900">Status: {manutencao.status}</Text>
                <Text className="text-slate-900">Prioridade: {manutencao.prioridade}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View className="flex-1 m-4">
            <Text className="text-2xl font-bold text-white text-center mb-4">Manutenção: {manutencaoAtiva?.descricao}</Text>
            <Text className="text-xl text-white mb-2">Máquina: {manutencaoAtiva?.maquina}</Text>
            <Text className="text-xl text-white mb-2">Responsável: {manutencaoAtiva?.responsavel}</Text>
            <Text className="text-xl text-white mb-2">Status: {manutencaoAtiva?.status}</Text>
            <Text className="text-xl text-white mb-4">Prioridade: {manutencaoAtiva?.prioridade}</Text>

            {/* Se a manutenção estiver selecionada, exibe os materiais utilizados */}
            <Text className="text-xl font-bold text-white mt-5">Materiais Utilizados:</Text>
            {pecasMateriais.map((peca, index) => (
              <View key={index} className="flex-row items-center bg-customBlue p-4 rounded-lg">
                <View className="flex-1 mr-2">
                  <TextInput
                    className="border border-gray-300 rounded-md p-2 text-slate-900 bg-customGrey"
                    placeholder="Nome da peça"
                    placeholderTextColor="#202020"
                    value={peca.descricao}
                    onChangeText={(value) => atualizarPecaMaterial(index, 'descricao', value)}
                  />
                </View>
                <View className="w-24">
                  <TextInput
                    className="border border-gray-300 rounded-md p-2 text-slate-900 bg-customGrey"
                    placeholder="Qtd"
                    placeholderTextColor="#202020"
                    keyboardType="numeric"
                    value={peca.quantidade}
                    onChangeText={(value) => atualizarPecaMaterial(index, 'quantidade', value)}
                  />
                </View>
                <TouchableOpacity
                  className="bg-red-600 p-2 rounded-md ml-2"
                  onPress={() => removerPecaMaterial(index)}
                >
                  <Text className="text-white font-bold">Remover</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Se uma manutenção estiver selecionada, exibe botões para adicionar peça/material e ações de salvar/cancelar */}
      {manutencaoSelecionada !== null && (
        <View className="absolute bottom-0 left-0 right-0 p-4 bg-customBlue">
          <TouchableOpacity
            className="bg-green-500 p-3 rounded-md w-full mb-4"
            onPress={adicionarPecaMaterial}
          >
            <Text className="text-white font-bold text-center">Adicionar Peça/Material</Text>
          </TouchableOpacity>

          <View className="flex-row justify-between">
            <TouchableOpacity
              className="bg-cyan-500 p-3 rounded-md flex-1 mr-2"
              onPress={() => {
                alert('Dados salvos!');
              }}
            >
              <Text className="text-white font-bold text-center">Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-red-600 p-3 rounded-md flex-1 ml-2"
              onPress={() => setManutencaoSelecionada(null)}
            >
              <Text className="text-white font-bold text-center">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
