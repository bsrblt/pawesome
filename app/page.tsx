import Hero from "../components/layout/Hero";
import FeaturedProducts from "components/layout/FeaturedProducts";
import DiscoverNutrition from "components/layout/DiscoverNutrition";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <DiscoverNutrition
        button1Text="Shop Now"
        href1="/products"
        button2Text="Learn More"
        href2="/our-story"
        title="Discover the Best Nutrition"
        desc="Our pet food product stands as the pinnacle of pet nutrition due to its meticulous formulation and commitment to quality. We use only the finest natural ingredients, ensuring that each recipe is rich in essential nutrients like high-quality proteins, healthy fats, vitamins, and minerals. Our products are free from artificial additives, fillers, and by-products, providing pure, wholesome nutrition that supports your pet's overall health and vitality. This superior nutrition is crucial for promoting a strong immune system, healthy skin and coat, robust digestive health, and sustained energy levels. By choosing our pet food, you are investing in your pet's long-term well-being, ensuring they receive the best care possible through every meal."
      />
    </>
  );
};

export default Home;
