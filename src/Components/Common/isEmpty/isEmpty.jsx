import { Link } from "react-router-dom";
import "./isEmpty.scss";
import imgEmpty from "../../Assets/emp.png";

const Empty = ({ title }) => {
  return (
    <section className="empty">
      <img src={imgEmpty} alt="Empty-list" />
      <h4>{title}</h4>
      <p>برای مشاهده محصولات به صفحه زیر بروید:</p>
      <Link to={"/"}>
        <button>صفحه اصلی</button>
      </Link>
    </section>
  );
};

export default Empty;
