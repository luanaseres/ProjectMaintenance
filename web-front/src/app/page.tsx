import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { StatusManutencao } from "./components/status-manutencao";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="">
        <Header/>
        <main>
          <div className="bg-customBlue h-96">

          </div>
          <div className="bg-customGrey h-full">
            
          </div>
        
        </main>
      </div>

     <Footer/>

    </div>
  );
}
