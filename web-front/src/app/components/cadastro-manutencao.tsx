import React from 'react';
import { TabelaManutencoes } from './tabela-manutencao';

// Componente para o formulário de cadastro de manutenção
export function CadastroManutencao() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Manutenção</h2>
      
      {/* Formulário para cadastro de manutenção */}
      <form className="p-4 mb-8">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="descricao">
            Descrição do Problema
          </label>
          <textarea
            id="descricao"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="dataSolicitacao">
            Data da Solicitação
          </label>
          <input
            type="date"
            id="dataSolicitacao"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="prioridade">
            Prioridade
          </label>
          <select
            id="prioridade"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Selecione</option>
            <option value="alta">Alta</option>
            <option value="media">Média</option>
            <option value="baixa">Baixa</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="responsavel">
            Responsável
          </label>
          <input
            type="text"
            id="responsavel"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="status">
            Status da Manutenção
          </label>
          <select
            id="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Selecione</option>
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em Andamento</option>
            <option value="concluida">Concluída</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="arquivos">
            Upload de Arquivos
          </label>
          <input
            type="file"
            id="arquivos"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            multiple
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="comentarios">
            Comentários
          </label>
          <textarea
            id="comentarios"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
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
    </div>
  );
}
