import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";
import { useEffect, useState } from "react";
import { https } from "../services/config";
import { useFormik } from "formik";
import moment from "moment";
import { object, string,number } from "yup";
import { useDispatch } from "react-redux";
import { addCourse } from "./redux/adminReducer";
const AddCourse = () => {
  const [state, setState] = useState([
    {
      maDanhMucKhoaHoc: [],
      taiKhoanNguoiTao: [],
    },
  ]);
  const dispatch = useDispatch()
  const courseScheme = object({
    maKhoaHoc: string().required("Vui lòng nhập mã khóa học"),
    tenKhoaHoc: string().required("Vui lòng nhập tên khóa học"),
    moTa: string().required("Vui lòng nhập mô tả"),
    luotXem: number().required("Vui lòng nhập lượt xem"),
    danhGia: number().required("Vui lòng nhập đánh giá"),
    maNhom: string().matches(/^GP(0[1-9]|10)$/, 'Mã nhóm không hợp lệ. Chỉ cho phép nhập GP01 đến GP10')
    .required('Vui lòng nhập mã nhóm'),
  })
  const [imgSrc, setImgSrc] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await https.get("api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
        const res1 = await https.get(
          "api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"
        );

        setState({
          ...state,
          maDanhMucKhoaHoc: res.data,
          taiKhoanNguoiTao: res1.data,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const { handleSubmit, handleChange, setFieldValue, touched, errors } = useFormik({
    initialValues: {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log(values)
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      dispatch(addCourse(formData))
    },
    validationSchema: courseScheme,
    validateOnBlur: false
  });
  useEffect(()=> {
    console.log(touched)
  },[touched])
  
  const handleChangeFile = (e) => {
    // lấy ra file từ event
    let file = e.target.files[0];
    // tạo đối tượng để đọc file
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result)
        setImgSrc(e.target.result); // set hình base64
      };

      // truyền dữ liệu lên form
      setFieldValue("hinhAnh", file);
    }
  };
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="p-5 translate-y-[5%] relative ">
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
        <Form.Item label="Form Size" name="size" className="absolute top-[50%] translate-y-[-50%] right-0 w-[100%] z-10 translate-x-[50%] ">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Mã khóa học">
          <Input name="maKhoaHoc" onChange={handleChange} />
          {errors.maKhoaHoc && touched.maKhoaHoc && (
            <span className="text-red-500">{errors.maKhoaHoc}</span>
          )}
        </Form.Item>
        <Form.Item label="Tên khóa học">
          <Input name="tenKhoaHoc" onChange={handleChange} />
          {errors.tenKhoaHoc && touched.tenKhoaHoc && (
            <span className="text-red-500">{errors.tenKhoaHoc}</span>
          )}
        </Form.Item>
        <Form.Item label="Mã nhóm">
          <Input name="maNhom" onChange={handleChange} />
          {errors.maNhom && touched.maNhom && (
            <span className="text-red-500">{errors.maNhom}</span>
          )}
        </Form.Item>
        <Form.Item label="Danh mục ">
          <Select
            options={state.maDanhMucKhoaHoc?.map((item) => ({
              label: `${item.tenDanhMuc} -${item.maDanhMuc}`,
              value: item.maDanhMuc,
            }))}
            placeholder="Vui lòng chọn danh mục khóa học"
            name='maDanhMucKhoaHoc'
            onChange={(value)=>{
              setFieldValue('maDanhMucKhoaHoc', value)
            }}
          />
          {errors.maDanhMucKhoaHoc && touched.maDanhMucKhoaHoc && (
            <span className="text-red-500">{errors.maDanhMucKhoaHoc}</span>
          )}
        </Form.Item>
        <Form.Item label="Người tạo">
          <Select
            options={state.taiKhoanNguoiTao
              ?.filter((item) => item.maLoaiNguoiDung === "GV")
              ?.map((item) => ({
                label: `${item.maLoaiNguoiDung} - ${item.tenLoaiNguoiDung}`,
                value: item.maLoaiNguoiDung,
              }))}
              name='taiKhoanNguoiTao'
              onChange={(value)=>{
                setFieldValue('taiKhoanNguoiTao', value)
              }}
          />
           {errors.taiKhoanNguoiTao && touched.taiKhoanNguoiTao && (
            <span className="text-red-500">{errors.taiKhoanNguoiTao}</span>
          )}
        </Form.Item>
        <Form.Item label="Ngày tạo">
          <DatePicker
            format="DD/MM/YYYY"
            onChange={(value) => {
              let ngayTao = moment(value).format("DD/MM/YYYY");
              setFieldValue("ngayTao", ngayTao);
            }}
          />
        </Form.Item>
        <Form.Item label="Lượt xem">
          <InputNumber name="luotXem" min={0}  onChange={(value)=>{
                setFieldValue('luotXem', value)
              }} />
          {errors.luotXem && touched.luotXem && (
            <span className="text-red-500">{errors.luotXem}</span>
          )}
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber
            name="danhGia"
            min={1}
            max={5}
            onChange={(value)=>{
              setFieldValue('danhGia', value)
            }}
          />
           {errors.danhGia && touched.danhGia && (
            <span className="text-red-500">{errors.danhGia}</span>
          )}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={handleChange} />
          {errors.moTa && touched.moTa && (
            <span className="text-red-500">{errors.moTa}</span>
          )}
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/gif"
          />
          <br />
          <img src={imgSrc} alt="imgFilm" width="150px" height="100px" />
        </Form.Item>
        <Form.Item label="Tác vụ :">
          <button
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Thêm
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddCourse;
