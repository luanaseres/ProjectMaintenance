import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ControleCustos } from "../components/controle-custos";

// Função componente que representa a página de controle de custos
export default function ControleC() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <ControleCustos/>
      </main>

      <Footer/>
    </div>
  );
}