import React from "react";
import Card from "components/ui/Card";

const Dog = () => {
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
        Dog Food
      </h1>
      <div className="container mx-auto px-4 items-center relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card
            imageSrc="/dogfood.jpg"
            title="Premium Dry Dog Food"
            description="High-quality protein and essential nutrients for your pup."
            price={49.99}
          />
          <Card
            imageSrc="/dogfoodwet.jpg"
            title="Wet Dog Food"
            description="Delicious and nutritious wet food for your canine friend."
            price={39.99}
          />
          <Card
            imageSrc="/dogfood3.jpg"
            title="Puppy Food"
            description="Specially formulated and highly nutritious for growing puppies."
            price={29.99}
          />
          <Card
            imageSrc="/dog1.jpg"
            title="Senior Dog Food"
            description="Tailored nutrition carefully crafted for your older canine companion."
            price={29.99}
          />
        </div>
      </div>
    </section>
  );
};

export default Dog;
