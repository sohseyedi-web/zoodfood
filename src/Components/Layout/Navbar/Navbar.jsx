import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assets/res-logo.png";
import { RiShoppingBasketFill, RiUserLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.shop);

  return (
    <nav className="navs" dir="rtl">
      <div className="container navs-container">
        <div className="navs-container__logo">
          <img src={Logo} alt="زودفود" />
          <span>زودفود</span>
        </div>
        <div className="navs-container__links">
          <Link to={"/"}> خانه </Link>
          <Link to={"/menu"}> منو </Link>
          <Link to={"/"}>تماس با ما </Link>
          <Link to={"/"}> صاحبان مشاغل </Link>
        </div>
        <div className="navs-container__links">
          <Link to={"/cart"}>
            <span>{cartItems.length === 0 ? "" : cartItems.length}</span>
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
