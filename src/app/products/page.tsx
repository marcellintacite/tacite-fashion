"use client";
import HeaderFirst from "@/components/HeaderFirst";
import { storeType } from "@/types/store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/features/categories/categorySlice";
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
