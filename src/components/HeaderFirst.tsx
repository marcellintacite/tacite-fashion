import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";

import { useAppDispatch } from "@/redux/hooks";
import { toggle } from "@/redux/features/headerSlice";

type Props = {};

export default function HeaderFirst({}: Props) {
  const dispatch = useAppDispatch();
  return (
    <section className="bg-gray-950 w-full text-white md:h-10 h-auto p-2 flex items-center">
      <div className="container w-4/5 m-auto items-center flex flex-1 justify-center gap-2">
        <h3 className="text-sm">
          Connectez-vous pour vous avoir accès à tous nos services
        </h3>
        <Link href="/login" className="underline cursor-pointer">
          Connectez-vous
        </Link>
      </div>
      <button className="pr-2" onClick={() => dispatch(toggle())}>
        <FaTimes className="text-white" />
      </button>
    </section>
  );
}
