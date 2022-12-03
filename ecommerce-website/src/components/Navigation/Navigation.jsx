import cart from "../../images/cart.png";
import search from "../../images/search-icon.png";

const Navigation = () => {
  return (
    <div className="lodge-navigation" id="lodge-navigation">
      <ul className="flex justify-end gap-8">
        <li>
          <a href="" className="text-base font-bold uppercase">
            Home
          </a>
        </li>
        <li>
          <a href="" className="text-base font-bold uppercase">
            About
          </a>
        </li>
        <li>
          <a href="" className="text-base font-bold uppercase">
            Jewellery
          </a>
        </li>
        <li>
          <a href="" className="text-base font-bold uppercase">
            Contact Us
          </a>
        </li>
        <li>
          <a href="" className="text-base font-bold uppercase">
            Login
          </a>
        </li>
        <li>
          <a href="">
            <img src={cart} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={search} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
