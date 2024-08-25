"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';

type PecaMaterial = {
  id: number; // Identificador único da peça/material
  nome: string; // Nome da peça/material
  fornecedor: string; // Nome do fornecedor da peça/material
  quantidade: number; // Quantidade da peça/material
};

// Dados mockados para simular um conjunto inicial de peças e materiais
const pecasMateriaisMockados: PecaMaterial[] = [
  { id: 1, nome: 'Parafuso', fornecedor: 'Fornecedor A', quantidade: 50 },
  { id: 2, nome: 'Porca', fornecedor: 'Fornecedor B', quantidade: 30 },
  { id: 3, nome: 'Arruela', fornecedor: 'Fornecedor C', quantidade: 100 },
];

export function RegistroMateriais() {
  // Define o estado inicial com os dados mockados
  const [pecasMateriais, setPecasMateriais] = React.useState<PecaMaterial[]>(pecasMateriaisMockados);

  // Função para registrar uma nova peça/material
  const registrarPecaMaterial = (pecaMaterial: PecaMaterial) => {
    // Atualiza o estado adicionando a nova peça/material ao final da lista
    setPecasMateriais((pecasAnteriores) => [...pecasAnteriores, pecaMaterial]);
  };

  // Função que é chamada ao submeter o formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
    const formData = new FormData(event.currentTarget); // Captura os dados do formulário
    const nome = formData.get('nome') as string; // Extrai o valor do campo 'nome'
    const fornecedor = formData.get('fornecedor') as string; // Extrai o valor do campo 'fornecedor'
    const quantidade = parseInt(formData.get('quantidade') as string); // Extrai e converte o valor do campo 'quantidade' para número

    // Cria um novo objeto PecaMaterial com os dados capturados
    const novaPecaMaterial: PecaMaterial = {
      id: pecasMateriais.length + 1, // Gera um novo ID baseado na quantidade atual de itens
      nome,
      fornecedor,
      quantidade,
    };

    // Chama a função para registrar a nova peça/material
    registrarPecaMaterial(novaPecaMaterial);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Registro de Peças e Materiais</h2>

      {/* Formulário para registro de novas peças/materiais */}
      <form className="p-4 mb-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="nome">
            Nome da Peça/Material
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="fornecedor">
            Fornecedor
          </label>
          <input
            type="text"
            id="fornecedor"
            name="fornecedor"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="quantidade">
            Quantidade
          </label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-customBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrar
          </button>
        </div>
      </form>

      <h3 className="text-xl font-bold mt-8">Peças e Materiais Utilizados</h3>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nome</th>
              <th className="py-2 px-4 border-b">Fornecedor</th>
              <th className="py-2 px-4 border-b">Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {pecasMateriais.map((pecaMaterial) => (
              <tr key={pecaMaterial.id}>
                <td className="py-2 px-4 border-b">{pecaMaterial.id}</td>
                <td className="py-2 px-4 border-b">{pecaMaterial.nome}</td>
                <td className="py-2 px-4 border-b">{pecaMaterial.fornecedor}</td>
                <td className="py-2 px-4 border-b">{pecaMaterial.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
