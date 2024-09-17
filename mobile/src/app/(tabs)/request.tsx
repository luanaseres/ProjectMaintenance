import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Componente principal para criar uma solicitação de manutenção
export default function TabRequest() {
  // Estados para armazenar os dados do formulário
  const [descricao, setDescricao] = useState(''); // Descrição do problema
  const [prioridade, setPrioridade] = useState(''); // Prioridade da solicitação
  const [responsavel, setResponsavel] = useState(''); // Nome do responsável
  const [status, setStatus] = useState('pendente'); // Status da solicitação
  const [comentarios, setComentarios] = useState(''); // Comentários adicionais
  const [foto, setFoto] = useState<string | null>(null); // URI da foto selecionada

  // Função para escolher uma imagem da galeria
  const escolherImagem = async () => {

    // Solicita permissão para acessar a galeria de imagens
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      // Abre a galeria de imagens para o usuário selecionar uma imagem
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        // Atualiza o estado com a URI da imagem selecionada
        const { uri } = result.assets[0];
        setFoto(uri);
      }
    }
  };

  // Função para criar a solicitação de manutenção (simula o envio dos dados)
  const criarSolicitacao = () => {
    console.log({
      descricao,
      prioridade,
      responsavel,
      status,
      comentarios,
      foto,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-customBlue">
      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold text-white mb-4">Criar Solicitação de Manutenção</Text>

        {/* Campo para descrição do problema */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Descrição do Problema</Text>
          <TextInput
            className="p-2 rounded bg-white"
            placeholder="Descreva o problema"
            placeholderTextColor="gray"
            value={descricao}
            onChangeText={setDescricao}
          />
        </View>

        {/* Campo para prioridade */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Prioridade</Text>
          <TextInput
            className="p-2 rounded bg-white"
            placeholder="Ex.: Alta, Média, Baixa"
            placeholderTextColor="gray"
            value={prioridade}
            onChangeText={setPrioridade}
          />
        </View>

        {/* Campo para responsável */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Responsável</Text>
          <TextInput
            className="p-2 rounded bg-white"
            placeholder="Nome do responsável"
            placeholderTextColor="gray"
            value={responsavel}
            onChangeText={setResponsavel}
          />
        </View>

        {/* Seletor de status */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Status</Text>
          <View className="flex-row">
            {/* Botões para selecionar o status */}
            <TouchableOpacity
              className={`p-2 rounded ${status === 'pendente' ? 'bg-blue-600' : 'bg-gray-600'} mr-2`}
              onPress={() => setStatus('pendente')}
            >
              <Text className="text-white">Pendente</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`p-2 rounded ${status === 'em andamento' ? 'bg-yellow-600' : 'bg-gray-600'} mr-2`}
              onPress={() => setStatus('em andamento')}
            >
              <Text className="text-white">Em Andamento</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`p-2 rounded ${status === 'concluída' ? 'bg-green-600' : 'bg-gray-600'}`}
              onPress={() => setStatus('concluída')}
            >
              <Text className="text-white">Concluída</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Campo para comentários adicionais */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Comentários</Text>
          <TextInput
            className="p-2 rounded bg-white"
            placeholder="Adicione comentários"
            placeholderTextColor="gray"
            value={comentarios}
            onChangeText={setComentarios}
          />
        </View>

        {/* Seção para selecionar e exibir uma foto */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Foto</Text>
          <Button title="Escolher Imagem" onPress={escolherImagem}/>
         
          {/* Exibe a imagem selecionada, se houver */}
          {foto && <Image source={{ uri: foto }} style={{ width: 100, height: 100, marginTop: 10 }} />}
        </View>

        {/* Botão para criar a solicitação */}
        <TouchableOpacity
          className="bg-blue-600 p-3 rounded-md"
          onPress={criarSolicitacao}
        >
          <Text className="text-white text-center text-lg">Criar Solicitação</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
