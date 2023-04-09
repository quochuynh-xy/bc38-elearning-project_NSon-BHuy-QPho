import { https } from "../../services/config";
import "./style.scss";
import logo from "../../assets/img/logo_wide.png";
import { Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionLogOut } from "../../pages/Authentication/authReducer";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const isUserLogin = useSelector((store) => store.authReducer.isUserLogin);
  const typeOfUser = useSelector(
    (store) => store.authReducer.userInfo.userBasicInfo.maLoaiNguoiDung
  );
  const [danhMucKhoaHoc, setDanhMucKhoaHoc] = useState([]);
  const [searchKey, setSeachKey] = useState("");
  document.onkeydown = (e) => {
    if (e.code === "Enter" && searchKey.trim()) {
      handleSeach();
    }
  };
  const handleSeach = () => {
    navigate("/timKiem/" + searchKey);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(actionLogOut());
    window.location.reload();
  };
  useEffect(() => {
    const promise = https.get("api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
    promise
      .then((res) => setDanhMucKhoaHoc(res.data))
      .catch((err) => console.log(err));
  }, []);
  const NavLoginStatus = () => {
    if (isUserLogin) {
      return (
        <div className="header-nav__actions avatar mr-4 md:mx-4 relative">
          <div className="profile">
            <img
              className="w-8 h-8 rounded-sm"
              src="https://i.pravatar.cc/150?img=56"
              alt="avatar"
            />
            <div className="avatar__action absolute z-10">
              <ul>
                <li>
                  <Link to="/caNhan">Trang cá nhân</Link>
                </li>
                {typeOfUser === "GV" ? (
                  <li className="cursor-pointer"><Link to="/admin">Quản lý</Link></li>
                ) : null}
                <li
                  onClick={handleLogOut}
                  className="text-red-700 cursor-pointer"
                >
                  Đăng xuất
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header-nav__actions actions">
          <Link className="login-btn" to="/thamGia">
            Đăng nhập
          </Link>
        </div>
      );
    }
  };
  return (
    <header className="desktop-header">
      <div className="nav-bar container mx-auto flex items-center justify-around lg:justify-between">
        <Link to="/" className="header__logo hidden md:block basis-2/12">
          <img className="h-14 mx-auto" src={logo} alt="EdemyLogo" />
        </Link>
        <div className="header__searh-input basis-8/12 md:basis-4/12 mx-6 ">
          <div className="input w-full">
            <form className="flex h-10 items-center justify-center" action="">
              <input
                value={searchKey}
                onChange={(e) => setSeachKey(e.target.value)}
                className="h-full w-full outline-none pl-6 text-sm md:text-base border border-solid border-stone-200 rounded-full"
                type="text"
                placeholder="Bạn muốn học gì hôm nay?"
              />
              <button
                onClick={handleSeach}
                type="button"
                className="h-full pl-4 w-14 rounded-r-full text-xl -ml-14 hover:text-purple-800 hover:scale-125 duration-500"
              >
                <HiMagnifyingGlass />
              </button>
            </form>
          </div>
        </div>
        <nav className="header__nav flex items-center justify-end">
          <ul className="header-nav__menus hidden lg:flex font-semibold justify-center">
            <li className="nav-lever-1 relative">
              <Link className="nav-lever-1__item">Danh mục</Link>
              <ul className="nav-lever-2 absolute z-10 left-0">
                {!danhMucKhoaHoc.length ? (
                  <p className="nav-lever-2__item">Loading...</p>
                ) : (
                  danhMucKhoaHoc.map((item, index) => (
                    <li className="nav-lever-2__item" key={index}>
                      <Link to={`/danhMuc/${item.maDanhMuc}`}>
                        {item.tenDanhMuc}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </li>
            <li className="nav-lever-1">
              <Link to="/tatCaKhoaHoc" className="nav-lever-1__item">
                Khóa học
              </Link>
            </li>
            <li className="nav-lever-1">
              <Link className="nav-lever-1__item">Blog</Link>
            </li>
            <li className="nav-lever-1">
              <Link className="nav-lever-1__item">Thông tin</Link>
            </li>
          </ul>
          <NavLoginStatus />
        </nav>
      </div>
    </header>
  );
};
export default Header;
