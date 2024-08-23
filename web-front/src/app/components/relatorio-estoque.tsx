"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';

type RelatorioEstoque = {
  peca: string;
  fornecedor: string;
  periodo: string;
  quantidade: number;
};

const relatoriosEstoqueMockados: RelatorioEstoque[] = [
  { peca: 'Peça A', fornecedor: 'Fornecedor X', periodo: '01/2024 - 06/2024', quantidade: 100 },
  { peca: 'Peça B', fornecedor: 'Fornecedor Y', periodo: '01/2024 - 06/2024', quantidade: 200 },
  { peca: 'Peça C', fornecedor: 'Fornecedor Z', periodo: '07/2024 - 12/2024', quantidade: 150 },
  { peca: 'Peça A', fornecedor: 'Fornecedor X', periodo: '07/2024 - 12/2024', quantidade: 80 },
];

export function RelatoriosEstoque() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Geração de Relatórios de Estoque</h2>

      <form className="max-w-lg mx-auto bg-white shadow-md rounded p-4 mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="peca">
            Peça
          </label>
          <select
            id="peca"
            name="peca"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Todas</option>
            <option value="Peça A">Peça A</option>
            <option value="Peça B">Peça B</option>
            <option value="Peça C">Peça C</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fornecedor">
            Fornecedor
          </label>
          <select
            id="fornecedor"
            name="fornecedor"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Todos</option>
            <option value="Fornecedor X">Fornecedor X</option>
            <option value="Fornecedor Y">Fornecedor Y</option>
            <option value="Fornecedor Z">Fornecedor Z</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="periodo">
            Período
          </label>
          <select
            id="periodo"
            name="periodo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Todos</option>
            <option value="01/2024 - 06/2024">01/2024 - 06/2024</option>
            <option value="07/2024 - 12/2024">07/2024 - 12/2024</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Gerar Relatório
          </button>
        </div>
      </form>

      <h3 className="text-xl font-bold mb-4">Relatórios Gerados</h3>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Peça</th>
            <th className="py-2 px-4 border-b">Fornecedor</th>
            <th className="py-2 px-4 border-b">Período</th>
            <th className="py-2 px-4 border-b">Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {relatoriosEstoqueMockados.map((relatorio, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{relatorio.peca}</td>
              <td className="py-2 px-4 border-b">{relatorio.fornecedor}</td>
              <td className="py-2 px-4 border-b">{relatorio.periodo}</td>
              <td className="py-2 px-4 border-b">{relatorio.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
