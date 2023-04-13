import { useSelector } from "react-redux";
import Layout from "../../HOCs/Layout";
import Header from "../../components/Header/Header";
import { Avatar } from "antd";
// import RegistedCourses from "./components/RegistedCourses/RegistedCourses";
// import UserInfomation from "./components/UserInfomation/UserInfomation";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { updateUserData } from "./services";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionGetUserInfo } from "../Authentication/authReducer";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import { useUserLoginCheck } from "../../Hooks/UserLoginCheck";
import Footer from "../../components/Footer/Footer";
const UserProfile = () => {
  const {tokenStatus} = useUserLoginCheck();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const userBasicInfo = useSelector(
    (store) => store.authReducer.userInfo.userBasicInfo
  );
  useEffect(()=> {
    if(!tokenStatus) {
      navigate("/")
    }
  }, [navigate, tokenStatus])
  useEffect(()=> {
    const update = async () => {
      try {
        let res = await updateUserData();
        dispatch(actionGetUserInfo(res.data))
      } catch (error) {
        console.log(error);
      }
    }
    update()
  }, [dispatch])
  return (
    <Layout>
      <Header />
      <SidebarNav/>
      <section className="mylearning bg-stone-900 mt-8 mb-12 lg:mb-20">
        <div className="learning-header container mx-auto py-5 text-stone-100 ">
          <h3 className="header__title lg:text-3xl font-bold font-serif">
            Thông tin tài khoản
          </h3>
        </div>
        <div className="info__tabs bg-white pt-14 lg:pt-32">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 md:gap-4">
            {/* Khu vực điều hướng */}
            <div className="navigator mb-4 col-span-2 md:col-span-1">
              <div className="flex flex-col items-center pb-2 mb-4 border-b-2 border-solid border-stone-500">
                <Avatar size={150} src="https://i.pravatar.cc/150?img=56" />
                <h3 className="font-semibold text-center mt-2 text-lg">
                  {userBasicInfo.hoTen}
                </h3>
                <p>Học viên Cybersoft</p>
              </div>
              <div id="profileLink">
                <ul className="font-semibold lg:leading-8">
                  <li>
                    <NavLink to="/caNhan" end>Thông tin hồ sơ</NavLink>
                  </li>
                  <li>
                    <NavLink to="/caNhan/khoaHocDangKy" exact="true">Khóa học của tôi</NavLink>
                  </li>
                  <li>
                    <a href="#url">Kế hoạch thanh toán</a>
                  </li>
                  <li>
                    <a href="#url">Bảo mật tài khoản</a>
                  </li>
                  <li>
                    <a href="#url">Đóng tài khoản</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Khu vực hiển thị */}
            <div className="show-data col-span-2 md:col-span-4">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </Layout>
  );
};
export default UserProfile;
