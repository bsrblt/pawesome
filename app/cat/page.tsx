import React from "react";
import Card from "components/ui/Card";
import DiscoverNutrition from "components/layout/DiscoverNutrition";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";

const Dog = () => {
  return (
    <>
      <Background>
        <PageTitle text="Cat Food" />
        <div className="container mx-auto px-4 items-center relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Card
              imageSrc="/catfood.jpg"
              title="Premium Dry Cat Food"
              description="High-quality protein and essential nutrients for your cat."
              price={49.99}
            />
            <Card
              imageSrc="/wetcat.jpg"
              title="Wet Cat Food"
              description="Delicious and nutritious wet food for your feline friend."
              price={29.99}
            />
            <Card
              imageSrc="/kitty.jpg"
              title="Kitty Food"
              description="Specially formulated and highly nutritious for growing kitties."
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
        title="Try Our Top Shelf Cat Food"
        desc="Quality cat food is equally crucial for the health and happiness of our feline friends. Cats, like dogs, require a balanced diet rich in essential nutrients to maintain optimal health throughout their lives. High-quality cat food provides the necessary proteins, fats, carbohydrates, vitamins, and minerals cats need to thrive, supporting everything from their coat and skin to their digestive and immune systems. Premium cat food often contains high-quality ingredients with minimal fillers and artificial additives, reducing the risk of allergies, obesity, and other health issues. By investing in quality cat food, we ensure that our belowed companions receive the nutrition they need to live long, healthy lives filled with vitality and joy."
      />
    </>
  );
};

export default Dog;
