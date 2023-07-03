"use client";
import {
  removeCategory,
  removePrice,
  resetFilter,
  setCategory,
  setPrice,
} from "@/redux/features/products/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";
import { BiFilter, BiTrash } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

type Props = {};

export default function FilterMobile({}: Props) {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <aside id="filtre" className="md:w-[15%]  md:hidden ">
      <div className="flex items-center justify-between w-[90%] m-auto mb-2">
        <button
          className="p-2 rounded-md bg-red-200"
          onClick={() => setShow(!show)}
        >
          {show ? <BiFilter size={27} /> : <AiOutlineEyeInvisible size={27} />}
        </button>

        <button
          onClick={() => dispatch(resetFilter())}
          className="p-2 rounded-md "
        >
          <BiTrash
            size={27}
            className={!show ? "text-gray-600 block" : "hidden"}
          />
        </button>
      </div>
      <div
        className={
          show
            ? "hidden"
            : "flex justify-between mx-4 bg-slate-200 p-4 rounded-md showw mt-2 mb-3"
        }
        onMouseOut={() => setShow(false)}
      >
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
      </div>
    </aside>
  );
}
