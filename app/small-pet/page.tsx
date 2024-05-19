import React from "react";
import Card from "components/ui/Card";

const SmallPet = () => {
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
            imageSrc="/hamsterfood.jpg"
            title="Hamster Food"
            description="Balanced diet and healthy mucnhies for your small furry friend."
            price={14.99}
          />
          <Card
            imageSrc="/gp.jpg"
            title="Guinea Pig Food"
            description="Your little friend's favourite food, now with extra flavour."
            price={19.99}
          />
          <Card
            imageSrc="/smallpet1.jpg"
            title="Tiny Treats"
            description="Treat your cutest with the best taste on the pet food market."
            price={19.99}
          />
          <Card
            imageSrc="/gp2.jpg"
            title="Healthy Snacks"
            description="Carefully crafted healthy fiber and protein for your older tiny companion."
            price={29.99}
          />
        </div>
      </div>
    </section>
  );
};

export default SmallPet;
