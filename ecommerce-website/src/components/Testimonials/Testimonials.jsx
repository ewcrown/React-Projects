import author from "../../images/client.png";

const Testimonials = () => {
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-24">
          <h2 className="text-4xl text-center text-black font-normal relative after:absolute after:ml-3 after:w-4 after:h-full after:bg-gradient-to-r from-orange-500 to-white mb-3">
            Testimonials
          </h2>
          <p className="text-center text-2xl mb-10 text-black">
            What is says our customer
          </p>
          <div className="border border-yellow-400 p-6 grid grid-cols-2 gap-10">
            <div className="flex items-center justify-start gap-8">
              <img src={author} alt="" srcSet="" />
              <h2 className="font-bold text-black text-xl">
                Aliqua
                <span className="text-yellow-400 block font-normal text-lg ">
                  Consectetur <br></br>adipiscing
                </span>
              </h2>
            </div>
            <p className="text-lg text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrudLorem ipsum
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
