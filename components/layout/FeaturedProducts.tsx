import React from "react";
import Link from "next/link";
import Card from "components/ui/Card";

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 font-lobster tracking-wide">
            Featured Products
          </h2>
          <Link
            className="text-darkpur transition-colors font-semibold hover:text-rosy"
            href="/products"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-4 gap-8">
          <Card
            imageSrc="/dogfood.jpg"
            title="Premium Dry Dog Food"
            description="High-quality protein and essential nutrients for your pup."
            price={49.99}
          />
          <Card
            imageSrc="/wetcat.jpg"
            title="Wet Cat Food"
            description="Delicious and nutritious wet food for your feline friend."
            price={29.99}
          />
          <Card
            imageSrc="/hamsterfood.jpg"
            title="Hamster Food"
            description="Highly nutritious munchies for your small furry friend."
            price={14.99}
          />
          <Card
            imageSrc="/treats.jpg"
            title="Treats"
            description="Healthy and delicious treats for your pet, no artifical sugar added."
            price={9.99}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
