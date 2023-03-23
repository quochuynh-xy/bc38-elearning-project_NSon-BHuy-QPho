import { useEffect } from "react";
import Layout from "../../HOCs/Layout";
import { BsFilter } from "react-icons/bs";
import FilterBar from "./components/FilterBar/FilterBar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchDanhSachKhoaHoc } from "./searchReducer";
import "animate.css";
import SearchFailled from "./components/SearchFailled/SearchFailled";
import ItemWide from "../../components/CourseItemWide/ItemWide";
const SearchingCourses = () => {
  const { tuKhoa } = useParams();
  const dispatch = useDispatch();
  const searchResult = useSelector(
    (state) => state.searchReducer.ketQuaTimKiem
  );
  const searchStatus = useSelector((state) => state.searchReducer.searchStatus); // PENDING - DONE
  const showResult = () => {
    if(searchResult.length === 0) {
      return <SearchFailled/>
    } else {
      return searchResult.map((result, index) => (
        <ItemWide data={result} key={index} />
      ))
    }
  }
  useEffect(() => {
    document.title = "Edemy - Tìm kiếm";
  }, []);
  useEffect(() => {
    dispatch(actionFetchDanhSachKhoaHoc(tuKhoa));
  }, [tuKhoa, dispatch]);
  return (
    <Layout>
      <header className="header h-20 bg-purple-500"></header>
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
      <FilterBar />
      <section className="search-result container mx-auto">
        <div className="search-result__item lg:w-4/5 ml-auto">
          {searchStatus === "PENDING" ? (
            <p className="text-center text-2xl text-stone-700 animate__animated animate__bounceIn infinite">
              Đang tải dữ liệu, vui lòng chờ
            </p>
          ) : (
            showResult()
          )}
        </div>
      </section>
    </Layout>
  );
};
export default SearchingCourses;
