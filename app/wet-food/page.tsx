import React from "react";
import Card from "components/ui/Card";
import { bottomSectionData } from "lib/bottomSectionData";
import BottomSection from "components/layout/BottomSection";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";
import { productsData } from "lib/ProductsData";

const WetFood = () => {
  const bottomData = bottomSectionData.wetFood;
  const wetProducts = productsData.filter(
    (product) => product.type === "Treat"
  );

  return (
    <>
      <Background>
        <PageTitle text="Wet Food" />
        <div className="container mx-auto px-4 items-center relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wetProducts.map((product) => (
              <Card
                key={product.id}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </Background>
      <BottomSection data={bottomData} />
    </>
  );
};

export default WetFood;
