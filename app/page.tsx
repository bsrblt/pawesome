import Hero from "./components/layout/Hero";
import FeaturedProducts from "./components/layout/FeaturedProducts";
import { bottomSectionData } from "./lib/bottomSectionData";
import BottomSection from "./components/layout/BottomSection";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BottomSection data={bottomSectionData.home} />
    </>
  );
};

export default Home;
