import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { DetalhesMaquina } from "../components/detalhes-maquina";

// Função componente que representa a página de detalhes da máquina
export default function Detalhes() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <DetalhesMaquina/>
      </main>

      <Footer/>
    </div>
  );
}