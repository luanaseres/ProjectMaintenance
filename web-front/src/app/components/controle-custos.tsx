"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';

type Custo = {
  categoria: string;
  descricao: string;
  valor: number;
};

const custosMockados: Custo[] = [
  { categoria: 'Peças', descricao: 'Peça de reposição A', valor: 150.0 },
  { categoria: 'Materiais', descricao: 'Material de construção B', valor: 75.5 },
  { categoria: 'Mão de Obra', descricao: 'Serviço de reparo C', valor: 200.0 },
  { categoria: 'Serviços', descricao: 'Serviço de transporte D', valor: 50.0 },
];

export function ControleCustos() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Controle de Custos</h2>

      <form className="p-4 mb-8">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="categoria">
            Categoria
          </label>
          <select
            id="categoria"
            name="categoria"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Peças">Peças</option>
            <option value="Materiais">Materiais</option>
            <option value="Mão de Obra">Mão de Obra</option>
            <option value="Serviços">Serviços</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descricao">
            Descrição
          </label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Descrição do gasto"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="valor">
            Valor
          </label>
          <input
            type="number"
            id="valor"
            name="valor"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Valor do gasto"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-customBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrar Gasto
          </button>
        </div>
      </form>

      <h3 className="text-xl font-bold mb-4">Custos Registrados</h3>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Categoria</th>
            <th className="py-2 px-4 border-b">Descrição</th>
            <th className="py-2 px-4 border-b">Valor (R$)</th>
          </tr>
        </thead>
        <tbody>
          {custosMockados.map((custo, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{custo.categoria}</td>
              <td className="py-2 px-4 border-b">{custo.descricao}</td>
              <td className="py-2 px-4 border-b">{custo.valor.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
