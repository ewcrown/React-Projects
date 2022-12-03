import productImg1 from "../../images/p-1.png";
import productImg2 from "../../images/i-2.png";
import productImg3 from "../../images/i-3.png";

const ProductBlock = () => {
  const arr = [
    {
      title: "Diamond Ring1",
      image: productImg1,
      price: 3000.0,
      buttonText: "Buy Now",
    },
    {
      title: "Diamond Ring2",
      image: productImg2,
      price: 2000.0,
      buttonText: "Buy Now",
    },
    {
      title: "Diamond Ring3",
      image: productImg3,
      price: 1000.0,
      buttonText: "Sold Out",
    },
  ];
  return (
    <>
      {arr.map((curElem, idx) => {
        const { title, image, price, buttonText } = curElem;

        return (
          <div key={idx} className="border p-8 bg-white text-center">
            <h4 className="text-black text-lg uppercase font-bold mb-8">
              {title}
            </h4>
            <img src={image} alt="" srcSet="" className="mx-auto mb-8" />
            <h3 className="mb-8 font-semibold text-2xl text-yellow-500">
              <span className="text-black">$</span>
              {price}
            </h3>
            <a
              href="#"
              className="cursor-pointer transition-all hover:text-yellow-500 hover:border-yellow-500 border-black border inline-block py-3 px-10 uppercase text-black "
            >
              {buttonText}
            </a>
          </div>
        );
      })}
    </>
  );
};

export default ProductBlock;
