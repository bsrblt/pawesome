import React from "react";
import Card from "components/ui/Card";
import DiscoverNutrition from "components/layout/DiscoverNutrition";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";

const DryFood = () => {
  return (
    <>
      <Background>
        <PageTitle text="Dry Food" />
        <div className="container mx-auto px-4 items-center relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Card
              imageSrc="/dogfood.jpg"
              title="Premium Dry Dog Food"
              description="High-quality protein and essential nutrients for your pup."
              price={49.99}
            />
            <Card
              imageSrc="/catfood.jpg"
              title="Premium Dry Cat Food"
              description="High-quality protein and essential nutrients for your cat."
              price={49.99}
            />
            <Card
              imageSrc="/dogfood3.jpg"
              title="Puppy Food"
              description="Specially formulated and highly nutritious for growing puppies."
              price={29.99}
            />
            <Card
              imageSrc="/kitty.jpg"
              title="Kitty Food"
              description="Specially formulated and highly nutritious for growing kitties."
              price={29.99}
            />
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
              imageSrc="/dog1.jpg"
              title="Senior Dog Food"
              description="Tailored nutrition carefully crafted for your older canine companion."
              price={29.99}
            />
            <Card
              imageSrc="/petfood.png"
              title="Senior Cat Food"
              description="Tailored nutrition carefully crafted for your older feline companion."
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
        title="Why Does Our Dry Food Stand Out?"
        desc="As a cornerstone of pet nutrition offering convenience, dental benefits, and balanced nourishment, dry food provides a concentrated source of essential nutrients like proteins, carbohydrates, fats, vitamins, and minerals in a shelf-stable format that's easy to store and serve. The crunchy texture of dry food helps to reduce plaque and tartar buildup, promoting dental health in pets. Our dry food products excel in the market because they are crafted with high-quality, natural ingredients and are meticulously formulated to meet the specific dietary needs of various pets. Free from artificial additives and fillers, our dry food ensures that pets receive optimal nutrition for sustained energy, healthy growth, and overall well-being. By focusing on quality and comprehensive nutrition, we provide pet owners with the best choice for their beloved companions' daily diet."
      />
    </>
  );
};

export default DryFood;
