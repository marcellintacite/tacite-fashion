import React from "react";

type Props = {};

export default async function page({}: Props) {
  return (
    <article>
      <div></div>
      <div>
        <h3>Nom produits</h3>
        <div>
          <h2>prix</h2>
          <p>Etoile</p>
        </div>
        <p>Description</p>
        <div>
          <button>Ajouter dans carte</button>
        </div>
      </div>
    </article>
  );
}
