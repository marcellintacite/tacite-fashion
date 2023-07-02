import {
  addQuantity,
  calculateTotal,
  clearCart,
  reduceQuantity,
  removeToCart,
} from "@/redux/features/cart/cartSlice";
import { toggleCart } from "@/redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { storeType } from "@/types/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaTrash, FaShoppingBag, FaWhatsapp } from "react-icons/fa";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const CartDrawer = () => {
  const { isCartOpen } = useAppSelector((state: storeType) => state.header);
  const { cart, total } = useAppSelector((state: storeType) => state.cart);
  const dispatch = useAppDispatch();
  console.log(total);

  useEffect(() => {
    dispatch(calculateTotal());
  });

  return (
    <>
      <Drawer
        open={isCartOpen}
        onClose={() => dispatch(toggleCart())}
        direction="right"
        className="md:min-w-[380px] p-3 min-w-[300px] overflow-auto dr"
      >
        <div className="">
          <div className="flex justify-between items-center ">
            <h1 className="font-bold text-lg">Vos produits</h1>
            <FaShoppingBag className="w-4 h-4 text-slate-500" />
          </div>
          <div className="w-full h-[1px] bg-slate-600"></div>
        </div>
        {cart.length === 0 && (
          <div className="flex justify-center items-center mt-4">
            <p className="text-slate-500">Votre panier est vide</p>
          </div>
        )}
        <div className="mt-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-2 mb-3 border-b pb-2"
            >
              <Image src={item.image} alt={item.title} width={70} height={50} />
              <div className="flex-1">
                <Link href={`/products/${item.id}`} className="font-semibold">
                  {item.title}
                </Link>
                <div className="flex gap-2 justify-between">
                  <p>{item.price} $</p>
                  <p>
                    Quantité :{" "}
                    <span className="font-bold">
                      {item.quantity ? item.quantity + 1 : 1}
                    </span>{" "}
                  </p>
                </div>
                <div className="flex w-full gap-2 mt-2">
                  <button
                    className="w-5 h-5 flex justify-center items-center rounded-md bg-slate-300"
                    onClick={() => dispatch(addQuantity({ product: item }))}
                  >
                    +
                  </button>
                  <button
                    className="w-5 h-5 flex justify-center items-center rounded-md bg-slate-300"
                    onClick={() => dispatch(reduceQuantity({ product: item }))}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="flex w-7 ">
                <button
                  className="w-6 h-6"
                  onClick={() => dispatch(removeToCart({ product: item }))}
                >
                  <FaTrash className="text-slate-800" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-4">
            <div className="flex justify-between items-center mt-4">
              <p className="font-semibold">Total</p>
              <p className="font-bold">{total.toFixed(2)} $</p>
            </div>
            <div className="flex justify-center mt-4 flex-col gap-3">
              <Link
                className="bg-slate-800 flex items-center justify-center gap-4 text-white w-full px-4 py-3 rounded-md"
                href={`https://wa.me/0999537410?text=Bonjour, j'aimerais commander ces produits (${
                  cart[0].title
                },${cart[1]?.title},...) avec un total de ${total.toFixed(
                  2
                )} $ soit ${(total * 2400).toFixed(2)} en FC`}
              >
                {"Commander"}
                <FaWhatsapp />
              </Link>
              <button
                className="bg-red-400 text-white w-full px-4 py-2 rounded-md"
                onClick={() => dispatch(clearCart())}
              >
                Vider le panier
              </button>
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default CartDrawer;
