import {
  addQuantity,
  reduceQuantity,
  removeToCart,
} from "@/redux/features/cart/cartSlice";
import { toggleCart } from "@/redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { storeType } from "@/types/store";
import Image from "next/image";
import React from "react";
import { FaTrash, FaShoppingBag } from "react-icons/fa";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const CartDrawer = () => {
  const { isCartOpen } = useAppSelector((state: storeType) => state.header);
  const { cart } = useAppSelector((state: storeType) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(toggleCart())}>Show</button>
      <Drawer
        open={isCartOpen}
        onClose={() => dispatch(toggleCart())}
        direction="right"
        className="md:min-w-[380px] p-3 min-w-[300px]"
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
                <p className="font-semibold">{item.title}</p>
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
      </Drawer>
    </>
  );
};

export default CartDrawer;
