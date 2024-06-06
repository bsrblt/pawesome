import Hero from "../components/layout/Hero";
import FeaturedProducts from "components/layout/FeaturedProducts";
import { bottomSectionData } from "lib/bottomSectionData";
import BottomSection from "components/layout/BottomSection";

const Home = () => {
  const bottomData = bottomSectionData.careers;

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BottomSection data={bottomData} />
    </>
  );
};

export default Home;
