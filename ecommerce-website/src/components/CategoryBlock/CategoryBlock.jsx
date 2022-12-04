import { useState } from "react";
import category1 from "../../images/i-1.png";
import category2 from "../../images/i-2.png";
import category3 from "../../images/i-3.png";

const CategoryBlock = () => {
  const [arr, nextArr] = useState(
    [
      {
        tag: "Best Seller",
        image: category1,
        title: "Bracelet1",
      },
      {
        tag: "Best Price",
        image: category2,
        title: "Bracelet2",
      },
      {
        tag: "Most Viewed",
        image: category3,
        title: "Bracelet3",
      }
    ],
  );

  return (
    <>
      {arr.map((curElem, idx) => {
        const { tag, image, title } = curElem;
        return (
          <div
            key={idx}
            className="border p-5 relative cursor-pointer hover:shadow-2xl"
          >
            <img src={image} alt="" className="w-32 mx-auto my-8" />
            <div className="left-0 p-5 absolute top-0 h-full w-full grid grid-cols-2 grid-rows-2">
              <span className="text-yellow-400 uppercase text-sm col-start-1 col-end-1 row-start-1 row-end-1">
                {tag}
              </span>
              <h3 className="text-black uppercase text-lg col-start-1 col-end-1 row-start-2 row-end-2 self-end">
                {title}
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CategoryBlock;
