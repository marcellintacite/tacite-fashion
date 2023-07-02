"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { AiOutlineSearch, AiFillFilter } from "react-icons/ai";
import ProductsList from "@/components/products/ProductsList";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  removeCategory,
  removePrice,
  resetFilter,
  setCategory,
  setPrice,
} from "@/redux/features/products/productSlice";
import { storeType } from "@/types/store";
import { fetchProducts } from "@/redux/features/categories/categorySlice";
import { useEffect } from "react";

type Props = {};

export default function page({}: Props) {
  const { isOpen } = useAppSelector((state: storeType) => state.header);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [isOpen]);

  return (
    <main className="mt-3">
      <section className="product-search h-72 rounded-md flex items-center justify-center w-full">
        <div className="md:mx-24 md:w-5/6 flex flex-col items-center justify-center">
          <h3 className="text-md md:text-3xl text-center font-bold text-white p-1 md:p-0">
            Recherchez un produit de votre choix et obtenez une réduction pour
            votre premier achat et une livraison gratuite à domicile.
          </h3>
          <form className="mt-5 md:w-2/4 flex gap-3">
            <input
              type="text"
              name="search"
              className="w-full p-2 md:p3 rounded-md outline-none border-gray-700"
              placeholder="Recherchez"
            />
            <button
              type="submit"
              className="bg-black text-white p-2 md:p-3 rounded-md active:scale-50"
            >
              <AiOutlineSearch size={30} />
            </button>
          </form>
        </div>
      </section>
      <section id="produits" className="flex flex-col md:flex-row mt-4 gap-1">
        <aside id="filtre" className="md:w-[15%]  ">
          <div className="flex items-center justify-between border-b-2">
            <div className="flex items-center gap-3 text-lg font-bold">
              <AiFillFilter />
              <h3>Filtres</h3>
            </div>
            <button onClick={() => dispatch(resetFilter())}>Effacer</button>
          </div>
          <div>
            <h3 className="font-semibold mt-2">Filtre par prix</h3>
            <div className="pt-2">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  name="prix1"
                  id="prix1"
                  className=""
                  onChange={(e) =>
                    e.target.checked
                      ? dispatch(setPrice(10))
                      : dispatch(removePrice(10))
                  }
                />
                <label htmlFor="prix1">{"< 10$"}</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  name="prix2"
                  id="prix2"
                  onChange={(e) =>
                    e.target.checked
                      ? dispatch(setPrice(40))
                      : dispatch(removePrice(40))
                  }
                />
                <label htmlFor="prix2">{"< 40$"}</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  name="prix3"
                  id="prix3"
                  onChange={(e) =>
                    e.target.checked
                      ? dispatch(setPrice(99))
                      : dispatch(removePrice(99))
                  }
                />
                <label htmlFor="prix3">{"< 100$"}</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  name="prix4"
                  id="prix4"
                  onChange={(e) =>
                    e.target.checked
                      ? dispatch(setPrice(100))
                      : dispatch(removePrice(100))
                  }
                />
                <label htmlFor="prix4">{"> 100$"}</label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mt-2">Filtre par catégorie</h3>
            <div className="pt-2">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  name="categorie"
                  id="categorie"
                  onChange={(e) =>
                    e.target.checked
                      ? dispatch(setCategory("electronics"))
                      : dispatch(removeCategory("electronics"))
                  }
                  className=""
                />
                <label htmlFor="categorie">{"Electronics"}</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  name="categorie4"
                  id="categorie4"
                  onChange={(e) =>
                    e.target.checked
                      ? dispatch(setCategory("jewelery"))
                      : dispatch(removeCategory("jewelery"))
                  }
                />
                <label htmlFor="categorie4">{"Maquillages"}</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  name="categorie2"
                  id="categorie2"
                  onChange={(e) =>
                    e.target.checked
                      ? dispatch(setCategory("men's clothing"))
                      : dispatch(removeCategory("men's clothing"))
                  }
                />
                <label htmlFor="categorie2">{"Habits hommes"}</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  name="categorie3"
                  id="categorie3"
                  onChange={(e) =>
                    e.target.checked
                      ? dispatch(setCategory("women's clothing"))
                      : dispatch(removeCategory("women's clothing"))
                  }
                />
                <label htmlFor="categorie3">{"Habits femmes"}</label>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1">
          <ProductsList />
        </div>
      </section>
    </main>
  );
}
