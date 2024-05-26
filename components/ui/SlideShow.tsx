"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import a1 from "../../public/a1.jpg";
import a3 from "../../public/a3.jpg";
import a6 from "../../public/a6.jpg";
import a8 from "../../public/a8.jpg";
import petfood from "../../public/petfood.png";

const images = [
  { image: petfood, alt: "healthy pet food" },
  { image: a8, alt: "complete nutrition" },
  { image: a3, alt: "happy dog" },
  { image: petfood, alt: "healthy pet food" },
  { image: a1, alt: "feet and food" },
  { image: a8, alt: "complete nutrition" },
  { image: petfood, alt: "healthy pet food" },
  { image: a3, alt: "happy dog" },
  { image: a6, alt: "teeth and breath cleaner" },
];

const SlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? "active" : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
};
export default SlideShow;
