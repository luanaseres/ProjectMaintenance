"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';
import Link from 'next/link';

type Manutencao = {
  id: number;
  descricao: string;
  dataSolicitacao: string;
  prioridade: string;
  responsavel: string;
  status: string;
};

const manutencoesMockadas: Manutencao[] = [
  { id: 1, descricao: 'Troca de óleo', dataSolicitacao: '2024-08-20', prioridade: 'Alta', responsavel: 'João', status: 'Concluída' },
  { id: 2, descricao: 'Reparo no motor', dataSolicitacao: '2024-08-22', prioridade: 'Média', responsavel: 'Maria', status: 'Em Andamento' },
  { id: 3, descricao: 'Substituição de peças', dataSolicitacao: '2024-08-24', prioridade: 'Baixa', responsavel: 'Pedro', status: 'Pendente' },
];

export function TabelaManutencoes() {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Descrição</th>
            <th className="py-2 px-4 border-b">Data da Solicitação</th>
            <th className="py-2 px-4 border-b">Prioridade</th>
            <th className="py-2 px-4 border-b">Responsável</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Ação</th>
          </tr>
        </thead>
        <tbody>
          {manutencoesMockadas.map((manutencao) => (
            <tr key={manutencao.id}>
              <td className="py-2 px-4 border-b">{manutencao.id}</td>
              <td className="py-2 px-4 border-b">{manutencao.descricao}</td>
              <td className="py-2 px-4 border-b">{manutencao.dataSolicitacao}</td>
              <td className="py-2 px-4 border-b">{manutencao.prioridade}</td>
              <td className="py-2 px-4 border-b">{manutencao.responsavel}</td>
              <td className="py-2 px-4 border-b">{manutencao.status}</td>
              <td className="py-2 px-4 border-b">
                <Link href="/statusManutencao" className="text-blue-500 hover:underline">
                  Gerenciar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
