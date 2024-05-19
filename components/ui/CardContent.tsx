"use client";
import React, { useContext } from "react";
import Button from "./Button";
import Link from "next/link";
import CartContext from "store/CartContext";
import { CartItem } from "components/utils/types";

interface CardContentProps {
  title: string | undefined;
  description: string | undefined;
  price: number | undefined;
}

const CardContent: React.FC<CardContentProps> = ({
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
    <div className="pb-1">
      <Link href="/">
        <h3 className="text-lg font-bold text-darkpur cursor-pointer">
          {title}
        </h3>
      </Link>

      <p className="text-darkpur mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold text-lg">${price}</span>
        <Button onClick={addToCartHandler} size="sm">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CardContent;
