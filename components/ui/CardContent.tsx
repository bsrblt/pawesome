import React from "react";
import Button from "./Button";
import Link from "next/link";

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
        <Button size="sm">Add to Cart</Button>
      </div>
    </div>
  );
};
export default CardContent;
