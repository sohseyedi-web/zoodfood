import "./Menu.scss";
import Container from "./../../Container/Container";
import Select from "react-select";
import { RiSearch2Line } from "react-icons/ri";
import products from "./../../Data/Data";
import { comma } from "./../../utils/Comma";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/shopping-actions/shoppingReducer";

const nameOptions = [
  { value: "Burger", label: "همبرگر" },
  { value: "Pizza", label: "پیتزا" },
];

const rangeOptions = [
  { value: "highest", label: "گران ترین" },
  { value: "lowest", label: "ارزان ترین" },
];

const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <Helmet>
        <title>زود فود / منو</title>
      </Helmet>
      <section className="menu" dir="rtl">
        <div className="container">
          <div className="menu-container">
            <div className="menu-container__header">
              <div className="menu-container__header-inputs">
                <input type="text" placeholder="جست و جو ..." />
                <span>
                  <RiSearch2Line size={32} />
                </span>
              </div>
              <div className="menu-container__header-select">
                <Select options={nameOptions} placeholder="نام ..." />
              </div>
              <div className="menu-container__header-select">
                <Select options={rangeOptions} placeholder="قیمت ..." />
              </div>
            </div>
            <div className="menu-container__body">
              <div className="menu-container__body-items">
                {products.map((product) => (
                  <div
                    className="menu-container__body-items__box"
                    key={product.id}
                  >
                    <div className="menu-container__body-items__box-img">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="menu-container__body-items__box-detail">
                      <div className="menu-container__body-items__box-detail__title">
                        {product.title}
                      </div>
                      <div className="menu-container__body-items__box-detail__number">
                        <div>1</div>
                        <div>2</div>
                      </div>
                    </div>
                    <div className="menu-container__body-items__box-actions">
                      <button
                        className={
                          product.price === 0
                            ? "menu-container__body-items__box-actions__btn btn-dis"
                            : "menu-container__body-items__box-actions__btn"
                        }
                        onClick={() => addToCartHandler(product)}
                      >
                        ثبت سفارش
                      </button>
                      <div className="menu-container__body-items__box-actions__price">
                        {product.price === 0
                          ? "موجود نیست"
                          : `${comma(product.price)} تومان`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Menu;
