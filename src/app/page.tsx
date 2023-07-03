"use client";

import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
import ProductsList from "@/components/products/ProductsList";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { fetchProducts } from "@/redux/features/categories/categorySlice";
import { useEffect } from "react";
import Filter from "@/components/products/Filter";
import Footer from "@/components/Footer";
import FilterMobile from "@/components/products/FilterMobile";
import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  });

  return (
    <main className="mt-3">
      <section className="product-search h-72 rounded-md flex items-center justify-center w-full">
        <div className="md:mx-24 md:w-5/6 flex flex-col items-center justify-center">
          <h3 className="text-md md:text-3xl text-center font-bold text-white p-1 md:p-0">
            Recherchez un produit de votre choix et obtenez une réduction pour
            votre premier achat et une livraison gratuite à domicile.
          </h3>
          <div className="mt-5 w-[80%] md:w-2/4 flex gap-3">
            <input
              type="text"
              name="search"
              className="w-full p-2 md:p3 rounded-md outline-none border-gray-700"
              placeholder="Recherchez"
              // onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-black text-white p-2 md:p-3 rounded-md active:scale-50"
              onClick={() => {
                // dispatch(setSearchString(search));
              }}
            >
              <AiOutlineSearch size={30} />
            </button>
          </div>

          <Link
            href="/products"
            className="p-3 border mt-4 rounded-md text-white hover:scale-110 transition-all hover:text-white"
          >
            Apprendre plus
          </Link>
        </div>
      </section>
      <section id="produits" className="flex flex-col md:flex-row mt-4 gap-2">
        <Filter />
        <FilterMobile />
        <div className="flex-1">
          <ProductsList />
        </div>
      </section>

      <Footer />
    </main>
  );
}
