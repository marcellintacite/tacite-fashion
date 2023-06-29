import React from "react";
import i1 from "@/assets/cat/electronic.png";
import i2 from "@/assets/cat/jail.jpg";
import i3 from "@/assets/cat/man.jpg";
import i4 from "@/assets/cat/women.jpg";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

type catType = [
  "electronics" | "jewelery" | "men's clothing" | "women's clothing"
];

export default function Category() {
  const data = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <section>
      <h1 className="text-3xl font-extrabold mt-3 pl-2">Nos catégories</h1>
      <div className="flex flex-wrap md:gap-4 gap-5 w-full pb-4 mt-4 p-2">
        {data.map((cat, i) => {
          const img = [i1, i2, i3, i4][i];
          return (
            <div
              key={i}
              className="flex flex-col items-center md:flex-1 w-full rounded-lg relative bg-red-500 overflow-hidden"
            >
              <Image src={img} alt={cat} className="w-full h-full" />

              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0005] flex items-end justify-center hover:bg-[#0008] transition-all">
                <button className="p-4 mb-2 bg-slate-50 rounded-md flex gap-2 first-letter:uppercase">
                  {cat}
                  <AiOutlineArrowRight size={25} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
