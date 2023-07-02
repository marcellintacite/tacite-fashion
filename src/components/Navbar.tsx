import { toggleCart } from "@/redux/features/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { storeType } from "@/types/store";
import Link from "next/link";
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";

type Props = {};

export default function Navbar({}: Props) {
  const { totalItems } = useAppSelector((state: storeType) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <header className="flex w-full items-center h-16 gap-2 justify-between md:shadow-none md:p-0 shadow-md p-3  md:rounded-none sticky top-0 bg-white z-50">
      <Link href={"/"} className="font-extrabold md:text-lg md:block hidden">
        TaciteFashion
      </Link>
      <Link href={"/"} className="font-extrabold uppercase md:hidden text-sm">
        TFashion
      </Link>

      <nav className="hidden items-center gap-5 md:flex">
        <Link href="/" className="p-3 hover:text-red-800 transition-all">
          Accueil
        </Link>
        <Link
          href="/products"
          className="p-3 hover:text-red-800 transition-all"
        >
          Shop
        </Link>
        <Link href="/apropos" className="p-3 hover:text-red-800 transition-all">
          A propos
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <form className="flex items-center  gap-2 relative flex-1 h-11  border rounded-md w-full md:w-[290px] bg-slate-50">
          <div className="absolute flex items-center justify-center w-7">
            <AiOutlineSearch className="text-slate-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Rechercher"
            className="w-full h-full p-2 pl-8  border-none bg-transparent outline-none focus:border-none"
          />
        </form>
        <div className="flex items-center gap-6 ml-4 justify-center">
          <button className="relative" onClick={() => dispatch(toggleCart())}>
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 p-1 rounded-full text-[10px] text-white flex items-center justify-center">
              {totalItems}
            </span>

            <AiOutlineShopping size={24} />
          </button>
          <Link href={"/login"}>
            <AiOutlineUser size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
