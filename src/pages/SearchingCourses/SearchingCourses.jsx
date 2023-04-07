import { useCallback, useEffect, useState } from "react";
import Layout from "../../HOCs/Layout";
import { BsFilter } from "react-icons/bs";
import FilterBar from "../../components/FilterBar/FilterBar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchDanhSachKhoaHoc } from "./searchReducer";
import "./style.scss"
import "animate.css";
import SearchFailled from "./components/SearchFailled/SearchFailled";
import ItemWide from "../../components/CourseItemWide/ItemWide";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import _ from "lodash";
import Header from "../../components/Header/Header";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import Footer from "../../components/Footer/Footer";
const SearchingCourses = () => {
  // Gán chức năng tìm kiếm cho ô tìm kiếm 
  // Lấy từ khóa
  // Xử lý gán chức năng đăng ký - hủy đăng ký trên các item.
  const { tuKhoa } = useParams();
  const dispatch = useDispatch();
  const searchResult = useSelector(
    (state) => state.searchReducer.ketQuaTimKiem
  );
  const searchStatus = useSelector((state) => state.searchReducer.searchStatus); // PENDING - DONE
  const [splitedData, setSplitedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    document.title = "Edemy - Tìm kiếm";
  }, []);
  useEffect(() => {
    dispatch(actionFetchDanhSachKhoaHoc(tuKhoa));
  }, [tuKhoa, dispatch]);
  useEffect(() => {
    let newData = _.chunk(searchResult, pageSize);
    if (searchResult.length) {
      setSplitedData(newData);
    } else {
      setSplitedData([]);
    }
  }, [searchResult]);
  useEffect(() => {
    const page = +searchParams.get("page");
    if (page) {
      setCurrentPage(page);
    }
  }, [searchParams]);
  const ShowResult = useCallback(
    () => {
     if (searchResult.length === 0) {
       return <SearchFailled />;
     } else if (searchResult.length && splitedData.length) {
       return splitedData[currentPage - 1].map((item, index) => (
         <ItemWide data={item} key={index} />
       ));
     }
   },[searchResult.length, currentPage, splitedData])
  const handleChangePage = (page, pageSize) => {
    setSearchParams({ page: page });
    setCurrentPage(page);
  };
  return (
    <Layout>
      <Header/>
      <SidebarNav/>
      <section className="search-info container mx-auto py-8">
        <h3 className="text-stone-800 text-2xl font-bold pb-4">
          Hiển thị kết quả cho "{tuKhoa}".
        </h3>
        <div className="search-info__action flex items-end justify-between">
          <div className="search-info-action__actions">
            <button className="flex items-center justify-center text-2xl border-2 border-solid border-stone-900 h-14 w-32 hover:bg-stone-200 duration-200">
              <BsFilter />{" "}
              <span className="pl-3 text-base font-bold">Bộ lọc (2)</span>
            </button>
          </div>
          <h3 className="search-info-action__result text-xl text-stone-600 font-bold">
            {searchResult.length} kết quả
          </h3>
        </div>
      </section>
      <section className="search-result container mx-auto grid grid-cols-5">
      <FilterBar />
        <div className="search-result__item col-span-5 lg:col-span-4 pl-4 ml-auto">
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
      <Footer/>
    </Layout>
  );
};
export default SearchingCourses;
