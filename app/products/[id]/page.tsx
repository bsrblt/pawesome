"use client";
import React, { useContext } from "react";
import { useParams } from "next/navigation";
import { productsData, Product } from "../../lib/ProductsData";
import Image from "next/image";
import PageTitle from "app/components/ui/PageTitle";
import Background from "app/components/layout/Background";
import BottomSection from "app/components/layout/BottomSection";
import { bottomSectionData } from "app/lib/bottomSectionData";
import Button from "app/components/ui/Button";
import CartContext from "app/store/CartContext";
import CardContent from "app/components/ui/CardContent";

const RecommendedItems: React.FC<{ currentProductId: number }> = ({
  currentProductId,
}) => {
  const otherProducts = productsData
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <div className="container mx-auto mt-8  px-4">
      <div className="bg-lemonlight rounded-lg p-6 shadow-sh">
        <h2 className="text-lg font-bold mb-4 text-center">
          You Might Like These Too:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          {otherProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <Image
                src={product.imageSrc}
                alt={product.title}
                width={200}
                height={150}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                className="rounded-lg mb-2"
              />
              <p className="text-center font-semibold">{product.title}</p>
              <p className="text-center">{product.price}</p>
              <Button onClick={() => console.log("Add to Cart")}>
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductPage: React.FC = () => {
  const { id } = useParams() as { id: string };
  const cartCtx = useContext(CartContext);
  const product = productsData.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Background>
        <PageTitle text={product.title} />
        <div className="container md:flex justify-around mx-auto px-4 gap-8">
          <Image
            src={product.imageSrc}
            alt={product.title}
            width={600}
            height={400}
            className="rounded-lg mb-4 shadow-sh"
          />
          <section className="grid justify-between sm:p-4 text-xl gap-8">
            <div className=" -mr-2">
              <CardContent
                id={product.id.toString()}
                title={""}
                description={product.description}
                price={product.price}
              />
            </div>
            <div className="container mx-auto mt-8">
              <div className="bg-white rounded-lg p-6 shadow-sh">
                <h2 className="text-2xl font-bold mb-4">Nutrition Values</h2>
                <ul>
                  {Object.entries(product.nutritionValues).map(
                    ([name, value], index) => (
                      <li key={index} className="mb-2">
                        <span className="font-semibold">{name}: </span>
                        {value}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </section>
        </div>
        <RecommendedItems currentProductId={product.id} />
      </Background>
      <BottomSection data={bottomSectionData.home} />
    </>
  );
};

export default ProductPage;
