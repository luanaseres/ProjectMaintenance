import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function TabRequest() {
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [status, setStatus] = useState('pendente');
  const [comentarios, setComentarios] = useState('');
  const [foto, setFoto] = useState<string | null>(null);

  const escolherImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const { uri } = result.assets[0]; // Acessa a URI da imagem
        setFoto(uri);
      }
    }
  };

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

        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Descrição do Problema</Text>
          <TextInput
            className="p-2 rounded bg-white"
            placeholder="Descreva o problema"
            value={descricao}
            onChangeText={setDescricao}
          />
        </View>

        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Prioridade</Text>
          <TextInput
            className="p-2 rounded bg-white"
            placeholder="Ex.: Alta, Média, Baixa"
            value={prioridade}
            onChangeText={setPrioridade}
          />
        </View>

        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Responsável</Text>
          <TextInput
            className="p-2 rounded bg-white"
            placeholder="Nome do responsável"
            value={responsavel}
            onChangeText={setResponsavel}
          />
        </View>

        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Status</Text>
          <View className="flex-row">
            <TouchableOpacity
              className={`p-2 rounded ${status === 'pendente' ? 'bg-green-600' : 'bg-gray-600'} mr-2`}
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
              className={`p-2 rounded ${status === 'concluída' ? 'bg-blue-600' : 'bg-gray-600'}`}
              onPress={() => setStatus('concluída')}
            >
              <Text className="text-white">Concluída</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Comentários</Text>
          <TextInput
            className="p-2 rounded bg-white"
            placeholder="Adicione comentários"
            value={comentarios}
            onChangeText={setComentarios}
          />
        </View>

        <View className="mb-4">
          <Text className="text-lg font-semibold text-white mb-2">Foto</Text>
          <Button title="Escolher Imagem" onPress={escolherImagem} />
          {foto && <Image source={{ uri: foto }} style={{ width: 100, height: 100, marginTop: 10 }} />}
        </View>

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
