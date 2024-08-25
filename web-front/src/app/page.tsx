import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Tabela } from "./components/tabela";
import { Card } from "./components/card";

import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { LuForklift } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Home() {

  const cards = [
    {color: "bg-orange-200", qty: "100", text: "Máquinas", icon: <LuForklift size={48} />},
    {color: "bg-blue-200", qty: "350", text: "Equipamentos", icon: <HiOutlineWrenchScrewdriver size={48} />},
    {color: "bg-red-200", qty: "30", text: "O.S. Negativas", icon: <CgNotes size={48} />},
    {color: "bg-green-200", qty: "50", text: "O.S. Positivas", icon: <FaRegCircleCheck size={48} />},
  ]
  
  return (
    <div className="h-screen flex flex-col bg-customBlue">
      <Header/>
      <div className="mt-3">
        <div className="grid grid-cols-4 gap-4 p-6 bg-customBlue">
          {cards.map((props) => (
            <Card color={props.color} qty={props.qty} text={props.text} icon={props.icon}/>
          ))}
        </div>
      </div>

      <main className="flex-grow overflow-y-auto bg-gray-100 p-4">
        <div className="bg-customGrey h-full">
          <Tabela/>
        </div>
      </main>


     <Footer/>

    </div>
  );
}
