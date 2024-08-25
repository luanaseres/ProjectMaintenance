import React from 'react';
import Link from 'next/link';
import Image from "next/image";

// Componente Header que representa o cabeçalho da página
export function Header() {
  return (
    <header className="p-3 bg-customBlue flex justify-between">
      <div className="flex w-full">
        <Image 
          src={"/image/manutencao.png"} 
          className="w-12 h-12 ml-2 mt-1" 
          alt="Logo" 
          width={240} 
          height={240}
        />
        <h1 className="text-white p-4 font-semibold">Maintenance</h1>
      </div>

      {/* Seção de navegação */}
      <nav className="bg-customBlue p-4 w-full flex flex-row-reverse space-x-4 space-x-reverse">
        <ul className="flex space-x-4">
          <li className="relative group">
            <Link className="text-white font-semibold" href="/">Home</Link>
          </li>

          {/* Menu dropdown para Cadastrar */}
          <li className="relative group">
            <button className="text-white font-semibold">Cadastrar</button>
            <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/cadastro">Cadastrar Máquinas e Equipamentos</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/cadastroManutencao">Cadastrar Manutenção</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/registroMateriais">Cadastrar Peças e Materiais</Link>
              </li>
            </ul>
          </li>

          {/* Menu dropdown para Relatórios */}
          <li className="relative group">
            <button className="text-white font-semibold">Relatórios</button>
            <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/relatorioDesempenho">Relatório de Desempenho</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/relatorioEstoque">Relatório de Estoque</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/relatorioManutencao">Relatório de Manutenção</Link>
              </li>
            </ul>
          </li>

          {/* Menu dropdown para Controle */}
          <li className="relative group">
            <button className="text-white font-semibold">Controle</button>
            <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/controleCustos">Controle de Custos</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/controleEstoque">Controle de Estoque</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link className="text-white font-semibold" href="/manutencao">Manutenções</Link>
          </li>
          <li className="relative group">
            <Link className="text-white font-semibold" href="/equipes">Equipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
} 