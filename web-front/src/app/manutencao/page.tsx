import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { TabelaManutencoes } from "../components/tabela-manutencao";

// Função componente que representa a página de manutenção
export default function Manutencao() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <TabelaManutencoes/>
      </main>

      <Footer/>
    </div>
  );
}