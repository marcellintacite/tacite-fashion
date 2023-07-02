import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { productType } from "@/types/product";
import { log } from "console";
import CardProduct from "./CardProduct";

type Props = {};

export default function ProductsList({}: Props) {
  const { products } = useAppSelector((state) => state.categories);
  const { category, price } = useAppSelector((state) => state.filter);

  let productsToShow: productType[] = [];
  products.forEach((product) => {
    if (category.includes(product.category) || category.length === 0) {
      if (price[price.length - 1] === 100) {
        productsToShow.push(product);
      }
      if (product.price <= price[price.length - 1] || price.length === 0) {
        productsToShow.push(product);
      }
    }
  });

  return (
    <section id="products">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
        {productsToShow.map((product) => (
          <CardProduct key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
}
