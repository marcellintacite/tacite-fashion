import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { productType } from "@/types/product";

import CardProduct from "./CardProduct";
import { storeType } from "@/types/store";
import ContentLoader from "react-content-loader";
import Image from "next/image";
import e from "@/assets/r.svg";

type Props = {};

export default function ProductsList({}: Props) {
  const { products } = useAppSelector((state) => state.categories);
  const { category, price } = useAppSelector((state) => state.filter);
  const { loading, search } = useAppSelector(
    (state: storeType) => state.categories
  );
  console.log(search);

  let productsToShow: productType[] = [];
  if (search.length > 0) {
    products?.forEach((product) => {
      if (product.title.toLowerCase().includes(search.toLowerCase())) {
        productsToShow.push(product);
      }
    });
  }

  products?.forEach((product) => {
    if (category.includes(product.category) || category.length === 0) {
      if (price[price.length - 1] === 100) {
        productsToShow.push(product);
      }
      if (product.price <= price[price.length - 1] || price.length === 0) {
        productsToShow.push(product);
      }
    }
  });

  if (loading)
    return (
      <div className="flex w-full flex-wrap gap-2">
        <ContentLoader
          className="md:w-[300px] md:h-[400px] w-full h-auto"
          viewBox="0 0 450 400"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
          <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
          <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
        </ContentLoader>
        <ContentLoader
          className="md:w-[300px] md:h-[400px] w-full h-auto"
          viewBox="0 0 450 400"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
          <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
          <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
        </ContentLoader>
        <ContentLoader
          className="md:w-[300px] md:h-[400px] w-full h-auto"
          viewBox="0 0 450 400"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
          <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
          <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
        </ContentLoader>
      </div>
    );

  return (
    <section id="products">
      {productsToShow.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full ">
          <p className="text-2xl font-semibold text-gray-500 mt-4">
            Il n'y a pas de produits dans cette catégorie
          </p>
          <Image
            src={e}
            alt="empty"
            className="w-[300px] h-[300px] object-contain"
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
        {productsToShow.map((product) => (
          <CardProduct key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
}
