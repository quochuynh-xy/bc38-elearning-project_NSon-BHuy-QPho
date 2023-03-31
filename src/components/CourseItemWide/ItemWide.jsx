import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imgBackup from "../../assets/img/blank_wide.jpg";
import { stringTrimmer } from "../../utilities/util";
import { useSelector } from "react-redux";
import _ from "lodash";
import "./style.scss";
const ItemWide = (props) => {
  const navigate = useNavigate();
  const chiTietKhoaHocGhiDanh = useSelector(
    (store) => store.authReducer.userInfo.chiTietKhoaHocGhiDanh
  );
  const { data, handleSubscribe, handleUnSubscribe } = props || {};
  const [registed, setRegisted] = useState(false);
  useEffect(()=> {
    if(_.isEmpty(chiTietKhoaHocGhiDanh)) {
      setRegisted(false)
      return
    } else {
      let registed = chiTietKhoaHocGhiDanh.find(item => {
       return item.maKhoaHoc === data.maKhoaHoc});
      if(registed) {
        setRegisted(true)
      } else {
        setRegisted(false)
      }
    }
  }, [chiTietKhoaHocGhiDanh, data.maKhoaHoc])
  const conditionChecking = (isRegisted, maKhoaHoc) => {
    if(isRegisted) {
      return handleUnSubscribe(maKhoaHoc)
    } else {
      return handleSubscribe(maKhoaHoc)
    }
  }
  return (
    <div className="preview ml-auto flex flex-wrap border-b-2 border-solid border-stone-200 drop-shadow-md pb-4 mb-4">
      <div className="img basis-3/12 text-center">
        <img
          className="w-full h-24 md:h-36 object-cover rounded-sm border-slate-200 border-4 border-solid"
          src={data?.hinhAnh}
          onError={(e) => (e.target.src = imgBackup)}
          alt="Hình ảnh khóa học"
        />
      </div>
      <div className="content basis-9/12 relative pl-4">
        <div className="content__price absolute right-0 top-0 bottom-0 py-2 mr-4 hidden  lg:flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl text-purple-800 tracking-wider leading-5">
              FREE
            </h3>
            <p className="text-stone-600 font-semibold line-through">
              1.200.000đ
            </p>
          </div>
          <div className="action">
            <button
              className="font-bold text-stone-700 border-stone-800 h-10 w-24 border border-solid hover:bg-stone-200 duration-300"
              onClick={() => conditionChecking(registed, data.maKhoaHoc)}
            >
              {registed ? "Hủy đăng ký":"Đăng ký"}
            </button>
          </div>
        </div>
        <div className="content__info pr-4 lg:pr-40">
          <h1
            className="content__name text-xl font-bold cursor-pointer hover:underline"
            onClick={() => navigate("/chiTiet/" + data.maKhoaHoc)}
          >
            {data?.tenKhoaHoc}
          </h1>
          <h2 className="content__des leading-5 indent-2 text-sm">
            {stringTrimmer(data?.moTa, 330)}
          </h2>
          <div className="author">
            <p className="content__author pt-3 pb-1 text-purple-800 font-semibold text-sm">
              {data?.nguoiTao.taiKhoan}
            </p>
            <p className="text-sm text-stone-600 hidden md:block">
              35 bài học - 6 chương - Cơ bản
            </p>
            <div className="lg:hidden price flex items-center relative">
              <p className="text-xs line-through">1.2000.000đ</p>
              <p className="text-base font-bold mx-4">FREE</p>
              <button
                className="absolute bottom-0 right-0 font-bold text-stone-800 border-stone-800 h-8 w-24 border border-solid hover:bg-stone-200 duration-300"
                onClick={() => conditionChecking(registed, data.maKhoaHoc)}
              >
                {registed ? "Hủy đăng ký":"Đăng ký"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemWide;
/**
 * Sử dụng tại:
 * + Làm item tại trang tìm kiếm - trang khóa học theo danh mục
 */
