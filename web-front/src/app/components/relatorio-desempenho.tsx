"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';

type RelatorioDesempenho = {
  equipe: string;
  tempoMedioResolucao: number; // Em horas
  manutencoesRealizadas: number;
  pecasUtilizadas: number;
};

const relatoriosMockados: RelatorioDesempenho[] = [
  { equipe: 'Equipe A', tempoMedioResolucao: 5.2, manutencoesRealizadas: 12, pecasUtilizadas: 30 },
  { equipe: 'Equipe B', tempoMedioResolucao: 3.8, manutencoesRealizadas: 20, pecasUtilizadas: 45 },
  { equipe: 'Equipe C', tempoMedioResolucao: 6.4, manutencoesRealizadas: 15, pecasUtilizadas: 28 },
];

export function RelatoriosDesempenho() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Relatórios de Desempenho</h2>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Equipe</th>
            <th className="py-2 px-4 border-b">Tempo Médio de Resolução (h)</th>
            <th className="py-2 px-4 border-b">Manutenções Realizadas</th>
            <th className="py-2 px-4 border-b">Peças Utilizadas</th>
          </tr>
        </thead>
        <tbody>
          {relatoriosMockados.map((relatorio, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{relatorio.equipe}</td>
              <td className="py-2 px-4 border-b">{relatorio.tempoMedioResolucao.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{relatorio.manutencoesRealizadas}</td>
              <td className="py-2 px-4 border-b">{relatorio.pecasUtilizadas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
