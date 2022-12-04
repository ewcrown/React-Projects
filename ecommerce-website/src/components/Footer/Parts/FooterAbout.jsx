import { useState } from "react";
import Logo from "../../Logo/Logo";
import addressIcon from "../../../images/location.png";
import phoneIcon from "../../../images/phone.png";
import mailIcon from "../../../images/mail.png";

const FooterAbout = () => {
  const [address, updateAddress] = useState([
    {
      url: "#",
      type: "#",
      icon: addressIcon,
      text: "Address",
    },
    {
      url: "+01 12947790",
      type: "tel:",
      icon: phoneIcon,
      text: "+01 12947790",
    },
    {
      url: "demo@gmail.com",
      type: "mailto:",
      icon: mailIcon,
      text: "demo@gmail.com",
    },
  ]);
  return (
    <>
    <div className="mb-10 grid grid-cols-4 gap-9 items-center">
      <div className="bg-white rounded-b-2xl text-center flex justify-center pt-32 pb-6">
        <Logo size="w-12" text="pl-2 uppercase text-black font-bold text-3xl" />
      </div>

      {address.map((curElem, idx) => {
        const { url, type, icon, text } = curElem;
        return (
          <div key={idx} className="flex items-center pt-24 justify-start gap-4">
            <img src={icon} alt="" />
            <p className="text-white text-md">
              <a href={`${type}${url}`}>{text}</a>
            </p>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default FooterAbout;
