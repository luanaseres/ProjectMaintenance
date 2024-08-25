"use client"; // Garante que o Next.js trate este componente como um Client Component

import React, { FormEvent } from 'react';

export function StatusManutencao() {

  // Mock de dados para exibição inicial no formulário
  const dadosMockados = {
    status: "em andamento", // Status atual da manutenção
    comentarios: "Aguardando peças para finalizar a manutenção.", // Comentários sobre o status da manutenção
    arquivos: [
      "relatorio_manutencao.pdf", // Arquivos relacionados à manutenção
      "foto_manutencao.jpg"
    ]
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    const formData = new FormData(event.currentTarget); // Extrai os dados do formulário

    // Coleta os valores dos campos do formulário
    const status = formData.get('status') as string;
    const comentarios = formData.get('comentarios') as string;
    const arquivos = formData.getAll('arquivos') as File[];

    console.log({ status, comentarios, arquivos }); // Exibe os dados no console (para fins de depuração)
    alert('Status da manutenção atualizado com sucesso!'); // Exibe um alerta de sucesso
  };

  return (
    <div className="container mx-auto p-4">
      {/* Formulário para gerenciamento de status da manutenção */}
      <form className="p-4 mb-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Gerenciamento de Status da Manutenção</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="status">
            Status da Manutenção
          </label>
          <select
            id="status"
            name="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={dadosMockados.status} // Define o valor padrão com base nos dados mockados
          >
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em Andamento</option>
            <option value="concluida">Concluída</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="comentarios">
            Comentários
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={dadosMockados.comentarios} // Define o valor padrão com base nos dados mockados
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="arquivos">
            Upload de Arquivos
          </label>
          <input
            type="file"
            id="arquivos"
            name="arquivos"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            multiple // Permite a seleção de múltiplos arquivos
            defaultValue="" // Define o valor padrão como vazio
          />
          <p className="text-sm text-gray-500 mt-2">Arquivos atuais:</p>
          <ul className="list-disc pl-5">
            {/* Exibe a lista de arquivos mockados */}
            {dadosMockados.arquivos.map((arquivo, index) => (
              <li key={index}>{arquivo}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-customBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Atualizar Status
          </button>
        </div>
      </form>
    </div>
  );
}
