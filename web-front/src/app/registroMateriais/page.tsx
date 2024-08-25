import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { RegistroMateriais } from "../components/registro-materiais";

// Função componente que representa a página de registro de materiais
export default function Registro() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <RegistroMateriais/>
      </main>

      <Footer/>
    </div>
  );
}