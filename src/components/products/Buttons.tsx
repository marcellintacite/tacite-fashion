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
import {
  FaShoppingBag,
  FaTrashAlt,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

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
          className="bg-slate-800 flex items-center hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5"
          onClick={() => dispatch(removeToCart({ product }))}
        >
          Effacer de la carte
          <FaTrashAlt className="inline ml-2" />
        </button>
      ) : (
        <button
          className="bg-slate-800 flex items-center gap-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-3"
          onClick={() => {
            dispatch(addToCart({ product }));
            toast.success("Produit ajouté au panier");
          }}
        >
          Ajouter au panier
          <FaShoppingBag className="inline ml-2" />
        </button>
      )}

      <div className="mt-5">
        <h2 className="text-xl font-bold">Partager sur :</h2>
        <div className="flex gap-3 mt-2">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://tacitefashion.vercel.app/products/${product.id}`}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-2 rounded"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=https://tacitefashion.vercel.app/products/${product.id}`}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded"
          >
            <FaTwitter size={20} />
          </a>

          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://tacitefashion.vercel.app/products/${product.id}`}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={`https://wa.me/?text=https://tacitefashion.vercel.app/products/${product.id}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-2 rounded"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
