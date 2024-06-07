"use client";
import React, { useContext } from "react";
import Button from "./Button";
import Link from "next/link";
import CartContext from "app/store/CartContext";
import { CartItem } from "../../lib/types";

interface CardContentProps {
  id: string;
  title: string | undefined;
  description: string | undefined;
  price?: number | undefined;
}

const CardContent: React.FC<CardContentProps> = ({
  id,
  title,
  // description,
  price,
}) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    if (title && price !== undefined) {
      const item: CartItem = {
        id: id,
        title,
        price,
        quantity: 1,
      };
      cartCtx.addItem(item);
    }
  };

  return (
    <div className="flex pb-1 justify-between items-center">
      {/* <section className="">
        <Link href={`/products/${id}`}>
          <h3 className="text-lg font-bold text-darkpur/80 cursor-pointer">
            {title}
          </h3>
          <p className="text-darkpur text-xl mb-4">{description}</p>
        </Link>
      </section> */}
      <span className="text-primary font-bold text-lg">
        {price ? "$" : null}
        {price}
      </span>
      <div className="mb-1 -mr-4">
        <Button onClick={addToCartHandler}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default CardContent;
