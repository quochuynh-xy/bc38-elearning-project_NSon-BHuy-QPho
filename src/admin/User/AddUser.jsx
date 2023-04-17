import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { https } from "../../services/config";
import { addUserApi } from "../redux/adminReducer";

const AddUser = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ typeUser: [] });

  const formik = useFormik({
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
      console.log(values)
      dispatch(addUserApi(values))
    },
  });

  useEffect(() => {
    async function fetchTypeUser() {
      const res = await https.get('api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung');
      setState({ ...state, typeUser: res.data });
    }
    fetchTypeUser();
  }, []);

  const handleChangeTypeUser = (value) => {
    formik.setFieldValue("maLoaiNguoiDung", value);
  };

  const handleChangeGroupId = (value) => {
    formik.setFieldValue("maNhom", value);
  };

  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      layout="horizontal"
      style={{
        maxWidth: 600,
      }}
      className="pb-10"
    >
      <h3 className="text-3xl py-8">Thêm người dùng</h3>
      <Form.Item label="Tài khoản">
        <Input
          name="taiKhoan"
          value={formik.values.taiKhoan}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Mật khẩu">
        <Input
          name="matKhau"
          value={formik.values.matKhau}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Họ tên">
        <Input
          name="hoTen"
          value={formik.values.hoTen}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input
          name="soDT"
          value={formik.values.soDT}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Mã loại người dùng">
        <Select
          options={state.typeUser.map((type) => {
            return {
              label: type.tenLoaiNguoiDung,
              value: type.maLoaiNguoiDung,
            };
          })}
          onChange={handleChangeTypeUser}
          placeholder="Chọn mã loại người dùng"
        />
      </Form.Item>
      <Form.Item label="Mã nhóm">
        <Select
          options={[
            { label: "GP01", value: "GP01" },
            { label: "GP02", value: "GP02" },
            { label: "GP03", value: "GP03" },
            { label: "GP04", value: "GP04" },
            { label: "GP05", value: "GP05" },
            { label: "GP06", value: "GP06" },
            { label: "GP07", value: "GP07" },
            { label: "GP08", value: "GP08" },
            { label: "GP09", value: "GP09" },
            { label: "GP10", value: "GP10" },
            { label: "GP11", value: "GP11" },
            { label: "GP12", value: "GP12" },
            { label: "GP13", value: "GP13" },
            { label: "GP14", value: "GP14" },
            { label: "GP15", value: "GP15" },
          ]}
          onChange={handleChangeGroupId}
          placeholder="Chọn mã nhóm"
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Thêm người dùng">
        <Button htmlType="submit" >
          Thêm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddUser;
