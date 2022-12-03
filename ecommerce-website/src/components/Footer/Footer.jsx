import FooterAbout from "./Parts/FooterAbout";

const Footer = () => {
  return (
    <footer className="lodge-footer" id="lodge-footer">
      <div className="bg-footer">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
              <FooterAbout />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
