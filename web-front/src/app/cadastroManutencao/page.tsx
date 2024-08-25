import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { CadastroManutencao } from "../components/cadastro-manutencao";

// Função componente que representa a página de cadastro de manutenção
export default function CadastroM() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <CadastroManutencao/>
      </main>

      <Footer/>
    </div>
  );
}