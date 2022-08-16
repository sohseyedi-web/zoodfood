import "./Menu.scss";
import Container from "./../../Container/Container";
import { RiSearch2Line } from "react-icons/ri";
import products from "./../../Data/Data";
import { comma } from './../../utils/Comma';

const Menu = () => {
  return (
    <Container>
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
                      <button onClick={() => addToCartHandler(product)}>
                        ثبت سفارش
                      </button>
                      <div className="menu-container__body-items__box-actions__price">
                        {comma(product.price)} تومان
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
