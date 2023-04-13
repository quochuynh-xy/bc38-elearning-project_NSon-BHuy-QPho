import "./style.scss";
import { Breadcrumbs } from "@mui/material";
import { BsChevronRight, BsFillExclamationCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import imgBackup from "../../../../assets/img/blank_wide.jpg";
import { useState, useEffect } from "react";
const CustomBreadcrums = styled(Breadcrumbs)({
  a: {
    color: "#cec0fc",
    fontWeight: 700,
    fontSize: "14px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  ".MuiBreadcrumbs-separator": {
    margin: "0 4px",
    color: "#fff",
    fontSize: "12px",
  },
});
const CustomRating = styled(Rating)({
  fontSize: "1.1rem",
  marginLeft: 0,
});
//
const Introdution = (props) => {
  const { handleRegister, handleCancelRegistration } = props || {};
  const thongTinKhoaHoc = useSelector(
    (state) => state.detailReducer.thongTinKhoaHoc
  );
  const chiTietKhoaHocGhiDanh = useSelector(
    (store) => store.authReducer.userInfo.chiTietKhoaHocGhiDanh
  );
  const [isRegisted, setIsRegisted] = useState(false);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to="/">
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to={`/danhMuc/${thongTinKhoaHoc?.danhMucKhoaHoc?.maDanhMucKhoahoc}`}
    >
      {thongTinKhoaHoc.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
    </Link>,
  ];
  useEffect(() => {
    const maKhoaHoc = thongTinKhoaHoc.maKhoaHoc;
    if (chiTietKhoaHocGhiDanh.find((item) => item.maKhoaHoc === maKhoaHoc)) {
      setIsRegisted(true);
    } else {
      setIsRegisted(false);
    }
  }, [chiTietKhoaHocGhiDanh, thongTinKhoaHoc]);
  return (
    <section className="introduction py-4">
      <div className="container mx-auto">
        <CustomBreadcrums separator={<BsChevronRight />}>
          {breadcrumbs}
        </CustomBreadcrums>
        <div className="lg:hidden">
          <div className="img__cover w-1/2 my-6 mx-auto">
            <img
              src={thongTinKhoaHoc.hinhAnh}
              onError={(e) => (e.target.src = imgBackup)}
              alt="Thông tin khóa học"
            />
          </div>
        </div>
        <div className="details text-white w-full lg:w-3/5">
          <h1 className="detail__name">{thongTinKhoaHoc.tenKhoaHoc}</h1>
          <h2 className="detail__des">{thongTinKhoaHoc.moTa}</h2>
          <div className="detail__overview">
            <div className="overview__rate flex items-center pb-2">
              <p className="rate__bestsell font-semibold px-3 tracking-wider">
                Nổi bật
              </p>
              <span className="font-semibold ml-2 mr-1 text-yellow-500">
                5.0
              </span>
              <CustomRating
                className="rate__rating ml-2 text-xs"
                name="read-only"
                value={5}
                readOnly
              />
              <p className="rate__total-rated ml-2">(212.000 rating)</p>
              <p className="rate__students ml-2">
                {thongTinKhoaHoc.luotXem} người tham gia
              </p>
            </div>
            <p className="author mb-1">
              Tạo bởi:{" "}
              <span className="author--name ml-2 underline">
                {thongTinKhoaHoc.nguoiTao.hoTen}
              </span>
            </p>
            <div className="overview__info flex items-center">
              <div className="info__update flex items-center text-lg leading-5">
                <BsFillExclamationCircleFill />
                <p className="ml-2 leading-5">
                  Cập nhật: {thongTinKhoaHoc.ngayTao}
                </p>
              </div>
            </div>
            <div className="overview__actions lg:hidden pt-6">
              {!isRegisted ? (
                <button
                  onClick={handleRegister}
                  className="btn__sub h-12 w-full tracking-wider hover:bg-purple-800"
                >
                  Đăng ký
                </button>
              ) : (
                <button
                  onClick={handleCancelRegistration}
                  className="btn__sub h-12 w-full tracking-wider hover:bg-purple-800"
                >
                  Hủy đăng ký
                </button>
              )}
              <div className="py-2 mt-8 flex text-sm font-semibold underline justify-around">
                <a className="hover:opacity-80 duration-300" href="#url">
                  Chia sẻ
                </a>
                <a className="hover:opacity-80 duration-300" href="#url">
                  Tặng khóa học
                </a>
                <a className="hover:opacity-80 duration-300" href="#url">
                  Nhập mã
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Introdution;
