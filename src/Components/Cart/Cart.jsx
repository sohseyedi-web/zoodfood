import "./Cart.scss";
import { Helmet } from "react-helmet";
import { comma } from "./../../utils/Comma";
import Empty from "./../Common/isEmpty/isEmpty";
import Container from "../../Container/Container";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin2Line, RiAddLine, RiSubtractFill } from "react-icons/ri";
import {addToCart,removeToCart,deleteItem} from "../../Store/shopping-actions/shoppingReducer";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.shop);
  const hasItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (price, total) => price + total.quantity * total.price,
    0
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <Helmet>
        <title>زود فود / سبد خرید</title>
      </Helmet>
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
                        <button onClick={() => dispatch(addToCart(cart))}>
                          <RiAddLine />
                        </button>
                        <span className="cart-container__details-box__left-quantity">
                          {cart.quantity}
                        </span>
                        <button onClick={() => dispatch(removeToCart(cart))}>
                          <RiSubtractFill />
                        </button>
                        <button
                          className="cart-container__details-box__left-btn"
                          onClick={() => dispatch(deleteItem(cart))}
                        >
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
