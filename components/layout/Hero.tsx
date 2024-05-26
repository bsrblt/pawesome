import React from "react";
import Button from "../ui/Button";
import Link from "next/link";
import Background from "./Background";
import SlideShow from "components/ui/SlideShow";

const Hero = () => {
  return (
    <Background>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-lobster">
            Healthy and Delicious Pet Food
          </h1>
          <p className="text-darkpur text-lg ml-[0.1rem] mt-8 sm:tracking-wide pb-6">
            Treat your furry friend to the best pet food on the market. Made
            with high-quality ingredients and packed with essential nutrients.
          </p>
          <span className="">
            <Link href="/products">
              <Button>Browse Products</Button>
            </Link>
          </span>
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
    </Background>
  );
};

export default Hero;
