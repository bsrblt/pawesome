import React from "react";
import Card from "components/ui/Card";
import DiscoverNutrition from "components/layout/DiscoverNutrition";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";

const Dog = () => {
  return (
    <>
      <Background>
        <PageTitle text="Dog Food" />
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
      </Background>
      <DiscoverNutrition
        href1="/products"
        button1Text="Products"
        href2="/"
        button2Text="Home"
        title="We Offer Only the Best Dog Food"
        desc="Quality dog food is paramount for the well-being of our furry companions. Just as a balanced diet is essential for humans, dogs also require proper nutrition to thrive. High-quality dog food provides essential nutrients like proteins, carbohydrates, fats, vitamins, and minerals in the right proportions to support their overall health, from their coat and skin to their immune system and energy levels. Furthermore, premium dog food often contains fewer fillers, additives, and artificial ingredients, reducing the risk of allergies, digestive issues, and other health complications. Investing in quality dog food isn't just about fulfilling a basic need; it's about ensuring our beloved pets live long, happy lives filled with vitality and vigor."
      />
    </>
  );
};

export default Dog;
