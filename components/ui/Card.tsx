import React from "react";
import Image from "next/image";
import CardContent from "./CardContent";
import Link from "next/link";

interface CardProps {
  title?: string;
  children?: React.ReactNode;
  imageSrc?: string;
  description?: string;
  price?: number;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description, price }) => {
  return (
    <div className="">
      <Link href={`/product/${title}`}>
        <Image
          alt={title}
          className="rounded-t-xl mb-1 border-b-4 border-b-darkpur cursor-pointer hover:shadow-md transition-all duration-300"
          height={200}
          src={imageSrc}
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width={350}
        />
      </Link>

      <CardContent title={title} description={description} price={price} />
    </div>
  );
};
export default Card;
