import ring from "../../images/slider-img.png";

const HeroSlider = () => {
  return (
    <>
      <section className="bg-hero-slider bg-cover">
        <div className="container mx-auto p-52">
          <div className="grid grid-cols-2 items-center gap-24 justify-between">
            <div>
              <h3 className="mb-4 text-black text-3xl uppercase relative after:absolute after:bg-black after:w-14 after:h-px after:top-2/4 after:ml-4">
                New Collection
              </h3>
              <h2 className="text-black text-7xl font-bold uppercase mb-4">
                Jewellery
              </h2>
              <p className="text-black text-lg mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                reprehenderit hic nesciunt. Odio adipisci soluta voluptas,
                voluptatibus sunt optio dolores esse dolore necessitatibus non,
                nobis quis, quas nulla ad totam.
              </p>
              <div className="flex items-center justify-start gap-9">
                <a
                  href="#"
                  className="cursor-pointer transition-all hover:bg-white hover:text-black border  py-3 px-10 uppercase bg-black text-white "
                >
                  Shop Now
                </a>
                <span className="font-semibold text-xl tracking-wider text-gray-400">
                  01
                </span>
              </div>
            </div>
            <img src={ring} className="w-full" alt="" srcSet="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
