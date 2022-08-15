import "./Footer.scss";
import Logo from "../../Assets/res-logo.png";
import {
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGithubFill,
  RiMapPin2Fill,
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="footer" dir="rtl">
      <div className="container footer-container">
        <div className="footer-container__right">
          <div className="footer-container__right-logo">
            <img src={Logo} alt="zoodfood" />
            <span>زودفود</span>
          </div>
          <div className="footer-container__right-address">
            <span>
              <RiMapPin2Fill size={26} />
            </span>
            <span>آدرس : ایران تهران تهران میدان کاج</span>
          </div>
        </div>
        <div className="footer-container__left">
          <div className="footer-container__left-social">
            <a href="/">
              <RiTwitterFill size={26} />
            </a>
            <a href="/">
              <RiLinkedinFill size={26} />
            </a>
            <a href="/">
              <RiGithubFill size={26} />
            </a>
            <a href="/">
              <RiInstagramFill size={26} />
            </a>
          </div>
          <div className="footer-container__left-inputs">
            <input type="email" placeholder="example@gmail.com" />
            <button>عضویت</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
