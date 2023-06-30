import { productType } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "react-hot-toast";

type Props = {
  product: productType;
};

export default function ProductCard({ product }: Props) {
  const dispatch = useAppDispatch();
  return (
    <div className=" flex gap-4 flex-1 ">
      <div className="w-40 h-[100px] p-2 overflow-hidden flex justify-center items-center bg-slate-100 rounded-md">
        <Image
          alt={product.title}
          src={product.image}
          width={100}
          height={160}
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold h-7 overflow-hidden underline">
            {product.title}
          </h3>
        </Link>

        <p className="text-sm">$ {product.price}</p>
        <button
          className="bg-black text-white rounded-md p-2 w-8 h-8 flex items-center gap-2"
          onClick={() => {
            dispatch(addToCart({ product }));
            toast.success("Ajouté avec succès!", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
          }}
        >
          <AiOutlineShoppingCart size={25} />
        </button>
      </div>
    </div>
  );
}
