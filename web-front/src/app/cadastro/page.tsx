import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { CadastroForm } from "../components/cadastro";

// Função componente que representa a página de cadastro
export default function Cadastro() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <CadastroForm/>
      </main>

      <Footer/>
    </div>
  );
}