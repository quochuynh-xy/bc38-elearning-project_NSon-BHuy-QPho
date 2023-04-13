import {  Form, Input, Radio, Select } from "antd";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { number, object, string } from "yup";
const AddUser = () => {
  const dispatch = useDispatch()
  const userSchema = object({
    taiKhoan: string().required("Vui lòng điền tài khoản"),
    matKhau: string().required("Vui lòng điền mật khẩu").min(8,"Mật khẩu ít nhất là 8 ký tự").max(20,'Mật khẩu tối đa là 20 ký tự'),
    hoTen: string().required("Vui lòng điền họ tên"),
    soDT: number().required("Vui lòng điền số điện thoại"),
    maNhom: string().matches(/^GP(0[1-9]|10)$/, 'Mã nhóm không hợp lệ. Chỉ cho phép nhập GP01 đến GP10')
    .required('Vui lòng nhập mã nhóm'),
    email: string().required("Vui lòng nhập email").email("Email không đúng định dạng"),
    maLoaiNguoiDung: string().oneOf(['GV', 'HV'], 'Vui lòng chọn một giá trị hợp lệ')
    .required('Vui lòng chọn một giá trị'),
  });
  const { handleSubmit, handleChange, setFieldValue, touched,errors } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema:userSchema,
    validateOnBlur: false,
  });
  useEffect(() => {
    console.log(touched);
  }, [touched]);
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="p-2">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600,
        }}
        onSubmitCapture={handleSubmit}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Họ tên">
          <Input name="hoTen" onChange={handleChange} />
          {errors.hoTen && touched.hoTen && (
            <span className="text-red-500">{errors.hoTen}</span>
          )}
        </Form.Item>
        <Form.Item label="Tài khoản">
          <Input name="taiKhoan" onChange={handleChange} />
          {errors.taiKhoan && touched.taiKhoan && (
            <span className="text-red-500">{errors.taiKhoan}</span>
          )}
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input name="matKhau" onChange={handleChange} />
          {errors.matKhau && touched.matKhau && (
            <span className="text-red-500">{errors.matKhau}</span>
          )}
        </Form.Item>
        <Form.Item label="Số ĐT">
          <Input name="soDT" onChange={handleChange} />
          {errors.soDT && touched.soDT && (
            <span className="text-red-500">{errors.soDT}</span>
          )}
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" onChange={handleChange} />
          {errors.email && touched.email && (
            <span className="text-red-500">{errors.email}</span>
          )}
        </Form.Item>
        <Form.Item label="Mã nhóm">
          <Input name="maNhom" onChange={handleChange} />
          {errors.maNhom && touched.maNhom && (
            <span className="text-red-500">{errors.maNhom}</span>
          )}
        </Form.Item>
        <Form.Item label="Loại user">
          <Select
            name="maLoaiNguoiDung"
            onChange={(value) => setFieldValue("maLoaiNguoiDung", value)}
          >
            <Select.Option value="GV">GV</Select.Option>
            <Select.Option value="HV">HV</Select.Option>
          </Select>
          {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung && (
            <span className="text-red-500">{errors.maLoaiNguoiDung}</span>
          )}
        </Form.Item>
        <Form.Item label="Tác vụ :">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Thêm người dùng
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Hủy
            </span>
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddUser;
