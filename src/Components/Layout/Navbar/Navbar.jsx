import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assets/res-logo.png";
import { RiShoppingBasketFill, RiUserLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.shop);
  const [active, setActive] = useState(false);

  return (
    <nav className="navs" dir="rtl">
      <div className="container navs-container">
        <div
          className="navs-container__icon"
          onClick={() => setActive(!active)}
        >
          <FaBars size={26} />
        </div>
        <div className="navs-container__logo">
          <img src={Logo} alt="زودفود" />
          <span>زودفود</span>
        </div>
        <div
          className={
            active
              ? "navs-container__links active-links"
              : "navs-container__links"
          }
        >
          <Link to={"/"}> خانه </Link>
          <Link to={"/menu"}> منو </Link>
          <Link to={"/"}>تماس با ما </Link>
          <Link to={"/"}> صاحبان مشاغل </Link>
        </div>
        <div className="navs-container__action">
          <Link to={"/cart"} className="navs-container__links-icon">
            <span
              className={
                cartItems.length === 0
                  ? "navs-container__links-icon__span visi"
                  : "navs-container__links-icon__span"
              }
            >
              {cartItems.length}
            </span>
            <RiShoppingBasketFill size={26} />
          </Link>
          <Link to={"/login"}>
            <RiUserLine size={26} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
