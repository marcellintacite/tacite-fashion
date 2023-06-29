import React from "react";
import { useAppSelector } from "@/redux/hooks";
import ContentLoader from "react-content-loader";
import ProductCard from "./ProductCard";
import { productType } from "@/types/product";

type Props = {};

export default function Products({}: Props) {
  const { loading, products } = useAppSelector((state) => state.categories);

  const topTen = products?.slice(0, 8) || [];

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
    <section>
      <h2 className="text-3xl font-extrabold mt-3 pl-2">Produits</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 w-[96%] md:full  m-auto gap-5 flex-wrap mt-4">
        {topTen.map((product: productType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
