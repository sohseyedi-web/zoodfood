import "./Auth.scss";
import * as Yup from "yup";
import Helmet from "react-helmet";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Logo from "../Assets/res-logo.png";
import Container from "../../Container/Container";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("مقداری وارد نشده است")
    .email("آدرس ایمیل صحیح نیست"),
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
            <h3>ورود کاربران</h3>
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
            value="ورود به حساب"
            disabled={!formik.isValid}
          />
          <div className="form-wrap__footer">
            <span>فراموشی رمز عبور؟</span>
            <Link to="/register">حساب کاربری نداری؟</Link>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default Login;
