import fb from "../../../images/fb.png";
import twtr from "../../../images/twitter.png";
import lnkdn from "../../../images/linkedin.png";
import ig from "../../../images/insta.png";
import { useState } from "react";

const FooterFollow = () => {
  const [social, newState] = useState([
    {
      url: "#",
      icon: fb,
    },
    {
      url: "#",
      icon: twtr,
    },
    {
      url: "#",
      icon: lnkdn,
    },
    {
      url: "#",
      icon: ig,
    },
  ]);

  return (
    <>
      <div className="px-60">
        <h3
          className="text-white text-center font-bold uppercase text-2xl pb-6
        after:block after:bg-yellow-500 after:h-1 after:w-16 after:mx-auto after:mt-4"
        >
          Follow
        </h3>
        <ul className="flex justify-center gap-6 pb-6 border-white border-b">
          {social.map((curElem, idx) => {
            const { url, icon } = curElem;
            return (
              <li key={idx}>
                <a href={url}>
                  <img src={icon} alt="" srcSet="" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FooterFollow;
