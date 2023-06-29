import React from "react";
import foot from "@/assets/foot.jpg";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Reduction({}: Props) {
  return (
    <section className="w-full min-h-[300px]  md:h-[350px] bg-slate-900 rounded-md overflow-hidden mt-7 mb-3 flex flex-col md:flex-row">
      <div className="flex-1 h-full bg-cover bg-center my-bg-class hidden md:flex "></div>
      <div className="flex-1 flex justify-center items-center bg-img">
        <div className="w-[90%] m-auto ">
          <p className="text-slate-300">OFFRE LIMITE</p>
          <h1 className="text-white md:text-4xl text-2xl font-semibold mt-2">
            50% de reduction sur les produits de la semaine ! et 30% sur les
            produits hommes
          </h1>
          <div className="mt-6">
            <Link href="/products" className="p-3 bg-white rounded-md mt-5">
              Visitez notre boutique
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
