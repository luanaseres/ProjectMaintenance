"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';

type PecaMaterial = {
  id: number;
  nome: string;
  fornecedor: string;
  quantidade: number;
};

const pecasMateriaisMockados: PecaMaterial[] = [
  { id: 1, nome: 'Parafuso', fornecedor: 'Fornecedor A', quantidade: 50 },
  { id: 2, nome: 'Porca', fornecedor: 'Fornecedor B', quantidade: 30 },
  { id: 3, nome: 'Arruela', fornecedor: 'Fornecedor C', quantidade: 100 },
];

export function RegistroMateriais() {
  const [pecasMateriais, setPecasMateriais] = React.useState<PecaMaterial[]>(pecasMateriaisMockados);

  const registrarPecaMaterial = (pecaMaterial: PecaMaterial) => {
    setPecasMateriais((pecasAnteriores) => [...pecasAnteriores, pecaMaterial]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nome = formData.get('nome') as string;
    const fornecedor = formData.get('fornecedor') as string;
    const quantidade = parseInt(formData.get('quantidade') as string);

    const novaPecaMaterial: PecaMaterial = {
      id: pecasMateriais.length + 1,
      nome,
      fornecedor,
      quantidade,
    };

    registrarPecaMaterial(novaPecaMaterial);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Registro de Peças e Materiais</h2>

      <form className="max-w-lg mx-auto bg-white shadow-md rounded p-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
            Nome da Peça/Material
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor">
            Fornecedor
          </label>
          <input
            type="text"
            id="fornecedor"
            name="fornecedor"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
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

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrar Peça/Material
          </button>
        </div>
      </form>

      <h3 className="text-xl font-bold mt-8">Peças e Materiais Utilizados</h3>
      <ul className="list-disc pl-5">
        {pecasMateriais.map((pecaMaterial) => (
          <li key={pecaMaterial.id}>
            {pecaMaterial.nome} - Fornecedor: {pecaMaterial.fornecedor} - Quantidade: {pecaMaterial.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
}
