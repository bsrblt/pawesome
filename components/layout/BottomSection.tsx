import React from "react";
import Link from "next/link";
import Logo from "components/ui/Logo";
import Button from "components/ui/Button";

interface DiscoverNutritionProps {
  data: {
    button1Text: string;
    button2Text: string;
    title: string;
    desc: string;
    href1: string;
    href2: string;
  };
}

const DiscoverNutrition: React.FC<DiscoverNutritionProps> = ({ data }) => {
  return (
    <section className="bg-turq py-12 md:py-24 relative">
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('products1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-0 tracking-wide">
        <h2 className="text-2xl md:text-3xl font-bold text-darkpur mb-4 font-lobster">
          {data.title}
        </h2>
        <p className="text-gray-600 md:text-lg text-sm mb-8 text-justify">
          {data.desc}
        </p>
        <div className="flex gap-5 justify-center">
          <Link href={data.href1}>
            <Button setWidth="8.57rem">{data.button1Text}</Button>
          </Link>
          <Link href={data.href2}>
            <Button setWidth="8.57rem">{data.button2Text}</Button>
          </Link>
        </div>
      </div>
      <Logo />
    </section>
  );
};

export default DiscoverNutrition;
