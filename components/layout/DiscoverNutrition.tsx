import React from "react";
import Link from "next/link";
import Logo from "components/ui/Logo";
import Button from "components/ui/Button";

interface DiscoverNutritionProps {
  button1Text: string;
  button2Text: string;
  title: string;
  desc: string;
  href1: string;
  href2: string;
}

const DiscoverNutrition: React.FC<DiscoverNutritionProps> = ({
  button1Text,
  button2Text,
  title,
  desc,
  href1,
  href2,
}) => {
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
          {title}
        </h2>
        <p className="text-gray-600 md:text-lg text-sm mb-8 text-justify">
          {desc}
        </p>
        <div className="flex gap-5 justify-center">
          <Link href={`${href1}`}>
            <Button setWidth="8.57rem">{button1Text}</Button>
          </Link>
          <Link href={`${href2}`}>
            <Button setWidth="8.57rem">{button2Text}</Button>
          </Link>
        </div>
      </div>
      <Logo />
    </section>
  );
};

export default DiscoverNutrition;
