import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "antd/es/modal/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./style.scss";
import _ from "lodash";
import { requestChangeInfo } from "../../services";
import Swal from "sweetalert2";
const UserInfomation = () => {
  const userBasicInfo = useSelector(
    (store) => store.authReducer.userInfo.userBasicInfo
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errMess, setErrMess] = useState("");
  const handleSubmit = async () => {
    console.log(formik.errors);
    if (_.isEmpty(formik.errors)) {
      try {
       await requestChangeInfo(formik.values);
        setIsModalOpen(false);
        await Swal.fire({
          position: "center",
          title: "Cập nhật thông tin thành công",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        window.location.reload();
      } catch (error) {
        Swal.fire({
          position: "center",
          title: error.response.data,
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } else {
      setErrMess(Object.values(formik.errors)[0]);
    }
  };
  const handleCancel = () => {
    formik.setValues({
      taiKhoan: userBasicInfo.taiKhoan,
      matKhau: "",
      hoTen: userBasicInfo.hoTen,
      email: userBasicInfo.email,
      soDT: userBasicInfo.soDT,
      maLoaiNguoiDung: userBasicInfo.maLoaiNguoiDung,
      maNhom: userBasicInfo.maNhom,
    });
    setErrMess("");
    setIsModalOpen(false);
  };
  const handleStartEditForm = () => {
    formik.setValues({
      taiKhoan: userBasicInfo.taiKhoan,
      matKhau: userBasicInfo.matKhau,
      hoTen: userBasicInfo.hoTen,
      email: userBasicInfo.email,
      soDT: userBasicInfo.soDT,
      maLoaiNguoiDung: userBasicInfo.maLoaiNguoiDung,
      maNhom: userBasicInfo.maNhom,
    });
    setIsModalOpen(true);
  };
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "",
    },
    validationSchema: Yup.object().shape({
      hoTen: Yup.string()
        .matches(
          /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/,
          "Họ tên không hợp lệ."
        )
        .min(4, "Họ tên không hợp lệ.")
        .max(30, "Họ tên vượt quá 30 ký tự.")
        .required("Hoàn tất biểu mẫu."),
      matKhau: Yup.string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Mậ khẩu gồm chữ thường, chữ hoa, số & ký tự đặc biệt."
        )
        .min(8, "Mật khẩu có tối thiểu 8 ký tự.")
        .max(20, "Mật khẩu có tối đa 20 ký tự.")
        .required("Hoàn tất biểu mẫu."),
      email: Yup.string()
        .email("Email không hợp lệ.")
        .required("Hoàn tất biểu mẫu."),
      soDT: Yup.string()
        .min(10, "SĐT gồm 10 chữ số.")
        .max(10, "SĐT không hợp lệ.")
        .matches(/^[0-9]{10}$/, "SĐT không hợp lệ.")
        .required("Hoàn tất biểu mẫu."),
    }),
  });
  return (
    <div className="border border-solid border-stone-600 my-20 lg:my-0 lg:py-32">
      <h3 className="text-stone-900 text-2xl font-bold py-5 text-center">
        Trang thông tin tài khoản
      </h3>
      <div className="px-4 grid grid-cols-2 gap-0 md:gap-4 lg:gap-20">
        <div className="col-span-2 md:col-span-1">
          <div className="item flex items-center mb-3">
            <span className="label font-bold mr-2 basis-3/12">Họ tên:</span>
            <p className="border border-solid border-stone-300 flex-1 px-2 py-1">
              {userBasicInfo.hoTen}
            </p>
          </div>
          <div className="item flex items-center mb-3">
            <span className="label font-bold mr-2 basis-3/12">Email:</span>
            <p className="border border-solid border-stone-300 flex-1 px-2 py-1">
              {userBasicInfo.email}
            </p>
          </div>
          <div className="item flex items-center mb-3">
            <span className="label font-bold mr-2 basis-3/12">
              Số điện thoại:
            </span>
            <p className="border border-solid border-stone-300 flex-1 px-2 py-1">
              {userBasicInfo.soDT}
            </p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="item flex items-center mb-3">
            <span className="label font-bold mr-2 basis-3/12">
              Tên tài khoản:
            </span>
            <p className="border border-solid border-stone-300 flex-1 px-2 py-1">
              {userBasicInfo.taiKhoan}
            </p>
          </div>
          <div className="item flex items-center mb-3">
            <span className="label font-bold mr-2 basis-3/12">Nhóm:</span>
            <p className="border border-solid border-stone-300 flex-1 px-2 py-1">
              {userBasicInfo.maNhom}
            </p>
          </div>
          <div className="item flex items-center mb-3">
            <span className="label font-bold mr-2 basis-3/12">
              Loại tài khoản:
            </span>
            <p className="border border-solid border-stone-300 flex-1 px-2 py-1">
              {userBasicInfo.maLoaiNguoiDung === "HV" ? "Học viên" : "Giáo vụ"}
            </p>
          </div>
          <div className="mb-4 text-end">
            <button
              onClick={handleStartEditForm}
              className="text-black font-bold ml-auto w-32 h-10 border border-solid border-stone-800 rounded-sm hover:bg-black hover:text-white duration-300"
            >
              Đổi thông tin
            </button>
          </div>
        </div>
      </div>
      <Modal
        title={
          <h3 className="label font-bold mr-2 basis-3/12 text-2xl">
            Chỉnh sửa thông tin cá nhân
          </h3>
        }
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        okText="Xác nhận"
        cancelText="Hủy bỏ"
        okButtonProps={{
          disabled: false,
        }}
        cancelButtonProps={{
          disabled: false,
        }}
      >
        <div className="item flex flex-col lg:flex-row lg:items-center mb-3 mt-4">
          <label className="label font-bold mr-1 basis-4/12">Họ tên:</label>
          <input
            className="border border-solid border-stone-300 flex-1 px-2 py-1 outline-none"
            required
            name="hoTen"
            onChange={formik.handleChange}
            value={formik.values.hoTen}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="item flex flex-col lg:flex-row lg:items-center mb-3">
          <label className="label font-bold mr-1 basis-4/12">Email:</label>
          <input
            className="border border-solid border-stone-300 flex-1 px-2 py-1 outline-none"
            required
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="item flex flex-col lg:flex-row lg:items-center mb-3">
          <label className="label font-bold mr-1 basis-4/12">
            Số điện thoại:
          </label>
          <input
            className="border border-solid border-stone-300 flex-1 px-2 py-1 outline-none"
            required
            name="soDT"
            onChange={formik.handleChange}
            value={formik.values.soDT}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="item flex flex-col lg:flex-row lg:items-center mb-3">
          <label className="label font-bold mr-1 basis-4/12">
            Mật khẩu:
          </label>
          <input
            className="border border-solid border-stone-300 flex-1 px-2 py-1 outline-none"
            required
            type="password"
            name="matKhau"
            onChange={formik.handleChange}
            value={formik.values.matKhau}
          />
        </div>
        <div className="item flex flex-col lg:flex-row lg:items-center mb-3">
          <label className="label font-bold mr-1 text-red-600">
            {errMess}
          </label>
        </div>
      </Modal>
    </div>
  );
};
export default UserInfomation;
