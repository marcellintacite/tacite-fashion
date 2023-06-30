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
import { Toaster } from "react-hot-toast";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Home() {
  const { isOpen } = useAppSelector((state: storeType) => state.header);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [isOpen]);
  return (
    <main>
      {isOpen && <HeaderFirst />}
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="w-[98%] md:w-4/5 m-auto">
        <Navbar />
        <CartDrawer />
        <Hero />
        <Category />
        <Products />
        <Reducton />
        <Subsciption />
        <Footer />
      </div>
    </main>
  );
}
