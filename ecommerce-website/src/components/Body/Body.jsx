import About from "../About/About";
import Categories from "../Categories/Categories";
import Collection from "../Collection/Collection";
import HeroSlider from "../HeroSlider/HeroSlider";

const Body = () => {
  return (
    <>
      <HeroSlider />
      <Categories />
      <About />
      <Collection />
    </>
  );
};

export default Body;
