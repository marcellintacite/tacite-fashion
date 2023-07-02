"use client";

import Hero from "@/components/Hero";
import Category from "@/components/Category";

import Products from "@/components/Products";
import Reducton from "@/components/Reducton";
import Footer from "@/components/Footer";
import Subsciption from "@/components/Subsciption";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Products />
      <Reducton />
      <Subsciption />
      <Footer />
    </main>
  );
}
