import React from "react";
import Card from "components/ui/Card";
import DiscoverNutrition from "components/layout/DiscoverNutrition";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";

const SmallPet = () => {
  return (
    <>
      <Background>
        <PageTitle text="Small Pet" />
        <div className="container mx-auto px-4 items-center relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </Background>
      <DiscoverNutrition
        href1="/products"
        button1Text="Products"
        href2="/"
        button2Text="Home"
        title="Unique Food for Unique Needs"
        desc="Crafting food for small pets with care and precision is essential to ensure their unique nutritional needs are met. Small pets, such as rabbits, guinea pigs, hamsters, and birds, have specific dietary requirements that differ significantly from those of larger animals. By meticulously selecting high-quality ingredients and formulating balanced diets tailored to each species, we can promote their overall health, prevent common ailments, and enhance their longevity. This careful crafting process involves understanding the delicate balance of proteins, fibers, vitamins, and minerals these small animals need to thrive. Providing well-crafted food is not just about sustenance; it's about nurturing these small companions, ensuring they lead vibrant, healthy lives filled with energy and happiness."
      />
    </>
  );
};

export default SmallPet;
