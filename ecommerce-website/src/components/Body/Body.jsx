import About from "../About/About";
import Categories from "../Categories/Categories";
import Collection from "../Collection/Collection";
import ContactForm from "../ContactForm/ContactForm";
import HeroSlider from "../HeroSlider/HeroSlider";
import SpecialBanner from "../SpecialBanner/SpecialBanner";
import Testimonials from "../Testimonials/Testimonials";

const Body = () => {
  return (
    <>
      <HeroSlider />
      <Categories />
      <About />
      <Collection />
      <SpecialBanner />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Body;
