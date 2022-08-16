import "./Products.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import products from "./../../../Data/Data";
import { addToCart } from "../../../Store/shopping-actions/shoppingReducer";
import { comma } from './../../../utils/Comma';

const Products = () => {
  const dispatch = useDispatch();

  const filterProduct = products.filter((i) => i.id <= 6);
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    // console.log(product);
  };
  return (
    <section className="products" dir="rtl">
      <div className="container products-container">
        <div className="products-container__items">
          {filterProduct.map((product) => (
            <div className="products-container__items-box" key={product.id}>
              <div className="products-container__items-box__img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="products-container__items-box__body">
                <div className="products-container__items-box__body-title">
                  {product.title}
                </div>
                <div className="products-container__items-box__body-number">
                  <div>1</div>
                  <div>2</div>
                </div>
              </div>
              <div className="products-container__items-box__actions">
                <button onClick={() => addToCartHandler(product)}>
                  ثبت سفارش
                </button>
                <div className="products-container__items-box__actions-pricde">
                {comma(product.price)} تومان
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="products-container__more">
          <Link to={"/"}>
            <button>مشاهده موارد بیشتر</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
