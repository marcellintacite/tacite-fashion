"use client";

import {
  addQuantity,
  addToCart,
  reduceQuantity,
  removeToCart,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { productType } from "@/types/product";
import React from "react";
import { toast } from "react-hot-toast";

type Props = {
  product: productType;
};

export default function Buttons({ product }: Props) {
  const { cart } = useAppSelector((state) => state.cart);
  const isInCart = cart.find((item) => item.id === product.id);
  const dispatch = useAppDispatch();

  return (
    <div>
      {isInCart && (
        <div className="mt-3">
          <p>Quantité: </p>

          <div className="flex gap-3 mt-2 items-center ">
            <button
              className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-1 px-2 rounded"
              onClick={() => dispatch(addQuantity({ product }))}
            >
              +
            </button>
            <div>{isInCart.quantity ? isInCart.quantity + 1 : 1}</div>
            <button
              className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-1 px-2 rounded"
              onClick={() => dispatch(reduceQuantity({ product }))}
            >
              -
            </button>
          </div>
        </div>
      )}
      {isInCart ? (
        <button
          className="bg-slate-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5"
          onClick={() => dispatch(removeToCart({ product }))}
        >
          Effacer de la carte
        </button>
      ) : (
        <button
          className="bg-slate-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-3"
          onClick={() => {
            dispatch(addToCart({ product }));
            toast.success("Produit ajouté au panier");
          }}
        >
          Ajouter au panier
        </button>
      )}
    </div>
  );
}
