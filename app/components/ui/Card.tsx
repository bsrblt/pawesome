import React from "react";
import Image from "next/image";
import CardContent from "./CardContent";
import Link from "next/link";

interface CardProps {
  id: number;
  title?: string | undefined;
  imageSrc?: string;
  description?: string;
  price?: number;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  imageSrc,
  description,
  price,
}) => {
  return (
    <div className="flex flex-col justify-between bg-tahiti/20 rounded-xl border border-bermuda/5 z-20">
      <Link href={`/products/${id}`}>
        <Image
          alt={title ?? "No Title"}
          className="rounded-t-xl mb-1 border-b-4 border-b-darkpur cursor-pointer hover:shadow-md transition-all duration-300 z-10"
          height={200}
          src={imageSrc || "/default-image.png"}
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width={600}
        />
        <h3 className="text-lg font-bold text-darkpur/80 cursor-pointer">
          {title}
        </h3>
        <p className="text-darkpur text-xl mb-4">{description}</p>
      </Link>
      <CardContent
        id={id.toString()}
        title={title}
        description={description}
        price={price}
      />
    </div>
  );
};

export default Card;
