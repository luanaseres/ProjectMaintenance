"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';

type Colaborador = {
  nome: string;
  disponibilidade: string; // "Disponível" ou "Ocupado"
};

type Equipe = {
  nomeEquipe: string;
  membros: Colaborador[];
};

const equipesMockadas: Equipe[] = [
  {
    nomeEquipe: 'Equipe A',
    membros: [
      { nome: 'João Silva', disponibilidade: 'Disponível' },
      { nome: 'Maria Souza', disponibilidade: 'Ocupado' },
    ],
  },
  {
    nomeEquipe: 'Equipe B',
    membros: [
      { nome: 'Carlos Pereira', disponibilidade: 'Disponível' },
      { nome: 'Ana Oliveira', disponibilidade: 'Disponível' },
    ],
  },
  {
    nomeEquipe: 'Equipe C',
    membros: [
      { nome: 'Rafael Santos', disponibilidade: 'Ocupado' },
      { nome: 'Beatriz Gomes', disponibilidade: 'Disponível' },
    ],
  },
];

export function AtribuicaoEquipes() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Atribuição de Equipes</h2>

      <form className="max-w-lg mx-auto bg-white shadow-md rounded p-4 mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="solicitacao">
            Solicitação de Manutenção
          </label>
          <select
            id="solicitacao"
            name="solicitacao"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="1">Solicitação 1</option>
            <option value="2">Solicitação 2</option>
            <option value="3">Solicitação 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="equipe">
            Equipe
          </label>
          <select
            id="equipe"
            name="equipe"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {equipesMockadas.map((equipe, index) => (
              <option key={index} value={equipe.nomeEquipe}>
                {equipe.nomeEquipe}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Atribuir Equipe
          </button>
        </div>
      </form>

      <h3 className="text-xl font-bold mb-4">Disponibilidade dos Colaboradores</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {equipesMockadas.map((equipe, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <h4 className="font-bold mb-2">{equipe.nomeEquipe}</h4>
            <ul>
              {equipe.membros.map((membro, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{membro.nome}</span>
                  <span
                    className={
                      membro.disponibilidade === 'Disponível'
                        ? 'text-green-500'
                        : 'text-red-500'
                    }
                  >
                    {membro.disponibilidade}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
