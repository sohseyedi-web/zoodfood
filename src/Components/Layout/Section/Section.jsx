import "./Section.scss";
import Location from "../../Assets/location.png";
import { RiCheckboxCircleLine } from "react-icons/ri";

const Section = () => {
  return (
    <section className="service" dir="rtl">
      <div className="container service-container">
        <div className="service-container__about">
          <div className="service-container__about-details">
            <div className="service-container__about-details__title">
              چرا <span>زودفود؟</span>
            </div>
            <p className="service-container__about-details__subtitle">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <div className="service-container__about-details__content">
              <div className="service-container__about-details__content-group">
                <div className="service-container__about-details__content-group__head">
                  <span>
                    <RiCheckboxCircleLine size={24} />
                  </span>
                  <span>غذای تازه و خوش طعم</span>
                </div>
                <p className="service-container__about-details__content-group__body">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
              <div className="service-container__about-details__content-group">
                <div className="service-container__about-details__content-group__head">
                  <span>
                    <RiCheckboxCircleLine size={24} />
                  </span>

                  <span>پشتیبانی با کیفیت</span>
                </div>
                <p className="service-container__about-details__content-group__body">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
              <div className="service-container__about-details__content-group">
                <div className="service-container__about-details__content-group__head">
                  <span>
                    <RiCheckboxCircleLine size={24} />
                  </span>

                  <span>از هر مکانی سفارش دهید</span>
                </div>
                <p className="service-container__about-details__content-group__body">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
            </div>
          </div>
          <img src={Location} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section;
