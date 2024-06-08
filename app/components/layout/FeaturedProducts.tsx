import React from "react";
import Link from "next/link";
import Category from "./Category";

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
        <div className="w-full bg-emerald/10 md:border-x-8 md:border-turq/80 rounded-xl">
          <Category
            featured="Yes"
            bottomDataKey="products"
            showBackground={false}
            showPageTitle={false}
            showBottomSection={false}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
