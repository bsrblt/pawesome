import React from "react";
import ProductList from "./ProductList";
import { bottomSectionData } from "lib/bottomSectionData";
import BottomSection from "components/layout/BottomSection";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";
import { productsData } from "lib/ProductsData";

interface CategoryProps {
  category?: string;
  type?: string;
  bottomDataKey: keyof typeof bottomSectionData;
}

const Category: React.FC<CategoryProps> = ({
  category,
  type,
  bottomDataKey,
}) => {
  const bottomData = bottomSectionData[bottomDataKey];
  let categoryProducts = [...productsData];

  if (!type) {
    categoryProducts = categoryProducts.filter(
      (product) => product.Category === category
    );
  } else {
    categoryProducts = categoryProducts.filter(
      (product) => product.type === type
    );
  }

  return (
    <>
      <Background>
        <PageTitle
          text={
            type === "Treat"
              ? "Treats"
              : type
              ? `${type} Food`
              : `${category} Food`
          }
        />
        <div className="container mx-auto px-4 items-center relative z-10">
          <ProductList products={categoryProducts} />
        </div>
      </Background>
      <BottomSection data={bottomData} />
    </>
  );
};

export default Category;
