import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import "./style.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { actionGuiThongTinDangNhap } from "../../authReducer";
import { useDispatch, useSelector } from "react-redux";
const SignIn = (props) => {
  const {switchSignUp} = props ||  {} // Hàm dùng chuyển trang
  const [showPass, setShowPass] = useState(true);
  const loadingStatus = useSelector((store) => store.authReducer.loadingStatus); // pending => disable button
  const dispatch = useDispatch();
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const IconShowPass = () => {
    if (showPass) {
      return <BiShow onClick={handleShowPass} />;
    } else {
      return <BiHide onClick={handleShowPass} />;
    }
  };
  const handleSendLoginData = (loginData) => {
    dispatch(actionGuiThongTinDangNhap(loginData));
  };
  const formik = useFormik({
    initialValues: {
      taiKhoan: "cabongmu",
      matKhau: "Aa@12345b",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string("*")
        .required("*")
        .matches(/^[a-zA-Z0-9._]+$/, "*"),
      matKhau: Yup.string("*").required("*").max(16, "*"),
    }),
    onSubmit: (values) => handleSendLoginData(values),
  });
  return (
    <section className="login-area">
      <div className="container mx-auto">
        <div className="form-options font-semibold text-stone-700 ">
          <div className="options__social">
            <div className="social__option">
              <button className="option__btn">
                <span className="btn__logo">
                  <FcGoogle />
                </span>
                Tiếp tục với Google
              </button>
            </div>
            <div className="social__option">
              <button className="option__btn">
                <span className="btn__logo text-blue-600">
                  <BsFacebook />
                </span>
                Tiếp tục với Facebook
              </button>
            </div>
            <div className="social__option">
              <button className="option__btn">
                <span className="btn__logo text-gray-400">
                  <BsApple />
                </span>
                Tiếp tục với Apple ID
              </button>
            </div>
          </div>
          <form
            className="options__input"
            onSubmit={(e) => {
              e.preventDefault();
              if (loadingStatus === "PENDING") {
                return;
              } else {
                formik.handleSubmit();
              }
            }}
          >
            <div className="input__account">
              <input
                required
                name="taiKhoan"
                id="taiKhoan"
                className="form-input"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.taiKhoan}
              />
              <label className="form-label" htmlFor="taiKhoan">
                Tài khoản
              </label>
              <span className="input__err-mes">
                {formik.touched.taiKhoan && formik.errors.taiKhoan}
              </span>
            </div>
            <div className="input__account">
              <input
                required
                name="matKhau"
                id="matKhau"
                className="form-input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.matKhau}
                type={showPass ? "password" : "text"}
              />
              <label className="form-label" htmlFor="matKhau">
                Mật khẩu
              </label>
              <span className="input__err-mes">
                {formik.touched.matKhau && formik.errors.matKhau}
              </span>
              <span className="cursor-pointer absolute right-0 top-0 px-2 text-lg text-black h-full flex items-center">
                <IconShowPass />
              </span>
            </div>
            <button className="btn-login w-full text-center" type="submit">
              Đăng Nhập
            </button>
          </form>
          <div className="options__forgot py-4 text-center border-b border-stone-400 select-none">
            <p className="cursor-default">
              Bạn
              <a
                className="pl-1 text-purple-700 hover:text-purple-800 underline underline-offset-4"
                href="#url"
              >
                quên mật khẩu?
              </a>
            </p>
          </div>
          <div className="options__reg-new py-4 text-center se">
            <p className="cursor-default text-xs">
              Chưa có tài khoản?
              <a
                className="pl-1 text-sm text-purple-700 hover:text-purple-800 underline underline-offset-4"
                href="#url"
                onClick={(e)=> {
                  e.preventDefault();
                  switchSignUp()
                }}
              >
                Đăng ký
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
