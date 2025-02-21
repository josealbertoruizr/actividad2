"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";

function Counter() {
  const [count, setCount] = useState(0);  // crea una variable count y una función setCount para actualizarla

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCount(count + 1); // actualiza la variable a count + 1
  };

  const handleDecrement = (e: React.FormEvent) => {
    e.preventDefault();
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">{count}</h1>
      <form className="flex gap-4">
        <button
          className="bg-[#2aa0a2] text-[#000000] font-bold py-2 px-4 rounded-full"
          type="submit"
          onClick={handleSubmit}
        >
          Incrementar número
        </button>

        <button
          className="bg-[#2aa0a2] text-[#000000] font-bold py-2 px-4 rounded-full"
          type="submit"
          onClick={handleDecrement}
        >
          Restar número
        </button>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar/>
      <Counter />
    </div>
  );
}



// usando el mismo proyecto, agregar un formulario para que una persona se pueda registrar a la aplicación, tiene que tener
// nombre, correo y contraseña.
// de esta forma
// ------
// ------
// ------

// el correo debe de tener @ xyz .com
// password una letra mayuscula, minimo 8 letras y un caractér especial

// ya cuando pasó la invormación, la guarde en memoria, para usar useState
// tiene que ser un objeto y una sola variable para almacenar esta información

// su no pasa en color rojo, que fue lo que pasó
// aparece cuando este exitoso se pone el nombre del usuario