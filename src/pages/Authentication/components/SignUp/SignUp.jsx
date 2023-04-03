import "./style.scss";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { actionGuiThongTinDangKy } from "../../authReducer";
import { useDispatch } from "react-redux";
const groupName = [
  "GP01",
  "GP02",
  "GP03",
  "GP04",
  "GP05",
  "GP06",
  "GP07",
  "GP08",
  "GP09",
  "GP10",
];
const SignUp = (props) => {
  const {switchSignIn} = props || {};
  const [showPass, setShowPass] = useState(true);
  const dispatch = useDispatch();
  const handleSendSignUpRequest =(formData) => dispatch(
    actionGuiThongTinDangKy(formData)
  )
  const validGroup = (values) => {
    const err = {};
    if (values.maNhom) {
      if (groupName.findIndex((item) => item === values.maNhom) === -1) {
        err.maNhom = "Nhóm từ GP01 đến GP10";
      }
    }
    return err;
  };
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP10",
      email: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string()
        .matches(/^[a-zA-Z0-9._]+$/, "Tên tài khoản không hợp lệ.")
        .required("Bắt buộc.")
        .min(6, "Ít nhất 6 ký tự.")
        .max(16, "Tối đa 16 ký tự."),
      matKhau: Yup.string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Chữ thường, chữ hoa, số & ký tự đặc biệt."
        )
        .min(8, "Tối thiểu 8 ký tự.")
        .max(20, "Tối đa 20 ký tự.")
        .required("Bắt buộc."),
      hoTen: Yup.string()
        .matches(
          /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/,
          "Họ tên không hợp lệ"
        )
        .min(4, "Ít nhất 4 ký tự.")
        .max(30, "Không vượt quá 30 ký tự.")
        .required("Bắt buộc."),
      soDT: Yup.string()
        .min(10, "Gồm 10 chữ số")
        .max(10, "Không hợp lệ")
        .matches(/^[0-9]{10}$/, "Không hợp lệ.")
        .required("Bắt buộc"),
      email: Yup.string().email("Email không hợp lệ.").required("Bắt buộc."),
      maNhom: Yup.string().required("Bắt buộc."),
    }),
    validate: validGroup,
    onSubmit: (values) => handleSendSignUpRequest(values),
  });
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
  return (
    <section className="signUp-area">
      <div className="container mx-auto">
        <div className="form-options font-semibold text-stone-700 ">
          <h3 className="uppercase">Đăng ký và bắt đầu học tập.</h3>
          <form
            className="options__input  py-4 text-center border-b border-stone-400"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <div className="input__account">
              <input
                required
                name="taiKhoan"
                id="taiKhoan"
                className="form-input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.taiKhoan}
                type="text"
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
                id="matKhauTK"
                className="form-input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.matKhau}
                type={showPass ? "password" : "text"}
              />
              <label className="form-label" htmlFor="matKhauTK">
                Mật khẩu
              </label>
              <span className="cursor-pointer absolute right-0 top-0 px-2 text-lg text-black h-full flex items-center">
                <IconShowPass />
              </span>
              <span className="input__err-mes">
                {formik.touched.matKhau && formik.errors.matKhau}
              </span>
            </div>
            <div className="input__account">
              <input
                required
                name="hoTen"
                id="regName"
                className="form-input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
              />
              <label className="form-label" htmlFor="regName">
                Họ Tên
              </label>
              <span className="input__err-mes">
                {formik.touched.hoTen && formik.errors.hoTen}
              </span>
            </div>
            <div className="input__account">
              <input
                required
                name="soDT"
                id="regPhone"
                className="form-input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
              />
              <label className="form-label" htmlFor="regPhone">
                Số điện thoại
              </label>
              <span className="input__err-mes">
                {formik.touched.soDT && formik.errors.soDT}
              </span>
            </div>
            {/* <div className="input__account">
              <input
                required
                name="maNhom"
                id="regGroup"
                className="form-input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.maNhom}
                type="text"
              />
              <label className="form-label" htmlFor="regGroup">
                Mã nhóm
              </label>
              <span className="input__err-mes">
                {formik.touched.maNhom && formik.errors.maNhom}
              </span>
            </div> */}
            <div className="input__account">
              <input
                required
                name="email"
                id="regEmail"
                className="form-input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
              />
              <label className="form-label" htmlFor="regEmail">
                Email
              </label>
              <span className="input__err-mes">
                {formik.touched.email && formik.errors.email}
              </span>
            </div>
            <button className="btn-sign-up w-full text-center" type="submit">
              Đăng Ký
            </button>
            <p className="text-xs font-normal pt-5 text-center">
              Bằng việc đăng ký, bạn đã chấp nhận các{" "}
              <a
                href="#url"
                className="text-purple-700 hover:text-purple-800 underline"
              >
                điều khoản
              </a>{" "}
              và{" "}
              <a
                href="#url"
                className="text-purple-700 hover:text-purple-800 underline"
              >
                chính sách bảo mật
              </a>{" "}
              của chúng tôi.
            </p>
          </form>
          <div className="options__sign-in py-4 text-center select-none">
            <p className="cursor-default text-xs">
              Đã có tài khoản?
              <a
                className="pl-1 text-sm text-purple-700 hover:text-purple-800 underline underline-offset-4"
                href="#url"
                onClick={(e)=> {
                  e.preventDefault();
                  switchSignIn()
                }}
              >
                Đăng nhập
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
