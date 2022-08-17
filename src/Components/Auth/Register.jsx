import "./Auth.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Logo from "../Assets/res-logo.png";
import Container from "../../Container/Container";

const initialValues = {
  email: "",
  password: "",
  phone: "",
  name: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("مقداری وارد نشده است")
    .min(8, "نام کاربری کوتاه است"),
  email: Yup.string()
    .required("مقداری وارد نشده است")
    .email("آدرس ایمیل صحیح نیست"),
  phone: Yup.string()
    .required("مقداری وارد نشده است")
    .min(8, "شماره موبایل اشتباه هست"),
  password: Yup.string()
    .required("مقداری وارد نشده است")
    .min(8, "رمز عبور کوتاه است"),
});

const Login = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
    validationSchema,
    enableReinitialize: true,
  });
  return (
    <Container>
      <Helmet>
        <title>ورود / ثبت نام</title>
      </Helmet>
      <section className="form" dir="rtl">
        <form className="form-wrap" onSubmit={formik.handleSubmit}>
          <div className="form-wrap__title">
            <img src={Logo} alt="" />
            <h3>ایجاد حساب</h3>
          </div>
          <div className="form-wrap__box">
            <input
              type="text"
              className="form-wrap__box-input"
              {...formik.getFieldProps("name")}
              placeholder=" "
              name="name"
            />
            <label htmlFor="name" className="form-wrap__box-label">
              نام کاربری
            </label>
            {formik.errors.name && formik.touched.name && (
              <div className="form-wrap__box-error">{formik.errors.name}</div>
            )}
          </div>
          <div className="form-wrap__box">
            <input
              type="text"
              className="form-wrap__box-input"
              {...formik.getFieldProps("email")}
              placeholder=" "
              name="email"
            />
            <label htmlFor="email" className="form-wrap__box-label">
              ایمیل
            </label>
            {formik.errors.email && formik.touched.email && (
              <div className="form-wrap__box-error">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-wrap__box">
            <input
              type="text"
              className="form-wrap__box-input"
              {...formik.getFieldProps("phone")}
              placeholder=" "
              name="phone"
            />
            <label htmlFor="phone" className="form-wrap__box-label">
              شماره موبایل
            </label>
            {formik.errors.phone && formik.touched.phone && (
              <div className="form-wrap__box-error">{formik.errors.phone}</div>
            )}
          </div>
          <div className="form-wrap__box">
            <input
              type="text"
              className="form-wrap__box-input"
              {...formik.getFieldProps("password")}
              placeholder=" "
              name="password"
            />
            <label htmlFor="password" className="form-wrap__box-label">
              رمز عبور
            </label>
            {formik.errors.password && formik.touched.password && (
              <div className="form-wrap__box-error">
                {formik.errors.password}
              </div>
            )}
          </div>
          <input
            type="submit"
            className="form-wrap__button"
            value="ساخت حساب"
            disabled={!formik.isValid}
          />
          <div className="form-wrap__footer">
            <Link to="/login">قبلا ثبت نام کردم</Link>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default Login;
