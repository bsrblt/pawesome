import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import logonoback from "../public/pawesome-high-resolution-logo-white-transparent.png";
import { PawPrintIcon } from "./ui/Icons";

const DiscoverNutrition = () => {
  return (
    <section className=" bg-turq py-12 md:py-24 relative">
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('products1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-10 tracking-wide">
        <h2 className="text-2xl md:text-3xl font-bold text-darkpur mb-4 font-lobster ">
          Discover the Best Nutrition
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Browse our wide selection of high-quality pet food and treats.
        </p>
        <Button className="bg-primary text-white hover:bg-primary-dark transition-colors">
          Shop Now
        </Button>
      </div>
      <div className="grid pt-10 mx-auto w-[80%] sm:w-[50%] md:w-[40%] lg:w-[25%] justify-center">
        <div className="text-white gap-2 text-4xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="4" r="2" />
            <circle cx="18" cy="8" r="2" />
            <circle cx="20" cy="16" r="2" />
            <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
          </svg>
        </div>

        <Image alt="logo" src={logonoback} className="rounded-2xl p-4" />
      </div>
    </section>
  );
};

export default DiscoverNutrition;
