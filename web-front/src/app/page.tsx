import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Tabela } from "./components/tabela";
import { Card } from "./components/card";

import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { AiOutlineEnvironment } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Home() {

  const cards = [
    {color: "bg-orange-200", qty: "200", text: "Máquinas", icon: <AiOutlineEnvironment size={48} />},
    {color: "bg-blue-200", qty: "200", text: "Equipamentos", icon: <HiOutlineWrenchScrewdriver size={48} />},
    {color: "bg-red-200", qty: "200", text: "Máquinas", icon: <CgNotes size={48} />},
    {color: "bg-green-200", qty: "200", text: "O.S. Positivas", icon: <FaRegCircleCheck size={48} />},
  ]
  
  return (
    <div className="h-screen flex flex-col bg-customBlue">
      <div className="">
        <Header/>
        <main>
          <div className="h-full mt-3">
            <div className="grid grid-cols-4 gap-4 p-6">

              {cards.map((props) => (
                <Card color={props.color} qty={props.qty} text={props.text} icon={props.icon}/>
              ))}

            </div>
          </div>
          <div className="bg-customGrey h-full">
            <Tabela/>
          </div>
        
        </main>
      </div>

     <Footer/>

    </div>
  );
}
