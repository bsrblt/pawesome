import React from "react";
import Button from "./ui/Button";

const DiscoverNutrition = () => {
  return (
    <section className="bg-turq py-12 md:py-24 relative">
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('products1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
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
    </section>
  );
};

export default DiscoverNutrition;
