import { GetStaticPaths, GetStaticProps } from "next";
import { Product, productsData } from "lib/ProductsData";
import Image from "next/image";
import React from "react";

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <Image
          src={product.imageSrc}
          alt={product.title}
          width={600}
          height={400}
          className="rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-lg mb-4">{product.description}</p>
        <span className="text-2xl font-semibold">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = productsData.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const product = productsData.find((product) => product.id.toString() === id);

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
