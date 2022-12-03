import aboutImg from "../../images/about-img.png";

const About = () => {
  return (
    <>
      <section className="container mx-auto grid grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="mb-6 text-4xl text-black font-bold -tracking-wider uppercase relative after:absolute after:ml-3 after:w-4 after:h-full after:bg-gradient-to-r from-orange-500 to-white">
            About Jewellery Shop
          </h2>
          <p className="text-black text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <div className="block">
            <a
              href="#"
              className="cursor-pointer transition-all hover:bg-white hover:text-black border inline-block py-3 px-10 uppercase bg-black text-white "
            >
              Shop Now
            </a>
          </div>
        </div>
        <img src={aboutImg} alt="" srcSet="" />
      </section>
    </>
  );
};

export default About;
