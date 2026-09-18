import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo2.png";

export default function RadheBook() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Radhe Book"
            className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 h-auto object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="mt-2 text-center text-3xl sm:text-4xl font-semibold text-gray-900 tracking-wide">
          RADHE BOOK
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-center text-lg sm:text-xl text-gray-600">
          World's no. 1 book
        </p>

        <hr className="my-8 border-gray-300" />

        {/* Get New ID */}
        <a
          href="https://wa.me/qr/LDVQBVFT5ZAEM1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 active:scale-[0.98] text-white text-lg sm:text-xl font-semibold rounded-full py-4 transition-all duration-300 shadow-lg"
        >
          <FaWhatsapp className="text-3xl" />
          <span>GET NEW ID</span>
        </a>

        <hr className="my-8 border-gray-300" />

        {/* Website */}
        <div className="text-center">
          <p className="text-gray-500 text-lg sm:text-xl mb-2">
            More info:
          </p>

          <a
            href="https://www.radheexchange.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl md:text-2xl text-gray-800 hover:text-blue-600 transition-colors break-all"
          >
            www.radheexchange.info ↗
          </a>
        </div>

      </div>
    </section>
  );
}