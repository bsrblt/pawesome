import React from "react";
import ProductList from "./ProductList";
import { bottomSectionData } from "../../lib/bottomSectionData";
import BottomSection from "./BottomSection";
import Background from "./Background";
import PageTitle from "../ui/PageTitle";
import { productsData } from "../../lib/ProductsData";

interface CategoryProps {
  category?: string;
  type?: string;
  featured?: string;
  bottomDataKey: keyof typeof bottomSectionData;
  showBackground?: boolean;
  showPageTitle?: boolean;
  showBottomSection?: boolean;
}

const Category: React.FC<CategoryProps> = ({
  category,
  type,
  featured,
  bottomDataKey,
  showBackground = true,
  showPageTitle = true,
  showBottomSection = true,
}) => {
  const bottomData = bottomSectionData[bottomDataKey];
  let products = [...productsData];

  if (category) {
    products = products.filter((product) => product.Category === category);
  }

  if (type) {
    products = products.filter((product) => product.type === type);
  }

  if (featured) {
    products = products.filter((product) => product.featured === "Yes");
  }

  const pageTitleText =
    type === "Treat" ? "Treats" : type ? `${type} Food` : `${category} Food`;

  return (
    <>
      {showBackground ? (
        <Background>
          {showPageTitle ? <PageTitle text={pageTitleText} /> : null}
          <div className="container mx-auto px-4 items-center relative z-10">
            <ProductList products={products} />
          </div>
        </Background>
      ) : (
        <>
          {showPageTitle && <PageTitle text={pageTitleText} />}
          <div className="container mx-auto px-4 items-center relative z-10">
            <ProductList products={products} />
          </div>
        </>
      )}
      {showBottomSection ? <BottomSection data={bottomData} /> : null}
    </>
  );
};

export default Category;
