"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';

// Define o tipo de dado para o relatório de manutenção
type RelatorioManutencao = {
  maquina: string;
  periodo: string;
  tipoManutencao: string;
  equipe: string;
  quantidadeManutencoes: number;
};

// Dados mockados para os relatórios de manutenção
const relatoriosMockados: RelatorioManutencao[] = [
  { maquina: 'Máquina A', periodo: '01/2024 - 06/2024', tipoManutencao: 'Preventiva', equipe: 'Equipe A', quantidadeManutencoes: 5 },
  { maquina: 'Máquina B', periodo: '01/2024 - 06/2024', tipoManutencao: 'Corretiva', equipe: 'Equipe B', quantidadeManutencoes: 3 },
  { maquina: 'Máquina C', periodo: '01/2024 - 06/2024', tipoManutencao: 'Emergencial', equipe: 'Equipe C', quantidadeManutencoes: 7 },
  { maquina: 'Máquina A', periodo: '07/2024 - 12/2024', tipoManutencao: 'Preventiva', equipe: 'Equipe A', quantidadeManutencoes: 4 },
];

// Componente principal para exibir os relatórios de manutenção
export function RelatoriosManutencao() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Geração de Relatórios</h2>

      {/* Formulário para filtrar os relatórios */}
      <form className="p-4 mb-8">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="maquina">
            Máquina
          </label>
          <select
            id="maquina"
            name="maquina"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Todas</option>
            <option value="Máquina A">Máquina A</option>
            <option value="Máquina B">Máquina B</option>
            <option value="Máquina C">Máquina C</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="periodo">
            Período
          </label>
          <select
            id="periodo"
            name="periodo"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Todos</option>
            <option value="01/2024 - 06/2024">01/2024 - 06/2024</option>
            <option value="07/2024 - 12/2024">07/2024 - 12/2024</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="tipoManutencao">
            Tipo de Manutenção
          </label>
          <select
            id="tipoManutencao"
            name="tipoManutencao"
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Todos</option>
            <option value="Preventiva">Preventiva</option>
            <option value="Corretiva">Corretiva</option>
            <option value="Emergencial">Emergencial</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="equipe">
            Equipe
          </label>
          <select
            id="equipe"
            name="equipe"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Todas</option>
            <option value="Equipe A">Equipe A</option>
            <option value="Equipe B">Equipe B</option>
            <option value="Equipe C">Equipe C</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-customBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </div>
      </form>

      <h3 className="text-xl font-bold mb-4">Relatórios Gerados</h3>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Máquina</th>
            <th className="py-2 px-4 border-b">Período</th>
            <th className="py-2 px-4 border-b">Tipo de Manutenção</th>
            <th className="py-2 px-4 border-b">Equipe</th>
            <th className="py-2 px-4 border-b">Quantidade de Manutenções</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeia os relatórios mockados e exibe cada um em uma linha da tabela */}
          {relatoriosMockados.map((relatorio, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{relatorio.maquina}</td>
              <td className="py-2 px-4 border-b">{relatorio.periodo}</td>
              <td className="py-2 px-4 border-b">{relatorio.tipoManutencao}</td>
              <td className="py-2 px-4 border-b">{relatorio.equipe}</td>
              <td className="py-2 px-4 border-b">{relatorio.quantidadeManutencoes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
