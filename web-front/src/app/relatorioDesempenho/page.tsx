import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { RelatoriosDesempenho } from "../components/relatorio-desempenho";


export default function RelatorioD() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <RelatoriosDesempenho/>
      </main>

      <Footer/>
    </div>
  );
}