import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-1/3 text-center mb-4 lg:mb-0">
          <h2 className="text-xl font-bold">TACITE FASHION</h2>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <nav className="flex justify-center mt-4 lg:w-1/3">
          <a href="#" className="mx-3 hover:text-gray-300">
            Accueil
          </a>
          <Link href="apropos" className="mx-3 hover:text-gray-300">
            A propos
          </Link>
          {/* Add more links as needed */}
        </nav>

        <div className="lg:w-1/3 flex justify-center mt-4 lg:mt-auto">
          {/* Replace the Font Awesome icons with your desired social media icons */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <AiFillFacebook />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>

      {/* Bottom section for attribution or additional information */}
      {/* Customize this section to fit your requirements */}
      <small className="block text-xs text-center mt-[30px]">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
