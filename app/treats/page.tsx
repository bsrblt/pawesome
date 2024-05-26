import React from "react";
import Card from "components/ui/Card";
import DiscoverNutrition from "components/layout/DiscoverNutrition";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";

const Treats = () => {
  return (
    <>
      <Background>
        <PageTitle text="Treats" />
        <div className="container mx-auto px-4 items-center relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              imageSrc="/treats.jpg"
              title="Dog Treats"
              description="Maintains weight control while keeping it tasty for your canine."
              price={14.99}
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
            <Card
              imageSrc="/cattreat.jpg"
              title="Cat Treats"
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
        title="Delicious Rewards, Nutritious Benefits"
        desc="Healthy and tasty pet treats are an essential part of a balanced pet care regimen, offering both nutritional benefits and rewarding experiences. These treats should be made with high-quality, natural ingredients that provide essential nutrients without excessive calories, artificial additives, or unhealthy fillers. Our pet treats are crafted with this philosophy in mind, ensuring they are not only delicious but also beneficial for overall health. Whether it's for training, bonding, or simply showing affection, our treats are designed to support dental health, joint function, and a shiny coat. By combining wholesome ingredients with irresistible flavors, we provide pet owners with the perfect way to indulge their pets while promoting their well-being and happiness."
      />
    </>
  );
};

export default Treats;
