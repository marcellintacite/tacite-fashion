import React from "react";
import { AiOutlineMail } from "react-icons/ai";

type Props = {};

export default function Subsciption({}: Props) {
  return (
    <section className="min-h-[400px] flex justify-center items-center flex-col">
      <div className="md:w-3/4 p-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold ">
          Inscrivez-vous sur notre newsletter pour etre informé de nos nouvels
          arrivages
        </h2>
        <p className="mt-3">Obtenez 10% de réduction en vous inscrivant</p>
      </div>
      <form className="flex gap-2 w-[90%] md:w-3/4 items-center justify-center mt-4">
        <div className="flex items-center relative h-11 md:w-1/2">
          <div className="absolute w-10 h-10 flex items-center justify-center">
            <AiOutlineMail className="text-slate-700" />
          </div>
          <input
            type="email"
            placeholder="Votre email"
            className="w-full h-full p-3 border-2 border-gray-300 rounded-md pl-10 focus:outline-none focus:border-primary"
          />
        </div>
        <button
          type="submit"
          className="
        bg-primary text-white font-bold py-3 px-6 rounded-md bg-slate-900 hover:bg-slate-800 transition duration-300 ease-in-out
        "
        >
          {"S'inscrire"}
        </button>
      </form>
    </section>
  );
}
