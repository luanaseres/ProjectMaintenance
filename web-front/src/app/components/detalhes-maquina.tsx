import React from 'react';

export function DetalhesMaquina() {
  const dadosMaquina = {
    nome: "Máquina X",
    modelo: "Modelo Y",
    numeroSerie: "123456",
    localizacao: "Fábrica 1",
    imagemUrl: "https://via.placeholder.com/400",
    historicoManutencao: [
      {
        id: 1,
        descricao: "Troca de peça A",
        data: "2024-01-15",
        responsavel: "Técnico João",
        status: "Concluída"
      },
      {
        id: 2,
        descricao: "Revisão Geral",
        data: "2024-03-22",
        responsavel: "Técnico Maria",
        status: "Concluída"
      }
    ],
    pecasUtilizadas: [
      {
        id: 1,
        nome: "Peça A",
        codigo: "PA123",
        fornecedor: "Fornecedor 1",
        quantidade: 5,
        valor: 50.0
      },
      {
        id: 2,
        nome: "Peça B",
        codigo: "PB456",
        fornecedor: "Fornecedor 2",
        quantidade: 2,
        valor: 150.0
      }
    ]
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded p-4">
        <h2 className="text-2xl font-bold mb-4">Detalhes da Máquina</h2>
        <div className="mb-4">
          <img
            src={dadosMaquina.imagemUrl}
            alt={`Imagem da ${dadosMaquina.nome}`}
            className="w-full h-auto rounded"
          />
        </div>
        <div className="mb-4">
          <p><strong>Nome:</strong> {dadosMaquina.nome}</p>
          <p><strong>Modelo:</strong> {dadosMaquina.modelo}</p>
          <p><strong>Número de Série:</strong> {dadosMaquina.numeroSerie}</p>
          <p><strong>Localização:</strong> {dadosMaquina.localizacao}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Histórico de Manutenções</h3>
          <ul className="list-disc pl-5">
            {dadosMaquina.historicoManutencao.map((manutencao) => (
              <li key={manutencao.id}>
                <p><strong>Data:</strong> {manutencao.data}</p>
                <p><strong>Descrição:</strong> {manutencao.descricao}</p>
                <p><strong>Responsável:</strong> {manutencao.responsavel}</p>
                <p><strong>Status:</strong> {manutencao.status}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Peças e Materiais Utilizados</h3>
          <ul className="list-disc pl-5">
            {dadosMaquina.pecasUtilizadas.map((peca) => (
              <li key={peca.id}>
                <p><strong>Nome:</strong> {peca.nome}</p>
                <p><strong>Código:</strong> {peca.codigo}</p>
                <p><strong>Fornecedor:</strong> {peca.fornecedor}</p>
                <p><strong>Quantidade:</strong> {peca.quantidade}</p>
                <p><strong>Valor Unitário:</strong> R$ {peca.valor.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
