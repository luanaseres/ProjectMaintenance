"use client"; // Garante que o Next.js trate este componente como Client Component

import React from 'react';

type Maquina = {
  id: number;
  nome: string;
  tipo: string;
  modelo: string;
  localizacao: string;
};

const maquinasMockadas: Maquina[] = [
  { id: 1, nome: 'Máquina 1', tipo: 'CNC', modelo: 'XYZ-1000', localizacao: 'Fábrica A' },
  { id: 2, nome: 'Máquina 2', tipo: 'Impressora 3D', modelo: 'Ultimaker S5', localizacao: 'Fábrica B' },
  { id: 3, nome: 'Máquina 3', tipo: 'Torno', modelo: 'HAAS ST-20', localizacao: 'Fábrica A' },
  { id: 4, nome: 'Máquina 4', tipo: 'Fresadora', modelo: 'Bridgeport VMC', localizacao: 'Fábrica C' },
  { id: 5, nome: 'Máquina 5', tipo: 'Laser Cutter', modelo: 'Trotec Speedy 300', localizacao: 'Fábrica A' },
  { id: 6, nome: 'Máquina 6', tipo: 'Router CNC', modelo: 'ShopBot PRSalpha', localizacao: 'Fábrica B' },
  { id: 7, nome: 'Máquina 7', tipo: 'Plasma Cutter', modelo: 'Hypertherm Powermax45', localizacao: 'Fábrica C' },
  { id: 8, nome: 'Máquina 8', tipo: 'CNC', modelo: 'DMG Mori CMX 600 V', localizacao: 'Fábrica A' },
  { id: 9, nome: 'Máquina 9', tipo: 'Impressora 3D', modelo: 'Formlabs Form 3', localizacao: 'Fábrica B' },
  { id: 10, nome: 'Máquina 10', tipo: 'Torno', modelo: 'Mazak QT-250MSY', localizacao: 'Fábrica C' },
];

export function TabelaMaquinas() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Máquinas Existentes na Empresa</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Nome</th>
            <th className="py-2 px-4 text-left">Tipo</th>
            <th className="py-2 px-4 text-left">Modelo</th>
            <th className="py-2 px-4 text-left">Localização</th>
          </tr>
        </thead>
        <tbody>
          {maquinasMockadas.map((maquina) => (
            <tr key={maquina.id} className="border-t">
              <td className="py-2 px-4">{maquina.id}</td>
              <td className="py-2 px-4">{maquina.nome}</td>
              <td className="py-2 px-4">{maquina.tipo}</td>
              <td className="py-2 px-4">{maquina.modelo}</td>
              <td className="py-2 px-4">{maquina.localizacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
