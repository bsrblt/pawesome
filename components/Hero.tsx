import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import SlideShow from "./SlideShow";

const Hero = () => {
  return (
    <section className="bg-bermuda py-12 md:py-24 relative">
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('products1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-lobster">
            Healthy and Delicious Pet Food
          </h1>

          <p className="text-darkpur text-lg ml-[0.1rem] sm:tracking-wide">
            Treat your furry friend to the best pet food on the market. Made
            with high-quality ingredients and packed with essential nutrients.
          </p>
          <Button className="bg-primary text-darkpur hover:bg-primary-dark transition-colors">
            Browse Products
          </Button>
        </div>

        <div
          className="rounded-lg shadow-2xl relative"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
        >
          <SlideShow />
        </div>
      </div>
    </section>
  );
};

export default Hero;
