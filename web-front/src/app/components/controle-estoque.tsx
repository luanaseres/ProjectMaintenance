"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';

type Peca = {
  id: number;
  nome: string;
  quantidadeEstoque: number;
};

const pecasMockadas: Peca[] = [
  { id: 1, nome: 'Parafuso', quantidadeEstoque: 100 },
  { id: 2, nome: 'Porca', quantidadeEstoque: 50 },
  { id: 3, nome: 'Arruela', quantidadeEstoque: 200 },
];

export function ControleEstoque() {
  const [pecas, setPecas] = React.useState<Peca[]>(pecasMockadas);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const pecaId = parseInt(formData.get('pecaId') as string);
    const quantidade = parseInt(formData.get('quantidade') as string);
    const tipoMovimentacao = formData.get('tipoMovimentacao') as string;

    registrarMovimentacao(pecaId, quantidade, tipoMovimentacao === 'entrada');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Controle de Estoque</h2>

      <form className="max-w-lg mx-auto bg-white shadow-md rounded p-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pecaId">
            Peça
          </label>
          <select
            id="pecaId"
            name="pecaId"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {pecas.map((peca) => (
              <option key={peca.id} value={peca.id}>
                {peca.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantidade">
            Quantidade
          </label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Tipo de Movimentação</label>
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrar Movimentação
          </button>
        </div>
      </form>

      <h3 className="text-xl font-bold mt-8">Estoque Atual</h3>
      <ul className="list-disc pl-5">
        {pecas.map((peca) => (
          <li key={peca.id}>
            {peca.nome}: {peca.quantidadeEstoque} unidades
          </li>
        ))}
      </ul>
    </div>
  );
}