import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
const SignIn = () => {
  const [showPass, setShowPass] = useState(true);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const IconShowPass = () => {
    if(showPass) {
      return <BiShow onClick={handleShowPass}/>
    } else {
      return <BiHide onClick={handleShowPass}/>
    }
  };
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
          <form className="options__input">
            <div className="input__account">
              <input
                required
                id="tenTaiKhoan"
                className="form-input"
                type="text"
              />
              <label className="form-label" htmlFor="tenTaiKhoan">
                Tài khoản
              </label>
            </div>
            <div className="input__account">
              <input
                required
                id="matKhauTK"
                className="form-input"
                type={showPass ? "password" : "text"}
              />
              <label className="form-label" htmlFor="matKhauTK">
                Mật khẩu
              </label>
              <span className="cursor-pointer absolute right-0 top-0 px-2 text-lg text-black h-full flex items-center">
                <IconShowPass />
              </span>
            </div>
            <button className="btn-login w-full text-center">Đăng Nhập</button>
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
