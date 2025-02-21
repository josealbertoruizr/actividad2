"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";



export function SquareColor() {
    const [color, setColor] = useState("bg-gray-500");
    
    function ChangeColor(newColor: string) {
        setColor(newColor);
    }


    return (
      
        <div className="flex flex-col items-center justify-center min-h-screen">
            
            <div className={`w-[500px] h-[250px] ${color} rounded-lg flex items-center justify-center text-white text-2xl font-bold`}>
                Content
            </div>
            <br />

            <div className="grid grid-cols-2 gap-4 w-80">
                    <button onClick={() => ChangeColor("bg-red-500")} className="bg-red-500 text-white font-bold py-4 rounded-lg">Opción 1</button>
                    <button onClick={() => ChangeColor("bg-blue-500")} className="bg-blue-500 text-white font-bold py-4 rounded-lg">Opción 2</button>
                    <button onClick={() => ChangeColor("bg-green-500")} className="bg-green-500 text-white font-bold py-4 rounded-lg">Opción 3</button>
                    <button onClick={() => ChangeColor("bg-yellow-500")} className="bg-yellow-500 text-white font-bold py-4 rounded-lg">Opción 4</button>
            </div>
        </div>
    );
}

export default function Page2() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
            <Navbar />
            <SquareColor />
    </div>
  );
}