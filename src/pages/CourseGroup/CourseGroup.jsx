import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ItemWide from "../../components/CourseItemWide/ItemWide";
import { actionFetchKhoaHocTheoDanhMuc } from "./courseGroupReducer";
import FilterBar from "../../components/FilterBar/FilterBar";
import Layout from "../../HOCs/Layout";
import "animate.css";
import Pagination from "../../components/Pagination/Pagination";
import _ from "lodash";
import { BsFilter } from "react-icons/bs";
import Header from "../../components/Header/Header";
import { actionDangKyKhoaHoc, actionHuyDangKyKhoaHoc } from "./services";
import { autoLogin } from "../Authentication/services";
import { actionGetUserInfo } from "../Authentication/authReducer";
import Swal from "sweetalert2";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import Footer from "../../components/Footer/Footer";
import "./style.scss"
const CourseGroup = () => {
  // Danh sách khóa học lấy về
  const courseList = useSelector(
    (state) => state.courseGroupReducer.danhSachKhoaHoc
  );
  const loadingStatus = useSelector(
    (store) => store.courseGroupReducer.loadStatus
  );
  const userBasicInfo = useSelector(store => store.authReducer.userInfo.userBasicInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [spiltedData, setSplitedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  // Đổi tên tiêu đề
  useEffect(() => {
    document.title = "Danh mục khóa học - Edemy";
  }, []);
  // Fetch khóa học
  useEffect(() => {
    const action = actionFetchKhoaHocTheoDanhMuc(params.tenDanhMuc);
    dispatch(action);
  }, [dispatch, params.tenDanhMuc]);
  // Tách trang khóa học
  useEffect(() => {
    const newData = _.chunk(courseList, pageSize);
    if (newData.length) {
      setSplitedData(newData);
    }
  }, [courseList]);
  // Hiện số trang
  useEffect(() => {
    const page = +searchParams.get("page");
    if (page) {
      setCurrentPage(page * 1);
    } else {
      setCurrentPage(1)
    }
  }, [searchParams]);
  // Đăng ký khóa học
  const handleSubscribe = useCallback(async (maKhoaHoc) => {
    const token = localStorage.getItem("elearningToken");
    // Chưa đăng nhập
    if(!userBasicInfo?.taiKhoan) {
      Swal.fire({
        title: 'Bạn chưa đăng nhập.',
        text: "Vui lòng đăng nhập để hoàn thành thao tác!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6b21a8',
        cancelButtonColor: '#777',
        confirmButtonText: 'Đăng nhập',
        cancelButtonText: "Hủy bỏ"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/thamGia")
        }
      })
      return
    }
    const data = {
      maKhoaHoc: maKhoaHoc,
      taiKhoan: userBasicInfo.taiKhoan
    }
    try {
      let res = await actionDangKyKhoaHoc(data, token);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res.data,
        showConfirmButton: false,
        timer: 2000
      })
      let newUserData = await autoLogin(token);
      dispatch(actionGetUserInfo(newUserData.data));
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: error.response.data,
        showConfirmButton: false,
        timer: 2000
      })
    }
  }, [navigate, userBasicInfo.taiKhoan, dispatch])
  const handleUnSubscribe = useCallback(async (maKhoaHoc) => {
    const token = localStorage.getItem("elearningToken");
    const data = {
      maKhoaHoc: maKhoaHoc,
      taiKhoan: userBasicInfo.taiKhoan
    }
    try {
      let res = await actionHuyDangKyKhoaHoc(data, token);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res.data,
        showConfirmButton: false,
        timer: 2000
      })
      let newUserData = await autoLogin(token);
      dispatch(actionGetUserInfo(newUserData.data));
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: "Có lỗi xảy ra, vui lòng thử lại",
        showConfirmButton: false,
        timer: 2000
      })
    }
  }, [userBasicInfo.taiKhoan, dispatch])
  const ControlDisplay = useCallback(() => {
    if (loadingStatus === "PENDING") {
      return (
        <div className="pt-12 text-center text-xl italic">
          <p className="animate__animated animate__bounce animate__infinite">
            Đang tải dữ liệu, vui lòng chờ trong giây lát...
          </p>
        </div>
      );
    } else if (spiltedData.length) {
      if(!spiltedData[currentPage-1]) {
        return navigate("/")
      }
      return spiltedData[currentPage - 1].map((item, index) => (
        <ItemWide data={item} key={index} handleSubscribe={handleSubscribe} handleUnSubscribe={handleUnSubscribe}/>
      ));
    }
  }, [loadingStatus, spiltedData, currentPage, navigate, handleSubscribe, handleUnSubscribe]);
  const handleChangePage = (page, pageSize) => {
    setCurrentPage(page);
    setSearchParams({ page: page });
  };

  return (
    <Layout>
    <Header/>
    <SidebarNav/>
      <section className="search-info container mx-auto py-8">
        <h3 className="text-stone-800 text-2xl font-bold pb-4">
          Danh sách các khóa học{" "}
          {courseList[0] && courseList[0].danhMucKhoaHoc.tenDanhMucKhoaHoc}
        </h3>
        <div className="search-info__action flex items-end justify-between">
          <div className="search-info-action__actions">
            <button className="flex items-center justify-center text-2xl border-2 border-solid border-stone-900 h-14 w-32 hover:bg-stone-200 duration-200">
              <BsFilter />{" "}
              <span className="pl-3 text-base font-bold">Bộ lọc (0)</span>
            </button>
          </div>
          <h3 className="search-info-action__result text-xl text-stone-600 font-bold">
            {courseList.length} kết quả
          </h3>
        </div>
      </section>
      <div className="container mx-auto grid grid-cols-5">
      <FilterBar/>
      <section className="course-group col-span-5 lg:col-span-4">
        <div className="ml-auto pl-3">
          <ControlDisplay />
          <Pagination
            className="py-6"
            current={currentPage}
            total={courseList.length}
            pageSize={pageSize}
            onChange={handleChangePage}
          />
        </div>
      </section>
      </div>
      <Footer/>
    </Layout>
  );
};
export default CourseGroup;
