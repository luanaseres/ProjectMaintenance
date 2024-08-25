import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { AtribuicaoEquipes } from "../components/atribuicao-equipe";


export default function Equipes() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <AtribuicaoEquipes/>
      </main>

      <Footer/>
    </div>
  );
}