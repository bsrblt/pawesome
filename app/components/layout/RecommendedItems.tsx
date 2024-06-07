"use client";
import React, { useContext } from "react";
import { productsData, Product } from "../../lib/ProductsData";
import Image from "next/image";
import Button from "app/components/ui/Button";
import Link from "next/link";
import CartContext from "app/store/CartContext";

const RecommendedItems: React.FC<{ currentProductId: number }> = ({
  currentProductId,
}) => {
  const cartCtx = useContext(CartContext);
  const otherProducts = productsData
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  const addToCartHandler = (product: Product) => {
    cartCtx.addItem({
      id: product.id.toString(),
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="bg-lemonlight rounded-lg p-6 shadow-sh">
        <h2 className="text-lg font-bold mb-4 text-center">
          You Might Like These Too:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          {otherProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <Link href={`/products/${product.id}`}>
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
              </Link>
              <p className="text-center">{product.price}</p>
              <Button onClick={() => addToCartHandler(product)}>
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedItems;
