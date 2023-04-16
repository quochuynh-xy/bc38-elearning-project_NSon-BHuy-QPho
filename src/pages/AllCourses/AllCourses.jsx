import "./style.scss";
import Layout from "../../HOCs/Layout";
import Pagination from "../../components/Pagination/Pagination";
import ItemWide from "../../components/CourseItemWide/ItemWide";
import { fetchKhoaHocPhanTrang } from "./services";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Spin } from "antd";
import { BsFilter } from "react-icons/bs";
import Header from "../../components/Header/Header";
import { actionDangKyKhoaHoc, actionHuyDangKyKhoaHoc } from "./services";
import { autoLogin } from "../Authentication/services";
import { actionGetUserInfo } from "../Authentication/authReducer";
import Swal from "sweetalert2";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import Footer from "../../components/Footer/Footer";
const AllCourses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userBasicInfo = useSelector(
    (store) => store.authReducer.userInfo.userBasicInfo
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [loadedData, setLoadedData] = useState({});
  const [courseArr, setCourseArr] = useState([]);
  const [loadStatus, setLoadStatus] = useState("PENDING"); // PENDING - DONE - FAIL
  useEffect(() => {
    const pageNumber = searchParams.get("page");
    fetchKhoaHocPhanTrang(pageNumber)
      .then((res) => {
        setLoadStatus("DONE");
        setLoadedData(res.data);
        setCourseArr(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        setLoadStatus("FAIL");
      });
  }, [searchParams]);
  const handleChangePage = (page, pageSize) => {
    setSearchParams({ ...searchParams, page: page });
    setLoadStatus("PENDING");
  };

  //Hành động theo dõi & hủy khóa học
  const handleSubscribe = useCallback(
    async (maKhoaHoc) => {
      const token = localStorage.getItem("elearningToken");
      // Chưa đăng nhập
      if (!userBasicInfo?.taiKhoan) {
        Swal.fire({
          title: "Bạn chưa đăng nhập.",
          text: "Vui lòng đăng nhập để hoàn thành thao tác!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#6b21a8",
          cancelButtonColor: "#777",
          confirmButtonText: "Đăng nhập",
          cancelButtonText: "Hủy bỏ",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/thamGia");
          }
        });
        return;
      }
      const data = {
        maKhoaHoc: maKhoaHoc,
        taiKhoan: userBasicInfo.taiKhoan,
      };
      try {
        let res = await actionDangKyKhoaHoc(data, token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 2000,
        });
        let newUserData = await autoLogin(token);
        dispatch(actionGetUserInfo(newUserData.data));
      } catch (error) {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "info",
          title: error.response.data,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    [navigate, userBasicInfo.taiKhoan, dispatch]
  );
  const handleUnSubscribe = useCallback(
    async (maKhoaHoc) => {
      const token = localStorage.getItem("elearningToken");
      const data = {
        maKhoaHoc: maKhoaHoc,
        taiKhoan: userBasicInfo.taiKhoan,
      };
      try {
        let res = await actionHuyDangKyKhoaHoc(data, token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 2000,
        });
        let newData = await autoLogin(token);
        dispatch(actionGetUserInfo(newData.data));
      } catch (error) {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Có lỗi xảy ra, vui lòng thử lại",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    [userBasicInfo.taiKhoan, dispatch]
  );
  return (
    <Layout>
      <Header />
      <SidebarNav />
      <section className="search-info container mx-auto py-8">
        <h3 className="text-stone-800 text-2xl font-bold pb-4">
          Danh sách khóa học tại Edemy.
        </h3>
        <div className="search-info__action flex items-end justify-between">
          <div className="search-info-action__actions">
            <button className="flex items-center justify-center text-2xl border-2 border-solid border-stone-900 h-14 w-32 hover:bg-stone-200 duration-200">
              <BsFilter />
              <span className="pl-3 text-base font-bold">Bộ lọc (0)</span>
            </button>
          </div>
          <h3 className="search-info-action__result text-xl text-stone-600 font-bold">
            Không áp dụng bộ lọc.
          </h3>
        </div>
      </section>
      <section className="container mx-auto pb-10 pt-6">
        {courseArr.map((item, index) => (
          <ItemWide
            key={index}
            data={item}
            handleSubscribe={handleSubscribe}
            handleUnSubscribe={handleUnSubscribe}
          />
        ))}
        <div className="h-8 text-center relative">
          {loadStatus !== "DONE" ? (
            <Spin className="absolute text-center" />
          ) : null}
        </div>
        <Pagination
          current={loadedData.currentPage}
          total={loadedData.totalCount}
          hideOnSinglePage={false}
          pageSize={10}
          onChange={handleChangePage}
        />
      </section>
      <Footer />
    </Layout>
  );
};
export default AllCourses;
