import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ControleEstoque } from "../components/controle-estoque";

// Função componente que representa a página de controle de estoque
export default function ControleE() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <ControleEstoque/>
      </main>

      <Footer/>
    </div>
  );
}