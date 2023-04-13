import { useCallback, useEffect, useState } from "react";
import Layout from "../../HOCs/Layout";
import { BsFilter } from "react-icons/bs";
import FilterBar from "../../components/FilterBar/FilterBar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchDanhSachKhoaHoc } from "./searchReducer";
import "./style.scss";
import "animate.css";
import SearchFailled from "./components/SearchFailled/SearchFailled";
import ItemWide from "../../components/CourseItemWide/ItemWide";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import _ from "lodash";
import Header from "../../components/Header/Header";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";
import { autoLogin } from "../Authentication/services";
import { actionGetUserInfo } from "../Authentication/authReducer";
import { actionDangKyKhoaHoc, actionHuyDangKyKhoaHoc } from "./services";

const SearchingCourses = () => {
  const userBasicInfo = useSelector(
    (store) => store.authReducer.userInfo.userBasicInfo
  );
  const { tuKhoa } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchResult = useSelector(
    (state) => state.searchReducer.ketQuaTimKiem
  );
  const searchStatus = useSelector((state) => state.searchReducer.searchStatus); // PENDING - DONE
  const [splitedData, setSplitedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const [searchParams, setSearchParams] = useSearchParams();
  // Hàm xử lý thao tác đăng ký - hủy đăng ký khóa học
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
        let newUserData = await autoLogin(token);
        dispatch(actionGetUserInfo(newUserData.data));
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

  useEffect(() => {
    document.title = "Edemy - Tìm kiếm";
  }, []);
  useEffect(() => {
    dispatch(actionFetchDanhSachKhoaHoc(tuKhoa));
  }, [tuKhoa, dispatch]);

  // Phân trang dữ liệu tìm kiếm trả về
  useEffect(() => {
    let newData = _.chunk(searchResult, pageSize);
    if (searchResult.length) {
      setSplitedData(newData);
    } else {
      setSplitedData([]);
    }
  }, [searchResult]);

  // Lưu vị trí trang đang xem
  useEffect(() => {
    const page = +searchParams.get("page");
    if (page) {
      setCurrentPage(page);
    }
  }, [searchParams]);

  // Quản lý việc hiển thị kết quả tìm kiếm
  const ShowResult = useCallback(() => {
    if (searchResult.length === 0) {
      return <SearchFailled />;
    } else if (searchResult.length && splitedData.length) {
      return splitedData[currentPage - 1].map((item, index) => (
        <ItemWide
          data={item}
          key={index}
          handleSubscribe={handleSubscribe}
          handleUnSubscribe={handleUnSubscribe}
        />
      ));
    }
  }, [
    searchResult.length,
    currentPage,
    splitedData,
    handleSubscribe,
    handleUnSubscribe,
  ]);
  const handleChangePage = (page, pageSize) => {
    setSearchParams({ page: page });
    setCurrentPage(page);
  };
  return (
    <Layout>
      <Header />
      <SidebarNav />
      <section className="search-info container mx-auto py-8">
        <h3 className="text-stone-800 text-2xl font-bold pb-4">
          Hiển thị kết quả cho "{tuKhoa}".
        </h3>
        <div className="search-info__action flex items-end justify-between">
          <div className="search-info-action__actions">
            <button className="flex items-center justify-center text-2xl border-2 border-solid border-stone-900 h-14 w-32 hover:bg-stone-200 duration-200">
              <BsFilter />{" "}
              <span className="pl-3 text-base font-bold">Bộ lọc (0)</span>
            </button>
          </div>
          <h3 className="search-info-action__result text-xl text-stone-600 font-bold">
            {searchResult.length} kết quả
          </h3>
        </div>
      </section>
      <section className="search-result container mx-auto grid grid-cols-5">
        <FilterBar />
        <div className="search-result__item col-span-5 lg:col-span-4 pl-4 mx-auto">
          {searchStatus === "PENDING" ? (
            <p className="text-center text-2xl text-stone-700 animate__animated animate__bounceIn infinite">
              Đang tải dữ liệu, vui lòng chờ
            </p>
          ) : (
            <ShowResult />
          )}
          <Pagination
            className="py-6"
            current={currentPage}
            total={searchResult.length}
            pageSize={pageSize}
            onChange={handleChangePage}
          />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};
export default SearchingCourses;
