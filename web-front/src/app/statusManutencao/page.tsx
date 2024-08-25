import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { StatusManutencao } from "../components/status-manutencao";

// Função componente que representa a página de status da manutenção
export default function Status() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <StatusManutencao/>
      </main>

      <Footer/>
    </div>
  );
}