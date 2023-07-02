import Buttons from "@/components/products/Buttons";
import { productType } from "@/types/product";
import Image from "next/image";

async function getData(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page(props: { params: { id: string } }) {
  const data: productType = await getData(props.params.id);

  return (
    <article className="w-full flex mt-7 flex-col md:flex-row pb-7">
      <div className="flex-1 justify-center flex items-center">
        <Image src={data.image} alt={data.title} width={300} height={300} />
      </div>
      <div className="flex-1 mt-3 w-[90%] md:w-full m-auto">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <div className="flex justify-between items-center mt-4">
          <p className="font-bold ">{data.price} $</p>

          <p>
            Catégorie{" "}
            <span className="italic font-semibold">{data.category}</span>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mt-5 pt-2">Description</h2>
          <p className="pt-2">{data.description}</p>
        </div>
        <Buttons product={data} />
      </div>
    </article>
  );
}
