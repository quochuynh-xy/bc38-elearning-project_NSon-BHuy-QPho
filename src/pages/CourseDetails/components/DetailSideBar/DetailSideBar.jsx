import "./style.scss";
import { useSelector } from "react-redux";
import { BsClockHistory, BsCheck } from "react-icons/bs";
import imgBackup from "../../../../assets/img/blank_wide.jpg";
import { useEffect, useState } from "react";
const DetailSideBar = (props) => {
  const { handleRegister, handleCancelRegistration } = props || {};
  const [isRegisted, setIsRegisted] = useState(false);
  const chiTietKhoaHocGhiDanh = useSelector(
    (store) => store.authReducer.userInfo.chiTietKhoaHocGhiDanh
  );
  const thongTinKhoaHoc = useSelector(
    (state) => state.detailReducer.thongTinKhoaHoc
  );
  const [imgcover, setImgcover] = useState("");
  const autoHideImg = () => {
    if (window.scrollY > 300) {
      setImgcover("hidden");
      document.querySelector(".sidebar--control .sidebar .sidebar__content").style.marginTop = 0;
    } else {
      document.querySelector(".sidebar--control .sidebar .sidebar__content").style.marginTop = "3.2rem";
      return setImgcover("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", autoHideImg);
    return () => window.removeEventListener("scroll", autoHideImg);
  }, []);
  useEffect(() => {
    const maKhoaHoc = thongTinKhoaHoc.maKhoaHoc;
    if (chiTietKhoaHocGhiDanh.find((item) => item.maKhoaHoc === maKhoaHoc)) {
      setIsRegisted(true);
    } else {
      setIsRegisted(false);
    }
  }, [chiTietKhoaHocGhiDanh, thongTinKhoaHoc]);
  const ControlRegisterBtn = () => {
    if (isRegisted) {
      return (
        <button
          className="h-12 w-full tracking-wider hover:bg-purple-800"
          onClick={() => handleCancelRegistration()}
        >
          Hủy đăng ký
        </button>
      );
    } else {
      return (
        <button
          className="h-12 w-full tracking-wider hover:bg-purple-800"
          onClick={() => handleRegister()}
        >
          Đăng Ký Khóa Học
        </button>
      );
    }
  };
  return (
    <div className="sidebar--control hidden lg:block absolute w-full">
      <div className="container mx-auto relative">
        <div className="sidebar ml-auto">
          <div className="sidebar__content">
            <div className="card shadow-md">
              <div className="card__header">
                <img
                  className={`w-full max-h-48 ` + imgcover}
                  src={thongTinKhoaHoc.hinhAnh}
                  onError={(e) => (e.target.src = imgBackup)}
                  alt="preview"
                />
              </div>
              <div className="card__body py-5 px-4">
                <h1 className="body__course-name text-stone-700 text-lg font-bold pb-1">
                  {thongTinKhoaHoc.tenKhoaHoc}
                </h1>
                <div className="body__price flex items-center">
                  <p className="text-2xl font-bold text-stone-800">FREE</p>
                  <p className="text-base text-stone-600 ml-4 line-through">
                    1.000.000đ
                  </p>
                </div>
                <div className="body__promo">
                  <p className="text-sm text-stone-600 py-1">100% off</p>
                  <p className="text-fuchsia-800 flex text-xs items-center">
                    <BsClockHistory />
                    <b className="ml-2">Khuyến mãi còn 30 ngày.</b>
                  </p>
                </div>
                <div className="body__actions py-4">
                  <ControlRegisterBtn />
                </div>
                <div className="body__detail">
                  <b>Khóa học bao gồm:</b>
                  <ul>
                    <li className="flex items-center py-1 tracking-wide">
                      <BsCheck />
                      <span className="ml-4">Hơn 65 giờ học.</span>
                    </li>
                    <li className="flex items-center py-1 tracking-wide">
                      <BsCheck />
                      <span className="ml-4">86+ bài giảng.</span>
                    </li>
                    <li className="flex items-center py-1 tracking-wide">
                      <BsCheck />
                      <span className="ml-4">Có tài liệu download đi kèm.</span>
                    </li>
                    <li className="flex items-center py-1 tracking-wide">
                      <BsCheck />
                      <span className="ml-4">Mua 1 lần dùng 1 đời.</span>
                    </li>
                  </ul>
                </div>
                <div className="body__more-actions py-2 mt-2 flex text-sm font-semibold underline justify-between">
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
              <div className="card__footer px-4 py-5 border-t border-solid border-stone-300 text-center">
                <h3 className="text-xl font-semibold text-stone-700">
                  Có trên 5 thành viên?
                </h3>
                <p className="text-sm">
                  Đăng ký theo nhóm để được hưởng ưu đãi.
                </p>
                <button className="border border-stone-800 h-12 w-full font-bold mt-4 rounded-sm hover:underline hover:bg-stone-200 duration-300">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailSideBar;
