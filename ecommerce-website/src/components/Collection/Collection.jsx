import ProductBlock from "../ProductBlock/ProductBlock";

const Collection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="mb-10 text-4xl text-black font-bold -tracking-wider uppercase relative after:absolute after:ml-3 after:w-4 after:h-full after:bg-gradient-to-r from-orange-500 to-white">
          Our Jewellery Price
        </h2>
        <div className="grid grid-cols-3 gap-8 items-stretch mb-8">
          <ProductBlock />
        </div>
        <div className="block text-center">
          <a
            href="#"
            className="cursor-pointer transition-all hover:bg-white hover:text-black border inline-block py-3 px-10 uppercase bg-black text-white "
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collection;
