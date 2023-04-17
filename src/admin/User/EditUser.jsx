import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { https } from "../../services/config";

const EditUser = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ typeUser: [] });
  const { taiKhoan } = useParams();
  const { userListData } = useSelector((state) => state.admin);
console.log(userListData)
  const userDetail = userListData?.filter((user) => user.taiKhoan === taiKhoan)[0];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: userDetail?.taiKhoan,
      matKhau: userDetail?.matKhau,
      hoTen: userDetail?.hoTen,
      soDT: userDetail?.soDt,
      maLoaiNguoiDung: userDetail?.maLoaiNguoiDung,
      maNhom: userDetail?.maNhom,
      email: userDetail?.email,
    },

    onSubmit: (values) => {
      console.log(values)
      // dispatch(updateUserAction(values));
    },
  });

  useEffect(() => {
    async function fetchTypeUser() {
      const res = await https.get('api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung');
      setState({ ...state, typeUser: res.data });
    }
    fetchTypeUser();

    // dispatch(searchUserAction(id));
  }, []);

  const handleChangeTypeUser = (value) => {
    formik.setFieldValue("maLoaiNguoiDung", value);
  };

  const handleChangeGroupId = (value) => {
    formik.setFieldValue("maNhom", value);
  };

  return (
    userDetail && (
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
        <h3 className="text-2xl mb-3 pt-8">
          Chỉnh sửa thông tin: {userDetail.hoTen}
        </h3>
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
            onChange={handleChangeTypeUser}
            defaultValue={userDetail.tenLoaiNguoiDung}
          >
            {state.typeUser.map((type) => {
              return (
                <Select.Option
                  key={type.maLoaiNguoiDung}
                  value={type.maLoaiNguoiDung}
                >
                  {type.tenLoaiNguoiDung}
                </Select.Option>
              );
            })}
          </Select>
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
        <Form.Item label="Cập nhật">
          <Button htmlType="submit" >
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    )
  );
};

export default EditUser;
