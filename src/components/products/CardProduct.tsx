import { productType } from "@/types/product";
import Link from "next/link";
import React from "react";
import ReactStars from "react-stars";

type Props = {
  data: productType;
};

export default function CardProduct({ data }: Props) {
  return (
    <article className="md:w-full w-[90%] m-auto border p-2 rounded-md border-gray-200">
      <div className="w-full">
        <img
          src={data.image}
          alt={data.title}
          className="w-full object-cover md:object-fill h-72 rounded-md"
        />
      </div>
      <div className="mt-2">
        <Link href={`/products/${data.id}`} className="underline">
          {data.title}
        </Link>
        <div className="flex items-center justify-between">
          <p className="font-semibold">{data.price} €</p>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            value={data.rating.rate}
          />
        </div>
      </div>
    </article>
  );
}
