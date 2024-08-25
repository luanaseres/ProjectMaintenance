import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { RelatoriosManutencao } from "../components/relatorio-manutencao";

// Função componente que representa a página de relatórios de manutenção
export default function RelatorioM() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <RelatoriosManutencao/>
      </main>

      <Footer/>
    </div>
  );
}