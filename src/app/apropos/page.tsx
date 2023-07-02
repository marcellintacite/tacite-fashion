import Image from "next/image";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <section className="flex flex-col gap-3 mt-3 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold text-gray-700">A propos</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            incidunt iure doloremque porro! Provident, officiis magni libero cum
            accusamus fugit excepturi iste assumenda aliquam voluptate officia
            perferendis aperiam quam ut minima tenetur cumque numquam nulla odit
            enim veniam? Cum, labore, distinctio tempore molestiae
            exercitationem nobis ducimus assumenda, incidunt asperiores mollitia
            amet maiores ad! Cupiditate nulla quisquam culpa deserunt cum,
            maxime accusamus libero excepturi praesentium distinctio reiciendis
            assumenda fugiat, asperiores doloribus tenetur iure non officiis! Id
            doloremque laboriosam veniam hic deleniti sequi consequuntur natus!
            Cum dolore aut iusto nihil perspiciatis veniam excepturi facere.
            Quasi sit, aut rerum non nemo debitis recusandae.
          </p>
        </div>
        <div className="">
          <Image
            src={require("../../assets/foot.jpg")}
            alt="texte"
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}
