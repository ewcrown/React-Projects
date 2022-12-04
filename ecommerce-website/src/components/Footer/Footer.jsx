import FooterAbout from "./Parts/FooterAbout";
import FooterCopyrights from "./Parts/FooterCopyrights";
import FooterFollow from "./Parts/FooterFollow";
import Newsletter from "./Parts/Newsletter";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900">
        <div className="container mx-auto">
          <FooterAbout />
          <Newsletter />
          <FooterFollow />
          <FooterCopyrights />
        </div>
      </footer>
    </>
  );
};

export default Footer;
