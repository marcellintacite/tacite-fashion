import Link from "next/link";
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="flex items-center h-16 gap-2 justify-between md:shadow-none md:p-0 shadow-md p-3 rounded-md">
      <h2 className="font-extrabold uppercase md:text-lg md:block hidden">
        TaciteFashion
      </h2>
      <h2 className="font-extrabold uppercase md:hidden text-sm">TFashion</h2>

      <nav className="hidden items-center gap-5 md:flex">
        <Link href="/" className="p-3 hover:text-red-800 transition-all">
          Accueil
        </Link>
        <Link href="/" className="p-3 hover:text-red-800 transition-all">
          Shop
        </Link>
        <Link href="/" className="p-3 hover:text-red-800 transition-all">
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
          <button>
            <AiOutlineShopping size={20} />
          </button>
          <button>
            <AiOutlineUser size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
