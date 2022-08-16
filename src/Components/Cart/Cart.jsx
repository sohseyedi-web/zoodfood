import "./Cart.scss";
import Container from "../../Container/Container";
import Empty from "./../Common/isEmpty/isEmpty";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { comma } from "./../../utils/Comma";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.shop);
  const hasItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (price, total) => price + total.quantity * total.price,
    0
  );

  return (
    <Container>
      <section className="cart" dir="rtl">
        <div className="container">
          <div className="cart-container">
            {hasItems ? (
              <>
                <div className="cart-container__details">
                  {cartItems.map((cart) => (
                    <div className="cart-container__details-box" key={cart.id}>
                      <div className="cart-container__details-box__right">
                        <img src={cart.image} alt={cart.title} />
                        <div className="cart-container__details-box__right-product">
                          <div className="cart-container__details-box__right-product__title">
                            {cart.title}
                          </div>
                          <div className="cart-container__details-box__right-product__price">
                            {comma(cart.price)} تومان
                          </div>
                        </div>
                      </div>
                      <div className="cart-container__details-box__left">
                        <span className="cart-container__details-box__left-quantity">
                          تعداد :{cart.quantity}
                        </span>
                        <button className="cart-container__details-box__left-btn">
                          <RiDeleteBin2Line size={28} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-container__factor">
                  <div className="cart-container__factor-total">
                    <span>جمع خرید</span>
                    <span>{comma(totalPrice)}</span>
                  </div>
                  <div className="cart-container__factor-count">
                    <span>تعداد سفارشات</span>
                    <span>{hasItems}</span>
                  </div>
                  <div className="cart-container__factor-offprice">
                    <span>تخفیفات</span>
                    <span>{0}</span>
                  </div>
                  <div className="cart-container__factor-finall">
                    <span>جمع نهایی</span>
                    <span>{comma(totalPrice)}</span>
                  </div>
                  <button className="cart-container__factor-btn">
                    ثبت سفارش
                  </button>
                </div>
              </>
            ) : (
              <Empty title={"سبد خرید خالی است"} />
            )}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Cart;
