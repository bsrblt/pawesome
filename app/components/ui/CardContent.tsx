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
  description,
  price,
}) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    if (title && price !== undefined) {
      const item: CartItem = {
        id: title,
        title,
        price,
        quantity: 1,
      };
      cartCtx.addItem(item);
    }
  };

  return (
    <div className="flex flex-col pb-1 justify-between items-stretch">
      <section>
        <Link href={`/products/${id}`}>
          <h3 className="text-lg font-bold text-darkpur cursor-pointer">
            {title}
          </h3>
        </Link>

        <p className="text-darkpur mb-4">{description}</p>
      </section>
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold text-lg">
          {price ? "$" : null}
          {price}
        </span>
        <div className="mb-1">
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
