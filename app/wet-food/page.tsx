import React from "react";
import Card from "components/ui/Card";

const WetFood = () => {
  return (
    <section className="bg-bermuda py-12 md:py-24 relative">
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('products1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 items-center relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card
            imageSrc="/wet1.jpg"
            title="wwwwwwwwww"
            description="wwwwwwwwwwww."
            price={49.99}
          />
          <Card
            imageSrc="/dogfoodwet.jpg"
            title="Wet Dog Food"
            description="Delicious and nutritious wet food for your canine friend."
            price={39.99}
          />
          <Card
            imageSrc="/wet2.jpg"
            title="wwwwwwwwwwwww"
            description="wwwwwwwwwwww"
            price={29.99}
          />
          <Card
            imageSrc="/wet3.jpg"
            title="wwwwwwwwww"
            description="wwwwwwwwwwwwww"
            price={29.99}
          />
        </div>
      </div>
    </section>
  );
};

export default WetFood;
