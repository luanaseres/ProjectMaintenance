"use client"; // Garante que o Next.js trate este componente como Client Component

import React, { FormEvent } from 'react';

export function StatusManutencao() {

  const dadosMockados = {
    status: "em andamento",
    comentarios: "Aguardando peças para finalizar a manutenção.",
    arquivos: [
      "relatorio_manutencao.pdf",
      "foto_manutencao.jpg"
    ]
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const status = formData.get('status') as string;
    const comentarios = formData.get('comentarios') as string;
    const arquivos = formData.getAll('arquivos') as File[];


    console.log({ status, comentarios, arquivos });
    alert('Status da manutenção atualizado com sucesso!');
  };

  return (
    <div className="container mx-auto p-4">
      <form className="max-w-lg mx-auto bg-white shadow-md rounded p-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Gerenciamento de Status da Manutenção</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status da Manutenção
          </label>
          <select
            id="status"
            name="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={dadosMockados.status}
          >
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em Andamento</option>
            <option value="concluida">Concluída</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comentarios">
            Comentários
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={dadosMockados.comentarios}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="arquivos">
            Upload de Arquivos
          </label>
          <input
            type="file"
            id="arquivos"
            name="arquivos"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            multiple
            defaultValue=""
          />
          <p className="text-sm text-gray-500 mt-2">Arquivos atuais:</p>
          <ul className="list-disc pl-5">
            {dadosMockados.arquivos.map((arquivo, index) => (
              <li key={index}>{arquivo}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Atualizar Status
          </button>
        </div>
      </form>
    </div>
  );
}
