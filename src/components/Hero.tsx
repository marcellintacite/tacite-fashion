import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  AiOutlineAntDesign,
  AiOutlineAccountBook,
  AiOutlineBuild,
} from "react-icons/ai";

import i from "@/assets/b.jpg";
import e from "@/assets/e.jpg";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <section className="">
        <Carousel
          showArrows={true}
          autoPlay
          infiniteLoop
          showIndicators={false}
          showStatus={false}
          className="h-50 md:h-96 overflow-hidden rounded-md mt-4 mb-0 "
        >
          <div className="h-full">
            <Image src={e} alt="test" className="h-full w-full" />
          </div>
          <div>
            <Image src={i} alt="test" />
          </div>
          <div>
            <Image src={e} alt="test" />
          </div>
        </Carousel>

        <section>
          <div className="md:flex md:min-h-[40px] md:mt-2 justify-between gap-5 -mt-4 ">
            <div className="pr-10 w-full md:w-[35%]">
              <h2 className="md:text-4xl text-3xl  font-bold mt-4 p-1 md:p-0">
                Nous offrons différents services :{" "}
              </h2>
            </div>
            <div className=" flex items-center ">
              <div className="h-full w-1 bg-slate-100"></div>
              <p className="md:pl-4">
                Nous assurons la qualité de nos produits sur le marché
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-5 pb-4 justify-center md:justify-normal md:gap-5">
            <article className="md:flex-1 bg-slate-100 rounded-md p-3 w-[96%]">
              <div className="w-11 h-11 bg-slate-100 rounded-md flex items-center justify-center">
                <AiOutlineAntDesign size={25} />
              </div>
              <h3 className="mt-1 font-bold text-lg">Des produits originals</h3>
              <p className="pt-1 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                doloremque nemo eius
              </p>
            </article>
            <article className="md:flex-1 bg-slate-100 rounded-md p-3 w-[96%]">
              <div className="w-11 h-11 bg-slate-100 rounded-md flex items-center justify-center">
                <AiOutlineBuild size={25} />
              </div>
              <h3 className="mt-1 font-bold text-lg">Des produits originals</h3>
              <p className="pt-1 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                doloremque nemo eius
              </p>
            </article>

            <article className="md:flex-1 bg-slate-100 rounded-md p-3 w-[96%]">
              <div className="w-11 h-11 bg-slate-100 rounded-md flex items-center justify-center">
                <AiOutlineAccountBook size={25} />
              </div>
              <h3 className="mt-1 font-bold text-lg">Des produits originals</h3>
              <p className="pt-1 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                doloremque nemo eius
              </p>
            </article>
          </div>
        </section>
      </section>
    </>
  );
}
