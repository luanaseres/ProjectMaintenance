import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { RelatoriosEstoque } from "../components/relatorio-estoque";


export default function RelatorioE() {
  return(
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <RelatoriosEstoque/>
      </main>

      <Footer/>
    </div>
  );
}