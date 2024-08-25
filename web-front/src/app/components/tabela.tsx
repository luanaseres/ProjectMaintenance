"use client"; // Garante que o Next.js trate este componente como Client Component

import React, { useState } from 'react';
import Link from 'next/link';

type Item = {
  id: number;
  nome: string;
  modelo: string;
  quantidade: string;
  status: string;
};

const itensMockados: Item[] = [
  // Máquinas
  { id: 1, nome: 'CNC', modelo: 'XYZ-1000', quantidade: '26', status: 'Ativo' },
  { id: 2, nome: 'Impressora 3D', modelo: 'Ultimaker S5', quantidade: '12', status: 'Inativo' },
  { id: 3, nome: 'Torno', modelo: 'HAAS ST-20', quantidade: '23', status: 'Ativo' },
  { id: 4, nome: 'Fresadora', modelo: 'Bridgeport VMC', quantidade: '10', status: 'Em Manutenção' },
  { id: 5, nome: 'Laser Cutter', modelo: 'Trotec Speedy 300', quantidade: '6', status: 'Ativo' },
  { id: 6, nome: 'Router CNC', modelo: 'ShopBot PRSalpha', quantidade: '13', status: 'Inativo' },
  { id: 7, nome: 'Plasma Cutter', modelo: 'Hypertherm Powermax45', quantidade: '2', status: 'Em Manutenção' },
  { id: 8, nome: 'CNC', modelo: 'DMG Mori CMX 600 V', quantidade: '15', status: 'Ativo' },
  { id: 9, nome: 'Impressora 3D', modelo: 'Formlabs Form 3', quantidade: '7', status: 'Inativo' },
  { id: 10, nome: 'Torno', modelo: 'Mazak QT-250MSY', quantidade: '8', status: 'Ativo' },

  // Peças
  { id: 11, nome: 'Parafuso M8', modelo: 'M8-01', quantidade: '150', status: 'Disponível' },
  { id: 12, nome: 'Rolamento 6204', modelo: '6204-AB', quantidade: '75', status: 'Disponível' },
  { id: 13, nome: 'Correia Timing', modelo: 'T5-100', quantidade: '30', status: 'Em Falta' },
  { id: 14, nome: 'Engrenagem 20T', modelo: '20T-PL', quantidade: '50', status: 'Disponível' },
  { id: 15, nome: 'Motor Elétrico 1HP', modelo: '1HP-MOTOR', quantidade: '12', status: 'Em Manutenção' },
  { id: 16, nome: 'Bomba d\'água 1.5HP', modelo: '1.5HP-BOMBA', quantidade: '8', status: 'Disponível' },
  { id: 17, nome: 'Faca de Corte', modelo: 'CORT-300', quantidade: '20', status: 'Disponível' },
  { id: 18, nome: 'Filtro de Óleo', modelo: 'FILT-OL', quantidade: '60', status: 'Em Falta' },
  { id: 19, nome: 'Válvula de Segurança', modelo: 'VALV-S', quantidade: '25', status: 'Disponível' },
  { id: 20, nome: 'Termômetro Digital', modelo: 'TERM-DIG', quantidade: '10', status: 'Disponível' },
];

export function Tabela() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(itensMockados.length / itemsPerPage);

  const handleChangePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itensMockados.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Itens da Empresa</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-customBlue text-white">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Nome</th>
            <th className="py-2 px-4 text-left">Modelo</th>
            <th className="py-2 px-4 text-left">Quantidade</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Detalhes</th> {/* Coluna para detalhes */}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.nome}</td>
              <td className="py-2 px-4">{item.modelo}</td>
              <td className="py-2 px-4">{item.quantidade}</td>
              <td className="py-2 px-4">{item.status}</td>
              <td className="py-2 px-4">
                <Link className="text-blue-500 hover:underline" href="/detalhes">Ver Detalhes</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="py-2 px-4 bg-customBlue text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="py-2 px-4 bg-customBlue text-white rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}