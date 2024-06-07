"use client";
import React from "react";
import { useParams } from "next/navigation";
import { productsData } from "../../lib/ProductsData";
import Image from "next/image";
import PageTitle from "app/components/ui/PageTitle";
import Background from "app/components/layout/Background";
import BottomSection from "app/components/layout/BottomSection";
import { bottomSectionData } from "app/lib/bottomSectionData";
import CardContent from "app/components/ui/CardContent";
import RecommendedItems from "app/components/layout/RecommendedItems";
import Reviews from "app/components/layout/Reviews";
import NutritionValues from "app/components/layout/NutritionValues";

const ProductPage: React.FC = () => {
  const { id } = useParams() as { id: string };
  const product = productsData.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Background>
        <PageTitle text={product.title} />
        <div className="container md:flex justify-between mx-auto px-4 gap-2 z-10 md:h-[520px]">
          <Image
            src={product.imageSrc}
            alt={product.title}
            width={600}
            height={400}
            style={{
              objectFit: "cover",
            }}
            className="rounded-lg mb-4 shadow-sh"
          />

          <section className="grid sm:p-4 justify-between text-xl gap-8 mt-1">
            <h3>{product.description}</h3>
            <div className="px-2">
              <CardContent
                id={product.id.toString()}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </div>
            <NutritionValues nutritionValues={product.nutritionValues} />
          </section>
          <Reviews productId={product.id} />
        </div>
        <RecommendedItems currentProductId={product.id} />
      </Background>
      <BottomSection data={bottomSectionData.home} />
    </>
  );
};

export default ProductPage;
