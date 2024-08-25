"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';

// Define o tipo para uma peça de estoque
type Peca = {
  id: number; // Identificador único da peça
  nome: string; // Nome da peça
  quantidadeEstoque: number; // Quantidade atual em estoque
};

// Dados mockados para exemplificar o controle de estoque
const pecasMockadas: Peca[] = [
  { id: 1, nome: 'Parafuso', quantidadeEstoque: 100 },
  { id: 2, nome: 'Porca', quantidadeEstoque: 50 },
  { id: 3, nome: 'Arruela', quantidadeEstoque: 200 },
];

// Componente ControleEstoque que gerencia o estoque e permite registrar movimentações
export function ControleEstoque() {
  // Estado para armazenar as peças e suas quantidades em estoque
  const [pecas, setPecas] = React.useState<Peca[]>(pecasMockadas);

  // Função para registrar movimentações no estoque (entrada ou saída)
  const registrarMovimentacao = (id: number, quantidade: number, isEntrada: boolean) => {
    setPecas((pecasAnteriores) =>
      pecasAnteriores.map((peca) =>
        peca.id === id
          ? {
              ...peca,
              quantidadeEstoque: isEntrada
                ? peca.quantidadeEstoque + quantidade
                : peca.quantidadeEstoque - quantidade,
            }
          : peca
      )
    );
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    const formData = new FormData(event.currentTarget); // Obtém os dados do formulário
    const pecaId = parseInt(formData.get('pecaId') as string); // Obtém o ID da peça
    const quantidade = parseInt(formData.get('quantidade') as string); // Obtém a quantidade
    const tipoMovimentacao = formData.get('tipoMovimentacao') as string; // Obtém o tipo de movimentação (entrada ou saída)

    // Registra a movimentação no estoque com base nas informações do formulário
    registrarMovimentacao(pecaId, quantidade, tipoMovimentacao === 'entrada');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Controle de Estoque</h2>

      {/* Formulário para registrar movimentações no estoque */}
      <form className="p-4 mb-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="pecaId">
            Peça
          </label>
          <select
            id="pecaId"
            name="pecaId"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            {pecas.map((peca) => (
              <option key={peca.id} value={peca.id}>
                {peca.nome}
              </option>
            ))}
          </select>
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

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Tipo de Movimentação</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="tipoMovimentacao"
                value="entrada"
                defaultChecked
                className="mr-2"
              />
              Entrada
            </label>
            <label>
              <input
                type="radio"
                name="tipoMovimentacao"
                value="saida"
                className="mr-2"
              />
              Saída
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-customBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrar Movimentação
          </button>
        </div>
      </form>

      <h3 className="text-xl font-bold mt-8">Estoque Atual</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nome</th>
              <th className="py-2 px-4 border-b">Quantidade em Estoque</th>
            </tr>
          </thead>
          <tbody>
            {pecas.map((peca) => (
              <tr key={peca.id}>
                <td className="py-2 px-4 border-b">{peca.id}</td>
                <td className="py-2 px-4 border-b">{peca.nome}</td>
                <td className="py-2 px-4 border-b">{peca.quantidadeEstoque}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
