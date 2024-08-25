"use client"; // Garante que o Next.js trate este componente como Client Component

import React, { useState } from 'react';

// Componente para o formulário de cadastro de máquinas e peças
export function CadastroForm() {
  // Estado para gerenciar o tipo de cadastro (máquina ou peça)
  const [tipoCadastro, setTipoCadastro] = useState<'maquina' | 'peca'>('maquina');

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Máquinas e Peças</h2>
      
      {/* Formulário para cadastro */}
      <form className="space-y-4 p-4 mb-8">
        <div>
          <label htmlFor="tipoCadastro" className="block text-sm font-medium">
            Tipo de Cadastro
          </label>
          <select
            id="tipoCadastro"
            value={tipoCadastro}
            onChange={(e) => setTipoCadastro(e.target.value as 'maquina' | 'peca')}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
          >
            <option value="maquina">Máquina</option>
            <option value="peca">Peça</option>
          </select>
        </div>

        {/* Campos exibidos quando o tipo de cadastro é 'máquina' */}
        {tipoCadastro === 'maquina' && (
          <>
            <div>
              <label htmlFor="nomeMaquina" className="block text-sm font-medium">
                Nome da Máquina
              </label>
              <input
                id="nomeMaquina"
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="tipoMaquina" className="block text-sm font-medium">
                Tipo
              </label>
              <input
                id="tipoMaquina"
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="modeloMaquina" className="block text-sm font-medium">
                Modelo
              </label>
              <input
                id="modeloMaquina"
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="dataFabricacao" className="block text-sm font-medium">
                Data de Fabricação
              </label>
              <input
                id="dataFabricacao"
                type="date"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="numeroSerie" className="block text-sm font-medium">
                Número de Série
              </label>
              <input
                id="numeroSerie"
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="localizacaoMaquina" className="block text-sm font-medium">
                Localização
              </label>
              <input
                id="localizacaoMaquina"
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="uploadImagemMaquina" className="block text-sm font-medium">
                Upload de Imagens
              </label>
              <input
                id="uploadImagemMaquina"
                type="file"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>
          </>
        )}

        {/* Campos exibidos quando o tipo de cadastro é 'peça' */}
        {tipoCadastro === 'peca' && (
          <>
            <div>
              <label htmlFor="nomePeca" className="block text-sm font-medium">
                Nome da Peça
              </label>
              <input
                id="nomePeca"
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="codigoPeca" className="block text-sm font-medium">
                Código
              </label>
              <input
                id="codigoPeca"
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="fornecedorPeca" className="block text-sm font-medium">
                Fornecedor
              </label>
              <input
                id="fornecedorPeca"
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="quantidadeEstoque" className="block text-sm font-medium">
                Quantidade em Estoque
              </label>
              <input
                id="quantidadeEstoque"
                type="number"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="valorUnitario" className="block text-sm font-medium">
                Valor Unitário
              </label>
              <input
                id="valorUnitario"
                type="number"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>

            <div>
              <label htmlFor="uploadImagemPeca" className="block text-sm font-medium">
                Upload de Imagens
              </label>
              <input
                id="uploadImagemPeca"
                type="file"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-8"
              />
            </div>
          </>
        )}

        <div>
          <button
            type="submit"
            className="bg-customBlue text-white py-2 px-4 rounded-md shadow"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
