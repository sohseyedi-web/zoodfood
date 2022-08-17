import "./Header.scss";
import { Link } from "react-router-dom";
import Hero from "../../Assets/hero.png";
import { RiShieldCheckFill, RiCarLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="header" dir="rtl">
      <div className="container header-container">
        <div className="header-container__details">
          <p className="header-container__details-head">
            روشی آسان برای سفارش غذا
          </p>
          <div className="header-container__details-title">
            {" "}
            <span>عجله دارید؟</span>
            <br />
            فقط درب منزل منتظر غذا باشید
          </div>
          <div className="header-container__details-actions">
            <Link to={"/"}>
              <button>سفارش غذا</button>
            </Link>
            <Link to={"/menu"}>
              <button className="action-btn">منو کامل</button>
            </Link>
          </div>
          <div className="header-container__details-footer">
            <div className="header-container__details-footer__text">
              <span>
                <RiCarLine size={26} />
              </span>
              <span>هزینه ارسال مجانی</span>
            </div>
            <div className="header-container__details-footer__text">
              <span>
                <RiShieldCheckFill size={26} />
              </span>
              <span>درگاه پرداخت امن</span>
            </div>
          </div>
        </div>
        <img src={Hero} alt="زودفود" />
      </div>
    </header>
  );
};

export default Header;
