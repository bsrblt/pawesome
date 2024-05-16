import Button from "components/ui/Button";
import Card from "components/ui/Card";
import React from "react";

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
