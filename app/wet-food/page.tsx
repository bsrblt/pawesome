import React from "react";
import Card from "components/ui/Card";
import DiscoverNutrition from "components/layout/DiscoverNutrition";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";

const WetFood = () => {
  return (
    <>
      <Background>
        <PageTitle text="Wet Food" />
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
      </Background>
      <DiscoverNutrition
        href1="/products"
        button1Text="Products"
        href2="/"
        button2Text="Home"
        title="Only the Best Wet Food"
        desc="Wet food plays a crucial role in pet nutrition by providing hydration, palatability, and essential nutrients in a highly digestible form. It often contains higher moisture content, which is particularly beneficial for pets that do not drink enough water, helping to maintain their overall hydration and urinary health. Our wet food products stand out as the best in the market because they are made with premium, natural ingredients free from artificial additives and fillers. Carefully balanced to meet the specific nutritional needs of different pets, our wet food not only supports optimal health but also entices even the pickiest eaters with its rich flavor and appealing texture. By prioritizing quality and taste, we ensure that pets receive the nourishment they need while enjoying every meal."
      />
    </>
  );
};

export default WetFood;
