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
    <div className="flex flex-col h-[24rem] bg-tahiti/20 rounded-xl border border-bermuda/5">
      <Link href={`/`}>
        <Image
          alt={title ?? "No Title"}
          className="rounded-t-xl mb-1 border-b-4 border-b-darkpur cursor-pointer hover:shadow-md transition-all duration-300"
          height={200}
          src={imageSrc || "/default-image.png"}
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width={600}
        />
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
