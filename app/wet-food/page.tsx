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
      <h1 className="text-3xl md:text-4xl font-bold text-darkpur mb-12 sm:mb-16 sm:-mt-6 text-center font-lobster tracking-wider">
        Wet Food
      </h1>
      <div className="container mx-auto px-4 items-center relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card
            imageSrc="/wetcat.jpg"
            title="Wet Cat Food"
            description="Highly nutritious wet food for your lovely furry."
            price={49.99}
          />
          <Card
            imageSrc="/dogfoodwet.jpg"
            title="Wet Dog Food"
            description="Delicious and nutritious wet food for man's best friend."
            price={39.99}
          />
          <Card
            imageSrc="/wet3.jpg"
            title="Wet Puppy Food "
            description="Luxurious wet food specially crafted for your little canine."
            price={29.99}
          />
          <Card
            imageSrc="/wetfood2.jpg"
            title="Diet Wet Cat Food"
            description="Maintains weight control while keeping it tasty for your feline."
            price={29.99}
          />
        </div>
      </div>
    </section>
  );
};

export default WetFood;
