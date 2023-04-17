import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment/moment";
import { accountAdmin, addCourseApi, fetchCourseCategory } from "../redux/adminReducer";

const { TextArea } = Input;

const AddCourse = () => {
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  const { adminInfo, categoryCourse } = useSelector(
    (state) => state.admin
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: null,
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: adminInfo,
    },
    onSubmit: (values) => {
    //   dispatch(addCourseAction(values));

      let formData = new FormData();
      formData.append("file", values.hinhAnh);
      formData.append("tenKhoaHoc", values.tenKhoaHoc);
      dispatch(addCourseApi(formData)); 
    },
  });

  useEffect(() => {
    dispatch(fetchCourseCategory());
    dispatch(accountAdmin());
  }, []);

  const handleChangeGroupId = (value) => {
    formik.setFieldValue("maNhom", value);
  };

  const handleChangeDatePicker = (value) => {
    let ngayTao = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", ngayTao);
  };

  const handleChangeFile = (e) => {
    let file = e.target.files[0];

    if (
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };

      formik.setFieldValue("hinhAnh", file.name);
    }
  };

  const handleChangeCategoryCourse = (value) => {
    formik.setFieldValue("maDanhMucKhoaHoc", value);
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  return (
    adminInfo && (
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 7,
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
        <h3 className="text-3xl py-8">Thêm khóa học</h3>
        <Form.Item label="Mã khóa học">
          <Input
            name="maKhoaHoc"
            value={formik.values.maKhoaHoc}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Bí danh">
          <Input
            name="biDanh"
            value={formik.values.biDanh}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Tên khóa học">
          <Input
            name="tenKhoaHoc"
            value={formik.values.tenKhoaHoc}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <TextArea
            rows={4}
            name="moTa"
            value={formik.values.moTa}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Lượt xem">
          <InputNumber
            onChange={handleChangeInputNumber("luotXem")}
            value={formik.values.luotXem}
            defaultValue={0}
          />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
            value={formik.values.danhGia}
            defaultValue={0}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/gif, image/jpg"
          />
          <img style={{ width: 200, marginTop: 15 }} src={imgSrc} alt="..." />
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
        <Form.Item label="Ngày tạo">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label="Danh mục khóa học">
          <Select
            options={categoryCourse?.map((category) => {
              return {
                label: category.tenDanhMuc,
                value: category.maDanhMuc,
              };
            })}
            onChange={handleChangeCategoryCourse}
            placeholder="Chọn danh mục khóa học"
          />
        </Form.Item>
        <Form.Item label="Tài khoản người tạo">
          <Input
            name="taiKhoanNguoiTao"
            value={formik.values.taiKhoanNguoiTao}
            disabled
          />
        </Form.Item>
        <Form.Item label="Thêm khóa học">
          <Button htmlType="submit" >
            Thêm
          </Button>
        </Form.Item>
      </Form>
    )
  );
};

export default AddCourse;
